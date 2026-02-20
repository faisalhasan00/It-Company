import { useParams, Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { serviceDetails } from '../data/services';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The service you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-gray-50 dark:bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-10 dark:opacity-20"
            src={service.heroImage}
            alt={service.title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50 dark:from-black/90 dark:to-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-8 shadow-lg">
              {service.icon}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
              {service.description}
            </p>
            <Link to="/#contact" className="btn btn-primary inline-flex items-center">
              Start a Project
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <Reveal className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our {service.title}?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We deliver value that goes beyond just code and design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-6 rounded-xl border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50">
                <CheckCircleIcon className="w-6 h-6 text-brand-600 dark:text-brand-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {benefit}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Process Section */}
      <Reveal className="py-24 bg-gray-50 dark:bg-zinc-900 border-y border-gray-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our proven process ensures transparency and results at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="h-0.5 flex-1 bg-gray-200 dark:bg-zinc-700 ml-4 hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* CTA Section */}
      <Reveal className="py-24 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Let's discuss how our {service.title} services can help you achieve your goals.
          </p>
          <Link 
            to="/#contact" 
            className="btn btn-primary px-8 py-4 text-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </Reveal>
    </main>
  );
}

export default ServiceDetail;
