import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-zinc-950 text-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-2">
                <Image
                  src="/logo.png"
                  alt={`${site.name} logo`}
                  width={34}
                  height={34}
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  {site.name}
                </div>
                <div className="text-xs text-zinc-400">
                  Basé à {site.baseCity} • Intervention {site.coverage}
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-zinc-300">
              Maintenance multi-technique & installations électriques BT pour
              sites industriels et tertiaires.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                {site.experienceYears} ans d’expérience
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                Maintenance industrielle
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                Électricité BT
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-zinc-300">
              <div>
                <span className="text-zinc-400">Téléphone:</span>{" "}
                <a
                  className="font-medium text-white underline decoration-red-500/40 underline-offset-4 hover:decoration-red-500"
                  href={`tel:${site.phoneRaw}`}
                >
                  {site.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="text-zinc-400">Email:</span>{" "}
                <a
                  className="font-medium text-white underline decoration-red-500/40 underline-offset-4 hover:decoration-red-500"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </div>
              <div className="pt-3">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                  href="/contact"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp + Clients */}
          <div>
            <div className="text-sm font-semibold text-white">WhatsApp</div>
            <p className="mt-3 text-sm text-zinc-300">
              Réponse rapide pour demandes de devis et dépannage.
            </p>

            <a
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
              href={`https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
                "Bonjour, je souhaite un devis (maintenance / électricité)."
              )}`}
            >
              Envoyer un message WhatsApp
            </a>

            <div className="mt-6">
              <div className="text-sm font-semibold text-white">
                Clients (référence)
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {site.clients.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-white" href="/services">
              Services
            </a>
            <a className="hover:text-white" href="/about">
              À propos
            </a>
            <a className="hover:text-white" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
