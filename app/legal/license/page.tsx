import PolicyLayout from "@/components/layout/PolicyLayout";

export default function LicenseAgreementPage() {
  return (
    <PolicyLayout
      title="License Agreement"
      subtitle="Terms and conditions for using our digital icon products"
      badgeText="Legal"
    >
      <h2>1. Introduction</h2>
      <p>
        This License Agreement ("Agreement") governs your use of the digital
        icon products ("Icons") purchased from
        {process.env.NEXT_PUBLIC_STORE_NAME}. By purchasing, downloading, or
        using our Icons, you agree to be bound by the terms of this Agreement.
      </p>

      <h2>2. License Grant</h2>
      <p>
        Subject to your compliance with the terms of this Agreement and payment
        of the applicable license fee, {process.env.NEXT_PUBLIC_STORE_NAME}{" "}
        grants you a non-exclusive, non-transferable license to use the Icons in
        accordance with the specific license type you have purchased, as
        described below.
      </p>

      <h3>2.1 License Types</h3>
      <p>We offer the following license types:</p>

      <h4>2.1.1 Flexible Icons License</h4>
      <ul>
        <li>Use in personal and commercial projects</li>
        <li>Up to 3 developers/designers</li>
        <li>100+ icons in SVG & PNG formats</li>
        <li>Basic customization options</li>
        <li>Attribution not required but appreciated</li>
      </ul>

      <h4>2.1.2 Premium Icons License</h4>
      <ul>
        <li>Use in unlimited commercial projects</li>
        <li>Up to 10 developers/designers</li>
        <li>300+ premium icons in all formats (SVG, PNG, Figma)</li>
        <li>Advanced customization options</li>
        <li>Attribution not required</li>
        <li>Priority support</li>
      </ul>

      <h2>3. Permitted Uses</h2>
      <p>
        Depending on the license type you have purchased, you may use the Icons
        for the following purposes:
      </p>
      <ul>
        <li>
          Incorporate the Icons into websites, web applications, mobile
          applications, desktop applications, and other digital products;
        </li>
        <li>
          Use the Icons in digital marketing materials, social media posts,
          presentations, and documents;
        </li>
        <li>
          Modify the Icons, including changing colors, sizes, and other
          properties, to suit your needs;
        </li>
        <li>
          Use the Icons in products or services that you create for clients,
          subject to the limitations of your license type;
        </li>
        <li>
          Use the Icons in products that you sell to end users, subject to the
          limitations of your license type.
        </li>
      </ul>

      <h2>4. Prohibited Uses</h2>
      <p>Regardless of the license type you have purchased, you may not:</p>
      <ul>
        <li>
          Redistribute, sublicense, sell, lease, or otherwise transfer the Icons
          as standalone files;
        </li>
        <li>
          Include the Icons in icon packs, design asset collections, or similar
          products for redistribution;
        </li>
        <li>
          Use the Icons in a way that suggests
          {process.env.NEXT_PUBLIC_STORE_NAME} endorses your product or service;
        </li>
        <li>Use the Icons in any illegal, defamatory, or offensive context;</li>
        <li>
          Use the Icons in a way that infringes on the intellectual property
          rights of others;
        </li>
        <li>
          Register or attempt to register trademarks or copyrights that
          incorporate the Icons;
        </li>
        <li>
          Use the Icons in a way that competes with
          {process.env.NEXT_PUBLIC_STORE_NAME} or our products;
        </li>
        <li>
          Use the Icons in a way that exceeds the scope of your purchased
          license.
        </li>
      </ul>

      <h2>5. Ownership and Intellectual Property</h2>
      <p>
        The Icons are protected by copyright and other intellectual property
        laws. {process.env.NEXT_PUBLIC_STORE_NAME} retains all right, title, and
        interest in and to the Icons, including all intellectual property
        rights. This Agreement does not grant you any ownership rights to the
        Icons.
      </p>
      <p>
        Any modifications you make to the Icons are derivative works and are
        subject to the terms of this Agreement. You may not claim copyright or
        other intellectual property rights to the Icons or any derivative works
        based on the Icons.
      </p>

      <h2>6. Attribution</h2>
      <p>
        Attribution is not required for any of our license types, but it is
        appreciated. If you choose to provide attribution, you may do so by
        including a credit line such as "Icons by
        {process.env.NEXT_PUBLIC_STORE_NAME}" or a link to our website (www.
        {process.env.NEXT_PUBLIC_STORE_NAME}.com) in your product,
        documentation, or credits section.
      </p>

      <h2>7. License Duration</h2>
      <p>
        The license granted under this Agreement is perpetual, meaning it
        continues indefinitely unless terminated. The license remains valid even
        if {process.env.NEXT_PUBLIC_STORE_NAME} ceases operations or is acquired
        by another company.
      </p>

      <h2>8. License Termination</h2>
      <p>
        This license will terminate automatically if you breach any of its
        terms. Upon termination, you must cease all use of the Icons and destroy
        all copies in your possession or control.
      </p>
      <p>
        We also reserve the right to terminate your license at any time if we
        have reason to believe that you have violated this Agreement. In such
        cases, we will provide you with written notice of termination.
      </p>

      <h2>9. License Transfers</h2>
      <p>
        You may not transfer, assign, or sublicense your rights under this
        Agreement without our prior written consent. Any attempted transfer
        without our consent will be void.
      </p>

      <h2>10. Updates and Upgrades</h2>
      <p>
        This Agreement applies to all updates and upgrades to the Icons that we
        may provide to you, unless such updates or upgrades are accompanied by
        separate license terms.
      </p>
      <p>
        If you purchase a license for a specific version of the Icons, you are
        entitled to use that version indefinitely under the terms of this
        Agreement. However, you are not entitled to receive updates or new
        versions of the Icons unless you have purchased a subscription or
        upgrade.
      </p>

      <h2>11. Support and Maintenance</h2>
      <p>
        The level of support and maintenance provided depends on your license
        type. Enterprise license holders receive priority support. For all other
        license types, we provide reasonable support on a best-effort basis.
      </p>
      <p>
        Support includes assistance with downloading and using the Icons, but
        does not include custom modifications or design services.
      </p>

      <h2>12. Warranty Disclaimer</h2>
      <p>
        THE ICONS ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL
        {process.env.NEXT_PUBLIC_STORE_NAME} BE LIABLE FOR ANY CLAIM, DAMAGES,
        OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR
        OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE ICONS OR THE
        USE OR OTHER DEALINGS IN THE ICONS.
      </p>

      <h2>13. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
        {process.env.NEXT_PUBLIC_STORE_NAME} BE LIABLE FOR ANY SPECIAL,
        INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING,
        WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS
        INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS)
        ARISING OUT OF THE USE OF OR INABILITY TO USE THE ICONS, EVEN IF
        {process.env.NEXT_PUBLIC_STORE_NAME} HAS BEEN ADVISED OF THE POSSIBILITY
        OF SUCH DAMAGES.
      </p>
      <p>
        IN ANY CASE, {process.env.NEXT_PUBLIC_STORE_NAME}'S ENTIRE LIABILITY
        UNDER THIS AGREEMENT SHALL BE LIMITED TO THE AMOUNT ACTUALLY PAID BY YOU
        FOR THE ICONS.
      </p>

      <h2>14. Changes to This Agreement</h2>
      <p>
        We reserve the right to modify this Agreement at any time. If we make
        material changes to this Agreement, we will notify you by email or by
        posting a notice on our website prior to the changes becoming effective.
      </p>
      <p>
        Your continued use of the Icons after the effective date of the revised
        Agreement constitutes your acceptance of the changes. If you do not
        agree to the revised Agreement, you must stop using the Icons.
      </p>

      <h2>15. Governing Law</h2>
      <p>
        This Agreement shall be governed by and construed in accordance with the
        laws of the State of Delaware, without regard to its conflict of laws
        principles.
      </p>

      <h2>16. Contact Information</h2>
      <p>
        If you have any questions about this License Agreement, please contact
        us at:
      </p>
      <p>
        Email: license@{process.env.NEXT_PUBLIC_STORE_NAME}.com
        <br />
        Subject: License Agreement Inquiry
      </p>
    </PolicyLayout>
  );
}
