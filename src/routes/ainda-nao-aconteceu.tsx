import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reader } from "@/components/reader";
import { Reveal } from "@/components/reveal";
import { SiteFrame } from "@/components/site-frame";
import { aindaNao, type Entry } from "@/data/content";

export const Route = createFileRoute("/ainda-nao-aconteceu")({
  head: () => ({
    meta: [
      { title: "Ainda não aconteceu — Entre Nós" },
      { name: "description", content: "Memórias que ainda não existem, guardadas antes da hora." },
      { property: "og:title", content: "Ainda não aconteceu — Entre Nós" },
      {
        property: "og:description",
        content: "Memórias que ainda não existem, guardadas antes da hora.",
      },
    ],
  }),
  component: AindaNao,
});

function AindaNao() {
  const [open, setOpen] = useState<Entry | null>(null);

  return (
    <SiteFrame
      eyebrow="Seção III"
      title="Ainda não aconteceu"
      intro="Registros abertos, esperando data. Quando acontecerem, eu preencho."
    >
      <div className="grid gap-px bg-border sm:grid-cols-2">
        {aindaNao.map((e, i) => (
          <Reveal key={e.id} delay={i * 80}>
            <button
              onClick={() => setOpen(e)}
              className="group relative flex h-full w-full flex-col gap-6 bg-background p-7 text-left transition-colors duration-700 hover:bg-secondary/60 sm:p-9"
            >
              <span className="label-xs flex items-center gap-2">
                <span className="inline-block h-1 w-1 rounded-full bg-accent/70 transition-transform duration-700 group-hover:scale-[2.4]" />
                {e.locked ? "ainda não desbloqueado" : "desbloqueado"}
              </span>
              <span
                className={`title-serif text-[1.5rem] transition-all duration-700 sm:text-[1.9rem] ${
                  e.locked ? "opacity-45 blur-[1.2px] group-hover:opacity-90 group-hover:blur-0" : ""
                }`}
              >
                {e.title}
              </span>
              <span className="label-xs mt-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                espiar
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <Reader entry={open} onClose={() => setOpen(null)} kicker="registro em aberto" />
    </SiteFrame>
  );
}
