import { EDUCATION, EXPERIENCES } from '../data/resumeData';

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-slate-200 bg-[#F7F8FA] py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Section Heading & Academic Background */}
          <div className="space-y-10 lg:col-span-4">
            <div className="space-y-3">
              <p className="font-[family-name:var(--font-mono)] text-xs font-medium text-[#2563EB]">
                01. Career &amp; Credentials
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0B0F19]">
                Professional Experience
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Three years shipping production React Native applications across healthcare teleconsultation, jewellery ERP, and agile collaboration suites.
              </p>
            </div>

            {/* Education Block */}
            <div className="border-t border-slate-200 pt-8">
              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[#0B0F19]">
                Academic Background
              </h3>
              <div className="mt-5 space-y-5">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-[#0B0F19]">{edu.degree}</p>
                      <span className="font-[family-name:var(--font-mono)] text-xs text-slate-500 tabular-nums shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-600">{edu.institution}</p>
                    <p className="text-xs text-slate-500">{edu.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience Records */}
          <div className="space-y-6 lg:col-span-8">
            {EXPERIENCES.map((exp) => (
              <article
                key={exp.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
              >
                <div className="flex flex-col justify-between gap-2 border-b border-slate-100 pb-5 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0B0F19]">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      <span>{exp.company}</span>
                      <span aria-hidden="true" className="mx-2 text-slate-300">
                        ·
                      </span>
                      <span className="text-slate-500">{exp.location}</span>
                    </p>
                  </div>

                  <p className="font-[family-name:var(--font-mono)] text-xs font-medium text-slate-600 tabular-nums shrink-0">
                    {exp.period}
                  </p>
                </div>

                <ul className="mt-5 space-y-3">
                  {exp.highlights.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-slate-100 pt-4 font-[family-name:var(--font-mono)] text-xs text-slate-500">
                  {exp.stack.join(' · ')}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
