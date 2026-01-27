import Link from "next/link";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-extrabold text-white">Contact / Devis</h1>
        <p className="text-zinc-300">
          Dites-nous ce dont vous avez besoin. Réponse rapide.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {/* CONTACT INFO */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-semibold text-white">Coordonnées</div>
              <p className="mt-1 text-sm text-zinc-300">
                Basé à {site.baseCity}, intervention {site.coverage}.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200">
                {site.baseCity}
              </span>
              <span className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200">
                Maroc
              </span>
              <span className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200">
                {site.coverage}
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3">
              <span className="text-lg">📍</span>
              <div>
                <div className="text-sm font-semibold text-white">
                  {site.baseCity}, Maroc
                </div>
                <div className="text-xs text-zinc-400">
                  Intervention {site.coverage}
                </div>
              </div>
            </div>

            <a
              href={`tel:${site.phoneRaw}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 hover:bg-zinc-950/60"
            >
              <span className="text-lg">📞</span>
              <div>
                <div className="text-sm font-semibold text-white">
                  {site.phoneDisplay}
                </div>
                <div className="text-xs text-zinc-400">Appel direct</div>
              </div>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 hover:bg-zinc-950/60"
            >
              <span className="text-lg">✉️</span>
              <div>
                <div className="text-sm font-semibold text-white">{site.email}</div>
                <div className="text-xs text-zinc-400">Réponse rapide</div>
              </div>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              href={`tel:${site.phoneRaw}`}
            >
              Appeler
            </a>

            <Link
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              href="/services"
            >
              Voir services
            </Link>
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold text-white">Demande de devis</div>
          <p className="mt-2 text-sm text-zinc-300">
            Remplissez ce formulaire — on peut le connecter à l’email ensuite.
          </p>

          <form className="mt-5 space-y-3">
            <input
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500"
              placeholder="Nom / Société"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500"
              placeholder="Téléphone"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500"
              placeholder="Email"
            />
            <textarea
              className="min-h-[120px] w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500"
              placeholder="Décrivez votre besoin (maintenance, dépannage, installation...)"
            />
            <button
              type="button"
              className="w-full rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700"
            >
              Envoyer
            </button>
          </form>

          <p className="mt-3 text-xs text-zinc-500">
            Étape suivante : connecter ce formulaire à l’email / WhatsApp.
          </p>
        </div>
      </section>
    </div>
  );
}
