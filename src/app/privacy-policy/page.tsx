import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MM Mysore Travels collects, uses and protects information shared when you book a taxi or tour.",
  alternates: { canonical: "/privacy-policy/" },
};

const sections = [
  {
    heading: "Information we collect",
    body: [
      "When you book a taxi, tour package, or contact us through our website, WhatsApp, phone, or booking form, we collect information you provide directly, such as your name, phone number, email address, pickup and drop locations, travel dates, and passenger count.",
      "If you browse our website, we may also collect basic technical information — such as your browser type, device, and pages visited — through standard web server logs and analytics tools, to help us understand how the site is used and to fix issues.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use the information you share to confirm and fulfil your booking, coordinate pickup with drivers, send trip-related updates, respond to enquiries, and provide customer support.",
      "We may also use your contact details to follow up on a booking enquiry or to share offers relevant to services you've asked about. You can ask us to stop this at any time by messaging us on WhatsApp or emailing us.",
    ],
  },
  {
    heading: "Sharing of information",
    body: [
      `We do not sell your personal information. We share booking details (such as name, phone number, and pickup/drop points) only with the driver assigned to your trip, so the trip can be completed.`,
      "We may disclose information if required to do so by law, or to protect the safety and rights of our customers, drivers, or the public.",
    ],
  },
  {
    heading: "WhatsApp and phone communication",
    body: [
      "A large part of our booking and support process happens over WhatsApp and phone calls. Messages and call details exchanged for booking purposes are retained for support and record-keeping, consistent with WhatsApp's own privacy policy for the platform itself.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We retain booking and contact information for as long as necessary to provide our services, maintain business records, and meet legal or accounting requirements. You can request that we delete your personal information, subject to any records we're required to keep by law.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      `You can ask us what personal information we hold about you, request a correction, or request deletion at any time by writing to ${BUSINESS_INFO.email} or messaging us on WhatsApp.`,
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time to reflect changes in our practices. The latest version will always be available on this page.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      `If you have questions about this privacy policy or how your information is handled, contact us at ${BUSINESS_INFO.email} or ${BUSINESS_INFO.phoneDisplay}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy/" }]} />

      <div className="rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-slate-900/10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: 23 July 2026</p>
        <p className="mt-4 text-slate-700">
          {BUSINESS_INFO.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what information we
          collect when you use our website or book a taxi or tour with us, and how we use it.
        </p>

        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold text-slate-900">{s.heading}</h2>
              <div className="mt-2 space-y-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-600">For bookings, use {ROUTES.BOOK_TAXI}.</p>
      </div>
    </div>
  );
}
