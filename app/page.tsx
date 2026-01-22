import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl bg-zinc-950 text-white">
        {/* subtle red glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(700px 350px at 20% 30%, rgba(220,38,38,0.22), transparent 60%), radial-gradient(700px 350px at 80% 70%, rgba(220,38,38,0.12), transparent 60%)",
          }}
        />
        <div className="relative p-8 md:p-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
            Basé à {site.baseCity} • Intervention {site.coverage}
          </div>

          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
            Maintenance industrielle & installations électriques BT
          </h1>

          <p className="mt-4 max-w-2xl text-base text-zinc-200 md:text-lg">
            Préventif, correctif et multi-technique pour usines et bâtiments
            industriels. Réactivité, sécurité, qualité.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700"
            >
              Demander un devis
            </Link>
            <a
              href={`tel:${site.phoneRaw}`}
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Appeler {site.phoneDisplay}
            </a>
            <Link
              href="/services"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Nos services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-2xl font-bold">{site.experienceYears}+</div>
              <div className="mt-1 text-xs text-zinc-300">Années d’expérience</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-2xl font-bold">24/7</div>
              <div className="mt-1 text-xs text-zinc-300">Dépannage selon besoin</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-2xl font-bold">Maroc</div>
              <div className="mt-1 text-xs text-zinc-300">Couverture nationale</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (tiles) */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Ce que nous faisons</h2>
          <p className="mt-2 text-zinc-700">
            Deux pôles principaux, avec une exécution orientée sécurité et fiabilité.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 p-6">
            <div className="text-sm font-semibold text-zinc-950">
              Facilities Maintenance
            </div>
            <p className="mt-2 text-sm text-zinc-700">
              Préventif + correctif, rondes, checklists, rapports et recommandations.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-6">
            <div className="text-sm font-semibold text-zinc-950">
              Maintenance multi-technique
            </div>
            <p className="mt-2 text-sm text-zinc-700">
              Électricité, CVC, plomberie, incendie — pour continuité de service.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-6">
            <div className="text-sm font-semibold text-zinc-950">
              Installations électriques BT
            </div>
            <p className="mt-2 text-sm text-zinc-700">
              Installation, extension, tableaux, distribution, éclairage, mise à la terre.
            </p>
          </div>
        </div>

        <div>
          <Link
            href="/services"
            className="inline-flex rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium hover:bg-zinc-50"
          >
            Voir le détail des services
          </Link>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="rounded-3xl border border-zinc-200 p-8">
        <div className="text-sm font-semibold text-zinc-950">
          Références industrielles
        </div>
        <p className="mt-2 text-sm text-zinc-700">
          Ils nous font confiance (exemples):
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {site.clients.map((c) => (
            <div
              key={c}
              className="rounded-2xl border border-zinc-200 bg-white p-4 text-center text-sm font-semibold text-zinc-900"
            >
              {c}
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          (Les marques citées sont des références clients, sans affiliation.)
        </p>
      </section>

      {/* PROCESS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Comment on travaille</h2>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            { t: "1. Diagnostic", d: "Compréhension du besoin et visite si nécessaire." },
            { t: "2. Devis", d: "Proposition claire (délais, matériaux, sécurité)." },
            { t: "3. Exécution", d: "Intervention propre, sécurisée, traçable." },
            { t: "4. Rapport", d: "Compte rendu + recommandations." },
          ].map((s) => (
            <div key={s.t} className="rounded-3xl border border-zinc-200 p-6">
              <div className="text-sm font-semibold text-zinc-950">{s.t}</div>
              <p className="mt-2 text-sm text-zinc-700">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-zinc-950 p-8 text-white md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Besoin d’un devis ?</h2>
            <p className="mt-2 text-sm text-zinc-200">
              Maintenance ou installation électrique — réponse rapide.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700"
            >
              Contact / Devis
            </Link>
            <a
              href={`tel:${site.phoneRaw}`}
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Appeler
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
