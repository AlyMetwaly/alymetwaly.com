type SectionDividerProps = {
  className?: string;
};

export function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`editorial-divider ${className}`} role="presentation" aria-hidden="true">
      <span className="accent-dot" />
    </div>
  );
}
