"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathnameRaw = usePathname();

  // Normalize pathname: remove trailing slash (except "/")
  const pathname = useMemo(() => {
    if (!pathnameRaw) return "/";
    if (pathnameRaw === "/") return "/";
    return pathnameRaw.replace(/\/+$/, "");
  }, [pathnameRaw]);

  // Close mobile menu when navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-white p-1 shadow-sm ring-1 ring-zinc-200">
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={52}
              height={52}
              priority
            />
          </div>

          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-semibold tracking-tight text-zinc-950">
              TECHNO SERVICES
            </div>
            <div className="text-xs text-zinc-500">EL OUARTI S.A.R.L</div>
          </div>
        </Link>

        {/* Desktop nav (active = red pill) */}
        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((i) => {
            const active = isActive(i.href);

            return (
              <Link
                key={i.href}
                href={i.href}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-red-600 text-white"
                    : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100"
                }`}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            href={`tel:${site.phoneRaw}`}
          >
            Appeler
          </a>

          <Link
            className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            href="/contact"
          >
            Demander un devis
          </Link>
        </div>

        {/* Mobile button */}
        <button
          className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-zinc-200/70 bg-white/95 backdrop-blur md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid gap-2">
              {nav.map((i) => {
                const active = isActive(i.href);

                return (
                  <Link
                    key={i.href}
                    href={i.href}
                    className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-red-600 text-white"
                        : "text-zinc-900 hover:bg-zinc-100"
                    }`}
                  >
                    {i.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-3 grid gap-2">
              <a
                className="rounded-xl border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                href={`tel:${site.phoneRaw}`}
              >
                Appeler {site.phoneDisplay}
              </a>

              <Link
                className="rounded-xl bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700"
                href="/contact"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
