"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import Icon from "@/components/icons/Icon";
import { getDictionary } from "@/lib/i18n";
import { path, servicePath, type Locale } from "@/lib/i18n/routes";

export default function Footer() {
  const pathname = usePathname() || "/";
  const locale: Locale = pathname.startsWith("/nl") ? "nl" : "en";
  const dict = getDictionary(locale);

  const companyLinks = [
    { href: path(locale, "about"), label: dict.nav.about },
    { href: path(locale, "projects"), label: dict.nav.projects },
    { href: path(locale, "faq"), label: dict.nav.faq },
    { href: path(locale, "contact"), label: dict.nav.contact },
  ];

  return (
    <footer className="bg-ink text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          <div className="lg:col-span-2">
            <Link href={path(locale, "home")} className="inline-block mb-6">
              <Logo variant="light" />
            </Link>
            <p className="font-sans text-sm leading-7 text-white/50 max-w-sm">
              {dict.footer.blurb}
            </p>
            <p className="font-sans text-xs text-white/30 mt-6 tracking-wide">{dict.company.tagline}</p>
          </div>

          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-white/30 mb-6">
              {dict.footer.servicesHeading}
            </h3>
            <ul className="space-y-4">
              {dict.services.map((s) => (
                <li key={s.key}>
                  <Link
                    href={servicePath(locale, s.key)}
                    className="font-sans text-sm text-white/55 hover:text-volt-light transition-colors duration-200 cursor-pointer"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-white/30 mb-6">
              {dict.footer.companyHeading}
            </h3>
            <ul className="space-y-4 mb-8">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-white/55 hover:text-volt-light transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-white/30 mb-4">
              {dict.footer.contactHeading}
            </h3>
            <ul className="space-y-3 font-sans text-sm text-white/55">
              <li className="flex items-center gap-2.5">
                <Icon name="phone" className="w-4 h-4 text-volt-light flex-shrink-0" />
                <a href={dict.company.phoneHref} className="hover:text-volt-light transition-colors duration-200 cursor-pointer">
                  {dict.company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="mail" className="w-4 h-4 text-volt-light flex-shrink-0" />
                <a href={`mailto:${dict.company.email}`} className="hover:text-volt-light transition-colors duration-200 cursor-pointer">
                  {dict.company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="mapPin" className="w-4 h-4 text-volt-light flex-shrink-0 mt-0.5" />
                <span>
                  {dict.company.address}
                  <br />
                  {dict.company.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-xs text-white/25 tracking-wide">
            &copy; {new Date().getFullYear()} {dict.company.name}. {dict.footer.rights}
          </p>
          <p className="font-sans text-xs text-white/25">{dict.footer.craftedIn}</p>
        </div>
      </div>
    </footer>
  );
}
