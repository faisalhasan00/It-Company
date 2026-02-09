import Reveal from './Reveal'

function Process() {
  const steps = [
    {
      n: "01",
      title: "Understand the Problem",
      desc: "We start with a short call to align on your goals, users, and constraints. No sales pitch, just listening."
    },
    {
      n: "02",
      title: "Plan the Solution",
      desc: "We define a clear scope and timeline. You’ll know exactly what we’re building and when it will ship."
    },
    {
      n: "03",
      title: "Build & Iterate",
      desc: "We develop in short cycles with visible progress. You see the product evolve weekly, not months later."
    },
    {
      n: "04",
      title: "Ship to Production",
      desc: "We handle the deployment, testing, and final polish. Your product goes live securely and reliably."
    },
    {
      n: "05",
      title: "Support & Improve",
      desc: "Software is never 'done'. We stick around for bug fixes, updates, and scaling as you grow."
    }
  ]

  return (
    <Reveal className="py-24 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            No black boxes. No surprises.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            We value transparency over everything else. Here is exactly how we go from
            first conversation to launched product.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 dark:bg-zinc-800 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((s, i) => (
              <div key={i} className="relative bg-white dark:bg-zinc-900 lg:bg-transparent lg:dark:bg-transparent p-6 lg:p-0 rounded-lg border border-gray-100 dark:border-zinc-800 lg:border-none shadow-sm lg:shadow-none">
                <div className="flex items-center lg:block mb-4 lg:mb-6">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-24 lg:h-24 rounded-full bg-brand-50 dark:bg-zinc-800 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-lg lg:text-2xl border-4 border-white dark:border-zinc-900 mx-auto lg:mx-0 lg:mb-6">
                    {s.n}
                  </div>
                  <h3 className="ml-4 lg:ml-0 text-xl font-bold text-gray-900 dark:text-white lg:mb-3">
                    {s.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm lg:text-base text-balance">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Ready to get started?
          </p>
          <a
            href="#contact"
            className="btn btn-secondary text-gray-900 dark:text-white hover:border-brand-500 dark:hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default Process
