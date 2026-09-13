import { Reveal } from "./Reveal";

const workflowSteps = [
  {
    id: "01",
    title: "Vision & Concept",
    description: "Translating early ideas into a cohesive, high-end hospitality vision. We define the brand, the mood, and the core experience that will set your project apart.",
    image: "/images/workflow/vision_concept.jpg",
  },
  {
    id: "02",
    title: "Planning & Strategy",
    description: "Detailed roadmaps, financial modeling, and architectural alignment. We lay the groundwork to ensure the vision is viable, scalable, and beautifully structured.",
    image: "/images/workflow/planning_strategy.jpg",
  },
  {
    id: "03",
    title: "Execution & Build",
    description: "From design realization to vendor management, we oversee the intricate details of construction and outfitting, maintaining premium standards throughout.",
    image: "/images/workflow/execution_build.jpg",
  },
  {
    id: "04",
    title: "Operations & Launch",
    description: "Fine-tuning the guest experience, staff training, and operational flow. We ensure the launch is flawless and the day-to-day operations deliver on the initial vision.",
    image: "/images/workflow/operation_management.jpg",
  }
];

export function VisionToOperation() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAF9F6] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl mb-20 lg:mb-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12" style={{ backgroundColor: "#D88968" }} />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold" style={{ color: "#D88968" }}>
                Process
              </span>
            </div>
            <h2 
              className="text-4xl lg:text-5xl lg:leading-[1.1] mb-8 font-display" 
              style={{ color: "#263238", fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" }}
            >
              From Vision to Operation
            </h2>
            <p className="text-[15px] lg:text-[17px] leading-[1.8] max-w-xl" style={{ color: "#68706D" }}>
              We orchestrate every phase of your project's lifecycle. A methodical, elegant approach ensures your concepts are realized flawlessly, from the first sketch to the opening night.
            </p>
          </div>
        </Reveal>

        {/* Zig-Zag Workflow */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {workflowSteps.map((step, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <div 
                key={step.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
                  {/* Faint Background Number */}
                  <span className="absolute -top-10 -left-6 text-[120px] lg:text-[160px] font-bold opacity-[0.03] select-none pointer-events-none" style={{ color: "#263238" }}>
                    {step.id}
                  </span>
                  
                  <Reveal delay={100}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[12px] font-semibold tracking-widest" style={{ color: "#D88968" }}>
                        STEP {step.id}
                      </span>
                      <div className="h-[1px] w-8" style={{ backgroundColor: "rgba(216,137,104,0.3)" }} />
                    </div>
                    
                    <h3 
                      className="text-3xl lg:text-4xl font-display mb-6 leading-tight" 
                      style={{ color: "#263238", fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" }}
                    >
                      {step.title}
                    </h3>
                    
                    <p className="text-[15px] leading-[1.8] max-w-md" style={{ color: "#68706D" }}>
                      {step.description}
                    </p>
                  </Reveal>
                </div>

                {/* Image Content */}
                <div className="w-full lg:w-1/2">
                  <Reveal delay={200}>
                    <div className="relative group overflow-hidden rounded-sm" style={{ aspectRatio: '16/10' }}>
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      />
                      {/* Overlay gradient for premium feel */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
