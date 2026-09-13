import { Link } from "@tanstack/react-router";
import type { Insight, Sector, Service } from "@/data/hfpc";
import { Reveal } from "./Reveal";

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to="/expertise/$slug"
        params={{ slug: service.slug }}
        className="group flex h-full flex-col justify-between border-t border-border pt-6 transition-colors hover:border-brass"
      >
        <div>
          <div className="flex items-start justify-between gap-4">
            <span className="label-tech text-brass">{service.index}</span>
            <span
              aria-hidden
              className="text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-brass"
            >
              &#8594;
            </span>
          </div>
          <h3 className="display-md mt-6 text-foreground transition-colors group-hover:text-brass">
            {service.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        </div>
      </Link>
    </Reveal>
  );
}

export function SectorCard({ sector, delay = 0 }: { sector: Sector; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to="/sectors/$slug"
        params={{ slug: sector.slug }}
        className="group flex h-full flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-lg rounded-xl overflow-hidden"
      >
        <div className="relative aspect-[5/4] overflow-hidden bg-secondary">
          <img
            src={sector.image}
            alt={sector.imageAlt}
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
          />
          <span aria-hidden className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
        </div>
        <h3 className="mt-5 font-display text-2xl leading-tight text-foreground transition-colors group-hover:text-brass">
          {sector.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{sector.short}</p>
        <span className="label-tech mt-4 inline-flex items-center gap-2 text-foreground group-hover:text-brass">
          Explore
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            &#8594;
          </span>
        </span>
      </Link>
    </Reveal>
  );
}

export function InsightCard({ insight, delay = 0 }: { insight: Insight; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to="/insights/$slug"
        params={{ slug: insight.slug }}
        className="group flex h-full flex-col border border-border bg-card p-7 transition-all duration-500 hover:border-brass hover:-translate-y-1 hover:shadow-lg rounded-xl"
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="label-tech text-brass">{insight.category}</span>
          <span className="label-tech text-muted-foreground">{insight.date ?? "[DATE]"}</span>
        </div>
        <h3 className="mt-5 font-display text-2xl leading-snug text-foreground transition-colors group-hover:text-brass">
          {insight.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{insight.excerpt}</p>
        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <span className="label-tech text-muted-foreground">{insight.readingTime}</span>
          <span className="label-tech inline-flex items-center gap-2 text-foreground group-hover:text-brass">
            Read Article
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              &#8594;
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
