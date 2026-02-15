
import React, { useEffect, useState } from 'react';
import { getServices } from '../services/api';
import { Service } from '../types';

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        setError('Failed to load services. Please check your connection.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold text-gray-900">Expertise That Matters</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From ideation to execution, we offer a full suite of digital marketing and tech solutions.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-500 font-medium">Loading our services...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 text-red-600 p-6 rounded-2xl text-center border border-red-100">
          <i className="fas fa-exclamation-circle text-3xl mb-3"></i>
          <p className="font-bold">{error}</p>
        </div>
      ) : (
        <div className="services-grid" id="services-container">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <i className={`${service.icon} text-3xl text-blue-600 group-hover:text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
