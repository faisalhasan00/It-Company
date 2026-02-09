import Reveal from './Reveal'
import { Link } from 'react-router-dom'

function Portfolio() {
  const projects = [
    {
      title: "Subscription Platform",
      desc: "Reduced checkout abandonment by 18% through a streamlined, one-click payment flow.",
      status: "Live",
      statusColor: "text-emerald-600 border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-900/30 dark:text-emerald-400",
      stack: "React, Node, Stripe",
      link: "/case-study"
    },
    {
      title: "Internal Ops Dashboard",
      desc: "Cut manual reconciliation time by 60% with secure, role-based admin tooling.",
      status: "In Production",
      statusColor: "text-amber-600 border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-900/30 dark:text-amber-400",
      stack: "Next.js, PostgreSQL",
      link: "/case-study"
    },
    {
      title: "Creator Commerce App",
      desc: "Improved user activation by 12% with a simplified onboarding experience.",
      status: "Active Users",
      statusColor: "text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-900/30 dark:text-blue-400",
      stack: "Vue, Firebase",
      link: "/case-study"
    }
  ]

  return (
    <Reveal className="py-24 bg-gray-50 dark:bg-black/50 border-t border-gray-100 dark:border-zinc-800" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Built for the real world
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Selected work that solves actual business problems.
            We focus on shipping reliable, production-ready software.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group flex flex-col card overflow-hidden hover:border-brand-200 dark:hover:border-brand-900 hover:-translate-y-1"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 text-balance">
                  {project.desc}
                </p>

                <div className="pt-6 border-t border-gray-50 dark:border-gray-800 mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-mono">
                      {project.stack}
                    </span>
                    <Link
                      to={project.link}
                      className="inline-flex items-center text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                    >
                      View case study
                      <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Looking for a partner who has done this before?
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
          >
            Let’s build your idea
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default Portfolio
