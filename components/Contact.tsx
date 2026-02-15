import React, { useState } from 'react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formState.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setFormState({ name: '', email: '', message: '' });
      setErrors({});

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Let's Build Something Together</h2>
            <p className="text-xl text-gray-600">
              Ready to take your digital presence to the next level? Reach out today for a free consultation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <i className="fas fa-map-marker-alt text-xl"></i>
              </div>
              <div>
                <p className="font-bold text-gray-900">Our Studio</p>
                <p className="text-gray-600">123 Digital Ave, Tech City, TC 10101</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <i className="fas fa-phone-alt text-xl"></i>
              </div>
              <div>
                <p className="font-bold text-gray-900">Phone</p>
                <p className="text-gray-600">+1 (555) HEXA-DIGI</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <p className="font-bold text-gray-900">Email</p>
                <p className="text-gray-600">hello@hexadigital.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 lg:p-12 rounded-[2rem] shadow-sm border border-gray-100">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-bounce">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                <i className="fas fa-check-circle text-6xl text-green-500 relative"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Message Received!</h3>
              <p className="text-gray-600">Our team will get back to you within 24 hours.</p>
              <div className="pt-4">
                <p className="text-sm text-gray-500">Redirecting in a moment...</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className={`w-full bg-white border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-200 focus:ring-blue-500'
                    }`}
                    placeholder="John Doe"
                    disabled={isLoading}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 flex items-center space-x-1">
                      <i className="fas fa-exclamation-circle"></i>
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className={`w-full bg-white border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-200 focus:ring-blue-500'
                    }`}
                    placeholder="john@example.com"
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 flex items-center space-x-1">
                      <i className="fas fa-exclamation-circle"></i>
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  className={`w-full bg-white border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 focus:ring-blue-500'
                  }`}
                  placeholder="Tell us about your project..."
                  disabled={isLoading}
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-500 flex items-center space-x-1">
                    <i className="fas fa-exclamation-circle"></i>
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg active:scale-[0.98] flex items-center justify-center space-x-2 ${
                  isLoading
                    ? 'bg-blue-400 text-white cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-circle-notch animate-spin"></i>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
