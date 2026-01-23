import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={`${site.name} logo`}
                width={48}
                height={48}
              />
              <div className="leading-tight">
                <div className="text-sm font-semibold">{site.name}</div>
                <div className="text-xs text-zinc-400">EL OUARTI S.A.R.L</div>
              </div>
            </div>

            <p className="mt-4 max-w-xs text-sm text-zinc-400">
              Maintenance industrielle et installations électriques basse tension.
              Basé à {site.baseCity}, intervention partout au Maroc.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-sm font-semibold">Navigation</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-4 space-y-2 text-sm text-zinc-400">
              <p>{site.baseCity}, Maroc</p>
              <p>
                Tél :{" "}
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="hover:text-white"
                >
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                Email :{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-white"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
