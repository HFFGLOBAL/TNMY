import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { createReviewSchema } from "@/lib/constants/schema-templates";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Best Taxi Service in Mysore | 4.9★ Rated | MM Mysore Travels",
  description:
    "Read 349+ customer reviews for MM Mysore Travels. Rated 4.9/5 stars by travelers for taxi services in Mysore, outstation trips to Coorg, Ooty, Wayanad. Verified testimonials from satisfied customers. Professional drivers, clean vehicles, transparent pricing. Book with confidence. Trusted travel agency in Mysore since 2015.",
  keywords: [
    "top travels in mysore",
    "best travel agency mysore",
    "cabs in mysore",
    "mysore taxi reviews",
    "mysore travels testimonials",
    "taxi service mysore customer feedback",
    "best taxi service mysore reviews",
    "mysore outstation taxi ratings",
    "mm mysore travels reviews",
    "trusted taxi service mysore",
    "mysore travel agency reviews",
    "taxi services in mysore ratings",
    "mysore tour package reviews"
  ],
  alternates: { canonical: "/reviews/" },
};

const testimonials = [
  {
    name: "Rajesh Kumar",
    route: "Mysore to Coorg",
    text: "Excellent service! The driver was professional and the car was spotlessly clean. Highly recommend for family trips.",
    rating: 5,
    image: "/images/Client Testimonial/Testimonial (1).jpeg",
    date: "2025-12-15",
  },
  {
    name: "Priya Sharma",
    route: "Airport Transfer",
    text: "Very reliable and punctual. The booking process was smooth and the driver was courteous throughout the journey.",
    rating: 5,
    image: "/images/Client Testimonial/Testimonial (2).jpeg",
    date: "2025-11-28",
  },
  {
    name: "Arun Patel",
    route: "Outstation - Bangalore",
    text: "Great value for money. Competitive rates and no hidden charges. Will definitely book again!",
    rating: 5,
    image: "/images/Client Testimonial/Testimonial (3).jpeg",
    date: "2025-12-05",
  },
];

const reviewSchemas = createReviewSchema(
  testimonials.map((t) => ({
    author: t.name,
    rating: t.rating,
    text: t.text,
    date: t.date,
    route: t.route,
  }))
);

export default function ReviewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {reviewSchemas.map((schema, idx) => (
        <JsonLd key={idx} data={schema} />
      ))}
      <Breadcrumbs items={[{ label: "Reviews", href: ROUTES.REVIEWS }]} />

      <div className="rounded-2xl bg-white ring-1 ring-slate-900/10 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Reviews</h1>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <span className="text-lg font-semibold text-slate-900">{BUSINESS_INFO.rating.value}/{BUSINESS_INFO.rating.max}</span>
          <span className="text-slate-600">from {BUSINESS_INFO.rating.count}+ customer reviews</span>
        </div>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Trusted taxi and tour service in Mysuru since {BUSINESS_INFO.founded} — here&apos;s what a few of our customers have said about recent trips.
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
            href={ROUTES.CONTACT}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">What customers say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-8 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed text-base">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-slate-100">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-600">Trip: {t.route}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
