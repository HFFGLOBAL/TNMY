import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { createServiceSchema, createFAQSchema } from "@/lib/constants/schema-templates";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Outstation Taxi from Mysore | Coorg, Ooty, Wayanad, Bangalore | ₹12/km",
  description:
    "Book outstation taxi from Mysore to Coorg, Ooty, Wayanad, Bangalore at ₹12/km. Best outstation cab service in Mysore with transparent pricing, clean AC cars and professional drivers. 24/7 booking available.",
  keywords: [
    "outstation taxi mysore",
    "outstation cab from mysore",
    "mysore to coorg taxi",
    "mysore to ooty cab",
    "mysore to wayanad taxi",
    "mysore to bangalore cab",
    "intercity taxi mysore",
    "outstation car rental mysore"
  ],
  alternates: { canonical: "/services/outstation-taxi-mysore/" },
  openGraph: {
    title: "Outstation Taxi from Mysore - Best Rates ₹12/km",
    description: "Book outstation cabs from Mysore to Coorg, Ooty, Wayanad, Bangalore. Professional drivers, transparent pricing.",
    type: "website",
  }
};

const outstationServiceSchema = createServiceSchema({
  name: "Outstation Taxi Service from Mysore",
  description: "Premium outstation taxi service from Mysore to nearby destinations like Coorg, Ooty, Wayanad, and Bangalore with transparent pricing starting at ₹12/km and professional drivers.",
  serviceType: "Outstation Taxi Service",
  areaServed: ["Mysore", "Karnataka", "India"],
  offers: {
    price: "12",
    priceCurrency: "INR",
  },
});

const outstationFaqSchema = createFAQSchema([
  {
    question: "What is included in the outstation fare?",
    answer: "Our outstation fare includes AC vehicle, professional driver, fuel, and tolls. The price is fixed at ₹12/km for sedans, with rates varying by vehicle type, and no hidden charges.",
  },
  {
    question: "Can I book for a round trip?",
    answer: "Yes! We offer round-trip bookings with discounted rates. Contact us via WhatsApp for custom packages.",
  },
  {
    question: "Do you provide vehicles for a full day?",
    answer: "Yes, we offer full-day outstation packages with flexible hours. Ideal for sightseeing and custom itineraries.",
  },
]);

