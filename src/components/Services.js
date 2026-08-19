import { Boxes, Bug, Layers, MonitorSmartphone } from "lucide-react";
import { Section } from "./Section";

const services = [
  {
    icon: Layers,
    title: "Full-Stack Web Apps",
    text: "End-to-end products from database schema to polished, responsive UI.",
  },
  {
    icon: Boxes,
    title: "MERN Development",
    text: "MongoDB, Express, React and Node APIs built for scale and clarity.",
  },
  {
    icon: MonitorSmartphone,
    title: "Desktop / POS Apps",
    text: "Offline-capable Electron.js desktop and point-of-sale systems.",
  },
  {
    icon: Bug,
    title: "Bug Fixing & Maintenance",
    text: "Debugging, performance tuning and long-term upkeep of existing codebases.",
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      title="My Services"
      subtitle="What I build, ship and maintain for teams and clients."
      eyebrow="What I Do"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="surface-card p-6 transition-transform hover:-translate-y-1">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <s.icon className="size-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
