import { createFileRoute } from "@tanstack/react-router";
import { company, deliverables, laundryFlow, wasteFlow } from "@/data/hfpc";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow, Section, SectionHeader } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import {
  BriefSequence,
  IntegratedFlows,
  ProcessTimeline,
  TechnicalEquation,
} from "@/components/site/Diagrams";
import { CtaBand } from "@/components/site/CtaBand";

const title = "Approach — From Brief to Site-Ready Documentation | HFPC";
const description =
  "HFPC's ten-stage planning process: concept brief, operational analysis, space and flow planning, layout, equipment, coordination, BOQ, tender, site coordination and handover.";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/approach" },
    ],
    links: [{ rel: "canonical", href: "/approach" }],
  }),
  component: Approach,
});

function Approach() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title="From brief to site-ready documentation."
        intro="A structured and collaborative process to ensure well-planned, coordinated and buildable BOH facilities."
      />

      <Section>
        <SectionHeader
          eyebrow="Project process"
          title="Ten stages, in sequence."
          intro="Every stage produces something the next stage — and the wider project team — can work from."
        />
        <ProcessTimeline />
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Kitchen planning"
              title="From operational brief to working kitchen."
              intro="Commercial kitchen planning is based on operational requirements, menu, capacity, workflow, equipment, hygiene, safety, utilities, maintenance and future adaptability."
            />
            <Reveal delay={160}>
              <blockquote className="mt-10 border-l border-brass pl-6">
                <p className="font-display text-xl leading-snug text-foreground md:text-2xl">
                  &ldquo;{company.kitchenQuote}&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Eyebrow>Sequence</Eyebrow>
            <div className="mt-6">
              <BriefSequence />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Integrated flows"
          title="Designing the system behind the operation."
          intro="An integrated approach to people, food, materials and waste ensures efficient, hygienic and practical hospitality operations."
        />
        <IntegratedFlows />
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="Clean flows. Controlled flows."
          title="Laundry and waste, planned as processes."
        />
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="display-md text-foreground">Laundry planning</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Efficient laundry planning ensures smooth linen flow, operational efficiency and
              long-term reliability.
            </p>
            <ol className="mt-8 space-y-0">
              {laundryFlow.map((step, i) => (
                <li
                  key={step}
                  className="flex items-baseline gap-4 border-t border-border py-3.5 text-sm text-graphite"
                >
                  <span className="label-tech w-6 shrink-0 text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
              <li aria-hidden className="border-t border-border" />
            </ol>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="display-md text-foreground">Waste management</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Practical and hygienic waste management planning for cleaner and more efficient
              operations.
            </p>
            <ol className="mt-8 space-y-0">
              {wasteFlow.map((step, i) => (
                <li
                  key={step}
                  className="flex items-baseline gap-4 border-t border-border py-3.5 text-sm text-graphite"
                >
                  <span className="label-tech w-6 shrink-0 text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
              <li aria-hidden className="border-t border-border" />
            </ol>
          </Reveal>
        </div>
      </Section>

      <section className="bg-foreground py-24 md:py-32">
        <div className="shell">
          <Reveal>
            <Eyebrow className="!text-background/60">How we think</Eyebrow>
          </Reveal>
          <div className="mt-12">
            <TechnicalEquation />
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Key deliverables" title="What HFPC issues." />
        <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d, i) => (
            <Reveal key={d} as="li" delay={(i % 3) * 50} className="bg-background p-6">
              <span className="label-tech text-brass">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-sm text-graphite">{d}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
