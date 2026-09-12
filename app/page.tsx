"use client";
import { motion } from "framer-motion";
import { Rocket, Cpu, Compass, Terminal, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
        <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          GITAM University Innovation Hub
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight mt-4 mb-6">
          From Concepts to Hardware.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">From Software to Orbit.</span>[cite: 1]
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
          The official digital portal and operational engine for elite student engineering across Robotics, Aerospace, AI, and Astronomy[cite: 1].
        </p>
        <div className="flex justify-center gap-4">
          <a href="/projects" className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-medium flex items-center gap-2 transition">
            Explore Projects <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
        {[
          { title: "Robusta", desc: "Autonomous rovers, flight controllers & hardware.", icon: Cpu },
          { title: "Programmers", desc: "AI models, telemetry dashboards & software.", icon: Terminal },
          { title: "Stargazers", desc: "Astrophotography & celestial tracking.", icon: Compass },
          { title: "Core Team", desc: "Leadership, governance & mission operations.", icon: Rocket },
        ].map((d, i) => (
          <div key={i} className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition">
            <d.icon className="text-indigo-400 mb-4" size={28} />
            <h3 className="text-lg font-bold mb-2">{d.title}</h3>
            <p className="text-sm text-slate-400">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
