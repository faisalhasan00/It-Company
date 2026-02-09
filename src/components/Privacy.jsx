import Reveal from './Reveal'

function Privacy() {
  return (
    <Reveal className="py-24 bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-800" id="privacy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h2>
        <div className="prose dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information when you use our website or services.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Data Collection</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We only collect information necessary to communicate with you and provide our services. This typically includes your name, email address, and project details submitted via our contact form.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Usage & Protection</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We use your data solely to respond to inquiries and deliver agreed-upon work. We do not sell, trade, or rent your personal information to third parties. All data is stored securely and accessed only by authorized team members.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Contact</h3>
          <p className="text-gray-600 dark:text-gray-400">
            If you have any questions about this policy, please contact us at hello@example.com.
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default Privacy
