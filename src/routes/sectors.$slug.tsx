import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getSector, getService, sectors } from "@/data/hfpc";
import { PageHero } from "@/components/site/PageHero";
import { ArrowLink, Eyebrow, Section, SectionHeader } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/sectors/$slug")({
  loader: ({ params }) => {
    const sector = getSector(params.slug);
    if (!sector) throw notFound();
    return { sector };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Sector not found — HFPC" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.sector.name} — BOH Planning | HFPC`;
    const d = loaderData.sector.short;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/sectors/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/sectors/${params.slug}` }],
    };
  },
  component: SectorDetail,
});

function SectorDetail() {
  const { sector } = Route.useLoaderData();
  const related = sector.services.map(getService).filter(Boolean);
  const others = sectors.filter((s) => s.slug !== sector.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Sector"
        title={sector.name}
        intro={sector.body}
        image={sector.image}
        imageAlt={sector.imageAlt}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Planning considerations</Eyebrow>
            <ul className="mt-8 space-y-3.5">
              {sector.considerations.map((c) => (
                <li key={c} className="flex items-baseline gap-3 border-b border-border pb-3.5 text-sm text-graphite">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-brass" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Services applied in this sector</Eyebrow>
            <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
              {related.map((s) =>
                s ? (
                  <li key={s.slug} className="bg-background">
                    <Link
                      to="/expertise/$slug"
                      params={{ slug: s.slug }}
                      className="group block h-full p-6 transition-colors hover:bg-secondary"
                    >
                      <span className="label-tech text-brass">{s.index}</span>
                      <p className="mt-3 font-display text-xl leading-snug text-foreground group-hover:text-brass">
                        {s.name}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeader eyebrow="Projects" title="Case studies in preparation." />
        <Reveal delay={120}>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i}>
                <div className="hairline flex aspect-[4/3] items-center justify-center bg-background">
                  <span className="label-tech border border-dashed border-border-strong px-3 py-1.5 text-muted-foreground">
                    [PROJECT IMAGE TO BE PROVIDED]
                  </span>
                </div>
                <p className="mt-4 font-display text-xl text-foreground">[PROJECT NAME]</p>
                <p className="label-tech mt-1.5 text-muted-foreground">
                  {sector.name} &nbsp;/&nbsp; [LOCATION]
                </p>
              </div>
            ))}
          </div>
          <ArrowLink to="/projects" className="mt-10">
            Project portfolio
          </ArrowLink>
        </Reveal>
      </Section>

      <Section>
        <Eyebrow>Other sectors</Eyebrow>
        <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <li key={o.slug} className="border-t border-border pt-5">
              <Link to="/sectors/$slug" params={{ slug: o.slug }} className="group block">
                <p className="font-display text-xl leading-snug text-foreground group-hover:text-brass">
                  {o.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{o.short}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
