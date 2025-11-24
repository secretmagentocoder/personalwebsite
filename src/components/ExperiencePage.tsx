import React from 'react';
import { Calendar, MapPin, Award, Users, TrendingUp, Download } from 'lucide-react';

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      title: 'Ecommerce Team Lead',
      company: 'Emvigo Technologies',
      location: 'Remote',
      duration: 'Apr 2023 – Present',
      period: '2 year 8 months',
      type: 'Full-time',
      responsibilities: [
        'Leading a team of 8+ developers in delivering complex Magento 2 eCommerce projects',
        'Architecting scalable eCommerce solutions for clients across multiple industries',
        'Managing project timelines, resource allocation, and client communications',
        'Implementing best practices for code quality, security, and performance optimization',
        'Mentoring junior developers and conducting technical training sessions',
        'Collaborating with cross-functional teams including design, QA, and project management'
      ],
      achievements: [
        'Successfully delivered 15+ projects with 100% client satisfaction',
        'Reduced project delivery time by 25% through process optimization',
        'Built and mentored a high-performing development team',
        'Established coding standards and development workflows'
      ],
      technologies: ['Magento 2', 'Laravel', 'PHP', 'Hyva', 'MySQL', 'JavaScript', 'REST API', 'GraphQL', 'Docker', 'Git']
    },
    {
      title: 'Magento Developer',
      company: 'Ceymox Private Limited',
      location: 'Kochi, Kerala, India',
      duration: 'Mar 2020 – Mar 2023',
      period: '3 years',
      type: 'Full-time',
      responsibilities: [
        'Developed and customized Magento 2 eCommerce websites for diverse clients',
        'Integrated third-party services including payment gateways, shipping providers, and ERP systems',
        'Optimized website performance and implemented SEO best practices',
        'Collaborated with frontend developers to implement responsive designs',
        'Participated in code reviews and maintained high code quality standards',
        'Provided technical support and maintenance for existing projects'
      ],
      achievements: [
        'Completed 20+ successful Magento 2 implementations',
        'Achieved 99.9% uptime for all managed eCommerce platforms',
        'Reduced page load times by average 40% through optimization',
        'Earned Adobe Certified Professional - Magento Commerce Developer certification'
      ],
      technologies: ['Magento 2', 'PHP', 'MySQL', 'jQuery', 'HTML/CSS', 'REST API', 'Composer', 'Git']
    },
    {
      title: 'Magento Developer',
      company: 'Sigosoft',
      location: 'Kozhikode, Kerala, India',
      duration: 'Dec 2017 – Feb 2020',
      period: '2 years 3 months',
      type: 'Full-time',
      responsibilities: [
        'Developed custom Magento modules and extensions to meet specific client requirements',
        'Implemented complex eCommerce functionalities including multi-vendor marketplace features',
        'Worked on database design and optimization for large-scale eCommerce applications',
        'Collaborated with designers to convert PSD designs to functional Magento themes',
        'Debugged and resolved technical issues in existing Magento installations',
        'Documented technical specifications and maintained project documentation'
      ],
      achievements: [
        'Successfully launched 10+ eCommerce websites from concept to production',
        'Developed reusable custom modules that improved development efficiency',
        'Gained expertise in complex Magento customizations and integrations',
        'Built strong foundation in eCommerce development best practices'
      ],
      technologies: ['Magento 2', 'PHP', 'MySQL', 'JavaScript', 'XML', 'HTML/CSS']
    }
  ];

  const skills = [
    'Team Leadership', 'Project Management', 'Magento 2 Architecture', 'PHP Development',
    'Database Design', 'API Integration', 'Performance Optimization', 'Code Review',
    'Client Communication', 'Mentoring', 'Quality Assurance', 'Problem Solving'
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-6">Professional Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            8+ years of progressive experience in web development and eCommerce solutions, 
            from developer to team leader
          </p>
          <div className="mt-8">
            <a
              href="/Anas_MagentoDeveloper_CV.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-700 to-accent-600 text-white font-medium rounded-lg hover:from-primary-800 hover:to-accent-700 transition-colors duration-200"
            >
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
          
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 w-4 h-4 bg-primary-700 rounded-full border-4 border-white shadow-md"></div>
                
                {/* Content */}
                <div className="ml-12 md:ml-20">
                  <div className="bg-white rounded-xl shadow-md p-4 md:p-8 hover:shadow-lg transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-4 md:mb-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 md:mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                          <div className="flex items-center text-base md:text-lg text-primary-700 font-semibold mb-2">
                            <Award className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm md:text-base text-gray-600 mt-2 sm:mt-0">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                            <span className="font-medium">{exp.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                        <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-full">{exp.period}</span>
                        <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-full">{exp.type}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4 md:mb-6">
                      <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 flex items-center">
                        <Users className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary-700" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1.5 md:space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-700 rounded-full mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                            <span className="text-sm md:text-base text-gray-700">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4 md:mb-6">
                      <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 md:h-5 md:w-5 mr-2 text-accent-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5 md:space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent-600 rounded-full mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                            <span className="text-sm md:text-base text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 md:px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs md:text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Competencies Developed</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-3 rounded-lg text-center font-medium text-gray-800 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Career Progression */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Career Progression</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Developer</h3>
              <p className="text-gray-600">Started as Magento Developer, building custom solutions and gaining expertise in eCommerce development</p>
              <div className="text-sm text-primary-700 font-medium mt-2">2017 - 2020</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Senior Developer</h3>
              <p className="text-gray-600">Advanced to senior role, taking on complex projects and obtaining professional certification</p>
              <div className="text-sm text-accent-600 font-medium mt-2">2020 - 2023</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Lead</h3>
              <p className="text-gray-600">Promoted to leadership role, managing teams and architecting scalable solutions</p>
              <div className="text-sm text-primary-700 font-medium mt-2">2023 - Present</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Discuss Opportunities?
          </h2>
          <p className="text-gray-600 mb-8">
            Let's talk about how my experience can contribute to your team's success
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-700 to-accent-600 text-white font-semibold rounded-lg hover:from-primary-800 hover:to-accent-700 transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;