import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Mail, Award, MessageCircle, Phone, MapPin, Linkedin } from 'lucide-react';
import ContactModal from './ContactModal';
import { useContactModal } from '../context/ContactModalContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useContactModal();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
      {/* Professional Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="relative">
                <img
                  src="/Adobe_Certified_Professional_Experience_Cloud_products_Digital_Badge.png"
                  alt="Adobe Certified Professional"
                  className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300 shadow-md"
                />
                <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 bg-green-500 rounded-full w-2 h-2 md:w-3 md:h-3 border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent">
                  ANAS KP
                </span>
                <p className="text-[10px] md:text-xs text-slate-500 font-medium hidden sm:block">Senior Magento Developer</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-700 bg-primary-50 shadow-sm'
                      : 'text-slate-700 hover:text-primary-700 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
                <a
                  href="https://wa.me/918891120367?text=Hello%20Anas%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 xl:px-5 py-2 xl:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm xl:text-base"
                >
                  <MessageCircle className="h-3 w-3 xl:h-4 xl:w-4 mr-1 xl:mr-2" />
                  <span className="hidden xl:inline">WhatsApp</span>
                </a>
              <button
                onClick={openModal}
                className="inline-flex items-center px-4 xl:px-6 py-2 xl:py-3 bg-gradient-to-r from-primary-700 to-primary-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-primary-800 hover:to-primary-900 transition-all duration-300 transform hover:scale-105 text-sm xl:text-base"
              >
                <Mail className="h-3 w-3 xl:h-4 xl:w-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">Get In Touch</span>
                <span className="xl:hidden">Contact</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-primary-700 hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-slate-700 hover:text-primary-700 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/918891120367?text=Hello%20Anas%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-base font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-all text-center mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="h-4 w-4 inline mr-2" />
                WhatsApp
              </a>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openModal();
                }}
                className="block w-full px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary-700 to-primary-800 rounded-lg hover:from-primary-800 hover:to-primary-900 transition-all"
              >
                <Mail className="h-4 w-4 inline mr-2" />
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Professional Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
                <div className="bg-gradient-to-r from-primary-700 to-primary-800 p-1.5 md:p-2 rounded-lg shadow-lg">
                  <Code className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold">ANAS KP</span>
                  <p className="text-xs md:text-sm text-slate-400">Senior Magento 2 Developer</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4 md:mb-6 max-w-md">
                Adobe Certified Professional specializing in Magento 2 eCommerce development. 
                Delivering scalable, high-performance solutions with 8+ years of expertise.
              </p>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                <span className="text-xs md:text-sm text-slate-300">Adobe Certified Professional</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white">Quick Links</h3>
              <ul className="space-y-1.5 md:space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group text-xs md:text-sm"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="mailto:anasmagento@gmail.com" 
                  className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
                  title="Email: anasmagento@gmail.com"
                >
                  <Mail className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="tel:+918891120367" 
                  className="w-10 h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
                  title="Phone: +91 8891120367"
                >
                  <Phone className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://wa.me/918891120367?text=Hello%20Anas%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
                  title="WhatsApp: +91 8891120367"
                >
                  <MessageCircle className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://linkedin.com/in/anasmagento" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
                  title="LinkedIn: anasmagento"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
                <div 
                  className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center shadow-lg"
                  title="Location: Malappuram, Kerala, India"
                >
                  <MapPin className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} ANAS KP. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <span>Built with React & TypeScript</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Powered by Vite</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918891120367?text=Hello%20Anas%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Contact Modal */}
      <ContactModal />
    </div>
  );
};

export default Layout;
