import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reader } from "@/components/reader";
import { Reveal } from "@/components/reveal";
import { SiteFrame } from "@/components/site-frame";
import { cartas, type Entry } from "@/data/content";

export const Route = createFileRoute("/para-ler")({
  head: () => ({
    meta: [
      { title: "Para ler — Entre Nós" },
      { name: "description", content: "Correspondências pessoais, para abrir na hora certa." },
      { property: "og:title", content: "Para ler — Entre Nós" },
      { property: "og:description", content: "Correspondências pessoais, para abrir na hora certa." },
    ],
  }),
  component: ParaLer,
});

function ParaLer() {
  const [open, setOpen] = useState<Entry | null>(null);

  return (
    <SiteFrame
      eyebrow="Seção IV"
      title="Para ler"
      intro="Cartas. Nenhuma delas tem pressa — algumas talvez só façam sentido depois."
    >
      <div className="space-y-4">
        {cartas.map((e, i) => (
          <Reveal key={e.id} delay={i * 80}>
            <button
              onClick={() => setOpen(e)}
              className="grain group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-3 border border-border bg-card px-6 py-7 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-accent/40 hover:px-8 sm:px-9 sm:hover:px-11"
            >
              <div className="min-w-0">
                <span className="label-xs">{e.ref}</span>
                <p className="title-serif mt-3 text-[1.5rem] sm:text-[1.85rem]">{e.title}</p>
                {e.meta && (
                  <p className="mt-2 font-serif text-sm italic text-muted-foreground">{e.meta}</p>
                )}
              </div>
              <span className="label-xs shrink-0 transition-colors group-hover:text-accent">
                ler
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <Reader entry={open} onClose={() => setOpen(null)} kicker="correspondência" />
    </SiteFrame>
  );
}
