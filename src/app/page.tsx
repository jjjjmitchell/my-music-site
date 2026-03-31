export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 data-testid="hero-title" className="text-4xl font-bold tracking-tight">
          Musician, Producer, Audio Engineer
        </h1>
        <p className="text-lg text-muted-foreground">
          Videos, audio, loops, and booking info.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-4">
          <h2 className="text-xl font-semibold">Featured video</h2>
          <p className="text-sm text-muted-foreground">
            Add a YouTube embed on the Videos page first, then feature it here.
          </p>
        </div>
        <div className="rounded-2xl border p-4">
          <h2 className="text-xl font-semibold">Featured audio</h2>
          <p className="text-sm text-muted-foreground">
            Add SoundCloud embeds on the Audio page first, then feature one here.
          </p>
        </div>
      </div>
    </section>
  );
}