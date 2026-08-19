import { Section } from "./Section";

const cases = [
  {
    name: "FIXnGO",
    kicker: "Car Services Booking Platform",
    problem:
      "Vehicle owners had no reliable way to compare workshops, see live availability or track a repair once it started.",
    role: "Sole full-stack developer: architecture, API design, front-end, deployment.",
    decisions:
      "MERN with Redux Toolkit for booking state, React Query for server cache, and a slot-based availability model in MongoDB to avoid double bookings.",
    outcome:
      "Booking flow cut from 5 steps to 2, and workshop owners manage the full day's schedule from one dashboard.",
  },
  {
    name: "LandVenture",
    kicker: "Premium Land Marketplace",
    problem:
      "Land listings were scattered across social posts with no verification, so buyers wasted time on stale or duplicate plots.",
    role: "Full-stack developer working directly with the founder on scope and delivery.",
    decisions:
      "TypeScript end-to-end, role-based JWT auth for buyer/seller/agent, geo-indexed queries for map search, and image pipelines for fast listing pages.",
    outcome:
      "Verified listings with structured data, and enquiry-to-response time reduced dramatically for sellers.",
  },
];

export default function CaseStudies() {
  return (
    <Section
      title="Case Studies"
      subtitle="Two projects in depth: the problem, my role, the trade-offs and the result."
      eyebrow="In Depth"
    >
      <div className="space-y-10">
        {cases.map((c, i) => (
          <div
            key={c.name}
            className={`grid items-center gap-6 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>figure]:order-2" : ""}`}
          >
            <figure className="surface-card overflow-hidden p-2">
              <div className="w-full h-64 md:h-80 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="font-display text-4xl font-bold text-primary/40">{c.name}</span>
              </div>
            </figure>
            <div className="surface-card p-6 md:p-8">
              <p className="text-xs tracking-widest text-primary uppercase">{c.kicker}</p>
              <h3 className="mt-2 text-2xl font-bold">{c.name}</h3>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  ["Problem", c.problem],
                  ["My role", c.role],
                  ["Tech decisions", c.decisions],
                  ["Outcome", c.outcome],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-display text-xs tracking-widest text-foreground uppercase">
                      {k}
                    </dt>
                    <dd className="mt-1 text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
