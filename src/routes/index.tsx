import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entre Nós — um arquivo para Júlia" },
      {
        name: "description",
        content:
          "Um arquivo digital íntimo: registros, cartas e coisas guardadas que não caberiam em uma conversa.",
      },
      { property: "og:title", content: "Entre Nós — um arquivo para Júlia" },
      {
        property: "og:description",
        content: "Um lugar feito para guardar coisas que não caberiam em uma conversa.",
      },
    ],
  }),
  component: Opening,
});

function Opening() {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  const enter = () => {
    setLeaving(true);
    window.setTimeout(() => navigate({ to: "/arquivo" }), 900);
  };

  return (
    <div className="grain flex min-h-screen items-center justify-center px-6">
      <div
        className={`w-full max-w-md text-center transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          leaving ? "-translate-y-2 opacity-0 blur-[3px]" : "translate-y-0 opacity-100"
        }`}
      >
        <h1 className="title-serif animate-veil text-[3.4rem] sm:text-[4.5rem]">
          {site.her}.
        </h1>
        <p
          style={{ animationDelay: "700ms" }}
          className="animate-veil mx-auto mt-8 max-w-sm text-[0.95rem] leading-[1.95] text-muted-foreground"
        >
          {site.openingLine}
        </p>
        <button
          onClick={enter}
          style={{ animationDelay: "1500ms" }}
          className="animate-veil label-xs rule-hover mt-14 pb-1 transition-colors hover:text-foreground"
        >
          {site.enter}
        </button>
      </div>
    </div>
  );
}
