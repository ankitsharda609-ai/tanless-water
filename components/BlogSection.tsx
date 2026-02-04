
import React from 'react';

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="blog">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
            <img 
              src="https://images.unsplash.com/photo-1585338665814-1596764324d5?auto=format&fit=crop&q=80" 
              alt="Water Pipes" 
              className="relative rounded-3xl shadow-2xl z-10 w-full object-cover h-[500px]"
            />
          </div>
          
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Arkansas Water Safety Guide</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              Why a Tankless Water Heater Flush is <span className="text-orange-500 underline decoration-2 underline-offset-8">Mandatory</span> in Arkansas
            </h2>
            
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                Living in North Little Rock, our water supply contains minerals that, over time, create a "scaling" effect inside the heat exchanger. Without professional descaling, your unit's efficiency will drop by up to 25% in just 18 months.
              </p>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                  <i className="fas fa-microscope text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">The Problem: Scale Buildup</h4>
                  <p className="text-base text-slate-600 mt-1">Minerals crystallize on high-heat copper pipes, creating an insulating layer that forces your unit to burn more gas for less heat.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                  <i className="fas fa-triangle-exclamation text-orange-500"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Warning Signs</h4>
                  <p className="text-base text-slate-600 mt-1">If your unit is showing "Service Soon", restricted flow, or rumbling noises, your heat exchanger is likely nearing a critical failure point.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button className="bg-slate-900 text-white font-bold px-10 py-4 rounded-2xl shadow-xl hover:bg-slate-800 transition-all">
                Read the Full Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
