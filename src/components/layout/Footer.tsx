import Link from "next/link";
import Image from "next/image";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";
import { navigationData } from "@/src/data/navigation";
import { companyInfo, contactInfo } from "@/src/data/company";

const socialIconMap: Record<string, React.ElementType> = {
  Instagram,
  Facebook,
  YouTube,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-600">
      {/* Top accent line */}
      <div
        className="h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center transition-opacity hover:opacity-80"
              aria-label={`${companyInfo.name} - Beranda`}
            >
              <Image
                src="/images/logo.svg"
                alt={companyInfo.name}
                width={180}
                height={48}
                className="h-12 w-auto rounded-lg"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {companyInfo.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
              Navigasi
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="mt-4 space-y-1">
                {navigationData.mainLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[44px] items-center text-sm text-slate-600 transition-colors hover:text-primary-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
              Kontak
            </h3>
            <ul className="mt-4 space-y-1">
              {contactInfo.email && (
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex min-h-[44px] items-center text-sm text-slate-600 transition-colors hover:text-primary-600"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              )}
              {contactInfo.phone && (
                <li>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="inline-flex min-h-[44px] items-center text-sm text-slate-600 transition-colors hover:text-primary-600"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              )}
              {contactInfo.address && (
                <li>
                  <p className="py-2 text-sm text-slate-600">
                    {contactInfo.address}
                  </p>
                </li>
              )}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
              Media Sosial
            </h3>
            <div className="mt-4 flex space-x-2">
              {navigationData.socialLinks.map((social) => {
                const IconComponent = socialIconMap[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-primary-100 hover:text-primary-700"
                  >
                    {IconComponent && <IconComponent fontSize="medium" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} Learning With Us. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
