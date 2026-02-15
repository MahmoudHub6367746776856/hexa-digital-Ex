
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/seed/office1/400/500" className="rounded-2xl shadow-lg mt-12" alt="Office 1" />
          <img src="https://picsum.photos/seed/office2/400/500" className="rounded-2xl shadow-lg" alt="Office 2" />
        </div>
        
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider">
            Our Story
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            We Help Brands Craft Meaningful Digital Experiences
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Born from a passion for pixels and performance, Hexa has grown from a boutique design shop into a global digital powerhouse. We believe that every digital touchpoint is an opportunity to build trust and drive value.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <i className="fas fa-bullseye text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Mission-Driven</h4>
                <p className="text-gray-600">Our success is measured by the growth of our partners.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Innovative Thinking</h4>
                <p className="text-gray-600">We push the boundaries of what's possible with tech and creativity.</p>
              </div>
            </div>
          </div>
          <button className="mt-4 text-blue-600 font-bold hover:underline">
            Meet the leadership team <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