export default function OutstationTaxiMysorePage() {
  const routes = [
    { label: "Mysore to Coorg", href: ROUTES.MYSORE_TO_COORG },
    { label: "Mysore to Ooty", href: ROUTES.MYSORE_TO_OOTY },
    { label: "Mysore to Wayanad", href: ROUTES.MYSORE_TO_WAYANAD },
    { label: "Mysore to Bangalore", href: ROUTES.MYSORE_TO_BANGALORE },
  ];

  const features = [
    { icon: "✓", title: "Transparent Pricing", desc: "From ₹12/km with no hidden charges" },
    { icon: "✓", title: "Professional Drivers", desc: "Verified drivers with local expertise" },
    { icon: "✓", title: "AC Vehicles", desc: "Well-maintained and sanitized cars" },
    { icon: "✓", title: "24/7 Availability", desc: "Book anytime for your convenience" },
    { icon: "✓", title: "Instant Confirmation", desc: "Quick booking confirmation" },
    { icon: "✓", title: "Flexible Routes", desc: "Custom stops and itineraries" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <JsonLd data={outstationServiceSchema} />
      <JsonLd data={outstationFaqSchema} />
      <Breadcrumbs
        items={[{ label: "Services", href: ROUTES.SERVICES }, { label: "Outstation Taxi", href: ROUTES.OUTSTATION_TAXI }]}
      />

      <div className="rounded-2xl border border-slate-200 bg-linear-to-br from-orange-50 to-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Outstation Taxi from Mysore</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Premium outstation taxi service from Mysore to nearby destinations with transparent pricing and professional drivers. Perfect for business trips, vacations, and family getaways.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            WhatsApp for quote
          </a>
          <Link
            href={ROUTES.BOOK_TAXI}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            Book online
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Why Choose Our Outstation Service?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="rounded-xl bg-white ring-1 ring-slate-900/10 p-6 hover:shadow-md hover:ring-orange-300 transition-all">
              <div className="text-2xl font-bold text-emerald-600 mb-2">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mt-12 rounded-2xl bg-white ring-1 ring-slate-900/10 p-8">
        <h2 className="text-3xl font-bold text-slate-900">Vehicle-Based Pricing</h2>
        <p className="mt-2 text-slate-600">Choose the right vehicle for your journey. All rates include driver, fuel, and tolls.</p>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-white ring-1 ring-slate-900/10 p-6 hover:shadow-md hover:ring-orange-400 transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Sedan (4 Seater)</h3>
                <p className="text-sm text-slate-600 mt-1">Dzire, Etios • Perfect for couples and small families</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-orange-600">₹12/km</p>
                <p className="text-sm text-slate-600 mt-1">Min 250 km/day</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white ring-1 ring-slate-900/10 p-6 hover:shadow-md hover:ring-orange-400 transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">SUV - Ertiga (6-7 Seater)</h3>
                <p className="text-sm text-slate-600 mt-1">Spacious for families and groups</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-orange-600">₹14/km</p>
                <p className="text-sm text-slate-600 mt-1">Min 250 km/day</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white ring-1 ring-slate-900/10 p-6 hover:shadow-md hover:ring-orange-400 transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">SUV - Innova Crysta (6-7 Seater)</h3>
                <p className="text-sm text-slate-600 mt-1">Premium comfort for families and groups</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-orange-600">₹18/km</p>
                <p className="text-sm text-slate-600 mt-1">Min 250 km/day</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white ring-1 ring-slate-900/10 p-6 hover:shadow-md hover:ring-orange-400 transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Tempo Traveller (12-17 Seater)</h3>
                <p className="text-sm text-slate-600 mt-1">Ideal for large groups and corporate travel</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-orange-600">₹22/km</p>
                <p className="text-sm text-slate-600 mt-1">Min 250 km/day</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500">* Night surcharge ₹200-500 applicable for 10 PM - 6 AM travel. Driver allowance ₹400/day included.</p>
      </div>

      {/* Popular Routes */}
      <div className="mt-12 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
        <h2 className="text-3xl font-bold text-slate-900">Popular Outstation Routes</h2>
        <p className="mt-2 text-slate-600">Browse our most requested routes and get instant quotes</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {routes.map((r) => (
            <Link key={r.href} href={r.href} className="rounded-xl bg-linear-to-br from-orange-50 to-white ring-1 ring-slate-900/10 p-4 hover:shadow-md hover:ring-orange-300 transition-all">
              <span className="font-semibold text-slate-900">{r.label}</span>
              <div className="mt-2 text-sm text-slate-600">View details and pricing →</div>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl bg-white ring-1 ring-slate-900/10 p-6">
            <h3 className="font-semibold text-slate-900">What is included in the outstation fare?</h3>
            <p className="mt-2 text-slate-600">Our outstation fare includes AC vehicle, professional driver, fuel, and tolls. The price is fixed at ₹12/km for sedans, with rates varying by vehicle type, and no hidden charges.</p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-slate-900/10 p-6">
            <h3 className="font-semibold text-slate-900">Can I book for a round trip?</h3>
            <p className="mt-2 text-slate-600">Yes! We offer round-trip bookings with discounted rates. Contact us via WhatsApp for custom packages.</p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-slate-900/10 p-6">
            <h3 className="font-semibold text-slate-900">Do you provide vehicles for a full day?</h3>
            <p className="mt-2 text-slate-600">Yes, we offer full-day outstation packages with flexible hours. Ideal for sightseeing and custom itineraries.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Book Your Outstation Taxi?</h2>
        <p className="mt-3 text-lg text-slate-300 max-w-2xl mx-auto">
          Get an instant quote on WhatsApp or call us directly — professional drivers, transparent pricing, and 24/7 availability.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            WhatsApp Now
          </a>
          <Link
            href={ROUTES.BOOK_TAXI}
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
          >
            Book Online
          </Link>
        </div>
      </div>
    </div>
  );
}
