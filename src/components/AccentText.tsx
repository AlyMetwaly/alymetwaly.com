type AccentTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function AccentText({ children, className = "" }: AccentTextProps) {
  return <span className={`text-accent ${className}`}>{children}</span>;
}
