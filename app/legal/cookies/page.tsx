import PolicyLayout from "@/components/layout/PolicyLayout";

export default function CookiePolicyPage() {
  return (
    <PolicyLayout
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies"
      badgeText="Legal"
    >
      <h2>1. Introduction</h2>
      <p>
        This Cookie Policy explains how {process.env.NEXT_PUBLIC_STORE_NAME}
        ("we", "us", or "our") uses cookies and similar technologies when you
        visit our website
        ("Website"). This policy provides you with information about how we use
        cookies, what types of cookies we use, your choices regarding cookies,
        and how you can manage them.
      </p>
      <p>
        By using our Website, you consent to the use of cookies in accordance
        with this Cookie Policy. If you do not accept the use of cookies, please
        disable them as explained below or refrain from using our Website.
      </p>

      <h2>2. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are stored on your device (computer,
        tablet, or mobile) when you visit a website. They are widely used to
        make websites work more efficiently, provide a better user experience,
        and give website owners information about how their site is used.
      </p>
      <p>
        Cookies may be either "persistent" cookies or "session" cookies. A
        persistent cookie remains on your device for a specified period of time,
        while a session cookie is deleted when you close your browser.
      </p>

      <h2>3. Types of Cookies We Use</h2>
      <p>We use the following types of cookies on our Website:</p>

      <h3>3.1 Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the Website to function properly. They
        enable basic functions like page navigation, secure areas access, and
        shopping cart functionality. The Website cannot function properly
        without these cookies, and they cannot be disabled in our systems.
      </p>

      <h3>3.2 Functional Cookies</h3>
      <p>
        These cookies enable the Website to provide enhanced functionality and
        personalization. They may be set by us or by third-party providers whose
        services we have added to our pages. If you do not allow these cookies,
        some or all of these services may not function properly.
      </p>

      <h3>3.3 Analytical/Performance Cookies</h3>
      <p>
        These cookies allow us to count visits and traffic sources so we can
        measure and improve the performance of our Website. They help us know
        which pages are the most and least popular and see how visitors move
        around the Website. All information these cookies collect is aggregated
        and therefore anonymous.
      </p>

      <h3>3.4 Marketing/Targeting Cookies</h3>
      <p>
        These cookies may be set through our Website by our advertising
        partners. They may be used by those companies to build a profile of your
        interests and show you relevant advertisements on other websites. They
        do not directly store personal information but are based on uniquely
        identifying your browser and internet device.
      </p>

      <h2>4. Third-Party Cookies</h2>
      <p>
        In addition to our own cookies, we may also use various third-party
        cookies to report usage statistics of the Website, deliver
        advertisements on and through the Website, and so on. These cookies may
        include:
      </p>
      <ul>
        <li>Google Analytics cookies for website analytics</li>
        <li>Google Ads cookies for advertising purposes</li>
        <li>Stripe cookies for payment processing</li>
        <li>
          Social media cookies (Facebook, Twitter, LinkedIn) for sharing and
          marketing
        </li>
      </ul>

      <h2>5. Cookie Management</h2>
      <p>
        Most web browsers allow you to manage your cookie preferences. You can
        set your browser to refuse cookies, or to alert you when cookies are
        being sent. The methods for doing so vary from browser to browser, and
        from version to version.
      </p>
      <p>
        You can also use our cookie preference center, accessible via the
        "Cookie Preferences" link in the footer of our Website, to manage which
        optional cookies you allow.
      </p>
      <p>
        Please note that if you disable cookies, some features of our Website
        may not function properly.
      </p>

      <h2>6. Do Not Track Signals</h2>
      <p>
        Some browsers have a "Do Not Track" feature that lets you tell websites
        that you do not want to have your online activities tracked. At this
        time, we do not respond to browser "Do Not Track" signals, but we do
        provide you the option to opt out of interest-based advertising as
        described above.
      </p>

      <h2>7. GDPR and Cookie Consent</h2>
      <p>
        Under the EU General Data Protection Regulation (GDPR) and the ePrivacy
        Directive, we are required to obtain your consent for the use of
        non-essential cookies. When you first visit our Website, you will be
        presented with a cookie banner that allows you to accept or decline
        non-essential cookies.
      </p>

      <h2>8. California Consumer Privacy Act (CCPA)</h2>
      <p>
        Under the California Consumer Privacy Act (CCPA), California residents
        have the right to opt-out of the "sale" of their personal information.
        Some cookies on our Website may involve the sharing of personal
        information with third parties in a way that constitutes a "sale" under
        the CCPA. You can opt-out of these cookies by selecting "Necessary Only"
        in our cookie preference center.
      </p>

      <h2>9. Changes to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in
        technology, regulation, or our business practices. Any changes will
        become effective when we post the revised Cookie Policy on our Website.
        We encourage you to periodically review this page for the latest
        information on our cookie practices.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have any questions about our use of cookies or this Cookie
        Policy, please contact us at:
      </p>
      <p>
        Email: privacy@{process.env.NEXT_PUBLIC_STORE_NAME}.com
        <br />
        Subject: Cookie Policy Inquiry
      </p>
    </PolicyLayout>
  );
}
