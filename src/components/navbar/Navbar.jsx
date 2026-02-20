import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, Bars3Icon, XMarkIcon, PhoneIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import MegaMenu from './MegaMenu';
import IndustriesMenu from './IndustriesMenu';
import MobileMenu from './MobileMenu';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'services', 'industries', or null
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const hoverTimeoutRef = useRef(null);

  // Handle scroll for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveMenu(null);
  }, [location]);

  // Hover Logic with Delay
  const handleMouseEnter = (menu) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150); // 150ms delay
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-gray-200 dark:border-gray-800 shadow-sm py-2'
          : 'bg-white dark:bg-gray-950 border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center z-50">
            <Link 
              to="/" 
              className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              It Company
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Services Mega Menu */}
            <div 
              className="h-16 flex items-center"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wide flex items-center transition-colors ${
                  activeMenu === 'services' ? 'text-brand-600 dark:text-brand-400' : 'text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400'
                }`}
              >
                Services
                <ChevronDownIcon className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''}`} strokeWidth={2.5} />
              </button>
              
              <MegaMenu 
                isOpen={activeMenu === 'services'} 
                onMouseEnter={() => handleMouseEnter('services')} 
                onMouseLeave={handleMouseLeave}
                closeMenu={() => setActiveMenu(null)}
              />
            </div>

            {/* Industries Dropdown */}
            <div 
              className="h-16 flex items-center"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wide flex items-center transition-colors ${
                  activeMenu === 'industries' ? 'text-brand-600 dark:text-brand-400' : 'text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400'
                }`}
              >
                Industries
                <ChevronDownIcon className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} strokeWidth={2.5} />
              </button>
              
              <IndustriesMenu 
                isOpen={activeMenu === 'industries'} 
                onMouseEnter={() => handleMouseEnter('industries')} 
                onMouseLeave={handleMouseLeave}
                closeMenu={() => setActiveMenu(null)}
              />
            </div>

            <Link to="/portfolio" className="px-4 py-2 text-sm font-bold uppercase tracking-wide text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              Client Success
            </Link>
            <Link to="/about" className="px-4 py-2 text-sm font-bold uppercase tracking-wide text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              About
            </Link>
            <Link to="/#contact" className="px-4 py-2 text-sm font-bold uppercase tracking-wide text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center text-gray-600 dark:text-gray-400 font-bold text-sm">
              <PhoneIcon className="w-5 h-5 mr-2 text-brand-600" />
              <span>866.908.4748</span>
            </div>

            <a
              href="https://wa.me/8332063638"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 font-bold text-sm hover:text-green-600 dark:hover:text-green-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            
            <Link
              to="/#contact"
              className="btn btn-primary uppercase text-xs tracking-wider px-6 py-3"
            >
              Get My Free Proposal
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-white focus:outline-none z-50"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  );
};

export default Navbar;
