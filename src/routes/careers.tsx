import { createFileRoute } from "@tanstack/react-router";
import { company, images } from "@/data/hfpc";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

const title = "Careers at HFPC — Join Our Team";
const description =
  "Join HFPC and help shape the future of hospitality facilities planning. We're always looking for talented professionals to join our specialist team.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Shape the future of hospitality."
        intro="Join a team of specialists dedicated to designing the most efficient and sustainable back-of-house facilities in the industry."
        image={images.svcKitchen}
        imageAlt="Commercial kitchen production area"
      />

      <Section tone="muted">
        <SectionHeader
          eyebrow="Open Positions"
          title="Join our team"
          intro="We're always on the lookout for talented planners, designers, and hospitality professionals. Apply below."
        />
        <Reveal delay={100} className="mt-14 max-w-3xl mx-auto text-center">
          <div className="bg-background border border-border p-8 md:p-16 relative flex flex-col items-center gap-6">
            <h3 className="font-display text-3xl md:text-4xl text-foreground">Ready to make an impact?</h3>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
              We are looking for passionate individuals to join our team. If you have what it takes to shape the future of hospitality facilities planning, we would love to hear from you. Please fill out our application form to get started.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScnBULtUXUMDhkzADfgpw_SRpo-1jbrgL_tAjiiSuBU6dakWQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-brass mt-4 inline-flex"
            >
              Submit Application
            </a>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
