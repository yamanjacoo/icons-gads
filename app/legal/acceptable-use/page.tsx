import PolicyLayout from "@/components/layout/PolicyLayout";

export default function AcceptableUsePolicyPage() {
  return (
    <PolicyLayout
      title="Acceptable Use Policy"
      subtitle="Guidelines for acceptable use of our digital icon products"
      badgeText="Legal"
    >
      <h2>1. Introduction</h2>
      <p>
        This Acceptable Use Policy ("Policy") outlines the acceptable and
        prohibited uses of {process.env.NEXT_PUBLIC_STORE_NAME}' digital icon
        products ("Icons"). By purchasing, downloading, or using our Icons, you
        agree to comply with this Policy.
      </p>
      <p>
        This Policy is designed to ensure that our Icons are used in a manner
        that is legal, ethical, and consistent with the terms of our License
        Agreement. Violation of this Policy may result in the termination of
        your license and other legal actions.
      </p>

      <h2>2. Acceptable Uses</h2>
      <p>
        You may use our Icons for the following purposes, subject to the terms
        of your specific license type:
      </p>
      <ul>
        <li>
          Incorporation into websites, web applications, mobile applications,
          desktop applications, and other digital products;
        </li>
        <li>
          Use in digital marketing materials, social media posts, presentations,
          and documents;
        </li>
        <li>
          Modification of the Icons, including changing colors, sizes, and other
          properties, to suit your needs;
        </li>
        <li>
          Use in products or services that you create for clients, subject to
          the limitations of your license type;
        </li>
        <li>
          Use in products that you sell to end users, subject to the limitations
          of your license type;
        </li>
        <li>Use in educational or instructional materials;</li>
        <li>Use in personal projects and portfolios.</li>
      </ul>

      <h2>3. Prohibited Uses</h2>
      <p>
        The following uses of our Icons are strictly prohibited, regardless of
        your license type:
      </p>

      <h3>3.1 Illegal or Harmful Uses</h3>
      <ul>
        <li>
          Using the Icons in any way that violates any applicable local, state,
          national, or international law or regulation;
        </li>
        <li>
          Using the Icons to promote, encourage, or facilitate illegal
          activities;
        </li>
        <li>
          Using the Icons in connection with the exploitation of minors in any
          way;
        </li>
        <li>
          Using the Icons to harass, abuse, stalk, threaten, defame, or
          otherwise infringe or violate the rights of any third party;
        </li>
        <li>
          Using the Icons to promote or incite violence, terrorism, or hatred
          against individuals or groups based on race, ethnicity, religion,
          gender, disability, sexual orientation, or any other characteristic.
        </li>
      </ul>

      <h3>3.2 Offensive or Inappropriate Uses</h3>
      <ul>
        <li>
          Using the Icons in pornographic, obscene, or sexually explicit
          materials;
        </li>
        <li>
          Using the Icons in materials that are defamatory, libelous, or
          knowingly false;
        </li>
        <li>
          Using the Icons in materials that are discriminatory or promote
          discrimination;
        </li>
        <li>
          Using the Icons in materials that are deceptive, misleading, or
          fraudulent;
        </li>
        <li>
          Using the Icons in a way that could reasonably be considered
          offensive, inappropriate, or harmful to
          {process.env.NEXT_PUBLIC_STORE_NAME}' reputation.
        </li>
      </ul>

      <h3>3.3 Intellectual Property Violations</h3>
      <ul>
        <li>
          Redistributing, sublicensing, selling, leasing, or otherwise
          transferring the Icons as standalone files;
        </li>
        <li>
          Including the Icons in icon packs, design asset collections, or
          similar products for redistribution;
        </li>
        <li>
          Using the Icons in a way that suggests
          {process.env.NEXT_PUBLIC_STORE_NAME} endorses your product or service;
        </li>
        <li>
          Registering or attempting to register trademarks or copyrights that
          incorporate the Icons;
        </li>
        <li>
          Using the Icons in a way that infringes on the intellectual property
          rights of others;
        </li>
        <li>
          Using the Icons in a way that competes with
          {process.env.NEXT_PUBLIC_STORE_NAME} or our products;
        </li>
        <li>
          Removing or altering any copyright notices, watermarks, or other
          proprietary notices from the Icons.
        </li>
      </ul>

      <h3>3.4 Technical Violations</h3>
      <ul>
        <li>
          Using the Icons in a way that exceeds the scope of your purchased
          license;
        </li>
        <li>
          Reverse engineering, decompiling, or disassembling the Icons or any
          software provided with the Icons;
        </li>
        <li>
          Using automated systems or software to extract data from our website
          or services (screen scraping, web harvesting, data mining, etc.);
        </li>
        <li>
          Attempting to gain unauthorized access to our systems or networks.
        </li>
      </ul>

      <h2>4. Examples of Prohibited Uses</h2>
      <p>
        To provide clarity, here are some specific examples of prohibited uses:
      </p>
      <ul>
        <li>
          Using our Icons in a logo or trademark without purchasing the
          appropriate license;
        </li>
        <li>
          Creating an icon pack or design resource that includes our Icons and
          selling or distributing it;
        </li>
        <li>
          Using our Icons in an app or website that promotes illegal activities,
          such as piracy or drug trafficking;
        </li>
        <li>
          Using our Icons in materials that promote hate speech or
          discrimination;
        </li>
        <li>
          Using our Icons in a way that implies
          {process.env.NEXT_PUBLIC_STORE_NAME} endorses a political candidate or
          cause;
        </li>
        <li>
          Using our Icons in a pornographic or adult-oriented website or
          application;
        </li>
        <li>
          Creating a competing icon marketplace or service using our Icons;
        </li>
        <li>Claiming our Icons as your own original work.</li>
      </ul>

      <h2>5. Reporting Violations</h2>
      <p>
        If you become aware of any violation of this Policy, please report it to
        us at abuse@{process.env.NEXT_PUBLIC_STORE_NAME}.com. Please include as
        much detail as possible, including:
      </p>
      <ul>
        <li>The specific Icons being misused;</li>
        <li>The nature of the violation;</li>
        <li>Where the violation can be found (URL, app name, etc.);</li>
        <li>Any other relevant information.</li>
      </ul>
      <p>
        We will investigate all reports of violations and take appropriate
        action.
      </p>

      <h2>6. Consequences of Violations</h2>
      <p>
        If we determine that you have violated this Policy, we may take one or
        more of the following actions:
      </p>
      <ul>
        <li>Issue a warning;</li>
        <li>Temporarily or permanently suspend your access to our services;</li>
        <li>Terminate your license to use our Icons;</li>
        <li>Seek monetary damages for the violation;</li>
        <li>Pursue legal action, including seeking injunctive relief;</li>
        <li>Report the violation to law enforcement authorities.</li>
      </ul>
      <p>
        The specific action taken will depend on the nature and severity of the
        violation, as well as any history of previous violations.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We reserve the right to modify this Policy at any time. If we make
        material changes to this Policy, we will notify you by email or by
        posting a notice on our website prior to the changes becoming effective.
      </p>
      <p>
        Your continued use of our Icons after the effective date of the revised
        Policy constitutes your acceptance of the changes. If you do not agree
        to the revised Policy, you must stop using our Icons.
      </p>

      <h2>8. Contact Information</h2>
      <p>
        If you have any questions about this Acceptable Use Policy, please
        contact us at:
      </p>
      <p>
        Email: legal@{process.env.NEXT_PUBLIC_STORE_NAME}.com
        <br />
        Subject: Acceptable Use Policy Inquiry
      </p>
    </PolicyLayout>
  );
}
