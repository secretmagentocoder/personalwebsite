import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, ExternalLink, Award, Users, Code2, Star, Zap, Trophy } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredProjects = [
    {
      name: 'Thomsun Music House',
      url: 'https://www.thomsunmusichouse.com/',
      role: 'Magento Architect & Team Lead',
      description: 'Indian eCommerce site for musical instruments',
      image: '/thomsunMusicHouse.png',
      category: 'Music & Entertainment'
    },
    {
      name: 'Aurafoods',
      url: 'https://aurafoods.ie/',
      role: 'Magento Architect & Team Lead',
      description: 'Irish food and grocery store',
      image: '/aurafoods.png',
      category: 'Food & Grocery'
    },
    {
      name: 'Sofiqe',
      url: 'https://sofiqe.com/',
      role: 'Magento Architect & Team Lead',
      description: 'UK-based cosmetics eCommerce store',
      image: '/sofiq.webp',
      category: 'Beauty & Cosmetics'
    }
  ];

  const services = [
    {
      icon: Code2,
      title: 'Company Websites',
      description: 'Professional corporate websites with modern design',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Portfolio Development',
      description: 'Stunning portfolios that showcase your work',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'eCommerce Solutions',
      description: 'Complete Magento eCommerce platforms',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Custom Development',
      description: 'Tailored web solutions for unique requirements',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  ANAS KP
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-cyan-300 mb-4 animate-fade-in-up animation-delay-500">
                Web Developer & Ecommerce Team Lead
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-1000">
                Specialized in creating stunning websites, portfolios, and eCommerce solutions. 
                With 7+ years of experience, I transform ideas into digital reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1500">
                <Link
                  to="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <Mail className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Let's Work Together
                </Link>
                <Link
                  to="/projects"
                  className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <Trophy className="h-5 w-5 mr-2 group-hover:animate-spin" />
                  View My Work
                </Link>
              </div>
            </div>
            
            {/* Profile Image with Animation */}
            <div className="flex justify-center animate-fade-in-right">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-float">
                  <img 
                    src="/profilre.png" 
                    alt="ANAS KP - Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 shadow-lg animate-bounce">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-4 shadow-lg animate-pulse">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-3 shadow-lg animate-ping">
                  <Star className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '7+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500', icon: Trophy },
              { number: '35+', label: 'Projects Completed', color: 'from-green-500 to-emerald-500', icon: Award },
              { number: '100%', label: 'Client Satisfaction', color: 'from-purple-500 to-pink-500', icon: Star },
              { number: '24/7', label: 'Support Available', color: 'from-orange-500 to-red-500', icon: Zap }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What I Can Build For You
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple portfolios to complex eCommerce platforms, I create digital solutions that drive results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects with Personal Touch */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. Here's what I've built for amazing clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-2">{project.role}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    View Live Site
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View All Projects
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Events Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From conferences to team collaborations, here's my professional story in pictures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                image: '/WhatsApp Image 2025-06-14 at 15.25.02.jpeg', 
                title: 'Award Recognition',
                description: 'Receiving recognition for outstanding performance'
              },
              { 
                image: '/WhatsApp Image 2025-06-14 at 15.25.08.jpeg', 
                title: 'Team Achievement',
                description: 'Celebrating success with the development team'
              },
              { 
                image: '/WhatsApp Image 2025-06-14 at 15.25.18.jpeg', 
                title: 'Conference Speaking',
                description: 'Speaking at Meet Magento 2025 in Pune, India'
              }
            ].map((event, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-200">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10 animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Whether it's a company website, portfolio, or eCommerce platform, 
              let's create something that stands out from the crowd.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Mail className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Start Your Project
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <Users className="h-5 w-5 mr-2 group-hover:animate-spin" />
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;