"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type FocusEvent, type RefObject } from "react";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";
import { TopBar } from "./TopBar";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<null | "destinations" | "services">(null);
  const destinationsMenuRef = useRef<HTMLDivElement | null>(null);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = useMemo(
    () => [
      { label: "Home", href: ROUTES.HOME },
      { label: "About", href: ROUTES.ABOUT },
      { label: "Contact", href: ROUTES.CONTACT },
    ],
    []
  );
  const primaryNavLinks = navLinks.slice(0, 2);
  const contactNavLink = navLinks.find((link) => link.label === "Contact") ?? null;
  const mobileNavOrder = useMemo(
    () => [
      { label: "Home", href: ROUTES.HOME },
      { label: "About", href: ROUTES.ABOUT },
      { label: "Services", href: ROUTES.SERVICES },
      { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
      { label: "Destinations", href: ROUTES.DESTINATIONS },
      { label: "Contact", href: ROUTES.CONTACT },
    ],
    []
  );

  const tourMenu = useMemo(
    () => ({
      primary: [],
      featured: [],
    }),
    []
  );

  const destinationsMenu = useMemo(
    () => ({
      all: [
        { label: "Mysore", href: ROUTES.DEST_MYSORE, image: "/images/tours/Mysore.jpg" },
        { label: "Coorg", href: ROUTES.DEST_COORG, image: "/images/tours/Coorg.jpg" },
        { label: "Ooty", href: ROUTES.DEST_OOTY, image: "/images/tours/1.jpg" },
        { label: "Wayanad", href: ROUTES.DEST_WAYANAD, image: "/images/tours/2.jpg" },
        { label: "Bangalore", href: ROUTES.DEST_BANGALORE, image: "/images/tours/3.jpg" },
        { label: "Kodaikanal", href: ROUTES.DEST_KODAIKANAL, image: "/images/tours/4.jpg" },
      ],
    }),
    []
  );

  const servicesMenu = useMemo(
    () => ({
      core: [
        { label: "Outstation Taxi", href: ROUTES.OUTSTATION_TAXI, description: "Transparent outstation pricing", image: "/images/fleet%20with%20driver/WhatsApp%20Image%202026-01-29%20at%2017.47.45.jpeg" },
        { label: "Local Sightseeing", href: ROUTES.SIGHTSEEING_TAXI, description: "Explore Mysore and surrounding cities", image: "/images/tours/Mysore.jpg" },
        { label: "Airport Transfer", href: ROUTES.AIRPORT_TRANSFER, description: "On-time pickup to/from airports", image: "/images/fleet%20with%20driver/WhatsApp%20Image%202026-01-29%20at%2017.47.46.jpeg" },
      ],
      extra: [
        { label: "Corporate Cab", href: ROUTES.CORPORATE_CAB, image: "/images/fleet%20with%20driver/WhatsApp%20Image%202026-01-29%20at%2017.47.58.jpeg" },
        { label: "Wedding Car Rental", href: ROUTES.WEDDING_CAR, image: "/images/tours/Coorg.jpg" },
      ],
    }),
    []
  );

  function closeDesktopMenuOnBlur(e: FocusEvent<HTMLElement>, menuRef: RefObject<HTMLDivElement | null>) {
    const next = e.relatedTarget as Node | null;
    if (next && menuRef.current?.contains(next)) return;
    setOpenDesktopMenu(null);
  }

  return (
    <>
      {/* TopBar - hidden when scrolled */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <TopBar />
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 z-50 border-b bg-[#F2A65A] backdrop-blur-md border-slate-200 shadow-sm transition-all duration-300 ${
          isScrolled ? "top-0" : "top-[42px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={ROUTES.HOME}
              className={`text-lg sm:text-xl font-bold tracking-tight shrink-0 text-slate-900`}
            >
              <span className="hidden sm:inline">MM Mysore Travels | Travels in Mysore</span>
              <span className="sm:hidden">MM Mysore Travels</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    pathname === link.href
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Services mega menu */}
              <div
                ref={servicesMenuRef}
                className="relative"
                onMouseEnter={() => setOpenDesktopMenu("services")}
                onMouseLeave={() => setOpenDesktopMenu(null)}
                onFocusCapture={() => setOpenDesktopMenu("services")}
                onBlurCapture={(e) => closeDesktopMenuOnBlur(e, servicesMenuRef)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpenDesktopMenu(null);
                }}
              >
                <Link
                  href={ROUTES.SERVICES}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    pathname?.startsWith(ROUTES.SERVICES)
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={openDesktopMenu === "services"}
                >
                  Services
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {openDesktopMenu === "services" && (
                  <div
                    className="absolute left-1/2 top-full -mt-2 pt-2 w-[min(720px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl bg-white p-4 ring-1 ring-slate-900/10 shadow-xl"
                    role="menu"
                    aria-label="Services"
                    onMouseEnter={() => setOpenDesktopMenu("services")}
                    onMouseLeave={() => setOpenDesktopMenu(null)}
                  >
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-900/10">
                        <div className="text-xs font-semibold tracking-wide text-slate-500">Core services</div>
                        <div className="mt-2 grid gap-3">
                          {servicesMenu.core.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="rounded-xl bg-white p-3 ring-1 ring-slate-900/10 hover:shadow-md hover:ring-slate-900/20 transition-all overflow-hidden flex gap-3"
                              role="menuitem"
                              onClick={() => setOpenDesktopMenu(null)}
                            >
                              {item.image && (
                                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                  <Image
                                    src={item.image}
                                    alt={item.label}
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                  />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                                <div className="mt-0.5 text-xs text-slate-600 line-clamp-2">{item.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-1 rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
                        <div className="text-xs font-semibold tracking-wide text-slate-500">Additional offerings</div>
                        <div className="mt-2 grid gap-3">
                          {servicesMenu.extra.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="rounded-xl overflow-hidden hover:shadow-md transition-all group"
                              role="menuitem"
                              onClick={() => setOpenDesktopMenu(null)}
                            >
                              {item.image && (
                                <div className="relative w-full h-16 rounded-lg overflow-hidden mb-2">
                                  <Image
                                    src={item.image}
                                    alt={item.label}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform"
                                    sizes="140px"
                                  />
                                </div>
                              )}
                              <div className="px-2 pb-2">
                                <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                                <div className="mt-0.5 text-xs text-slate-600">Discover more</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tour Packages Link */}
              <Link
                href={ROUTES.TOUR_PACKAGES}
                className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                  pathname?.startsWith(ROUTES.TOUR_PACKAGES)
                    ? "text-blue-700 bg-blue-50"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                Tour Packages
              </Link>

              {/* Destinations mega menu */}
              <div
                ref={destinationsMenuRef}
                className="relative"
                onMouseEnter={() => setOpenDesktopMenu("destinations")}
                onMouseLeave={() => setOpenDesktopMenu(null)}
                onFocusCapture={() => setOpenDesktopMenu("destinations")}
                onBlurCapture={(e) => closeDesktopMenuOnBlur(e, destinationsMenuRef)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpenDesktopMenu(null);
                }}
              >
                <Link
                  href={ROUTES.DESTINATIONS}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    pathname?.startsWith(ROUTES.DESTINATIONS)
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={openDesktopMenu === "destinations"}
                >
                  Destinations
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {openDesktopMenu === "destinations" && (
                  <div
                    className="absolute left-1/2 top-full -mt-2 pt-2 w-[min(700px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl bg-white p-4 ring-1 ring-slate-900/10 shadow-lg"
                    role="menu"
                    aria-label="Destinations"
                    onMouseEnter={() => setOpenDesktopMenu("destinations")}
                    onMouseLeave={() => setOpenDesktopMenu(null)}
                  >
                    <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-900/10">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-xs font-semibold tracking-wide text-slate-500">Popular destinations</div>
                          <div className="mt-1 text-sm font-semibold text-slate-900">Plan your route from Mysore</div>
                        </div>
                        <Link
                          href={ROUTES.DESTINATIONS}
                          className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors whitespace-nowrap"
                          onClick={() => setOpenDesktopMenu(null)}
                          role="menuitem"
                        >
                          View all
                        </Link>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        {destinationsMenu.all.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-xl bg-white overflow-hidden ring-1 ring-slate-900/10 hover:shadow-md hover:ring-slate-900/20 transition-all group"
                            role="menuitem"
                            onClick={() => setOpenDesktopMenu(null)}
                          >
                            {item.image && (
                              <div className="relative w-full h-28 overflow-hidden bg-slate-200">
                                <Image
                                  src={item.image}
                                  alt={item.label}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                                  sizes="(max-width: 768px) 100vw, 200px"
                                />
                              </div>
                            )}
                            <div className="p-3">
                              <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                              <div className="mt-0.5 text-xs text-slate-600">Explore details & options</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {contactNavLink && (
                <Link
                  href={contactNavLink.href}
                  className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    pathname === contactNavLink.href
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {contactNavLink.label}
                </Link>
              )}
            </div>

            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex shrink-0 items-center justify-center rounded-lg bg-[#FF7444] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#e85c2d] transition-colors"
            >
              BOOK TAXI NOW- 24/7 
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`lg:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 transition-colors shrink-0 text-slate-700 hover:bg-slate-50`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-3 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
              <div className="grid gap-1">
                {mobileNavOrder.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                      pathname?.startsWith(link.href) ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
    </>
  );
}
