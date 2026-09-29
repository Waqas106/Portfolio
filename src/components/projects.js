'use client';

import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { Section } from "./Section";
import { projectsData } from "../data/mock-data";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function ProjectImage({ project }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl bg-secondary">
      {project.image && !imageFailed ? (
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          width={1200}
          height={800}
          unoptimized
          className="block h-auto w-full"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="flex aspect-video items-center justify-center px-6 text-center text-sm text-muted-foreground">
          Project image coming soon
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  useEffect(() => {
    if (selectedProject && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selectedProject]);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Selected work that shows how I think, build and ship."
      ghost="Build"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, i) => (
          <article
            key={project.title}
            className="surface-card relative flex h-full flex-col p-6 transition-transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-ring"
          >
            <span className="font-display text-3xl font-bold text-primary/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">
              {project.des[0]}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View details <ArrowRight className="size-4" aria-hidden="true" />
            </span>
            <button
              type="button"
              aria-label={`View details for ${project.title}`}
              onClick={() => setSelectedProject(project)}
              className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-none"
            />
          </article>
        ))}
      </div>
      {projectsData.length > 3 && (
        <div className="mx-auto pt-8">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring glow-navy"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onClose={() => setSelectedProject(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card p-0 text-card-foreground shadow-2xl backdrop:bg-slate-950/75"
      >
        {selectedProject && (
          <div className="p-5 sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <h2 id="project-dialog-title" className="text-2xl font-bold sm:text-3xl">
                {selectedProject.title}
              </h2>
              <button
                type="button"
                aria-label="Close project details"
                onClick={() => dialogRef.current?.close()}
                className="shrink-0 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <ProjectImage key={selectedProject.title} project={selectedProject} />

            <div className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
              {selectedProject.des.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>

            {(selectedProject.liveLink || selectedProject.stageLink || selectedProject.github) && (
              <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-6">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" /> Live version
                  </a>
                )}
                {selectedProject.stageLink && (
                  <a
                    href={selectedProject.stageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" /> Staging version
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <Github className="size-4" aria-hidden="true" /> Source code
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </dialog>
    </Section>
  );
}
