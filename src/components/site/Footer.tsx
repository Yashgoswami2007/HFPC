import { Link } from "@tanstack/react-router";
import { company, contact, nav, services } from "@/data/hfpc";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-background/15 bg-foreground text-background">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-background/70">
              Specialist planning and consultancy for hospitality and food-service back-of-house
              environments.
            </p>
            <p className="label-tech mt-6 text-background/50">{company.disciplines}</p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="label-tech text-brass">Navigate</h2>
            <ul className="mt-5 space-y-2.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-background/70 transition-all duration-300 hover:text-background inline-block hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="label-tech text-brass">Expertise</h2>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/expertise/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-background/70 transition-all duration-300 hover:text-background inline-block hover:translate-x-1"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label-tech text-brass">Contact</h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-background/70">
              <p>
                <a href={contact.phoneHref} className="transition-colors hover:text-background">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={contact.emailHref} className="transition-colors hover:text-background">
                  {contact.email}
                </a>
              </p>
              <p>{contact.location}</p>
            </address>
            <Link to="/start-a-project" className="btn-base btn-ghost-light mt-7">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-background/15 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="label-tech text-background/50">
            &copy; {year} {company.legalName}
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="label-tech text-background/50 transition-colors hover:text-background">
              Privacy Policy
            </Link>
            <Link to="/contact" className="label-tech text-background/50 transition-colors hover:text-background">
              Enquiries
            </Link>
            <Link to="/careers" className="label-tech text-background/50 transition-colors hover:text-background">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
