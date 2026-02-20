import { useState } from 'react'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

function Portfolio() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Web App', 'Mobile App', 'E-commerce', 'Internal Tool']

  const projects = [
    {
      title: "Subscription Platform",
      desc: "Reduced checkout abandonment by 18% through a streamlined, one-click payment flow.",
      category: "E-commerce",
      status: "Live",
      statusColor: "text-emerald-600 border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-900/30 dark:text-emerald-400",
      stack: "React, Node, Stripe",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Internal Ops Dashboard",
      desc: "Cut manual reconciliation time by 60% with secure, role-based admin tooling.",
      category: "Internal Tool",
      status: "In Production",
      statusColor: "text-amber-600 border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-900/30 dark:text-amber-400",
      stack: "Next.js, PostgreSQL",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Creator Commerce App",
      desc: "Improved user activation by 12% with a simplified onboarding experience.",
      category: "Web App",
      status: "Active Users",
      statusColor: "text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-900/30 dark:text-blue-400",
      stack: "Vue, Firebase",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "HealthTech Patient Portal",
      desc: "Secure HIPAA-compliant portal for patient records and appointment scheduling.",
      category: "Web App",
      status: "Live",
      statusColor: "text-emerald-600 border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-900/30 dark:text-emerald-400",
      stack: "React, Python, AWS",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Logistics Tracking App",
      desc: "Real-time fleet tracking and route optimization for a logistics company.",
      category: "Mobile App",
      status: "In Beta",
      statusColor: "text-purple-600 border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-900/30 dark:text-purple-400",
      stack: "React Native, Google Maps API",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fashion Marketplace",
      desc: "Multi-vendor marketplace with AI-powered recommendations.",
      category: "E-commerce",
      status: "In Development",
      statusColor: "text-gray-600 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300",
      stack: "Next.js, Shopify Headless",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Reveal className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              Our <span className="text-brand-600 dark:text-brand-400">Work</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              We don't just write code; we build solutions that drive business growth. Check out some of our recent projects.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-brand-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Projects Grid */}
      <Reveal className="pb-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={index}
                className="group flex flex-col bg-gray-50 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 hover:shadow-xl hover:border-brand-200 dark:hover:border-brand-900 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${project.statusColor.replace('bg-', 'bg-opacity-90 bg-')}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="pt-6 border-t border-gray-200 dark:border-zinc-800 mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-500 font-mono bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded">
                        {project.stack}
                      </span>
                      <Link
                        to="/case-study"
                        className="inline-flex items-center text-sm font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                      >
                        View Case Study
                        <ArrowRightIcon className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* CTA Section */}
      <Reveal className="py-24 bg-brand-50 dark:bg-zinc-900/50 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            We'd love to help you build something amazing. Let's talk about your goals.
          </p>
          <Link 
            to="/#contact" 
            className="btn btn-primary"
          >
            Start a Conversation
          </Link>
        </div>
      </Reveal>
    </main>
  )
}

export default Portfolio