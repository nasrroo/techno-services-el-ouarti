"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const pathnameRaw = usePathname() || "/";

  // normalize trailing slash
  const pathname =
    pathnameRaw === "/" ? "/" : pathnameRaw.replace(/\/+$/, "");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-white p-1 shadow-sm ring-1 ring-white/10">
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={52}
              height={52}
              priority
            />
          </div>

          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-semibold tracking-tight text-white">
              TECHNO SERVICES
            </div>
            <div className="text-xs text-zinc-300">EL OUARTI S.A.R.L</div>
          </div>
        </Link>

        {/* Desktop nav */}
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
                    : "text-zinc-200 hover:text-white hover:bg-white/10"
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
            className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
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
          className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-zinc-950/90 backdrop-blur md:hidden">
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
                        : "text-zinc-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {i.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-3 grid gap-2">
              <a
                className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
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
