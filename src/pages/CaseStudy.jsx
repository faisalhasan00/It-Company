import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

function CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 pb-20 bg-white dark:bg-black transition-colors duration-300">
      <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link to="/#portfolio" className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-teal-400 hover:underline mb-6">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to work
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Reducing checkout abandonment by 18% for a SaaS platform
          </h1>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
            <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full">Fintech</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full">React & Node</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full">Stripe API</span>
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full">Live Result</span>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="w-full aspect-video bg-gray-100 dark:bg-zinc-800 rounded-2xl mb-16 flex items-center justify-center border border-gray-200 dark:border-zinc-700">
          <p className="text-gray-400 dark:text-gray-500 font-mono text-sm">Project Screenshot / Hero Image</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="md:col-span-8 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                The client’s existing checkout flow was causing significant friction. Users were dropping off at the payment step due to a confusing UI, lack of localized pricing, and slow loading times. Support tickets related to billing errors were at an all-time high.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Solution</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We rebuilt the subscription flow from the ground up, focusing on speed, trust, and clarity.
              </p>
              <ul className="space-y-4">
                {[
                  "Implemented a single-page checkout experience to reduce cognitive load.",
                  "Integrated Stripe Elements for secure, compliant, and localized payments.",
                  "Added real-time validation to prevent form errors before submission.",
                  "Optimized API response times, reducing latency by 400ms."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                    <svg className="w-6 h-6 text-blue-600 dark:text-teal-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800">
                  <div className="text-3xl font-bold text-blue-600 dark:text-teal-400 mb-1">+18%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</div>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800">
                  <div className="text-3xl font-bold text-blue-600 dark:text-teal-400 mb-1">-30%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Support Tickets</div>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800">
                  <div className="text-3xl font-bold text-blue-600 dark:text-teal-400 mb-1">400ms</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Faster Load Time</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-8">
            <div className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Tech Stack</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> React / Next.js
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Node.js API
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span> Stripe Connect
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span> PostgreSQL
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-teal-900/10 rounded-2xl border border-blue-100 dark:border-teal-900/30">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Need similar results?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                We specialize in high-performance payment flows and admin dashboards.
              </p>
              <Link to="/#contact" className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-medium rounded-lg transition-colors">
                Start a project
              </Link>
            </div>
          </div>

        </div>
      </Reveal>
    </main>
  )
}

export default CaseStudy
