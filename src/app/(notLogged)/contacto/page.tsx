import type { Metadata } from "next";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";
import { TrustHighlights } from "./components/TrustHighlights";

const description =
  "Cuéntanos sobre tu proyecto. En Stardust te ayudamos a convertir tu idea en una solución digital clara, funcional y lista para crecer.";

export const metadata: Metadata = {
  metadataBase: new URL("https://stardustui.com"),
  title: "Contacto | Stardust",
  description,
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Stardust",
    description,
    url: "/contacto",
    siteName: "Stardust",
    locale: "es_MX",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="relative isolate overflow-hidden bg-[#fbfafc]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_52%_40%,rgba(168,85,247,0.09),transparent_58%)]"
      />

      <div className="mx-auto w-full max-w-340 px-5 pt-8 pb-12 sm:px-8 lg:px-10">
        <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>

        <TrustHighlights />
      </div>
    </main>
  );
}
