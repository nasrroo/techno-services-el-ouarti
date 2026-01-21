import { site } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
        "Bonjour, je souhaite un devis (maintenance / électricité)."
      )}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-medium shadow-sm hover:bg-zinc-50"
    >
      WhatsApp
    </a>
  );
}
