import { Check, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ProjectItem } from '../data/resumeData';

interface PhoneShowcaseProps {
  project: ProjectItem;
  theme?: 'dark' | 'light';
}

export function PhoneShowcase({ project, theme = 'dark' }: PhoneShowcaseProps) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [actionConfirmed, setActionConfirmed] = useState(false);

  useEffect(() => {
    setActiveScreenIndex(0);
    setActionConfirmed(false);
  }, [project.id]);

  const currentScreen = project.screens[activeScreenIndex] ?? project.screens[0];

  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col gap-4">
      {/* Screen switcher tabs */}
      <div className="flex items-center justify-between gap-3">
        <div
          role="tablist"
          aria-label={`${project.title} mobile screens`}
          className={`inline-flex items-center gap-1 rounded-lg p-1 ${
            isDark ? 'bg-white/10' : 'bg-slate-100'
          }`}
        >
          {project.screens.map((screen, idx) => {
            const active = idx === activeScreenIndex;
            return (
              <button
                key={screen.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setActiveScreenIndex(idx);
                  setActionConfirmed(false);
                }}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                  active
                    ? isDark
                      ? 'bg-white text-[#0B0F19]'
                      : 'bg-white text-[#0B0F19] shadow-sm'
                    : isDark
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-600 hover:text-[#0B0F19]'
                }`}
              >
                {screen.label}
              </button>
            );
          })}
        </div>

        {isDark && (
          <span className="hidden sm:inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-xs text-slate-400 whitespace-nowrap shrink-0">
            <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{project.platforms}</span>
          </span>
        )}
      </div>

      {/* Simulated Mobile Device Frame */}
      <div
        className={`rounded-2xl border p-4 sm:p-5 ${
          isDark
            ? 'border-white/15 bg-[#111827] text-white'
            : 'border-slate-200 bg-[#F7F8FA] text-[#0B0F19]'
        }`}
      >
        {/* Top Phone Bar */}
        <div
          className={`flex items-center justify-between border-b pb-3 ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold">
              {currentScreen.headerTitle}
            </p>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {currentScreen.headerSubtitle}
            </p>
          </div>
          <div className="text-right">
            <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {currentScreen.primaryMetricLabel}
            </p>
            <p className="font-[family-name:var(--font-mono)] text-xs font-medium text-[#3B82F6] tabular-nums">
              {currentScreen.primaryMetricValue}
            </p>
          </div>
        </div>

        {/* Simulated List Items */}
        <div className="my-4 flex flex-col divide-y divide-slate-200/15">
          {currentScreen.items.map((item) => (
            <div
              key={item.title}
              className={`flex items-center justify-between gap-4 py-2.5 ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{item.title}</p>
                <p className={`truncate text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {item.meta}
                </p>
              </div>
              <span
                className={`font-[family-name:var(--font-mono)] text-xs tabular-nums shrink-0 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Action Preview */}
        <button
          type="button"
          onClick={() => setActionConfirmed((prev) => !prev)}
          className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
            actionConfirmed
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
          }`}
        >
          {actionConfirmed ? (
            <>
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Flow Verified — {currentScreen.actionLabel}</span>
            </>
          ) : (
            <span>{currentScreen.actionLabel}</span>
          )}
        </button>
      </div>
    </div>
  );
}
