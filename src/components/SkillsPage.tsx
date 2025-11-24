import React from 'react';
import { Code, Database, Globe, Users, Zap, Award, CheckCircle, Star } from 'lucide-react';

const SkillsPage: React.FC = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'Magento 2', level: 95, years: '8+' },
        { name: 'PHP', level: 90, years: '8+' },
        { name: 'MySQL', level: 85, years: '8+' },
        { name: 'JavaScript/jQuery', level: 80, years: '6+' },
        { name: 'HTML5/CSS3', level: 85, years: '8+' },
        { name: 'REST API Development', level: 90, years: '5+' },
        { name: 'GraphQL', level: 75, years: '3+' },
        { name: 'Git Version Control', level: 90, years: '8+' }
      ]
    },
    {
      title: 'Ecommerce & Integration',
      icon: Globe,
      color: 'green',
      skills: [
        { name: 'ERP Integration', level: 85, years: '5+' },
        { name: 'Payment Gateway Integration', level: 90, years: '6+' },
        { name: 'Third-party API Integration', level: 85, years: '5+' },
        { name: 'Multi-store Setup', level: 90, years: '6+' },
        { name: 'Performance Optimization', level: 85, years: '5+' },
        { name: 'Security Implementation', level: 80, years: '5+' }
      ]
    },
    {
      title: 'Database & Infrastructure',
      icon: Database,
      color: 'purple',
      skills: [
        { name: 'MySQL Database Design', level: 85, years: '8+' },
        { name: 'Redis Caching', level: 75, years: '4+' },
        { name: 'Elasticsearch', level: 70, years: '3+' },
        { name: 'Docker', level: 70, years: '3+' },
        { name: 'Server Configuration', level: 75, years: '4+' },
        { name: 'AWS/Cloud Services', level: 65, years: '2+' }
      ]
    },
    {
      title: 'Leadership & Management',
      icon: Users,
      color: 'orange',
      skills: [
        { name: 'Team Leadership', level: 90, years: '4+' },
        { name: 'Project Management', level: 85, years: '4+' },
        { name: 'Quality Assurance', level: 90, years: '6+' },
        { name: 'Code Review', level: 85, years: '5+' },
        { name: 'Client Communication', level: 85, years: '6+' },
        { name: 'Mentoring & Training', level: 80, years: '3+' }
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', category: 'IDE' },
    { name: 'PhpStorm', category: 'IDE' },
    { name: 'Git/GitHub', category: 'Version Control' },
    { name: 'Jira', category: 'Project Management' },
    { name: 'Postman', category: 'API Testing' },
    { name: 'phpMyAdmin', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Composer', category: 'Package Manager' },
    { name: 'npm/yarn', category: 'Package Manager' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Figma', category: 'Design' },
    { name: 'Chrome DevTools', category: 'Development' }
  ];

  const certifications = [
    {
      name: 'Adobe Certified Professional - Magento Commerce Developer',
      issuer: 'Adobe',
      year: '2023',
      link: 'https://certification.adobe.com/credential/verify/ba1f78ad-c547-4214-aef2-a8d84e101890',
      verified: true
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: 'bg-primary-100', text: 'text-primary-700', border: 'border-primary-200' },
      green: { bg: 'bg-accent-100', text: 'text-accent-600', border: 'border-accent-200' },
      purple: { bg: 'bg-primary-100', text: 'text-primary-700', border: 'border-primary-200' },
      orange: { bg: 'bg-accent-100', text: 'text-accent-600', border: 'border-accent-200' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-6">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and competencies 
            developed over 8+ years of professional experience
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-md p-4 md:p-8">
                <div className="flex items-center mb-6 md:mb-8">
                  <div className={`p-2 md:p-3 rounded-lg ${colors.bg} mr-3 md:mr-4`}>
                    <Icon className={`h-5 w-5 md:h-6 md:w-6 ${colors.text}`} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">{skill.years}</span>
                          <span className={`text-sm font-medium ${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            category.color === 'blue' ? 'bg-primary-700' :
                            category.color === 'green' ? 'bg-accent-600' :
                            category.color === 'purple' ? 'bg-primary-700' :
                            'bg-accent-600'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools & Software */}
        <div className="mt-12 md:mt-16">
          <div className="bg-gray-50 rounded-xl p-4 md:p-8">
            <div className="flex items-center mb-6 md:mb-8">
              <div className="p-2 md:p-3 rounded-lg bg-gray-200 mr-3 md:mr-4">
                <Zap className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Tools & Software</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white p-3 md:p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                  <div className="font-medium text-sm md:text-base text-gray-900">{tool.name}</div>
                  <div className="text-xs md:text-sm text-gray-600">{tool.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 md:mt-16">
          <div className="bg-white rounded-xl shadow-md p-4 md:p-8">
            <div className="flex items-center mb-6 md:mb-8">
              <div className="p-2 md:p-3 rounded-lg bg-primary-100 mr-3 md:mr-4">
                <Award className="h-5 w-5 md:h-6 md:w-6 text-primary-700" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Certifications</h2>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                        {cert.verified && (
                          <CheckCircle className="h-5 w-5 text-primary-700 ml-2" />
                        )}
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <span>Issued by {cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <span>{cert.year}</span>
                      </div>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-700 to-accent-600 text-white font-medium rounded-lg hover:from-primary-800 hover:to-accent-700 transition-colors duration-200"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-primary-200 mr-4">
                <Star className="h-6 w-6 text-primary-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Soft Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Team Leadership',
                'Project Management',
                'Problem Solving',
                'Communication',
                'Time Management',
                'Adaptability',
                'Critical Thinking',
                'Mentoring',
                'Client Relations'
              ].map((skill, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-3" />
                  <span className="font-medium text-gray-900">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Leverage These Skills?
          </h2>
          <p className="text-gray-600 mb-8">
            Let's discuss how my expertise can contribute to your next project
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-700 to-accent-600 text-white font-semibold rounded-lg hover:from-primary-800 hover:to-accent-700 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;