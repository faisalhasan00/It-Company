import { Link } from 'react-router-dom';
import { navbarData } from './navbarData';

function IndustriesMenu({ isOpen, onMouseEnter, onMouseLeave, closeMenu }) {
  return (
    <div
      className={`absolute left-0 w-full bg-white dark:bg-gray-950 shadow-2xl border-t border-gray-100 dark:border-gray-800 transition-all duration-300 ease-out origin-top z-40 ${
        isOpen 
          ? 'opacity-100 translate-y-0 visible' 
          : 'opacity-0 -translate-y-2 invisible pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ top: '100%' }}
    >
      <div className="max-w-7xl mx-auto py-10 px-8">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">
          Industries We Serve
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {navbarData.industries.map((industry, index) => (
            <Link
              key={index}
              to={industry.href}
              className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-all group text-center"
              onClick={closeMenu}
            >
              <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400">
                {industry.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IndustriesMenu;
