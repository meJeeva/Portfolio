import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { PROJECTS, type ProjectCategory } from '../data/resumeData';
import { filterProjectsByCategory } from '../utils/portfolioFilters';

const CATEGORIES: ProjectCategory[] = ['All', 'Healthcare', 'ERP & Retail', 'Productivity'];

interface ProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const filteredProjects = filterProjectsByCategory(PROJECTS, selectedCategory);

  return (
    <section id="projects" className="border-b border-slate-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
          <div className="space-y-3">
            <p className="font-[family-name:var(--font-mono)] text-xs font-medium text-[#2563EB]">
              02. Selected Mobile Works
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0B0F19]">
              Production Case Studies
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600">
              End-to-end mobile applications engineered for real-time healthcare teleconsultation, jewellery ERP &amp; payments, and agile team operations.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter projects by industry"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1 self-start md:self-auto"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                    active
                      ? 'bg-white text-[#0B0F19] shadow-sm'
                      : 'text-slate-600 hover:text-[#0B0F19]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div
          data-testid="projects-grid"
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F7F8FA] p-6 transition-colors duration-150 hover:border-slate-300 hover:bg-white sm:p-7"
            >
              <div>
                {/* Clean unboxed editorial metadata */}
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                  <span className="font-[family-name:var(--font-mono)] font-medium text-[#2563EB]">
                    {project.index}. {project.category}
                  </span>
                  <span className="font-[family-name:var(--font-mono)] tabular-nums">
                    {project.period}
                  </span>
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#0B0F19]">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-700">{project.subtitle}</p>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">{project.summary}</p>

                <ul className="mt-5 space-y-2 border-t border-slate-200/80 pt-4">
                  {project.highlights.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 space-y-4 border-t border-slate-200 pt-4">
                <p className="font-[family-name:var(--font-mono)] text-xs text-slate-500">
                  {project.stack.slice(0, 4).join(' · ')}
                </p>

                <button
                  type="button"
                  onClick={() => onSelectProject(project.id)}
                  aria-label={`Inspect ${project.title} architecture`}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#0B0F19] px-4 py-2.5 text-xs font-medium text-white transition-colors duration-150 hover:bg-[#2563EB] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  <span>Inspect Case Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
