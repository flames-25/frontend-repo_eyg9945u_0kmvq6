import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Marketplace from './components/Marketplace';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Marketplace />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} FluxAgents Inc.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
