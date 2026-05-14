import { CompanyStat } from "@/src/types";

interface StatsSectionProps {
  stats: CompanyStat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-800">
          Pencapaian Kami
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center p-6"
          >
            <span className="text-3xl md:text-4xl font-bold text-primary-600">
              {stat.value}
            </span>
            <span className="text-sm text-slate-600 mt-2">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
