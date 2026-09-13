import { createFileRoute } from "@tanstack/react-router";
import { sectors } from "@/data/hfpc";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Primitives";
import { SectorCard } from "@/components/site/Cards";
import { CtaBand } from "@/components/site/CtaBand";

const title = "Sectors — Hospitality & Food-Service Facilities | HFPC";
const description =
  "BOH planning for hotels and resorts, restaurants and cafés, bars and banquets, corporate cafeterias, hospitals and institutions, central production and base kitchens.";

export const Route = createFileRoute("/sectors/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sectors" },
    ],
    links: [{ rel: "canonical", href: "/sectors" }],
  }),
  component: SectorsIndex,
});

function SectorsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Sectors We Serve"
        title="Built for complex hospitality operations."
        intro="Tailored BOH planning solutions for a wide range of hospitality and food-service environments."
      />
      <Section>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <SectorCard key={sector.slug} sector={sector} delay={(i % 3) * 80} />
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
