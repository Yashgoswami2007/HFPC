import { useEffect, useRef, useState } from "react";
import { briefToKitchen, flows, process } from "@/data/hfpc";
import { Reveal } from "./Reveal";
import { HoverWords } from "./Primitives";

/** Facility flow: horizontal on desktop, vertical on mobile, with a drawn baseline. */
export function FacilityFlow() {
  const steps = ["Receiving", "Storage", "Preparation", "Production", "Service", "Washing", "Waste"];
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!drawn) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % steps.length), 1800);
    return () => window.clearInterval(id);
  }, [drawn, steps.length]);

  return (
    <div ref={ref} className="mt-14">
      <div
        aria-hidden
        className={`draw-line h-px w-full bg-border-strong ${drawn ? "draw-line-in" : ""}`}
      />
      <ol className="grid gap-0 md:grid-cols-7">
        {steps.map((step, i) => (
          <li
            key={step}
            onMouseEnter={() => setActive(i)}
            className={`group relative border-b border-border px-1 py-6 transition-colors md:border-b-0 md:border-l md:border-border md:px-4 md:py-8 ${
              i === 0 ? "md:border-l-0" : ""
            }`}
          >
            <span
              aria-hidden
              className={`absolute -top-[3px] left-0 h-[5px] w-[5px] rounded-full transition-colors duration-500 md:-top-[3px] ${
                active === i ? "bg-brass" : "bg-border-strong"
              }`}
            />
            <span
              className={`label-tech transition-colors duration-500 ${
                active === i ? "text-brass" : "text-muted-foreground"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p
              className={`mt-2 font-display text-xl leading-tight transition-colors duration-500 ${
                active === i ? "text-foreground" : "text-graphite/70"
              }`}
            >
              {step}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** The four integrated flows from the company profile. */
export function IntegratedFlows() {
  return (
    <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
      {flows.map((flow, i) => (
        <Reveal key={flow.title} delay={i * 90} className="bg-background p-7 md:p-9">
          <h3 className="font-display text-2xl text-foreground">{flow.title}</h3>
          <ol className="mt-5 space-y-2.5">
            {flow.steps.map((step, si) => (
              <li key={step} className="flex items-baseline gap-3">
                <span className="label-tech w-6 shrink-0 text-brass">
                  {String(si + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-graphite">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      ))}
    </div>
  );
}

/** Brief-to-kitchen sequence (profile page 4). */
export function BriefSequence() {
  return (
    <ol className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {briefToKitchen.map((item, i) => (
        <Reveal key={item.index} delay={i * 60} className="bg-background p-6">
          <span className="label-tech text-brass">{item.index}</span>
          <p className="mt-3 font-display text-xl leading-tight text-foreground">{item.label}</p>
        </Reveal>
      ))}
    </ol>
  );
}

import { ArrowRight } from "lucide-react";

/** Ten-stage project process (profile page 7). */
export function ProcessTimeline() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {process.map((step, i) => (
        <Reveal
          key={step.index}
          delay={i * 40}
        >
          <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-brass/10 hover:border-brass/50">
            
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brass/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Step Number */}
            <div className="relative z-10 mb-8 flex items-center justify-between">
              <span className="text-5xl font-display font-light text-brass/30 transition-all duration-500 group-hover:text-brass group-hover:scale-110 origin-left">
                {step.index}
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-all duration-500 group-hover:border-brass group-hover:bg-brass">
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-background" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
              <h3 className="mb-3 font-display text-xl leading-tight text-foreground">
                {step.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>

            {/* Bottom highlight line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-brass transition-all duration-700 ease-out group-hover:w-full" />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Signature equation section: space + flow + equipment + services + operations. */
export function TechnicalEquation() {
  const parts = ["Space", "Flow", "Equipment", "Services", "Operations"];
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="blueprint-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
          {parts.map((part, i) => (
            <Reveal key={part} delay={i * 110} className="flex items-baseline gap-6">
              {i > 0 ? (
                <span aria-hidden className="font-display text-3xl text-brass/70 hover:text-brass transition-colors duration-300">
                  +
                </span>
              ) : null}
              <HoverWords 
                text={part} 
                className="font-display text-3xl uppercase leading-none tracking-[0.04em] text-background sm:text-4xl lg:text-5xl"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={560}>
          <div className="mt-10 flex items-center gap-6">
            <span aria-hidden className="h-px flex-1 bg-background/25" />
            <span className="font-display text-4xl text-brass hover:text-brass transition-colors duration-300">=</span>
            <span aria-hidden className="h-px flex-1 bg-background/25" />
          </div>
        </Reveal>

        <Reveal delay={660}>
          <p className="display-xl mt-10 text-background">
            <HoverWords text="A facility that works." />
          </p>
        </Reveal>
      </div>
    </div>
  );
}
