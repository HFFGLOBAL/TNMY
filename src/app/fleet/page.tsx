import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";
import { BUSINESS_INFO } from "@/lib/constants/business-info";

export const metadata: Metadata = {
  title: "Cabs in Mysore | Sedan, SUV, Tempo Traveller & Bus Fleet",
  description: "Browse our fleet options for cabs in Mysore: Sedan, SUV, Tempo Traveller and Bus for local, outstation and airport trips.",
  keywords: [
    "cabs in mysore",
    "taxi services in mysore",
    "travels in mysore",
    "travel agency in mysore",
    "sedan taxi mysore",
    "suv taxi mysore",
    "tempo traveller mysore",
    "bus booking mysore"
  ],
  alternates: { canonical: "/fleet/" },
};

export default function FleetHubPage() {
  const fleet = [
    { label: "Sedan", href: ROUTES.FLEET_SEDAN },
    { label: "SUV", href: ROUTES.FLEET_SUV },
    { label: "Tempo Traveller", href: ROUTES.FLEET_TEMPO },
    { label: "Bus", href: ROUTES.FLEET_BUS },
  ];

  const whyChooseFleet = [
    { title: "Well-Maintained Vehicles", desc: "Regularly serviced cars with clean interiors for a comfortable ride every time." },
    { title: "Verified Drivers", desc: "Experienced, background-checked drivers who know the routes well." },
    { title: "Transparent Pricing", desc: "Fixed, upfront rates with no hidden charges or surge pricing." },
    { title: "24/7 Availability", desc: "Book any vehicle, any time, for local, outstation, or airport trips." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Fleet", href: ROUTES.FLEET }]} />

      <div className="rounded-2xl bg-white ring-1 ring-slate-900/10 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Fleet</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">Choose from our cabs in Mysore based on passenger count and trip type.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleet.map((v) => (
          <Link key={v.href} href={v.href} className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-slate-900">{v.label}</h2>
            <p className="mt-2 text-slate-600">View details and best use cases.</p>
          </Link>
        ))}
      </div>

      {/* Why Choose Our Fleet */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Choose Our Fleet</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseFleet.map((item) => (
            <div key={item.title} className="rounded-xl bg-white ring-1 ring-slate-900/10 p-6 hover:shadow-md hover:ring-orange-300 transition-all">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div className="mt-16 text-center rounded-2xl bg-slate-900 p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Not Sure Which Vehicle? Talk to Us.</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          Tell us your passenger count and trip type — we&apos;ll recommend the right vehicle and share transparent pricing.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center rounded-xl bg-[#FF7444] px-8 py-4 text-lg font-semibold text-white hover:bg-[#e85c2d] transition-colors">
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
          <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-700 transition-colors">
            WhatsApp Booking
          </a>
        </div>
      </div>
    </div>
  );
}
