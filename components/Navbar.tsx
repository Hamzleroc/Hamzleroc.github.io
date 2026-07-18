"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import Icon from "@/components/icons/Icon";
import { getDictionary } from "@/lib/i18n";
import { path, servicePath, counterpartPath, type Locale } from "@/lib/i18n/routes";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const locale: Locale = pathname.startsWith("/nl") ? "nl" : "en";
  const dict = getDictionary(locale);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
    setMobileServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: path(locale, "about"), label: dict.nav.about },
    { href: path(locale, "projects"), label: dict.nav.projects },
    { href: path(locale, "faq"), label: dict.nav.faq },
    { href: path(locale, "contact"), label: dict.nav.contact },
  ];

  const otherHref = counterpartPath(pathname, locale);
  const solid = scrolled || open;
  const navTextColor = solid ? "text-navy" : "text-white";
  const navMutedColor = solid ? "text-slate" : "text-white/70";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_theme(colors.line)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href={path(locale, "home")} className="flex-shrink-0 focus-visible:outline-2 focus-visible:outline-volt rounded">
          <Logo variant={solid ? "dark" : "light"} />
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Main navigation">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 font-sans text-sm font-medium hover:text-volt transition-colors duration-200 cursor-pointer py-2 ${navTextColor}`}
              aria-expanded={servicesOpen}
            >
              {dict.nav.services}
              <Icon name="chevronDown" className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <div className="w-[30rem] bg-white rounded-2xl border border-line shadow-[0_24px_60px_-20px_rgba(19,29,51,0.25)] p-3 grid grid-cols-2 gap-1">
                {dict.services.map((s) => (
                  <Link
                    key={s.key}
                    href={servicePath(locale, s.key)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-paper transition-colors duration-150 cursor-pointer"
                  >
                    <span className="w-8 h-8 rounded-lg bg-volt/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={s.icon} className="w-4 h-4 text-volt-dark" />
                    </span>
                    <span className="font-sans text-sm font-medium text-navy leading-tight">{s.navLabel}</span>
                  </Link>
                ))}
                <div className="col-span-2 border-t border-line mt-2 pt-3 px-3 pb-1">
                  <p className="font-sans text-xs text-slate mb-2">{dict.nav.servicesMenuNote}</p>
                  <Link
                    href={path(locale, "services")}
                    className="font-sans text-xs font-semibold text-volt hover:text-volt-dark inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {dict.common.viewAllServices}
                    <Icon name="arrow" className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-sans text-sm font-medium hover:text-volt transition-colors duration-200 cursor-pointer ${navTextColor}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <Link
            href={otherHref}
            className={`font-sans text-xs tracking-[0.12em] uppercase font-semibold hover:text-volt transition-colors duration-200 cursor-pointer ${navMutedColor}`}
            aria-label={locale === "en" ? "Bekijk in het Nederlands" : "View in English"}
          >
            {locale === "en" ? "NL" : "EN"}
          </Link>
          <Link
            href={path(locale, "contact")}
            className="font-sans text-sm font-semibold px-6 py-3 rounded-full bg-volt text-white hover:bg-volt-dark transition-colors duration-200 cursor-pointer shadow-[0_8px_20px_-8px_rgba(62,123,250,0.6)]"
          >
            {dict.nav.getQuote}
          </Link>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <Link
            href={otherHref}
            className={`font-sans text-xs tracking-[0.12em] uppercase font-semibold hover:text-volt transition-colors cursor-pointer ${navMutedColor}`}
          >
            {locale === "en" ? "NL" : "EN"}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className={`p-2 hover:text-volt transition-colors cursor-pointer ${navTextColor}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[36rem]" : "max-h-0"}`}>
        <div className="px-6 pb-8 pt-2 flex flex-col gap-1 bg-white border-t border-line">
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between font-sans text-sm font-medium text-navy py-3 cursor-pointer"
            aria-expanded={mobileServicesOpen}
          >
            {dict.nav.services}
            <Icon name="chevronDown" className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-96" : "max-h-0"}`}>
            <div className="flex flex-col gap-1 pb-2 pl-3">
              {dict.services.map((s) => (
                <Link
                  key={s.key}
                  href={servicePath(locale, s.key)}
                  onClick={() => setOpen(false)}
                  className="font-sans text-sm text-slate hover:text-volt py-2 cursor-pointer"
                >
                  {s.navLabel}
                </Link>
              ))}
              <Link
                href={path(locale, "services")}
                onClick={() => setOpen(false)}
                className="font-sans text-sm font-semibold text-volt py-2 cursor-pointer"
              >
                {dict.common.viewAllServices}
              </Link>
            </div>
          </div>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm font-medium text-navy hover:text-volt py-3 cursor-pointer border-t border-line"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href={path(locale, "contact")}
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center font-sans text-sm font-semibold px-6 py-3.5 rounded-full bg-volt text-white cursor-pointer"
          >
            {dict.nav.getQuote}
          </Link>
        </div>
      </div>
    </header>
  );
}
