import { Check, Copy, Download, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { PROFILE } from '../data/resumeData';
import {
  validateContactForm,
  type ContactFormValues,
} from '../utils/portfolioFilters';

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submittedRecord, setSubmittedRecord] = useState<ContactFormValues | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = validateContactForm(values);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmittedRecord({ ...values });
    setValues(INITIAL_VALUES);
  };

  return (
    <>
      <section id="contact" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Direct Details */}
            <div className="space-y-8 lg:col-span-5">
              <div className="space-y-3">
                <p className="font-[family-name:var(--font-mono)] text-xs font-medium text-[#2563EB]">
                  04. Direct Contact
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0B0F19]">
                  Let&apos;s Build Reliable Mobile Software
                </h2>
                <p className="text-sm leading-relaxed text-slate-600">
                  Available for React Native engineering roles, cross-platform mobile architecture, and real-time healthcare or commerce product delivery.
                </p>
              </div>

              <div className="space-y-4 border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="truncate text-sm font-medium text-[#0B0F19] hover:text-[#2563EB]"
                    >
                      {PROFILE.email}
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-[#F7F8FA] px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                  <a
                    href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                    className="font-[family-name:var(--font-mono)] text-sm font-medium text-[#0B0F19] tabular-nums hover:text-[#2563EB]"
                  >
                    {PROFILE.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                  <span className="text-sm text-slate-600">{PROFILE.location}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={PROFILE.resumeUrl}
                  download="Jeeva_V_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-[#F7F8FA] px-4 py-2.5 text-xs font-medium text-[#0B0F19] transition-colors hover:border-[#2563EB] hover:bg-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Download Full Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Validated Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-[#F7F8FA] p-6 sm:p-8">
                {submittedRecord ? (
                  <div
                    role="status"
                    className="space-y-4 py-6"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
                      <Check className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0B0F19]">
                      Inquiry Prepared for {PROFILE.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Thank you, <span className="font-medium text-[#0B0F19]">{submittedRecord.name}</span>. Your message regarding &ldquo;{submittedRecord.subject}&rdquo; has been validated and logged. You can also send directly via your mail client below.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                          submittedRecord.subject,
                        )}&body=${encodeURIComponent(
                          `From: ${submittedRecord.name} (${submittedRecord.email})\n\n${submittedRecord.message}`,
                        )}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2.5 text-xs font-medium text-white hover:bg-[#1D4ED8]"
                      >
                        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Open in Email App</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmittedRecord(null)}
                        className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-medium text-slate-700"
                        >
                          Full Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={(e) => setValues({ ...values, name: e.target.value })}
                          placeholder="Your name"
                          aria-invalid={Boolean(errors.name)}
                          className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0B0F19] placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none"
                        />
                        {errors.name && (
                          <p role="alert" className="mt-1.5 text-xs font-medium text-rose-600">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-medium text-slate-700"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={(e) => setValues({ ...values, email: e.target.value })}
                          placeholder="you@company.com"
                          aria-invalid={Boolean(errors.email)}
                          className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0B0F19] placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none"
                        />
                        {errors.email && (
                          <p role="alert" className="mt-1.5 text-xs font-medium text-rose-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={values.subject}
                        onChange={(e) => setValues({ ...values, subject: e.target.value })}
                        placeholder="React Native Role / Mobile App Project"
                        aria-invalid={Boolean(errors.subject)}
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0B0F19] placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none"
                      />
                      {errors.subject && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-rose-600">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={values.message}
                        onChange={(e) => setValues({ ...values, message: e.target.value })}
                        placeholder="Share details about your mobile application requirements or engineering role..."
                        aria-invalid={Boolean(errors.message)}
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0B0F19] placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none"
                      />
                      {errors.message && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-rose-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#1D4ED8] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                      >
                        <Send className="h-4 w-4" aria-hidden="true" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Editorial Footer */}
      <footer className="border-t border-slate-200 bg-[#F7F8FA] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-xs text-slate-500 sm:flex-row sm:items-center lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {PROFILE.name} · React Native &amp; Mobile Application Developer · {PROFILE.location}
          </p>
          <div className="flex items-center gap-6">
            <a href="#experience" className="hover:text-[#0B0F19]">
              Experience
            </a>
            <a href="#projects" className="hover:text-[#0B0F19]">
              Projects
            </a>
            <a href="#skills" className="hover:text-[#0B0F19]">
              Skills
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0B0F19]"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
