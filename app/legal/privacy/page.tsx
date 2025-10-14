import PolicyLayout from "@/components/layout/PolicyLayout";

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information"
      badgeText="Legal"
    >
      <h2>1. Introduction</h2>
      <p>
        At {process.env.NEXT_PUBLIC_STORE_NAME}, we respect your privacy and are
        committed to protecting your personal data. This Privacy Policy explains
        how we collect, use, disclose, and safeguard your information when you
        visit our website or make a purchase.
      </p>
      <p>
        Please read this Privacy Policy carefully. If you do not agree with the
        terms of this Privacy Policy, please do not access the site or use our
        services.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We collect several types of information from and about users of our
        website, including:
      </p>

      <h3>2.1 Personal Data</h3>
      <p>
        Personal Data refers to information that identifies you or can be used
        to identify you. We may collect the following types of Personal Data:
      </p>
      <ul>
        <li>
          <strong>Contact Information:</strong> Name, email address, mailing
          address, and phone number.
        </li>
        <li>
          <strong>Account Information:</strong> Username, password, and account
          preferences.
        </li>
        <li>
          <strong>Payment Information:</strong> Credit card details, billing
          address, and other payment details. Note that payment information is
          processed by our payment processor, Stripe, and we do not store
          complete credit card information on our servers.
        </li>
        <li>
          <strong>Transaction Information:</strong> Details about purchases or
          transactions made on our site.
        </li>
        <li>
          <strong>Communication Information:</strong> Records of your
          communications with us, including support requests and feedback.
        </li>
      </ul>

      <h3>2.2 Usage Data</h3>
      <p>
        We may also collect information about how you access and use our
        website, including:
      </p>
      <ul>
        <li>
          <strong>Technical Information:</strong> IP address, browser type and
          version, operating system, device information, and other technology
          identifiers on the devices you use to access our website.
        </li>
        <li>
          <strong>Usage Information:</strong> Information about your visits to
          our website, including the pages you view, the time and duration of
          your visits, and the links you click.
        </li>
        <li>
          <strong>Location Information:</strong> General location information
          based on your IP address.
        </li>
      </ul>

      <h2>3. How We Collect Information</h2>
      <p>We collect information from you in the following ways:</p>
      <ul>
        <li>
          <strong>Direct Interactions:</strong> Information you provide when you
          create an account, make a purchase, contact us, or otherwise interact
          with our website.
        </li>
        <li>
          <strong>Automated Technologies:</strong> As you navigate through our
          website, we may use cookies, web beacons, and other tracking
          technologies to collect information about your equipment, browsing
          actions, and patterns.
        </li>
        <li>
          <strong>Third Parties:</strong> We may receive information about you
          from third parties, such as business partners, analytics providers,
          and payment processors.
        </li>
      </ul>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar tracking technologies to track activity on
        our website and to hold certain information.
      </p>
      <p>
        Cookies are small data files that are placed on your device when you
        visit a website. We use the following types of cookies:
      </p>
      <ul>
        <li>
          <strong>Essential Cookies:</strong> These cookies are necessary for
          the website to function properly and cannot be switched off in our
          systems.
        </li>
        <li>
          <strong>Analytical/Performance Cookies:</strong> These cookies allow
          us to recognize and count the number of visitors and to see how
          visitors move around our website when they are using it.
        </li>
        <li>
          <strong>Functionality Cookies:</strong> These cookies enable the
          website to provide enhanced functionality and personalization.
        </li>
        <li>
          <strong>Targeting Cookies:</strong> These cookies record your visit to
          our website, the pages you have visited, and the links you have
          followed.
        </li>
      </ul>
      <p>
        You can set your browser to refuse all or some browser cookies, or to
        alert you when websites set or access cookies. If you disable or refuse
        cookies, please note that some parts of this website may become
        inaccessible or not function properly.
      </p>

      <h2>5. How We Use Your Information</h2>
      <p>
        We use the information we collect about you for various purposes,
        including:
      </p>
      <ul>
        <li>To provide, maintain, and improve our website and services;</li>
        <li>
          To process and fulfill your orders, including to process payments and
          provide customer support;
        </li>
        <li>To create and manage your account;</li>
        <li>
          To communicate with you, including to respond to your inquiries and
          send you updates about your orders;
        </li>
        <li>
          To send you marketing communications about our products, services, and
          promotions, if you have opted in to receive such communications;
        </li>
        <li>To personalize your experience on our website;</li>
        <li>
          To analyze how our website is used and to improve our website and
          services;
        </li>
        <li>
          To detect, prevent, and address technical issues, security breaches,
          and fraudulent activities;
        </li>
        <li>
          To comply with legal obligations and enforce our terms and policies.
        </li>
      </ul>

      <h2>6. Disclosure of Your Information</h2>
      <p>
        We may disclose your personal information to the following categories of
        recipients:
      </p>
      <ul>
        <li>
          <strong>Service Providers:</strong> We may share your information with
          third-party service providers who perform services on our behalf, such
          as payment processing, data analysis, email delivery, hosting
          services, and customer service.
        </li>
        <li>
          <strong>Business Partners:</strong> We may share your information with
          our business partners to offer you certain products, services, or
          promotions.
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose your information
          where required by law, regulation, legal process, or governmental
          request.
        </li>
        <li>
          <strong>Business Transfers:</strong> If we are involved in a merger,
          acquisition, or sale of all or a portion of our assets, your
          information may be transferred as part of that transaction.
        </li>
        <li>
          <strong>With Your Consent:</strong> We may disclose your information
          for any other purpose with your consent.
        </li>
      </ul>

      <h2>7. Data Security</h2>
      <p>
        We have implemented appropriate technical and organizational measures to
        protect the security of your personal information. However, please note
        that no method of transmission over the Internet or method of electronic
        storage is 100% secure. While we strive to use commercially acceptable
        means to protect your personal information, we cannot guarantee its
        absolute security.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We will retain your personal information only for as long as necessary
        to fulfill the purposes for which we collected it, including for the
        purposes of satisfying any legal, accounting, or reporting requirements.
      </p>
      <p>
        To determine the appropriate retention period for personal information,
        we consider the amount, nature, and sensitivity of the personal
        information, the potential risk of harm from unauthorized use or
        disclosure of your personal information, the purposes for which we
        process your personal information, and whether we can achieve those
        purposes through other means, and the applicable legal requirements.
      </p>

      <h2>9. Your Rights</h2>
      <p>
        Depending on your location, you may have certain rights regarding your
        personal information, including:
      </p>
      <ul>
        <li>
          <strong>Access:</strong> You may have the right to request access to
          your personal information.
        </li>
        <li>
          <strong>Correction:</strong> You may have the right to request that we
          correct inaccurate or incomplete personal information about you.
        </li>
        <li>
          <strong>Deletion:</strong> You may have the right to request that we
          delete your personal information in certain circumstances.
        </li>
        <li>
          <strong>Restriction:</strong> You may have the right to request that
          we restrict the processing of your personal information in certain
          circumstances.
        </li>
        <li>
          <strong>Data Portability:</strong> You may have the right to receive a
          copy of your personal information in a structured, machine-readable
          format.
        </li>
        <li>
          <strong>Objection:</strong> You may have the right to object to our
          processing of your personal information in certain circumstances.
        </li>
        <li>
          <strong>Withdraw Consent:</strong> If we rely on your consent to
          process your personal information, you have the right to withdraw your
          consent at any time.
        </li>
      </ul>
      <p>
        To exercise any of these rights, please contact us using the contact
        information provided at the end of this Privacy Policy.
      </p>

      <h2>10. Children's Privacy</h2>
      <p>
        Our website is not intended for children under the age of 16. We do not
        knowingly collect personal information from children under 16. If you
        are a parent or guardian and you believe that your child has provided us
        with personal information, please contact us so that we can take
        necessary actions.
      </p>

      <h2>11. International Data Transfers</h2>
      <p>
        Your personal information may be transferred to, and processed in,
        countries other than the country in which you are resident. These
        countries may have data protection laws that are different from the laws
        of your country.
      </p>
      <p>
        Specifically, our website servers are located in the United States, and
        our third-party service providers and partners operate around the world.
        This means that when we collect your personal information, we may
        process it in any of these countries.
      </p>
      <p>
        However, we have taken appropriate safeguards to require that your
        personal information will remain protected in accordance with this
        Privacy Policy.
      </p>

      <h2>12. Changes to Our Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page and
        updating the "Last Updated" date at the top of this Privacy Policy.
      </p>
      <p>
        You are advised to review this Privacy Policy periodically for any
        changes. Changes to this Privacy Policy are effective when they are
        posted on this page.
      </p>

      <h2>13. Contact Information</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>
      <p>Email: privacy@{process.env.NEXT_PUBLIC_STORE_NAME}.com</p>
    </PolicyLayout>
  );
}
