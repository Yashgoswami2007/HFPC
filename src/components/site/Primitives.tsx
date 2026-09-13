import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`eyebrow inline-flex items-center gap-3 ${className}`}>
      <span aria-hidden className="h-px w-6 bg-brass" />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${
        tone === "light" ? "text-background" : ""
      }`}
    >
      {eyebrow ? <Eyebrow className={tone === "light" ? "!text-background/70" : ""}>{eyebrow}</Eyebrow> : null}
      <h2 className={`display-lg mt-5 ${tone === "light" ? "text-background" : "text-foreground"}`}>{title}</h2>
      {intro ? (
        <p className={`lead mt-5 ${tone === "light" ? "!text-background/75" : ""}`}>{intro}</p>
      ) : null}
    </Reveal>
  );
}

type ArrowLinkProps = {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  className?: string;
};

export function ArrowLink({ to, params, children, className = "" }: ArrowLinkProps) {
  return (
    <Link
      to={to}
      params={params}
      className={`group label-tech inline-flex items-center gap-2 text-foreground transition-colors hover:text-brass ${className}`}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        &#8594;
      </span>
    </Link>
  );
}

export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "ink";
}) {
  const tones = {
    default: "bg-background",
    muted: "bg-secondary",
    ink: "bg-foreground text-background",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} py-20 md:py-28 lg:py-32 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="label-tech inline-block border border-dashed border-border-strong px-3 py-1.5 text-muted-foreground">
      {children}
    </span>
  );
}

export function HoverWords({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="hover:text-brass transition-colors duration-300 cursor-default">
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
