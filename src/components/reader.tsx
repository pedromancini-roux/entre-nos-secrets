import { useEffect } from "react";
import type { Entry } from "@/data/content";

/** Immersive reading sheet for a single archived record / letter. */
export function Reader({
  entry,
  onClose,
  kicker,
}: {
  entry: Entry | null;
  onClose: () => void;
  kicker?: string;
}) {
  useEffect(() => {
    if (!entry) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [entry, onClose]);

  if (!entry) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="fechar"
        onClick={onClose}
        className="animate-veil absolute inset-0 cursor-default bg-background/80 backdrop-blur-[3px]"
      />
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-y-auto px-5 py-16 sm:py-24">
        <article className="animate-sheet grain pointer-events-auto w-full max-w-[38rem] border border-border bg-card px-6 py-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] sm:px-14 sm:py-16">
          <div className="flex items-baseline justify-between gap-4">
            <span className="label-xs">{kicker ?? entry.ref}</span>
            <button
              onClick={onClose}
              className="label-xs transition-colors hover:text-accent"
            >
              fechar
            </button>
          </div>

          <h2 className="title-serif mt-8 text-[1.9rem] sm:text-[2.6rem]">{entry.title}</h2>
          {entry.meta && (
            <p className="mt-3 font-serif text-sm italic text-muted-foreground">{entry.meta}</p>
          )}

          <div className="mt-8 h-px w-10 bg-accent/60" />

          <div className="mt-8 space-y-6">
            {entry.body.map((p, i) => (
              <p
                key={i}
                style={{ animationDelay: `${180 + i * 140}ms` }}
                className="animate-veil text-[0.98rem] leading-[1.95] text-foreground/85"
              >
                {p}
              </p>
            ))}
          </div>

          {entry.margin && (
            <p className="mt-12 font-hand text-2xl text-accent/80">{entry.margin}</p>
          )}
        </article>
      </div>
    </div>
  );
}
