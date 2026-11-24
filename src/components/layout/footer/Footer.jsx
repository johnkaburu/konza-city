import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, ArrowUpRight } from "lucide-react";
import { navLinks } from "../navLinks";
import logo from "../../../../public/assets/images/logo/logo.png";
import tiktok from "../../../../public/assets/images/logo/tiktok.svg";

const externalLinks = [
  { label: "Ministry of ICT", href: "https://ict.go.ke" },
  { label: "Kenya Revenue Authority", href: "https://www.kra.go.ke" },
  { label: "Huduma Centre", href: "https://www.hudumakenya.go.ke" },
  { label: "eCitizen", href: "https://www.ecitizen.go.ke" },
  { label: "EPZA", href: "https://epzakenya.com" },
  { label: "Kenya Investment Authority", href: "https://www.invest.go.ke" },
  { label: "Kenya Vision 2030", href: "https://vision2030.go.ke" },
  { label: "ICT Authority", href: "https://icta.go.ke" },
  { label: "National Environment Management Authority", href: "https://www.nema.go.ke" },
  { label: "National Construction Authority", href: "https://nca.go.ke" },
  { label: "National Land Commission", href: "https://landcommission.go.ke" },
  { label: "Public Service Commission", href: "https://www.publicservice.go.ke" },
  { label: "Ministry of Lands, Housing & Urban Development", href: "https://lands.go.ke" },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink text-white/70">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-brand/30 blur-3xl"
      />

      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Konza Technopolis logo" className="h-12 w-auto" />
            <span className="font-display text-xl font-bold text-white">Konza City</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            A flagship project of Kenya&apos;s Vision 2030 — a world-class smart city powered by a
            thriving ICT sector, reliable infrastructure and business-friendly governance.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
            >
              <Image src={tiktok} alt="" className="h-4 w-4 invert" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-brand-light">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            External Links
          </h3>
          <ul className="mt-5 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
            {externalLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-1 transition-colors hover:text-brand-light"
                >
                  {l.label}
                  <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page relative">
        <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm sm:grid-cols-3">
          <a href="mailto:info@info.com" className="flex items-center gap-3 hover:text-white">
            <Mail className="h-4 w-4 text-brand-light" /> info@info.com
          </a>
          <a href="tel:+254123456789" className="flex items-center gap-3 hover:text-white">
            <Phone className="h-4 w-4 text-brand-light" /> +254 123 456 789
          </a>
          <span className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-brand-light" /> Konza, Machakos County, Kenya
          </span>
        </div>
      </div>

      <div className="container-page relative flex flex-col items-center justify-between gap-2 py-8 text-xs text-white/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Konza City. All rights reserved.</p>
        <p>Silicon Savannah · Vision 2030</p>
      </div>
    </footer>
  );
};

export default Footer;
