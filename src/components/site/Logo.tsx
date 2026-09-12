import { Link } from "@tanstack/react-router";

export function Logo({ tone = "dark", compact = false }: { tone?: "dark" | "light"; compact?: boolean }) {
  const ink = tone === "light" ? "text-background" : "text-foreground";
  const sub = tone === "light" ? "text-background/60" : "text-muted-foreground";
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="HFPC — home">
      <span
        aria-hidden
        className="grid h-9 w-9 shrink-0 place-items-center border border-brass/70 font-display text-[0.95rem] leading-none text-brass transition-colors group-hover:bg-brass group-hover:text-brass-foreground"
      >
        H
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`font-display text-xl tracking-[0.16em] ${ink}`}>HFPC</span>
        {!compact ? (
          <span className={`label-tech mt-1 hidden truncate sm:block ${sub}`}>
            Hospitality Facilities Planning
          </span>
        ) : null}
      </span>
    </Link>
  );
}
