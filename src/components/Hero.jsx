import Reveal from './Reveal'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  ArrowTrendingUpIcon,
  CodeBracketIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  CpuChipIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

function Hero() {
  const services = ["Custom Software", "Digital Marketing", "AI Solutions", "Mobile Apps"];
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Reveal className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white dark:bg-gray-950" id="hero">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-950">
        <div className="absolute right-0 top-0 -mr-32 -mt-32 h-[800px] w-[800px] rounded-full bg-brand-50/40 blur-3xl dark:bg-brand-900/10"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Accepting New Projects
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6 h-[3.3em] lg:h-[3.3em] sm:h-[3.3em]">
              End-to-End Solutions For <br />
              <span className="text-brand-600 dark:text-brand-400 block mt-2 transition-all duration-500 ease-in-out transform">
                {services[currentService]}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
              We are the full-service agency that bridges the gap between engineering and growth. From code to campaigns, we handle it all.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/#contact"
                className="btn btn-primary px-8 py-4 text-base shadow-lg shadow-brand-500/20"
              >
                Get My Free Proposal
              </Link>
              <Link
                to="/#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                View Our Work
              </Link>
            </div>

            {/* Service Pillars */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
              <span className="px-3 py-1 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-100 dark:border-gray-800">Engineering</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="px-3 py-1 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-100 dark:border-gray-800">Growth</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="px-3 py-1 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-100 dark:border-gray-800">Design</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="px-3 py-1 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-100 dark:border-gray-800">AI</span>
            </div>
          </div>

          {/* Right Visual - Multi-Service Composition */}
          <div className="relative h-[500px] w-full hidden lg:block animate-fade-in-up [animation-delay:200ms]">

            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white dark:bg-gray-900 rounded-full shadow-2xl border-4 border-gray-50 dark:border-gray-800 flex items-center justify-center z-20">
              <div className="text-center">
                <span className="block text-2xl font-black text-gray-900 dark:text-white">IT</span>
                <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest">Company</span>
              </div>
            </div>

            {/* Orbiting Card 1: Code (Top Left) */}
            <div className="absolute top-10 left-0 w-64 bg-gray-900 rounded-xl shadow-xl p-4 transform -rotate-6 z-10 border border-gray-700">
              <div className="flex items-center gap-2 mb-3 text-gray-400 border-b border-gray-800 pb-2">
                <CommandLineIcon className="w-4 h-4" />
                <span className="text-xs font-mono">backend.api</span>
              </div>
              <div className="space-y-1 font-mono text-[10px] text-gray-300">
                <p><span className="text-purple-400">func</span> <span className="text-blue-400">Optimize</span>() {`{`}</p>
                <p className="pl-2">return <span className="text-green-400">true</span>;</p>
                <p>{`}`}</p>
              </div>
            </div>

            {/* Orbiting Card 2: Growth (Top Right) */}
            <div className="absolute top-0 right-10 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 transform rotate-6 z-10 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-500 uppercase">Traffic Source</span>
                <ArrowTrendingUpIcon className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex items-end gap-1 h-12">
                {[20, 40, 30, 70, 50, 90, 80].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-brand-100 dark:bg-brand-900 rounded-t-sm"></div>
                ))}
              </div>
            </div>

            {/* Orbiting Card 3: AI (Bottom) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 z-30 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600">
                  <CpuChipIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">AI Assistant</p>
                  <p className="text-[10px] text-gray-500">Processing Data...</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[60%] animate-pulse"></div>
              </div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 pointer-events-none z-0" viewBox="0 0 500 500">
              <line x1="250" y1="250" x2="100" y2="100" stroke="currentColor" className="text-gray-200 dark:text-gray-800" strokeWidth="2" strokeDasharray="4" />
              <line x1="250" y1="250" x2="400" y2="80" stroke="currentColor" className="text-gray-200 dark:text-gray-800" strokeWidth="2" strokeDasharray="4" />
              <line x1="250" y1="250" x2="250" y2="400" stroke="currentColor" className="text-gray-200 dark:text-gray-800" strokeWidth="2" strokeDasharray="4" />
            </svg>

          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default Hero
