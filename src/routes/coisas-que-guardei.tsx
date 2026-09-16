import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reader } from "@/components/reader";
import { Reveal } from "@/components/reveal";
import { SiteFrame } from "@/components/site-frame";
import { guardei, type Entry } from "@/data/content";

export const Route = createFileRoute("/coisas-que-guardei")({
  head: () => ({
    meta: [
      { title: "Coisas que guardei — Entre Nós" },
      { name: "description", content: "Pequenos detalhes percebidos e guardados." },
      { property: "og:title", content: "Coisas que guardei — Entre Nós" },
      { property: "og:description", content: "Pequenos detalhes percebidos e guardados." },
    ],
  }),
  component: Guardei,
});

/** slight, deterministic tilt so the cards feel like physical objects */
const tilt = ["-0.7deg", "0.5deg", "-0.35deg", "0.8deg", "-0.5deg", "0.4deg"];

function Guardei() {
  const [open, setOpen] = useState<Entry | null>(null);

  return (
    <SiteFrame
      eyebrow="Seção II"
      title="Coisas que guardei"
      intro="Detalhes pequenos, do tipo que ninguém anota. Eu anotei."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {guardei.map((e, i) => (
          <Reveal key={e.id} delay={i * 90}>
            <button
              onClick={() => setOpen(e)}
              style={{ rotate: tilt[i % tilt.length] }}
              className="grain group flex h-full w-full flex-col justify-between gap-8 border border-border bg-card p-6 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:rotate-0 hover:border-accent/40 hover:shadow-[0_24px_50px_-32px_rgba(0,0,0,0.35)]"
            >
              <span className="label-xs transition-colors group-hover:text-accent">
                {e.ref}
              </span>
              <span className="title-serif text-[1.3rem] leading-[1.25]">{e.title}</span>
              <span className="label-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                ler a nota
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <Reader entry={open} onClose={() => setOpen(null)} kicker="nota guardada" />
    </SiteFrame>
  );
}
