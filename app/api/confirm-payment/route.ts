// app/api/confirm-payment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

export async function POST(request: NextRequest) {
  try {
    const { 
      paymentMethodId, 
      paymentIntentId, 
      email,
      paymentMethodType = 'card' 
    } = await request.json();

    if (paymentMethodType === 'ideal' || paymentMethodType === 'bancontact') {
      // For iDEAL and Bancontact, we typically don't need to manually confirm
      // The payment is confirmed through the redirect flow
      // This endpoint might be used to check the status instead
      
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
      
      return NextResponse.json({
        status: paymentIntent.status,
        paymentIntentId: paymentIntent.id,
        requiresAction: paymentIntent.status === 'requires_action',
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      // Original card payment confirmation logic
      const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
        payment_method: paymentMethodId,
        receipt_email: email,
        return_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      });

      if (paymentIntent.status === 'requires_action') {
        return NextResponse.json({
          requiresAction: true,
          clientSecret: paymentIntent.client_secret,
        });
      } else if (paymentIntent.status === 'succeeded') {
        return NextResponse.json({
          success: true,
          paymentIntentId: paymentIntent.id,
        });
      } else {
        return NextResponse.json(
          { error: 'Payment failed' },
          { status: 400 }
        );
      }
    }
  } catch (error) {
    console.error('Error confirming payment:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Payment failed' },
      { status: 500 }
    );
  }
}

// Additional endpoint to check payment status (useful for iDEAL and Bancontact)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentIntentId = searchParams.get('payment_intent_id');

    if (!paymentIntentId) {
      return NextResponse.json(
        { error: 'Payment intent ID is required' },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return NextResponse.json({
      id: paymentIntent.id,
      status: paymentIntent.status,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      payment_method_types: paymentIntent.payment_method_types,
      metadata: paymentIntent.metadata,
    });
  } catch (error) {
    console.error('Error retrieving payment intent:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to retrieve payment' },
      { status: 500 }
    );
  }
}