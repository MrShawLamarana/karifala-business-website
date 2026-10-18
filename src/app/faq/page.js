"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import FAQItem from "@/components/FAQItem";

const faqItems = [
  {
    question: "What services does Karifala provide?",
    answer:
      "He provides support across sales, mobile money recruitment, telecommunications-related sales, Google and Apple account setup or troubleshooting, television installation, solar installation, and CCTV installation. The exact service scope should be discussed directly with him.",
  },
  {
    question: "How can I contact him?",
    answer:
      "You can call 075300500, send a WhatsApp message to +23275300500, or email contehkarifalaa@gmail.com. The contact page also includes a form for service inquiries and a direct WhatsApp alternative.",
  },
  {
    question: "Does he offer television installation?",
    answer:
      "Yes, he has stated experience in DStv installation, SLTV installation, Free-to-Air television setup, Canal+ installation, StarTimes installation, and multiple television setup where compatible equipment allows it.",
  },
  {
    question: "Can I inquire about solar installation?",
    answer:
      "Yes. Solar installation and basic power-system discussions can be requested directly. Service suitability, equipment requirements, and safety expectations should be confirmed before work begins.",
  },
  {
    question: "Does he provide CCTV installation?",
    answer:
      "Yes, he has stated experience in CCTV installation, camera placement planning, system setup, and basic troubleshooting. Use should remain lawful, privacy-conscious, and compatible with the customer’s setup.",
  },
  {
    question: "Can he assist with Google or iCloud account recovery?",
    answer:
      "He offers legitimate support for Google account setup, troubleshooting, and official recovery guidance, as well as Apple Account and iCloud setup or sign-in assistance where the customer has valid ownership and is following official provider procedures. He does not offer unauthorized access or bypasses.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "Request a quotation by calling, sending a WhatsApp message, emailing, or submitting a service inquiry through the contact form. Service details, equipment requirements, and location must be discussed directly with Karifala before any final arrangement is made.",
  },
  {
    question: "Can I inquire about mobile money agent recruitment?",
    answer:
      "Yes. Mobile money agent recruitment and related sales conversations are part of the stated business areas. Customers should discuss their requirements directly with Karifala for the latest information and suitability.",
  },
  {
    question: "Does he offer services in my area?",
    answer:
      "Service availability should be confirmed directly with Karifala because area coverage and suitability will depend on your location, logistics, and the specific work involved.",
  },
  {
    question: "How do I confirm service availability?",
    answer:
      "The clearest way is to contact him directly by phone or WhatsApp and explain the work you need. This allows him to confirm the service category, project requirements, and the best next step.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Helpful answers for common service and contact questions. Each requirement should still be confirmed directly with Karifala where service scope or availability is involved."
        align="center"
      />

      <div className="mt-10 space-y-4">
        {faqItems.map((item, index) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
}
