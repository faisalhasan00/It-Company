import { Link } from 'react-router-dom';
import { navbarData } from './navbarData';

function ServicesGrid({ closeMenu }) {
  return (
    <div className="flex-1 p-8 bg-white dark:bg-gray-950">
      <div className="grid grid-cols-4 gap-8">
        {navbarData.services.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex items-center space-x-2 text-brand-600 dark:text-brand-400">
              {section.icon}
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-white">
                {section.category}
              </h4>
            </div>
            <ul className="space-y-2">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <Link 
                    to={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center group"
                    onClick={closeMenu}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-brand-500 mr-2 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesGrid;
