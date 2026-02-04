
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1581094288338-2314dddb7dee?auto=format&fit=crop&q=80"
        alt="Water Heater Professional"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-30"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-0">
          <div className="flex items-center space-x-2 text-orange-400 font-bold mb-6">
            <span className="bg-orange-500/10 px-3 py-1 rounded-full text-sm border border-orange-500/20">
              <i className="fas fa-shield-check mr-2"></i> North Little Rock's Trusted Experts
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-tight">
            Protect Your <span className="text-blue-400">Tankless Investment</span> with Expert Service
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Specializing in professional descaling, annual flush services, and secondary error code resolution. We restore efficiency and extend the life of your high-efficiency unit.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8443406413"
              className="rounded-xl bg-orange-500 px-8 py-4 text-center text-lg font-bold text-white shadow-lg hover:bg-orange-400 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              Book Your Flush Today
            </a>
            <div className="flex items-center justify-center sm:justify-start space-x-4 text-white font-medium">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-900" src={`https://picsum.photos/seed/${i+10}/100/100`} alt="customer" />
                ))}
              </div>
              <span className="text-sm text-slate-400 italic">Trusted by 500+ local homeowners</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </div>
  );
};

export default Hero;
