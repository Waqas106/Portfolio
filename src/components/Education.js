import { Section } from "./Section";
import { educationData } from "../data/mock-data";

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Where the fundamentals came from."
      eyebrow="Learning"
    >
      <div className="relative grid gap-6 border-l border-border pl-6 md:grid-cols-2 md:pl-10">
        {educationData.map((e) => (
          <div key={e.degree} className="surface-card relative overflow-hidden p-6">
            <span className="absolute top-8 -left-[1.85rem] size-3 rounded-full bg-primary md:hidden" />
            <span className="ghost-outline pointer-events-none absolute -top-2 right-3 text-[4.5rem] sm:text-[6rem]">
              {e.year}
            </span>
            <div className="relative">
              <h3 className="text-lg font-semibold">{e.degree}</h3>
              <p className="mt-1 text-sm text-primary">{e.school}</p>
              <p className="mt-1 text-xs text-muted-foreground">{e.period}</p>
              <p className="mt-4 text-sm text-muted-foreground">{e.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
