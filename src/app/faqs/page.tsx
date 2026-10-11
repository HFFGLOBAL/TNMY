import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { createFAQSchema } from "@/lib/constants/schema-templates";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "FAQs | Mysore Taxi & Tour Booking",
  description:
    "Answers to common questions about booking taxis, per-km pricing, vehicle options, trip policies, and payments for Mysore taxi and tour services.",
  alternates: { canonical: "/faqs/" },
};

const faqCategories = [
  {
    category: "Booking",
    items: [
      {
        q: "How do I book a taxi with MM Mysore Travels?",
        a: "Book by WhatsApp, phone call, or our online booking form. Share your pickup location, destination, travel date, and passenger count, and we'll confirm the vehicle and fare.",
      },
      {
        q: "How far in advance should I book?",
        a: "For local Mysore sightseeing, a few hours' notice is usually enough. For outstation trips and multi-day tour packages, we recommend booking at least 1-2 days ahead, especially during weekends and holiday season, to guarantee vehicle availability.",
      },
      {
        q: "Do you provide one-way and round trips?",
        a: "Yes. We offer both one-way and round-trip options for outstation travel. Round trips generally work out cheaper per km since the vehicle doesn't need to make an empty return journey.",
      },
      {
        q: "What if I need to cancel or reschedule my booking?",
        a: "Contact us by phone or WhatsApp as early as possible if your plans change. We'll do our best to reschedule your booking to a new date at no extra cost; cancellations made close to pickup time may be subject to a charge depending on driver allocation.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        q: "What are your per-km rates for outstation trips?",
        a: "Sedan ₹12/km, SUV Ertiga ₹16/km, SUV Innova Crysta ₹18/km, Tempo Traveller ₹22/km, and Bus ₹35/km. See the full rate card on our Pricing page.",
      },
      {
        q: "Is the listed price final, or can it change?",
        a: "All prices shown on the site are marked with an asterisk (*) because outstation fares are dynamic - they depend on fuel cost, season, exact route, and vehicle availability at the time of booking. We always confirm the exact fare with you on call or WhatsApp before the trip starts.",
      },
      {
        q: "What is included in the outstation fare?",
        a: "The per-km rate includes the vehicle, driver, fuel, and driver allowance. Interstate permits, parking, and entry tickets to monuments are charged separately as applicable and are communicated upfront.",
      },
      {
        q: "Is there a minimum distance for outstation trips?",
        a: "Yes, a minimum of 300 km per day applies for outstation bookings, which is standard practice for taxi operators to cover the return leg of the journey.",
      },
      {
        q: "Is there a night travel surcharge?",
        a: "A night surcharge of ₹200-500 applies for travel between 10 PM and 6 AM, depending on the vehicle and route.",
      },
      {
        q: "Are there any hidden charges?",
        a: "No. We confirm pricing clearly before the trip. Tolls are included in the standard fare; any additional interstate permit, parking, or entry ticket charges are communicated upfront as applicable.",
      },
    ],
  },
  {
    category: "Vehicles",
    items: [
      {
        q: "Which vehicles are available?",
        a: "Sedan (4-seater, e.g. Dzire/Etios), SUV - Ertiga or Innova Crysta (6-7 seater), Tempo Traveller (12-17 seater), and Bus (30+ seater), depending on your group size and route.",
      },
      {
        q: "What's the difference between the Ertiga and Innova Crysta SUV options?",
        a: "Both seat 6-7 passengers. The Ertiga is priced at ₹16/km and suits most family or group trips, while the Innova Crysta at ₹18/km offers more legroom and a higher comfort level for longer outstation journeys.",
      },
      {
        q: "Are your drivers verified and professional?",
        a: "Yes. Our drivers are professionally trained and verified, with experience on major outstation routes including Coorg, Ooty, Wayanad, and Bangalore.",
      },
    ],
  },
  {
    category: "Tours & Coverage",
    items: [
      {
        q: "Do you offer local Mysore sightseeing packages?",
        a: "Yes, half-day (4-5 hrs / 40 km) and full-day (8-9 hrs / 80 km) local packages are available covering Mysore Palace, Chamundi Hills, Brindavan Gardens, and other city attractions.",
      },
      {
        q: "Can I customize a multi-day tour package?",
        a: "Yes. Alongside our fixed packages to Coorg, Ooty, Wayanad, Kodaikanal, Goa, and Tirupati, we also arrange fully custom multi-day itineraries based on the places and duration you choose.",
      },
      {
        q: "Do you travel outside Karnataka?",
        a: "Yes. We regularly run outstation trips into Tamil Nadu (Ooty, Kodaikanal, Tirupati), Kerala (Wayanad), and Goa, in addition to routes within Karnataka.",
      },
      {
        q: "Do you provide airport transfers?",
        a: "Yes, we offer one-way transfers between Mysore and Kempegowda International Airport (Bangalore). See current fares by vehicle type on our Pricing page.",
      },
    ],
  },
  {
    category: "Payments & Corporate",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept Cash, UPI, Credit Card, Debit Card, and Bank Transfer.",
      },
      {
        q: "Do you provide invoices for corporate travel?",
        a: "Yes, we provide GST invoices and offer monthly billing options for corporate clients booking regular business travel.",
      },
    ],
  },
];

const faqSchema = createFAQSchema(
  faqCategories.flatMap((c) => c.items.map((f) => ({ question: f.q, answer: f.a })))
);

export default function FAQsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ label: "FAQs", href: ROUTES.FAQS }]} />

      <div className="rounded-2xl bg-white ring-1 ring-slate-900/10 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Quick answers for pricing, booking, vehicle options and trip planning.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            WhatsApp booking
          </a>
          <Link
            href={ROUTES.BOOK_TAXI}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            Book online
          </Link>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        {faqCategories.map((cat) => (
          <div key={cat.category} className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{cat.category}</h2>
            <div className="space-y-4">
              {cat.items.map((f) => (
                <div key={f.q} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-slate-900">{f.q}</h3>
                  <p className="mt-2 text-slate-700">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
