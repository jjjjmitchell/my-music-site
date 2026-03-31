import { videos } from "@/lib/videos";

export default function VideosPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Videos</h1>

      <div data-testid="videos-grid" className="grid gap-6 md:grid-cols-2">
        {videos.map((v) => (
          <article key={v.id} className="rounded-2xl border p-4 space-y-3">
            <h2 className="text-lg font-semibold">{v.title}</h2>
            <div className="aspect-video overflow-hidden rounded-xl border">
              <iframe
                data-testid="video-embed"
                className="h-full w-full"
                src={v.url}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="rounded-full border px-2 py-1">{v.instrument}</span>
              {v.tags.map((t) => (
                <span key={t} className="rounded-full border px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}