import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Primitives";
import { Gallery } from "@/components/site/Gallery";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";

const title = "Gallery — Commercial Kitchen & BOH Facilities | HFPC";
const description =
  "A visual reference of commercial kitchen, back-of-house, F&B, laundry and institutional facility environments, and the documentation behind them.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The environments HFPC plans."
        intro="Filter by facility type. Images shown are reference environments — HFPC's own project photographs will replace them once supplied."
      />
      <Section>
        <Reveal>
          <p className="label-tech mb-8 inline-block border border-dashed border-border-strong px-3 py-1.5 text-muted-foreground">
            [PROJECT PHOTOGRAPHY TO BE PROVIDED BY HFPC]
          </p>
        </Reveal>
        <Gallery />
      </Section>
      <CtaBand />
    </>
  );
}
