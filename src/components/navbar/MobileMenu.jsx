import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navbarData } from './navbarData';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function MobileMenu({ isOpen, setIsOpen }) {
  const [openSection, setOpenSection] = useState(null); // 'services', 'industries'
  const [openServiceCategory, setOpenServiceCategory] = useState(null); // 'Digital Marketing', etc.

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleServiceCategory = (category) => {
    setOpenServiceCategory(openServiceCategory === category ? null : category);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div
      className={`fixed inset-0 z-40 bg-white dark:bg-gray-950 transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:hidden overflow-y-auto pt-24 pb-10 px-4`}
    >
      <div className="flex flex-col space-y-1 divide-y divide-gray-100 dark:divide-gray-800">
        
        {/* SERVICES */}
        <div>
          <button
            onClick={() => toggleSection('services')}
            className={`w-full flex items-center justify-between py-4 text-left font-bold text-gray-800 dark:text-white uppercase tracking-wide transition-colors ${openSection === 'services' ? 'text-brand-600 dark:text-brand-400' : ''}`}
          >
            <span>Services</span>
            <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openSection === 'services' ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'services' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-2 space-y-1">
              {navbarData.services.map((service, idx) => (
                <div key={idx} className="border-b border-gray-50 dark:border-gray-800 last:border-0">
                  <button
                    onClick={() => toggleServiceCategory(service.category)}
                    className="w-full flex items-center justify-between py-3 px-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-brand-600 dark:text-brand-400">
                        {service.icon}
                      </div>
                      <span className="font-medium text-sm">{service.category}</span>
                    </div>
                    <ChevronDownIcon className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openServiceCategory === service.category ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openServiceCategory === service.category ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="pl-12 pr-4 py-2 space-y-3 bg-gray-50/50 dark:bg-black/20 rounded-lg my-1">
                      {service.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            to={item.href}
                            className="block text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INDUSTRIES */}
        <div>
           <button
            onClick={() => toggleSection('industries')}
            className={`w-full flex items-center justify-between py-4 text-left font-bold text-gray-800 dark:text-white uppercase tracking-wide transition-colors ${openSection === 'industries' ? 'text-brand-600 dark:text-brand-400' : ''}`}
          >
            <span>Industries</span>
            <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openSection === 'industries' ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'industries' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-2 grid grid-cols-1 gap-1">
              {navbarData.industries.map((industry, idx) => (
                <Link
                  key={idx}
                  to={industry.href}
                  className="flex items-center space-x-3 py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors"
                  onClick={closeMenu}
                >
                  <div className="text-brand-600 dark:text-brand-400 w-5 h-5">
                     {industry.icon}
                  </div>
                  <span className="text-sm font-medium">{industry.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* LINKS */}
        <Link 
          to="/portfolio" 
          className="block py-4 font-bold text-gray-800 dark:text-white uppercase tracking-wide hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          onClick={closeMenu}
        >
          Client Success
        </Link>
        
        <Link 
          to="/about" 
          className="block py-4 font-bold text-gray-800 dark:text-white uppercase tracking-wide hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          onClick={closeMenu}
        >
          About
        </Link>
        
        <Link 
          to="/#contact" 
          className="block py-4 font-bold text-gray-800 dark:text-white uppercase tracking-wide hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          onClick={closeMenu}
        >
          Contact
        </Link>
        
        {/* WhatsApp Mobile */}
         <a
            href="https://wa.me/8332063638"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-4 font-bold text-green-600 dark:text-green-500 uppercase tracking-wide hover:text-green-700 dark:hover:text-green-400 transition-colors"
            onClick={closeMenu}
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>

      </div>

      {/* CTA Button */}
      <div className="mt-8 mb-8">
        <Link 
          to="/#contact" 
          className="block w-full py-4 bg-brand-600 hover:bg-brand-700 text-white text-center font-bold uppercase tracking-wider rounded-lg shadow-lg transition-colors"
          onClick={closeMenu}
        >
          Get My Free Proposal
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;