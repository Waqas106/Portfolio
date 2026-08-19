const tiles = [
  { value: "5+", label: "Projects Delivered" },
  { value: "15+", label: "Technologies Mastered" },
  { value: "3+", label: "Clients & Partners" },
  // { value: "10+", label: "Apps in Production" },
  {value: "100%", label:"Client Satisfaction"}
];

export function Stats() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-2">
        <div
          className="surface-card relative overflow-hidden p-8"
          style={{
            backgroundImage:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 22%, var(--card)), var(--card) 70%)",
          }}
        >
          <div className="flex items-start gap-4">
            <span className="font-display text-6xl leading-none font-bold text-primary">01</span>
            <h3 className="font-display text-3xl leading-tight font-bold">
              Year Of
              <br />
              experience
            </h3>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            I provide design, development, bug fixing, and redesign services, ensuring responsive
            layouts, clean code, and optimized solutions that improve performance and enhance user
            experience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {tiles.map((s) => (
            <div
              key={s.label}
              className="surface-card flex flex-col items-center justify-center px-4 py-8 text-center"
            >
              <p className="font-display text-3xl font-bold text-gradient-navy sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
