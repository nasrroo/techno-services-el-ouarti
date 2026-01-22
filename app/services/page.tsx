import { site } from "@/lib/site";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-white">Services</h1>
        <p className="text-zinc-300">
          Basé à {site.baseCity} — intervention partout au Maroc.
        </p>
      </header>

      {/* Service cards */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Facilities */}
        <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
          <div className="text-lg font-semibold text-white">
            Facilities Maintenance
          </div>

          <ul className="mt-4 space-y-3 text-sm text-zinc-200">
            {[
              "Maintenance préventive (rondes, checklists, planning)",
              "Maintenance corrective (dépannage, réparation)",
              "Multi-technique : électricité, CVC, plomberie, incendie",
              "Rapports & recommandations",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-red-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Electrical */}
        <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
          <div className="text-lg font-semibold text-white">
            Installations électriques BT
          </div>

          <ul className="mt-4 space-y-3 text-sm text-zinc-200">
            {[
              "Installation & extension BT",
              "Tableaux / distribution / repérage",
              "Éclairage industriel",
              "Mise à la terre & protection",
              "Contrôles & conformité",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-red-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-white/20 bg-white/5 p-8">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-white">
            Besoin d’un devis ?
          </div>
          <p className="text-sm text-zinc-300">
            Décrivez votre besoin et nous vous répondons rapidement.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700"
          >
            Demander un devis
          </Link>

          <a
            href={`tel:${site.phoneRaw}`}
            className="rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Appeler {site.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
