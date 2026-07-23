import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { createTourPackageSchema, createFAQSchema } from "@/lib/constants/schema-templates";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Mysore to Wayanad Taxi | Starting from ₹5,000 | Kerala Hill Station Cab Booking",
  description: "Book Mysore to Wayanad taxi starting from ₹5,000. 130 km scenic drive to Kerala's green paradise. Visit waterfalls, wildlife, tea estates. 24/7 service.",
  keywords: ["mysore to wayanad taxi", "mysore to wayanad cab", "wayanad taxi from mysore"],
  alternates: { canonical: "/tour-packages/mysore-to-wayanad/"},
};

const tourPackage = createTourPackageSchema({
  name: "Mysore to Wayanad Taxi Service",
  description: "Scenic journey to Wayanad - Kerala's green paradise covering 130 km through the Western Ghats",
  url: BUSINESS_INFO.url + "/tour-packages/mysore-to-wayanad/",
  image: BUSINESS_INFO.url + "/images/tours/Wayanad_Tour_Package.jpg",
  offers: {
    price: "5000",
    priceCurrency: "INR"
  },
  duration: "P1D",
  itinerary: [
    { name: "Edakkal Caves", description: "Ancient rock carvings dating back 6000 years" },
    { name: "Soochipara Falls", description: "Three-tier waterfall perfect for trekking" },
    { name: "Banasura Dam", description: "Largest earth dam in India with boating" },
    { name: "Wildlife Sanctuary", description: "Spot elephants, deer, and exotic birds" },
  ]
});

const faqs = createFAQSchema([
  {
    question: "How much is Mysore to Wayanad taxi fare?",
    answer: "Mysore to Wayanad taxi starting from ₹5,000 for sedan (one way). SUV and Tempo Traveller available for larger groups. Round trip packages with discounted rates."
  },
  {
    question: "How long does it take from Mysore to Wayanad?",
    answer: "The journey takes approximately 3.5 hours covering 130 km through scenic Western Ghats forest roads."
  },
  {
    question: "Best time to visit Wayanad and is the wildlife sanctuary open during monsoon?",
    answer: "October to May is ideal, with December to February offering the most pleasant weather. During monsoon (June-September) the region turns lush green but Wayanad Wildlife Sanctuary safari timings can be curtailed or suspended depending on rainfall, so it's best to confirm sanctuary entry before planning your trip."
  },
]);

export default function MysoreToWayanadPage() {
  return (
    <>
      <JsonLd data={tourPackage} />
      <JsonLd data={faqs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: "Mysore to Wayanad", href: ROUTES.MYSORE_TO_WAYANAD }]} />

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Mysore to Wayanad Taxi Service
          </h1>
          <p className="text-lg text-slate-700 mb-6 max-w-3xl">
            Explore Kerala's green paradise with comfortable cab service
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">130 km</div>
              <div className="text-sm font-semibold text-slate-600">Distance</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">3.5 Hours</div>
              <div className="text-sm font-semibold text-slate-600">Duration</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">₹5,000*</div>
              <div className="text-sm font-semibold text-slate-600">Starting Price</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">24/7</div>
              <div className="text-sm font-semibold text-slate-600">Available</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About Wayanad</h2>
              <p className="text-slate-700 mb-4">
                Wayanad, a picturesque hill district in Kerala, is known for its misty mountains, lush forests,
                tea and coffee plantations, and rich wildlife. Located 130 km from Mysore, Wayanad offers a perfect
                blend of adventure and tranquility with its waterfalls, trekking trails, and wildlife sanctuaries.
              </p>
              <p className="text-slate-700">
                Our Mysore to Wayanad cab service takes you through the scenic Bandipur and Nagarhole forest stretch,
                so early morning departures are recommended to make the most of the wildlife-rich drive and to reach
                your resort or homestay before dusk.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Attractions</h2>
              <div className="space-y-4">
                {[
                  { name: "Edakkal Caves", desc: "Ancient rock carvings dating back 6000 years" },
                  { name: "Soochipara Falls", desc: "Three-tier waterfall perfect for trekking" },
                  { name: "Banasura Dam", desc: "Largest earth dam in India with boating" },
                  { name: "Wildlife Sanctuary", desc: "Spot elephants, deer, and exotic birds" },
                  { name: "Chembra Peak", desc: "Highest peak with heart-shaped lake" },
                ].map((place, i) => (
                  <div key={i} className="border-l-2 border-slate-200 pl-4">
                    <h3 className="font-bold text-lg text-slate-900">{place.name}</h3>
                    <p className="text-slate-600">{place.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pricing</h2>
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
                      <td className="px-4 py-3 font-bold text-slate-900">₹5,000</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹8,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-700">SUV</td>
                      <td className="px-4 py-3 text-slate-700">6-7</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹6,000</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹10,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-700">Tempo Traveller</td>
                      <td className="px-4 py-3 text-slate-700">12-17</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹9,500</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹16,000</td>
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

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
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
                      <span>Entry tickets & wildlife sanctuary/safari permits</span>
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

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
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

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Explore Nearby</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Link
                  href={ROUTES.MYSORE_TO_COORG}
                  className="rounded-xl bg-white ring-1 ring-slate-900/10 p-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="font-bold text-slate-900">Mysore to Coorg</div>
                  <div className="text-sm text-slate-500">Coffee estates &amp; misty hills</div>
                </Link>
                <Link
                  href={ROUTES.MYSORE_TO_OOTY}
                  className="rounded-xl bg-white ring-1 ring-slate-900/10 p-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="font-bold text-slate-900">Mysore to Ooty</div>
                  <div className="text-sm text-slate-500">Queen of Hill Stations</div>
                </Link>
                <Link
                  href={ROUTES.TOUR_PACKAGES}
                  className="rounded-xl bg-white ring-1 ring-slate-900/10 p-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="font-bold text-slate-900">All Tour Packages</div>
                  <div className="text-sm text-slate-500">Browse every route we offer</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Book Wayanad Cab</h3>
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
                    <span>Experienced border-route drivers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Wildlife sanctuary timing guidance</span>
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
          <h2 className="text-3xl font-bold">Ready to Book Your Wayanad Trip?</h2>
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
