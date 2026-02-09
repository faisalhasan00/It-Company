import { useRef } from 'react';
import PromoPanel from './PromoPanel';
import ServicesGrid from './ServicesGrid';

function MegaMenu({ isOpen, onMouseEnter, onMouseLeave, closeMenu }) {
  const menuRef = useRef(null);

  return (
    <div
      ref={menuRef}
      className={`absolute left-0 w-full bg-white dark:bg-gray-950 shadow-2xl border-t border-gray-100 dark:border-gray-800 transition-all duration-300 ease-out origin-top z-40 ${
        isOpen 
          ? 'opacity-100 translate-y-0 visible' 
          : 'opacity-0 -translate-y-2 invisible pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ top: '100%' }}
    >
      <div className="max-w-7xl mx-auto flex">
        <PromoPanel />
        <ServicesGrid closeMenu={closeMenu} />
      </div>
    </div>
  );
}

export default MegaMenu;
