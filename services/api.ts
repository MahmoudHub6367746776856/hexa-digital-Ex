import { Service } from '../types';

const SERVICES_DATA: Service[] = [
  {
    _id: '1',
    title: 'Digital Strategy',
    description: 'Data-driven roadmaps to navigate the complex digital landscape and achieve your business goals.',
    icon: 'fas fa-chess'
  },
  {
    _id: '2',
    title: 'SEO Optimization',
    description: 'Boost your visibility on search engines with our cutting-edge SEO techniques and content strategy.',
    icon: 'fas fa-chart-line'
  },
  {
    _id: '3',
    title: 'Content Marketing',
    description: 'Compelling storytelling that resonates with your audience and drives high-quality engagement.',
    icon: 'fas fa-pen-nib'
  },
  {
    _id: '4',
    title: 'Social Media Management',
    description: 'Comprehensive management of your social profiles to build a loyal community and brand voice.',
    icon: 'fas fa-hashtag'
  },
  {
    _id: '5',
    title: 'PPC Advertising',
    description: 'High-ROI paid campaigns across Google, Meta, and LinkedIn to capture leads instantly.',
    icon: 'fas fa-ad'
  },
  {
    _id: '6',
    title: 'Web Development',
    description: 'Blazing fast, responsive, and conversion-optimized websites built for modern businesses.',
    icon: 'fas fa-code'
  }
];

export const getServices = async (): Promise<Service[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(SERVICES_DATA), 800);
  });
};

export const createService = async (service: Service): Promise<Service> => {
  return new Promise((resolve) => {
    const newService = { 
      ...service, 
      _id: Math.random().toString(36).substr(2, 9) 
    };
    SERVICES_DATA.push(newService);
    setTimeout(() => resolve(newService), 500);
  });
};
