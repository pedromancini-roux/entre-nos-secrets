import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/content";

export const sections = [
  { to: "/arquivo", label: "Arquivo" },
  { to: "/coisas-que-guardei", label: "Coisas que guardei" },
  { to: "/ainda-nao-aconteceu", label: "Ainda não aconteceu" },
  { to: "/para-ler", label: "Para ler" },
  { to: "/entre-nos", label: "Entre nós" },
] as const;

function Nav() {
  return (
    <nav className="border-b border-border/70">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-5 sm:px-8">
        <Link to="/" className="label-xs shrink-0 transition-colors hover:text-accent">
          {site.name}
        </Link>
        <div className="-mx-1 flex min-w-0 flex-1 justify-start gap-5 overflow-x-auto px-1 sm:justify-end sm:gap-7 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="label-xs rule-hover shrink-0 whitespace-nowrap pb-1 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function SiteFrame({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="grain min-h-screen">
      <Nav />
      <main className="mx-auto max-w-5xl px-5 pb-28 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <p className="label-xs">{eyebrow}</p>
          <h1 className="title-serif mt-5 text-[2.6rem] sm:text-[4rem]">{title}</h1>
          {intro && (
            <p className="mt-6 max-w-lg text-[0.95rem] leading-[1.9] text-muted-foreground">
              {intro}
            </p>
          )}
          <div className="mt-10 h-px w-full bg-border" />
        </Reveal>
        <div className="mt-12">{children}</div>
      </main>
      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-8 sm:px-8">
          <span className="label-xs">para {site.her}</span>
          <Link to="/" className="label-xs transition-colors hover:text-accent">
            voltar ao início
          </Link>
        </div>
      </footer>
    </div>
  );
}
