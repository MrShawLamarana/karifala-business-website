import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  CircleHelp,
  CreditCard,
  Cpu,
  MonitorSmartphone,
  ShoppingCart,
  SunMedium,
  Tv,
  UserRound,
  Wrench,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { serviceCategories, workGallery } from "@/lib/services";

const highlights = [
  { icon: BadgeCheck, title: "7+ Years of Experience" },
  { icon: UserRound, title: "Field Sales and Channel Sales Experience" },
  { icon: ShoppingCart, title: "Customer and Mobile Money Agent Recruitment" },
  { icon: MonitorSmartphone, title: "Telecommunications Sales Experience" },
  { icon: Wrench, title: "Technical and Installation Services" },
];

const serviceIcons = [
  CreditCard,
  ShoppingCart,
  Cpu,
  Tv,
  SunMedium,
  Camera,
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-[#F58220] px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#123B66]/15 bg-[#e9f2fb] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#123B66]">
              Sierra Leone service support
            </div>
            <h1 className="mt-6 max-w-xl text-4xl font-black leading-tight tracking-tight text-[#182230] sm:text-5xl lg:text-6xl">
              Your Trusted Partner for Sales, Technical & Installation Services
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Explore practical support for mobile money recruitment, sales, television installation, solar systems, CCTV installation, and digital account assistance. Contact Karifala Abdulai Conteh to discuss your requirements.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-[#123B66] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d4d]"
              >
                Explore Services
              </Link>
              <WhatsAppButton label="Contact on WhatsApp" className="px-6 py-3" />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16803C]" />
                Direct communication
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16803C]" />
                Practical support
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-[#F58220]/15 blur-3xl" aria-hidden="true" />
            <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-[#123B66]/10 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_28px_60px_rgba(18,59,102,0.12)]">
              <Image
                src="/images/IMG-20260830-WA0008.jpg"
                alt="Portrait of Karifala Abdulai Conteh"
                width={900}
                height={1100}
                priority
                className="h-[520px] w-full rounded-[1.4rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Professional highlights"
            title="A practical service-focused profile"
            description="Confirmed experience and service categories relevant to customer inquiries, sales support, installation work, and digital assistance."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {highlights.map(({ icon: Icon, title }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-[#F5F7FA] p-5 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#123B66] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-base font-semibold text-slate-900">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services overview"
          title="Support for sales, technical services, and installation needs"
          description="Explore the main areas where Karifala offers practical support and direct customer discussions."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} icon={serviceIcons[index]} />
          ))}
        </div>
      </section>

      <section className="bg-[#0f2137] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f2a85d]">About Karifala</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Professional support with direct communication</h2>
            <p className="mt-5 text-base leading-8 text-slate-200">
              Karifala Abdulai Conteh brings more than seven years of experience in field sales, channel sales, customer recruitment, and related commercial activities. He supports customers with practical discussions across mobile money, telecommunications, installation services, and digital account setup guidance.
            </p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F58220] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#df6d0b]">
              Learn about Karifala
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { title: "Sales and customer engagement", detail: "Practical field and channel sales experience for business and customer-facing needs." },
              { title: "Multiple service categories", detail: "Support for technical, sales, and installation-related inquiries." },
              { title: "Direct communication", detail: "Customers can speak directly to Karifala to discuss requirements and availability." },
              { title: "Customer-focused discussions", detail: "Requirements are reviewed before service recommendations or next steps." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F58220] text-white">
                  <CircleHelp className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-200">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Why contact Karifala?"
            title="Straightforward, honest service discussions"
            description="He focuses on understanding customer needs, sharing practical information, and confirming the best next step for each requirement."
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {[
            "Experience in field and channel sales.",
            "Multiple service categories.",
            "Direct communication.",
            "Customer-focused service discussions.",
            "Clear communication about requirements.",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F58220]/10 text-[#F58220]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our work"
            title="Service categories and practical examples"
            description="A visual preview of the kinds of service areas Karifala supports, presented as replaceable placeholders until verified project images become available."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {workGallery.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-[#F5F7FA] shadow-sm">
                <Image src={item.image} alt={item.alt} width={800} height={600} className="h-52 w-full object-cover" />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F58220]">{item.category}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/our-work" className="inline-flex items-center justify-center rounded-full border border-[#123B66]/20 px-6 py-3 text-sm font-semibold text-[#123B66] transition hover:border-[#123B66] hover:bg-[#123B66]/5">
              View more work
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[#F5F7FA] px-6 py-10 text-center shadow-[0_12px_40px_rgba(17,35,55,0.04)] sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F58220]">Need help?</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Need Help With a Service?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Get in touch to discuss what you need and confirm service availability.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton label="WhatsApp" className="px-6 py-3" />
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#123B66]/20 bg-white px-6 py-3 text-sm font-semibold text-[#123B66] transition hover:border-[#123B66] hover:bg-[#123B66]/5">
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
