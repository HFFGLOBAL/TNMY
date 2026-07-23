import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";
import { BUSINESS_INFO } from "@/lib/constants/business-info";

export const metadata: Metadata = {
  title: "Destinations from Mysore | Coorg, Ooty, Wayanad, Bangalore",
  description: "Explore destinations served from Mysore with route info, travel time, and booking options. Book taxi services in Mysore and cabs in Mysore for these routes.",
  keywords: [
    "travels in mysore",
    "top travels in mysore",
    "taxi services in mysore",
    "cabs in mysore",
    "mysore outstation taxi",
    "mysore to coorg taxi",
    "mysore to ooty cab",
    "mysore to wayanad taxi",
    "mysore to bangalore taxi"
  ],
  alternates: { canonical: "/destinations/" },
};

export default function DestinationsHubPage() {
  const destinations = [
    { 
      label: "Bangalore", 
      href: ROUTES.DEST_BANGALORE,
      distance: "143 km",
      time: "3 hours",
      desc: "IT capital, business hub, airport transfers",
      highlights: "Corporate travel • Airport transfers • Business trips"
    },
    { 
      label: "Coorg", 
      href: ROUTES.DEST_COORG,
      distance: "120 km",
      time: "2.5 hours",
      desc: "Coffee estates, waterfalls, Scotland of India",
      highlights: "Abbey Falls • Raja's Seat • Coffee plantations"
    },
    { 
      label: "Ooty", 
      href: ROUTES.DEST_OOTY,
      distance: "125 km",
      time: "3 hours",
      desc: "Queen of hill stations, tea gardens, lakes",
      highlights: "Botanical Gardens • Ooty Lake • Doddabetta Peak"
    },
    { 
      label: "Wayanad", 
      href: ROUTES.DEST_WAYANAD,
      distance: "130 km",
      time: "3 hours",
      desc: "Kerala's green paradise, wildlife, caves",
      highlights: "Edakkal Caves • Soochipara Falls • Wildlife sanctuary"
    },
    { 
      label: "Mysore", 
      href: ROUTES.DEST_MYSORE,
      distance: "—",
      time: "Local",
      desc: "Cultural capital, royal heritage, palaces",
      highlights: "Mysore Palace • Chamundi Hills • Brindavan Gardens"
    },
    { 
      label: "Kodaikanal", 
      href: ROUTES.DEST_KODAIKANAL,
      distance: "380 km",
      time: "7 hours",
      desc: "Princess of hills, lakes, scenic valleys",
      highlights: "Kodai Lake • Coaker's Walk • Pillar Rocks"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Destinations", href: ROUTES.DESTINATIONS }]} />

      <div className="rounded-2xl border border-slate-200 bg-linear-to-br from-orange-50 to-slate-50 p-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Popular Destinations from Mysore</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Explore South India's most beautiful destinations with professional taxi services from Mysore. From hill stations to business hubs, we cover all major routes with comfortable AC vehicles and experienced drivers.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {destinations.map((dest) => (
          <Link key={dest.href} href={dest.href} className="rounded-2xl bg-white ring-1 ring-slate-900/10 p-6 hover:ring-orange-400 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900">{dest.label}</h2>
                <p className="mt-2 text-slate-700">{dest.desc}</p>
                <p className="mt-3 text-sm text-slate-600">{dest.highlights}</p>
              </div>
              <div className="text-right ml-4">
                <div className="text-sm font-semibold text-orange-600">{dest.distance}</div>
                <div className="text-xs text-slate-500">{dest.time}</div>
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold text-orange-600 flex items-center gap-1">
              View details →
            </div>
          </Link>
        ))}
      </div>

      {/* Service Highlights */}
      <div className="mt-12 rounded-2xl bg-white ring-1 ring-slate-900/10 p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Travel With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🚗</div>
            <h3 className="font-semibold text-slate-900">Multiple Routes</h3>
            <p className="mt-1 text-sm text-slate-600">Hill stations, cities, and tourist destinations</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-semibold text-slate-900">Best Rates</h3>
            <p className="mt-1 text-sm text-slate-600">Competitive pricing with no hidden charges</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">👨‍✈️</div>
            <h3 className="font-semibold text-slate-900">Expert Drivers</h3>
            <p className="mt-1 text-sm text-slate-600">Professional drivers with route expertise</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌟</div>
            <h3 className="font-semibold text-slate-900">24/7 Service</h3>
            <p className="mt-1 text-sm text-slate-600">Available round the clock for bookings</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href={ROUTES.TOUR_PACKAGES} className="rounded-xl bg-white ring-1 ring-slate-900/10 p-4 hover:shadow-md hover:ring-orange-300 transition-all">
            <h3 className="font-semibold text-slate-900">Tour Packages</h3>
            <p className="mt-1 text-sm text-slate-600">Multi-day tour packages to multiple destinations</p>
          </Link>
          <Link href={ROUTES.OUTSTATION_TAXI} className="rounded-xl bg-white ring-1 ring-slate-900/10 p-4 hover:shadow-md hover:ring-orange-300 transition-all">
            <h3 className="font-semibold text-slate-900">Outstation Taxi</h3>
            <p className="mt-1 text-sm text-slate-600">Outstation cabs for all routes with transparent pricing</p>
          </Link>
          <Link href={ROUTES.BOOK_TAXI} className="rounded-xl bg-orange-50 ring-1 ring-orange-200 p-4 hover:shadow-md transition-all">
            <h3 className="font-semibold text-orange-700">Book Now</h3>
            <p className="mt-1 text-sm text-slate-600">Quick booking for all destinations</p>
          </Link>
        </div>
      </div>

      {/* Closing CTA */}
      <section className="mt-12 bg-linear-to-r from-orange-600 to-[#e85c2d] rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore? Pick Your Destination.</h2>
        <p className="text-lg mb-6 text-orange-50 max-w-2xl mx-auto">
          Whichever destination you choose, we&apos;ll get you there in comfort. Book your taxi now or chat with us on WhatsApp for a quick quote.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors shadow-lg"
          >
            WhatsApp Us
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-orange-600 hover:bg-orange-50 transition-colors shadow-lg"
          >
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
