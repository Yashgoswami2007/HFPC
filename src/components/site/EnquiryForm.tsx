import { useState } from "react";
import { facilityTypes, serviceOptions } from "@/data/hfpc";

/** Short enquiry form used on the Contact page. */
export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    facility: "",
    service: "",
    message: "",
  });

  const set = (key: keyof typeof values, value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next["name"] = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next["email"] = "Enter a valid email address.";
    if (values.message.trim().length < 10) next["message"] = "Please add a short message.";
    setErrors(next);
    
    if (Object.keys(next).length === 0) {
      const message = `New Enquiry from Website:
Name: ${values.name}
Company: ${values.company || "N/A"}
Email: ${values.email}
Phone: ${values.phone || "N/A"}
Facility Type: ${values.facility || "N/A"}
Service of Interest: ${values.service || "N/A"}

Message:
${values.message}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/918791588728?text=${encodedMessage}`;
      
      window.open(whatsappUrl, "_blank");
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="corner-ticks hairline bg-card p-8">
        <p className="eyebrow">Enquiry received</p>
        <h2 className="display-md mt-5 text-foreground">Thank you.</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Your enquiry has been received. HFPC will review the details you have shared.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="hairline bg-card p-6 md:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="field-label">
            Name
          </label>
          <input id="c-name" className="field" value={values.name} onChange={(e) => set("name", e.target.value)} />
          {errors["name"] ? (
            <p role="alert" className="mt-2 text-xs text-destructive">
              {errors["name"]}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="c-company" className="field-label">
            Company
          </label>
          <input
            id="c-company"
            className="field"
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="c-email" className="field-label">
            Email
          </label>
          <input
            id="c-email"
            type="email"
            className="field"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
          />
          {errors["email"] ? (
            <p role="alert" className="mt-2 text-xs text-destructive">
              {errors["email"]}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="c-phone" className="field-label">
            Phone
          </label>
          <input
            id="c-phone"
            type="tel"
            className="field"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="c-facility" className="field-label">
            Facility type
          </label>
          <select
            id="c-facility"
            className="field"
            value={values.facility}
            onChange={(e) => set("facility", e.target.value)}
          >
            <option value="">Select…</option>
            {facilityTypes.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="c-service" className="field-label">
            Service of interest
          </label>
          <select
            id="c-service"
            className="field"
            value={values.service}
            onChange={(e) => set("service", e.target.value)}
          >
            <option value="">Select…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="c-message" className="field-label">
          Message
        </label>
        <textarea
          id="c-message"
          rows={5}
          className="field"
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us about the facility and what you need planned."
        />
        {errors["message"] ? (
          <p role="alert" className="mt-2 text-xs text-destructive">
            {errors["message"]}
          </p>
        ) : null}
      </div>
      <button type="submit" className="btn-base btn-brass mt-8">
        Send Enquiry &#8594;
      </button>
    </form>
  );
}
