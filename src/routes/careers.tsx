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
        <Reveal delay={100} className="mt-14 max-w-4xl mx-auto">
          <div className="bg-background border border-border p-4 md:p-8 relative">
            {/* The Google Form embed */}
            <div className="w-full h-[1200px] md:h-[1100px] bg-background">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScnBULtUXUMDhkzADfgpw_SRpo-1jbrgL_tAjiiSuBU6dakWQ/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="HFPC Job Application Form"
                className="w-full h-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
