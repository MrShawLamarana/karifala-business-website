import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, icon: Icon }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(17,35,55,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(17,35,55,0.1)]">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123B66] text-white shadow-sm">
        {Icon ? <Icon className="h-6 w-6" /> : null}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {service.details.slice(0, 3).map((detail) => (
          <li key={detail} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F58220]" aria-hidden="true" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#123B66] transition group-hover:text-[#F58220]">
        Learn more
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
