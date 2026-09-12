import { useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  contact,
  facilityTypes,
  projectStages,
  projectTypes,
  serviceOptions,
  timelines,
} from "@/data/hfpc";

const MAX_FILE_MB = 10;
const MAX_TOTAL_MB = 25;
const ACCEPT = ".pdf,.jpg,.jpeg,.png,.dwg,.dxf,.xls,.xlsx,.doc,.docx";

const steps = [
  { id: 1, title: "Tell us about your project" },
  { id: 2, title: "Tell us what you need" },
  { id: 3, title: "Project details" },
  { id: 4, title: "Your details" },
  { id: 5, title: "Attachments" },
];

type Form = {
  projectType: string;
  projectName: string;
  location: string;
  facilityType: string;
  stage: string;
  timeline: string;
  services: string[];
  description: string;
  areaCapacity: string;
  additional: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
};

const empty: Form = {
  projectType: "",
  projectName: "",
  location: "",
  facilityType: "",
  stage: "",
  timeline: "",
  services: [],
  description: "",
  areaCapacity: "",
  additional: "",
  name: "",
  companyName: "",
  email: "",
  phone: "",
  city: "",
  country: "",
};

export function ProjectInquiryWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<Form>(empty);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const set = <K extends keyof Form>(key: K, value: Form[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleService = (value: string) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(value)
        ? f.services.filter((s) => s !== value)
        : [...f.services, value],
    }));

  const progress = useMemo(() => Math.round(((step - 1) / steps.length) * 100), [step]);

  function validate(current: number) {
    const next: Record<string, string> = {};
    if (current === 1) {
      if (!form.projectType) next.projectType = "Select a project type.";
      if (!form.projectName.trim()) next.projectName = "Enter a project name or reference.";
      if (!form.location.trim()) next.location = "Enter the project location.";
      if (!form.facilityType) next.facilityType = "Select a facility type.";
    }
    if (current === 2 && form.services.length === 0) {
      next.services = "Select at least one service.";
    }
    if (current === 3 && form.description.trim().length < 20) {
      next.description = "Please describe the project in a little more detail.";
    }
    if (current === 4) {
      if (!form.name.trim()) next.name = "Enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
      if (!form.phone.trim()) next.phone = "Enter a contact number.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (!validate(step)) return;
    setStep((s) => Math.min(steps.length, s + 1));
    headingRef.current?.focus();
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
    headingRef.current?.focus();
  }

  function onFiles(list: FileList | null) {
    if (!list) return;
    const incoming = Array.from(list);
    const tooBig = incoming.find((f) => f.size > MAX_FILE_MB * 1024 * 1024);
    if (tooBig) {
      setFileError(`"${tooBig.name}" exceeds the ${MAX_FILE_MB} MB per-file limit.`);
      return;
    }
    const all = [...files, ...incoming];
    const total = all.reduce((sum, f) => sum + f.size, 0);
    if (total > MAX_TOTAL_MB * 1024 * 1024) {
      setFileError(`Total attachments exceed ${MAX_TOTAL_MB} MB.`);
      return;
    }
    setFileError("");
    setFiles(all);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate(4)) {
      setStep(4);
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="corner-ticks hairline bg-card p-8 md:p-14">
        <p className="eyebrow">Enquiry received</p>
        <h2 className="display-lg mt-6 text-foreground">Thank you.</h2>
        <p className="lead mt-5 max-w-xl">
          Your project enquiry has been received. A member of HFPC will review the details you have
          shared about {form.projectName || "your project"}.
        </p>
        <dl className="mt-10 grid gap-x-10 gap-y-5 border-t border-border pt-6 sm:grid-cols-2">
          <div>
            <dt className="label-tech text-muted-foreground">Project</dt>
            <dd className="mt-1.5 text-sm">{form.projectName || "—"}</dd>
          </div>
          <div>
            <dt className="label-tech text-muted-foreground">Facility type</dt>
            <dd className="mt-1.5 text-sm">{form.facilityType || "—"}</dd>
          </div>
          <div>
            <dt className="label-tech text-muted-foreground">Services requested</dt>
            <dd className="mt-1.5 text-sm">{form.services.join(", ") || "—"}</dd>
          </div>
          <div>
            <dt className="label-tech text-muted-foreground">Attachments</dt>
            <dd className="mt-1.5 text-sm">{files.length ? `${files.length} file(s)` : "None"}</dd>
          </div>
        </dl>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/" className="btn-base btn-ink">
            Back to home
          </Link>
          <a href={contact.emailHref} className="btn-base btn-outline">
            Email HFPC directly
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="corner-ticks hairline bg-card p-6 md:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="label-tech text-brass">
          Step {step} of {steps.length}
        </p>
        <p className="label-tech text-muted-foreground">{progress}% complete</p>
      </div>
      <div aria-hidden className="mt-4 h-px w-full bg-border">
        <div
          className="h-px bg-brass transition-all duration-500"
          style={{ width: `${Math.max(progress, 4)}%` }}
        />
      </div>

      <ol className="mt-5 hidden flex-wrap gap-x-6 gap-y-2 md:flex">
        {steps.map((s) => (
          <li
            key={s.id}
            className={`label-tech ${
              s.id === step ? "text-foreground" : s.id < step ? "text-brass" : "text-muted-foreground"
            }`}
          >
            {String(s.id).padStart(2, "0")} {s.title}
          </li>
        ))}
      </ol>

      <h2
        ref={headingRef}
        tabIndex={-1}
        className="display-md mt-8 text-foreground focus:outline-none"
      >
        {steps[step - 1].title}
      </h2>

      <div className="mt-8 space-y-6">
        {step === 1 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Project type" error={errors.projectType} htmlFor="projectType">
              <select
                id="projectType"
                className="field"
                value={form.projectType}
                onChange={(e) => set("projectType", e.target.value)}
              >
                <option value="">Select…</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Project name / reference" error={errors.projectName} htmlFor="projectName">
              <input
                id="projectName"
                className="field"
                value={form.projectName}
                onChange={(e) => set("projectName", e.target.value)}
                placeholder="e.g. New banquet kitchen"
              />
            </Field>
            <Field label="Location" error={errors.location} htmlFor="location">
              <input
                id="location"
                className="field"
                value={form.location}
                onChange={(e) => set("location", e.target.value)}
                placeholder="City, country"
              />
            </Field>
            <Field label="Property / facility type" error={errors.facilityType} htmlFor="facilityType">
              <select
                id="facilityType"
                className="field"
                value={form.facilityType}
                onChange={(e) => set("facilityType", e.target.value)}
              >
                <option value="">Select…</option>
                {facilityTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Project stage" htmlFor="stage">
              <select
                id="stage"
                className="field"
                value={form.stage}
                onChange={(e) => set("stage", e.target.value)}
              >
                <option value="">Select…</option>
                {projectStages.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Expected timeline" htmlFor="timeline">
              <select
                id="timeline"
                className="field"
                value={form.timeline}
                onChange={(e) => set("timeline", e.target.value)}
              >
                <option value="">Select…</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        ) : null}

        {step === 2 ? (
          <fieldset>
            <legend className="field-label">Services required (select all that apply)</legend>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {serviceOptions.map((option) => {
                const checked = form.services.includes(option);
                return (
                  <label
                    key={option}
                    className={`flex cursor-pointer items-center gap-3 bg-card p-4 text-sm transition-colors ${
                      checked ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => toggleService(option)}
                    />
                    <span
                      aria-hidden
                      className={`grid h-4 w-4 shrink-0 place-items-center border text-[0.6rem] ${
                        checked ? "border-brass bg-brass text-brass-foreground" : "border-input"
                      }`}
                    >
                      {checked ? "\u2713" : ""}
                    </span>
                    {option}
                  </label>
                );
              })}
            </div>
            {errors.services ? <ErrorText>{errors.services}</ErrorText> : null}
          </fieldset>
        ) : null}

        {step === 3 ? (
          <div className="space-y-6">
            <Field label="Project description" error={errors.description} htmlFor="description">
              <textarea
                id="description"
                rows={6}
                className="field"
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                placeholder="The operation, menu or service style, and what you need planned."
              />
            </Field>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Approximate area / capacity" htmlFor="areaCapacity">
                <input
                  id="areaCapacity"
                  className="field"
                  value={form.areaCapacity}
                  onChange={(e) => set("areaCapacity", e.target.value)}
                  placeholder="e.g. 400 sq m / 600 covers"
                />
              </Field>
              <Field label="Additional requirements" htmlFor="additional">
                <input
                  id="additional"
                  className="field"
                  value={form.additional}
                  onChange={(e) => set("additional", e.target.value)}
                  placeholder="Anything else we should know"
                />
              </Field>
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" error={errors.name} htmlFor="name">
              <input id="name" className="field" value={form.name} onChange={(e) => set("name", e.target.value)} />
            </Field>
            <Field label="Company" htmlFor="companyName">
              <input
                id="companyName"
                className="field"
                value={form.companyName}
                onChange={(e) => set("companyName", e.target.value)}
              />
            </Field>
            <Field label="Email" error={errors.email} htmlFor="email">
              <input
                id="email"
                type="email"
                className="field"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </Field>
            <Field label="Phone" error={errors.phone} htmlFor="phone">
              <input
                id="phone"
                type="tel"
                className="field"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
            </Field>
            <Field label="City" htmlFor="city">
              <input id="city" className="field" value={form.city} onChange={(e) => set("city", e.target.value)} />
            </Field>
            <Field label="Country" htmlFor="country">
              <input
                id="country"
                className="field"
                value={form.country}
                onChange={(e) => set("country", e.target.value)}
              />
            </Field>
          </div>
        ) : null}

        {step === 5 ? (
          <div className="space-y-5">
            <Field label="Attachments (optional)" htmlFor="files">
              <input
                id="files"
                type="file"
                multiple
                accept={ACCEPT}
                onChange={(e) => onFiles(e.target.files)}
                className="field file:mr-4 file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-xs file:uppercase file:tracking-widest"
              />
            </Field>
            <p className="text-sm text-muted-foreground">
              Drawings, plans, BOQs, reference documents or photographs. PDF, JPG, PNG, DWG, DXF,
              XLS and DOC accepted — up to {MAX_FILE_MB} MB per file and {MAX_TOTAL_MB} MB in total.
            </p>
            {fileError ? <ErrorText>{fileError}</ErrorText> : null}
            {files.length ? (
              <ul className="divide-y divide-border border border-border">
                {files.map((f) => (
                  <li key={f.name} className="flex items-center justify-between gap-4 p-3 text-sm">
                    <span className="min-w-0 truncate">{f.name}</span>
                    <span className="flex shrink-0 items-center gap-4">
                      <span className="label-tech text-muted-foreground">
                        {(f.size / (1024 * 1024)).toFixed(1)} MB
                      </span>
                      <button
                        type="button"
                        className="label-tech text-brass"
                        onClick={() => setFiles((cur) => cur.filter((c) => c !== f))}
                      >
                        Remove
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
        <button type="button" onClick={goBack} disabled={step === 1} className="btn-base btn-outline">
          &#8592; Back
        </button>
        {step < steps.length ? (
          <button type="button" onClick={goNext} className="btn-base btn-brass">
            Continue &#8594;
          </button>
        ) : (
          <button type="submit" className="btn-base btn-brass">
            Submit Project Inquiry
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="field-label">
        {label}
      </label>
      {children}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <p role="alert" className="mt-2 text-xs text-destructive">
      {children}
    </p>
  );
}
