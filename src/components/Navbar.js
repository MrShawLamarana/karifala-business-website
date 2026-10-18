"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = siteConfig.navLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Karifala Abdulai Conteh home">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123B66] text-lg font-bold text-white shadow-sm">
            K
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123B66]">Karifala</div>
            <div className="text-xs text-slate-600">Digital & Technical Services</div>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#123B66] text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-100 hover:text-[#123B66]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.telephoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-[#123B66]/20 px-4 py-2 text-sm font-semibold text-[#123B66] transition hover:border-[#123B66] hover:bg-[#123B66]/5"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#F58220] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#df6d0b]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-[#123B66] hover:text-[#123B66] md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium ${
                    isActive ? "bg-[#123B66] text-white" : "bg-slate-50 text-slate-700"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <a
                href={siteConfig.telephoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#123B66]/20 px-4 py-3 text-sm font-semibold text-[#123B66]"
              >
                <Phone className="h-4 w-4" />
                Call now
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F58220] px-4 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
