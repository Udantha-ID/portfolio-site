"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiWhatsapp, SiFacebook } from "react-icons/si";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

/* ─── Data ─── */
type FormData = { name: string; email: string; message: string };

const SOCIALS = [
  {
    label: "LinkedIn",
    href:  "https://www.linkedin.com/in/induru-udantha/",
    icon:  <SiLinkedin />,
    color: "#0A66C2",
    glow:  "rgba(10,102,194,0.40)",
  },
  {
    label: "GitHub",
    href:  "https://github.com/Udantha-ID",
    icon:  <SiGithub />,
    color: "#8892A4",
    glow:  "rgba(136,146,164,0.35)",
  },
  {
    label: "Facebook",
    href:  "https://web.facebook.com/iduru.udantha",
    icon:  <SiFacebook />,
    color: "#1877F2",
    glow:  "rgba(24,119,242,0.40)",
  },
  {
    label: "WhatsApp",
    href:  "https://wa.me/94763904365",
    icon:  <SiWhatsapp />,
    color: "#25D366",
    glow:  "rgba(37,211,102,0.40)",
  },
];

/* ─── Floating-label field ─── */
function FloatField({
  label, id, name, type = "text", value, onChange, required, rows,
}: {
  label: string; id: string; name: string; type?: string;
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  required?: boolean; rows?: number;
}) {
  const isArea = rows !== undefined;
  const Tag = isArea ? "textarea" : "input";
  return (
    <div className="float-group">
      <Tag
        id={id}
        name={name}
        type={isArea ? undefined : type}
        rows={isArea ? rows : undefined}
        value={value}
        onChange={onChange}
        required={required}
        className="float-input"
        placeholder={label}
        autoComplete="off"
      />
      <label htmlFor={id} className="float-label">
        {label}
      </label>
    </div>
  );
}

/* ─── Section ─── */
export const RevealBento = () => {
  const [form, setSending]   = useState<FormData>({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSending((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_z0btt2d",
        "template_22k635l",
        {
          name:     form.name,
          email:    form.email,
          message:  form.message,
          to_name:  "Induru Udantha",
          to_email: "induruudantha45615@gmail.com",
        },
        "j5XhaYmWWVErqfqKN"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Email sent successfully!",
            text: "I will reply as soon as possible ✌️",
            customClass: {
              popup: "bg-gray-900 text-white",
              title: "text-purple-500",
              confirmButton: "bg-purple-500 text-white hover:bg-purple-700",
            },
          });
          setSending({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (err) => {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Failed to send your message. Please try again later.",
            confirmButtonText: "Retry",
            customClass: {
              popup: "bg-gray-900 text-white",
              title: "text-purple-500",
              confirmButton: "bg-purple-500 text-white hover:bg-purple-700",
            },
          });
          console.error("EmailJS error:", err);
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* Decorative grid lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--divider) 1px, transparent 1px),
            linear-gradient(90deg, var(--divider) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          opacity: 0.6,
        }}
      />

      {/* Bottom violet glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "40%",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(108,99,255,0.08), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="block text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--accent-violet)", fontFamily: "var(--font-mono)" }}
          >
            // get in touch
          </span>
          <h2 className="section-heading">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: form ── */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            onSubmit={handleSubmit}
          >
            <div
              className="glass p-8 rounded-2xl"
              style={{ border: "1px solid var(--glass-border)" }}
            >
              <h3
                className="text-lg font-bold mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                Send an Email
              </h3>

              <div className="flex flex-col gap-5">
                <FloatField
                  label="Your Name"
                  id="name" name="name" type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <FloatField
                  label="Email Address"
                  id="email" name="email" type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <FloatField
                  label="Your Message"
                  id="message" name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full mt-6 py-3.5 rounded-xl font-semibold text-sm text-white relative overflow-hidden group transition-all duration-300"
                style={{
                  background: isSending
                    ? "rgba(108,99,255,0.45)"
                    : "linear-gradient(135deg, #6C63FF, #00D4FF)",
                  boxShadow: isSending ? "none" : "0 0 28px rgba(108,99,255,0.35)",
                  fontFamily: "var(--font-body)",
                  opacity: isSending ? 0.8 : 1,
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSending ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12" cy="12" r="10"
                          stroke="currentColor" strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </span>
                {!isSending && (
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                    }}
                  />
                )}
              </button>
            </div>
          </motion.form>

          {/* ── Right: info + socials ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex flex-col gap-5"
          >
            {/* Info card */}
            <div
              className="glass p-8 rounded-2xl"
              style={{ border: "1px solid var(--glass-border)" }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                Let&apos;s connect
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                I&apos;m always open to discussing new projects, collaborations,
                or just a friendly chat about tech. Feel free to reach out!
              </p>

              {/* Email row */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(108,99,255,0.10)",
                    border: "1px solid rgba(108,99,255,0.22)",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    style={{ color: "var(--accent-violet)" }}
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round" strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:induruudantha45615@gmail.com"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--accent-violet)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                  }
                >
                  induruudantha45615@gmail.com
                </a>
              </div>
            </div>

            {/* Social cards grid */}
            <div
              className="glass p-7 rounded-2xl"
              style={{ border: "1px solid var(--glass-border)" }}
            >
              <span
                className="block text-xs tracking-widest uppercase mb-5"
                style={{ color: "var(--accent-violet)", fontFamily: "var(--font-mono)" }}
              >
                // find me on
              </span>

              <div className="grid grid-cols-2 gap-3">
                {SOCIALS.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 + 0.2 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-250"
                    style={{
                      background: "var(--input-bg)",
                      border: "1px solid var(--card-border)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow   = `0 0 22px ${s.glow}`;
                      el.style.borderColor = s.color + "44";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow   = "none";
                      el.style.borderColor = "var(--card-border)";
                    }}
                  >
                    <span className="text-xl flex-shrink-0" style={{ color: s.color }}>
                      {s.icon}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                    >
                      {s.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
