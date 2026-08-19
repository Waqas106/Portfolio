'use client';

import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";
import { contactData } from "../data/mock-data";

export default function Contact() {
  const details = [
    { icon: Mail, label: "Email", value: contactData.email },
    { icon: Phone, label: "Phone", value: contactData.phone },
    { icon: MapPin, label: "Location", value: contactData.location },
  ];

  const contactLinks=[
   { icon:Github, link: contactData.github},
   {icon:Linkedin, link: contactData.linkedin}
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been noted.");
    e.target.reset();
  };

  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Have a role, a project or an idea? Let's talk."
      eyebrow="Contact"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="surface-card p-6">
            <h3 className="text-lg font-semibold">Let&apos;s Connect</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Whether you&apos;re hiring, need a collaborator or want help finishing a build, I reply
              within a day.
            </p>
          </div>
          {details.map((d) => (
            <div key={d.label} className="surface-card flex items-center gap-4 p-5">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <d.icon className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{d.label}</span>
                <span className="block text-sm text-muted-foreground">{d.value}</span>
              </span>
            </div>
          ))}
          <div className="flex gap-3">
            {contactLinks.map(( ctn,i) => (
              <Link
                key={i}
                href={ctn.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground"
              >
                <ctn.icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        <form
          className="surface-card space-y-4 p-6"
          onSubmit={handleSubmit}
        >
          {[
            { id: "name", label: "Your Name", type: "text", placeholder: "Jane Doe" },
            { id: "email", label: "Email", type: "email", placeholder: "jane@company.com" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="text-sm font-medium">
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                required
                placeholder={f.placeholder}
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project..."
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow-navy"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}