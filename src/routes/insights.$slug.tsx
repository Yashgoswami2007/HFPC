import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { insights } from "@/data/hfpc";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow, Section } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const insight = insights.find((i) => i.slug === params.slug);
    if (!insight) throw notFound();
    return { insight };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — HFPC" }, { name: "robots", content: "noindex" }] };
    }
    const { insight } = loaderData;
    const t = `${insight.title} — HFPC Insights`;
    return {
      meta: [
        { title: t },
        { name: "description", content: insight.excerpt },
        { property: "og:title", content: t },
        { property: "og:description", content: insight.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/insights/${params.slug}` },
        ...(insight.status === "planned" ? [{ name: "robots", content: "noindex" }] : []),
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
    };
  },
  component: InsightDetail,
});

function InsightDetail() {
  const { insight } = Route.useLoaderData();
  const others = insights.filter((i) => i.slug !== insight.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={insight.category}
        title={insight.title}
        intro={insight.excerpt}
        meta={[
          { label: "Category", value: insight.category },
          { label: "Published", value: insight.date ?? "[DATE]" },
          { label: "Reading time", value: insight.readingTime },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            {insight.body?.length ? (
              <div className="space-y-6">
                {insight.body.map((para) => (
                  <Reveal key={para.slice(0, 24)}>
                    <p className="lead">{para}</p>
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal>
                <div className="corner-ticks hairline bg-card p-8">
                  <Eyebrow>Article status</Eyebrow>
                  <p className="display-md mt-5 text-foreground">In preparation.</p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    [ARTICLE CONTENT TO BE PROVIDED BY HFPC] — the article template is in place and
                    will publish this piece with its full text, date and reading time once supplied.
                  </p>
                </div>
              </Reveal>
            )}
          </div>

          <Reveal delay={120}>
            <div className="border-t border-border pt-8">
              <Eyebrow>More insights</Eyebrow>
              <ul className="mt-6 space-y-5">
                {others.map((o) => (
                  <li key={o.slug} className="border-b border-border pb-5">
                    <Link to="/insights/$slug" params={{ slug: o.slug }} className="group block">
                      <span className="label-tech text-brass">{o.category}</span>
                      <p className="mt-2 font-display text-xl leading-snug text-foreground group-hover:text-brass">
                        {o.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
