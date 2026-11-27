"use client";

import { useApp } from "./AppProvider";
import { ui, t } from "@/lib/i18n";
import { formatPrice, sumCart } from "@/lib/format";

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { locale, currency, cart, removeFromCart, clearCart } = useApp();
  const total = sumCart(cart);

  return (
    <div
      className={`fixed inset-0 z-40 transition ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-tarian-100 p-4">
          <h2 className="text-lg font-semibold">{ui("cart.title", locale)}</h2>
          <button onClick={onClose} aria-label="Close" className="text-2xl leading-none">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p className="text-sm text-tarian-900/60">{ui("cart.empty", locale)}</p>
          ) : (
            <ul className="space-y-3">
              {cart.map((item) => (
                <li
                  key={item.refId}
                  className="flex items-center justify-between gap-2 rounded border border-tarian-100 p-2"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      {t(item.name, locale)}
                    </p>
                    <p className="text-xs text-tarian-900/60">
                      {formatPrice(item.price, currency)} × {item.qty}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.refId)}
                    className="text-xs text-red-600 hover:underline"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-tarian-100 p-4">
          <div className="mb-2 flex items-center justify-between font-semibold">
            <span>{ui("cart.total", locale)}</span>
            <span>{formatPrice(total, currency)}</span>
          </div>
          <button
            disabled={cart.length === 0}
            onClick={() => {
              alert(ui("cart.checkoutNote", locale));
              clearCart();
              onClose();
            }}
            className="w-full rounded bg-tarian-600 py-2 text-sm font-medium text-white hover:bg-tarian-700 disabled:opacity-40"
          >
            {ui("cart.checkout", locale)}
          </button>
          <p className="mt-2 text-center text-xs text-tarian-900/50">
            {ui("cart.checkoutNote", locale)}
          </p>
        </div>
      </aside>
    </div>
  );
}
