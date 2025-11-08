export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Bring agents to your business</h2>
        <p className="mt-4 text-white/70">Get a personalized walkthrough and discuss your use cases with our team.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input type="email" required placeholder="Work email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <input type="text" required placeholder="Company" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <button type="submit" className="rounded-xl bg-white text-black px-5 py-3 font-medium shadow-lg shadow-black/30 hover:shadow-black/40 transition">Request demo</button>
        </form>
        <p className="mt-4 text-xs text-white/50">By submitting, you agree to our Terms and Privacy Policy.</p>
      </div>
    </section>
  );
}
