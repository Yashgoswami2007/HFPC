import { createFileRoute } from "@tanstack/react-router";
import { contact, company } from "@/data/hfpc";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const title = "Contact HFPC — Get in Touch";
const description =
  "Contact Hospitality Facilities Planning Consultancy for specialist planning and consultancy services for hospitality and food-service back-of-house environments.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your next project."
        intro="We provide specialist planning and consultancy for hospitality and food-service back-of-house environments. Get in touch to see how we can support your operation."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Get in Touch"
              title="Contact Details"
            />
            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-display text-xl text-foreground">Phone</h3>
                <p className="mt-2 text-muted-foreground">
                  <a href={contact.phoneHref} className="hover:text-brass transition-colors">
                    {contact.phone}
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">Email</h3>
                <p className="mt-2 text-muted-foreground">
                  <a href={contact.emailHref} className="hover:text-brass transition-colors">
                    {contact.email}
                  </a>
                </p>
                {/* Email placeholder note if needed */}
                {contact.emailNote && (
                  <p className="mt-1 text-xs text-muted-foreground/60">{contact.emailNote}</p>
                )}
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">Location</h3>
                <p className="mt-2 text-muted-foreground">{contact.location}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeader
              eyebrow="Enquiry"
              title="Start a Conversation"
            />
            <div className="mt-10">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
