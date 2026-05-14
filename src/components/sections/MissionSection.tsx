import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface MissionSectionProps {
  missions: string[];
}

export default function MissionSection({ missions }: MissionSectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-h2 text-center mb-10 text-slate-800">Misi Kami</h2>
        <ol className="space-y-4">
          {missions.map((mission, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircleIcon className="text-primary-500 !text-2xl flex-shrink-0 mt-0.5" />
              <span className="text-body text-slate-700">{mission}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
