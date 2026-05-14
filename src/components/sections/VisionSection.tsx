import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

interface VisionSectionProps {
  /** Pernyataan visi (max 300 chars) */
  vision: string;
}

export default function VisionSection({ vision }: VisionSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-h2 text-slate-800 mb-8">Visi Kami</h2>

        <div className="relative">
          <FormatQuoteIcon className="!text-5xl text-primary-200 mx-auto mb-4 rotate-180" />

          <blockquote className="border-l-4 border-primary-400 pl-6 py-2 text-left sm:border-l-0 sm:border-none sm:pl-0 sm:text-center">
            <p className="text-2xl italic text-slate-700 leading-relaxed">
              {vision}
            </p>
          </blockquote>

          <FormatQuoteIcon className="!text-5xl text-primary-200 mx-auto mt-4" />
        </div>
      </div>
    </section>
  );
}
