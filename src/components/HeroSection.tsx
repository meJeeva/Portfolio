import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { KEY_METRICS, PROFILE, PROJECTS } from '../data/resumeData';
import { PhoneShowcase } from './PhoneShowcase';

interface HeroSectionProps {
  onSelectProjectModal: (projectId: string) => void;
}

export function HeroSection({ onSelectProjectModal }: HeroSectionProps) {
  const [activeShowcaseId, setActiveShowcaseId] = useState(PROJECTS[0].id);

  const activeProject =
    PROJECTS.find((project) => project.id === activeShowcaseId) ?? PROJECTS[0];

  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-8 pb-10 lg:px-8 lg:pt-16 lg:pb-12">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Typographic Hierarchy */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-6">
            <div className="space-y-6">
              <p className="text-xs font-medium tracking-wide text-slate-600">
                <span>React Native Developer</span>
                <span aria-hidden="true" className="mx-2 text-slate-300">
                  ·
                </span>
                <span>Mobile Application Engineer</span>
                <span aria-hidden="true" className="mx-2 text-slate-300">
                  ·
                </span>
                <span>{PROFILE.location}</span>
              </p>

              <h1
                className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#0B0F19] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
                style={{ textWrap: 'balance' }}
              >
                {PROFILE.headline}
              </h1>

              <p className="max-w-[60ch] text-base leading-relaxed text-slate-600 sm:text-[17px]">
                {PROFILE.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#1D4ED8] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-[#0B0F19] underline decoration-slate-300 underline-offset-4 transition-colors duration-150 hover:decoration-[#2563EB] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="h-4 w-4 text-slate-500" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Matching-Height Interactive Architecture Frame */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#0B0F19] p-6 text-white lg:col-span-6 lg:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-medium text-slate-400">Production App Showcase</p>
                <p className="font-[family-name:var(--font-display)] text-base font-semibold text-white">
                  {activeProject.title} — {activeProject.category}
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Featured mobile applications"
                className="flex items-center gap-1 rounded-lg bg-white/10 p-1"
              >
                {PROJECTS.map((project) => {
                  const isActive = project.id === activeProject.id;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveShowcaseId(project.id)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                        isActive
                          ? 'bg-[#2563EB] text-white'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {project.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="my-5">
              <PhoneShowcase project={activeProject} theme="dark" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              <p className="text-xs text-slate-300">
                {activeProject.stack.slice(0, 4).join(' · ')}
              </p>
              <button
                type="button"
                onClick={() => onSelectProjectModal(activeProject.id)}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#60A5FA] transition-colors hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                <span>Inspect architecture</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column KPI Strip Below Hero Split */}
        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-4">
          {KEY_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#0B0F19] tabular-nums sm:text-3xl">
                {metric.value}
              </p>
              <p className="text-xs font-medium text-slate-600 sm:text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
