import { useCallback, useEffect, useState } from "react";
import { galleryCategories, galleryItems } from "@/data/hfpc";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);

  const items = galleryItems.filter((i) => filter === "All" || i.category === filter);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) => {
      setIndex((cur) => {
        if (cur === null) return cur;
        return (cur + dir + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const active = index === null ? null : items[index];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-border pb-6" role="group" aria-label="Filter gallery">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setFilter(cat);
              setIndex(null);
            }}
            aria-pressed={filter === cat}
            className={`label-tech border px-4 py-2.5 transition-colors ${
              filter === cat
                ? "border-brass bg-brass text-brass-foreground"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.id} as="li" delay={(i % 6) * 60}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group block w-full text-left"
              aria-label={`Open image: ${item.caption}`}
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
              </span>
              <span className="mt-4 flex items-baseline justify-between gap-4">
                <span className="text-sm text-foreground">{item.caption}</span>
                <span className="label-tech shrink-0 text-brass">{item.category}</span>
              </span>
              {item.placeholder ? (
                <span className="label-tech mt-2 block text-muted-foreground">
                  [PROJECT IMAGE TO BE PROVIDED]
                </span>
              ) : null}
            </button>
          </Reveal>
        ))}
      </ul>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[70] flex flex-col bg-foreground/96 p-4 md:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="label-tech text-background/70">
              {active.category} &nbsp;/&nbsp; {(index ?? 0) + 1} of {items.length}
            </p>
            <button type="button" onClick={close} className="btn-base btn-ghost-light !px-4 !py-2">
              Close
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center py-6">
            <img
              src={active.image}
              alt={active.caption}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <button type="button" onClick={() => step(-1)} className="btn-base btn-ghost-light !px-4 !py-2">
              &#8592; Prev
            </button>
            <p className="min-w-0 truncate text-sm text-background/80">{active.caption}</p>
            <button type="button" onClick={() => step(1)} className="btn-base btn-ghost-light !px-4 !py-2">
              Next &#8594;
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
