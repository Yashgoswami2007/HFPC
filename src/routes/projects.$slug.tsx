import { createFileRoute, notFound } from "@tanstack/react-router";
import { projects } from "@/data/hfpc";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow, Section, SectionHeader } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — HFPC" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.project.name} — Project | HFPC`;
    const d = loaderData.project.overview;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: ProjectDetail,
});

/** Case-study template. Renders only the fields the project record supplies. */
function ProjectDetail() {
  const { project } = Route.useLoaderData();

  const meta = [
    project.sector ? { label: "Sector", value: project.sector } : null,
    project.location ? { label: "Location", value: project.location } : null,
    project.scope ? { label: "Scope", value: project.scope } : null,
    project.year ? { label: "Year", value: project.year } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <PageHero
        eyebrow="Project"
        title={project.name}
        intro={project.overview}
        image={project.image}
        imageAlt={project.name}
        meta={meta}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Challenge</Eyebrow>
            <p className="lead mt-6">{project.challenge}</p>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Approach</Eyebrow>
            <p className="lead mt-6">{project.approach}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="display-md text-foreground">Planning / design scope</h2>
            <ul className="mt-7 space-y-3">
              {project.planningScope.map((s) => (
                <li key={s} className="text-sm leading-relaxed text-graphite">
                  <span aria-hidden className="mr-2 text-brass">&#8594;</span>
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display-md text-foreground">Key deliverables</h2>
            <ul className="mt-7 space-y-3">
              {project.deliverables.map((d) => (
                <li key={d} className="text-sm leading-relaxed text-graphite">
                  <span aria-hidden className="mr-2 text-brass">&#8594;</span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Gallery" title="Visual record." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((g, i) => (
            <Reveal key={g.caption} delay={(i % 3) * 70}>
              <div className="hairline flex aspect-[4/3] items-center justify-center overflow-hidden bg-secondary">
                {g.image ? (
                  <img
                    src={g.image}
                    alt={g.caption}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="label-tech border border-dashed border-border-strong px-3 py-1.5 text-muted-foreground">
                    [PROJECT IMAGE TO BE PROVIDED]
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{g.caption}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {project.outcome ? (
        <Section tone="muted">
          <SectionHeader eyebrow="Outcome" title={project.outcome} />
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}
