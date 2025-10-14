// app/api/webhooks/stripe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Payment succeeded:', paymentIntent.id);
        
        // Handle successful payment
        const customerEmail = paymentIntent.receipt_email;
        const customerName = paymentIntent.metadata.customer_name;
        const planName = paymentIntent.metadata.plan;
        const paymentMethodType = paymentIntent.metadata.payment_method_type;
        const merchantDomain = paymentIntent.metadata.merchant_domain;
        const amount = paymentIntent.amount / 100; // Convert from cents
        const currency = paymentIntent.currency.toUpperCase();
        
        // Get the actual payment method used from the payment intent
        let actualPaymentMethod = paymentMethodType;
        if (paymentIntent.payment_method) {
          // Retrieve the payment method to get more details
          try {
            const pm = await stripe.paymentMethods.retrieve(paymentIntent.payment_method as string);
            actualPaymentMethod = pm.type;
          } catch (pmError) {
            console.log('Could not retrieve payment method details:', pmError);
          }
        }
        
        console.log(`Payment of ${currency} ${amount} for ${planName} by ${customerName} (${customerEmail}) via ${actualPaymentMethod} from ${merchantDomain}`);
        
        // Here you can:
        // - Update user access in your database
        // - Send confirmation email
        // - Grant access to paid features
        // - Create user account if doesn't exist
        // - Handle different logic for different payment methods if needed
        
        if (actualPaymentMethod === 'ideal') {
          console.log('iDEAL payment completed successfully');
          // Additional iDEAL-specific handling if needed
        } else if (actualPaymentMethod === 'bancontact') {
          console.log('Bancontact payment completed successfully');
          // Additional Bancontact-specific handling if needed
        } else if (actualPaymentMethod === 'card') {
          console.log('Card payment completed successfully');
          // This could be a direct card payment, Apple Pay, or Google Pay
          // Apple Pay and Google Pay payments come through as 'card' type
          
          // Check if this was Apple Pay or Google Pay based on metadata
          if (paymentMethodType === 'apple_pay') {
            console.log('Apple Pay payment completed successfully');
            // Additional Apple Pay-specific handling if needed
          } else if (paymentMethodType === 'google_pay') {
            console.log('Google Pay payment completed successfully');
            // Additional Google Pay-specific handling if needed
          } else {
            console.log('Regular card payment completed successfully');
          }
        }
        
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent;
        console.log('Payment failed:', failedPayment.id);
        
        const failedCustomerName = failedPayment.metadata.customer_name;
        const failedPaymentMethod = failedPayment.metadata.payment_method_type;
        const failedMerchantDomain = failedPayment.metadata.merchant_domain;
        
        console.log(`${failedPaymentMethod} payment failed for: ${failedCustomerName} (${failedPayment.receipt_email}) on ${failedMerchantDomain}`);
        
        // Handle failed payment
        // - Send failure notification
        // - Log the failure reason
        // - Handle payment method-specific failure scenarios
        
        if (failedPaymentMethod === 'ideal') {
          console.log('iDEAL payment failed - user may have canceled at bank or insufficient funds');
        } else if (failedPaymentMethod === 'bancontact') {
          console.log('Bancontact payment failed - user may have canceled at bank or insufficient funds');
        } else if (failedPaymentMethod === 'apple_pay') {
          console.log('Apple Pay payment failed - user may have canceled or authentication failed');
        } else if (failedPaymentMethod === 'google_pay') {
          console.log('Google Pay payment failed - user may have canceled or authentication failed');
        } else if (failedPaymentMethod === 'card') {
          console.log('Card payment failed - insufficient funds, declined, or other card issue');
        }
        
        break;

      case 'payment_intent.requires_action':
        const actionPayment = event.data.object as Stripe.PaymentIntent;
        console.log('Payment requires action:', actionPayment.id);
        
        // Handle payments that require additional action
        // This is less common with iDEAL/Bancontact/Apple Pay/Google Pay but can happen with 3D Secure for cards
        break;

      case 'payment_intent.processing':
        const processingPayment = event.data.object as Stripe.PaymentIntent;
        console.log('Payment is processing:', processingPayment.id);
        
        const processingMethod = processingPayment.metadata.payment_method_type;
        const processingCustomerName = processingPayment.metadata.customer_name;
        const processingMerchantDomain = processingPayment.metadata.merchant_domain;
        
        console.log(`${processingMethod} payment for ${processingCustomerName} is being processed on ${processingMerchantDomain}`);
        
        if (processingMethod === 'ideal') {
          console.log('iDEAL payment is being processed by the bank');
        } else if (processingMethod === 'bancontact') {
          console.log('Bancontact payment is being processed by the bank');
        } else if (processingMethod === 'apple_pay') {
          console.log('Apple Pay payment is being processed');
        } else if (processingMethod === 'google_pay') {
          console.log('Google Pay payment is being processed');
        }
        
        // You might want to update the user that their payment is being processed
        break;

      case 'payment_intent.canceled':
        const canceledPayment = event.data.object as Stripe.PaymentIntent;
        console.log('Payment was canceled:', canceledPayment.id);
        
        const canceledMethod = canceledPayment.metadata.payment_method_type;
        const canceledCustomerName = canceledPayment.metadata.customer_name;
        const canceledMerchantDomain = canceledPayment.metadata.merchant_domain;
        
        console.log(`${canceledMethod} payment for ${canceledCustomerName} was canceled on ${canceledMerchantDomain}`);
        
        if (canceledMethod === 'ideal') {
          console.log('iDEAL payment was canceled - user likely closed the bank flow');
        } else if (canceledMethod === 'bancontact') {
          console.log('Bancontact payment was canceled - user likely closed the bank flow');
        } else if (canceledMethod === 'apple_pay') {
          console.log('Apple Pay payment was canceled - user canceled on device');
        } else if (canceledMethod === 'google_pay') {
          console.log('Google Pay payment was canceled - user canceled the flow');
        }
        
        // Handle canceled payments
        break;

      case 'payment_method.attached':
        const paymentMethod = event.data.object as Stripe.PaymentMethod;
        console.log('Payment method attached:', paymentMethod.id);
        
        if (paymentMethod.type === 'ideal') {
          console.log('iDEAL payment method attached');
        } else if (paymentMethod.type === 'bancontact') {
          console.log('Bancontact payment method attached');
        } else if (paymentMethod.type === 'card') {
          console.log('Card payment method attached');
          
          // For card payments, check if it came from Apple Pay or Google Pay
          // Apple Pay and Google Pay will have specific wallet details
          if (paymentMethod.card?.wallet) {
            const walletType = paymentMethod.card.wallet.type;
            if (walletType === 'apple_pay') {
              console.log('Apple Pay card payment method attached');
            } else if (walletType === 'google_pay') {
              console.log('Google Pay card payment method attached');
            } else {
              console.log(`Other wallet payment method attached: ${walletType}`);
            }
          } else {
            console.log('Direct card payment method attached');
          }
        }
        break;

      default:
        console.log('Unhandled event type:', event.type);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}