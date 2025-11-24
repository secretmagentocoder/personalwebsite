import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, Award, Filter, Search, Star, Trophy, Zap } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      name: 'Across International',
      url: 'https://www.acrossinternational.com.au/',
      role: 'Developer',
      description: 'B2B price management system for heat treatment equipment',
      details: 'Developed a custom price management system for B2B customers to handle tiered and client-specific pricing efficiently. Enhanced the eCommerce website for an industry leader in heat treatment, laboratory, and material processing equipment.',
      image: 'https://www.acrossinternational.com.au//web/image/website/1/logo/Across%20International?unique=97505b2',
      category: 'B2B & Manufacturing',
      year: '2024',
      technologies: ['Adobe Commerce', 'PHP', 'MySQL', 'Custom Modules'],
      featured: true
    },
    {
      name: 'Thomsun Music House',
      url: 'https://www.thomsunmusichouse.com/',
      role: 'Magento Architect',
      description: 'Complete Magento 2 platform from scratch for musical instruments',
      details: 'Led the development of a Magento 2 eCommerce platform from scratch for an Indian musical instruments store, delivering a fully functional and scalable online solution.',
      image: '/thomsunMusicHouse.png',
      category: 'Music & Entertainment',
      year: '2023',
      technologies: ['Magento 2 OpenSource', 'PHP', 'MySQL', 'jQuery', 'REST API'],
      featured: true
    },
    {
      name: 'JSK Automotive',
      url: '#',
      role: 'Team Lead',
      description: 'Automated purchase order processes for UK automotive store',
      details: 'Automated purchase order processes for a UK automotive online store, reducing manual effort and optimizing backend operations significantly.',
      image: 'https://jskautomotive.com/media/logo/stores/1/jsklogo.png',
      category: 'Automotive',
      year: '2023',
      technologies: ['Magento 2 OpenSource', 'PHP', 'MySQL', 'Automation'],
      featured: true
    },
    {
      name: 'Anjalifab',
      url: 'https://www.anjalifab.com/',
      role: 'Developer',
      description: 'Complete Magento 2 store with ERP and payment integration',
      details: 'Created a Magento 2 eCommerce store from scratch for a dress shop, including theme setup, Razorpay payment integration, ERP integration with reacherp.com, and installation of essential third-party extensions.',
      image: '/anjalifab.svg',
      category: 'Fashion & Retail',
      year: '2023',
      technologies: ['Magento 2 OpenSource', 'PHP', 'Razorpay', 'ERP Integration'],
      featured: true
    },
    {
      name: 'Bahrain Duty Free',
      url: '#',
      role: 'Developer',
      description: 'Custom Cart & Catalog Rule extension for duty-free shopping',
      details: 'Developed a custom Magento extension to enhance and customize the Cart Price Rule and Catalog Rule functionalities, enabling advanced pricing logic not available in default Magento for a leading online duty-free shopping platform.',
      image: 'https://bdutyfree.com/media/logo/stores/1/Bahrain_DutyFree_Logo.png',
      category: 'Retail & E-commerce',
      year: '2023',
      technologies: ['Adobe Commerce', 'PHP', 'Custom Extensions'],
      featured: true
    },
    {
      name: 'Aurafoods',
      url: 'https://aurafoods.ie/',
      role: 'Magento Architect',
      description: 'Complete Magento 2 store for Irish food products',
      details: 'Created a Magento 2 eCommerce store from scratch for Irish food products, including custom features and optimized user experience.',
      image: '/aurafoods.png',
      category: 'Food & Grocery',
      year: '2023',
      technologies: ['Magento 2 OpenSource', 'PHP', 'MySQL', 'JavaScript'],
      featured: true
    },
    {
      name: 'Sofiqe',
      url: 'https://sofiqe.com/',
      role: 'Magento Architect & Team Lead',
      description: 'Premium cosmetics eCommerce platform for UK market',
      details: 'Developed a premium cosmetics eCommerce platform with advanced product filtering, virtual try-on integration, and comprehensive customer review system. Implemented multi-currency support for international sales.',
      image: '/sofiq.webp',
      category: 'Beauty & Cosmetics',
      year: '2022',
      technologies: ['Magento 2', 'PHP', 'MySQL', 'jQuery', 'GraphQL'],
      featured: true
    },
    {
      name: 'Chintha Publications',
      url: 'https://www.chinthapublishers.com/',
      role: 'Developer',
      description: 'Kerala website for selling books with full Malayalam localization',
      details: 'Implemented full Malayalam localization, performed bug fixes, and integrated payment processing for seamless transactions. Complete eCommerce solution for Kerala-based book publisher.',
      image: 'https://www.chinthapublishers.com/pub/media/logo/stores/2/LOGOArtboard_2.png',
      category: 'Publishing',
      year: '2022',
      technologies: ['Magento 2 OpenSource', 'PHP', 'Localization', 'Payment Gateway'],
      featured: true
    },
    {
      name: 'The Six Elements Digital',
      url: 'https://sixelementsdigital.com/',
      role: 'Developer',
      description: 'Laravel project with Microsoft Azure AI integration for UK client',
      details: 'Integrated Microsoft Azure AI services to process and generate intelligent responses based on customer inputs. Laravel-based project for UK client.',
      image: 'https://www.matshore.com/wp-content/uploads/2025/09/6_Elements_Digital_-_Animated_Logo_-_Colour_on_White.gif',
      category: 'Technology',
      year: '2022',
      technologies: ['Laravel', 'PHP', 'Azure AI', 'API Integration'],
      featured: true
    },
    {
      name: 'AskExplorer',
      url: 'https://shop.askexplorer.com/',
      role: 'Developer',
      description: 'Magento 1 to Magento 2 migration with multi-store setup',
      details: 'Migrated a Dubai-based eCommerce website from Magento 1 to Magento 2, implemented a multi-store setup, and integrated PayPal for seamless payments.',
      image: '/Askexplorer.png',
      category: 'Travel & Tourism',
      year: '2021',
      technologies: ['Magento 2 OpenSource', 'Migration', 'Multi-store', 'PayPal'],
      featured: false
    },
    {
      name: 'Upack',
      url: 'https://www.upack.in/',
      role: 'Developer',
      description: 'Custom 3D product pack designer extension',
      details: 'Developed a custom Magento 2 extension for designing 3D product packs, enabling customers to visualize and personalize packaging in real time.',
      image: 'https://www.upack.in/media/logo/websites/1/uPack_Logo.png',
      category: 'E-commerce',
      year: '2021',
      technologies: ['Magento 2 OpenSource', 'PHP', 'Custom Extension', '3D Design'],
      featured: false
    },
    {
      name: 'Videolinks',
      url: 'https://www.videolinks.com/',
      role: 'Developer',
      description: 'Magento upgrade, theme migration, and Algolia search',
      details: 'Upgraded the Magento version, changed and migrated the site to a new theme, and implemented Algolia search for enhanced product discovery and faster search results.',
      image: 'https://www.videolinks.com/media/logo/default/videolinks.png',
      category: 'E-commerce',
      year: '2021',
      technologies: ['Magento 2 OpenSource', 'Theme Migration', 'Algolia', 'Upgrade'],
      featured: false
    },
    {
      name: 'Haditi',
      url: 'https://www.haditi.com/',
      role: 'Developer',
      description: 'Group gifting, gift cards, and custom pages',
      details: 'Implemented group gifting and gift card functionalities, customized the contact form, and created multiple custom pages to enhance the store\'s user experience and engagement.',
      image: 'https://www.haditi.com/media/logo/stores/1/Haditi_logo_opt1.5_1.JPG',
      category: 'E-commerce',
      year: '2021',
      technologies: ['Magento 2 OpenSource', 'PHP', 'Custom Features', 'Gift Cards'],
      featured: false
    },
    {
      name: 'Kuberbox',
      url: 'https://www.kuberbox.com/',
      role: 'Magento Developer',
      description: 'Premium jewelry eCommerce platform',
      details: 'Created a premium jewelry eCommerce platform with 360-degree product views, custom jewelry configurator, and integrated with Indian payment gateways and logistics providers.',
      image: '/kuberbox.svg',
      category: 'Jewelry & Accessories',
      year: '2021',
      technologies: ['Magento 2', 'PHP', 'MySQL', 'JavaScript'],
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
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A comprehensive portfolio showcasing successful eCommerce projects delivered for clients worldwide. From startups to established businesses, I deliver scalable solutions that drive results.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { number: '35+', label: 'Total Projects', icon: Trophy, color: 'from-primary-700 to-primary-800' },
            { number: '9', label: 'Industries', icon: Star, color: 'from-primary-600 to-accent-600' },
            { number: '5', label: 'Countries', icon: Award, color: 'from-accent-500 to-accent-600' },
            { number: '100%', label: 'Success Rate', icon: Zap, color: 'from-primary-700 to-accent-600' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${stat.color} mb-3 md:mb-4`}>
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs md:text-base text-gray-600">{stat.label}</div>
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="h-24 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden relative border-b border-slate-300">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-1.5 right-1.5">
                    <span className="inline-block px-1.5 py-0.5 text-[10px] font-semibold text-white bg-gradient-to-r from-primary-700 to-accent-600 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-gray-500 text-[10px]">
                      <Calendar className="h-2.5 w-2.5 mr-0.5" />
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-1.5">
                    <Users className="h-2.5 w-2.5 text-blue-600 mr-1" />
                    <span className="text-[10px] font-medium text-blue-600">{project.role}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-2 leading-relaxed text-[11px] line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-1 py-0.5 bg-gray-100 text-gray-700 rounded text-[10px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={project.url}
                      target={project.url !== '#' ? '_blank' : undefined}
                      rel={project.url !== '#' ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center px-2.5 py-1 text-[10px] font-medium rounded-md transition-all duration-300 ${
                        project.url !== '#' 
                          ? 'bg-gradient-to-r from-primary-700 to-accent-600 text-white hover:from-primary-800 hover:to-accent-700 transform hover:scale-105' 
                          : 'bg-gray-200 text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      {project.url !== '#' ? (
                        <>
                          View Project
                          <ExternalLink className="h-2.5 w-2.5 ml-1" />
                        </>
                      ) : (
                        'Coming Soon'
                      )}
                    </a>
                    {project.role.includes('Lead') && (
                      <div className="flex items-center text-yellow-600">
                        <Award className="h-2.5 w-2.5 mr-0.5" />
                        <span className="text-[10px] font-medium">Lead</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-xl p-8 animate-fade-in-up animation-delay-1200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies I Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Magento 2', 'PHP', 'MySQL', 'jQuery', 'HTML5/CSS3', 'JavaScript',
              'REST API', 'GraphQL', 'Redis', 'Elasticsearch', 'Docker', 'Git'
            ].map((tech, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-xl text-center font-medium text-gray-800 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:text-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-1500">
          <div className="bg-gradient-to-r from-primary-700 to-accent-600 rounded-2xl shadow-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Looking for a Reliable Developer?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              I'm available for freelance projects and ready to help you build your next eCommerce solution. Let's discuss how I can contribute to your success.
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