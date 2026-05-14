export default function ProductLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-lg shadow-sm overflow-hidden bg-white"
        >
          <div className="w-full h-[300px] bg-slate-200 animate-pulse" />
          <div className="p-4 space-y-3">
            <div className="h-5 w-20 bg-slate-200 animate-pulse rounded-full" />
            <div className="h-6 w-3/4 bg-slate-200 animate-pulse rounded" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-slate-200 animate-pulse rounded" />
              <div className="h-4 w-5/6 bg-slate-200 animate-pulse rounded" />
              <div className="h-4 w-2/3 bg-slate-200 animate-pulse rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
