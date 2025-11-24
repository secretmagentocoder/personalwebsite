import React from 'react';
import { Award, Globe, Languages, MapPin, Calendar, CheckCircle, Camera, Users, Trophy, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const tools = [
    'Git', 'VS Code', 'Jira', 'Postman', 'phpMyAdmin', 'Docker', 'Composer', 'npm/yarn'
  ];

  const languages = [
    { name: 'English', level: 'Professional' },
    { name: 'Malayalam', level: 'Native' },
    { name: 'Arabic', level: 'Conversational' }
  ];

  const achievements = [
    { 
      image: '/WhatsApp Image 2025-06-14 at 15.25.01.jpeg', 
      title: 'Award Recognition',
      description: 'Receiving recognition for outstanding performance from Ceymox, India',
      year: '2025'
    },
    { 
      image: '/WhatsApp Image 2025-06-14 at 15.25.02 (1).jpeg', 
      title: 'Best Employee of the Year',
      description: 'Receiving Token of love from Ceymox, India',
      year: '2025'
    },
    { 
      image: '/DSC08053.JPG', 
      title: 'Award Night - Kochi',
      description: 'Emvigo Half Yearly Awards Program, Kochi',
      year: '2024'
    },
    { 
      image: '/WhatsApp Image 2025-06-14 at 15.27.39.jpeg', 
      title: 'Let Me Talk Some thing',
      description: 'Meet Magento India, Pune',
      year: '2025'
    },
    { 
      image: '/WhatsApp Image 2021-12-24 at 11.16.57 PM (1).jpeg', 
      title: 'Ceymox Awards',
      description: 'Ceymox Award Program, Kochi',
      year: '2021'
    },
    { 
      image: '/WhatsApp Image 2025-06-14 at 15.25.18.jpeg', 
      title: 'Magento Event',
      description: 'Participated in Magento Event in Gujarath, India',
      year: '2025'
    },
    { 
      image: '/meetmagento2024.png', 
      title: 'Meet Magento 2024',
      description: 'Participated in Meet Magento 2024 in Ahmedabad, India',
      year: '2024'
    },
    { 
      image: '/WhatsApp Image 2025-06-14 at 15.25.19.jpeg', 
      title: 'Meet Magento 2025',
      description: 'Participated in Meet Magento 2025 in Pune, India',
      year: '2025'
    },
    { 
      image: '/FB_IMG_1749894721770.jpg', 
      title: 'Meet Magento Pune',
      description: 'Participated in Meet Magento 2025 in Pune, India',
      year: '2025'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Passionate Web Developer and Ecommerce Team Lead with a proven track record 
            of delivering high-quality solutions and leading successful development teams.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Biography */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Story */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 animate-fade-in-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">My Journey</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  With over 7 years and 7 months of experience in web development, I've specialized 
                  in creating robust eCommerce solutions using Magento 2. My journey began as a 
                  developer, and I've grown into a team leader who has successfully managed and 
                  delivered more than 35 Magento projects.
                </p>
                <p>
                  Currently serving as an Ecommerce Team Lead at Emvigo Technologies, I combine 
                  my technical expertise with strategic leadership to guide teams in building 
                  exceptional online shopping experiences. My experience spans across various 
                  industries including music, food & grocery, cosmetics, fashion, travel, 
                  jewelry, and electronics.
                </p>
                <p>
                  I'm passionate about staying current with the latest eCommerce trends and 
                  technologies, ensuring that every project I lead incorporates best practices 
                  and innovative solutions. My approach focuses on understanding business 
                  requirements, implementing scalable solutions, and delivering projects that 
                  exceed client expectations.
                </p>
              </div>
            </div>

            {/* Professional Achievements Gallery */}
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-left animation-delay-500">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Professional Achievements</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="aspect-w-16 aspect-h-12">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-sm">{achievement.title}</h3>
                          <span className="text-xs bg-white/20 px-2 py-1 rounded">{achievement.year}</span>
                        </div>
                        <p className="text-xs text-gray-200">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-left animation-delay-1000">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Tools I Master</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 group-hover:animate-spin" />
                    <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors duration-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center animate-fade-in-right">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-xl mx-auto animate-float">
                  <img 
                    src="/profilre.png" 
                    alt="ANAS KP"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-2 animate-pulse">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ANAS KP</h3>
              <p className="text-blue-600 font-medium">Web Developer & Team Lead</p>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-fade-in-right animation-delay-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                Quick Facts
              </h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Location', value: 'Malappuram, Kerala, India', color: 'text-blue-600' },
                  { icon: Calendar, label: 'Experience', value: '7+ Years', color: 'text-green-600' },
                  { icon: Globe, label: 'Projects Led', value: '35+ Magento Projects', color: 'text-purple-600' },
                  { icon: Trophy, label: 'Success Rate', value: '100% Client Satisfaction', color: 'text-orange-600' }
                ].map((fact, index) => {
                  const Icon = fact.icon;
                  return (
                    <div key={index} className="flex items-center group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                      <Icon className={`h-5 w-5 ${fact.color} mr-3 group-hover:animate-bounce`} />
                      <div>
                        <div className="font-medium text-gray-900">{fact.label}</div>
                        <div className="text-gray-600 text-sm">{fact.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certification */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-6 animate-fade-in-right animation-delay-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 text-yellow-500 mr-2" />
                Certification
              </h3>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 animate-pulse">
                  <img 
                    src="/Adobe_Certified_Professional_Experience_Cloud_products_Digital_Badge.png" 
                    alt="Adobe Certified Professional"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="font-medium text-gray-900 mb-1">Adobe Certified Professional</div>
                <div className="text-gray-600 mb-3 text-sm">Magento Commerce Developer</div>
                <a
                  href="https://certification.adobe.com/credential/verify/ba1f78ad-c547-4214-aef2-a8d84e101890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Certificate →
                </a>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-fade-in-right animation-delay-900">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Languages className="h-5 w-5 text-blue-600 mr-2" />
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between group hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover:animate-ping"></div>
                      <span className="font-medium text-gray-900">{lang.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-200">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-6 animate-fade-in-right animation-delay-1200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                Core Values
              </h3>
              <div className="space-y-3">
                {['Quality First', 'Team Collaboration', 'Continuous Learning', 'Client Success'].map((value, index) => (
                  <div key={index} className="flex items-center group hover:bg-white/50 p-2 rounded-lg transition-colors duration-200">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                    <span className="text-gray-800 font-medium group-hover:text-purple-600 transition-colors duration-200">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-blue-100 mb-6">
              Let's create something amazing for your business
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Camera className="h-5 w-5 mr-2" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;