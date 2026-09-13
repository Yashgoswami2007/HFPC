import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Primitives";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
  meta?: { label: string; value: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div aria-hidden className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="shell relative py-16 md:py-24">
        <div className={`grid items-end gap-12 ${image ? "lg:grid-cols-[1.15fr_1fr]" : ""}`}>
          <div>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-lg mt-6 max-w-3xl text-foreground">{title}</h1>
            </Reveal>
            {intro ? (
              <Reveal delay={160}>
                <p className="lead mt-6 max-w-2xl">{intro}</p>
              </Reveal>
            ) : null}
            {meta?.length ? (
              <Reveal delay={220}>
                <dl className="mt-10 grid gap-x-10 gap-y-5 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-3">
                  {meta.map((m) => (
                    <div key={m.label}>
                      <dt className="label-tech text-muted-foreground">{m.label}</dt>
                      <dd className="mt-1.5 text-sm text-foreground">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ) : null}
          </div>

          {image ? (
            <Reveal delay={140} className="relative">
              <div className="corner-ticks hairline relative aspect-[4/3] overflow-hidden group">
                <img
                  src={image}
                  alt={imageAlt ?? ""}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
