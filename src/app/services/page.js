import Link from "next/link";
import {
  Camera,
  CreditCard,
  Cpu,
  MonitorSmartphone,
  SunMedium,
  Tv,
  Wrench,
} from "lucide-react";
import ContactMethodLink from "@/components/ContactMethodLink";
import SectionHeading from "@/components/SectionHeading";
import { serviceCategories } from "@/lib/services";
import { siteConfig } from "@/lib/siteConfig";

const serviceIcons = {
  "mobile-money": CreditCard,
  "telecom-sales": MonitorSmartphone,
  "digital-support": Cpu,
  "tv-installation": Tv,
  "solar-installation": SunMedium,
  "cctv-installation": Camera,
  "other-services": Wrench,
};

export const metadata = {
  title: "Services",
  description:
    "Explore mobile money recruitment, telecommunications sales, digital account support, television installation, solar installation, and CCTV support services offered by Karifala Abdulai Conteh.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Practical support across sales, technology, and installation"
        description="The following service areas reflect confirmed experience and activities provided by Karifala Abdulai Conteh. Availability and requirements should be discussed directly with him."
      />

      <div className="mt-10 space-y-8">
        {serviceCategories.map((service) => {
          const Icon = serviceIcons[service.id] || Wrench;
          return (
            <article key={service.id} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(17,35,55,0.04)] sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#123B66] text-white shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F58220]">Service</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <ContactMethodLink type="phone" href={siteConfig.telephoneHref} label="Call now" />
                  <ContactMethodLink type="whatsapp" href={siteConfig.whatsappHref} label="WhatsApp" />
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-base leading-8 text-slate-600">{service.summary}</p>
                  <ul className="mt-5 space-y-3 text-slate-600">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#F58220]" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-[#F5F7FA] p-5">
                  <h3 className="text-base font-semibold text-slate-900">Service notes</h3>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                    {service.id === "mobile-money" && (
                      <>
                        <p>Karifala has confirmed experience in customer recruitment, SIM sales, mobile money agent recruitment, and field and channel sales activities.</p>
                        <p>These responsibilities are part of his professional sales experience at Orange Money Sierra Leone and should be understood as work context rather than official Orange Money services or endorsement.</p>
                      </>
                    )}
                    {service.id === "telecom-sales" && (
                      <>
                        <p>His confirmed experience includes SIM sales, Orange Energy pack sales, and Samsung mobile phone sales.</p>
                        <p>Product availability and current stock should be confirmed directly with Karifala when required.</p>
                      </>
                    )}
                    {service.id === "digital-support" && (
                      <>
                        <p>Support includes Google account setup, legitimate recovery guidance, and Apple Account and iCloud troubleshooting where account ownership and access procedures are verified.</p>
                        <p>He does not offer unauthorized unlocks, bypasses, or access through stolen devices or prohibited methods. Recovery depends on official provider verification and the customer’s legitimate access to the account.</p>
                      </>
                    )}
                    {service.id === "tv-installation" && (
                      <>
                        <p>Installations may include DStv, SLTV, Free-to-Air television setup, Canal+, and StarTimes, as well as multiple television setup where compatible equipment supports the arrangement.</p>
                        <p>Reception quality and compatibility depend on the customer’s equipment, location, and service setup.</p>
                      </>
                    )}
                    {service.id === "solar-installation" && (
                      <>
                        <p>Solar installation support may include basic requirements assessment, equipment planning, and practical setup discussions.</p>
                        <p>Customers should follow appropriate safety procedures and seek qualified professional support when a project requires specialized electrical work.</p>
                      </>
                    )}
                    {service.id === "cctv-installation" && (
                      <>
                        <p>CCTV support includes camera placement planning, system setup, and basic configuration guidance where it is offered.</p>
                        <p>Use of CCTV should remain lawful, respectful, and privacy-conscious in line with local expectations and regulations.</p>
                      </>
                    )}
                    {service.id === "other-services" && (
                      <>
                        <p>These additional service categories are limited to information supplied by the owner and should be discussed directly before confirmation.</p>
                        <p>Customers are encouraged to contact Karifala directly to discuss the current scope, suitability, and availability of these services.</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-16 rounded-[2rem] bg-[#123B66] px-6 py-10 text-white sm:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f2a85d]">Service inquiry</p>
            <h3 className="mt-3 text-2xl font-bold">Discuss your requirements with Karifala</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={siteConfig.telephoneHref} className="inline-flex items-center justify-center rounded-full bg-[#F58220] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#df6d0b]">
              Call now
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
