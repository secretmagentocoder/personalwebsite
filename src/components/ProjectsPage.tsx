import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, Award, Filter, Search, Star, Trophy, Zap } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      name: 'Thomsun Music House',
      url: 'https://www.thomsunmusichouse.com/',
      role: 'Magento Architect & Team Lead',
      description: 'Indian eCommerce site for musical instruments',
      details: 'Led the complete architecture and development of a comprehensive music instrument eCommerce platform. Implemented custom product configurators, advanced search functionality, and integrated multiple payment gateways for the Indian market.',
      image: '/thomsunMusicHouse.png',
      category: 'Music & Entertainment',
      year: '2023',
      technologies: ['Magento 2', 'PHP', 'MySQL', 'jQuery', 'REST API'],
      featured: true
    },
    {
      name: 'Aurafoods',
      url: 'https://aurafoods.ie/',
      role: 'Magento Architect & Team Lead',
      description: 'Irish food and grocery store',
      details: 'Architected a robust food and grocery eCommerce platform with complex inventory management, temperature-controlled delivery options, and integrated subscription services for regular customers.',
      image: '/aurafoods.png',
      category: 'Food & Grocery',
      year: '2023',
      technologies: ['Magento 2', 'PHP', 'MySQL', 'JavaScript', 'API Integration'],
      featured: true
    },
    {
      name: 'Sofiqe',
      url: 'https://sofiqe.com/',
      role: 'Magento Architect & Team Lead',
      description: 'UK-based cosmetics eCommerce store',
      details: 'Developed a premium cosmetics eCommerce platform with advanced product filtering, virtual try-on integration, and comprehensive customer review system. Implemented multi-currency support for international sales.',
      image: '/sofiq.webp',
      category: 'Beauty & Cosmetics',
      year: '2022',
      technologies: ['Magento 2', 'PHP', 'MySQL', 'jQuery', 'GraphQL'],
      featured: true
    },
    {
      name: 'Kuberbox',
      url: 'https://www.kuberbox.com/',
      role: 'Magento Developer',
      description: 'Indian jewelry eCommerce site',
      details: 'Created a premium jewelry eCommerce platform with 360-degree product views, custom jewelry configurator, and integrated with Indian payment gateways and logistics providers.',
      image: '/kuberbox.svg',
      category: 'Jewelry & Accessories',
      year: '2021',
      technologies: ['Magento 2', 'PHP', 'MySQL', 'JavaScript'],
      featured: false
    },
    {
      name: 'AskExplorer',
      url: 'https://shop.askexplorer.com/',
      role: 'Magento Developer',
      description: 'Middle East travel publisher selling maps and guides',
      details: 'Developed a specialized eCommerce platform for travel guides and maps with geo-location based recommendations, digital download capabilities, and multi-language support for Middle Eastern markets.',
      image: '/Askexplorer.png',
      category: 'Travel & Tourism',
      year: '2021',
      technologies: ['Magento 2', 'PHP', 'MySQL', 'jQuery'],
      featured: false
    },
    {
      name: 'Ollz',
      url: 'https://www.ollz.com/',
      role: 'Magento Developer',
      description: 'Electronics and gaming products marketplace',
      details: 'Built a comprehensive electronics and gaming marketplace with advanced product comparison, warranty management, and integrated with multiple vendor systems for dropshipping and inventory management.',
      image: '/ollz.svg',
      category: 'Electronics & Gaming',
      year: '2020',
      technologies: ['Magento 2', 'PHP', 'MySQL', 'REST API'],
      featured: false
    },
    {
      name: 'Kalyan Silks',
      url: 'https://kalyansilks.com/',
      role: 'Magento Developer',
      description: 'Traditional Indian textiles and sarees',
      details: 'Developed an elegant eCommerce platform for traditional Indian textiles with custom fabric visualization, size guides, and cultural design elements that resonate with the target audience.',
      image: '/KalyanSilks.webp',
      category: 'Fashion & Textiles',
      year: '2020',
      technologies: ['Magento 2', 'PHP', 'MySQL', 'jQuery'],
      featured: false
    },
    {
      name: 'Anjalifab',
      url: 'https://www.anjalifab.com/',
      role: 'Magento Developer',
      description: 'Fabric manufacturing and wholesale',
      details: 'Built a B2B eCommerce platform for fabric manufacturers with bulk ordering capabilities, custom pricing tiers, and integrated inventory management for wholesale operations.',
      image: '/anjalifab.svg',
      category: 'Manufacturing',
      year: '2019',
      technologies: ['Magento 2', 'PHP', 'MySQL'],
      featured: false
    },
    {
      name: 'Nabdilath Gmart',
      url: 'https://nandilathgmart.com/',
      role: 'Magento Developer',
      description: 'Local grocery and convenience store',
      details: 'Created a local grocery eCommerce platform with real-time inventory tracking, local delivery integration, and customer loyalty programs for repeat customers.',
      image: '/Nabdilath Gmart.svg',
      category: 'Grocery & Retail',
      year: '2019',
      technologies: ['Magento 2', 'PHP', 'MySQL', 'jQuery'],
      featured: false
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A showcase of eCommerce projects I've architected and led across various industries
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '35+', label: 'Total Projects', icon: Trophy, color: 'from-blue-500 to-cyan-500' },
            { number: '9', label: 'Industries', icon: Star, color: 'from-green-500 to-emerald-500' },
            { number: '5', label: 'Countries', icon: Award, color: 'from-purple-500 to-pink-500' },
            { number: '100%', label: 'Success Rate', icon: Zap, color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Search and Filter */}
        <div className="mb-12 animate-fade-in-up animation-delay-700">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="animate-fade-in-up animation-delay-1000">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
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
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Users className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-600">{project.role}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{project.details}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                    {project.role.includes('Lead') && (
                      <div className="flex items-center text-yellow-600">
                        <Award className="h-4 w-4 mr-1" />
                        <span className="text-xs font-medium">Lead</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 animate-fade-in-up animation-delay-1200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies I Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Magento 2', 'PHP', 'MySQL', 'jQuery', 'HTML5/CSS3', 'JavaScript',
              'REST API', 'GraphQL', 'Redis', 'Elasticsearch', 'Docker', 'Git'
            ].map((tech, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-xl text-center font-medium text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-1500">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Let's create something amazing together - from concept to launch
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;