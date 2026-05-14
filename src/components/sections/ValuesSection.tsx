import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CompanyValue } from "@/src/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb: LightbulbIcon,
  Groups: GroupsIcon,
  School: SchoolIcon,
  TrendingUp: TrendingUpIcon,
  Favorite: FavoriteIcon,
};

interface ValuesSectionProps {
  values: CompanyValue[];
  columns?: 2 | 3;
  title?: string;
}

export default function ValuesSection({
  values,
  columns = 3,
  title,
}: ValuesSectionProps) {
  const gridColsClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-16 px-4">
      {title && (
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-800">
          {title}
        </h2>
      )}
      <div className={`grid ${gridColsClass} gap-6 max-w-6xl mx-auto`}>
        {values.map((value) => {
          const IconComponent = iconMap[value.icon];

          return (
            <div
              key={value.title}
              className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {IconComponent && (
                <IconComponent className="text-primary-500 mb-4 !text-4xl" />
              )}
              <h3 className="text-lg font-semibold mb-2 text-slate-800">
                {value.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
