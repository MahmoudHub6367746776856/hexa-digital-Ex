
import React from 'react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-8 animate-slideInLeft">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Digital Growth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Redefined.
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Hexa is a full-service digital agency delivering innovative marketing, 
            design, and tech solutions that propel brands into the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={onGetStarted}
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
            >
              Explore Our Services
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all">
              Watch Reel
            </button>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle text-blue-500"></i>
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle text-blue-500"></i>
              <span>Award Winning</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative animate-slideInRight">
          <img
            src="https://picsum.photos/seed/agency1/800/600"
            alt="Hexa Digital Agency Team"
            className="rounded-3xl shadow-2xl z-10 relative"
          />
          <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl shadow-xl z-20 hidden sm:block">
            <p className="text-white text-3xl font-bold">10+</p>
            <p className="text-blue-100 text-sm">Years of Excellence</p>
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-blue-100 rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
