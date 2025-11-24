import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Award, AlertCircle, Loader, MessageCircle, Briefcase, Code2, Zap, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig, prepareEmailParams } from '../config/emailjs.config';
import { sanitizeFormData, checkRateLimit } from '../utils/security';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init(emailjsConfig.publicKey);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    setError('');

    // Rate limiting check
    if (!checkRateLimit('contact_form', 5, 60000)) {
      setError('Too many requests. Please wait a minute before trying again.');
      setIsLoading(false);
      return;
    }

    // Sanitize and validate form data
    const sanitized = sanitizeFormData(formData);
    if (!sanitized.isValid) {
      setError(sanitized.errors.join('. '));
      setIsLoading(false);
      return;
    }

    // Try EmailJS first
    try {
      // Prepare template parameters using config helper - include phone in message
      const messageWithPhone = sanitized.phone 
        ? `${sanitized.message}\n\nContact Phone: ${sanitized.phone}`
        : sanitized.message;

      const templateParams = prepareEmailParams({
        name: sanitized.name,
        email: sanitized.email,
        subject: sanitized.subject,
        message: messageWithPhone,
      });

      console.log('Sending email via EmailJS with params:', templateParams);
      console.log('Using config:', {
        serviceID: emailjsConfig.serviceID,
        templateID: emailjsConfig.templateID,
        recipientEmail: emailjsConfig.recipientEmail,
      });

      // Send email using EmailJS with config values
      const response = await emailjs.send(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        templateParams,
        emailjsConfig.publicKey
      );
      
      console.log('EmailJS response:', response);

      if (response.status === 200 || response.text === 'OK') {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 5000);
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Failed to send email:', error);
      
      // Detailed error messages
      let errorMessage = 'Failed to send message. ';
      
      if (error?.text) {
        errorMessage += `Error: ${error.text}. `;
      } else if (error?.message) {
        errorMessage += `Error: ${error.message}. `;
      } else if (error?.status) {
        errorMessage += `HTTP Status: ${error.status}. `;
      }
      
      errorMessage += 'Please try again or use the email link below.';
      setError(errorMessage);
      
      // Log full error for debugging
      console.error('Full error details:', {
        error,
        errorType: typeof error,
        errorKeys: Object.keys(error || {}),
        emailjsConfig: {
          serviceID: emailjsConfig.serviceID,
          templateID: emailjsConfig.templateID,
          publicKey: emailjsConfig.publicKey.substring(0, 10) + '...', // Partial key for security
        },
        formData
      });
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
      color: 'from-primary-600 to-primary-800'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8891120367',
      link: 'tel:+918891120367',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 8891120367',
      link: 'https://wa.me/918891120367?text=Hello%20Anas%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'anasmagento',
      link: 'https://linkedin.com/in/anasmagento',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Malappuram, Kerala, India',
      link: '#',
      color: 'from-primary-600 to-primary-800'
    }
  ];

  const services = [
    {
      title: 'Business Websites',
      description: 'Scalable corporate solutions with modern architecture',
      icon: Briefcase,
      color: 'from-primary-600 to-primary-800'
    },
    {
      title: 'Portfolio Development',
      description: 'Professional portfolios showcasing your expertise',
      icon: Code2,
      color: 'from-primary-600 to-accent-600'
    },
    {
      title: 'eCommerce Solutions',
      description: 'Complete Magento 2 platforms with custom modules',
      icon: Award,
      color: 'from-accent-500 to-accent-600'
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions for unique requirements',
      icon: Zap,
      color: 'from-primary-700 to-accent-600'
    }
  ];


  return (
    <div className="bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Professional Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-700 to-accent-600 rounded-2xl mb-4 shadow-lg">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-700 via-accent-600 to-primary-800 bg-clip-text text-transparent mb-4 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have a question or want to discuss a project? I'm here to help. 
            Whether you need a business website, portfolio, eCommerce platform, or just want to connect, feel free to reach out.
          </p>
        </div>

        {/* Services Overview */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">What I Can Help You With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 p-5 group"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Form and Response Time */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border border-slate-200 relative overflow-hidden">
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-700 via-accent-600 to-primary-800"></div>
              
              <div className="mb-4 md:mb-6 pb-3 md:pb-4 border-b border-slate-200">
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary-700 to-accent-600 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 shadow-lg flex-shrink-0">
                    <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">
                      Send a Message
                    </h2>
                    <div className="flex items-start gap-1.5 md:gap-2 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg px-3 md:px-4 py-2 md:py-2.5 border-l-4 border-primary-600">
                      <span className="text-primary-700 text-xl md:text-2xl font-bold leading-none mt-0.5">"</span>
                      <p className="text-slate-700 text-xs md:text-sm font-medium italic flex-1 leading-relaxed">
                        Let's discuss how I can help bring your project to life
                      </p>
                      <span className="text-primary-700 text-xl md:text-2xl font-bold leading-none mt-0.5">"</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 hover:border-slate-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 hover:border-slate-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2.5">
                      <Phone className="h-4 w-4 inline mr-1.5 text-primary-600" />
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 hover:border-slate-300"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2.5">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-slate-50 focus:bg-white text-slate-900 hover:border-slate-300"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Business Website">Business Website</option>
                      <option value="Portfolio Development">Portfolio Development</option>
                      <option value="eCommerce Platform">eCommerce Platform (Magento 2)</option>
                      <option value="Custom Development">Custom Development</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2.5">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 resize-none bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 hover:border-slate-300"
                    placeholder="Please describe your inquiry, requirements, or any questions you have..."
                  ></textarea>
                </div>
                
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium mb-1">{error}</p>
                        <a 
                          href={`mailto:anasmagento@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact Form')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}${formData.phone ? `\nPhone: ${formData.phone}` : ''}\n\nMessage:\n${formData.message}`)}`}
                          className="text-xs text-red-600 underline hover:text-red-800"
                        >
                          Or click here to send via email client
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary-700 via-accent-600 to-primary-800 text-white font-semibold py-4 px-6 rounded-xl hover:from-primary-800 hover:via-accent-700 hover:to-primary-900 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <>
                      <Loader className="animate-spin h-5 w-5 mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="h-20 w-20 text-primary-700 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-slate-600 text-lg mb-2">
                  Thank you for reaching out. I've received your message and will respond within 24 hours.
                </p>
                <p className="text-sm text-slate-500">
                  I'll get back to you with a detailed response and next steps.
                </p>
              </div>
            )}
            </div>

            {/* Response Time Promise */}
            <div className="bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50 rounded-2xl shadow-xl p-6 border border-primary-200 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/20 rounded-full -mr-16 -mt-16"></div>
              
              <div className="flex items-center mb-4 pb-3 border-b border-primary-200 relative z-10">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-700 to-accent-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Response Time Commitment
                </h2>
              </div>
              <div className="space-y-3 relative z-10">
                {[
                  { time: '< 24 hours', action: 'Initial response to your inquiry', icon: '⚡' },
                  { time: '< 48 hours', action: 'Detailed project discussion call', icon: '📞' },
                  { time: '< 72 hours', action: 'Complete project proposal & timeline', icon: '📋' }
                ].map((promise, index) => (
                  <div key={index} className="flex items-start group hover:bg-white/70 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-primary-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform">
                      <span className="text-white text-base">{promise.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-primary-700 text-sm mb-0.5">{promise.time}</div>
                      <div className="text-slate-600 text-xs leading-relaxed">{promise.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Information & Details */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200 relative overflow-hidden">
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-600 via-primary-700 to-accent-600"></div>
              
              <div className="flex items-center mb-4 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-600 to-primary-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Contact Information
                </h2>
              </div>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-center group hover:bg-slate-50 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-slate-200 hover:shadow-sm">
                      <div className={`w-10 h-10 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 text-sm mb-0.5">{contact.title}</div>
                        {contact.link.startsWith('mailto:') || contact.link.startsWith('tel:') || contact.link.startsWith('http') ? (
                          <a
                            href={contact.link}
                            target={contact.link.startsWith('http') ? '_blank' : undefined}
                            rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-slate-600 hover:text-primary-700 transition-colors text-sm font-medium group-hover:underline"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-slate-600 text-sm font-medium">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why Choose Me */}
            <div className="bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50 rounded-2xl shadow-xl p-6 border border-primary-200 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-200/20 rounded-full -ml-16 -mb-16"></div>
              
              <div className="flex items-center mb-4 pb-3 border-b border-primary-200 relative z-10">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-600 to-primary-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Why Work With Me?
                </h2>
              </div>
              <div className="space-y-3 relative z-10">
                {[
                  '8+ years of proven eCommerce expertise',
                  '35+ successful projects delivered',
                  '100% client satisfaction rate',
                  'Adobe Certified Professional',
                  'Full-stack development capabilities',
                  'Ongoing support & maintenance'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center group hover:bg-white/70 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-primary-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-slate-800 font-medium text-sm group-hover:text-primary-700 transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
