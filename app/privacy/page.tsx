import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Zagros Dataware LLC and the Zagros Dataware website.",
};

const LAST_UPDATED = "September 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <article className="px-[5%] pt-40 pb-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-secondary">Zagros Dataware LLC</p>
        <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-secondary">Last updated: {LAST_UPDATED}</p>

        <div className="prose prose-slate mt-10 max-w-none prose-headings:text-primary prose-a:text-accent-dark prose-strong:text-primary">
          <p>
            Zagros Dataware LLC (&quot;Zagros Dataware&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) respects your privacy and is
            committed to protecting the personal information you provide when
            using our website.
          </p>

          <p>
            This Privacy Policy explains what information we may collect, how
            we use it, how we protect it, and what rights you may have
            regarding your personal information.
          </p>

          <p>
            This Privacy Policy applies to our website at{" "}
            <a href="https://zagros-dataware.github.io/" target="_blank" rel="noopener noreferrer">
              https://zagros-dataware.github.io/
            </a>{" "}
            and to communications you initiate with us through the contact
            methods provided on the website.
          </p>

          <h2>1. Who We Are</h2>

          <p>
            Zagros Dataware LLC is an IT products, consulting, and business
            process optimization company registered in Armenia.
          </p>

          <div className="not-prose my-6 rounded-lg border border-black/5 bg-bg-light p-6">
            <dl className="space-y-3 text-sm">
              <div className="flex flex-col gap-1 sm:flex-row">
                <dt className="font-semibold text-primary sm:w-32">Company:</dt>
                <dd className="text-secondary">Zagros Dataware LLC</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row">
                <dt className="font-semibold text-primary sm:w-32">Country:</dt>
                <dd className="text-secondary">Armenia (Yerevan)</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row">
                <dt className="font-semibold text-primary sm:w-32">Email:</dt>
                <dd className="text-secondary">
                  <a href="mailto:honarmand.ali.ha@gmail.com" className="text-accent-dark hover:underline">
                    honarmand.ali.ha@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <p>
            For privacy-related questions or requests, you may contact us
            using the email address above.
          </p>

          <h2>2. Information We Collect</h2>

          <p>
            We aim to collect only information that is reasonably necessary
            for operating our website and responding to inquiries.
          </p>

          <h3>2.1 Information You Provide to Us</h3>

          <p>
            If you contact us by email, WhatsApp, Telegram, or another
            communication channel, we may receive information such as:
          </p>

          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Telephone number or messaging account identifier</li>
            <li>Company or organization name</li>
            <li>The content of your message</li>
            <li>Any other information you voluntarily provide</li>
          </ul>

          <p>
            We use this information primarily to respond to your inquiry,
            communicate with you, provide requested information, and discuss
            or provide our services.
          </p>

          <h3>2.2 Technical Information</h3>

          <p>
            Our website is a static site with no server-side backend, user
            accounts, or database — we do not run analytics, advertising
            scripts, or tracking cookies of our own. That said, certain
            technical information may still be processed automatically by
            our hosting provider or other infrastructure providers when you
            visit.
          </p>

          <p>This may include:</p>

          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Device information</li>
            <li>Date and time of access</li>
            <li>Requested pages or resources</li>
            <li>Referring website</li>
            <li>Technical information necessary to maintain security and reliability</li>
          </ul>

          <p>
            We do not use this information to identify you personally unless
            this is necessary for security, legal, or operational purposes.
          </p>

          <h2>3. How We Use Personal Information</h2>

          <p>We may use personal information for the following purposes:</p>

          <ul>
            <li>To operate and maintain our website</li>
            <li>To respond to inquiries and requests</li>
            <li>To communicate with potential or existing clients</li>
            <li>To provide information about our services</li>
            <li>To prepare proposals or respond to business requests</li>
            <li>To maintain website security</li>
            <li>To detect and prevent abuse, fraud, or unauthorized activity</li>
            <li>To comply with applicable legal obligations</li>
            <li>To protect our legal rights and legitimate business interests</li>
          </ul>

          <p>
            <strong>We do not sell your personal information.</strong>
          </p>

          <h2>4. Legal Basis for Processing</h2>

          <p>
            Where applicable data protection laws such as the EU General Data
            Protection Regulation (GDPR) apply, we process personal
            information on one or more of the following legal bases:
          </p>

          <ul>
            <li>
              <strong>Consent:</strong> where you have voluntarily provided
              consent for a specific purpose.
            </li>
            <li>
              <strong>Contract or pre-contractual measures:</strong> where
              processing is necessary to provide requested services or take
              steps at your request before entering into a contract.
            </li>
            <li>
              <strong>Legitimate interests:</strong> where processing is
              reasonably necessary for operating our business, communicating
              with users, maintaining website security, or protecting our
              legal interests, provided that these interests do not override
              your fundamental rights and freedoms.
            </li>
            <li>
              <strong>Legal obligations:</strong> where processing is
              necessary to comply with applicable law.
            </li>
          </ul>

          <h2>5. Cookies and Similar Technologies</h2>

          <p>
            Our website does not currently set any cookies of its own, and we
            do not use analytics, advertising, or behavioral tracking. The
            only technologies in use are the standard mechanisms your browser
            uses to load a static webpage.
          </p>

          <p>
            If we introduce analytics, advertising, tracking, or other
            non-essential cookies in the future, we will update this Privacy
            Policy and, where required by applicable law, provide an
            appropriate consent mechanism before using such technologies.
          </p>

          <h2>6. Third-Party Services</h2>

          <p>
            Our website relies on third-party infrastructure for hosting.
            Specifically, the website is hosted through GitHub Pages, and
            GitHub may process certain technical information (such as
            standard server access logs) when visitors access GitHub-hosted
            websites. Such processing is governed by{" "}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">
              GitHub&apos;s own privacy statement
            </a>
            , not this one.
          </p>

          <p>
            We also communicate with you through third-party services —
            email, WhatsApp, or Telegram — when you choose to contact us
            through those services.
          </p>

          <p>
            Third-party services operate under their own privacy policies and
            terms. We recommend reviewing the privacy policies of those
            services when using them.
          </p>

          <h2>7. External Links</h2>

          <p>
            Our website contains links to external websites — including
            client projects in our portfolio, and the messaging services
            above.
          </p>

          <p>
            We are not responsible for the privacy practices, security, or
            content of third-party websites.
          </p>

          <p>
            When you follow an external link, your interaction with that
            third party is governed by the third party&apos;s applicable
            terms and privacy policy.
          </p>

          <h2>8. Sharing of Personal Information</h2>

          <p>We do not sell or rent your personal information.</p>

          <p>
            We may disclose personal information to third parties only when
            reasonably necessary for purposes such as:
          </p>

          <ul>
            <li>Providing or maintaining our services</li>
            <li>Hosting and operating our website</li>
            <li>Communicating with you</li>
            <li>Maintaining security</li>
            <li>Complying with legal obligations</li>
            <li>Establishing, exercising, or defending legal claims</li>
            <li>Protecting the rights, property, or safety of Zagros Dataware, our users, or others</li>
          </ul>

          <p>
            Where we use service providers to process personal information on
            our behalf, we seek to use appropriate contractual and
            organizational safeguards where required by applicable law.
          </p>

          <h2>9. International Data Transfers</h2>

          <p>
            Because we use service providers and communication platforms
            located in different countries, your information may be
            processed outside Armenia and, where applicable, outside the
            European Economic Area (EEA).
          </p>

          <p>
            Where applicable data protection laws require safeguards for
            international transfers, we will take reasonable steps to ensure
            that appropriate legal and technical safeguards are used.
          </p>

          <h2>10. Data Retention</h2>

          <p>
            We retain personal information only for as long as reasonably
            necessary for the purposes described in this Privacy Policy.
          </p>

          <p>The retention period may depend on:</p>

          <ul>
            <li>The nature of the information</li>
            <li>The purpose for which it was collected</li>
            <li>The nature of our relationship with you</li>
            <li>Legal, accounting, or regulatory requirements</li>
            <li>The establishment, exercise, or defense of legal claims</li>
          </ul>

          <p>
            When personal information is no longer required, we will take
            reasonable steps to delete or anonymize it.
          </p>

          <h2>11. Data Security</h2>

          <p>
            We take reasonable technical and organizational measures to
            protect personal information against unauthorized access,
            alteration, disclosure, loss, or destruction.
          </p>

          <p>
            However, no method of transmission or electronic storage is
            completely secure. Therefore, we cannot guarantee absolute
            security of information transmitted to or stored by us.
          </p>

          <h2>12. Your Privacy Rights</h2>

          <p>
            Depending on where you live and which privacy laws apply to you,
            you may have rights concerning your personal information.
          </p>

          <p>These may include the right to:</p>

          <ul>
            <li>Request access to your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Request restriction of certain processing</li>
            <li>Object to certain processing</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Request portability of certain information</li>
            <li>Lodge a complaint with a competent data protection authority</li>
          </ul>

          <p>
            To exercise a privacy right, please contact us at{" "}
            <a href="mailto:honarmand.ali.ha@gmail.com">honarmand.ali.ha@gmail.com</a>.
          </p>

          <p>
            We may need to verify your identity before responding to certain
            requests.
          </p>

          <h2>13. Children&apos;s Privacy</h2>

          <p>Our website and services are not directed specifically at children.</p>

          <p>
            We do not knowingly collect personal information from children
            where prohibited by applicable law.
          </p>

          <p>
            If you believe that a child has provided us with personal
            information, please contact us so that we can take appropriate
            action.
          </p>

          <h2>14. Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time to reflect
            changes to our services, technology, legal requirements, or
            privacy practices.
          </p>

          <p>
            When we make changes, we will update the &quot;Last
            updated&quot; date at the top of this page.
          </p>

          <p>We encourage you to periodically review this Privacy Policy.</p>

          <h2>15. Contact Us</h2>

          <p>
            If you have questions about this Privacy Policy, our privacy
            practices, or your personal information, please contact us:
          </p>

          <div className="not-prose my-6 rounded-lg border border-black/5 bg-bg-light p-6">
            <p className="font-semibold text-primary">Zagros Dataware LLC</p>
            <p className="mt-2 text-sm text-secondary">
              Email:{" "}
              <a href="mailto:honarmand.ali.ha@gmail.com" className="text-accent-dark hover:underline">
                honarmand.ali.ha@gmail.com
              </a>
            </p>
            <p className="mt-1 text-sm text-secondary">
              Website:{" "}
              <a
                href="https://zagros-dataware.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-dark hover:underline"
              >
                zagros-dataware.github.io
              </a>
            </p>
          </div>

          <p className="mt-12 border-t border-black/5 pt-6 text-sm text-secondary">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </div>
    </article>
  );
}
