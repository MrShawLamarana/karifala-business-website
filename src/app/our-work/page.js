import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { workGallery } from "@/lib/services";

export const metadata = {
  title: "Our Work",
  description:
    "View service categories and placeholder portfolio visuals for sales, television installation, solar installation, CCTV, and digital account support.",
};

export default function OurWorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our work"
        title="Service categories and illustrative portfolio placeholders"
        description="Verified project photographs are not yet available, so these portfolio cards use clear, replaceable placeholders that can be updated with genuine service images later."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {workGallery.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_14px_42px_rgba(17,35,55,0.04)]">
            <Image src={item.image} alt={item.alt} width={900} height={700} className="h-64 w-full object-cover" />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F58220]">{item.category}</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#123B66]">
                Ask about this service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
