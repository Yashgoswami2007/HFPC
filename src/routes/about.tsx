import { createFileRoute } from "@tanstack/react-router";
import { commitments, company, contact, images, principles, values } from "@/data/hfpc";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow, Section, SectionHeader } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { IntegratedFlows } from "@/components/site/Diagrams";
import { CtaBand } from "@/components/site/CtaBand";

const title = "About HFPC — Specialist Back-of-House Planning Consultancy";
const description =
  "HFPC provides specialist planning and consultancy for hospitality and food-service back-of-house environments, working from the operational side of hospitality.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The infrastructure behind hospitality."
        intro={company.statement}
        image={images.svcKitchen}
        imageAlt="Commercial kitchen production area with stainless steel equipment"
        meta={[
          { label: "Disciplines", value: company.disciplines },
          { label: "Based in", value: contact.location },
          { label: "Positioning", value: company.positioning },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="display-lg text-foreground">
              We plan from the operational side of hospitality.
            </h2>
            <p className="lead mt-8">{company.approachStatement}</p>
            <p className="lead mt-5">{company.focusStatement}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="border-t border-border pt-8">
              <Eyebrow>What HFPC plans around</Eyebrow>
              <dl className="mt-8 space-y-7">
                {principles.map((p) => (
                  <div key={p.title} className="border-b border-border pb-6">
                    <dt className="font-display text-2xl text-foreground">{p.title}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="Philosophy"
          title="Precision where the project can't afford assumptions."
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
        <Reveal delay={180}>
          <blockquote className="mt-14 border-l border-brass pl-6 md:pl-10">
            <p className="display-md max-w-3xl text-foreground">&ldquo;{company.quote}&rdquo;</p>
          </blockquote>
        </Reveal>
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
          eyebrow="What we work towards"
          title="Better kitchens. Brighter hospitality."
          intro="HFPC works towards efficient, sustainable and future-ready back-of-house facilities, in collaboration with the project team."
        />
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c, i) => (
            <Reveal key={c} delay={i * 70} className="bg-background p-7">
              <span className="label-tech text-brass">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-4 font-display text-xl leading-snug text-foreground">{c}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="display-md mt-16 max-w-2xl text-foreground">
            People. Food. Spaces. Operations. Better together.
          </p>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
