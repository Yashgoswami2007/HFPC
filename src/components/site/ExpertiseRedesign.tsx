import { Link } from "@tanstack/react-router";
import { services } from "@/data/hfpc";
import { Reveal } from "./Reveal";
import { ArrowRight, ArrowRightIcon, Leaf, Box, CheckSquare, PencilRuler, Search, Settings, Wrench } from "lucide-react";

import img1 from "@/assets/img 3.jpg";
import img2 from "@/assets/img 3.jpg";

// Card style definitions based on user requirements
const cardStyles = [
  {
    color: "#D88968", // Terracotta
    bgShape: "30% 70% 70% 30% / 30% 30% 70% 70%", // Organic blob
    imageShape: "40% 60% 30% 70% / 60% 30% 70% 40%", // Asymmetric rounded blob
    icon: <Search className="w-4 h-4" strokeWidth={1.5} />
  },
  {
    color: "#9FAF83", // Muted Sage
    bgShape: "50% 50% 50% 50% / 60% 40% 40% 60%", // Soft oval
    imageShape: "45% 55% 45% 55% / 55% 45% 55% 45%", // Soft capsule
    icon: <Leaf className="w-4 h-4" strokeWidth={1.5} />
  },
  {
    color: "#8EAFC1", // Soft blue
    bgShape: "40% 60% 50% 50% / 30% 70% 50% 50%", // Blob
    imageShape: "50% 50% 24px 24px / 40px 40px 24px 24px", // Rounded arch
    icon: <Box className="w-4 h-4" strokeWidth={1.5} />
  },
  {
    color: "#E7A56D", // Warm apricot (used peach-ish for Laundry)
    bgShape: "50% 50% 50% 50% / 60% 40% 40% 60%",
    imageShape: "999px", // Horizontal pill
    icon: <Settings className="w-4 h-4" strokeWidth={1.5} />
  },
  {
    color: "#7E9466", // Olive (Waste Management)
    bgShape: "20% 80% 80% 20% / 80% 20% 80% 20%", // Abstract shape
    imageShape: "0% 50% 50% 50% / 0% 50% 50% 50%", // Leaf-inspired blob
    icon: <Leaf className="w-4 h-4" strokeWidth={1.5} />
  },
  {
    color: "#AAA2C5", // Muted lavender (MEP)
    bgShape: "60% 40% 40% 60% / 40% 60% 60% 40%",
    imageShape: "20% 80% 80% 20% / 80% 20% 80% 20%", // Irregular architectural polygon
    icon: <Wrench className="w-4 h-4" strokeWidth={1.5} />
  },
  {
    color: "#D99588", // Dusty coral (Procurement)
    bgShape: "30% 70% 30% 70% / 70% 30% 70% 30%",
    imageShape: "12px 12px 12px 12px / 8px 8px 8px 8px", // Elongated paper
    icon: <PencilRuler className="w-4 h-4" strokeWidth={1.5} />
  },
  {
    color: "#E9C56B", // Soft golden yellow (Site Support)
    bgShape: "50% 50% 30% 70% / 40% 40% 60% 60%",
    imageShape: "40% 60% 70% 30% / 40% 50% 60% 50%", // Large rounded asymmetric frame
    icon: <CheckSquare className="w-4 h-4" strokeWidth={1.5} />
  }
];

