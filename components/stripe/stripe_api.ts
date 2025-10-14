// pages/api/create-subscription.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {

});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { paymentMethodId, priceId, email } = req.body;

    // Create or retrieve customer
    let customer;
    const existingCustomers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: email,
        payment_method: paymentMethodId,
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      });
    }

    // Attach payment method to customer if not already attached
    if (customer.id !== existingCustomers.data[0]?.id) {
      await stripe.paymentMethods.attach(paymentMethodId, {
        customer: customer.id,
      });
    }

    // Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      payment_settings: {
        payment_method_options: {
          card: {
            request_three_d_secure: 'automatic',
          },
        },
        payment_method_types: ['card'],
        save_default_payment_method: 'on_subscription',
      },
      expand: ['latest_invoice.payment_intent'],
      payment_behavior: 'default_incomplete',
    });

    // Handle the subscription status
    const invoice = subscription.latest_invoice as Stripe.Invoice;
    
    // Check if payment_intent exists and is expanded (object, not just ID string)
    if (invoice && typeof invoice === 'object' && 'payment_intent' in invoice) {
      const paymentIntent = invoice.payment_intent;
      
      // Check if payment_intent is expanded (object) rather than just an ID (string)
      if (paymentIntent && typeof paymentIntent === 'object') {
        const pi = paymentIntent as Stripe.PaymentIntent;
        
        if (pi.status === 'requires_action') {
          return res.status(200).json({
            subscriptionId: subscription.id,
            clientSecret: pi.client_secret,
            requiresAction: true,
          });
        } else if (pi.status === 'succeeded') {
          return res.status(200).json({
            subscriptionId: subscription.id,
            success: true,
          });
        } else {
          return res.status(400).json({
            error: 'Payment failed',
          });
        }
      }
    }
    
    // Fallback: check subscription status directly
    if (subscription.status === 'active') {
      return res.status(200).json({
        subscriptionId: subscription.id,
        success: true,
      });
    } else if (subscription.status === 'incomplete') {
      return res.status(400).json({
        error: 'Payment requires action',
      });
    } else {
      return res.status(400).json({
        error: 'Subscription creation failed',
      });
    }
  } catch (error) {
    console.error('Error creating subscription:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'An error occurred',
    });
  }
}

// pages/api/create-payment-intent.ts - Alternative approach for one-time payments
export async function createPaymentIntent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd', email } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency,
      receipt_email: email,
      metadata: {
        email,
      },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({
      error: error instanceof Error ? error.message : 'An error occurred',
    });
  }
}