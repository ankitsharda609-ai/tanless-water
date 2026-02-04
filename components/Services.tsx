
import React from 'react';

const services = [
  {
    title: 'Professional Descaling',
    description: 'Our proprietary solution dissolves 4x more mineral buildup than standard vinegar flushes. Crucial for North Little Rock hard water.',
    icon: 'fa-snowflake',
    color: 'bg-blue-500'
  },
  {
    title: 'Error Code Resolution',
    description: 'Expert diagnostics for recurring fault codes. We look deeper than the simple reset to find the root cause of component failure.',
    icon: 'fa-triangle-exclamation',
    color: 'bg-orange-500'
  },
  {
    title: 'Annual Maintenance',
    description: 'Full inspection of heat exchangers, flame sensors, and venting systems to ensure warranty compliance and safety.',
    icon: 'fa-calendar-check',
    color: 'bg-emerald-500'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-blue-600 uppercase tracking-wide">Our Expertise</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Technical Solutions for Tankless Units</p>
          <div className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">
            Standard plumbers fix leaks; we specialize in the complex thermodynamics of tankless systems.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform`}>
                <i className={`fas ${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="pt-4 border-t border-slate-50">
                <span className="text-blue-600 font-semibold flex items-center">
                  Learn more <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
