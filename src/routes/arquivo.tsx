import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reader } from "@/components/reader";
import { Reveal } from "@/components/reveal";
import { SiteFrame } from "@/components/site-frame";
import { arquivo, type Entry } from "@/data/content";

export const Route = createFileRoute("/arquivo")({
  head: () => ({
    meta: [
      { title: "Arquivo — Entre Nós" },
      { name: "description", content: "Registros guardados, um a um." },
      { property: "og:title", content: "Arquivo — Entre Nós" },
      { property: "og:description", content: "Registros guardados, um a um." },
    ],
  }),
  component: Arquivo,
});

function Arquivo() {
  const [open, setOpen] = useState<Entry | null>(null);

  return (
    <SiteFrame
      eyebrow="Seção I"
      title="Arquivo"
      intro="Registros avulsos. Alguns têm data, outros não. Abra na ordem que quiser."
    >
      <ul className="border-t border-border">
        {arquivo.map((e, i) => (
          <Reveal key={e.id} delay={i * 70}>
            <li>
              <button
                onClick={() => setOpen(e)}
                className="group grid w-full grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-5 gap-y-2 border-b border-border py-6 text-left transition-colors duration-500 hover:bg-secondary/50 sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:px-2"
              >
                <span className="label-xs shrink-0 transition-colors group-hover:text-accent">
                  {e.ref}
                </span>
                <span className="title-serif min-w-0 text-[1.35rem] sm:text-[1.7rem]">
                  {e.title}
                </span>
                <span className="label-xs col-start-2 sm:col-start-3 sm:opacity-0 sm:transition-opacity sm:duration-500 sm:group-hover:opacity-100">
                  abrir
                </span>
              </button>
            </li>
          </Reveal>
        ))}
      </ul>
      <Reader entry={open} onClose={() => setOpen(null)} />
    </SiteFrame>
  );
}
