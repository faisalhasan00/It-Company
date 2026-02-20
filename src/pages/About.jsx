import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import {
  RocketLaunchIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  GlobeAmericasIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

function About() {
  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Projects Delivered", value: "200+" },
    { label: "Team Members", value: "35+" },
    { label: "Client Retention", value: "98%" }
  ]

  const values = [
    {
      title: "Innovation First",
      desc: "We don't just follow trends; we set them. We constantly explore new technologies to give our clients a competitive edge.",
      icon: <LightBulbIcon className="w-6 h-6" />
    },
    {
      title: "Client-Centric",
      desc: "Your success is our success. We work as an extension of your team, prioritizing your business goals above all else.",
      icon: <UserGroupIcon className="w-6 h-6" />
    },
    {
      title: "Integrity & Trust",
      desc: "Transparency is key. We believe in honest communication, clear pricing, and delivering exactly what we promise.",
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      title: "Global Standards",
      desc: "We adhere to international coding standards and best practices, ensuring your software is robust, secure, and scalable.",
      icon: <GlobeAmericasIcon className="w-6 h-6" />
    }
  ]

  const team = [
    {
      name: "Alex Morgan",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "15+ years in software engineering. Passionate about building scalable systems and fostering a culture of excellence."
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Award-winning designer with a keen eye for user experience. Believes that great design is invisible."
    },
    {
      name: "David Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Full-stack wizard. Loves solving complex architectural challenges and optimizing performance."
    }
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Reveal className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              We build <span className="text-brand-600 dark:text-brand-400">digital futures</span>.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              It Company is a premier software development agency dedicated to transforming ideas into powerful, scalable digital solutions. We combine technical expertise with creative innovation to drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/#contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link to="/#portfolio" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Stats Section */}
      <Reveal className="py-16 bg-gray-50 dark:bg-zinc-900 border-y border-gray-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl sm:text-5xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Story Section */}
      <Reveal className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between complex technology and business needs, It Company started as a small team of passionate engineers. Today, we have grown into a full-service digital agency, partnering with startups and enterprises worldwide.
                </p>
                <p>
                  We believe that technology should be an enabler, not a barrier. That's why we focus on building intuitive, user-friendly solutions that solve real-world problems. Our journey is defined by the success of our clients and the impact we create together.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-200 dark:bg-brand-900/30 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                alt="Team working together" 
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Values Section */}
      <Reveal className="py-24 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-black p-8 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Team Section */}
      <Reveal className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet the Leadership
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The experienced minds behind our strategic direction and technical excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-brand-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-white dark:border-zinc-800"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-600 dark:text-brand-400 font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* CTA Section */}
      <Reveal className="py-24 bg-brand-600 dark:bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals. Our team is ready to partner with you.
          </p>
          <Link 
            to="/#contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-600 bg-white rounded-lg hover:bg-brand-50 transition-colors shadow-lg"
          >
            Get in Touch
            <RocketLaunchIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </Reveal>
    </main>
  )
}

export default About