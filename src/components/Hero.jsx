import Reveal from './Reveal'

function Hero() {
  return (
    <Reveal className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20" id="hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-transparent blur-3xl dark:from-teal-400/30 dark:via-emerald-400/20 animate-fade-in" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]" />
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="w-full max-w-2xl text-center lg:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-zinc-900/70 dark:text-gray-200">
            Production-ready software for startups
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl text-balance">
            From idea to production-ready software.
          </h1>
          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg text-balance">
            We design and build reliable systems—apps, payments, and internal tools—so your product ships fast and stays stable in the real world.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-teal-500 dark:hover:bg-teal-600 sm:w-auto"
            >
              Let’s build together
            </a>
            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:border-gray-700 dark:bg-zinc-900/70 dark:text-gray-200 dark:hover:border-gray-600 sm:w-auto"
            >
              View our work
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-gray-500 dark:text-gray-400 lg:justify-start">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Shipping in weeks, not months
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              Clear milestones and weekly updates
            </div>
          </div>
        </div>
        <div className="mt-10 w-full max-w-md lg:mt-0 lg:max-w-sm animate-fade-in-up [animation-delay:200ms]">
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-xl backdrop-blur dark:border-gray-800 dark:bg-zinc-900/80 dark:shadow-teal-900/20">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-gray-400">
              <span>Delivery system</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Online
              </span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-200">
              <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-3 py-2 dark:border-gray-800 dark:bg-zinc-950/40">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Product discovery</span>
                </div>
                <span className="text-gray-400 text-xs">Week 1</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-3 py-2 dark:border-gray-800 dark:bg-zinc-950/40">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Core build</span>
                </div>
                <span className="text-gray-400 text-xs">Weeks 2–4</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-3 py-2 dark:border-gray-800 dark:bg-zinc-950/40">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span>Launch & monitoring</span>
                </div>
                <span className="text-gray-400 text-xs">Week 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default Hero
