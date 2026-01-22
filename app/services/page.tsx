import { site } from "@/lib/site";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="text-zinc-700">
          Basé à {site.baseCity} — intervention partout au Maroc.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 p-6">
          <div className="text-lg font-semibold">Facilities Maintenance</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            <li>Maintenance préventive (rondes, checklists, planning)</li>
            <li>Maintenance corrective (dépannage, réparation)</li>
            <li>Multi-technique: électricité, CVC, plomberie, incendie</li>
            <li>Rapports & recommandations</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 p-6">
          <div className="text-lg font-semibold">Installations électriques BT</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            <li>Installation & extension BT</li>
            <li>Tableaux / distribution / repérage</li>
            <li>Éclairage industriel</li>
            <li>Mise à la terre & protection</li>
            <li>Contrôles & conformité</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 p-6">
        <div className="font-semibold">Besoin d’un devis ?</div>
        <p className="mt-2 text-sm text-zinc-700">
          Décrivez votre besoin et on vous répond rapidement.
        </p>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
