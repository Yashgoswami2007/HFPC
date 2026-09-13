import { createFileRoute, Link } from "@tanstack/react-router";
import {
  commitments,
  company,
  contact,
  deliverables,
  images,
  insights,
  principles,
  sectors,
  services,
  values,
} from "@/data/hfpc";
import { Reveal } from "@/components/site/Reveal";
import { ArrowLink, Eyebrow, Section, SectionHeader } from "@/components/site/Primitives";
import { InsightCard, SectorCard, ServiceCard } from "@/components/site/Cards";
import {
  BriefSequence,
  FacilityFlow,
  IntegratedFlows,
  ProcessTimeline,
  TechnicalEquation,
} from "@/components/site/Diagrams";
import { CtaBand } from "@/components/site/CtaBand";

const title = "HFPC — Hospitality Facilities Planning Consultancy";
const description =
  "Specialist commercial kitchen, back-of-house and hospitality facilities planning. HFPC plans the operational infrastructure behind hospitality and food-service facilities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="relative isolate overflow-hidden bg-foreground">
        <img
          src={images.heroBoh}
          alt="Wide view of an empty stainless steel commercial kitchen with extraction hoods and long preparation counters"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/35" />
        <div aria-hidden className="blueprint-grid absolute inset-0 opacity-[0.13]" />

        <div className="shell relative flex min-h-[calc(100vh-4.5rem)] flex-col justify-end py-16 md:py-24">
          <Reveal>
            <p className="label-tech text-brass">{company.disciplines}</p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display-xl mt-8 max-w-5xl text-background">
              Engineering
              <br />
              the back
              <br />
              of house.
            </h1>
          </Reveal>

          <div className="mt-12 grid gap-10 border-t border-background/20 pt-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <Reveal delay={170}>
              <p className="max-w-xl text-lg leading-relaxed text-background/80">
                {company.statement}
              </p>
              <p className="label-tech mt-6 text-background/55">{company.motto}</p>
            </Reveal>
            <Reveal delay={240} className="lg:justify-self-end">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/start-a-project" className="btn-base btn-brass">
                  Start a Project &#8594;
                </Link>
                <Link to="/expertise" className="btn-base btn-ghost-light">
                  Explore Our Expertise
                </Link>
              </div>
              <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
                {company.fourVerbs.map((verb, i) => (
                  <div key={verb} className="border-t border-background/25 pt-3">
                    <dt className="label-tech text-brass">{String(i + 1).padStart(2, "0")}</dt>
                    <dd className="mt-1 font-display text-lg text-background">{verb}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 — WHAT HFPC DOES */}
      <Section>
        <SectionHeader
          eyebrow="What We Do"
          title="The spaces guests don't see are the spaces that make hospitality work."
          intro={company.approachStatement}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="text-base leading-relaxed text-graphite">{company.focusStatement}</p>
            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.title} className="bg-background p-6">
                  <h3 className="label-tech text-brass">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="corner-ticks hairline relative aspect-[4/3] overflow-hidden">
              <img
                src={images.svcBoh}
                alt="Back-of-house service corridor with trolleys parked along a stainless steel wall guard"
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="label-tech mt-4 text-muted-foreground">
              Fig. 01 — Support areas and service circulation
            </p>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <Eyebrow>The flow of a facility</Eyebrow>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Every food-service facility carries the same underlying sequence. Planning decides how
              short, how clean and how practical that sequence is. Shown here as an explanatory
              concept.
            </p>
          </Reveal>
          <FacilityFlow />
        </div>
      </Section>

      {/* 03 — EXPERTISE */}
      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <SectionHeader
            eyebrow="Expertise"
            title="One BOH strategy. Multiple operational systems."
            intro="Comprehensive planning across all back-of-house functions for a more efficient, functional and successful hospitality operation."
          />
          <Reveal delay={120} className="lg:justify-self-end">
            <ArrowLink to="/expertise">All eight service areas</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} delay={(i % 4) * 70} />
          ))}
        </div>
      </Section>

      {/* 04 — SECTORS */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <SectionHeader
            eyebrow="Sectors We Serve"
            title="Built for complex hospitality operations."
            intro="Tailored BOH planning solutions for a wide range of hospitality and food-service environments."
          />
          <Reveal delay={120} className="lg:justify-self-end">
            <ArrowLink to="/sectors">All sectors</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.slice(0, 6).map((sector, i) => (
            <SectorCard key={sector.slug} sector={sector} delay={(i % 3) * 80} />
          ))}
        </div>
      </Section>

      {/* 05 — WHY HFPC */}
      <Section tone="muted">
        <SectionHeader
          eyebrow="Why HFPC"
          title="Precision where the project can't afford assumptions."
          intro="Specialist facilities planning is what keeps an operation workable after opening — and keeps avoidable cost out of the project before it."
        />
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 70} className="bg-background p-7 md:p-9">
              <span className="label-tech text-brass">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-display text-2xl leading-tight text-foreground">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <blockquote className="mt-14 border-l border-brass pl-6 md:pl-10">
            <p className="display-md max-w-3xl text-foreground">&ldquo;{company.quote}&rdquo;</p>
          </blockquote>
        </Reveal>
      </Section>

      {/* 06 — PROJECTS */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <SectionHeader
            eyebrow="Projects"
            title="Facilities planned from the operation outward."
            intro="Project records are being prepared for publication. Each will be presented as a case study covering the brief, the planning approach and the deliverables issued."
          />
          <Reveal delay={120} className="lg:justify-self-end">
            <ArrowLink to="/projects">Project portfolio</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 80}>
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
      </Section>

      {/* 07 — APPROACH */}
      <Section tone="muted">
        <SectionHeader
          eyebrow="Approach"
          title="From brief to site-ready documentation."
          intro="A structured and collaborative process to ensure well-planned, coordinated and buildable BOH facilities."
        />
        <ProcessTimeline />
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Key deliverables</Eyebrow>
            <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {deliverables.map((d) => (
                <li key={d} className="flex items-baseline gap-3 text-sm text-graphite">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-brass" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>From operational brief to working kitchen</Eyebrow>
            <div className="mt-6">
              <BriefSequence />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 08 — TECHNICAL / OPERATIONAL FLOW */}
      <section className="relative overflow-hidden bg-foreground py-24 md:py-32">
        <div className="shell relative">
          <Reveal>
            <Eyebrow className="!text-background/60">How we think</Eyebrow>
          </Reveal>
          <div className="mt-12">
            <TechnicalEquation />
          </div>
          <div className="mt-20 grid gap-10 border-t border-background/20 pt-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <h3 className="display-md text-background">
                Designing the system behind the operation.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-background/70">
                An integrated approach to people, food, materials and waste ensures efficient,
                hygienic and practical hospitality operations.
              </p>
              <p className="label-tech mt-8 text-brass">Integrated flows. Efficient operations.</p>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-px border border-background/20 bg-background/20 sm:grid-cols-2">
                {[
                  { t: "Food", s: "Receiving → Storage → Production → Service → Return" },
                  { t: "People", s: "Staff entry → Changing → Work areas → Support" },
                  { t: "Materials", s: "Receiving → Stores → Production → Disposal" },
                  { t: "Waste", s: "Segregation → Holding → Movement → Collection" },
                ].map((f) => (
                  <div key={f.t} className="bg-foreground p-6">
                    <p className="label-tech text-brass">{f.t} flow</p>
                    <p className="mt-3 text-sm leading-relaxed text-background/75">{f.s}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 09 — ABOUT */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>About HFPC</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-6 text-foreground">
                The infrastructure behind hospitality.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="lead mt-8">{company.statement}</p>
            </Reveal>
            <Reveal delay={200}>
              <ArrowLink to="/about" className="mt-10">
                More about the practice
              </ArrowLink>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="space-y-6 border-t border-border pt-8">
              <p className="text-sm leading-relaxed text-graphite">{company.approachStatement}</p>
              <p className="text-sm leading-relaxed text-graphite">{company.focusStatement}</p>
              <dl className="grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <dt className="label-tech text-muted-foreground">Disciplines</dt>
                  <dd className="mt-1.5 text-sm">{company.disciplines}</dd>
                </div>
                <div>
                  <dt className="label-tech text-muted-foreground">Based in</dt>
                  <dd className="mt-1.5 text-sm">{contact.location}</dd>
                </div>
                <div>
                  <dt className="label-tech text-muted-foreground">Positioning</dt>
                  <dd className="mt-1.5 text-sm">{company.positioning}</dd>
                </div>
                <div>
                  <dt className="label-tech text-muted-foreground">Service areas</dt>
                  <dd className="mt-1.5 text-sm">{services.length} planning disciplines</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 10 — BUILT AROUND OPERATIONAL EXPERTISE */}
      <Section tone="muted">
        <SectionHeader
          eyebrow="Credentials"
          title="Built around operational expertise."
          intro="HFPC's capability is described by what it plans and documents, not by borrowed logos. What follows is the working scope the practice delivers."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {commitments.map((c) => (
                <div key={c} className="bg-background p-6">
                  <p className="font-display text-xl leading-snug text-foreground">{c}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <IntegratedFlowsBlock />
          </Reveal>
        </div>
      </Section>

      {/* 11 — INSIGHTS */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <SectionHeader
            eyebrow="Insights"
            title="Notes on planning the back of house."
            intro="A knowledge hub covering commercial kitchen planning, BOH operations, laundry, waste, equipment planning and technical coordination."
          />
          <Reveal delay={120} className="lg:justify-self-end">
            <ArrowLink to="/insights">All insights</ArrowLink>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.slice(0, 3).map((insight, i) => (
            <InsightCard key={insight.slug} insight={insight} delay={i * 80} />
          ))}
        </div>
      </Section>

      {/* 12 — CONTACT */}
      <CtaBand />
    </>
  );
}

function IntegratedFlowsBlock() {
  return (
    <div>
      <Eyebrow>Planned as one system</Eyebrow>
      <div className="[&>div]:mt-6">
        <IntegratedFlows />
      </div>
    </div>
  );
}
