import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import collegeLogo from "@/assets/college-logo.png.asset.json";

const navItems = [
  ["About", "#about"],
  ["Magazine", "#magazine"],
  ["Activities", "#activities"],
  ["Office Bearers", "#office-bearers"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-primary-foreground">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between border-b border-primary-foreground/20 px-3.5 py-2.5 sm:px-8 sm:py-3.5 lg:px-12">
        <a
          href="#top"
          className="flex items-center gap-2 sm:gap-3 md:gap-3.5"
          aria-label="Paper and Pulse home"
        >
          <img
            src="/college-logo.svg"
            alt="Easwari Engineering College"
            referrerPolicy="no-referrer"
            className="h-8 w-auto shrink-0 object-contain sm:h-10 md:h-12"
          />
          <span className="font-display text-lg tracking-normal text-primary-foreground whitespace-nowrap sm:text-2xl md:text-[1.85rem]">
            Paper <span className="italic text-accent">&amp;</span> Pulse
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[0.67rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground/75 transition-colors hover:text-primary-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <Button
          variant="masthead"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      {open ? (
        <nav
          className="mx-5 border-b border-primary-foreground/25 bg-primary px-5 py-6 sm:mx-8"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-5">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-display text-3xl"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
