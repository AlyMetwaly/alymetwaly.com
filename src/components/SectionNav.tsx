import { useState } from "react";
import { ArrowUp, List } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useActiveSection, scrollToSection } from "@/hooks/use-active-section";
import { SITE_SECTIONS } from "@/lib/sections";
import { cn } from "@/lib/utils";

const sectionIds = SITE_SECTIONS.map((s) => s.id);

function SectionNavLink({
  id,
  label,
  activeId,
  onNavigate,
  className,
}: {
  id: string;
  label: string;
  activeId: string;
  onNavigate: (id: string) => void;
  className?: string;
}) {
  const isActive = activeId === id;

  return (
    <button
      type="button"
      onClick={() => onNavigate(id)}
      className={cn(
        "group flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left font-mono text-[10px] uppercase tracking-[0.14em] transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        isActive ? "text-accent" : "text-muted-foreground hover:text-foreground",
        className,
      )}
      aria-current={isActive ? "location" : undefined}
    >
      <span
        className={cn(
          "h-1 w-1 shrink-0 rounded-full transition-colors",
          isActive ? "bg-accent" : "bg-transparent group-hover:bg-muted-foreground/40",
        )}
        aria-hidden="true"
      />
      {label}
    </button>
  );
}

function SectionNavList({
  activeId,
  onNavigate,
  className,
}: {
  activeId: string;
  onNavigate: (id: string) => void;
  className?: string;
}) {
  return (
    <ul className={cn("space-y-0.5", className)}>
      {SITE_SECTIONS.map((section) => (
        <li key={section.id}>
          <SectionNavLink
            id={section.id}
            label={section.label}
            activeId={activeId}
            onNavigate={onNavigate}
          />
        </li>
      ))}
    </ul>
  );
}

export function SectionNav() {
  const activeId = useActiveSection(sectionIds);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Desktop — editorial table of contents */}
      <nav
        className="pointer-events-none fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block 2xl:right-8"
        aria-label="On this page"
      >
        <div className="pointer-events-auto max-h-[min(80vh,36rem)] w-[9.5rem] overflow-y-auto border-l border-border/60 bg-background/80 py-4 pl-4 pr-2 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => handleNavigate("top")}
            className="mb-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <ArrowUp className="h-3 w-3" aria-hidden="true" />
            Top
          </button>
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70">
            On this page
          </p>
          <SectionNavList activeId={activeId} onNavigate={handleNavigate} />
        </div>
      </nav>

      {/* Mobile — floating index button + bottom sheet */}
      <div className="lg:hidden">
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <button
              type="button"
              className="fixed bottom-5 right-4 z-40 flex items-center gap-2 rounded-full border border-border bg-background/95 px-4 py-3 text-xs font-mono uppercase tracking-[0.14em] text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Open section navigation"
            >
              <List className="h-4 w-4" aria-hidden="true" />
              Sections
            </button>
          </DrawerTrigger>
          <DrawerContent className="max-h-[85vh] rounded-t-2xl border-border">
            <DrawerHeader className="border-b border-border pb-4 text-left">
              <DrawerTitle className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                On this page
              </DrawerTitle>
            </DrawerHeader>
            <div className="overflow-y-auto px-4 pb-8 pt-2">
              <button
                type="button"
                onClick={() => handleNavigate("top")}
                className="mb-4 flex w-full items-center gap-2 rounded-sm border border-border px-3 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
                Back to top
              </button>
              <SectionNavList
                activeId={activeId}
                onNavigate={handleNavigate}
                className="grid grid-cols-2 gap-x-3 gap-y-0.5 sm:grid-cols-3"
              />
            </div>
            <div className="border-t border-border p-4">
              <DrawerClose asChild>
                <button
                  type="button"
                  className="w-full rounded-full py-2.5 text-sm font-medium"
                  style={{ background: "var(--ink)", color: "var(--paper)" }}
                >
                  Close
                </button>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
