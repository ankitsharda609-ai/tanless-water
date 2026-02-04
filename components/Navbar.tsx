
import React, { useState } from 'react';

interface NavbarProps {
  activeTab: 'home' | 'services' | 'faq' | 'blog';
  setActiveTab: (tab: 'home' | 'services' | 'faq' | 'blog') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'faq', label: 'FAQs' },
    { id: 'blog', label: 'Maintenance Guide' },
  ] as const;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }}
          >
            <div className="bg-blue-900 p-2 rounded-lg mr-3">
              <i className="fas fa-faucet-drip text-white text-xl"></i>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-blue-900">
              TANKLESS FLUSH <span className="text-orange-500">ARKANSAS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-semibold transition-colors ${
                  activeTab === item.id ? 'text-blue-700' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="tel:8443406413" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md transition-all flex items-center"
            >
              <i className="fas fa-phone mr-2"></i> (844) 340-6413
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 p-2"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 text-base font-medium rounded-md ${
                  activeTab === item.id ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-3">
              <a 
                href="tel:8443406413" 
                className="w-full bg-orange-500 text-white px-4 py-4 rounded-xl text-center block font-bold text-lg shadow-md"
              >
                <i className="fas fa-phone mr-2"></i> Call (844) 340-6413
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
