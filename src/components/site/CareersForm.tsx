import { useState } from "react";
import { careerDisciplines } from "@/data/hfpc";

const MAX_MB = 10;

/** General application form. HFPC's profile lists no vacancies, so no roles are invented. */
export function CareersForm() {
  const [sent, setSent] = useState(false);
  const [fileError, setFileError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    discipline: "",
    experience: "",
    location: "",
    portfolio: "",
    note: "",
  });

  const set = (key: keyof typeof values, value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  function onFile(list: FileList | null) {
    const f = list?.[0] ?? null;
    if (f && f.size > MAX_MB * 1024 * 1024) {
      setFileError(`"${f.name}" exceeds the ${MAX_MB} MB limit.`);
      return;
    }
    setFileError("");
    setFile(f);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.discipline) next.discipline = "Select an area of interest.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="corner-ticks hairline bg-card p-8 md:p-12">
        <p className="eyebrow">Application received</p>
        <h2 className="display-md mt-5 text-foreground">Thank you.</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Your application has been received and will be reviewed against current project
          requirements.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="hairline bg-card p-6 md:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="j-name" className="field-label">
            Full name
          </label>
          <input id="j-name" className="field" value={values.name} onChange={(e) => set("name", e.target.value)} />
          {errors.name ? (
            <p role="alert" className="mt-2 text-xs text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="j-email" className="field-label">
            Email
          </label>
          <input
            id="j-email"
            type="email"
            className="field"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
          />
          {errors.email ? (
            <p role="alert" className="mt-2 text-xs text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="j-phone" className="field-label">
            Phone
          </label>
          <input
            id="j-phone"
            type="tel"
            className="field"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="j-location" className="field-label">
            Current location
          </label>
          <input
            id="j-location"
            className="field"
            value={values.location}
            onChange={(e) => set("location", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="j-discipline" className="field-label">
            Area of interest
          </label>
          <select
            id="j-discipline"
            className="field"
            value={values.discipline}
            onChange={(e) => set("discipline", e.target.value)}
          >
            <option value="">Select…</option>
            {careerDisciplines.map((d) => (
              <option key={d.title} value={d.title}>
                {d.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
          {errors.discipline ? (
            <p role="alert" className="mt-2 text-xs text-destructive">
              {errors.discipline}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="j-experience" className="field-label">
            Years of experience
          </label>
          <input
            id="j-experience"
            className="field"
            value={values.experience}
            onChange={(e) => set("experience", e.target.value)}
            placeholder="e.g. 4"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="j-portfolio" className="field-label">
            Portfolio or profile link
          </label>
          <input
            id="j-portfolio"
            className="field"
            value={values.portfolio}
            onChange={(e) => set("portfolio", e.target.value)}
            placeholder="https://"
          />
        </div>
        <div>
          <label htmlFor="j-cv" className="field-label">
            CV / portfolio file (PDF, DOC, JPG, PNG)
          </label>
          <input
            id="j-cv"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) => onFile(e.target.files)}
            className="field file:mr-4 file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-xs file:uppercase file:tracking-widest"
          />
          {file ? (
            <p className="label-tech mt-2 text-muted-foreground">
              {file.name} — {(file.size / (1024 * 1024)).toFixed(1)} MB
            </p>
          ) : null}
          {fileError ? (
            <p role="alert" className="mt-2 text-xs text-destructive">
              {fileError}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="j-note" className="field-label">
          Why HFPC
        </label>
        <textarea
          id="j-note"
          rows={5}
          className="field"
          value={values.note}
          onChange={(e) => set("note", e.target.value)}
          placeholder="The kind of facilities you have worked on, and what you would like to work on here."
        />
      </div>

      <button type="submit" className="btn-base btn-brass mt-8">
        Submit Application &#8594;
      </button>
    </form>
  );
}
