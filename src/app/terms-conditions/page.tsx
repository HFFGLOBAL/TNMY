import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Booking, cancellation, payment and liability terms for taxi and tour bookings with MM Mysore Travels.",
  alternates: { canonical: "/terms-conditions/" },
};

const sections = [
  {
    heading: "Booking confirmation",
    body: [
      "A booking is confirmed once we acknowledge it via WhatsApp, phone, or our online form with the vehicle type, fare, and pickup details. Please review these details before your trip — verbal quotes are always followed up with a written confirmation.",
    ],
  },
  {
    heading: "Pricing",
    body: [
      "Outstation fares are calculated on a per-kilometre basis with a minimum daily kilometre requirement, as shown on our services and pricing pages. Local packages are quoted as a fixed price for the agreed duration and coverage.",
      "Quoted fares include driver allowance, fuel, and standard tolls unless stated otherwise. State permit charges, interstate tax, parking, and any additional tolls outside the agreed route are charged separately and communicated before the trip where possible.",
      "A night surcharge applies for trips between 10 PM and 6 AM, as noted on the relevant service page.",
    ],
  },
  {
    heading: "Cancellations",
    body: [
      "You can cancel or reschedule a booking by messaging us on WhatsApp or calling us directly. Cancellations made well ahead of the pickup time do not incur a charge. Cancellations made shortly before pickup, or after a driver has already been dispatched, may incur a reasonable charge to cover the driver's travel — we will let you know the applicable amount before confirming the cancellation.",
    ],
  },
  {
    heading: "Waiting time",
    body: [
      "A reasonable waiting time is included at pickup and at stops along the route. Extended waiting beyond this — for example while sightseeing or during a shopping stop — may be charged at an hourly rate, which will be communicated by the driver or our team at the time.",
    ],
  },
  {
    heading: "Vehicle and driver",
    body: [
      "We assign a vehicle of the category you booked (sedan, SUV, tempo traveller, or bus) with a verified, licensed driver. If your exact requested model isn't available, we will provide an equivalent or better vehicle in the same category at no extra cost.",
    ],
  },
  {
    heading: "Passenger responsibility",
    body: [
      "Passengers are responsible for their personal belongings during the trip. Please follow the driver's guidance on seating capacity and luggage limits for safety. We are not liable for items left behind in the vehicle, though we will make reasonable efforts to help recover them.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "We take reasonable care to provide safe, roadworthy vehicles and experienced drivers. Our liability for any claim relating to a booking is limited to the value of that booking, except where liability cannot be limited by law (for example, in cases of death or personal injury caused by negligence).",
    ],
  },
  {
    heading: "Payment",
    body: [
      "We accept cash, UPI, credit card, debit card, and bank transfer. Payment terms (advance, partial, or on-completion) will be confirmed at the time of booking, particularly for multi-day tour packages.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms from time to time. The version published on this page at the time of your booking applies to that booking.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      `Questions about a booking or these terms can be directed to ${BUSINESS_INFO.email} or ${BUSINESS_INFO.phoneDisplay}.`,
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Terms & Conditions", href: "/terms-conditions/" }]} />

      <div className="rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-slate-900/10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: 23 July 2026</p>
        <p className="mt-4 text-slate-700">
          These terms apply to all taxi and tour bookings made with {BUSINESS_INFO.legalName}. By booking with us, you agree
          to the terms below.
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
      </div>
    </div>
  );
}
