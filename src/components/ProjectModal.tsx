import { X } from 'lucide-react';
import { useEffect } from 'react';
import type { ProjectItem } from '../data/resumeData';
import { PhoneShowcase } from './PhoneShowcase';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F19]/70 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[86vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <p className="text-xs font-medium text-slate-500">
              <span>{project.index}. {project.category}</span>
              <span aria-hidden="true" className="mx-2 text-slate-300">
                ·
              </span>
              <span className="font-[family-name:var(--font-mono)] tabular-nums">
                {project.period}
              </span>
              <span aria-hidden="true" className="mx-2 text-slate-300">
                ·
              </span>
              <span>{project.platforms}</span>
            </p>
            <h2
              id="project-modal-title"
              className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-[#0B0F19] sm:text-3xl"
            >
              {project.title} — {project.subtitle}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project case study"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0B0F19] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <PhoneShowcase project={project} theme="light" />
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[#0B0F19]">
                Overview
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.summary}</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[#0B0F19]">
                Architectural Implementation
              </h3>
              <ul className="mt-2.5 space-y-2.5">
                {project.architectureNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]"
                    />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[#0B0F19]">
                Deliverables
              </h3>
              <ul className="mt-2.5 space-y-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <p className="text-xs font-medium text-slate-500">Technology Stack</p>
              <p className="mt-1 font-[family-name:var(--font-mono)] text-xs font-medium text-[#0B0F19]">
                {project.stack.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
