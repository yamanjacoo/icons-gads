import PolicyLayout from "@/components/layout/PolicyLayout";

export default function DeliveryPolicyPage() {
  return (
    <PolicyLayout
      title="Shipping and Delivery Policy"
      subtitle="Our policy regarding the delivery of digital icon products"
      badgeText="Legal"
    >
      <h2>1. Introduction</h2>
      <p>
        This Shipping and Delivery Policy outlines how
        {process.env.NEXT_PUBLIC_STORE_NAME} delivers digital icon products
        ("Icons") to customers after purchase. Since our products are digital in
        nature, traditional shipping methods do not apply. Instead, we provide
        electronic delivery of our Icons.
      </p>

      <h2>2. Digital Delivery</h2>
      <p>
        All {process.env.NEXT_PUBLIC_STORE_NAME} products are delivered
        electronically. We do not offer physical shipping of any products. After
        completing your purchase, you will receive access to download your Icons
        through one or more of the following methods:
      </p>
      <ul>
        <li>Immediate download from our website;</li>
        <li>Download links sent to your registered email address;</li>
        <li>Access through your account on our website.</li>
      </ul>

      <h2>3. Delivery Timeframe</h2>
      <p>
        In most cases, delivery of our Icons is immediate or within minutes of
        completing your purchase. However, in some cases, there may be a delay
        of up to 24 hours due to payment processing, verification, or technical
        issues.
      </p>
      <p>
        If you have not received your download links or access to your purchased
        Icons within 24 hours, please contact our customer support team at
        {process.env.NEXT_PUBLIC_EMAIL}
      </p>

      <h2>4. Delivery Confirmation</h2>
      <p>
        Upon successful purchase, you will receive an order confirmation email
        that includes:
      </p>
      <ul>
        <li>Your order number;</li>
        <li>A summary of your purchase;</li>
        <li>Instructions for accessing your Icons;</li>
        <li>Download links (if applicable);</li>
        <li>Information about your license terms.</li>
      </ul>
      <p>
        Please save this email for future reference. You may need it to access
        your Icons again or to contact customer support.
      </p>

      <h2>5. Download Access Period</h2>
      <p>
        You will have access to download your purchased Icons for a period of at
        least 12 months from the date of purchase. After this period, we may
        archive older purchases, but you can still request access to your Icons
        by contacting our customer support team.
      </p>
      <p>
        We recommend downloading and backing up your Icons promptly after
        purchase to ensure you have continuous access to them.
      </p>

      <h2>6. File Formats</h2>
      <p>Our Icons are delivered in the following file formats:</p>
      <ul>
        <li>SVG (Scalable Vector Graphics) - Editable vector format;</li>
        <li>
          PNG (Portable Network Graphics) - Raster format with transparency;
        </li>
        <li>Figma files - For use with Figma design software;</li>
        <li>
          AI (Adobe Illustrator) - For use with Adobe Illustrator (available
          with Professional, Business, and Enterprise licenses only);
        </li>
        <li>PDF - For use in documents and presentations.</li>
      </ul>
      <p>
        The specific file formats included with your purchase depend on the
        license type you have purchased.
      </p>

      <h2>7. System Requirements</h2>
      <p>To access and use our Icons, you will need:</p>
      <ul>
        <li>
          A modern web browser (Chrome, Firefox, Safari, Edge) for downloading
          the Icons;
        </li>
        <li>
          An internet connection with sufficient bandwidth for downloading;
        </li>
        <li>
          Appropriate software for viewing and editing the Icons (e.g., a vector
          editing program for SVG files, Figma for Figma files);
        </li>
        <li>
          Sufficient storage space on your device for the downloaded files.
        </li>
      </ul>

      <h2>8. Download Issues</h2>
      <p>
        If you experience any issues downloading your Icons, please try the
        following troubleshooting steps:
      </p>
      <ol>
        <li>Check your internet connection;</li>
        <li>Try using a different web browser;</li>
        <li>Clear your browser's cache and cookies;</li>
        <li>
          Disable any download blockers or security software that might be
          interfering;
        </li>
        <li>Try downloading from a different device.</li>
      </ol>
      <p>
        If you continue to experience issues, please contact our customer
        support team at {process.env.NEXT_PUBLIC_EMAIL} with your order number
        and a description of the problem.
      </p>

      <h2>9. Redownloading</h2>
      <p>
        You can redownload your purchased Icons at any time during the download
        access period by logging into your account on our website and accessing
        your purchase history. If you cannot access your account or if your
        download access period has expired, please contact our customer support
        team for assistance.
      </p>

      <h2>10. Updates and Revisions</h2>
      <p>
        If we release updates or revisions to the Icons you have purchased, you
        will be notified by email. The availability of updates depends on your
        license type:
      </p>
      <ul>
        <li>Starter License: Minor updates only;</li>
        <li>Professional License: Minor and major updates for 6 months;</li>
        <li>Business License: Minor and major updates for 12 months;</li>
        <li>
          Enterprise License: Minor and major updates for the duration of the
          license.
        </li>
      </ul>

      <h2>11. Delivery to Multiple Users</h2>
      <p>
        If your license allows for multiple users (e.g., Professional, Business,
        or Enterprise licenses), you can share the Icons with the authorized
        number of users within your organization. However, you are responsible
        for ensuring that all users comply with the terms of the License
        Agreement.
      </p>
      <p>
        We do not provide separate delivery or access for each user. It is your
        responsibility to distribute the Icons to authorized users within your
        organization.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We reserve the right to modify this Shipping and Delivery Policy at any
        time. If we make material changes to this Policy, we will notify you by
        email or by posting a notice on our website prior to the changes
        becoming effective.
      </p>

      <h2>13. Contact Information</h2>
      <p>
        If you have any questions about this Shipping and Delivery Policy or if
        you need assistance with downloading your Icons, please contact our
        customer support team at:
      </p>
      <p>
        Email: {process.env.NEXT_PUBLIC_EMAIL}
        <br />
        Subject: Delivery Inquiry
      </p>
    </PolicyLayout>
  );
}
