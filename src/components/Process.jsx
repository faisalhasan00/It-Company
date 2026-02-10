import Reveal from './Reveal'
import { Link } from 'react-router-dom'
import {
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketSquareIcon,
  RocketLaunchIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

function Process() {
  const steps = [
    {
      id: "01",
      title: "Discovery & Strategy",
      desc: "We start by diving deep into your business goals. We align on user needs, technical constraints, and success metrics before writing a single line of code.",
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />
    },
    {
      id: "02",
      title: "Architecture & Design",
      desc: "We design a scalable system architecture and intuitive user interface. You get a clear roadmap, wireframes, and technical specs.",
      icon: <ClipboardDocumentCheckIcon className="w-6 h-6" />
    },
    {
      id: "03",
      title: "Agile Development",
      desc: "We build in two-week sprints. You see working software early and often, allowing for rapid feedback and iteration.",
      icon: <CodeBracketSquareIcon className="w-6 h-6" />
    },
    {
      id: "04",
      title: "Testing & Launch",
      desc: "Rigorous QA testing ensures a bug-free experience. We handle the production deployment, CI/CD setup, and final performance tuning.",
      icon: <RocketLaunchIcon className="w-6 h-6" />
    },
    {
      id: "05",
      title: "Growth & Scale",
      desc: "Launch is just the beginning. We monitor performance, analyze user data, and continuously ship improvements to drive growth.",
      icon: <ArrowPathIcon className="w-6 h-6" />
    }
  ]

  return (
    <Reveal className="py-24 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              A process built for <span className="text-brand-600 dark:text-brand-400">speed</span> and <span className="text-brand-600 dark:text-brand-400">quality</span>.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We’ve refined our workflow over hundreds of projects to minimize risk and maximize ROI. No black boxes, just clear communication and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/#portfolio" className="btn btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>

          {/* Right Column: Vertical Steps */}
          <div className="lg:w-2/3">
            <div className="space-y-12 relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-100 dark:bg-zinc-800 -z-10 hidden sm:block"></div>

              {steps.map((step, index) => (
                <div key={index} className="group relative flex flex-col sm:flex-row gap-8">
                  {/* Icon Marker */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm group-hover:border-brand-500 dark:group-hover:border-brand-500 group-hover:scale-110 transition-all duration-300 relative z-10">
                      {step.icon}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-bold rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </Reveal>
  )
}

export default Process
