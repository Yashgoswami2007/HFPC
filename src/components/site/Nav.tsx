import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav, services } from "@/data/hfpc";
import { Logo } from "./Logo";
import { NavAbout } from "./NavAbout";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled || open
          ? "border-border bg-background/95 backdrop-blur-md"
          : "border-transparent bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="shell">
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-500 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <Logo compact={scrolled} />

          <div className="flex items-center gap-6">
            <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
              {nav.map((item) =>
                item.label === "About" ? (
                  <NavAbout key={item.to}>
                    <button className="label-tech py-2 text-foreground/80 transition-colors hover:text-brass">
                      {item.label}
                    </button>
                  </NavAbout>
                ) : item.label === "Expertise" ? (
                  <div
                    key={item.to}
                    className="relative"
                    onMouseEnter={() => setMenu(true)}
                    onMouseLeave={() => setMenu(false)}
                  >
                    <Link
                      to={item.to}
                      className="label-tech py-2 text-foreground/80 transition-colors hover:text-brass"
                      activeProps={{ className: "label-tech py-2 text-brass" }}
                    >
                      {item.label}
                    </Link>
                    {menu ? (
                      <div className="absolute left-1/2 top-full z-50 w-[30rem] -translate-x-1/2 border border-border bg-card p-2 shadow-[0_24px_60px_-30px_rgba(32,33,30,0.35)]">
                        <ul className="grid grid-cols-2 gap-1">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link
                                to="/expertise/$slug"
                                params={{ slug: s.slug }}
                                className="group flex gap-3 p-3 transition-colors hover:bg-secondary"
                              >
                                <span className="label-tech pt-1 text-brass">{s.index}</span>
                                <span className="text-sm leading-snug text-foreground group-hover:text-brass">
                                  {s.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="label-tech py-2 text-foreground/80 transition-colors hover:text-brass"
                    activeProps={{ className: "label-tech py-2 text-brass" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <Link to="/start-a-project" className="btn-base btn-brass hidden md:inline-flex">
              Start a Project
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="hairline grid h-11 w-11 shrink-0 place-items-center lg:hidden"
            >
              <span aria-hidden className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 h-px w-5 bg-foreground transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-5 bg-foreground transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="shell flex flex-col py-4">
            {nav.map((item) =>
              item.label === "About" ? (
                <NavAbout key={item.to}>
                  <button className="border-b border-border py-4 text-left font-display text-2xl text-foreground transition-colors hover:text-brass">
                    {item.label}
                  </button>
                </NavAbout>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="border-b border-border py-4 font-display text-2xl text-foreground"
                  activeProps={{ className: "border-b border-border py-4 font-display text-2xl text-brass" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link to="/start-a-project" className="btn-base btn-brass mt-6 w-full">
              Start a Project
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
