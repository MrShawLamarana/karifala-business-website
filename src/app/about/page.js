import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, UserRound } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "About",
  description:
    "Learn about Karifala Abdulai Conteh, his sales experience, technical service interests, and direct customer support approach in Sierra Leone.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,31,50,0.08)]">
          <Image
            src="/images/IMG-20260830-WA0008.jpg"
            alt="Portrait of Karifala Abdulai Conteh"
            width={900}
            height={1100}
            className="h-[520px] w-full rounded-[1.4rem] object-cover"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="About"
            title="About Karifala Abdulai Conteh"
            description="A Sierra Leonean professional with more than seven years of experience in field sales, channel sales, customer engagement, and related commercial activities."
          />

          <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
            <p>
              Karifala Abdulai Conteh is a Sierra Leonean professional with more than seven years of experience in field sales, channel sales, customer engagement, and related commercial activities.
            </p>
            <p>
              His current professional role includes Field Sales Agent and Channel Sales Agent responsibilities at Orange Money Sierra Leone. His experience includes customer recruitment, SIM sales, mobile money agent recruitment, and telecommunications-related product sales.
            </p>
            <p>
              His other service interests and activities include television installation, solar installation, CCTV installation, and legitimate digital account support. This website provides an accessible way for customers to explore his services and contact him to discuss their requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#123B66] text-white">
            <BriefcaseBusiness className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Sales and customer engagement experience</h3>
          <ul className="mt-5 space-y-3 text-slate-600">
            {[
              "Customer recruitment and direct customer engagement.",
              "SIM sales and telecommunications-related product conversations.",
              "Mobile money agent recruitment and onboarding discussions.",
              "Field and channel sales activities in a practical, customer-focused environment.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#16803C]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F58220] text-white">
            <UserRound className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Technical service categories</h3>
          <ul className="mt-5 space-y-3 text-slate-600">
            {[
              "Television and satellite installation support.",
              "Solar installation and customer power discussions.",
              "CCTV installation support and basic setup planning.",
              "Legitimate Google and Apple account support with official verification procedures.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#16803C]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 rounded-[2rem] bg-[#123B66] px-6 py-10 text-white sm:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f2a85d]">Professional approach</p>
            <h3 className="mt-3 text-2xl font-bold">Direct, practical, and customer-focused</h3>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-200">
            He works to understand customer requirements clearly, explain relevant service options, and discuss the best next steps with honesty and direct communication. This website does not imply Orange Money sponsorship or endorsement.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-slate-900">Ready to discuss your needs?</h3>
        <p className="mt-3 text-base text-slate-600">Contact Karifala directly to ask about service availability and requirements.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={siteConfig.telephoneHref} className="inline-flex items-center justify-center rounded-full bg-[#123B66] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d4d]">
            Call {siteConfig.phoneDisplay}
          </a>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#123B66]/20 bg-white px-6 py-3 text-sm font-semibold text-[#123B66] transition hover:border-[#123B66] hover:bg-[#123B66]/5">
            Contact page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
