import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { createTourPackageSchema, createFAQSchema } from "@/lib/constants/schema-templates";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Mysore to Ooty Taxi | Starting from ₹5,500 | Queen of Hill Stations Cab Booking",
  description: "Book Mysore to Ooty cab starting from ₹5,500. 125 km scenic drive to Nilgiris. Visit Botanical Gardens, Ooty Lake, Tea Estates. Expert drivers. Book now!",
  keywords: ["mysore to ooty taxi", "mysore to ooty cab", "ooty taxi from mysore", "mysore ooty car rental"],
  alternates: {
    canonical: "/tour-packages/mysore-to-ooty/",
  },
};

const tourPackage = createTourPackageSchema({
  name: "Mysore to Ooty Taxi Service",
  description: "Scenic journey to Ooty - Queen of Hill Stations covering 125 km through Nilgiri Mountains",
  url: BUSINESS_INFO.url + "/mysore-to-ooty/",
  image: BUSINESS_INFO.url + "/images/tours/Ooty_Tour_Package.jpg",
  offers: {
    price: "5500",
    priceCurrency: "INR"
  },
  duration: "P1D",
  itinerary: [
    { name: "Ooty Botanical Gardens", description: "Sprawling gardens with rare plant species" },
    { name: "Ooty Lake", description: "Serene lake perfect for boating" },
    { name: "Doddabetta Peak", description: "Highest point in Nilgiris with stunning views" },
    { name: "Tea Gardens", description: "Visit lush tea estates and factories" },
  ]
});

const faqs = createFAQSchema([
  {
    question: "How much is Mysore to Ooty taxi fare?",
    answer: "Mysore to Ooty taxi starting from ₹5,500 for sedan (one way). SUV and larger vehicles available. Round trip packages with discounted rates."
  },
  {
    question: "How long does it take from Mysore to Ooty?",
    answer: "The journey takes approximately 3.5 to 4 hours covering 125 km through scenic Nilgiri hills."
  },
  {
    question: "Best time to visit Ooty?",
    answer: "March to June (summer) and September to November are ideal. Avoid monsoon (July-August) due to heavy rains."
  },
]);

export default function MysoreToOotyPage() {
  return (
    <>
      <JsonLd data={tourPackage} />
      <JsonLd data={faqs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: "Mysore to Ooty", href: ROUTES.MYSORE_TO_OOTY }]} />

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Mysore to Ooty Taxi Service
          </h1>
          <p className="text-lg text-slate-700 mb-6 max-w-3xl">
            Queen of Hill Stations awaits - Book your comfortable ride today
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">125 km</div>
              <div className="text-sm font-semibold text-slate-600">Distance</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">4 Hours</div>
              <div className="text-sm font-semibold text-slate-600">Duration</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">₹5,500*</div>
              <div className="text-sm font-semibold text-slate-600">Starting Price</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">2,240m</div>
              <div className="text-sm font-semibold text-slate-600">Altitude</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About Ooty</h2>
              <p className="text-slate-700 mb-4">
                Ooty (Udhagamandalam), the "Queen of Hill Stations," is a charming town nestled in the Nilgiri Hills.
                Famous for its tea gardens, colonial architecture, and pleasant climate, Ooty is one of South India's
                most popular hill stations. The 125 km journey from Mysore offers breathtaking views of mountains,
                waterfalls, and lush greenery.
              </p>
              <p className="text-slate-700">
                Our Mysore to Ooty cab service ensures a comfortable journey through 36 hairpin bends, making your trip
                as memorable as the destination itself.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Must-Visit Places in Ooty</h2>
              <div className="space-y-4">
                {[
                  { name: "Ooty Botanical Gardens", desc: "55-acre garden with exotic plants, fern house, and fossil tree trunk" },
                  { name: "Ooty Lake", desc: "Man-made lake ideal for boating with paddle boats and motor boats" },
                  { name: "Doddabetta Peak", desc: "Highest peak in Nilgiris at 2,637m with telescope house" },
                  { name: "Tea Museum & Factory", desc: "Learn tea processing and sample fresh Nilgiri tea" },
                  { name: "Rose Garden", desc: "20,000+ varieties of roses spread across 10 acres" },
                  { name: "Pykara Falls", desc: "Picturesque waterfall 20 km from Ooty with boat house" },
                  { name: "Nilgiri Mountain Railway", desc: "UNESCO heritage toy train to Coonoor" },
                  { name: "Thread Garden", desc: "Unique garden with artificial flowers made from thread" },
                ].map((place, i) => (
                  <div key={i} className="border-l-2 border-slate-200 pl-4">
                    <h3 className="font-bold text-lg text-slate-900">{place.name}</h3>
                    <p className="text-slate-600">{place.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Taxi Fare & Vehicle Options</h2>
              <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Vehicle</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Seats</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">One Way*</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Round Trip*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Sedan</td>
                    <td className="px-4 py-3 text-slate-700">4</td>
                    <td className="px-4 py-3 font-bold text-slate-900">₹5,500</td>
                    <td className="px-4 py-3 font-bold text-slate-900">₹9,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">SUV</td>
                    <td className="px-4 py-3 text-slate-700">6-7</td>
                    <td className="px-4 py-3 font-bold text-slate-900">₹6,500</td>
                    <td className="px-4 py-3 font-bold text-slate-900">₹11,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Tempo Traveller</td>
                    <td className="px-4 py-3 text-slate-700">12-17</td>
                    <td className="px-4 py-3 font-bold text-slate-900">₹10,000</td>
                    <td className="px-4 py-3 font-bold text-slate-900">₹16,500</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                *All-inclusive pricing. Tolls, parking, and driver charges included.
              </p>
              <p className="mt-1 text-xs text-slate-500">
                * Prices are indicative and may vary based on season, fuel cost, and vehicle availability. Final fare will be confirmed at the time of booking.
              </p>
            </div>

            {/* What's Included/Excluded */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-emerald-700 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Included
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>AC vehicle for entire journey</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Professional driver charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Fuel & toll charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Driver allowance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Not Included
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Entry tickets to attractions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Meals and beverages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Personal expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Guide charges (if required)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.mainEntity.map((faq: any, i: number) => (
                  <div key={i} className="border-b border-slate-200 pb-4 last:border-0">
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.name}</h3>
                    <p className="text-slate-700">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Book Ooty Cab Now</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="block w-full bg-orange-600 hover:bg-[#e85c2d] text-white text-center py-3 px-4 rounded-lg font-bold transition-colors"
                >
                  Call {BUSINESS_INFO.phoneDisplay}
                </a>
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 px-4 rounded-lg font-bold transition-colors"
                >
                  WhatsApp booking
                </a>
                <Link
                  href={ROUTES.BOOK_TAXI}
                  className="block w-full bg-white hover:bg-slate-50 text-slate-900 text-center py-3 px-4 rounded-lg font-bold transition-colors ring-1 ring-slate-900/10"
                >
                  Book online
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-bold text-slate-900 mb-3">Service Highlights</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Experienced hill route drivers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Clean, sanitized vehicles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>On-time pickup guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Flexible tour packages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>24/7 roadside assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-2xl bg-slate-900 p-8 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to Book Your Ooty Trip?</h2>
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
    </>
  );
}
