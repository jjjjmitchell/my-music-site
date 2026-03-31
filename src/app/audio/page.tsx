export default function AudioPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Audio</h1>

      <div className="rounded-2xl border p-4 space-y-2">
        <h2 className="text-lg font-semibold">SoundCloud</h2>
        <p className="text-sm text-muted-foreground">
          Paste a SoundCloud embed iframe here.
        </p>
        <div className="aspect-video rounded-xl border flex items-center justify-center text-sm text-muted-foreground">
          SoundCloud embed placeholder
        </div>
      </div>
    </section>
  );
}