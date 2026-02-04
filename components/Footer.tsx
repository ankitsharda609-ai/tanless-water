
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <i className="fas fa-faucet-drip text-white"></i>
                </div>
                <span className="font-extrabold text-xl tracking-tight">
                  TANKLESS <span className="text-orange-500">FLUSH</span>
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                North Little Rock's specialized technicians for high-efficiency water heating systems.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <i className="fab fa-google"></i>
                </a>
              </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Emergency Repair</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Maintenance Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Location</h4>
            <div className="text-slate-400 space-y-4">
              <div className="flex items-start">
                <i className="fas fa-location-dot mt-1 mr-3 text-orange-500"></i>
                <span>400 Main St<br />North Little Rock, AR 72114</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock mr-3 text-emerald-500"></i>
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">24/7 Support</h4>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Primary Service Line</p>
              <a href="tel:8443406413" className="text-2xl font-black text-orange-500 hover:text-orange-400 transition-colors block">
                (844) 340-6413
              </a>
              <p className="text-xs text-slate-500 mt-4 leading-snug uppercase tracking-widest">
                Fast response for all error codes
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
          <p>© 2024 Tankless Water Heater Flush Professionals Arkansas. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
