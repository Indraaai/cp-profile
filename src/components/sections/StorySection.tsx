import Image from "next/image";
import { CompanyStory } from "@/src/types";

interface StorySectionProps {
  story: CompanyStory;
}

export default function StorySection({ story }: StorySectionProps) {
  // Split content into paragraphs by double newline, or render as single paragraph
  const paragraphs = story.content
    .split(/\n\n+/)
    .filter((p) => p.trim().length > 0);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-800">
          Cerita Kami
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image - stacks on top on mobile, left side on desktop */}
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text content - stacks below on mobile, right side on desktop */}
          <div className="w-full md:w-1/2">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-slate-600 leading-relaxed mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
