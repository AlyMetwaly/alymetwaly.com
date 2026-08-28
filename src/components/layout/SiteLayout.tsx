import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { HEADER_NAV_SECTIONS } from "@/lib/sections";
import { SocialLinks } from "@/components/SocialLinks";

function NavLink({
  to,
  label,
  className = "nav-link whitespace-nowrap",
}: {
  to: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={className}
      activeProps={{ className: `${className} !text-foreground` }}
      activeOptions={{ exact: true }}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-12">
        <div className="flex h-14 items-center justify-between gap-3 sm:h-16">
          <Link
            to="/"
            className="shrink-0 font-display text-xl leading-none tracking-tight sm:text-2xl"
            activeProps={{ className: "shrink-0 font-display text-xl leading-none tracking-tight sm:text-2xl" }}
            activeOptions={{ exact: true }}
          >
            Aly Metwaly
          </Link>
          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-5 text-sm text-muted-foreground lg:flex xl:gap-7"
            aria-label="Primary"
          >
            {HEADER_NAV_SECTIONS.map((link) => (
              <NavLink key={link.id} to={link.path} label={link.label} />
            ))}
          </nav>
          <Link
            to="/contact"
            className="shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-colors hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-4 sm:text-sm"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
            activeProps={{
              className:
                "shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-colors hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-4 sm:text-sm opacity-90",
              style: { background: "var(--ink)", color: "var(--paper)" },
            }}
            activeOptions={{ exact: true }}
          >
            Let's Talk
          </Link>
        </div>
        <nav
          className="flex gap-4 overflow-x-auto pb-3 text-xs text-muted-foreground lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Primary mobile"
        >
          {HEADER_NAV_SECTIONS.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              label={link.label}
              className="nav-link shrink-0 whitespace-nowrap"
            />
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-8 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground sm:px-6 sm:text-xs lg:px-12">
        <div>© {new Date().getFullYear()} Aly Metwaly · Enterprise AI Transformation Leader</div>
        <SocialLinks />
        {/* Deliberately footer-only. Talk pages are QR-code destinations for
            live keynotes, not sections of the site, so they stay out of the
            header nav -- but the latest one needs an internal link so it is
            not orphaned. Point this at the newest talk each event. */}
        <Link
          to="/splash"
          className="nav-link whitespace-nowrap"
          activeProps={{ className: "nav-link whitespace-nowrap !text-foreground" }}
          activeOptions={{ exact: true }}
        >
          Talk slides
        </Link>
        <div>Espoo · Finland</div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground font-sans">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
