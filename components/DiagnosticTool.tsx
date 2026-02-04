
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const DiagnosticTool: React.FC = () => {
  const [errorCode, setErrorCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState<string | null>(null);

  const diagnose = async () => {
    if (!errorCode.trim()) return;
    setLoading(true);
    setDiagnosis(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I have a tankless water heater displaying error code: ${errorCode}. Provide a brief technical explanation of what this means and why a professional flush might be needed. Mention that for homeowners in North Little Rock, mineral scale is a primary trigger for these codes.`,
        config: {
          systemInstruction: "You are a professional tankless water heater technician from Tankless Flush Arkansas. Be helpful, professional, and explain the urgency of technical maintenance.",
          temperature: 0.7,
        }
      });
      setDiagnosis(response.text);
    } catch (error) {
      console.error(error);
      setDiagnosis("Sorry, we couldn't process your request. Please call us at (844) 340-6413 for immediate expert help.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="bg-orange-100 p-4 rounded-2xl">
              <i className="fas fa-microchip text-4xl text-orange-600"></i>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">AI Diagnostic Assistant</h2>
              <p className="text-slate-600 mt-1">Input your error code to understand the technical root cause.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="e.g., Code 11, 12, or 'Maintenance Required'"
                className="flex-grow border-2 border-slate-100 rounded-2xl px-6 py-4 text-lg focus:border-blue-500 outline-none transition-colors"
                value={errorCode}
                onChange={(e) => setErrorCode(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && diagnose()}
              />
              <button
                onClick={diagnose}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center min-w-[140px]"
              >
                {loading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Diagnose'}
              </button>
            </div>

            {diagnosis && (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mt-6 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600"><i className="fas fa-info-circle text-xl"></i></div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {diagnosis}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm font-bold text-orange-600 uppercase tracking-wider">
                    Ready to fix it?
                  </p>
                  <a href="tel:8443406413" className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-orange-600 transition-colors">
                    Call for Service
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticTool;
