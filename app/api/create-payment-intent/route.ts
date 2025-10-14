// app/api/create-payment-intent/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
  maxNetworkRetries: 3, // Built-in Stripe retry logic
  timeout: 10000, // 10 second timeout
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      amount, 
      currency = 'eur', // Default to EUR for iDEAL and Bancontact compatibility
      email, 
      planName, 
      paymentMethod = 'card',
      customerName // Add customer name to request body
    } = body;

    // Validate required fields
    if (!amount || !email || !planName) {
      return NextResponse.json(
        { error: 'Missing required fields: amount, email, and planName are required' },
        { status: 400 }
      );
    }

    // Validate customer name is provided
    if (!customerName || customerName.trim().length < 2) {
      return NextResponse.json(
        { error: 'Customer name is required and must be at least 2 characters' },
        { status: 400 }
      );
    }

    // Validate amount is a positive number
    if (typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json(
        { error: 'Amount must be a positive number' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // For iDEAL and Bancontact, currency must be EUR
    const finalCurrency = ['ideal', 'bancontact'].includes(paymentMethod) ? 'eur' : currency;

    // Validate currency for specific payment methods
    if ((paymentMethod === 'ideal' || paymentMethod === 'bancontact') && finalCurrency !== 'eur') {
      return NextResponse.json(
        { error: `${paymentMethod} payments require EUR currency` },
        { status: 400 }
      );
    }

    // Get merchant domain from environment variables
    const merchantDomain = process.env.NEXT_PUBLIC_DOMAIN || 
                           process.env.NEXT_PUBLIC_WEBSITE_URL || 
                           process.env.NEXT_PUBLIC_APP_URL || 
                           'localhost';

    // Clean up the domain (remove protocol if present)
    const cleanDomain = merchantDomain.replace(/^https?:\/\//, '').replace(/\/$/, '');

    // Create payment intent configuration
    const paymentIntentData: Stripe.PaymentIntentCreateParams = {
      amount: Math.round(amount * 100), // Convert to cents and ensure it's an integer
      currency: finalCurrency,
      receipt_email: email,
      statement_descriptor_suffix: cleanDomain.slice(0, 10), // Max 10 chars for suffix
      metadata: {
        email,
        customer_name: customerName.trim(),
        plan: planName,
        payment_method_type: paymentMethod,
        merchant_domain: cleanDomain,
        created_at: new Date().toISOString(),
      },
    };

    // Configure payment methods based on selection
    switch (paymentMethod) {
      case 'ideal':
        paymentIntentData.payment_method_types = ['ideal'];
        paymentIntentData.payment_method_options = {
          ideal: {
            // iDEAL specific options can go here if needed
          },
        };
        break;

      case 'bancontact':
        paymentIntentData.payment_method_types = ['bancontact'];
        paymentIntentData.payment_method_options = {
          bancontact: {
            preferred_language: 'en', // or 'fr', 'de', 'nl' based on user preference
          },
        };
        break;

      case 'apple_pay':
      case 'google_pay':
        // For Apple Pay and Google Pay, use automatic payment methods
        // The Payment Request API will handle the specific payment method
        paymentIntentData.automatic_payment_methods = {
          enabled: true,
        };
        break;

      default:
        // For card payments and others, enable automatic payment methods
        paymentIntentData.automatic_payment_methods = {
          enabled: true,
        };
        break;
    }

    console.log('Creating payment intent with data:', {
      amount: paymentIntentData.amount,
      currency: paymentIntentData.currency,
      email: email,
      customerName: customerName,
      paymentMethod: paymentMethod,
      merchantDomain: cleanDomain,
      timestamp: new Date().toISOString(),
    });

    // Create payment intent with error handling
    let paymentIntent: Stripe.PaymentIntent;
    
    try {
      paymentIntent = await stripe.paymentIntents.create(paymentIntentData);
    } catch (stripeError) {
      console.error('Stripe API error:', stripeError);
      
      if (stripeError instanceof Stripe.errors.StripeError) {
        // Handle specific Stripe errors
        switch (stripeError.type) {
          case 'StripeConnectionError':
            return NextResponse.json(
              { 
                error: 'Unable to connect to payment processor. Please check your internet connection and try again.',
                type: 'connection_error',
                code: stripeError.code
              },
              { status: 503 } // Service Unavailable
            );
            
          case 'StripeAPIError':
            return NextResponse.json(
              { 
                error: 'Payment processor is temporarily unavailable. Please try again in a moment.',
                type: 'api_error',
                code: stripeError.code
              },
              { status: 502 } // Bad Gateway
            );
            
          case 'StripeRateLimitError':
            return NextResponse.json(
              { 
                error: 'Too many requests. Please wait a moment and try again.',
                type: 'rate_limit_error',
                code: stripeError.code
              },
              { status: 429 } // Too Many Requests
            );
            
          case 'StripeInvalidRequestError':
            return NextResponse.json(
              { 
                error: 'Invalid payment request. Please check your information and try again.',
                type: 'invalid_request_error',
                code: stripeError.code
              },
              { status: 400 }
            );
            
          case 'StripeAuthenticationError':
            console.error('Stripe authentication error - check API keys');
            return NextResponse.json(
              { 
                error: 'Payment system configuration error. Please contact support.',
                type: 'authentication_error'
              },
              { status: 500 }
            );
            
          default:
            return NextResponse.json(
              { 
                error: `Payment processor error: ${stripeError.message}`,
                type: stripeError.type,
                code: stripeError.code
              },
              { status: 400 }
            );
        }
      } else {
        throw stripeError; // Re-throw if it's not a Stripe error
      }
    }

    console.log('Payment intent created successfully:', {
      id: paymentIntent.id,
      status: paymentIntent.status,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      merchantDomain: cleanDomain,
    });

    // Validate that we have a client secret
    if (!paymentIntent.client_secret) {
      console.error('Payment intent created but no client secret returned');
      return NextResponse.json(
        { error: 'Payment intent creation failed - no client secret' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      status: paymentIntent.status,
    });

  } catch (error) {
    console.error('Unexpected error creating payment intent:', error);
    
    // Handle non-Stripe errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'An unexpected error occurred while processing your payment. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}