import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getSector, getService, process, services } from "@/data/hfpc";
import { PageHero } from "@/components/site/PageHero";
import { ArrowLink, Eyebrow, Section, SectionHeader } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { SectorCard } from "@/components/site/Cards";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/expertise/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — HFPC" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.service.name} — HFPC`;
    const d = loaderData.service.short;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/expertise/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/expertise/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: loaderData.service.name,
            description: d,
            provider: { "@type": "ProfessionalService", name: "HFPC" },
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = service.sectors.map(getSector).filter(Boolean);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={`Expertise / ${service.index}`}
        title={service.name}
        intro={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <Eyebrow>What this service addresses</Eyebrow>
            <ul className="mt-8 space-y-3.5">
              {service.addresses.map((a) => (
                <li key={a} className="flex items-baseline gap-3 border-b border-border pb-3.5 text-sm text-graphite">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-brass" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Why it matters</Eyebrow>
            <p className="lead mt-8">{service.matters}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
          <Reveal>
            <h2 className="display-md text-foreground">What HFPC provides</h2>
            <ul className="mt-7 space-y-3">
              {service.provides.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-graphite">
                  <span aria-hidden className="mr-2 text-brass">&#8594;</span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="display-md text-foreground">Typical deliverables</h2>
            <ul className="mt-7 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="text-sm leading-relaxed text-graphite">
                  <span aria-hidden className="mr-2 text-brass">&#8594;</span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={180}>
            <h2 className="display-md text-foreground">Technical considerations</h2>
            <ul className="mt-7 space-y-3">
              {service.technical.map((t) => (
                <li key={t} className="text-sm leading-relaxed text-graphite">
                  <span aria-hidden className="mr-2 text-brass">&#8594;</span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Project process"
          title="How the work is staged."
          intro="Each engagement follows HFPC's structured process, scoped to the stage the project is at."
        />
        <ol className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {process.map((step, i) => (
            <Reveal key={step.index} as="li" delay={(i % 5) * 50} className="bg-background p-5">
              <span className="label-tech text-brass">{step.index}</span>
              <p className="mt-3 font-display text-lg leading-tight text-foreground">{step.name}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={200}>
          <ArrowLink to="/approach" className="mt-10">
            The full approach
          </ArrowLink>
        </Reveal>
      </Section>

      <Section tone="muted">
        <SectionHeader eyebrow="Related sectors" title="Where this service applies." />
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((sector, i) =>
            sector ? <SectorCard key={sector.slug} sector={sector} delay={(i % 4) * 70} /> : null,
          )}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeader eyebrow="Related projects" title="Case studies in preparation." />
            <Reveal delay={120}>
              <div className="mt-8 hairline flex aspect-[4/3] items-center justify-center bg-secondary">
                <span className="label-tech border border-dashed border-border-strong px-3 py-1.5 text-muted-foreground">
                  [PROJECT IMAGE TO BE PROVIDED]
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Project records for this service are being prepared for publication.
              </p>
              <ArrowLink to="/projects" className="mt-6">
                Project portfolio
              </ArrowLink>
            </Reveal>
          </div>

          <div>
            <SectionHeader eyebrow="FAQ" title="Common questions." />
            <dl className="mt-8">
              {service.faq.map((item, i) => (
                <Reveal key={item.q} delay={i * 70}>
                  <div className="border-t border-border py-6">
                    <dt className="font-display text-2xl leading-snug text-foreground">{item.q}</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
                  </div>
                </Reveal>
              ))}
              <div aria-hidden className="border-t border-border" />
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <Eyebrow>Other services</Eyebrow>
        <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <li key={o.slug} className="border-t border-border pt-5">
              <Link
                to="/expertise/$slug"
                params={{ slug: o.slug }}
                className="group block transition-colors"
              >
                <span className="label-tech text-brass">{o.index}</span>
                <p className="mt-3 font-display text-xl leading-snug text-foreground group-hover:text-brass">
                  {o.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title={`Planning ${service.name.toLowerCase()}?`}
        intro="Share the operation, the capacity and the stage the project is at, and we will take it from there."
      />
    </>
  );
}
