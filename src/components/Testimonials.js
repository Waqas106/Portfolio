import { Quote } from "lucide-react";
import { Section } from "./Section";

const quotes = [
  {
    text: "Waqas took a half-finished MERN app and shipped it in six weeks. Clear updates, clean code, no drama.",
    name: "Ahmed R.",
    role: "Founder, Logistics Startup",
  },
  {
    text: "He rebuilt our POS desktop app in Electron and it now runs offline in three branches without issues.",
    name: "Sana M.",
    role: "Operations Lead, Retail Chain",
  },
  {
    text: "Great communicator. He explained trade-offs in plain language before writing a single line of code.",
    name: "Daniel K.",
    role: "Product Manager",
  },
];

export default function Testimonials() {
  return (
    <Section title="What Clients Say" subtitle="Feedback from teams I've worked with." eyebrow="Testimonials">
      <div className="grid gap-4 md:grid-cols-3">
        {quotes.map((q) => (
          <figure key={q.name} className="surface-card flex h-full flex-col p-6">
            <Quote className="size-6 text-primary" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {q.text}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                {q.name.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold">{q.name}</span>
                <span className="block text-xs text-muted-foreground">{q.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