export function ExpertiseRedesign() {
  return (
    <section
      id="expertise"
      className="py-24 md:py-32 relative overflow-hidden font-sans"
      style={{ backgroundColor: "#F5F1E8", color: "#263238" }}
    >
      <div className="shell relative z-10 max-w-[1440px] mx-auto">

        {/* TOP INTRO AREA */}
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-24 items-center mb-16 lg:mb-24">
          <div className="flex flex-col">
            <Reveal>
              <div className="flex items-center gap-4 mb-6 lg:mb-8">
                <div className="h-[1px] w-12" style={{ backgroundColor: "#D88968" }} />
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold" style={{ color: "#68706D" }}>
                  Expertise
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              {/* Fallback to generic serif if font-display does not supply an elegant serif */}
              <h2 className="text-[46px] sm:text-5xl lg:text-[68px] leading-[0.95] tracking-tight font-display" style={{ color: "#263238", fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" }}>
                One BOH strategy.<br />Multiple operational systems.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-[17px] lg:text-[19px] leading-[1.6] max-w-[480px]" style={{ color: "#68706D" }}>
                Comprehensive planning across the spaces, systems and services that keep hospitality operations running efficiently, safely and beautifully.
              </p>
            </Reveal>
          </div>

          <div className="relative mt-8 lg:mt-0 w-full h-[400px] sm:h-[450px] lg:h-[550px] flex items-center justify-center">
            <Reveal delay={300} className="w-full h-full relative">

              {/* Colored Blob Backplate */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] lg:w-[85%] lg:h-[85%] opacity-90"
                style={{
                  backgroundColor: "#E9C56B",
                  borderRadius: "60% 40% 70% 30% / 40% 50% 60% 50%",
                  transform: "translate(-45%, -55%) rotate(-8deg)"
                }}
              />

              {/* Blueprint/Sketch background element */}
              <div
                className="absolute top-[10%] -left-[10%] w-[120%] h-[120%] opacity-15 mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                }}
              />

              {/* Main Image Mask */}
              <div
                className="absolute inset-0 m-auto w-[85%] h-[85%] lg:w-[80%] lg:h-[80%] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden transition-transform duration-700 hover:scale-[1.02]"
                style={{
                  borderRadius: "35% 65% 55% 45% / 45% 40% 60% 55%",
                }}
              >
                <img
                  src={img1}
                  alt="Commercial Kitchen Planning"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Annotation */}
              <div className="absolute top-8 lg:top-12 right-2 lg:-right-4 flex flex-col items-center">
                <span className="italic text-[18px] lg:text-[22px] transform rotate-[-8deg] opacity-80 whitespace-nowrap" style={{ color: "#263238", fontFamily: "cursive, 'Comic Sans MS', sans-serif" }}>
                  Better spaces.<br />Smoother operations.
                </span>
                <svg className="w-6 h-6 lg:w-8 lg:h-8 mt-1 lg:mt-2 opacity-50 transform -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12c4 0 8 4 8 8" />
                  <path d="M13 20l4-4" />
                  <path d="M13 20l-4-4" />
                </svg>
              </div>

              {/* Drafting Details */}
              <div className="absolute bottom-16 left-4 w-12 lg:w-16 h-[1px] opacity-30 transform -rotate-45" style={{ backgroundColor: "#263238" }} />
              <div className="absolute bottom-16 left-4 w-[1px] h-12 lg:h-16 opacity-30" style={{ backgroundColor: "#263238" }} />
              <div className="absolute top-20 left-10 w-2 h-2 rounded-full border border-black/30 bg-transparent flex items-center justify-center">
                <div className="w-[1px] h-4 bg-black/30" />
                <div className="absolute w-4 h-[1px] bg-black/30" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* SECTION LINK */}
        <Reveal delay={400}>
          <div className="flex justify-end mb-12 lg:mb-16 lg:-mt-24 relative z-20">
            <Link to="/expertise" className="group flex items-center gap-3 text-[9px] lg:text-[10px] tracking-[0.2em] font-semibold uppercase" style={{ color: "#263238" }}>
              ALL EIGHT SERVICE AREAS
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </span>
            </Link>
          </div>
        </Reveal>

        {/* SERVICES GRID */}
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const style = cardStyles[i % cardStyles.length]!;
            return (
              <Reveal key={service.slug} delay={(i % 4) * 80}>
                <Link
                  to="/expertise/$slug"
                  params={{ slug: service.slug }}
                  className="group block relative p-5 lg:p-7 h-full transition-all duration-500 rounded-3xl hover:-translate-y-1 hover:shadow-md hover:bg-white/40"
                  style={{ border: "1px solid rgba(80,80,60,0.08)" }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-white/0 transition-colors duration-500 pointer-events-none" />

                  {/* Numbering */}
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <span className="text-[11px] font-medium" style={{ color: style.color }}>{service.index}</span>
                    <div className="h-[1px] w-8 opacity-40" style={{ backgroundColor: style.color }} />
                  </div>

                  {/* Organic Image Area */}
                  <div className="relative h-44 lg:h-48 mb-8 flex items-center justify-center">

                    {/* Background Color Shape */}
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.12] opacity-80"
                      style={{
                        backgroundColor: style.color,
                        borderRadius: style.bgShape,
                        transform: i % 2 === 0 ? "scale(1.05) translate(-4%, 4%)" : "scale(1.05) translate(4%, -4%)"
                      }}
                    />

                    {/* The Image */}
                    <div
                      className="absolute inset-0 w-[88%] h-[88%] lg:w-[85%] lg:h-[85%] m-auto overflow-hidden shadow-sm transition-all duration-500 group-hover:scale-[1.04]"
                      style={{ borderRadius: style.imageShape }}
                    >
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover transition-all duration-[600ms] group-hover:brightness-[1.02] group-hover:contrast-[1.05]"
                      />
                    </div>

                    {/* Decorative Icon */}
                    <div
                      className="absolute -bottom-1 -right-1 p-2 rounded-full shadow-sm transition-transform duration-500 group-hover:scale-110 opacity-70 border border-black/5"
                      style={{ color: style.color, backgroundColor: "#F5F1E8" }}
                    >
                      {style.icon}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                    <h3 className="text-[20px] lg:text-[22px] font-display leading-[1.2] mb-3" style={{ color: "#263238", fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" }}>
                      {service.name}
                    </h3>
                    <p className="text-[13px] leading-[1.6]" style={{ color: "#68706D" }}>
                      {service.short}
                    </p>
                  </div>

                  {/* Minimalist Arrow */}
                  <div className="mt-6 lg:mt-8 transition-transform duration-500 group-hover:translate-x-2" style={{ color: style.color }}>
                    <ArrowRightIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* SECTION FOOTER */}
        <Reveal delay={200}>
          <div className="mt-24 lg:mt-32 flex justify-between items-center border-t pt-8" style={{ borderColor: "rgba(38,50,56,0.1)" }}>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12" style={{ backgroundColor: "#D88968" }} />
              <span className="text-[9px] tracking-[0.25em] uppercase font-semibold" style={{ color: "#68706D" }}>

              </span>
            </div>

            {/* Subtle curved exit line */}
            <div className="hidden sm:block w-32 h-12 border-r border-b rounded-br-[40px] opacity-15" style={{ borderColor: "#263238" }} />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
