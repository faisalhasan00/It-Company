import Reveal from './Reveal'

function Trust() {
  const items = [
    {
      title: "Production-First Code",
      desc: "We write clean, documented code designed to be maintained for years, not just weeks. No spaghetti code.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden fees. No scope creep without approval. You know exactly what you're paying for from day one.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Direct Access",
      desc: "You talk directly to the engineers building your product. No account managers or middlemen in the way.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Security Standard",
      desc: "Basic security isn't an add-on. HTTPS, secure headers, and data protection are standard on every deploy.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "You Own Everything",
      desc: "You own the code, the IP, and the accounts. We don't lock you in. Handover is simple and complete.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Real Uptime",
      desc: "We set up monitoring and alerts so we know if something breaks before your users do.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  return (
    <Reveal className="py-24 bg-gray-50 dark:bg-black/50 border-t border-gray-100 dark:border-zinc-800" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Reliability is our currency
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            We don't optimize for flashy demos. We optimize for production, security, and long-term peace of mind.
            Here is what you can expect working with us.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div
              key={i}
              className="flex flex-col p-6 card hover:border-brand-200 dark:hover:border-brand-900"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center mr-4">
                  {it.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {it.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-balance">
                {it.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Soft CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Want to see how we write code?
          </p>
          <a
            href="#contact"
            className="btn btn-secondary text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 hover:bg-brand-100 dark:hover:bg-brand-900/30 border-transparent"
          >
            Ask for a code walkthrough
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default Trust
