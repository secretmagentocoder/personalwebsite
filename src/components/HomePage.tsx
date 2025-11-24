import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, ExternalLink, Award, Code2, Briefcase, Zap, Trophy, CheckCircle, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';

const HomePage: React.FC = () => {
  const { openModal } = useContactModal();

  const featuredProjects = [
    {
      name: 'Thomsun Music House',
      url: 'https://www.thomsunmusichouse.com/',
      role: 'Magento Architect',
      description: 'Complete Magento 2 platform built from scratch for Indian musical instruments store',
      image: '/thomsunMusicHouse.png',
      category: 'Music & Entertainment'
    },
    {
      name: 'Aurafoods',
      url: 'https://aurafoods.ie/',
      role: 'Magento Architect',
      description: 'Complete Magento 2 store with custom features for Irish food products',
      image: '/aurafoods.png',
      category: 'Food & Grocery'
    },
    {
      name: 'Anjalifab',
      url: 'https://www.anjalifab.com/',
      role: 'Developer',
      description: 'Full store setup with Razorpay, ERP integration, and theme customization',
      image: '/anjalifab.svg',
      category: 'Fashion & Retail'
    },
    {
      name: 'Sofiqe',
      url: 'https://sofiqe.com/',
      role: 'Magento Architect & Team Lead',
      description: 'Premium cosmetics eCommerce platform with advanced features for UK market',
      image: '/sofiq.webp',
      category: 'Beauty & Cosmetics'
    },
    {
      name: 'The Six Elements Digital',
      url: 'https://sixelementsdigital.com/',
      role: 'Developer',
      description: 'Laravel project with Microsoft Azure AI integration for UK client',
      image: 'https://www.matshore.com/wp-content/uploads/2025/09/6_Elements_Digital_-_Animated_Logo_-_Colour_on_White.gif',
      category: 'Technology'
    },
    {
      name: 'Chintha Publications',
      url: 'https://www.chinthapublishers.com/',
      role: 'Developer',
      description: 'Kerala website for selling books with full Malayalam localization',
      image: 'https://www.chinthapublishers.com/pub/media/logo/stores/2/LOGOArtboard_2.png',
      category: 'Publishing'
    },
  ];

  const services = [
    {
      icon: Briefcase,
      title: 'Business Websites',
      description: 'Scalable business websites built with modern technologies and best practices',
      color: 'from-primary-600 to-primary-800'
    },
    {
      icon: Code2,
      title: 'Portfolio Development',
      description: 'Professional portfolios that effectively showcase your work and achievements',
      color: 'from-primary-600 to-accent-600'
    },
    {
      icon: Award,
      title: 'eCommerce Solutions',
      description: 'Complete Magento 2 eCommerce platforms with custom modules and integrations',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Zap,
      title: 'Custom Development',
      description: 'Tailored solutions designed to meet your unique business requirements',
      color: 'from-primary-700 to-accent-600'
    }
  ];

  const achievements = [
    { number: '8+', label: 'Years Experience', icon: Trophy },
    { number: '35+', label: 'Projects Delivered', icon: Briefcase },
    { number: '100%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: CheckCircle }
  ];

  const testimonials = [
    {
      name: 'Jees',
      role: 'MD',
      company: 'Thomsun Music House',
      image: '/thomsunMusicHouse.png',
      text: 'Anas delivered a complete Magento 2 platform from scratch that exceeded our expectations. His technical expertise and attention to detail helped us launch our online store successfully. Highly professional and reliable developer.',
      rating: 5
    },
    {
      name: 'Praveen',
      role: 'CEO',
      company: 'Sigosoft Technologies',
      image: '/Praveen.avif',
      text: 'Anas started his career with us and quickly proved to be an exceptional developer. His dedication to learning and delivering quality work made him stand out. He has grown tremendously since then and continues to excel in his field.',
      rating: 5
    },
    {
      name: 'Sarah O\'Brien',
      role: 'Project Manager',
      company: 'Aurafoods',
      image: '/aurafoods.png',
      text: 'Working with Anas was a pleasure. He built our complete eCommerce store with custom features that perfectly matched our requirements. His communication was excellent throughout the project, and he delivered on time.',
      rating: 5
    },
    {
      name: 'KC Jagadeep',
      role: 'CEO',
      company: 'Ceymox Technologies',
      image: '/kc.webp',
      text: 'Anas has been an outstanding team member at Ceymox. His expertise in Magento development and leadership skills have contributed significantly to our success. He consistently delivers high-quality solutions and manages projects effectively.',
      rating: 5
    },
    {
      name: 'James Mitchell',
      role: 'CEO',
      company: 'Sofiqe',
      image: '/sofiq.webp',
      text: 'Anas led our Magento 2 project as Architect and Team Lead, delivering a premium cosmetics platform for the UK market. His leadership skills and technical knowledge were instrumental in our success. Outstanding work!',
      rating: 5
    },
    {
      name: 'Santhosh.P',
      role: 'CTO',
      company: 'Ceymox Technologies',
      image: '/santhosh.jpg',
      text: 'Working with Anas has been a great experience. His technical depth in Magento 2 and PHP, combined with his problem-solving abilities, makes him a valuable asset. He understands complex requirements and delivers scalable solutions.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Managing Director',
      company: 'Anjalifab',
      image: '/anjalifab.svg',
      text: 'Anas set up our complete Magento 2 store with Razorpay integration and ERP connectivity. His expertise in payment gateways and third-party integrations made the entire process smooth. We\'re very satisfied with the results.',
      rating: 5
    },
    {
      name: 'Sulekh.L',
      role: 'SBU Head, Ecommerce Department',
      company: 'Emvigo Technologies',
      image: '/sulekh.webp',
      text: 'Anas is an excellent team lead and developer. His ability to architect complex eCommerce solutions and guide the team through challenging projects is impressive. He combines technical excellence with strong leadership qualities.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Project Manager',
      company: 'Across International',
      image: 'https://www.acrossinternational.com.au//web/image/website/1/logo/Across%20International?unique=97505b2',
      text: 'Anas developed a custom B2B price management system that streamlined our operations significantly. His understanding of complex business requirements and ability to deliver scalable solutions is impressive.',
      rating: 5
    },
    {
      name: 'Anoop EP',
      role: 'CTO',
      company: 'Emvigo Technologies',
      image: '/anoop.webp',
      text: 'Anas has been instrumental in our eCommerce team\'s success. His expertise in Magento 2 architecture and custom development has helped us deliver exceptional solutions to our clients. A true professional and technical leader.',
      rating: 5
    },
    {
      name: 'Ahmed Al-Mansoori',
      role: 'Project Manager',
      company: 'Bahrain Duty Free',
      image: 'https://bdutyfree.com/media/logo/stores/1/Bahrain_DutyFree_Logo.png',
      text: 'The custom Cart & Catalog Rule extension developed by Anas added advanced pricing logic that wasn\'t available in default Magento. His problem-solving skills and technical expertise helped us achieve our business goals.',
      rating: 5
    },
    {
      name: 'Michael Johnson',
      role: 'Managing Director',
      company: 'JSK Automotive',
      image: 'https://jskautomotive.com/media/logo/stores/1/jsklogo.png',
      text: 'Anas automated our purchase order processes, reducing manual effort significantly. As Team Lead, he managed the project efficiently and delivered results that improved our backend operations. Highly recommended!',
      rating: 5
    },
    {
      name: 'Ramesh Nair',
      role: 'Managing Director',
      company: 'Chintha Publications',
      image: 'https://www.chinthapublishers.com/pub/media/logo/stores/2/LOGOArtboard_2.png',
      text: 'Anas implemented full Malayalam localization for our book selling website. His attention to detail and understanding of regional requirements helped us serve our customers better. Excellent work!',
      rating: 5
    },
    {
      name: 'Emma Williams',
      role: 'Project Manager',
      company: 'The Six Elements Digital',
      image: 'https://www.matshore.com/wp-content/uploads/2025/09/6_Elements_Digital_-_Animated_Logo_-_Colour_on_White.gif',
      text: 'Anas integrated Microsoft Azure AI services into our Laravel project, enabling intelligent customer responses. His technical skills and innovative approach helped us enhance our platform\'s capabilities.',
      rating: 5
    }
  ];

  const professionalSkills = [
    'Magento Development and Customisation',
    'Project Planning & Leadership',
    'Custom Module Development',
    'Backend & DB Management',
    'API & Third Party Integration',
    'Magento Upgrade and Migration',
    'Frontend Development',
    'Client Communication & Requirements Analysis',
    'Agile/Scrum Project Management',
    'Code Review & Quality Assurance',
    'Performance Optimization',
    'Security Implementation',
    'Payment Gateway Integration',
    'ERP System Integration',
    'Multi-store Setup & Configuration',
    'Theme Customization & Development',
    'Bug Fixing & Troubleshooting',
    'Documentation & Knowledge Transfer',
    'Remote Team Collaboration',
    'Timeline & Budget Management',
    'Technical Consulting',
    'Post-launch Support & Maintenance'
  ];

  return (
    <div className="overflow-hidden">
      {/* Ultra Professional Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-[90vh] flex items-center overflow-hidden pt-16 lg:pt-20">
        {/* Subtle Background Image - Ultra Diluted */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full opacity-[0.08]">
            <img
              src="/profile_image.jpeg"
              alt="ANAS KP"
              className="w-full h-full object-cover object-center"
              style={{ filter: 'blur(40px) brightness(0.8)' }}
            />
          </div>
          {/* Professional Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>

        {/* Subtle Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-700 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-800 rounded-full filter blur-[120px]"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 lg:pt-12 pb-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - Takes 7 columns */}
            <div className="lg:col-span-7 text-white space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-700/20 border border-primary-600/30 rounded-full backdrop-blur-sm">
                <Award className="h-4 w-4 text-primary-300" />
                <span className="text-sm font-medium text-primary-200 tracking-wide">Adobe Certified Professional</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="block text-white">PHP/Magento2</span>
                  <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-primary-400 bg-clip-text text-transparent">
                    Developer & Team Lead
                  </span>
                </h1>

                <div className="flex items-center gap-4 pt-2">
                  <div className="h-px w-16 bg-gradient-to-r from-primary-400 to-transparent"></div>
                  <p className="text-2xl md:text-3xl text-slate-300 font-light tracking-wide">
                    ANAS KP
                  </p>
                </div>
              </div>

              {/* Description - Refined */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light tracking-wide">
                I am a web developer specialized in Magento 2, delivering high-quality eCommerce solutions and modern websites, and transforming complex requirements into scalable, high-performance digital platforms that drive measurable growth.
              </p>

              {/* Key Highlights - Refined */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2">
                <div className="flex items-center gap-3 text-slate-300 group/item">
                  <div className="w-2 h-2 rounded-full bg-accent-400 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-sm font-medium tracking-wide">8+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 group/item">
                  <div className="w-2 h-2 rounded-full bg-accent-400 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-sm font-medium tracking-wide">35+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 group/item">
                  <div className="w-2 h-2 rounded-full bg-accent-400 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-sm font-medium tracking-wide">Scalable Solutions</span>
                </div>
              </div>

              {/* CTA Buttons - Refined */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button
                  onClick={openModal}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-700 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-0.5"
                >
                  <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start a Project
                </button>
                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  View Portfolio
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Side - Profile Image with Professional Treatment - Takes 5 columns */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Image Container with Professional Frame */}
                <div className="relative group">
                  {/* Decorative Corner Elements - More Subtle */}
                  <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-12 h-12 md:w-20 md:h-20 border-t-2 border-l-2 border-primary-600/30 rounded-tl-lg"></div>
                  <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 border-b-2 border-r-2 border-primary-600/30 rounded-br-lg"></div>

                  {/* Main Image with Refined Styling */}
                  <div className="relative overflow-hidden rounded-xl shadow-2xl border border-white/10">
                    <div className="aspect-[4/5] relative">
                      <img
                        src="/profile_image.jpeg"
                        alt="ANAS KP - Senior Magento Developer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Refined Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary-900/10"></div>
                    </div>

                    {/* Certification Badge - Refined Positioning */}
                    <div className="absolute -bottom-2 -right-2 md:-bottom-5 md:-right-5 bg-gradient-to-br from-accent-500 via-accent-600 to-primary-700 rounded-lg md:rounded-xl p-2 md:p-3 shadow-2xl border-2 md:border-4 border-slate-900 transform group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-5 w-5 md:h-7 md:w-7 text-white" />
                    </div>
                  </div>

                  {/* Professional Accent Line - Refined */}
                  <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-accent-500/60 to-transparent"></div>

                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Stats Section */}
      <section className="py-12 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {achievements.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg md:rounded-xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-slate-900 mb-1 md:mb-2">{stat.number}</div>
                  <div className="text-xs md:text-base text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Skills Section */}
      <section className="py-12 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
              Professional Skills
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Core competencies and expertise areas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto">
            {professionalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 group"
              >
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary-700 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base text-slate-800 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
              Services & Expertise
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Comprehensive web development services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">Featured Projects</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Successful eCommerce solutions delivered for clients worldwide - from startups to established businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 transform hover:-translate-y-2"
              >
                <div className="h-24 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden relative border-b border-slate-300">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-1.5 right-1.5">
                    <span className="inline-block px-1.5 py-0.5 text-[10px] font-semibold text-white bg-gradient-to-r from-primary-700 to-accent-600 rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-base font-bold text-slate-900 mb-0.5 group-hover:text-primary-700 transition-colors line-clamp-1">
                    {project.name}
                  </h3>
                  <p className="text-[10px] text-primary-700 font-semibold mb-1.5">{project.role}</p>
                  <p className="text-slate-600 mb-2.5 leading-relaxed text-[11px] line-clamp-2">{project.description}</p>
                  <a
                    href={project.url}
                    target={project.url !== '#' ? '_blank' : undefined}
                    rel={project.url !== '#' ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center px-2.5 py-1 text-[10px] font-medium rounded-md transition-all duration-300 ${project.url !== '#'
                        ? 'bg-gradient-to-r from-primary-700 to-accent-600 text-white hover:from-primary-800 hover:to-accent-700'
                        : 'bg-slate-200 text-slate-600 cursor-not-allowed'
                      }`}
                  >
                    {project.url !== '#' ? (
                      <>
                        Visit Website
                        <ExternalLink className="h-2.5 w-2.5 ml-1" />
                      </>
                    ) : (
                      'Coming Soon'
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-700 to-accent-600 text-white font-semibold rounded-lg hover:from-primary-800 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Projects
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSlider testimonials={testimonials} />

      {/* Professional Journey Gallery */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
              Professional Journey
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Recognition, achievements, and participation in industry-leading events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                image: '/WhatsApp Image 2025-06-14 at 15.25.01.jpeg',
                title: 'Award Recognition',
                description: 'Outstanding performance recognition from Ceymox, India'
              },
              {
                image: '/WhatsApp Image 2025-06-14 at 15.25.02 (1).jpeg',
                title: 'Best Employee of the Year',
                description: 'Excellence award from Ceymox, India'
              },
              {
                image: '/DSC08053.JPG',
                title: 'Award Night - Kochi',
                description: 'Emvigo Half Yearly Awards Program, Kochi'
              },
              {
                image: '/WhatsApp Image 2025-06-14 at 15.27.39.jpeg',
                title: 'Meet Magento India',
                description: 'Speaking at Meet Magento India, Pune'
              },
              {
                image: '/WhatsApp Image 2021-12-24 at 11.16.57 PM (1).jpeg',
                title: 'Ceymox Awards',
                description: 'Ceymox Award Program, Kochi'
              },
              {
                image: '/WhatsApp Image 2025-06-14 at 15.25.18.jpeg',
                title: 'Magento Event',
                description: 'Participated in Magento Event, Gujarat, India'
              },
              {
                image: '/meetmagento2024.png',
                title: 'Meet Magento 2024',
                description: 'Participated in Meet Magento 2024, Ahmedabad'
              },
              {
                image: '/WhatsApp Image 2025-06-14 at 15.25.19.jpeg',
                title: 'Meet Magento 2025',
                description: 'Participated in Meet Magento 2025, Pune'
              },
              {
                image: '/FB_IMG_1749894721770.jpg',
                title: 'Meet Magento Pune',
                description: 'Meet Magento 2025 participation, Pune'
              }
            ].slice(0, 3).map((event, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              >
                <div className="h-64 bg-slate-200 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-slate-200">{event.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{event.title}</h3>
                  <p className="text-sm text-slate-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Link */}
          <div className="text-center mt-8">
            <Link
              to="/about#professional-achievements"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-700 to-accent-600 text-white font-semibold rounded-lg hover:from-primary-800 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View More in Professional Journey
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-primary-800 via-primary-700 to-accent-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 md:mb-10 max-w-3xl mx-auto px-4">
            Let's discuss how I can help you build a scalable, high-performance eCommerce solution
            that drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm md:text-base"
            >
              <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Get Started Today
            </button>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Testimonials Slider Component
interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

const TestimonialsSlider: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-700 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-700 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            What clients and colleagues say about working with me
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-8 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600"></div>

            {/* Quote Icon */}
            <div className="absolute top-3 right-3 md:top-6 md:right-6 opacity-20">
              <Quote className="h-10 w-10 md:h-16 md:w-16 text-white" />
            </div>

            <div className="relative">
              {/* Testimonial Content */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-200 rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg flex items-center justify-center border border-slate-300/50">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-3 md:mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed mb-4 md:mb-6 italic px-2 md:px-0">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm md:text-base text-slate-300">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 text-white transition-all duration-300 hover:scale-110 border border-white/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 text-white transition-all duration-300 hover:scale-110 border border-white/20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'w-6 md:w-8 bg-primary-500'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid (Small Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer ${index === currentIndex % 3 ? 'ring-2 ring-primary-500' : ''
                }`}
              onClick={() => goToSlide(index)}
            >
              <div className="flex items-center gap-1 mb-2 md:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-200 rounded-lg p-1 md:p-1.5 flex items-center justify-center border border-slate-300/50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-xs md:text-sm">{testimonial.name}</p>
                  <p className="text-slate-400 text-[10px] md:text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
