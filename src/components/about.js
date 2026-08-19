import { Section } from "./Section";
import { aboutData } from "../data/mock-data";

export default function About() {
  const details = [
    { k: "Based in", v: "Pakistan · Available worldwide (remote)" },
    { k: "Focus", v: "MERN, Next.js, TypeScript, Electron desktop apps" },
    { k: "Ways to work", v: "Full-time roles · Freelance projects · Retainers" },
  ];

  return (
    <Section
      id="about"
      title="Behind the Build"
      subtitle="How I work, what I care about, and the way I approach every project."
      eyebrow="About Me"
    >
      <div className="grid gap-6 md:grid-cols-5">
        <div className="surface-card space-y-4 p-6 text-sm leading-relaxed text-muted-foreground md:col-span-3">
          {aboutData.description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <div className="grid gap-4 md:col-span-2">
          {details.map((item) => (
            <div key={item.k} className="surface-card p-5">
              <p className="text-xs tracking-widest text-primary uppercase">{item.k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}