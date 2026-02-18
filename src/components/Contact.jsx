import { useState } from 'react'
import Reveal from './Reveal'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Construct email body
    const subject = `New Project Inquiry: ${formData.name}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Budget: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Message:
${formData.message}
    `.trim()

    // Trigger mailto
    window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <Reveal className="py-24 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column: Copy */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Let’s build something useful.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Tell us a bit about your project. We’ll review it and get back to you with honest feedback and a rough plan—usually within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center text-gray-600 dark:text-gray-400 group">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-teal-900/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-5 h-5 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>hello@example.com</span>
              </div>

              <a href="https://wa.me/8332063638" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 group hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <span>WhatsApp: 833-206-3638</span>
              </a>

              <div className="flex items-center text-gray-600 dark:text-gray-400 group">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-teal-900/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-5 h-5 text-blue-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span>Your idea stays confidential.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-gray-50 dark:bg-zinc-800/50 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-zinc-700/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name <span className="text-blue-600 dark:text-teal-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email <span className="text-blue-600 dark:text-teal-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget (Optional)
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-transparent transition-all duration-200 appearance-none"
                    >
                      <option value="">Select range...</option>
                      <option value="< $5k">Under $5k</option>
                      <option value="$5k - $20k">$5k – $20k</option>
                      <option value="$20k - $50k">$20k – $50k</option>
                      <option value="$50k+">$50k+</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Timeline (Optional)
                  </label>
                  <div className="relative">
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-transparent transition-all duration-200 appearance-none"
                    >
                      <option value="">Select timeline...</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-2 months">1–2 months</option>
                      <option value="3-6 months">3–6 months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Details <span className="text-blue-600 dark:text-teal-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="What are you building? Who is it for?"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-teal-600 dark:hover:bg-teal-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Send Message
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                No pressure. No sales pitch. Just a conversation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default Contact
