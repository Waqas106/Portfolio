import { Section } from "./Section";
import { experienceData } from "../data/mock-data";

export default function Experience() {
  const jobs = experienceData.map(exp => ({
    role: exp.title,
    company: exp.company,
    period: exp.duration,
    year: exp.duration.split(' - ')[0].match(/\d+/)[0],
    points: exp.des,
    tags: exp.tech,
  }));

  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="A track record of shipping production software."
      eyebrow="Career"
    >
      <div className="relative space-y-6 border-l border-border pl-6 md:pl-10">
        {jobs.map((j) => (
          <div key={j.role + j.period} className="surface-card relative overflow-hidden p-6">
            <span className="absolute top-8 -left-[1.85rem] size-3 rounded-full bg-primary md:-left-[3.1rem]" />
            <span className="ghost-outline pointer-events-none absolute -top-0 right-3 text-[4.5rem] sm:text-[6rem] md:text-[7rem]">
              {j.year}
            </span>
            <div className="relative flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{j.role}</h3>
              <span className="text-xs text-muted-foreground">{j.period}</span>
            </div>
            <p className="mt-1 text-sm text-primary">{j.company}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {j.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {j.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}