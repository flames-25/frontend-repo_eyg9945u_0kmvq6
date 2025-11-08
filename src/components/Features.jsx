import { Shield, Zap, PlugZap } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-5 w-5" />, 
    title: "Enterprise-grade security",
    desc: "SSO, audit logs, data isolation, and role-based access so your data stays yours.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Deploy in minutes",
    desc: "Spin up agents instantly with prebuilt templates and one-click connectors.",
  },
  {
    icon: <PlugZap className="h-5 w-5" />,
    title: "Connect your stack",
    desc: "Integrate with Slack, HubSpot, Zendesk, Notion, Google Workspace and more.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Why businesses choose us</h2>
          <p className="mt-4 text-white/70">A platform designed for control, reliability, and measurable outcomes.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-2xl shadow-black/20">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                {f.icon}
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
