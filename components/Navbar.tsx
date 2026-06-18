"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/products", label: "Shop" },
  { href: "/about",    label: "Our Story" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { totalItems, openCart } = useCart();

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

        {/* Desktop right side: Cart icon + Shop Now */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cart button */}
          <button
            onClick={openCart}
            className="relative p-2 text-brown hover:text-amber transition-colors cursor-pointer"
            aria-label={`Open cart${totalItems > 0 ? `, ${totalItems} items` : ""}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center bg-amber text-cream font-sans text-[10px] font-bold rounded-full">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>

          <Link
            href="/products"
            className="font-sans text-xs tracking-[0.18em] uppercase font-semibold px-7 py-3 bg-amber text-cream hover:bg-amber-dark transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile: Cart + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={openCart}
            className="relative p-2 text-brown hover:text-amber transition-colors cursor-pointer"
            aria-label={`Open cart${totalItems > 0 ? `, ${totalItems} items` : ""}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center bg-amber text-cream font-sans text-[10px] font-bold rounded-full">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-brown hover:text-amber transition-colors cursor-pointer"
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
