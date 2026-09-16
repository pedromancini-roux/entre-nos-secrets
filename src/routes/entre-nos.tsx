import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SiteFrame } from "@/components/site-frame";
import { fragmentos, type Fragment } from "@/data/content";

export const Route = createFileRoute("/entre-nos")({
  head: () => ({
    meta: [
      { title: "Entre nós — Entre Nós" },
      { name: "description", content: "Fragmentos que só existem entre duas pessoas." },
      { property: "og:title", content: "Entre nós" },
      { property: "og:description", content: "Fragmentos que só existem entre duas pessoas." },
    ],
  }),
  component: EntreNos,
});

function EntreNos() {
  const [active, setActive] = useState<Fragment | null>(null);

  return (
    <SiteFrame
      eyebrow="Seção V"
      title="Entre nós"
      intro="Nada aqui é explicado. Fragmentos soltos — toque em um para ver o que tem dentro."
    >
      <div className="flex flex-wrap gap-3">
        {fragmentos.map((f, i) => (
          <Reveal key={f.id} delay={i * 70}>
            <button
              onClick={() => setActive(active?.id === f.id ? null : f)}
              className={`group flex items-baseline gap-3 border px-5 py-4 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                active?.id === f.id
                  ? "border-accent/60 bg-secondary/70"
                  : "border-border bg-card hover:-translate-y-0.5 hover:border-accent/40"
              }`}
            >
              <span className="label-xs shrink-0">{f.kind}</span>
              <span className="font-serif text-[1.15rem] leading-snug">{f.text}</span>
            </button>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 min-h-[9rem] border-t border-border pt-10">
        {active ? (
          <div key={active.id} className="animate-veil max-w-xl">
            <p className="label-xs">{active.kind}</p>
            <p className="title-serif mt-4 text-[1.8rem] sm:text-[2.3rem]">{active.text}</p>
            {active.detail && (
              <p className="mt-5 text-[0.95rem] leading-[1.95] text-muted-foreground">
                {active.detail}
              </p>
            )}
            {active.image && (
              <img
                src={active.image}
                alt={active.text}
                loading="lazy"
                className="mt-8 w-full max-w-sm border border-border"
              />
            )}
          </div>
        ) : (
          <p className="font-hand text-2xl text-accent/70">
            [nada selecionado ainda]
          </p>
        )}
      </div>
    </SiteFrame>
  );
}
