interface PageHeaderProps {
  title: string;
  description: string;
  /** Optional small uppercase kicker label above title */
  kicker?: string;
}

export default function PageHeader({
  title,
  description,
  kicker,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 text-center lg:py-28">
      <div className="mx-auto max-w-3xl px-4">
        {kicker && (
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600">
            {kicker}
          </span>
        )}
        <h1 className="mt-4 text-h1 text-foreground">{title}</h1>
        <p className="mt-4 text-body text-foreground/70">{description}</p>
      </div>
    </section>
  );
}
