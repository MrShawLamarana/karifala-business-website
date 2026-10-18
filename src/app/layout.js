import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Karifala Abdulai Conteh | Sales & Technical Services",
    template: "%s | Karifala Abdulai Conteh",
  },
  description:
    "Explore Karifala Abdulai Conteh's sales experience, mobile money recruitment, television installation, solar installation, CCTV, and digital support services in Sierra Leone.",
  openGraph: {
    title: "Karifala Abdulai Conteh | Sales & Technical Services",
    description:
      "Professional sales, technical support, and installation services in Sierra Leone.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karifala Abdulai Conteh | Sales & Technical Services",
    description:
      "Professional sales, technical support, and installation services in Sierra Leone.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#F5F7FA] text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
