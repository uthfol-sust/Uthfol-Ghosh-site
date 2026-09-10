"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Link2, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { contactMethods, portfolio } from "@/data/portfolio";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const mailSubject = encodeURIComponent(values.subject || `Portfolio contact from ${values.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
    );
    window.open(
      `mailto:${portfolio.email}?subject=${mailSubject}&body=${mailBody}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Connect and Build Together"
          description="I'm seeking opportunities in Backend Engineering and AI Research. My current research work focuses on LLMs, VLMs, RAG, and low-resource NLP. Let's build impactful AI systems together."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
          >
            <div className="space-y-4">
              {contactMethods.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/55 px-4 py-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm text-zinc-200">{item.value}</div>
                  </div>
                  {item.label === "Email" ? (
                    <Mail className="h-5 w-5 text-cyan-300" />
                  ) : item.label === "GitHub" ? (
                    <FaGithub className="h-5 w-5 text-cyan-300" />
                  ) : item.label === "LinkedIn" ? (
                    <FaLinkedin className="h-5 w-5 text-cyan-300" />
                  ) : item.label === "Location" ? (
                    <MapPin className="h-5 w-5 text-cyan-300" />
                  ) : (
                    <Link2 className="h-5 w-5 text-cyan-300" />
                  )}
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/10 via-white/5 to-fuchsia-400/10 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-zinc-300">Resume</p>
              <a
                href="/resume.pdf"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Download Resume
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                error={errors.name?.message}
                placeholder="Your name"
                {...register("name", { required: "Name is required" })}
              />
              <Field
                label="Email"
                error={errors.email?.message}
                placeholder="you@example.com"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
            </div>

            <div className="mt-4">
              <Field
                label="Subject"
                error={errors.subject?.message}
                placeholder="Project, collaboration, or hiring"
                {...register("subject", { required: "Subject is required" })}
              />
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-zinc-200">Message</label>
              <textarea
                rows={7}
                placeholder="Tell me about the project, role, or collaboration idea."
                className="w-full rounded-3xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-400/40 focus:bg-slate-950/80"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message?.message ? <p className="mt-2 text-sm text-rose-300">{errors.message.message}</p> : null}
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center cursor-pointer gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Preparing email..." : "Send Message"}
              </button>
              {submitted ? (
                <span className="inline-flex items-center gap-2 text-sm text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  Ready to send through your email client.
                </span>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-200/70">
        {eyebrow}
      </div>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
        {description}
     </p>
    </div>
  );
}

function Field({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-zinc-200">{label}</span>
      <input
        {...props}
        className="w-full rounded-3xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-400/40 focus:bg-slate-950/80"
      />
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </label>
  );
}