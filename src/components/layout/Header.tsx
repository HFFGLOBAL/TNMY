"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type FocusEvent, type RefObject } from "react";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";
import { TopBar } from "./TopBar";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<null | "destinations" | "services" | "tourPackages">(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<null | "destinations" | "services" | "tourPackages">(null);
  const destinationsMenuRef = useRef<HTMLDivElement | null>(null);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const tourMenuRef = useRef<HTMLDivElement | null>(null);
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

  const tourMenu = useMemo(
    () => ({
      oneDay: [
        { label: "Mysore to Coorg", href: ROUTES.MYSORE_TO_COORG },
        { label: "Mysore to Ooty", href: ROUTES.MYSORE_TO_OOTY },
        { label: "Mysore to Wayanad", href: ROUTES.MYSORE_TO_WAYANAD },
        { label: "Mysore to Bangalore", href: ROUTES.MYSORE_TO_BANGALORE },
        { label: "Mysore One Day Tour", href: ROUTES.MYSORE_ONE_DAY_TOUR },
      ],
      multiDay: [
        { label: "Mysore, Coorg & Wayanad", href: ROUTES.MYSORE_COORG_WAYANAD },
        { label: "Mysore, Ooty & Coorg", href: ROUTES.MYSORE_OOTY_COORG },
        { label: "Mysore, Ooty & Kodaikanal", href: ROUTES.MYSORE_OOTY_KODAIKANAL },
        { label: "Goa Trips from Mysore", href: ROUTES.GOA_TRIPS },
        { label: "Tirupati Package", href: ROUTES.TIRUPATI_PACKAGE },
        { label: "Custom Packages", href: ROUTES.CUSTOM_PACKAGES },
      ],
    }),
    []
  );

  const destinationsMenu = useMemo(
    () => ({
      all: [
        { label: "Mysore", href: ROUTES.DEST_MYSORE },
        { label: "Coorg", href: ROUTES.DEST_COORG },
        { label: "Ooty", href: ROUTES.DEST_OOTY },
        { label: "Wayanad", href: ROUTES.DEST_WAYANAD },
        { label: "Bangalore", href: ROUTES.DEST_BANGALORE },
        { label: "Kodaikanal", href: ROUTES.DEST_KODAIKANAL },
      ],
    }),
    []
  );

  const servicesMenu = useMemo(
    () => ({
      core: [
        { label: "Outstation Taxi", href: ROUTES.OUTSTATION_TAXI, description: "Transparent outstation pricing" },
        { label: "Local Sightseeing", href: ROUTES.SIGHTSEEING_TAXI, description: "Explore Mysore and surrounding cities" },
        { label: "Airport Transfer", href: ROUTES.AIRPORT_TRANSFER, description: "On-time pickup to/from airports" },
      ],
      extra: [
        { label: "Corporate Cab", href: ROUTES.CORPORATE_CAB },
        { label: "Wedding Car Rental", href: ROUTES.WEDDING_CAR },
      ],
    }),
    []
  );

  const mobileNavOrder = useMemo(
    () => [
      { label: "Home", href: ROUTES.HOME },
      { label: "About", href: ROUTES.ABOUT },
      {
        label: "Services",
        href: ROUTES.SERVICES,
        key: "services" as const,
        children: [...servicesMenu.core, ...servicesMenu.extra],
      },
      {
        label: "Tour Packages",
        href: ROUTES.TOUR_PACKAGES,
        key: "tourPackages" as const,
        children: [...tourMenu.oneDay, ...tourMenu.multiDay],
      },
      {
        label: "Destinations",
        href: ROUTES.DESTINATIONS,
        key: "destinations" as const,
        children: destinationsMenu.all,
      },
      { label: "Contact", href: ROUTES.CONTACT },
    ],
    [servicesMenu, tourMenu, destinationsMenu]
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
        className={`fixed left-0 right-0 z-50 border-b bg-white/95 backdrop-blur-md border-slate-200 shadow-sm transition-all duration-300 ${
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
                      ? "text-[#e85c2d] bg-orange-50"
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
                      ? "text-[#e85c2d] bg-orange-50"
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
                    className="absolute left-0 top-full mt-1 w-64 rounded-xl bg-white py-2 ring-1 ring-slate-900/10 shadow-lg"
                    role="menu"
                    aria-label="Services"
                    onMouseEnter={() => setOpenDesktopMenu("services")}
                    onMouseLeave={() => setOpenDesktopMenu(null)}
                  >
                    {[...servicesMenu.core, ...servicesMenu.extra].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#e85c2d] transition-colors"
                        role="menuitem"
                        onClick={() => setOpenDesktopMenu(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Tour Packages menu */}
              <div
                ref={tourMenuRef}
                className="relative"
                onMouseEnter={() => setOpenDesktopMenu("tourPackages")}
                onMouseLeave={() => setOpenDesktopMenu(null)}
                onFocusCapture={() => setOpenDesktopMenu("tourPackages")}
                onBlurCapture={(e) => closeDesktopMenuOnBlur(e, tourMenuRef)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpenDesktopMenu(null);
                }}
              >
                <Link
                  href={ROUTES.TOUR_PACKAGES}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    pathname?.startsWith(ROUTES.TOUR_PACKAGES)
                      ? "text-[#e85c2d] bg-orange-50"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={openDesktopMenu === "tourPackages"}
                >
                  Tour Packages
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {openDesktopMenu === "tourPackages" && (
                  <div
                    className="absolute left-0 top-full mt-1 w-64 max-h-112 overflow-y-auto rounded-xl bg-white py-2 ring-1 ring-slate-900/10 shadow-lg"
                    role="menu"
                    aria-label="Tour Packages"
                    onMouseEnter={() => setOpenDesktopMenu("tourPackages")}
                    onMouseLeave={() => setOpenDesktopMenu(null)}
                  >
                    <div className="px-4 pt-1 pb-1 text-xs font-semibold tracking-wide text-slate-400">One-day trips</div>
                    {tourMenu.oneDay.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#e85c2d] transition-colors"
                        role="menuitem"
                        onClick={() => setOpenDesktopMenu(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="mt-1 border-t border-slate-100 px-4 pt-2 pb-1 text-xs font-semibold tracking-wide text-slate-400">
                      Multi-day &amp; custom
                    </div>
                    {tourMenu.multiDay.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#e85c2d] transition-colors"
                        role="menuitem"
                        onClick={() => setOpenDesktopMenu(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="mt-1 border-t border-slate-100 pt-1">
                      <Link
                        href={ROUTES.TOUR_PACKAGES}
                        className="block px-4 py-2.5 text-sm font-semibold text-[#e85c2d] hover:bg-orange-50 transition-colors"
                        role="menuitem"
                        onClick={() => setOpenDesktopMenu(null)}
                      >
                        View all packages →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Destinations menu */}
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
                      ? "text-[#e85c2d] bg-orange-50"
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
                    className="absolute left-0 top-full mt-1 w-64 rounded-xl bg-white py-2 ring-1 ring-slate-900/10 shadow-lg"
                    role="menu"
                    aria-label="Destinations"
                    onMouseEnter={() => setOpenDesktopMenu("destinations")}
                    onMouseLeave={() => setOpenDesktopMenu(null)}
                  >
                    {destinationsMenu.all.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#e85c2d] transition-colors"
                        role="menuitem"
                        onClick={() => setOpenDesktopMenu(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="mt-1 border-t border-slate-100 pt-1">
                      <Link
                        href={ROUTES.DESTINATIONS}
                        className="block px-4 py-2.5 text-sm font-semibold text-[#e85c2d] hover:bg-orange-50 transition-colors"
                        role="menuitem"
                        onClick={() => setOpenDesktopMenu(null)}
                      >
                        View all destinations →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {contactNavLink && (
                <Link
                  href={contactNavLink.href}
                  className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    pathname === contactNavLink.href
                      ? "text-[#e85c2d] bg-orange-50"
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
                {mobileNavOrder.map((link) => {
                  const hasChildren = "children" in link && link.children && link.children.length > 0;
                  const submenuKey = "key" in link ? link.key : undefined;
                  const isSubmenuOpen = hasChildren && openMobileSubmenu === submenuKey;

                  if (!hasChildren) {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                          pathname?.startsWith(link.href) ? "bg-orange-50 text-[#e85c2d]" : "text-slate-700 hover:bg-slate-50"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  }

                  return (
                    <div key={link.href}>
                      <div
                        className={`flex items-center rounded-lg transition-colors ${
                          pathname?.startsWith(link.href) ? "bg-orange-50 text-[#e85c2d]" : "text-slate-700"
                        }`}
                      >
                        <Link
                          href={link.href}
                          className="flex-1 px-3 py-2 text-sm font-semibold hover:bg-slate-50 rounded-lg"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setOpenMobileSubmenu(isSubmenuOpen ? null : submenuKey ?? null)}
                          className="px-3 py-2 hover:bg-slate-50 rounded-lg"
                          aria-label={`Toggle ${link.label} submenu`}
                          aria-expanded={isSubmenuOpen}
                        >
                          <svg
                            className={`h-4 w-4 transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                      {isSubmenuOpen && (
                        <div className="ml-3 grid gap-1 border-l border-slate-200 pl-3 py-1">
                          {link.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                                pathname === child.href
                                  ? "bg-orange-50 text-[#e85c2d] font-semibold"
                                  : "text-slate-600 hover:bg-slate-50"
                              }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
    </>
  );
}
