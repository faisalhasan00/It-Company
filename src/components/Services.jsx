import Reveal from './Reveal'

function Services() {
  const services = [
    {
      title: "Custom Web Applications",
      desc: "Scalable, fast, and secure apps built for your specific business needs. We handle everything from frontend polish to backend logic.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Admin Dashboards & Internal Tools",
      desc: "Streamline operations with custom tools that your team will actually enjoy using. Automate workflows and visualize data clearly.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: "Backend & API Development",
      desc: "Robust server-side architecture that powers your product. Secure, documented, and built to handle growth without breaking.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "Payments & Integrations",
      desc: "Seamlessly accept payments and connect with third-party services like Stripe, Twilio, or Slack. Reliability is key here.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Deployment & Scaling",
      desc: "We don't just write code; we ship it. Full CI/CD setup, cloud infrastructure management, and monitoring for peace of mind.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Ongoing Support",
      desc: "Software needs maintenance. We provide ongoing updates, bug fixes, and improvements so your business never stops running.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ]

  return (
    <Reveal className="py-24 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Services built for production
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            We focus on outcomes, not just code. From initial concept to scaling in the wild,
            we build reliable systems that solve real business problems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group p-8 card hover:border-brand-200 dark:hover:border-brand-900 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-balance">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Soft CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Not sure what you need? That’s okay.
          </p>
          <a
            href="#contact"
            className="btn btn-secondary text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 hover:bg-brand-100 dark:hover:bg-brand-900/30 border-transparent"
          >
            Let’s talk about your idea
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default Services
