import { createFileRoute } from "@tanstack/react-router";
import { deliverables, services } from "@/data/hfpc";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow, Section, SectionHeader } from "@/components/site/Primitives";
import { ServiceCard } from "@/components/site/Cards";
import { Reveal } from "@/components/site/Reveal";
import { BriefSequence } from "@/components/site/Diagrams";
import { CtaBand } from "@/components/site/CtaBand";

const title = "Expertise — Commercial Kitchen & BOH Planning Services | HFPC";
const description =
  "Commercial kitchen planning, F&B facilities, back-of-house planning, laundry, waste management, MEP coordination, procurement documentation and site support.";

export const Route = createFileRoute("/expertise/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/expertise" },
    ],
    links: [{ rel: "canonical", href: "/expertise" }],
  }),
  component: ExpertiseIndex,
});

function ExpertiseIndex() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="One BOH strategy. Multiple operational systems."
        intro="Comprehensive planning across all back-of-house functions for a more efficient, functional and successful hospitality operation."
      />

      <Section>
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} delay={(i % 4) * 70} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Deliverables"
              title="What arrives at the end of each stage."
              intro="Planning is only useful if it can be built and procured from. Every engagement produces documentation the project team can work with."
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
            <Eyebrow>From operational brief to working kitchen</Eyebrow>
            <div className="mt-6">
              <BriefSequence />
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
