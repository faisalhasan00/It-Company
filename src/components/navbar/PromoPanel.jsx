import { Link } from 'react-router-dom';

function PromoPanel() {
  return (
    <div className="w-[300px] flex-shrink-0 bg-gray-900 p-8 flex flex-col justify-between text-white">
      <div>
        <h3 className="text-2xl font-bold mb-4 leading-tight">
          Experience Real Results.
        </h3>
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          Partner with a team that focuses on what matters most: growing your business through reliable technology and proven marketing strategies.
        </p>
        
        <div className="flex -space-x-3 mb-6">
          <img className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff" alt="Client" />
          <img className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://ui-avatars.com/api/?name=Sarah+Smith&background=34D399&color=fff" alt="Client" />
          <img className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://ui-avatars.com/api/?name=Mike+Jones&background=F59E0B&color=fff" alt="Client" />
          <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-700 flex items-center justify-center text-xs font-bold">
            +500
          </div>
        </div>
      </div>

      <div>
        <Link 
          to="/#contact" 
          className="block w-full py-3 px-4 bg-brand-600 hover:bg-brand-500 text-white text-center font-bold rounded transition-colors text-sm"
        >
          Get My Free Proposal
        </Link>
        <p className="text-center text-xs text-gray-500 mt-3">
          No obligation. 100% confidential.
        </p>
      </div>
    </div>
  );
}

export default PromoPanel;
