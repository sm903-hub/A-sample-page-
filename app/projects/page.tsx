"use client";
import { useState } from "react";
import { Search, Github, ExternalLink, Award, Check } from "lucide-react";

const PROJECTS_DATA = [
  {
    id: "1",
    title: "Autonomous Spectrum Capture Module",
    domain: "Robusta",
    summary: "Engineered high-frequency RF signal sensing payload integrated with custom ESP32 firmware for real-time telemetry downlink during test flights.",
    technologies: ["PyTorch", "ESP32", "Autodesk Fusion 360", "C++"],
    github_url: "https://github.com",
    demo_url: "https://example.com",
    competition_context: "Sangarsh Fest 2026",
    achievement_badge: "2nd Place National Award"
  },
  {
    id: "2",
    title: "IROC 2027 Rover Sub-system",
    domain: "Robusta",
    summary: "All-terrain rocker-bogie chassis prototype equipped with YDLIDAR sensor nodes and Pixhawk 2.4.8 flight hardware for autonomous navigation in simulated Martian environments.",
    technologies: ["ROS", "Python", "Pixhawk", "YDLIDAR"],
    github_url: "https://github.com",
    demo_url: "https://example.com",
    competition_context: "ISRO Rover Challenge Prep",
    achievement_badge: "Flagship Initiative"
  },
  {
    id: "3",
    title: "CanSat Telemetry Dashboard",
    domain: "Programmer",
    summary: "Full-stack web application built with Next.js and Tailwind CSS providing real-time atmospheric data stream parsing, charting, and error logging.",
    technologies: ["React", "Next.js", "Tailwind CSS", "MQTT", "Python"],
    github_url: "https://github.com",
    demo_url: "https://example.com",
    competition_context: "CanSat Mission 2026",
    achievement_badge: "Top 5 Rank - IIT Hyderabad DEV"
  }
];

const ALL_TECH_OPTIONS = Array.from(
  new Set(PROJECTS_DATA.flatMap(p => p.technologies))
).sort();

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => 
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const filtered = PROJECTS_DATA.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.summary.toLowerCase().includes(search.toLowerCase());
    const matchesDomain = selectedDomain === "All" || p.domain === selectedDomain;
    const matchesTechs = selectedTechs.length === 0 || selectedTechs.every(t => p.technologies.includes(t));

    return matchesSearch && matchesDomain && matchesTechs;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects & Showcase</h1>
          <p className="text-slate-400 text-sm mt-1">Explore engineering builds, research initiatives, and competition entries.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-2.5 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["All", "Robusta", "Programmer", "Stargazers"].map(domain => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition ${selectedDomain === domain ? "bg-indigo-600 text-white" : "bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700"}`}
              >
                {domain}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.length === 0 ? (
              <div className="col-span-full py-16 text-center text-slate-500">
                No projects match the selected criteria or technology combination.
              </div>
            ) : (
              filtered.map(project => (
                <div key={project.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2.5 py-1 text-xs rounded-md bg-indigo-500/10 text-indigo-400 font-medium border border-indigo-500/20">
                        {project.domain}
                      </span>
                      {project.achievement_badge && (
                        <span className="flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                          <Award size={12} /> {project.achievement_badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.summary}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className={`text-xs px-2.5 py-1 rounded-md border ${
                            selectedTechs.includes(tech) 
                              ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/40 font-medium" 
                              : "bg-slate-800 text-slate-300 border-slate-700/50"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">{project.competition_context}</span>
                    <div className="flex items-center gap-3">
                      <a href={project.github_url} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition">
                        <Github size={16} />
                      </a>
                      <a href={project.demo_url} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Sidebar - Categorical Multi-Select Tech Filter */}
        <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-xl p-5 sticky top-24">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <h3 className="font-semibold text-sm text-slate-200">Tech Stack Filter</h3>
            {selectedTechs.length > 0 && (
              <button
                onClick={() => setSelectedTechs([])}
                className="text-xs text-indigo-400 hover:underline"
              >
                Reset
              </button>
            )}
          </div>
          <p className="text-xs text-slate-400 mb-4">Select multiple technologies to view matching projects.</p>
          <div className="flex flex-col gap-2">
            {ALL_TECH_OPTIONS.map(tech => {
              const isSelected = selectedTechs.includes(tech);
              return (
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`w-full px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition ${
                    isSelected 
                      ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/50" 
                      : "bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <span>{tech}</span>
                  {isSelected && <Check size={14} className="text-indigo-400" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
