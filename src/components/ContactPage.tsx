import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink, Linkedin, Github, MessageCircle, Clock, Award, Zap, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   setIsSubmitted(true);
    
  //   setTimeout(() => {
  //     setIsSubmitted(false);
  //     setFormData({ name: '', email: '', subject: '', message: '' });
  //   }, 3000);
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setIsLoading(true);
    setError('');

    try {
      // EmailJS configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
      const serviceID = 'service_68afgse'; // Replace with your EmailJS service ID
      const templateID = 'template_vym6kik'; // Replace with your EmailJS template ID
      const publicKey = 'rWAnWDHGYERdj6-7I'; // Replace with your EmailJS public key

      // Check if EmailJS is properly configured
      // if (serviceID === 'service_68afgse' || templateID === 'template_8lo6bpr') {
      //   throw new Error('EmailJS not configured. Please set up your EmailJS credentials.');
      // }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'anasmagento@gmail.com', // Your Hostinger email
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      if (error instanceof Error && error.message.includes('EmailJS not configured')) {
        setError('EmailJS is not configured yet. Please check the setup instructions below.');
      } else {
        setError('Failed to send message. Please try again or contact me directly.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'anasmagento@gmail.com',
      link: 'mailto:anasmagento@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9809520367',
      link: 'tel:+919809520367',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Malappuram, Kerala, India',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const services = [
    {
      title: 'Company Websites',
      description: 'Professional corporate websites with modern design and functionality',
      icon: Award,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Portfolio Development',
      description: 'Stunning portfolios that showcase your work and achievements',
      icon: ExternalLink,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'eCommerce Solutions',
      description: 'Complete Magento eCommerce platforms with advanced features',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Custom Development',
      description: 'Tailored web solutions for your unique business requirements',
      icon: MessageCircle,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your digital vision to life? Whether it's a company website, 
            portfolio, or eCommerce platform, I'm here to help you succeed.
          </p>
        </div>

        {/* Services Overview */}
        <div className="mb-16 animate-fade-in-up animation-delay-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What I Can Build For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <MessageCircle className="h-8 w-8 text-blue-600 mr-3" />
              Send Me a Message
            </h2>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                  >
                    <option value="">Select project type</option>
                    <option value="company-website">Company Website</option>
                    <option value="portfolio">Portfolio Development</option>
                    <option value="ecommerce">eCommerce Platform</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none group-hover:border-blue-300"
                    placeholder="Tell me about your project requirements, timeline, budget, and any specific features you need..."
                  ></textarea>
                </div>
                
                {error && (
                  <div className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg" role="alert">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{error}</span>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader className="animate-spin h-5 w-5 mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 animate-bounce-in">
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 text-lg">
                  Thank you for your message. I'll get back to you within 24 hours with a detailed response.
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Phone className="h-8 w-8 text-green-600 mr-3" />
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="group flex items-center hover:bg-gray-50 p-4 rounded-xl transition-colors duration-300">
                      <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">{contact.title}</div>
                        {contact.link.startsWith('mailto:') || contact.link.startsWith('tel:') ? (
                          <a
                            href={contact.link}
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-gray-600 text-lg">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Professional Photo */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center animate-fade-in-right animation-delay-300">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-xl mx-auto animate-float">
                  <img 
                    src="/profilre.png" 
                    alt="ANAS KP - Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-2 animate-pulse">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ANAS KP</h3>
              <p className="text-blue-600 font-medium mb-4">Web Developer & Team Lead</p>
              <p className="text-gray-600 text-sm">
                Ready to transform your ideas into digital reality
              </p>
            </div>

            {/* Response Time Promise */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 animate-fade-in-right animation-delay-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="h-6 w-6 text-green-600 mr-3" />
                Response Time Promise
              </h2>
              <div className="space-y-4">
                {[
                  { time: '< 24 hours', action: 'Initial response to your inquiry' },
                  { time: '< 48 hours', action: 'Detailed project discussion call' },
                  { time: '< 72 hours', action: 'Complete project proposal & timeline' }
                ].map((promise, index) => (
                  <div key={index} className="flex items-center group hover:bg-white/50 p-3 rounded-lg transition-colors duration-200">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4 group-hover:animate-ping"></div>
                    <div>
                      <div className="font-semibold text-green-700">{promise.time}</div>
                      <div className="text-gray-600 text-sm">{promise.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Me */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 animate-fade-in-right animation-delay-900">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 text-blue-600 mr-3" />
                Why Choose Me?
              </h2>
              <div className="space-y-3">
                {[
                  '7+ years of proven experience',
                  '35+ successful projects delivered',
                  '100% client satisfaction rate',
                  'Adobe Certified Professional',
                  'Full-stack development expertise',
                  'Ongoing support & maintenance'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center group hover:bg-white/50 p-2 rounded-lg transition-colors duration-200">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 group-hover:animate-spin" />
                    <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors duration-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-1200">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-pink-100 mb-6">
                Don't wait - let's turn your vision into reality today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:anasmagento@gmail.com"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Me Now
                </a>
                <a
                  href="tel:+919809520367"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;