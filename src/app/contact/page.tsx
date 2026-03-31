export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>

      <form data-testid="contact-form" className="space-y-4 max-w-xl">
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="name">Name</label>
          <input
            data-testid="contact-name"
            id="name"
            name="name"
            className="w-full rounded-xl border p-2"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="email">Email</label>
          <input
            data-testid="contact-email"
            id="email"
            name="email"
            type="email"
            className="w-full rounded-xl border p-2"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="message">Message</label>
          <textarea
            data-testid="contact-message"
            id="message"
            name="message"
            className="w-full rounded-xl border p-2"
            rows={5}
            required
          />
        </div>

        <button
          data-testid="contact-submit"
          className="rounded-xl border px-4 py-2 font-medium hover:bg-black/5"
          type="submit"
        >
          Send
        </button>

        <p className="text-sm text-muted-foreground">
          Day 1: form is UI-only. Day 2: wire it to a FastAPI endpoint.
        </p>
      </form>
    </section>
  );
}