import { Link } from 'react-router-dom';
import { navbarData } from './navbarData';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-white dark:bg-gray-950 transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden overflow-y-auto pt-20 pb-10 px-6`}
    >
      <div className="space-y-6">
        {/* Services Accordion */}
        <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
            Services
          </h3>
          <div className="space-y-6">
            {navbarData.services.map((section, idx) => (
              <div key={idx}>
                <div className="flex items-center space-x-2 text-brand-600 dark:text-brand-400 mb-3">
                  {section.icon}
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                    {section.category}
                  </h4>
                </div>
                <ul className="pl-8 space-y-3 border-l-2 border-gray-100 dark:border-gray-800 ml-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link 
                        to={item.href}
                        className="text-sm text-gray-600 dark:text-gray-400 block"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Accordion */}
        <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
            Industries
          </h3>
          <div className="space-y-3">
            {navbarData.industries.map((industry, index) => (
              <Link
                key={index}
                to={industry.href}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                  {industry.icon}
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {industry.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Standard Links */}
        <div className="space-y-4">
          <Link to="/#portfolio" className="block text-lg font-bold text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>
            Client Success
          </Link>
          <Link to="/#about" className="block text-lg font-bold text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/#contact" className="block text-lg font-bold text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="pt-6">
          <Link 
            to="/#contact" 
            className="block w-full py-4 bg-brand-600 text-white text-center font-bold rounded-lg shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            Get My Free Proposal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
