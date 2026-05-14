import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CTASectionProps {
  title: string; // max 80 chars
  description?: string; // max 160 chars (optional)
  buttonLabel: string; // max 30 chars
  buttonHref: string;
  contactInfo?: {
    email?: string;
    phone?: string;
  };
}

export default function CTASection({
  title,
  description,
  buttonLabel,
  buttonHref,
  contactInfo,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative dot pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Soft radial accent */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-h2 text-white">{title}</h2>

        {description && (
          <p className="mt-4 text-body text-primary-100">{description}</p>
        )}

        <div className="mt-8">
          <Link
            href={buttonHref}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-primary-600 shadow-md transition-all hover:bg-primary-50 hover:shadow-lg"
          >
            <span>{buttonLabel}</span>
            <ArrowForwardIcon className="!text-xl" aria-hidden="true" />
          </Link>
        </div>

        {contactInfo && (contactInfo.email || contactInfo.phone) && (
          <div className="mt-6 flex flex-col items-center gap-2 text-primary-100">
            {contactInfo.email && (
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex min-h-[44px] items-center justify-center transition-colors hover:text-white"
              >
                {contactInfo.email}
              </a>
            )}
            {contactInfo.phone && (
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex min-h-[44px] items-center justify-center transition-colors hover:text-white"
              >
                {contactInfo.phone}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
