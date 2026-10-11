import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Taxi Pricing in Mysore | Transparent Rates for Outstation & Local Trips | Travels in Mysore",
  description:
    "View transparent taxi pricing in Mysore for outstation trips to Coorg, Ooty, Wayanad, Bangalore. Sedan, SUV, Tempo Traveller rates. Local sightseeing packages 4/8/12 hours. Airport transfer pricing. No hidden charges. Get instant quote on WhatsApp. Starting ₹12/km for outstation, ₹1,800 for local packages.",
  keywords: [
    "cabs in mysore",
    "taxi services in mysore",
    "travel agency in mysore",
    "best travel agency mysore",
    "taxi pricing mysore",
    "mysore taxi rates",
    "outstation taxi fare mysore",
    "mysore to coorg taxi price",
    "mysore to ooty cab fare",
    "local taxi charges mysore",
    "airport taxi rate mysore",
    "sedan taxi price mysore",
    "suv taxi fare mysore",
    "tempo traveller cost mysore"
  ],
  alternates: { canonical: "/pricing/" },
};

const outstationRates = [
  { vehicle: "Sedan (4 Seater)", models: "Dzire, Etios", rate: "₹12/km" },
  { vehicle: "SUV - Ertiga", models: "6-7 Seater", rate: "₹16/km" },
  { vehicle: "SUV - Innova Crysta", models: "6-7 Seater", rate: "₹18/km" },
  { vehicle: "Tempo Traveller (12-17 Seater)", models: "", rate: "₹22/km" },
  { vehicle: "Bus (30+ Seater)", models: "", rate: "₹35/km" },
];

const localPackages = [
  { vehicle: "Sedan (4 Seater)", fullDay: "₹1,800", halfDay: "₹1,200" },
  { vehicle: "SUV (6-7 Seater)", fullDay: "₹2,800", halfDay: "₹1,600" },
  { vehicle: "Tempo Traveller", fullDay: "₹4,500", halfDay: "₹2,500" },
  { vehicle: "Bus (30+ Seater)", fullDay: "₹8,000", halfDay: "—" },
];

const routeFares = [
  { route: "Mysore → Coorg", fare: "₹4,500", href: ROUTES.MYSORE_TO_COORG },
  { route: "Mysore → Ooty", fare: "₹5,500", href: ROUTES.MYSORE_TO_OOTY },
  { route: "Mysore → Wayanad", fare: "₹5,000", href: ROUTES.MYSORE_TO_WAYANAD },
  { route: "Mysore → Bangalore", fare: "₹2,800", href: ROUTES.MYSORE_TO_BANGALORE },
];

const airportFares = [
  { vehicle: "Sedan", fare: "₹2,800" },
  { vehicle: "SUV", fare: "₹3,500" },
  { vehicle: "Tempo Traveller", fare: "₹5,500" },
];

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Pricing", href: ROUTES.PRICING }]} />

      <div className="rounded-2xl bg-white ring-1 ring-slate-900/10 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Pricing</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Transparent pricing with no hidden charges. Rates below include driver, fuel, and standard tolls. Share
          your pickup, destination and date for an exact quote.
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

      {/* Outstation */}
      <div className="mt-10 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
        <h2 className="text-2xl font-bold text-slate-900">Outstation taxi rates</h2>
        <p className="mt-2 text-slate-600">Coorg, Ooty, Wayanad, Bangalore and more. Minimum 300 km/day applies.</p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-semibold">Vehicle</th>
                <th className="py-2 pr-4 font-semibold">Models</th>
                <th className="py-2 font-semibold">Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {outstationRates.map((r) => (
                <tr key={r.vehicle}>
                  <td className="py-3 pr-4 font-medium text-slate-900">{r.vehicle}</td>
                  <td className="py-3 pr-4 text-slate-600">{r.models || "—"}</td>
                  <td className="py-3 font-bold text-orange-600">{r.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-500">* Night surcharge ₹200-500 applicable for 10 PM - 6 AM travel. Driver allowance included.</p>
        <Link href={ROUTES.OUTSTATION_TAXI} className="mt-4 inline-flex text-orange-700 font-semibold hover:text-orange-800">
          View outstation service →
        </Link>
      </div>

      {/* Local sightseeing */}
      <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
        <h2 className="text-2xl font-bold text-slate-900">Local sightseeing packages</h2>
        <p className="mt-2 text-slate-600">Half-day (4-5 hrs / 40 km) and full-day (8-9 hrs / 80 km) Mysore city tours.</p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-semibold">Vehicle</th>
                <th className="py-2 pr-4 font-semibold">Half-Day</th>
                <th className="py-2 font-semibold">Full-Day</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {localPackages.map((r) => (
                <tr key={r.vehicle}>
                  <td className="py-3 pr-4 font-medium text-slate-900">{r.vehicle}</td>
                  <td className="py-3 pr-4 text-slate-600">{r.halfDay}</td>
                  <td className="py-3 font-bold text-orange-600">{r.fullDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href={ROUTES.SIGHTSEEING_TAXI} className="mt-4 inline-flex text-orange-700 font-semibold hover:text-orange-800">
          View sightseeing service →
        </Link>
      </div>

      {/* Airport transfers */}
      <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
        <h2 className="text-2xl font-bold text-slate-900">Airport transfer fares</h2>
        <p className="mt-2 text-slate-600">Mysore ↔ Bangalore (Kempegowda International) Airport, one-way.</p>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {airportFares.map((r) => (
            <div key={r.vehicle} className="rounded-xl bg-white ring-1 ring-slate-900/10 p-4 text-center">
              <div className="font-semibold text-slate-900">{r.vehicle}</div>
              <div className="mt-1 text-2xl font-bold text-orange-600">{r.fare}</div>
            </div>
          ))}
        </div>
        <Link href={ROUTES.AIRPORT_TRANSFER} className="mt-4 inline-flex text-orange-700 font-semibold hover:text-orange-800">
          View airport transfer →
        </Link>
      </div>

      {/* Popular routes */}
      <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
        <h2 className="text-2xl font-bold text-slate-900">Popular route fares (Sedan, one-way)</h2>
        <p className="mt-2 text-slate-600">Fixed starting fares for our most-booked outstation routes.</p>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {routeFares.map((r) => (
            <Link
              key={r.route}
              href={r.href}
              className="rounded-xl bg-white ring-1 ring-slate-900/10 p-4 hover:ring-orange-400 hover:shadow-md transition-all"
            >
              <div className="font-semibold text-slate-900">{r.route}</div>
              <div className="mt-1 text-2xl font-bold text-orange-600">{r.fare}</div>
              <div className="mt-1 text-xs text-slate-500">SUV &amp; Tempo also available</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Book at These Rates?</h2>
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
