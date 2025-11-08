import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0)_20%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.85)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Star size={14} className="text-amber-300" />
            Introducing the AI Agent Marketplace for Business
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Discover, deploy, and scale enterprise AI agents
          </h1>
          <p className="mt-6 text-white/70 text-lg">
            Browse a curated catalog of specialized agents for sales, support, ops and more. Secure, compliant, and ready to integrate with your stack.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#agents" className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-medium shadow-lg shadow-black/30 hover:shadow-black/40 transition">
              Explore Agents
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-medium border border-white/15 backdrop-blur hover:bg-white/15 transition">
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
