
import React, { useState, useEffect } from 'react';

interface StatCard {
  icon: string;
  label: string;
  value: string;
  color: string;
  description: string;
}

interface ProjectCard {
  id: number;
  name: string;
  client: string;
  category: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  image: string;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<StatCard[]>([]);
  const [projects, setProjects] = useState<ProjectCard[]>([]);
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimateStats(true);

    // Initialize stats
    setStats([
      {
        icon: 'fas fa-briefcase',
        label: 'Active Projects',
        value: '24',
        color: 'from-blue-500 to-blue-600',
        description: 'Currently managing'
      },
      {
        icon: 'fas fa-users',
        label: 'Happy Clients',
        value: '150+',
        color: 'from-green-500 to-green-600',
        description: 'Worldwide'
      },
      {
        icon: 'fas fa-chart-line',
        label: 'Avg ROI Increase',
        value: '245%',
        color: 'from-purple-500 to-purple-600',
        description: 'For our clients'
      },
      {
        icon: 'fas fa-award',
        label: 'Industry Awards',
        value: '18',
        color: 'from-orange-500 to-orange-600',
        description: 'Since 2020'
      }
    ]);

    // Initialize projects
    setProjects([
      {
        id: 1,
        name: 'E-Commerce Revolution',
        client: 'TechStore Inc',
        category: 'Web Development',
        status: 'Completed',
        image: 'fas fa-shopping-cart'
      },
      {
        id: 2,
        name: 'Social Media Campaign',
        client: 'Fashion Forward',
        category: 'Social Media',
        status: 'In Progress',
        image: 'fas fa-hashtag'
      },
      {
        id: 3,
        name: 'SEO Optimization',
        client: 'Global Services Ltd',
        category: 'SEO',
        status: 'Completed',
        image: 'fas fa-chart-line'
      },
      {
        id: 4,
        name: 'Brand Identity Design',
        client: 'Creative Minds Co',
        category: 'Design',
        status: 'Planning',
        image: 'fas fa-palette'
      }
    ]);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Agency Dashboard</h1>
          <p className="text-lg text-gray-600">Track our performance and latest projects</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden ${
                animateStats ? 'animate-fadeIn' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${stat.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <i className={`${stat.icon} text-3xl opacity-80`}></i>
                  <div className="text-4xl font-bold">{stat.value}</div>
                </div>
                <p className="text-sm font-semibold opacity-90">{stat.label}</p>
                <p className="text-xs opacity-75 mt-1">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>
              <p className="text-gray-600 mt-1">Showcasing our latest work</p>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold">
              View All Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 overflow-hidden group"
              >
                {/* Project Image Placeholder */}
                <div className={`h-40 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-5xl group-hover:scale-110 transition-transform`}>
                  <i className={project.image}></i>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{project.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{project.client}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500 uppercase">{project.category}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Metrics */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
            <div className="space-y-6">
              {[
                { label: 'Client Satisfaction', value: 98, color: 'bg-green-500' },
                { label: 'Project Delivery Rate', value: 95, color: 'bg-blue-500' },
                { label: 'Team Productivity', value: 92, color: 'bg-purple-500' }
              ].map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">{metric.label}</span>
                    <span className="font-bold text-gray-900">{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`${metric.color} h-full rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: animateStats ? `${metric.value}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-blue-400">
                <span>Avg Project Duration</span>
                <span className="text-2xl font-bold">6.5 weeks</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-blue-400">
                <span>Team Members</span>
                <span className="text-2xl font-bold">32</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Success Rate</span>
                <span className="text-2xl font-bold">99.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
