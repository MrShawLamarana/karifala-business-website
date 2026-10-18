import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { serviceCategories } from "@/lib/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-[#0f1f32] text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1.2fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F58220] text-sm font-bold text-white">
              K
            </div>
            <div>
              <p className="text-base font-semibold text-white">{siteConfig.businessName}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-[#dce7f2]">{siteConfig.brandName}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#f2a85d]">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {siteConfig.navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#f2a85d]">Services</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {serviceCategories.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link href="/services" className="transition hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-sm text-slate-300">
            <p>
              <a href={siteConfig.telephoneHref} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp
              </a>
            </p>
            <p>
              <a href={siteConfig.emailHref} className="hover:text-white">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-sm text-slate-300 sm:px-6 lg:px-8">
          <p>© {currentYear} {siteConfig.businessName}. All rights reserved.</p>
          <p>Developed by MrShawLamarana.</p>
        </div>
      </div>
    </footer>
  );
}
