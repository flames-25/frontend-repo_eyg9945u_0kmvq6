import { Menu, Rocket } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-black/30">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400/60 to-cyan-400/60 text-white shadow-inner shadow-white/10">
                <Rocket size={18} />
              </span>
              <span className="font-semibold tracking-tight text-white/90">FluxAgents</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a href="#agents" className="hover:text-white transition">Agents</a>
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
              <a href="#" className="ml-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition border border-white/10">Sign in</a>
            </nav>
            <button className="md:hidden text-white/80" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <Menu />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2 text-white/80">
              <a href="#agents" className="block">Agents</a>
              <a href="#features" className="block">Features</a>
              <a href="#pricing" className="block">Pricing</a>
              <a href="#contact" className="block">Contact</a>
              <a href="#" className="block rounded-xl bg-white/10 text-white px-4 py-2 border border-white/10">Sign in</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
