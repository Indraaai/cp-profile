import SchoolIcon from "@mui/icons-material/School";
import DevicesIcon from "@mui/icons-material/Devices";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { FeatureItem } from "@/src/types";
import { cn } from "@/src/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  School: SchoolIcon,
  Devices: DevicesIcon,
  Groups: GroupsIcon,
  WorkspacePremium: WorkspacePremiumIcon,
};

const intro = {
  kicker: "MENGAPA MEMILIH KAMI",
  title: "Solusi Belajar Custom untuk Anda",
  description:
    "Materi, jadwal, dan metode disesuaikan dengan kebutuhan Anda. Belajar lebih efektif dengan pendekatan personal dari mentor terbaik.",
  showcaseLabel: "Lihat Showcase",
  showcaseHref: "/about",
};

interface FeaturesSectionProps {
  features: FeatureItem[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  // Take first 4 features for 2x2 grid
  const gridFeatures = features.slice(0, 4);

  // Filled card pattern: index 0 -> filled, 1 -> white, 2 -> white, 3 -> filled
  const isFilled = (index: number) => index === 0 || index === 3;

  return (
    <section className="relative overflow-hidden bg-primary-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      {/* Decorative gradient orbs */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-primary-100/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left intro column */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              {intro.kicker}
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 lg:text-4xl">
              {intro.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {intro.description}
            </p>
            <div className="mt-8">
              <a
                href={intro.showcaseHref}
                className="inline-flex items-center gap-3 text-sm font-semibold text-slate-800 transition-colors hover:text-primary-600"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-md transition-colors group-hover:bg-primary-600">
                  <PlayArrowIcon className="!text-2xl" aria-hidden="true" />
                </span>
                <span>{intro.showcaseLabel}</span>
              </a>
            </div>
          </div>

          {/* Right 2x2 grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {gridFeatures.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              const filled = isFilled(index);

              return (
                <div
                  key={feature.title}
                  className={cn(
                    "rounded-xl p-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl",
                    filled
                      ? "bg-primary-600 text-white shadow-lg"
                      : "bg-white text-slate-800 shadow-md"
                  )}
                >
                  {IconComponent && (
                    <IconComponent
                      className={cn(
                        "mb-4 !text-5xl",
                        filled ? "text-white" : "text-primary-500"
                      )}
                    />
                  )}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      filled ? "text-primary-50" : "text-slate-600"
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
