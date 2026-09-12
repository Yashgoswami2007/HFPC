import { Link } from "@tanstack/react-router";
import { contact } from "@/data/hfpc";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Primitives";

export function CtaBand({
  eyebrow = "Start a Project",
  title = "Planning a new facility?",
  intro = "Share your project requirements — the operation, the capacity and the stage you are at — and we will take it from there.",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="shell py-20 md:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-5 max-w-2xl text-foreground">{title}</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="lead mt-5 max-w-xl">{intro}</p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link to="/start-a-project" className="btn-base btn-brass">
                Start a Project &#8594;
              </Link>
              <Link to="/contact" className="btn-base btn-outline">
                Contact HFPC
              </Link>
            </div>
            <p className="label-tech mt-6 text-muted-foreground lg:text-right">
              {contact.phone} &nbsp;/&nbsp; {contact.location}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
