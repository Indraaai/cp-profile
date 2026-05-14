"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";
import { cn } from "@/src/lib/utils";
import { navigationData } from "@/src/data/navigation";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const PHONE_DISPLAY = "+62 812-3456-7890";
const PHONE_HREF = "tel:+6281234567890";

const socialIconMap: Record<string, React.ElementType> = {
  Instagram,
  Facebook,
  YouTube,
};

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel - slides from right */}
      <aside
        id="mobile-drawer"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi mobile"
        aria-hidden={!isOpen}
      >
        {/* Header with logo and close button */}
        <div className="flex h-20 flex-shrink-0 items-center justify-between border-b border-slate-100 bg-white px-5">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center"
            aria-label="Learning With Us - Beranda"
          >
            <Image
              src="/images/logo.svg"
              alt="Learning With Us"
              width={140}
              height={36}
              className="h-9 w-auto rounded-lg"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup menu navigasi"
            className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-slate-500 outline-none transition-colors hover:bg-slate-100 hover:text-slate-800 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            <CloseIcon className="!text-xl" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation links */}
        <nav
          className="flex-1 overflow-y-auto bg-white px-4 py-6"
          aria-label="Navigasi mobile"
        >
          <p className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Menu
          </p>
          <ul className="flex flex-col gap-1">
            {navigationData.mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "group relative flex min-h-[52px] items-center justify-between rounded-xl px-4 text-base font-medium outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-500",
                      isActive
                        ? "bg-primary-50 text-primary-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-primary-600"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {/* Active indicator bar on left */}
                    {isActive && (
                      <span
                        className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-primary-500"
                        aria-hidden="true"
                      />
                    )}
                    <span className={cn(isActive && "ml-2")}>{link.label}</span>
                    <ChevronRightIcon
                      className={cn(
                        "!text-xl transition-transform duration-200 group-hover:translate-x-0.5",
                        isActive ? "text-primary-500" : "text-slate-400"
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer: phone CTA and social */}
        <div className="flex-shrink-0 border-t border-slate-100 bg-white px-5 py-5">
          <a
            href={PHONE_HREF}
            onClick={onClose}
            className="group flex items-center gap-3 rounded-xl bg-primary-50 p-3 outline-none transition-colors hover:bg-primary-100 focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white shadow-md transition-transform duration-200 group-hover:scale-105">
              <PhoneIcon className="!text-xl" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600">
                Hubungi kami
              </span>
              <span className="text-sm font-bold text-primary-800">
                {PHONE_DISPLAY}
              </span>
            </span>
          </a>

          <div className="mt-4 flex items-center justify-center gap-2">
            {navigationData.socialLinks.map((social) => {
              const IconComponent = socialIconMap[social.icon];
              if (!IconComponent) return null;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 outline-none transition-colors hover:bg-primary-50 hover:text-primary-600 focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  <IconComponent className="!text-lg" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
