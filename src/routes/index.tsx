import { createFileRoute, Link } from "@tanstack/react-router";
import {
  commitments,
  company,
  contact,
  deliverables,
  images,
  insights,
  principles,
  sectors,
  services,
  values,
} from "@/data/hfpc";
import { Reveal } from "@/components/site/Reveal";
import { ArrowLink, Eyebrow, Section, SectionHeader, HoverWords } from "@/components/site/Primitives";
import { InsightCard, SectorCard, ServiceCard } from "@/components/site/Cards";
import {
  BriefSequence,
  FacilityFlow,
  IntegratedFlows,
  ProcessTimeline,
  TechnicalEquation,
} from "@/components/site/Diagrams";
import { CtaBand } from "@/components/site/CtaBand";
import { ExpertiseRedesign } from "@/components/site/ExpertiseRedesign";
import { VisionToOperation } from "@/components/site/VisionToOperation";
import { Building2, UtensilsCrossed, Users, Ship, Landmark, Square, List, Network, ShieldCheck, CheckCircle2 } from "lucide-react";

import img1 from "@/assets/img 1.jpg";
import img2 from "@/assets/img 2.jpg";
import leaf from "@/assets/leaf.png";

const title = "HFPC — Hospitality Facilities Planning Consultancy";
const description =
  "Specialist commercial kitchen, back-of-house and hospitality facilities planning. HFPC plans the operational infrastructure behind hospitality and food-service facilities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="relative isolate overflow-hidden min-h-[calc(100vh-4.5rem)] flex flex-col pt-16 md:pt-24 pb-12 bg-background">
        <img
          src={images.heroN}
          alt="Wide view of an empty stainless steel commercial kitchen"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent lg:w-4/5 pointer-events-none" />
        
        <div className="shell relative flex-1 flex flex-col justify-between z-10 w-full">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 mt-8 lg:mt-16">
            {/* Left Side */}
            <div className="flex flex-col gap-6 max-w-2xl">
              <Reveal>
                <p className="tracking-[0.15em] text-[10px] md:text-xs font-semibold text-foreground/80 uppercase">
                  Smarter Spaces. Smoother Operations.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-foreground tracking-tight uppercase">
                  ENGINEERING<br />THE BACK OF<br />HOUSE.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex gap-6 items-start mt-4">
                  <div className="hidden md:flex flex-col items-center mt-2">
                    <div className="w-1.5 h-1.5 rounded-full border border-foreground mb-2"></div>
                    <div className="w-[1px] h-20 bg-foreground/30"></div>
                    <div className="rotate-270 -rotate-90 origin-left text-[8px] uppercase tracking-[0.2em] text-foreground/60 mt-16 whitespace-nowrap -ml-4">
                      Special to explore
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-sm">
                    {company.statement}
                  </p>
                </div>
              </Reveal>
              
              <Reveal delay={300}>
                <div className="flex flex-wrap items-center gap-8 mt-6">
                  <Link to="/start-a-project" className="bg-[#4a2e1b] text-white px-8 py-3 rounded-full text-xs font-medium tracking-[0.1em] hover:bg-[#321f12] hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 uppercase shadow-sm">
                    START A PROJECT <span>&rarr;</span>
                  </Link>
                  <Link to="/expertise" className="text-foreground text-xs font-medium tracking-[0.1em] uppercase flex items-center gap-2 group border-b border-foreground/30 pb-1 hover:border-foreground hover:text-[#d9774b] transition-colors">
                    EXPLORE OUR EXPERTISE <span className="text-foreground/70 transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </Reveal>
            </div>
            
            {/* Right Side - Top Card */}
            <div className="hidden lg:block justify-self-end mt-4">
              <Reveal delay={400} className="w-[420px]">
                <div className="bg-[#ecebe6]/80 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden">
                  
                  <div className="flex justify-between items-center mb-8 border-b border-foreground/10 pb-4">
                    <p className="text-[10px] font-mono tracking-[0.15em] text-foreground/80 uppercase">
                      From concept to operation
                    </p>
                    <div className="w-12 h-[1px] bg-foreground/20"></div>
                  </div>
                  
                  <div className="flex gap-8 items-center">
                    <div className="w-[45%] relative h-28">
                      <img src={images.svcDocs} alt="Blueprint" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply filter grayscale rounded-sm" />
                    </div>
                    <div className="w-[55%] flex flex-col gap-4">
                      <div className="flex items-center gap-4 text-[10px] font-medium text-foreground tracking-wider uppercase">
                        <Square className="w-3.5 h-3.5 text-foreground/70 stroke-1" /> Kitchen Layouts
                      </div>
                      <div className="flex items-center gap-4 text-[10px] font-medium text-foreground tracking-wider uppercase">
                        <List className="w-3.5 h-3.5 text-foreground/70 stroke-1" /> Equipment Zones
                      </div>
                      <div className="flex items-center gap-4 text-[10px] font-medium text-foreground tracking-wider uppercase">
                        <Network className="w-3.5 h-3.5 text-foreground/70 stroke-1" /> Workflow
                      </div>
                      <div className="flex items-center gap-4 text-[10px] font-medium text-foreground tracking-wider uppercase">
                        <ShieldCheck className="w-3.5 h-3.5 text-foreground/70 stroke-1" /> Food Safety
                      </div>
                      <div className="flex items-center gap-4 text-[10px] font-medium text-foreground tracking-wider uppercase">
                        <CheckCircle2 className="w-3.5 h-3.5 text-foreground/70 stroke-1" /> Compliance
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-end mt-16 lg:mt-auto gap-8 pb-4">
            {/* Bottom Left Card */}
            <Reveal delay={500} className="w-full lg:w-auto">
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]">
                <p className="text-[10px] font-mono tracking-[0.15em] text-foreground/70 uppercase mb-6">
                  Serving multiple sectors
                </p>
                <div className="flex flex-wrap gap-6 md:gap-10">
                  <div className="flex flex-col items-center gap-3">
                    <Building2 className="w-6 h-6 text-foreground/70 stroke-1" />
                    <span className="text-[9px] tracking-widest text-foreground text-center uppercase max-w-[70px]">Hotels & Resorts</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <UtensilsCrossed className="w-6 h-6 text-foreground/70 stroke-1" />
                    <span className="text-[9px] tracking-widest text-foreground text-center uppercase max-w-[80px]">Restaurants & F&B</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <Users className="w-6 h-6 text-foreground/70 stroke-1" />
                    <span className="text-[9px] tracking-widest text-foreground text-center uppercase max-w-[70px]">Catering & Events</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <Ship className="w-6 h-6 text-foreground/70 stroke-1" />
                    <span className="text-[9px] tracking-widest text-foreground text-center uppercase max-w-[70px]">Cruise & Marine</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <Landmark className="w-6 h-6 text-foreground/70 stroke-1" />
                    <span className="text-[9px] tracking-widest text-foreground text-center uppercase max-w-[80px]">Institutional</span>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={600}>
              <div className="flex items-center gap-4 lg:mb-4">
                <div className="w-16 h-[1px] bg-foreground/30 hidden md:block"></div>
                <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-foreground/80 whitespace-nowrap font-medium">
                  Better planning, higher standards, lasting impact.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 — WHAT HFPC DOES */}
      <Section className="overflow-hidden">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brass" />
                <Eyebrow className="!mb-0">What We Do</Eyebrow>
              </div>
              <h2 className="display-lg mt-6 text-foreground">
                The spaces guests don't see are the spaces that make hospitality work.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-graphite">
                {company.approachStatement}
              </p>
              
              <div className="mt-8 border-l-2 border-[#d9774b] pl-6 py-1">
                <p className="text-base font-medium text-[#d9774b]">
                  {company.focusStatement}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {/* Block 1: Function */}
                <div className="group relative overflow-hidden bg-[#fbf5f2] p-6 transition-all hover:bg-[#f6e9e1]">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-[#d9774b]/10 text-[#d9774b]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                  </div>
                  <h3 className="label-tech mb-3 tracking-widest text-[#d9774b]">Function</h3>
                  <p className="font-display text-lg leading-snug text-foreground">
                    Every space must serve a clear operational purpose.
                  </p>
                  <div className="mt-6 h-px w-8 bg-[#d9774b]/40 transition-all group-hover:w-16" />
                </div>

                {/* Block 2: Flow */}
                <div className="group relative overflow-hidden bg-[#f0f4f6] p-6 transition-all hover:bg-[#e4ebf0]">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-[#5a7f95]/10 text-[#5a7f95]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12h16" />
                      <path d="M16 8l4 4-4 4" />
                      <circle cx="5" cy="12" r="2" />
                    </svg>
                  </div>
                  <h3 className="label-tech mb-3 tracking-widest text-[#5a7f95]">Flow</h3>
                  <p className="font-display text-lg leading-snug text-foreground">
                    People, food, equipment, materials and waste must move efficiently.
                  </p>
                  <div className="mt-6 h-px w-8 bg-[#5a7f95]/40 transition-all group-hover:w-16" />
                </div>

                {/* Block 3: Coordination */}
                <div className="group relative overflow-hidden bg-[#f3f5f0] p-6 transition-all hover:bg-[#e8ece3]">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-[#718663]/10 text-[#718663]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  </div>
                  <h3 className="label-tech mb-3 tracking-widest text-[#718663]">Coordination</h3>
                  <p className="font-display text-lg leading-snug text-foreground">
                    BOH planning must integrate with architecture, MEP and project requirements.
                  </p>
                  <div className="mt-6 h-px w-8 bg-[#718663]/40 transition-all group-hover:w-16" />
                </div>

                {/* Block 4: Value */}
                <div className="group relative overflow-hidden bg-[#fbf8ee] p-6 transition-all hover:bg-[#f5eed6]">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-[#b89552]/10 text-[#b89552]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3h12l4 6-10 13L2 9Z" />
                      <path d="M11 3 8 9l4 13 4-13-3-6" />
                      <path d="M2 9h20" />
                    </svg>
                  </div>
                  <h3 className="label-tech mb-3 tracking-widest text-[#b89552]">Value</h3>
                  <p className="font-display text-lg leading-snug text-foreground">
                    Good planning reduces operational inefficiencies, unnecessary capex and avoidable project costs.
                  </p>
                  <div className="mt-6 h-px w-8 bg-[#b89552]/40 transition-all group-hover:w-16" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Architectural Collage */}
          <div className="relative mt-20 min-h-[500px] w-full lg:mt-0 lg:min-h-[700px]">
            <Reveal delay={200} className="h-full">
              {/* Background blueprint/CAD drawing */}
              <div className="absolute -bottom-24 -left-16 z-0 h-[350px] w-[500px] opacity-[0.25] mix-blend-multiply sm:-left-4">
                <img
                  src={img2}
                  alt="Floor plan outline"
                  className="h-full w-full object-contain object-left-bottom"
                />
              </div>

              {/* Colored accent blocks */}
              <div className="absolute -left-12 top-24 h-72 w-24 bg-[#d9774b] lg:block hidden" />
              <div className="absolute -right-6 top-32 h-36 w-48 bg-[#b4c8d5] p-6 hidden lg:block">
                <p className="text-[10px] font-mono tracking-widest leading-loose text-[#2a3c4a]">
                  PLANNING<br />SPACES.<br />POWERING<br />OPERATIONS.
                </p>
                <div className="mt-4 h-px w-6 bg-[#2a3c4a]" />
              </div>
              <div className="absolute -right-12 bottom-1/3 h-80 w-28 bg-[#718663] hidden lg:block" />

              {/* Main Kitchen Image Container */}
              <div className="absolute left-4 right-8 top-0 z-10 h-[75%] lg:left-8 lg:right-16 lg:h-[85%] shadow-xl transition-transform duration-1000 hover:scale-[1.01]">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={img1}
                    alt="Commercial kitchen interior"
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Overlay: Architectural Flow Overlay */}
                  <div className="absolute inset-0 z-20 hidden flex-col p-8 opacity-80 sm:flex">
                    <div className="flex w-full items-center gap-3">
                      <span className="text-[10px] font-mono tracking-widest text-white uppercase">Kitchen Flow</span>
                      <div className="h-px flex-1 bg-white/70" />
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                    <div className="relative mt-8 flex flex-col gap-6 ml-6 border-l border-white/50 pl-8 pb-12 w-48">
                      {['Storage', 'Prep', 'Cookline', 'Service'].map((step, i) => (
                        <div key={step} className="relative">
                          {/* Node dot */}
                          <div className="absolute -left-[37px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-[1.5px] border-white bg-white/20" />
                          {/* Step card */}
                          <div className="border border-white/40 bg-white/10 px-4 py-2 backdrop-blur-md">
                            <span className="text-[10px] font-mono tracking-widest text-white uppercase">{step}</span>
                          </div>
                          {/* Arrow down */}
                          {i < 3 && (
                            <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 text-white/70">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <polyline points="19 12 12 19 5 12" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Leaf */}
              <div className="absolute -right-20 bottom-16 z-20 h-72 w-72 opacity-90 pointer-events-none drop-shadow-2xl sm:-right-8">
                <img
                  src={leaf}
                  alt="Decorative botanical element"
                  className="h-full w-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Secondary Image: Service Corridor */}
              <div className="absolute -bottom-4 right-0 z-30 h-56 w-72 border-8 border-background bg-background shadow-2xl transition-transform duration-500 hover:-translate-y-2 lg:-bottom-12 lg:-right-8 lg:h-72 lg:w-96">
                <img
                  src={images.svcBoh}
                  alt="Back of house corridor"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Figure Caption */}
              <div className="absolute -bottom-20 right-0 z-10 flex items-center gap-4 lg:-bottom-32">
                <div className="h-px w-12 bg-[#b89552]" />
                <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Fig. 01 — Support areas and service circulation
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 03 — EXPERTISE */}
      <ExpertiseRedesign />
      
      {/* 03.5 — VISION TO OPERATION */}
      <VisionToOperation />

      {/* 04 — SECTORS */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <SectionHeader
            eyebrow="Sectors We Serve"
            title="Built for complex hospitality operations."
            intro="Tailored BOH planning solutions for a wide range of hospitality and food-service environments."
          />
          <Reveal delay={120} className="lg:justify-self-end">
            <ArrowLink to="/sectors">All sectors</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.slice(0, 6).map((sector, i) => (
            <SectorCard key={sector.slug} sector={sector} delay={(i % 3) * 80} />
          ))}
        </div>
      </Section>

      {/* 05 — WHY HFPC */}
      <Section tone="muted">
        <SectionHeader
          eyebrow="Why HFPC"
          title="Precision where the project can't afford assumptions."
          intro="Specialist facilities planning is what keeps an operation workable after opening — and keeps avoidable cost out of the project before it."
        />
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal 
              key={v.title} 
              delay={(i % 3) * 70} 
              className="group relative bg-background p-7 transition-all duration-500 ease-out hover:bg-[#b89552] hover:-translate-y-1 hover:shadow-xl md:p-9"
            >
              <span className="label-tech text-brass transition-colors duration-500 group-hover:text-white/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-2xl leading-tight text-foreground transition-colors duration-500 group-hover:text-white">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/90">
                {v.body}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <blockquote className="mt-14 border-l border-brass pl-6 md:pl-10">
            <p className="display-md max-w-3xl text-foreground">&ldquo;{company.quote}&rdquo;</p>
          </blockquote>
        </Reveal>
      </Section>

      {/* 06 — PROJECTS */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <SectionHeader
            eyebrow="Projects"
            title="Facilities planned from the operation outward."
            intro="Project records are being prepared for publication. Each will be presented as a case study covering the brief, the planning approach and the deliverables issued."
          />
          <Reveal delay={120} className="lg:justify-self-end">
            <ArrowLink to="/projects">Project portfolio</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="hairline flex aspect-[4/3] items-center justify-center bg-secondary">
                <span className="label-tech border border-dashed border-border-strong px-3 py-1.5 text-muted-foreground">
                  [PROJECT IMAGE TO BE PROVIDED]
                </span>
              </div>
              <p className="mt-4 font-display text-xl text-foreground">[PROJECT NAME]</p>
              <p className="label-tech mt-1.5 text-muted-foreground">
                [SECTOR] &nbsp;/&nbsp; [LOCATION] &nbsp;/&nbsp; [SCOPE]
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 07 — APPROACH */}
      <Section tone="muted">
        <SectionHeader
          eyebrow="Approach"
          title="From brief to site-ready documentation."
          intro="A structured and collaborative process to ensure well-planned, coordinated and buildable BOH facilities."
        />
        <ProcessTimeline />
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Key deliverables</Eyebrow>
            <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {deliverables.map((d) => (
                <li key={d} className="flex items-baseline gap-3 text-sm text-graphite">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-brass" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>From operational brief to working kitchen</Eyebrow>
            <div className="mt-6">
              <BriefSequence />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 08 — TECHNICAL / OPERATIONAL FLOW */}
      <section className="relative overflow-hidden bg-foreground py-24 md:py-32">
        <div className="shell relative">
          <Reveal>
            <Eyebrow className="!text-background/60">
              <HoverWords text="How we think" />
            </Eyebrow>
          </Reveal>
          <div className="mt-12">
            <TechnicalEquation />
          </div>
          <div className="mt-20 grid gap-10 border-t border-background/20 pt-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <h3 className="display-md text-background">
                <HoverWords text="Designing the system behind the operation." />
              </h3>
              <p className="mt-5 text-base leading-relaxed text-background/70">
                <HoverWords text="An integrated approach to people, food, materials and waste ensures efficient, hygienic and practical hospitality operations." />
              </p>
              <p className="label-tech mt-8 text-brass">
                <HoverWords text="Integrated flows. Efficient operations." />
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-px border border-background/20 bg-background/20 sm:grid-cols-2">
                {[
                  { t: "Food", s: "Receiving → Storage → Production → Service → Return" },
                  { t: "People", s: "Staff entry → Changing → Work areas → Support" },
                  { t: "Materials", s: "Receiving → Stores → Production → Disposal" },
                  { t: "Waste", s: "Segregation → Holding → Movement → Collection" },
                ].map((f) => (
                  <div key={f.t} className="bg-foreground p-6">
                    <p className="label-tech text-brass">
                      <HoverWords text={`${f.t} flow`} />
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-background/75">
                      <HoverWords text={f.s} />
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 09 — ABOUT */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>About HFPC</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-6 text-foreground">
                The infrastructure behind hospitality.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="lead mt-8">{company.statement}</p>
            </Reveal>
            <Reveal delay={200}>
              <ArrowLink to="/about" className="mt-10">
                More about the practice
              </ArrowLink>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="space-y-6 border-t border-border pt-8">
              <p className="text-sm leading-relaxed text-graphite">{company.approachStatement}</p>
              <p className="text-sm leading-relaxed text-graphite">{company.focusStatement}</p>
              <dl className="grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <dt className="label-tech text-muted-foreground">Disciplines</dt>
                  <dd className="mt-1.5 text-sm">{company.disciplines}</dd>
                </div>
                <div>
                  <dt className="label-tech text-muted-foreground">Based in</dt>
                  <dd className="mt-1.5 text-sm">{contact.location}</dd>
                </div>
                <div>
                  <dt className="label-tech text-muted-foreground">Positioning</dt>
                  <dd className="mt-1.5 text-sm">{company.positioning}</dd>
                </div>
                <div>
                  <dt className="label-tech text-muted-foreground">Service areas</dt>
                  <dd className="mt-1.5 text-sm">{services.length} planning disciplines</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 10 — BUILT AROUND OPERATIONAL EXPERTISE */}
      <Section tone="muted">
        <SectionHeader
          eyebrow="Credentials"
          title="Built around operational expertise."
          intro="HFPC's capability is described by what it plans and documents, not by borrowed logos. What follows is the working scope the practice delivers."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {commitments.map((c) => (
                <div key={c} className="bg-background p-6">
                  <p className="font-display text-xl leading-snug text-foreground">{c}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <IntegratedFlowsBlock />
          </Reveal>
        </div>
      </Section>

      {/* 11 — INSIGHTS */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <SectionHeader
            eyebrow="Insights"
            title="Notes on planning the back of house."
            intro="A knowledge hub covering commercial kitchen planning, BOH operations, laundry, waste, equipment planning and technical coordination."
          />
          <Reveal delay={120} className="lg:justify-self-end">
            <ArrowLink to="/insights">All insights</ArrowLink>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.slice(0, 3).map((insight, i) => (
            <InsightCard key={insight.slug} insight={insight} delay={i * 80} />
          ))}
        </div>
      </Section>

      {/* 12 — CONTACT */}
      <CtaBand />
    </>
  );
}

function IntegratedFlowsBlock() {
  return (
    <div>
      <Eyebrow>Planned as one system</Eyebrow>
      <div className="[&>div]:mt-6">
        <IntegratedFlows />
      </div>
    </div>
  );
}
