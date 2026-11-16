import { Search, X } from 'lucide-react';
import { useState } from 'react';
import { SKILL_GROUPS } from '../data/resumeData';
import { filterSkillsByQuery } from '../utils/portfolioFilters';

export function SkillsSection() {
  const [activeGroupId, setActiveGroupId] = useState(SKILL_GROUPS[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const activeGroup = SKILL_GROUPS.find((g) => g.id === activeGroupId) ?? SKILL_GROUPS[0];
  const visibleSkills = filterSkillsByQuery(SKILL_GROUPS, activeGroupId, searchQuery);
  const isSearching = searchQuery.trim().length > 0;

  return (
    <section id="skills" className="border-b border-slate-200 bg-[#F7F8FA] py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-end">
          <div className="space-y-3">
            <p className="font-[family-name:var(--font-mono)] text-xs font-medium text-[#2563EB]">
              03. Core Technical Matrix
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0B0F19]">
              Engineering Stack &amp; Tooling
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600">
              {isSearching
                ? `Showing matches across all technical domains for "${searchQuery.trim()}".`
                : activeGroup.description}
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full max-w-xs">
            <label htmlFor="skill-search" className="sr-only">
              Search technical skills
            </label>
            <div className="relative flex items-center">
              <Search
                className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400"
                aria-hidden="true"
              />
              <input
                id="skill-search"
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Filter stack (e.g. Agora, Razorpay)"
                className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pr-9 pl-9 text-sm text-[#0B0F19] placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none"
              />
              {isSearching && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear skill search"
                  className="absolute right-2 inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-[#0B0F19]"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Domain Tabs */}
        <div
          role="tablist"
          aria-label="Technical skill domains"
          className="mt-8 flex flex-wrap items-center gap-1 rounded-lg bg-slate-200/70 p-1 w-fit"
        >
          {SKILL_GROUPS.map((group) => {
            const active = !isSearching && group.id === activeGroupId;
            return (
              <button
                key={group.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setSearchQuery('');
                  setActiveGroupId(group.id);
                }}
                className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                  active
                    ? 'bg-white text-[#0B0F19] shadow-sm'
                    : 'text-slate-600 hover:text-[#0B0F19]'
                }`}
              >
                {group.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid or Empty Search State */}
        {visibleSkills.length > 0 ? (
          <div
            data-testid="skills-grid"
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleSkills.map((skill) => (
              <div
                key={`${skill.groupLabel}-${skill.name}`}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div>
                  <p className="text-xs font-medium text-slate-500">{skill.groupLabel}</p>
                  <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-lg font-semibold text-[#0B0F19]">
                    {skill.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{skill.context}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <p className="font-[family-name:var(--font-display)] text-base font-semibold text-[#0B0F19]">
              No matching skill found for &ldquo;{searchQuery.trim()}&rdquo;
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Try searching for React Native, Agora, Twilio, Razorpay, Redux, or Jest.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-4 inline-flex items-center rounded-lg bg-[#0B0F19] px-4 py-2 text-xs font-medium text-white hover:bg-[#2563EB]"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
