'use client';

import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";
import { projectsData } from "../data/mock-data";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Selected work that shows how I think, build and ship."
      ghost="Build"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, i) => (
          <article key={project.title} className="surface-card flex h-full flex-col p-6">
            <span className="font-display text-3xl font-bold text-primary/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">
              {project.des[0]}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            {/* <a
              href="#contact"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              <ExternalLink className="size-4" /> Details
            </a> */}
          </article>
        ))}
      </div>
      {projectsData.length > 3 && (
        <div className="mx-auto pt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow-navy"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </Section>
  );
}