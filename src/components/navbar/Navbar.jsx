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

            <Link to="/#portfolio" className="px-4 py-2 text-sm font-bold uppercase tracking-wide text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              Client Success
            </Link>
            <Link to="/#about" className="px-4 py-2 text-sm font-bold uppercase tracking-wide text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
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
