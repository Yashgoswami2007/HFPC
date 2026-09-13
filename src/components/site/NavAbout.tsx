import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { company, principles, contact, images } from "@/data/hfpc";
import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

export function NavAbout({ children }: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-xl overflow-y-auto border-l border-border bg-background/95 p-0 sm:max-w-2xl backdrop-blur-xl"
      >
        <div className="flex min-h-full flex-col">
          <div className="p-8 md:p-12">
            <SheetHeader className="mb-10 text-left space-y-6">
              <span className="label-tech text-brass">About HFPC</span>
              <SheetTitle className="font-display text-4xl uppercase leading-[1.1] text-foreground md:text-5xl">
                The Infrastructure <br /> Behind Hospitality.
              </SheetTitle>
            </SheetHeader>

            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl font-medium leading-relaxed text-foreground md:text-2xl">
                  {company.statement}
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {company.approachStatement}
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  {company.focusStatement}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 pt-8">
                {principles.map((p) => (
                  <div
                    key={p.title}
                    className="flex flex-col space-y-3 bg-[#a2927c]/10 p-6 border border-[#a2927c]/20"
                  >
                    <h4 className="font-display text-xl tracking-wide text-foreground uppercase">
                      {p.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <SheetClose asChild>
                  <Link
                    to="/about"
                    className="group inline-flex items-center gap-3 font-display text-lg tracking-wide uppercase text-brass transition-colors hover:text-foreground"
                  >
                    Read full company profile
                    <span className="transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </SheetClose>
              </div>
            </div>
          </div>
          
          <div className="mt-auto">
             <img
                src={images.heroBoh}
                alt="Commercial kitchen interior"
                className="h-64 w-full object-cover grayscale-[0.2] transition-all duration-700 hover:grayscale-0"
              />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
