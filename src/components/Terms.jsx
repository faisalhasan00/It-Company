import Reveal from './Reveal'

function Terms() {
  return (
    <Reveal className="py-24 bg-gray-50 dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800" id="terms">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Terms of Service</h2>
        <div className="prose dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            By engaging our services, you agree to the following terms. We believe in fair, transparent agreements that protect both parties.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Scope & Timeline</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All work is performed according to the scope and timeline defined in our project proposal. Any changes to the scope must be agreed upon in writing and may affect the timeline and budget.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Intellectual Property</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Upon full payment, you own all rights to the code, designs, and assets we create for your project. We do not retain ownership or lock you into proprietary platforms.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Payments</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Payment terms are defined in the project proposal. Typically, we require a deposit to begin work, with the remainder due upon completion or milestones.
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default Terms
