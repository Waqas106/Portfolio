export function Section({
  id,
  title,
  subtitle,
  ghost,
  eyebrow,
  children,
  className,
}) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 md:py-28 ${className || ''}`}>
      {ghost && (
        <span className="ghost-word absolute top-8 left-1/2 -translate-x-1/2 text-[5rem] sm:text-[9rem] md:text-[12rem]">
          {ghost}
        </span>
      )}
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center">
          {eyebrow && (
            <p className="mb-3 text-xs tracking-widest text-primary uppercase">{eyebrow}</p>
          )}
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
