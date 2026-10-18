import { Mail, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ContactMethodLink from "@/components/ContactMethodLink";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact",
  description:
    "Contact Karifala Abdulai Conteh by phone, WhatsApp, or email to discuss your sales, installation, digital support, or technical service requirements.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch with Karifala"
        description="Reach out directly to discuss your requirements, confirm service availability, and ask about the right next step for your project or enquiry."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(17,35,55,0.04)]">
            <h2 className="text-2xl font-bold text-slate-900">Contact details</h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#123B66]/10 p-2 text-[#123B66]">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F58220]">Telephone</p>
                  <a href={siteConfig.telephoneHref} className="mt-1 block text-base font-medium text-slate-900">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#123B66]/10 p-2 text-[#123B66]">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F58220]">WhatsApp</p>
                  <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="mt-1 block text-base font-medium text-slate-900">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#123B66]/10 p-2 text-[#123B66]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F58220]">Email</p>
                  <a href={siteConfig.emailHref} className="mt-1 block text-base font-medium text-slate-900">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#F5F7FA] p-6">
            <h3 className="text-xl font-bold text-slate-900">Quick actions</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <ContactMethodLink type="whatsapp" href={siteConfig.whatsappHref} label="WhatsApp now" />
              <ContactMethodLink type="phone" href={siteConfig.telephoneHref} label="Call now" />
              <ContactMethodLink type="email" href={siteConfig.emailHref} label="Email Karifala" />
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
