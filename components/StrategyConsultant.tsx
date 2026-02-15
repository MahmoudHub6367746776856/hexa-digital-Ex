import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI as AnalyticsEngine } from '@google/genai';

const StrategyConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const getStrategy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError('Please enter your business details or question.');
      return;
    }

    setLoading(true);
    setResponse('');
    setError('');
    
    try {
      const ai = new AnalyticsEngine({ apiKey: import.meta.env.VITE_API_KEY });
      const systemContext = `As a digital marketing strategist, analyze this business scenario: "${prompt}". 
      Provide 3-4 strategic recommendations focusing on practical, actionable steps. 
      Format each recommendation as a clear bullet point.`;
      
      const res = await ai.models.generateContent({
        model: 'strategy-engine-v3',
        contents: systemContext,
        config: {
          temperature: 0.7,
        }
      });
      
      setResponse(res.text || 'Strategy analysis temporarily unavailable. Please try again.');
    } catch (err) {
      console.error('Strategy generation error:', err);
      setError('Unable to generate strategy at this time. Please try again.');
      setResponse('');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current && response) {
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [response]);

  const handleClearResponse = () => {
    setResponse('');
    setPrompt('');
    setError('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-800/50 backdrop-blur-xl border border-blue-400/20 rounded-[3rem] p-8 lg:p-12 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 text-center md:text-left space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-lg animate-pulse">
              <i className="fas fa-robot text-4xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold text-white">Strategy Agent</h3>
            <p className="text-blue-200">
              Get instant marketing strategy insights powered by advanced analytics. 
              Share your business goals for tailored recommendations.
            </p>
            <div className="pt-4 space-y-2 text-sm text-blue-300">
              <div className="flex items-center space-x-2">
                <i className="fas fa-check-circle text-green-400"></i>
                <span>Instant Strategic Insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-check-circle text-green-400"></i>
                <span>Data-Driven Recommendations</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-check-circle text-green-400"></i>
                <span>Actionable Next Steps</span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 w-full">
            <form onSubmit={getStrategy} className="space-y-4">
              <textarea
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Describe your business and goals (e.g., 'Sustainable fashion brand targeting millennials on social media')"
                className="w-full bg-blue-900/50 border border-blue-500/30 rounded-2xl p-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none h-32"
                disabled={loading}
              ></textarea>
              
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 flex items-center space-x-2 text-red-200">
                  <i className="fas fa-exclamation-circle"></i>
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !prompt.trim()}
                className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 transition-all ${
                  loading || !prompt.trim()
                    ? 'bg-blue-700 cursor-not-allowed opacity-50'
                    : 'bg-blue-500 hover:bg-blue-400 shadow-xl active:scale-95'
                }`}
              >
                {loading ? (
                  <>
                    <i className="fas fa-circle-notch animate-spin"></i>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-sparkles mr-2 text-yellow-300"></i>
                    <span>Generate Strategy</span>
                  </>
                )}
              </button>
            </form>

            {response && (
              <div className="mt-8 p-6 bg-white/10 border border-white/10 rounded-2xl animate-fadeIn" ref={scrollRef}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-blue-300 font-bold uppercase tracking-wider text-xs flex items-center space-x-2">
                    <i className="fas fa-lightbulb text-yellow-300"></i>
                    <span>Strategic Recommendations:</span>
                  </h4>
                  <button
                    onClick={handleClearResponse}
                    className="text-blue-300 hover:text-white transition-colors"
                    title="Clear"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                
                <div className="prose prose-invert prose-blue max-w-none text-blue-50 whitespace-pre-wrap mb-6">
                  {response}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  <button className="bg-blue-600/50 hover:bg-blue-600 text-white py-2 rounded-lg transition-all text-sm font-semibold flex items-center justify-center space-x-2">
                    <i className="fas fa-phone"></i>
                    <span>Book a Call</span>
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition-all text-sm font-semibold flex items-center justify-center space-x-2">
                    <i className="fas fa-download"></i>
                    <span>Save Strategy</span>
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs text-blue-300">
                  <span className="flex items-center space-x-1">
                    <i className="fas fa-chart-line"></i>
                    <span>Powered by Advanced Analytics</span>
                  </span>
                  <span className="text-blue-400">Analysis complete</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default StrategyConsultant;
