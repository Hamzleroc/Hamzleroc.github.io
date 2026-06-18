"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row max-w-md mx-auto"
    >
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <input
        id="nl-email"
        type="email"
        required
        placeholder="your@email.com"
        className="flex-1 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 font-sans text-sm px-5 py-4 focus:outline-none focus:border-cream/50 transition-colors"
      />
      <button
        type="submit"
        className="font-sans text-xs tracking-[0.2em] uppercase font-semibold px-7 py-4 bg-charcoal text-cream hover:bg-brown transition-colors duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cream"
      >
        Subscribe
      </button>
    </form>
  );
}
