/**
 * Security Utilities
 * Functions to protect against XSS, injection attacks, and other security threats
 */

/**
 * Sanitize user input to prevent XSS attacks
 * Removes potentially dangerous HTML tags and attributes
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');
  
  // Escape special characters
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
  
  return sanitized.trim();
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format (international format)
 */
export const validatePhone = (phone: string): boolean => {
  // Allow international format: +1234567890 or 1234567890
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Sanitize and validate form data
 */
export const sanitizeFormData = (data: {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  [key: string]: any;
}): {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];
  
  // Sanitize name
  const name = data.name ? sanitizeInput(data.name) : '';
  if (!name || name.length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  if (name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }
  
  // Validate and sanitize email
  const email = data.email ? sanitizeInput(data.email) : '';
  if (!email || !validateEmail(email)) {
    errors.push('Please provide a valid email address');
  }
  
  // Sanitize phone (optional)
  const phone = data.phone ? sanitizeInput(data.phone) : '';
  if (phone && !validatePhone(phone)) {
    errors.push('Please provide a valid phone number');
  }
  
  // Sanitize subject
  const subject = data.subject ? sanitizeInput(data.subject) : '';
  if (subject.length > 200) {
    errors.push('Subject must be less than 200 characters');
  }
  
  // Sanitize message
  const message = data.message ? sanitizeInput(data.message) : '';
  if (!message || message.length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  if (message.length > 5000) {
    errors.push('Message must be less than 5000 characters');
  }
  
  return {
    name,
    email,
    phone,
    subject,
    message,
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Rate limiting helper (client-side, should be complemented with server-side)
 * Uses localStorage to track request frequency
 */
export const checkRateLimit = (key: string, maxRequests: number = 5, windowMs: number = 60000): boolean => {
  const now = Date.now();
  const storageKey = `rate_limit_${key}`;
  
  try {
    const stored = localStorage.getItem(storageKey);
    if (!stored) {
      localStorage.setItem(storageKey, JSON.stringify({ count: 1, resetTime: now + windowMs }));
      return true;
    }
    
    const data = JSON.parse(stored);
    
    if (now > data.resetTime) {
      // Reset window
      localStorage.setItem(storageKey, JSON.stringify({ count: 1, resetTime: now + windowMs }));
      return true;
    }
    
    if (data.count >= maxRequests) {
      return false; // Rate limit exceeded
    }
    
    // Increment count
    data.count++;
    localStorage.setItem(storageKey, JSON.stringify(data));
    return true;
  } catch (error) {
    // If localStorage fails, allow the request (fail open)
    console.error('Rate limit check failed:', error);
    return true;
  }
};

/**
 * Generate CSRF token (for forms)
 */
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Validate URL to prevent open redirect attacks
 */
export const isValidURL = (url: string, allowedDomains: string[] = []): boolean => {
  try {
    const urlObj = new URL(url);
    
    // If allowed domains are specified, check against them
    if (allowedDomains.length > 0) {
      return allowedDomains.some(domain => urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`));
    }
    
    // Only allow http/https protocols
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
};

