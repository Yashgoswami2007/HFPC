import { createFileRoute } from "@tanstack/react-router";
import { insights } from "@/data/hfpc";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Primitives";
import { InsightCard } from "@/components/site/Cards";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

const title = "Insights — Notes on Back-of-House Planning | HFPC";
const description =
  "A knowledge hub on commercial kitchen planning, back-of-house operations, laundry planning, waste management, equipment planning and technical coordination.";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes on planning the back of house."
        intro="Topics in preparation for HFPC's knowledge hub. Each entry below is a planned article; the text will be published as HFPC completes it."
      />
      <Section>
        <Reveal>
          <p className="label-tech mb-10 inline-block border border-dashed border-border-strong px-3 py-1.5 text-muted-foreground">
            [ARTICLE CONTENT TO BE PROVIDED BY HFPC]
          </p>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight, i) => (
            <InsightCard key={insight.slug} insight={insight} delay={(i % 3) * 70} />
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
