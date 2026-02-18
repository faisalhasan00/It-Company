import Reveal from './Reveal'
import {
  CommandLineIcon,
  CodeBracketIcon,
  ChartBarIcon,
  CpuChipIcon,
  LightBulbIcon,
  MegaphoneIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';

function Services() {
  const services = [
    {
      title: "Software Development",
      desc: "Custom web applications, secure APIs, and SaaS platforms built with modern stacks (React, Node, Python) for scale and performance.",
      icon: <CommandLineIcon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
    },
    {
      title: "Web Design",
      desc: "Beautiful, responsive websites that drive conversions and reflect your brand identity with pixel-perfect precision.",
      icon: <CodeBracketIcon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
    },
    {
      title: "Social Media",
      desc: "Strategic social media management and marketing campaigns to grow your audience, engagement, and brand loyalty.",
      icon: <ChartBarIcon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
    },
    {
      title: "AI & Automation",
      desc: "Intelligent chatbots, workflow automation, and predictive analytics to optimize operations and reduce manual work.",
      icon: <CpuChipIcon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
    },
    {
      title: "Software Consulting",
      desc: "Digital transformation consulting, tech stack advisory, and project audits to ensure your technology aligns with business goals.",
      icon: <LightBulbIcon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven SEO, PPC campaigns, and content strategies that drive qualified traffic and measurable revenue growth.",
      icon: <MegaphoneIcon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
    },
    {
      title: "UI/UX Design",
      desc: "User-centric design that combines aesthetics with functionality to create intuitive and engaging digital experiences.",
      icon: <PaintBrushIcon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
    }
  ]

  return (
    <Reveal className="py-24 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Integrated Services for Modern Business
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Stop managing multiple agencies. We provide a unified team for product, engineering, and growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group p-8 card hover:border-brand-200 dark:hover:border-brand-900 hover:-translate-y-1 transition-all duration-300"
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
            Looking for something specific?
          </p>
          <a
            href="#contact"
            className="btn btn-secondary text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 hover:bg-brand-100 dark:hover:bg-brand-900/30 border-transparent"
          >
            Explore our full capabilities
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
