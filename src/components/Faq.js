'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "./Section";

const faqs = [
  {
    q: "What does a typical project timeline look like?",
    a: "A focused MVP usually takes 3–6 weeks. Smaller features or fixes land in a few days. I share a milestone plan before starting so you always know what ships next.",
  },
  {
    q: "Which stack do you work in?",
    a: "React, Next.js and TypeScript on the front end; Node.js and Express with MongoDB or PostgreSQL/Supabase on the back end. Electron.js for desktop and POS apps.",
  },
  {
    q: "How do you charge — hourly or fixed?",
    a: "Both. Well-defined scopes work best as fixed-price milestones. Ongoing or exploratory work runs hourly or on a monthly retainer.",
  },
  {
    q: "How do we communicate during the project?",
    a: "Async updates on your channel of choice (Slack, WhatsApp, email) plus a short weekly call. You get a demo link updated at every milestone.",
  },
  {
    q: "Do you take over existing codebases?",
    a: "Yes. I regularly audit, debug and maintain inherited projects, starting with a short review of the code and priorities before any changes.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section
      title="Frequently Asked Questions"
      subtitle="Everything clients usually ask before we start."
      eyebrow="FAQ"
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="surface-card border-b px-5 last:border-b">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold transition-colors hover:text-primary"
            >
              {f.q}
              <ChevronDown
                className={`size-4 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === i && (
              <div className="pb-4 text-sm text-muted-foreground">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
