"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AlertTriangle, CheckCircle2, LoaderCircle, MessageCircle } from "lucide-react";
import { serviceCategories } from "@/lib/services";

const initialValues = {
  fullName: "",
  phoneNumber: "",
  emailAddress: "",
  serviceRequired: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState({ type: '', text: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    if (serverMessage.text) {
      setServerMessage({ type: '', text: '' });
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!formValues.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!formValues.phoneNumber.trim()) nextErrors.phoneNumber = "Please enter a phone number.";
    if (!formValues.serviceRequired) nextErrors.serviceRequired = "Please select a service.";
    if (!formValues.message.trim()) nextErrors.message = "Please tell us what you need.";

    if (formValues.emailAddress && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.emailAddress)) {
      nextErrors.emailAddress = "Enter a valid email address.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setServerMessage({ type: "error", text: "Please fix the highlighted fields and try again." });
      return;
    }

    setIsSubmitting(true);
    setServerMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const result = await response.json();

      if (!response.ok) {
        setServerMessage({
          type: "error",
          text: result.message || "The form could not be sent right now. Please use WhatsApp or call directly.",
        });
        return;
      }

      setServerMessage({
        type: "success",
        text: result.message || "Your message has been prepared for sending.",
      });
      setFormValues(initialValues);
      setErrors({});
    } catch (error) {
      setServerMessage({
        type: "error",
        text: "A connection error occurred. Please try again or use WhatsApp for an immediate inquiry.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(10,20,35,0.08)] sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F58220]">Service inquiry</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">Send a message</h3>
        </div>
        <div className="rounded-full bg-[#F5F7FA] p-3 text-[#123B66]">
          <MessageCircle className="h-5 w-5" />
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formValues.fullName}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#123B66] focus:ring-2 focus:ring-[#123B66]/10"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            {errors.fullName && <p id="fullName-error" className="mt-2 text-sm text-[#B42318]">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-slate-700">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formValues.phoneNumber}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#123B66] focus:ring-2 focus:ring-[#123B66]/10"
              aria-invalid={Boolean(errors.phoneNumber)}
              aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
            />
            {errors.phoneNumber && <p id="phoneNumber-error" className="mt-2 text-sm text-[#B42318]">{errors.phoneNumber}</p>}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="emailAddress" className="mb-2 block text-sm font-medium text-slate-700">Email Address (optional)</label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              value={formValues.emailAddress}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#123B66] focus:ring-2 focus:ring-[#123B66]/10"
              aria-invalid={Boolean(errors.emailAddress)}
              aria-describedby={errors.emailAddress ? "emailAddress-error" : undefined}
            />
            {errors.emailAddress && <p id="emailAddress-error" className="mt-2 text-sm text-[#B42318]">{errors.emailAddress}</p>}
          </div>

          <div>
            <label htmlFor="serviceRequired" className="mb-2 block text-sm font-medium text-slate-700">Service Required</label>
            <select
              id="serviceRequired"
              name="serviceRequired"
              value={formValues.serviceRequired}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#123B66] focus:ring-2 focus:ring-[#123B66]/10"
              aria-invalid={Boolean(errors.serviceRequired)}
              aria-describedby={errors.serviceRequired ? "serviceRequired-error" : undefined}
            >
              <option value="">Select a service</option>
              {serviceCategories.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            {errors.serviceRequired && <p id="serviceRequired-error" className="mt-2 text-sm text-[#B42318]">{errors.serviceRequired}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formValues.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#123B66] focus:ring-2 focus:ring-[#123B66]/10"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && <p id="message-error" className="mt-2 text-sm text-[#B42318]">{errors.message}</p>}
        </div>

        <AnimatePresence>
          {serverMessage.text && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
                serverMessage.type === "success"
                  ? "border-[#16803C]/30 bg-[#ecfdf3] text-[#0f5b2b]"
                  : "border-[#B42318]/30 bg-[#fef3f2] text-[#7a1e1c]"
              }`}
              aria-live="polite"
            >
              {serverMessage.type === "success" ? <CheckCircle2 className="mt-0.5 h-5 w-5" /> : <AlertTriangle className="mt-0.5 h-5 w-5" />}
              <p>{serverMessage.text}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <input
          type="text"
          name="company"
          value={formValues.company}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F58220] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#df6d0b] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <MessageCircle className="h-4 w-4" />}
            {isSubmitting ? "Sending..." : "Send inquiry"}
          </button>
          <a
            href="https://wa.me/23275300500?text=Hello%20Karifala%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#123B66]/20 px-6 py-3 text-sm font-semibold text-[#123B66] transition hover:border-[#123B66] hover:bg-[#123B66]/5"
          >
            Contact on WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}
