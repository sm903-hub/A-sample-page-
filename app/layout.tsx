import "./globals.css";
export const metadata = { title: "GAAC Portal", description: "GITAM Aero Astro Club" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cosmic-950 text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white">
        <nav className="border-b border-slate-800 bg-cosmic-950/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
          <div className="font-bold tracking-wider text-indigo-400 flex items-center gap-2">
            🚀 GAAC <span className="text-xs text-slate-400 font-normal">GITAM Aero Astro Club</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="/" className="hover:text-indigo-400 transition">Home</a>
            <a href="/projects" className="text-indigo-400 font-medium">Projects</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
