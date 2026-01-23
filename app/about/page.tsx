import Image from "next/image";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* INTRO */}
      <section>
        <h1 className="text-3xl font-extrabold text-white">
          À propos de {site.name}
        </h1>
        <p className="mt-4 max-w-3xl text-zinc-300">
          {site.name} est spécialisée en maintenance industrielle et installations
          électriques basse tension. Basée à {site.baseCity}, l’entreprise
          intervient partout au Maroc pour des clients industriels exigeants.
        </p>
      </section>

      {/* VALUES */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            t: "Expérience",
            d: `${site.experienceYears}+ ans d’expertise terrain en milieu industriel.`,
          },
          {
            t: "Fiabilité",
            d: "Interventions sécurisées, traçables et conformes aux exigences industrielles.",
          },
          {
            t: "Réactivité",
            d: "Délais courts et capacité d’intervention rapide partout au Maroc.",
          },
        ].map((v) => (
          <div
            key={v.t}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-lg font-semibold text-white">{v.t}</div>
            <p className="mt-2 text-sm text-zinc-300">{v.d}</p>
          </div>
        ))}
      </section>

      {/* CLIENT REFERENCES */}
      <section className="rounded-3xl bg-zinc-900 px-6 py-12 md:px-10">
        <h2 className="text-center text-xl font-extrabold tracking-wide text-red-600">
          NOS RÉFÉRENCES CLIENTS
        </h2>

        <p className="mt-3 text-center text-sm text-zinc-300">
          Clients industriels et groupes internationaux.
        </p>

        {/* simple fade-in */}
        <div className="mt-10 animate-fadeInUp">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {[
              // ✅ reordered (top first)
              { src: "/clients/lear.png", alt: "LEAR Corporation" },
              { src: "/clients/yazaki.png", alt: "Yazaki" },
              { src: "/clients/magneti-marelli.png", alt: "Magneti Marelli" },
              { src: "/clients/coficab.png", alt: "COFICAB" },
              { src: "/clients/acome.png", alt: "ACOME Group" },
              { src: "/clients/erum.png", alt: "ERUM" },
              { src: "/clients/elastomer-solutions.png", alt: "Elastomer Solutions" },
              { src: "/clients/brillas-agusti.png", alt: "Brillas Agusti" },
            ].map((logo) => (
              <div
                key={logo.alt}
                className="group flex h-24 items-center justify-center rounded-xl border border-white/10 bg-zinc-950/60 px-6 transition hover:border-red-600/60"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={70}
                  className="max-h-12 w-auto object-contain opacity-75 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-zinc-400">
          Les marques citées sont des références clients, sans affiliation.
        </p>
      </section>
    </div>
  );
}
