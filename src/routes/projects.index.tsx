import { createFileRoute, Link } from "@tanstack/react-router";
import { deliverables, projects, sectors } from "@/data/hfpc";
import { PageHero } from "@/components/site/PageHero";
import { ArrowLink, Eyebrow, Section, SectionHeader } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

const title = "Projects — Hospitality Facilities Planned by HFPC";
const description =
  "HFPC project portfolio: back-of-house and commercial kitchen facilities planned from the operation outward. Case studies in preparation.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const hasProjects = projects.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Facilities planned from the operation outward."
        intro="Each project is presented as a case study covering the brief, the planning approach, the scope of work and the documentation issued."
      />

      <Section>
        {hasProjects ? (
          <div className="grid gap-x-8 gap-y-14 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 90}>
                <Link to="/projects/$slug" params={{ slug: project.slug }} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        width={1200}
                        height={750}
                        className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                      />
                    ) : (
                      <span className="label-tech absolute inset-0 grid place-items-center text-muted-foreground">
                        [PROJECT IMAGE TO BE PROVIDED]
                      </span>
                    )}
                  </div>
                  <h2 className="mt-6 display-md text-foreground group-hover:text-brass">{project.name}</h2>
                  <p className="label-tech mt-3 text-muted-foreground">
                    {[project.sector, project.location, project.scope, project.year]
                      .filter(Boolean)
                      .join("  /  ")}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <>
            <Reveal>
              <div className="corner-ticks hairline bg-card p-8 md:p-12">
                <Eyebrow>Portfolio status</Eyebrow>
                <h2 className="display-md mt-5 max-w-2xl text-foreground">
                  Project records are being prepared for publication.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  The case-study template below is ready. Once HFPC supplies project names,
                  locations, sectors, scope and photographs, each project will publish as a full
                  case study — no project details are shown here until they are confirmed.
                </p>
                <ul className="mt-8 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
                  {[
                    "[PROJECT NAME]",
                    "[CLIENT / SECTOR]",
                    "[LOCATION]",
                    "[SCOPE OF WORK]",
                    "[YEAR, WHERE AVAILABLE]",
                    "[PROJECT IMAGES TO BE PROVIDED]",
                  ].map((p) => (
                    <li key={p} className="label-tech border-b border-dashed border-border pb-2.5 text-muted-foreground">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <Reveal key={i} delay={(i % 3) * 70}>
                  <div className="hairline flex aspect-[4/3] items-center justify-center bg-secondary">
                    <span className="label-tech border border-dashed border-border-strong px-3 py-1.5 text-muted-foreground">
                      [PROJECT IMAGE TO BE PROVIDED]
                    </span>
                  </div>
                  <p className="mt-4 font-display text-xl text-foreground">[PROJECT NAME]</p>
                  <p className="label-tech mt-1.5 text-muted-foreground">
                    [SECTOR] &nbsp;/&nbsp; [LOCATION] &nbsp;/&nbsp; [SCOPE]
                  </p>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Scope of work"
              title="What a project engagement produces."
              intro="Whatever the sector, the documentation issued follows the same discipline."
            />
            <Reveal delay={140}>
              <ul className="mt-10 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-baseline gap-3 text-sm text-graphite">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-brass" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Eyebrow>Sectors covered</Eyebrow>
            <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {sectors.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/sectors/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-graphite transition-colors hover:text-brass"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ArrowLink to="/gallery" className="mt-10">
              Visit the gallery
            </ArrowLink>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
