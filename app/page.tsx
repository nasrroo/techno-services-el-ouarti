import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO SECTION */}
      <section className="rounded-3xl bg-gradient-to-br from-black via-zinc-900 to-black p-8 md:p-14 text-white">
        <p className="text-sm font-medium text-zinc-300">
          Basé à {site.baseCity} • Intervention partout au Maroc
        </p>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
          TECHNO SERVICES EL OUARTI
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-zinc-200">
          Maintenance industrielle & installations électriques pour sites
          industriels et tertiaires.
        </p>

        <div className="mt-6 grid max-w-2xl gap-2 text-zinc-200">
          <span>✔ Maintenance préventive & corrective</span>
          <span>
            ✔ Maintenance multi-technique (électricité, CVC, plomberie,
            incendie)
          </span>
          <span>✔ Installations électriques basse tension</span>
          <span>✔ Dépannage & interventions urgentes</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700"
          >
            Demander un devis
          </Link>

          <a
            href={`tel:${site.phoneRaw}`}
            className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10"
          >
            Appeler
          </a>
        </div>
      </section>

      {/* WHY US */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "10 ans d’expérience",
            text: "Expertise confirmée en maintenance industrielle et électricité.",
          },
          {
            title: "Clients industriels",
            text: "Interventions pour LEAR Corporation et Yazaki Erem.",
          },
          {
            title: "Intervention rapide",
            text: "Réactivité, sécurité et fiabilité partout au Maroc.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-zinc-200 p-6"
          >
            <div className="text-lg font-semibold">{item.title}</div>
            <p className="mt-2 text-sm text-zinc-700">{item.text}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-zinc-200 p-8">
        <h2 className="text-xl font-semibold">
          Besoin d’une intervention ou d’un devis ?
        </h2>
        <p className="mt-2 text-zinc-700">
          Contactez-nous dès maintenant pour une réponse rapide.
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Contact / Devis
          </Link>

          <a
            href={`tel:${site.phoneRaw}`}
            className="rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold hover:bg-zinc-50"
          >
            Appeler {site.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
