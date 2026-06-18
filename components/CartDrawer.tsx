"use client";

import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-beige">
          <div>
            <h2 className="font-display text-2xl text-charcoal">Your Cart</h2>
            {totalItems > 0 && (
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-amber font-semibold mt-0.5">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </p>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-muted hover:text-charcoal transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <svg
                className="w-12 h-12 text-amber/25 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm5.625 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <p className="font-display text-xl text-charcoal mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-muted">Add something beautiful to get started.</p>
            </div>
          ) : (
            <ul className="space-y-6" aria-label="Cart items">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 flex-shrink-0 bg-gradient-to-br from-amber-pale to-beige flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-amber/20" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-display text-base text-charcoal leading-tight">{item.name}</p>
                        <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-amber/60 font-semibold mt-0.5">
                          {item.category}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted hover:text-charcoal transition-colors cursor-pointer flex-shrink-0 mt-0.5"
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Qty controls */}
                      <div className="flex items-center border border-beige">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          disabled={item.qty <= 1}
                          className="w-8 h-8 flex items-center justify-center text-muted hover:text-charcoal transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                          aria-label="Decrease quantity"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-8 text-center font-sans text-xs font-semibold text-charcoal">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center text-muted hover:text-charcoal transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                      <span className="font-sans text-sm font-semibold text-amber">
                        €{(item.priceNum * item.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-beige px-8 py-6 space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs tracking-[0.18em] uppercase font-semibold text-muted">Subtotal</span>
              <span className="font-display text-2xl text-charcoal">€{subtotal}</span>
            </div>
            <p className="font-sans text-[10px] text-muted/60">Shipping calculated at checkout.</p>
            <button className="w-full font-sans text-xs tracking-[0.2em] uppercase font-semibold py-4 bg-amber text-cream hover:bg-amber-dark transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full font-sans text-xs tracking-[0.18em] uppercase font-semibold py-3 border border-brown/20 text-brown hover:border-amber hover:text-amber transition-colors duration-200 cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
