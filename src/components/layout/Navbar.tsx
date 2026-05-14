"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PhoneIcon from "@mui/icons-material/Phone";
import { navigationData } from "@/src/data/navigation";
import { cn } from "@/src/lib/utils";
import MobileDrawer from "./MobileDrawer";

const PHONE_DISPLAY = "+62 812-3456-7890";
const PHONE_HREF = "tel:+6281234567890";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position to enhance navbar shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md transition-all duration-300",
          isScrolled
            ? "border-slate-200 shadow-md"
            : "border-transparent shadow-sm supports-[backdrop-filter]:bg-white/70"
        )}
        aria-label="Navigasi utama"
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8",
            isScrolled ? "h-16" : "h-20"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center rounded-md outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-4"
            aria-label="Learning With Us - Beranda"
          >
            <Image
              src="/images/logo.svg"
              alt="Learning With Us"
              width={160}
              height={40}
              priority
              className="h-10 w-auto rounded-lg md:h-11"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex md:items-center md:gap-1">
            {navigationData.mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
                      isActive
                        ? "bg-primary-50 text-primary-700"
                        : "text-slate-600 hover:text-primary-600"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{link.label}</span>
                    {!isActive && (
                      <span
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary-500 transition-transform duration-200 group-hover:scale-x-100"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right cluster: phone CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* Phone CTA - desktop only */}
            <a
              href={PHONE_HREF}
              className="group hidden items-center gap-3 rounded-full px-3 py-1.5 outline-none transition-colors hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 lg:inline-flex"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-transform duration-200 group-hover:scale-105 group-hover:bg-primary-200">
                <PhoneIcon className="!text-lg" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                  Hubungi kami
                </span>
                <span className="text-sm font-bold text-primary-700">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={cn(
                "relative inline-flex h-11 w-11 items-center justify-center rounded-full outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 md:hidden",
                isOpen
                  ? "bg-primary-50 text-primary-600"
                  : "text-slate-700 hover:bg-slate-100 hover:text-primary-600"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
            >
              {/* Animated hamburger / close icon */}
              <span className="relative h-5 w-6" aria-hidden="true">
                <span
                  className={cn(
                    "absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300",
                    isOpen ? "top-2 rotate-45" : "top-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-2 block h-0.5 w-6 rounded-full bg-current transition-opacity duration-200",
                    isOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300",
                    isOpen ? "top-2 -rotate-45" : "top-4"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - rendered OUTSIDE nav to avoid stacking context issues */}
      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Navbar;
