"use client";

import { ChevronDown } from "lucide-react";

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="text-base font-semibold text-slate-900">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="border-t border-slate-200 px-5 py-4 text-sm leading-7 text-slate-600">{answer}</div>}
    </div>
  );
}
