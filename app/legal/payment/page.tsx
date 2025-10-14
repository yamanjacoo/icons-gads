import PolicyLayout from "@/components/layout/PolicyLayout";

export default function PaymentPolicyPage() {
  return (
    <PolicyLayout
      title="Payment Policy"
      subtitle="Our policy regarding payment processing and security"
      badgeText="Legal"
    >
      <h2>1. Introduction</h2>
      <p>
        This Payment Policy outlines the terms and conditions for making
        payments on the {process.env.NEXT_PUBLIC_STORE_NAME} website. By making
        a purchase on our website, you agree to comply with and be bound by this
        Payment Policy.
      </p>

      <h2>2. Payment Methods</h2>
      <p>We accept the following payment methods:</p>
      <ul>
        <li>Credit Cards (Visa, Mastercard, American Express, Discover)</li>
        <li>Debit Cards</li>
        <li>PayPal</li>
        <li>Apple Pay</li>
        <li>Google Pay</li>
      </ul>
      <p>
        The availability of certain payment methods may vary based on your
        location and other factors.
      </p>

      <h2>3. Payment Processing</h2>
      <p>
        We use Stripe as our payment processor. When you make a payment on our
        website, you will be redirected to Stripe's secure payment gateway to
        complete the transaction. Your payment information is processed directly
        by Stripe and is subject to Stripe's terms of service and privacy
        policy.
      </p>
      <p>
        By making a payment on our website, you authorize us to charge the
        payment method you provide for the amount of your purchase, including
        any applicable taxes and fees.
      </p>

      <h2>4. Currency</h2>
      <p>
        Prices on our website are listed in either Euros (EUR) or US Dollars
        (USD), depending on the specific product. We offer pricing in multiple
        currencies to accommodate our international customers. The currency is
        clearly indicated next to the price on the product page.
      </p>
      <p>
        If you are making a payment in a currency different from your local
        currency, your payment provider will convert the amount at the current
        exchange rate. Please note that your payment provider may charge a
        currency conversion fee, which is not controlled by
        {process.env.NEXT_PUBLIC_STORE_NAME}.
      </p>

      <h2>5. Taxes</h2>
      <p>
        The prices displayed on our website do not include taxes. Applicable
        taxes, such as sales tax or value-added tax (VAT), will be calculated
        and added to your total at checkout based on your location and the tax
        regulations in your jurisdiction.
      </p>
      <p>
        For customers in the European Union, VAT will be charged according to
        the VAT rate applicable in your country of residence. If you are a
        business customer in the EU with a valid VAT ID, you may be exempt from
        VAT charges. To claim this exemption, please provide your VAT ID during
        the checkout process.
      </p>

      <h2>6. Payment Security</h2>
      <p>
        We take the security of your payment information seriously and implement
        industry-standard security measures to protect your data. These measures
        include:
      </p>
      <ul>
        <li>
          Secure Socket Layer (SSL) encryption for all payment transactions;
        </li>
        <li>
          Compliance with the Payment Card Industry Data Security Standard (PCI
          DSS);
        </li>
        <li>Regular security audits and vulnerability assessments;</li>
        <li>Limited access to payment information on a need-to-know basis.</li>
      </ul>
      <p>
        While we implement these security measures, we cannot guarantee that
        unauthorized third parties will never be able to defeat our security
        measures. You acknowledge that you provide your payment information at
        your own risk.
      </p>

      <h2>7. Payment Verification</h2>
      <p>
        To protect against fraudulent transactions, we reserve the right to
        verify your payment information before processing your order. This may
        include verifying your billing address, requesting additional
        identification, or contacting your payment provider.
      </p>
      <p>
        If we are unable to verify your payment information, we may cancel your
        order and refund any amounts charged.
      </p>

      <h2>8. Recurring Payments</h2>
      <p>
        If you purchase a subscription or other product with recurring payments,
        you authorize us to charge your payment method on a recurring basis for
        the subscription period you have selected. The recurring payment will be
        processed automatically until you cancel your subscription.
      </p>
      <p>
        You can cancel your subscription at any time by logging into your
        account and following the cancellation instructions or by contacting our
        customer support team. Please note that cancellation will take effect at
        the end of your current billing period, and no refunds will be issued
        for the current billing period.
      </p>

      <h2>9. Failed Payments</h2>
      <p>
        If a payment fails, we will attempt to process the payment again within
        the next few days. If the payment continues to fail, we may suspend or
        terminate your access to the purchased products or services until the
        payment is successfully processed.
      </p>
      <p>
        It is your responsibility to ensure that your payment information is
        current and valid. You can update your payment information at any time
        by logging into your account.
      </p>

      <h2>10. Refunds</h2>
      <p>
        Our refund policy is outlined in our separate Refund Policy. Please
        refer to that policy for information about when refunds are available
        and how to request a refund.
      </p>

      <h2>11. Disputes and Chargebacks</h2>
      <p>
        If you have a concern or dispute about a charge, please contact our
        customer support team before filing a dispute with your payment provider
        or initiating a chargeback. We will work with you to resolve any issues
        and provide a refund if appropriate under our Refund Policy.
      </p>
      <p>
        If you initiate a chargeback without first attempting to resolve the
        issue with us, we reserve the right to contest the chargeback and take
        appropriate action, including suspending or terminating your account.
      </p>

      <h2>12. Changes to Payment Terms</h2>
      <p>
        We reserve the right to change our payment terms, including prices,
        payment methods, and fees, at any time. Any changes will be effective
        immediately upon posting on our website, and will not affect orders that
        have already been placed.
      </p>

      <h2>13. Contact Information</h2>
      <p>
        If you have any questions about this Payment Policy or if you need
        assistance with a payment, please contact our customer support team at:
      </p>
      <p>
        Email: payments@{process.env.NEXT_PUBLIC_STORE_NAME}.com
        <br />
        Subject: Payment Inquiry
      </p>
    </PolicyLayout>
  );
}
