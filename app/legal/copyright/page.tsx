import PolicyLayout from "@/components/layout/PolicyLayout";

export default function CopyrightPolicyPage() {
  return (
    <PolicyLayout
      title="Copyright Policy"
      subtitle="Our policy regarding copyright protection and infringement"
      badgeText="Legal"
    >
      <h2>1. Introduction</h2>
      <p>
        At {process.env.NEXT_PUBLIC_STORE_NAME}, we respect the intellectual
        property rights of others and expect our users to do the same. This
        Copyright Policy outlines our approach to copyright protection,
        ownership of our digital icon products, and procedures for addressing
        copyright infringement.
      </p>

      <h2>2. Copyright Ownership</h2>
      <p>
        All digital icons, graphics, designs, and other content available on the
        {process.env.NEXT_PUBLIC_STORE_NAME} website are protected by copyright
        laws and are owned by {process.env.NEXT_PUBLIC_STORE_NAME} or our
        licensors. The unauthorized use, reproduction, distribution, display, or
        creation of derivative works of our content is strictly prohibited
        unless expressly permitted by the applicable license agreement.
      </p>

      <h2>3. License to Use</h2>
      <p>
        When you purchase our digital icon products, you are granted a license
        to use the icons in accordance with the terms of the specific license
        agreement associated with your purchase. The license agreement outlines
        the permitted uses, restrictions, and any attribution requirements.
      </p>
      <p>
        For more information about the license terms, please refer to our
        License Agreement.
      </p>

      <h2>4. Copyright Infringement</h2>
      <p>
        Copyright infringement occurs when someone uses, reproduces,
        distributes, displays, or creates derivative works of copyrighted
        material without permission from the copyright owner or without a valid
        legal exception.
      </p>
      <p>
        Examples of copyright infringement related to our digital icon products
        include, but are not limited to:
      </p>
      <ul>
        <li>Redistributing our icons as standalone files;</li>
        <li>
          Including our icons in icon packs or design asset collections for
          redistribution;
        </li>
        <li>
          Using our icons in ways that exceed the scope of the purchased
          license;
        </li>
        <li>
          Removing or altering copyright notices or attribution information;
        </li>
        <li>
          Claiming ownership of our icons or representing them as your own work.
        </li>
      </ul>

      <h2>5. Consequences of Copyright Infringement</h2>
      <p>
        Copyright infringement is a serious matter that can result in
        significant legal and financial consequences. If we discover that you
        have infringed our copyrights, we may take one or more of the following
        actions:
      </p>
      <ul>
        <li>Send you a cease and desist notice;</li>
        <li>Terminate your account and access to our services;</li>
        <li>Seek monetary damages for the infringement;</li>
        <li>
          Pursue legal action, including seeking injunctive relief and statutory
          damages;
        </li>
        <li>Report the infringement to law enforcement authorities.</li>
      </ul>

      <h2>6. DMCA Compliance</h2>
      <p>
        {process.env.NEXT_PUBLIC_STORE_NAME} complies with the Digital
        Millennium Copyright Act (DMCA), which provides a framework for
        addressing claims of copyright infringement. If you believe that your
        copyrighted work has been used on our website in a way that constitutes
        copyright infringement, you may submit a DMCA takedown notice.
      </p>

      <h3>6.1 DMCA Takedown Notice Requirements</h3>
      <p>
        To be effective, your DMCA takedown notice must include the following
        information:
      </p>
      <ol>
        <li>
          A physical or electronic signature of the copyright owner or a person
          authorized to act on their behalf;
        </li>
        <li>
          Identification of the copyrighted work claimed to have been infringed;
        </li>
        <li>
          Identification of the material that is claimed to be infringing and
          information reasonably sufficient to permit us to locate the material;
        </li>
        <li>
          Your contact information, including your address, telephone number,
          and email address;
        </li>
        <li>
          A statement that you have a good faith belief that the use of the
          material in the manner complained of is not authorized by the
          copyright owner, its agent, or the law;
        </li>
        <li>
          A statement, under penalty of perjury, that the information in the
          notification is accurate and that you are authorized to act on behalf
          of the copyright owner.
        </li>
      </ol>

      <h3>6.2 Where to Send DMCA Notices</h3>
      <p>
        You can submit your DMCA takedown notice to our designated copyright
        agent at:
      </p>
      <p>
        Email: copyright@{process.env.NEXT_PUBLIC_STORE_NAME}.com
        <br />
        Subject: DMCA Takedown Notice
      </p>

      <h3>6.3 Counter-Notification</h3>
      <p>
        If you believe that your content was removed due to a mistake or
        misidentification, you may submit a counter-notification. To be
        effective, your counter-notification must include the following
        information:
      </p>
      <ol>
        <li>Your physical or electronic signature;</li>
        <li>
          Identification of the material that has been removed and the location
          where it appeared before it was removed;
        </li>
        <li>
          A statement, under penalty of perjury, that you have a good faith
          belief that the material was removed or disabled as a result of
          mistake or misidentification;
        </li>
        <li>
          Your contact information, including your address, telephone number,
          and email address;
        </li>
        <li>
          A statement that you consent to the jurisdiction of the federal
          district court for the judicial district in which your address is
          located, or if your address is outside the United States, for any
          judicial district in which {process.env.NEXT_PUBLIC_STORE_NAME} may be
          found;
        </li>
        <li>
          A statement that you will accept service of process from the person
          who provided the original notification.
        </li>
      </ol>
      <p>
        You can submit your counter-notification to our designated copyright
        agent at the same address provided for DMCA takedown notices.
      </p>

      <h2>7. Repeat Infringers</h2>
      <p>
        We have a policy of terminating the accounts of users who are repeat
        infringers of copyright. A repeat infringer is a user who has been
        notified of infringing activity more than twice and/or has had
        infringing content removed from our service more than twice.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We reserve the right to modify this Copyright Policy at any time. If we
        make material changes to this policy, we will notify you by email or by
        posting a notice on our website prior to the changes becoming effective.
      </p>

      <h2>9. Contact Information</h2>
      <p>
        If you have any questions about this Copyright Policy, please contact us
        at:
      </p>
      <p>
        Email: copyright@{process.env.NEXT_PUBLIC_STORE_NAME}.com
        <br />
        Subject: Copyright Policy Inquiry
      </p>
    </PolicyLayout>
  );
}
