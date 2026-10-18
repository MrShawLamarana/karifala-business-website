import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function WhatsAppButton({ className = "", label = "Chat on WhatsApp" }) {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#F58220] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#df6d0b] ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
