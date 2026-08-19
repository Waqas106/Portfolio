import { Section } from "./Section";

const stack = [
  { name: "React.js", level: "Expert", mark: "⚛" },
  { name: "Next.js", level: "Proficient", mark: "▲" },
  { name: "TypeScript", level: "Advanced", mark: "TS" },
  { name: "JavaScript (ES6+)", level: "Expert", mark: "JS" },
  { name: "Node.js", level: "Advanced", mark: "⬢" },
  { name: "Express.js", level: "Advanced", mark: "ex" },
  { name: "MongoDB", level: "Advanced", mark: "🍃" },
  { name: "PostgreSQL / Supabase", level: "Proficient", mark: "▮" },
  { name: "Tailwind CSS", level: "Expert", mark: "≈" },
  { name: "Redux Toolkit", level: "Advanced", mark: "↻" },
  { name: "React Query", level: "Advanced", mark: "◑" },
  { name: "Electron.js", level: "Proficient", mark: "◎" },
  { name: "REST APIs", level: "Expert", mark: "{ }" },
  { name: "Git & GitHub", level: "Advanced", mark: "⑂" },
  { name: "Docker", level: "Beginner", mark: "🐳" },
  { name: "Vercel / Railway", level: "Proficient", mark: "△" },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Mastering the Stack"
      subtitle="Technologies and tools I use to create exceptional digital experiences."
      ghost="Stack"
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((t) => (
          <div
            key={t.name}
            className="surface-card group items-center flex flex-col gap-3 p-5 transition-transform hover:-translate-y-1 hover:glow-navy"
          >
            <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-secondary font-display text-sm font-bold text-primary">
              {t.mark}
            </span>
            <p className="font-display text-base font-semibold">{t.name}</p>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">{t.level}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}