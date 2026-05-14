import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { HeroData } from "@/src/types";

interface HeroSectionProps {
  data: HeroData;
}

/**
 * Render a headline string supporting `*highlighted word(s)*` markers.
 * Segments wrapped in `*` are styled with the primary accent color.
 */
function renderHeadline(headline: string) {
  const parts = headline.split("*");
  return parts.map((part, idx) =>
    idx % 2 === 1 ? (
      <span key={idx} className="text-primary-500">
        {part}
      </span>
    ) : (
      <span key={idx}>{part}</span>
    )
  );
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      {/* Decorative gradient orbs */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary-200/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary-100/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text Content */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            {data.kicker && (
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600">
                {data.kicker}
              </span>
            )}

            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
              {renderHeadline(data.headline)}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {data.subHeadline}
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href={data.primaryCTA.href}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-primary-600 hover:shadow-lg"
              >
                <span>{data.primaryCTA.label}</span>
                <ArrowForwardIcon className="!text-xl" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Hero Image with decorative blob */}
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
              {/* Decorative circle behind image */}
              <div
                className="absolute inset-0 -z-10 m-auto h-[85%] w-[85%] rounded-full bg-primary-200/60 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 -z-10 m-auto h-[95%] w-[95%] rounded-full border-2 border-primary-200/60"
                aria-hidden="true"
              />

              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={data.image.width}
                height={data.image.height}
                priority
                className="relative h-full w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
