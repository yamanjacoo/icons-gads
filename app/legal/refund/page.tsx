import MainNavbar from "@/components/MainNavbar";
import NewFooter from "@/components/NewFooter";

export default function RefundPolicyPage() {
  const ownerName = process.env.NEXT_PUBLIC_MADE_BY || "";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-white">
      <MainNavbar></MainNavbar>
      <h1 className="text-4xl mb-8 mt-24">Refund Policy</h1>

      <div className="text-lg mb-8">
        Owner: Individual Entrepreneur {ownerName}
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-3xl mb-6">1. Introduction</h2>
          <div className="space-y-4">
            <p className="text-lg">
              At {process.env.NEXT_PUBLIC_STORE_NAME}, we provide high-quality
              digital icon products. This Refund Policy outlines our policy
              regarding purchases made through our website.
            </p>
            <p className="text-lg">
              By purchasing our digital icon products, you agree to the terms of
              this Refund Policy. Please read this policy carefully before
              making a purchase.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl mb-6">2. Digital Nature of Products</h2>
          <p className="text-lg">
            {process.env.NEXT_PUBLIC_STORE_NAME} sells digital icon products
            that are delivered electronically. Due to the digital nature of our
            products and the inability to "return" digital goods, all sales are
            final and we do not offer refunds.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">3. Refund Policy</h2>
          <p className="text-lg">
            We do not provide refunds for digital products once the purchase is
            complete. All sales are final. Please carefully review the product
            details before making a purchase.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">4. Customer Support</h2>
          <p className="text-lg">
            While we do not offer refunds, we are committed to customer
            satisfaction. If you experience any issues with your purchase or
            have questions about the product, please contact us immediately at{" "}
            {process.env.NEXT_PUBLIC_EMAIL}.
          </p>
          <p className="text-lg mt-4">
            Our support team will work with you to resolve any technical issues
            or answer any questions you may have about using our digital
            products.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">5. Technical Assistance</h2>
          <p className="text-lg">
            If you experience technical difficulties with accessing or using our
            digital products, please contact us with details about the issue. We
            will make reasonable efforts to assist you in resolving any
            technical problems related to accessing or using the purchased
            products.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">6. Product Updates</h2>
          <p className="text-lg">
            We may occasionally release updates to our digital products. These
            updates will be made available to customers who have purchased the
            product. The availability and frequency of updates are at our sole
            discretion.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">7. Exceptions</h2>
          <p className="text-lg">
            We reserve the right to make exceptions to this Refund Policy on a
            case-by-case basis, at our sole discretion. Any exceptions made are
            one-time accommodations and do not constitute a change to this
            policy or set a precedent for future requests.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">8. Changes to This Policy</h2>
          <p className="text-lg">
            We reserve the right to modify this Refund Policy at any time. If we
            make material changes to this policy, we will notify you by email or
            by posting a notice on our website prior to the changes becoming
            effective.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">9. Contact Information</h2>
          <p className="text-lg mb-4">
            If you have any questions about this Refund Policy or need
            assistance with your purchase, please contact us at:
          </p>
          <p className="text-lg">
            Owner: Individual Entrepreneur {ownerName}
            <br />
            Email: {process.env.NEXT_PUBLIC_EMAIL}
          </p>
        </section>
        <NewFooter></NewFooter>
      </div>
    </div>
  );
}
