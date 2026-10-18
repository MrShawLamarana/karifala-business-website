import Link from "next/link";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function ContactMethodLink({ type, href, label, className = "" }) {
  const iconMap = {
    whatsapp: MessageCircle,
    phone: Phone,
    email: Mail,
  };

  const Icon = iconMap[type] || Phone;

  return (
    <Link
      href={href}
      target={type === "whatsapp" ? "_blank" : undefined}
      rel={type === "whatsapp" ? "noreferrer" : undefined}
      className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#123B66] hover:text-[#123B66] ${className}`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
}
