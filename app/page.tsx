import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white px-6 py-16">
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-700/50 border border-brand-500/30 px-4 py-1.5 text-sm text-brand-200">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-300"></span>
        </span>
        AI Native Team 06 — Live
      </div>

      {/* Hero */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-4">
        Hello, World!
      </h1>
      <p className="text-xl md:text-2xl text-brand-200 text-center max-w-2xl mb-2">
        Team 06 is up and running.
      </p>
      <p className="text-base text-brand-400 text-center max-w-xl mb-12">
        We are building an AI-native workflow. OpenClaw is our builder — coding,
        committing, and deploying on our behalf. This page updates with every push.
      </p>

      {/* Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="https://ai-native-06.digitalcoa.ch"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold transition-colors shadow-lg shadow-brand-900/50"
        >
          OpenClaw Workbench →
        </a>
        <a
          href="https://github.com/DigitalCoa-ch/ai-native-team-06"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl border border-brand-500/40 hover:border-brand-400 text-brand-100 hover:text-white font-semibold transition-colors"
        >
          GitHub Repo ↗
        </a>
        <a
          href="https://team-06.apps.digitalcoa.ch"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl border border-brand-500/40 hover:border-brand-400 text-brand-100 hover:text-white font-semibold transition-colors"
        >
          Published App ↗
        </a>
      </div>

      {/* Status grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl text-center">
        <div className="bg-brand-800/50 border border-brand-700/50 rounded-2xl p-6">
          <div className="text-3xl mb-2">🧠</div>
          <div className="text-sm font-semibold text-brand-300 mb-1">OpenClaw</div>
          <div className="text-xs text-brand-500">Active &amp; ready</div>
        </div>
        <div className="bg-brand-800/50 border border-brand-700/50 rounded-2xl p-6">
          <div className="text-3xl mb-2">🚀</div>
          <div className="text-sm font-semibold text-brand-300 mb-1">Vercel</div>
          <div className="text-xs text-brand-500">Watching main branch</div>
        </div>
        <div className="bg-brand-800/50 border border-brand-700/50 rounded-2xl p-6">
          <div className="text-3xl mb-2">📦</div>
          <div className="text-sm font-semibold text-brand-300 mb-1">Stack</div>
          <div className="text-xs text-brand-500">Next.js · TS · Tailwind</div>
        </div>
      </div>
    </main>
  );
}