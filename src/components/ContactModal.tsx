import React, { useState, useEffect } from 'react';
import { X, Mail, Send, CheckCircle, AlertCircle, Loader, MessageCircle, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig, prepareEmailParams } from '../config/emailjs.config';
import { useContactModal } from '../context/ContactModalContext';

const ContactModal: React.FC = () => {
  const { isOpen, closeModal } = useContactModal();
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
    if (isOpen) {
      try {
        emailjs.init(emailjsConfig.publicKey);
        console.log('EmailJS initialized successfully');
      } catch (error) {
        console.error('EmailJS initialization error:', error);
      }
    }
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitted(false);
      setError('');
    }
  }, [isOpen]);

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

    // Try EmailJS first
    try {
      // Prepare template parameters - include phone in message
      const messageWithPhone = formData.phone 
        ? `${formData.message}\n\nContact Phone: ${formData.phone}`
        : formData.message;

      const templateParams = prepareEmailParams({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: messageWithPhone,
      });

      console.log('Sending email via EmailJS with params:', templateParams);

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
          closeModal();
        }, 3000);
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Failed to send email:', error);
      
      let errorMessage = 'Failed to send message. ';
      
      if (error?.text) {
        errorMessage += `Error: ${error.text}. `;
      } else if (error?.message) {
        errorMessage += `Error: ${error.message}. `;
      }
      
      errorMessage += 'Please try again or contact directly.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary-700 to-accent-600 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <div className="flex items-center">
            <MessageCircle className="h-6 w-6 mr-3" />
            <h2 className="text-2xl font-bold">Get In Touch</h2>
          </div>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="modal-phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    <Phone className="h-4 w-4 inline mr-1" />
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label htmlFor="modal-subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="modal-subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white text-slate-900"
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

              {/* Message */}
              <div>
                <label htmlFor="modal-message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 resize-none bg-white text-slate-900 placeholder-slate-400"
                  placeholder="Please describe your inquiry, requirements, or any questions you have..."
                ></textarea>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium">{error}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-primary-700 to-accent-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-800 hover:to-accent-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-primary-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
              <p className="text-slate-600">
                Thank you for reaching out. I'll respond within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

