"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function DevisForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSend() {
    const text =
      `Demande de devis – ${site.name}\n\n` +
      `Nom / Société: ${name}\n` +
      `Téléphone: ${phone}\n` +
      `Email: ${email}\n\n` +
      `Besoin:\n${message}`;

    // IMPORTANT: use your whatsappNumber from site.ts (digits only, like 2126xxxxxxx)
    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  }

  return (
    <div className="mt-5 space-y-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500"
        placeholder="Nom / Société"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500"
        placeholder="Téléphone"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500"
        placeholder="Email"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-[120px] w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500"
        placeholder="Décrivez votre besoin (maintenance, dépannage, installation...)"
      />

      <button
        type="button"
        onClick={handleSend}
        className="w-full rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
      >
        Envoyer sur WhatsApp
      </button>

      <p className="text-xs text-zinc-500">
        Le message s’ouvrira dans WhatsApp avec votre demande déjà remplie.
      </p>
    </div>
  );
}
