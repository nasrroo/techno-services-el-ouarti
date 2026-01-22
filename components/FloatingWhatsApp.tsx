"use client";

import Image from "next/image";
import { site } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${site.whatsappRaw}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-3
        rounded-full
        bg-[#25D366]
        px-4 py-3
        text-white
        shadow-lg shadow-black/20
        hover:bg-[#1ebe5d]
        transition
      "
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={22}
        height={22}
        priority
      />
      <span className="hidden sm:inline text-sm font-semibold">
        WhatsApp
      </span>
    </a>
  );
}
