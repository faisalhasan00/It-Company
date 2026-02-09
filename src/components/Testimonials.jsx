import Reveal from './Reveal'

function Testimonials() {
  const testimonials = [
    {
      quote: "Finally, a team that cares about the outcome, not just the code. They pushed back on bad ideas and helped us ship a better product.",
      author: "Alex M.",
      role: "Founder, Fintech Startup"
    },
    {
      quote: "The communication was refreshing. No jargon, no hiding behind tickets. Just clear updates and reliable delivery every week.",
      author: "Sarah J.",
      role: "Product Lead, SaaS"
    },
    {
      quote: "We needed a partner to handle the complex backend logic while we focused on sales. They delivered exactly what we needed, on time.",
      author: "David K.",
      role: "CTO, E-commerce Brand"
    }
  ]

  return (
    <Reveal className="py-24 bg-gray-50 dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Don’t just take our word for it
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            We build long-term partnerships with founders who value transparency and quality.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-8 card"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-brand-100 dark:text-zinc-800">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                </svg>
              </div>

              <div className="relative z-10 pt-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic text-balance">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {t.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default Testimonials
