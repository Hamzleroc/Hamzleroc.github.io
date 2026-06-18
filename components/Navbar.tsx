"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/products", label: "Shop" },
  { href: "/about",    label: "Our Story" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-beige/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 focus-visible:outline-2 focus-visible:outline-amber">
          <Image
            src="/logo.jpg"
            alt="Malab Skin"
            width={90}
            height={45}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-xs tracking-[0.18em] uppercase font-medium text-brown hover:text-amber transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/products"
            className="font-sans text-xs tracking-[0.18em] uppercase font-semibold px-7 py-3 bg-amber text-cream hover:bg-amber-dark transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber"
          >
            Shop Now
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-brown hover:text-amber transition-colors cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-80" : "max-h-0"}`}
      >
        <div className="px-6 pb-8 pt-2 flex flex-col gap-5 bg-cream border-t border-beige">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans text-xs tracking-[0.18em] uppercase font-medium text-brown hover:text-amber transition-colors cursor-pointer"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className="inline-block font-sans text-xs tracking-[0.18em] uppercase font-semibold px-7 py-3 bg-amber text-cream hover:bg-amber-dark transition-colors w-fit mt-2 cursor-pointer"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}
