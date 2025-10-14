import PolicyLayout from "@/components/layout/PolicyLayout";

export default function TermsOfServicePage() {
  const ownerName = process.env.NEXT_PUBLIC_MADE_BY || "";

  return (
    <PolicyLayout
      title="Terms of Service"
      subtitle="Please read these terms carefully before using our services"
      badgeText="Legal"
    >
      <div className="text-lg mb-8">
        Owner: Individual Entrepreneur {ownerName}
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-3xl mb-6">1. Introduction</h2>
          <p className="text-lg">
            Welcome to {process.env.NEXT_PUBLIC_STORE_NAME}. These Terms of
            Service ("Terms") govern your access to and use of the{" "}
            {process.env.NEXT_PUBLIC_STORE_NAME}
            website, services, and digital icon products (collectively, the
            "Services"). By accessing or using our Services, you agree to be
            bound by these Terms. If you do not agree to these Terms, you may
            not access or use the Services.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">2. Definitions</h2>
          <p className="text-lg">
            "{process.env.NEXT_PUBLIC_STORE_NAME}", "we", "us", or "our" refers
            to Individual Entrepreneur {ownerName}, who owns and operates the
            Services.
          </p>
          <p className="text-lg mt-4">
            "User", "you", or "your" refers to any individual or entity that
            accesses or uses the Services.
          </p>
          <p className="text-lg mt-4">
            "Content" refers to all digital icons, graphics, designs, text,
            images, videos, information, data, and other materials available
            through the Services.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">3. Account Registration</h2>
          <p className="text-lg">
            To access certain features of the Services, you may need to register
            for an account. You agree to provide accurate, current, and complete
            information during the registration process and to update such
            information to keep it accurate, current, and complete.
          </p>
          <p className="text-lg mt-4">
            You are responsible for safeguarding your account credentials and
            for all activities that occur under your account. You agree to
            notify us immediately of any unauthorized use of your account or any
            other breach of security.
          </p>
          <p className="text-lg mt-4">
            We reserve the right to disable any user account at any time in our
            sole discretion, including if we believe that you have violated
            these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">4. License to Use Services</h2>
          <p className="text-lg">
            Subject to your compliance with these Terms, we grant you a limited,
            non-exclusive, non-transferable, non-sublicensable license to access
            and use the Services for your personal or internal business
            purposes.
          </p>
          <p className="text-lg mt-4">
            The use of our digital icons is subject to the specific license
            terms outlined in our License Agreement, which is incorporated by
            reference into these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">5. Prohibited Conduct</h2>
          <p className="text-lg">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
            <li>
              Use the Services in any manner that could interfere with, disrupt,
              negatively affect, or inhibit other users from fully enjoying the
              Services, or that could damage, disable, overburden, or impair the
              functioning of the Services;
            </li>
            <li>
              Circumvent any technological measure implemented by us to protect
              the Services or Content;
            </li>
            <li>
              Attempt to access or search the Services or Content or download
              Content from the Services through the use of any engine, software,
              tool, agent, device, or mechanism other than the software and/or
              search agents provided by us or other generally available
              third-party web browsers;
            </li>
            <li>
              Use the Services or Content for any commercial purpose or the
              benefit of any third party, except as expressly permitted by these
              Terms or in a separate agreement with us;
            </li>
            <li>
              Attempt to decipher, decompile, disassemble, or reverse engineer
              any of the software used to provide the Services;
            </li>
            <li>
              Violate any applicable law or regulation in connection with your
              access to or use of the Services;
            </li>
            <li>
              Impersonate any person or entity, or falsely state or otherwise
              misrepresent your affiliation with a person or entity;
            </li>
            <li>
              Collect or store personal data about other users without their
              express permission;
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl mb-6">
            6. Ownership and Intellectual Property
          </h2>
          <p className="text-lg">
            The Services and Content, including all intellectual property rights
            therein, are owned by Individual Entrepreneur {ownerName} or our
            licensors. Nothing in these Terms grants you any right, title, or
            interest in or to the Services or Content except for the limited
            license expressly set forth in these Terms and the applicable
            License Agreement.
          </p>
          <p className="text-lg mt-4">
            All trademarks, service marks, logos, trade names, and other
            proprietary designations of {process.env.NEXT_PUBLIC_STORE_NAME}{" "}
            used herein are trademarks or registered trademarks of Individual
            Entrepreneur {ownerName}. Any other trademarks, service marks,
            logos, trade names, and other proprietary designations of third
            parties used herein are the property of their respective owners.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">7. Purchases and Payment</h2>
          <p className="text-lg">
            You may purchase digital icon products through the Services. All
            purchases are subject to these Terms and our Payment Policy.
          </p>
          <p className="text-lg mt-4">
            All prices are in the currency specified on the Services and do not
            include taxes, which may be added to the purchase price. You are
            responsible for paying all fees, taxes, and other charges associated
            with your purchase.
          </p>
          <p className="text-lg mt-4">
            We use Stripe as our payment processor. By making a purchase, you
            agree to Stripe's terms of service and privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">8. No-Refund Policy</h2>
          <p className="text-lg">
            All sales are final. We do not provide refunds for digital products
            once the purchase is complete. Please carefully review the product
            details before making a purchase.
          </p>
          <p className="text-lg mt-4">
            While we do not offer refunds, we are committed to customer
            satisfaction. If you experience any issues with your purchase or
            have questions about the product, please contact us at{" "}
            {process.env.NEXT_PUBLIC_EMAIL}.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">9. Termination</h2>
          <p className="text-lg">
            We may terminate or suspend your access to the Services at any time,
            without prior notice or liability, for any reason, including if you
            breach these Terms.
          </p>
          <p className="text-lg mt-4">
            Upon termination, your right to use the Services will immediately
            cease. The following provisions will survive termination: Ownership
            and Intellectual Property, Disclaimer of Warranties, Limitation of
            Liability, Indemnification, and Governing Law and Dispute
            Resolution.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">10. Disclaimer of Warranties</h2>
          <p className="text-lg">
            THE SERVICES AND CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE"
            WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
            INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
            NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES OR CONTENT
            WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, THAT DEFECTS WILL BE
            CORRECTED, OR THAT THE SERVICES OR CONTENT ARE FREE OF VIRUSES OR
            OTHER HARMFUL COMPONENTS.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">11. Limitation of Liability</h2>
          <p className="text-lg">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
            {process.env.NEXT_PUBLIC_STORE_NAME}, ITS AFFILIATES, DIRECTORS,
            EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
            INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL,
            OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE
            OF OR INABILITY TO ACCESS OR USE THE SERVICES OR CONTENT; (B) ANY
            CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (C) ANY
            CONTENT OBTAINED FROM THE SERVICES; AND (D) UNAUTHORIZED ACCESS,
            USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED
            ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER
            LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE
            POSSIBILITY OF SUCH DAMAGE.
          </p>
          <p className="text-lg mt-4">
            IN NO EVENT WILL OUR AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO
            THE SERVICES OR CONTENT EXCEED THE GREATER OF $100 OR THE AMOUNT YOU
            PAID US IN THE 12 MONTHS PRECEDING THE DATE OF THE CLAIM.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">12. Indemnification</h2>
          <p className="text-lg">
            You agree to indemnify, defend, and hold harmless Individual
            Entrepreneur {ownerName}, its affiliates, directors, employees,
            agents, suppliers, and licensors from and against all claims,
            losses, expenses, damages, and costs, including reasonable
            attorneys' fees, arising out of or relating to (a) your access to or
            use of the Services or Content; (b) your violation of these Terms;
            (c) your violation of any rights of a third party; or (d) your
            violation of any applicable laws, rules, or regulations.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">
            13. Governing Law and Dispute Resolution
          </h2>
          <p className="text-lg">
            These Terms and any action related thereto will be governed by the
            laws of the State of Delaware, without regard to its conflict of
            laws provisions.
          </p>
          <p className="text-lg mt-4">
            Any dispute arising from or relating to the subject matter of these
            Terms shall be finally settled by arbitration in Delaware, using the
            English language in accordance with the Arbitration Rules and
            Procedures of the Judicial Arbitration and Mediation Services, Inc.
            ("JAMS") then in effect, by one commercial arbitrator with
            substantial experience in resolving intellectual property and
            commercial contract disputes, who shall be selected from the
            appropriate list of JAMS arbitrators in accordance with such rules.
            The arbitrator shall apply Delaware law consistent with the Federal
            Arbitration Act and applicable statutes of limitations and shall
            honor claims of privilege recognized at law. Judgment on the award
            may be entered in any court of competent jurisdiction.
          </p>
          <p className="text-lg mt-4">
            YOU UNDERSTAND THAT, ABSENT THIS PROVISION, YOU WOULD HAVE THE RIGHT
            TO SUE IN COURT AND HAVE A JURY TRIAL. YOU FURTHER UNDERSTAND THAT
            THE RIGHT TO DISCOVERY MAY BE MORE LIMITED IN ARBITRATION THAN IN
            COURT.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">14. Changes to Terms</h2>
          <p className="text-lg">
            We reserve the right to modify these Terms at any time. If we make
            material changes to these Terms, we will notify you by email or by
            posting a notice on our website prior to the changes becoming
            effective. Your continued use of the Services after the effective
            date of the revised Terms constitutes your acceptance of the
            changes.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">15. Severability</h2>
          <p className="text-lg">
            If any provision of these Terms is held to be invalid or
            unenforceable, such provision shall be struck and the remaining
            provisions shall be enforced to the fullest extent under law.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">16. Entire Agreement</h2>
          <p className="text-lg">
            These Terms, together with our Privacy Policy, No-Refund Policy,
            License Agreement, Acceptable Use Policy, Payment Policy, and
            Copyright Policy constitute the entire agreement between you and
            Individual Entrepreneur {ownerName}
            regarding the Services and supersede all prior agreements and
            understandings, whether written or oral.
          </p>
        </section>

        <section>
          <h2 className="text-3xl mb-6">17. Contact Information</h2>
          <p className="text-lg">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-lg mt-4">
            Owner: Individual Entrepreneur {ownerName}
            <br />
            Email: {process.env.NEXT_PUBLIC_EMAIL}
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
