export default function Policies() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Policies
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
              Our commitment to transparency and fair business practices
            </p>
          </div>
        </div>
      </section>

      {/* Policies Content */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Privacy Policy */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Privacy Policy
              </h2>
              <div className="mt-8 space-y-6 text-base text-gray-500">
                <p>
                  <strong>Last updated:</strong> March 23, 2025
                </p>
                <p>
                  At {process.env.NEXT_PUBLIC_STORE_NAME}, we take your privacy
                  seriously. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our
                  website or make a purchase.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Information We Collect
                </h3>
                <p>
                  We collect information that you provide directly to us when
                  you register for an account, make a purchase, sign up for our
                  newsletter, or contact us for support.
                </p>
                <p>This information may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information</li>
                  <li>Billing and payment information</li>
                  <li>Account credentials</li>
                  <li>Transaction history</li>
                  <li>Communication preferences</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  How We Use Your Information
                </h3>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process transactions and deliver purchased products</li>
                  <li>Manage your account and provide customer support</li>
                  <li>
                    Send transactional emails and updates about your purchases
                  </li>
                  <li>Send marketing communications (if you've opted in)</li>
                  <li>Improve our website and products</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Data Security
                </h3>
                <p>
                  We implement appropriate security measures to protect your
                  personal information. However, no method of transmission over
                  the Internet or electronic storage is 100% secure, so we
                  cannot guarantee absolute security.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Third-Party Services
                </h3>
                <p>
                  We use trusted third-party services for payment processing,
                  email communication, and analytics. These services have their
                  own privacy policies, and we recommend reviewing them.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Your Rights
                </h3>
                <p>
                  Depending on your location, you may have certain rights
                  regarding your personal information, such as the right to
                  access, correct, or delete your data. To exercise these
                  rights, please contact us.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Contact Us
                </h3>
                <p>
                  If you have any questions about our Privacy Policy, please
                  contact us at privacy@{process.env.NEXT_PUBLIC_STORE_NAME}
                  .com.
                </p>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="mb-16" id="terms">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Terms of Service
              </h2>
              <div className="mt-8 space-y-6 text-base text-gray-500">
                <p>
                  <strong>Last updated:</strong> March 23, 2025
                </p>
                <p>
                  These Terms of Service ("Terms") govern your access to and use
                  of the {process.env.NEXT_PUBLIC_STORE_NAME} website and
                  services. By accessing or using our services, you agree to be
                  bound by these Terms.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Account Registration
                </h3>
                <p>
                  To access certain features of our service, you may need to
                  register for an account. You must provide accurate and
                  complete information and keep your account information
                  updated.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Purchases and Payments
                </h3>
                <p>
                  All purchases are final and non-refundable, except as provided
                  in our refund policy. Prices for our products are subject to
                  change without notice. We reserve the right to refuse service
                  to anyone for any reason.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Intellectual Property
                </h3>
                <p>
                  The {process.env.NEXT_PUBLIC_STORE_NAME} service and its
                  original content, features, and functionality are owned by
                  {process.env.NEXT_PUBLIC_STORE_NAME} and are protected by
                  international copyright, trademark, and other intellectual
                  property laws.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  User Conduct
                </h3>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Use our service in any way that violates any applicable law
                    or regulation
                  </li>
                  <li>
                    Attempt to interfere with the proper working of the service
                  </li>
                  <li>
                    Bypass any measures we may use to prevent or restrict access
                    to the service
                  </li>
                  <li>
                    Redistribute or resell our icons without proper licensing
                  </li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Limitation of Liability
                </h3>
                <p>
                  In no event shall {process.env.NEXT_PUBLIC_STORE_NAME} be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages, including without limitation, loss of
                  profits, data, use, goodwill, or other intangible losses.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Changes to Terms
                </h3>
                <p>
                  We reserve the right to modify or replace these Terms at any
                  time. It is your responsibility to review these Terms
                  periodically for changes.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Contact Us
                </h3>
                <p>
                  If you have any questions about these Terms, please contact us
                  at terms@{process.env.NEXT_PUBLIC_STORE_NAME}.com.
                </p>
              </div>
            </div>

            {/* License Agreement */}
            <div id="license">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                License Agreement
              </h2>
              <div className="mt-8 space-y-6 text-base text-gray-500">
                <p>
                  <strong>Last updated:</strong> March 23, 2025
                </p>
                <p>
                  This License Agreement ("License") governs the use of icons
                  purchased from {process.env.NEXT_PUBLIC_STORE_NAME}. By
                  purchasing and downloading our icons, you agree to be bound by
                  the terms of this License.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  License Types
                </h3>
                <p>We offer different license types based on your purchase:</p>
                <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">
                  Starter License
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use in personal and small commercial projects</li>
                  <li>Up to 1 developer/designer</li>
                  <li>Cannot be used in products for resale</li>
                </ul>
                <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">
                  Professional License
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use in commercial projects</li>
                  <li>Up to 5 developers/designers</li>
                  <li>Can be used in a single end product for sale</li>
                </ul>
                <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">
                  Business License
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use in multiple commercial projects</li>
                  <li>Up to 20 developers/designers</li>
                  <li>Can be used in multiple end products for sale</li>
                </ul>
                <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">
                  Enterprise License
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Unlimited commercial use</li>
                  <li>Unlimited developers/designers</li>
                  <li>Can be used in unlimited end products for sale</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Prohibited Uses
                </h3>
                <p>Regardless of the license purchased, you may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Redistribute or resell the icons as standalone files</li>
                  <li>
                    Include the icons in icon packs or design asset collections
                    for redistribution
                  </li>
                  <li>
                    Use the icons in a way that suggests
                    {process.env.NEXT_PUBLIC_STORE_NAME} endorses your product
                  </li>
                  <li>Use the icons in any illegal or defamatory context</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Attribution
                </h3>
                <p>
                  Attribution is not required but is appreciated. You may credit
                  {process.env.NEXT_PUBLIC_STORE_NAME} in your project
                  documentation, website footer, or about page.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  License Transfers
                </h3>
                <p>
                  Licenses cannot be transferred to another person or entity
                  without written permission from
                  {process.env.NEXT_PUBLIC_STORE_NAME}.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Contact Us
                </h3>
                <p>
                  If you have any questions about this License Agreement, please
                  contact us at license@{process.env.NEXT_PUBLIC_STORE_NAME}
                  .com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
