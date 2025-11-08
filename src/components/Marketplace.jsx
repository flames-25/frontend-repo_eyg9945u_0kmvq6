import { Bot, MessageSquare, Headphones, BarChart3 } from "lucide-react";

const agents = [
  {
    icon: Bot,
    name: "Sales Closer",
    desc: "AI SDR to qualify leads, schedule demos, and follow-up automatically.",
    tag: "Sales",
  },
  {
    icon: MessageSquare,
    name: "Support Companion",
    desc: "Resolves tier-1 tickets, drafts replies, and updates your help center.",
    tag: "Support",
  },
  {
    icon: Headphones,
    name: "Voice Concierge",
    desc: "Answers inbound calls and routes intents with CRM lookups in real-time.",
    tag: "Voice",
  },
  {
    icon: BarChart3,
    name: "Ops Automator",
    desc: "Monitors workflows, triggers runbooks, and reports KPIs to Slack.",
    tag: "Ops",
  },
];

export default function Marketplace() {
  return (
    <section id="agents" className="relative py-24 bg-black">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Featured agents</h2>
            <p className="mt-3 text-white/70">Curated picks built for outcomes, not experiments.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-xl bg-white/10 text-white px-4 py-2 border border-white/15 hover:bg-white/15 transition">View all</a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 backdrop-blur hover:from-white/10 transition relative overflow-hidden">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-white font-medium">{a.name}</h3>
                <span className="mt-1 inline-flex rounded-full bg-white/10 text-white/80 text-xs px-2 py-0.5 border border-white/10">{a.tag}</span>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{a.desc}</p>
                <a href="#" className="mt-4 inline-flex text-cyan-300 hover:text-cyan-200 text-sm">Learn more →</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
