/**
 * EmailJS Configuration
 * 
 * To configure EmailJS:
 * 1. Go to https://dashboard.emailjs.com/
 * 2. Get your Service ID from Email Services
 * 3. Get your Template ID from Email Templates
 * 4. Get your Public Key from Account > General
 * 5. Update the values below
 */

export const emailjsConfig = {
  // EmailJS Service ID
  // Found in: EmailJS Dashboard > Email Services
  serviceID: 'service_mu4z4gv', // UPDATE THIS with your new service ID

  // EmailJS Template ID
  // Found in: EmailJS Dashboard > Email Templates
  templateID: 'template_q9078vn', // UPDATE THIS with your new template ID

  // EmailJS Public Key
  // Found in: EmailJS Dashboard > Account > General
  publicKey: 'mxxr_iAvLoUvZZtw5', // UPDATE THIS with your new public key

  // Recipient Email Address
  recipientEmail: 'anasmagento@gmail.com',

  // Default Subject (used if subject is not provided)
  defaultSubject: 'Contact Form Submission from Website',
};

/**
 * EmailJS Template Variables Mapping
 * 
 * These are the variables that will be sent to your EmailJS template.
 * Make sure your EmailJS template includes these variables:
 * - {{from_name}} - Sender's name
 * - {{from_email}} - Sender's email
 * - {{subject}} - Email subject
 * - {{message}} - Message content
 * - {{to_email}} - Recipient email
 * - {{reply_to}} - Reply-to email
 */
export const emailjsTemplateVariables = {
  from_name: 'from_name',
  from_email: 'from_email',
  subject: 'subject',
  message: 'message',
  to_email: 'to_email',
  reply_to: 'reply_to',
  user_email: 'user_email',
  user_name: 'user_name',
} as const;

/**
 * Helper function to prepare EmailJS template parameters
 * 
 * IMPORTANT: Make sure your EmailJS template uses these exact variable names:
 * - {{from_name}} or {{user_name}}
 * - {{from_email}} or {{user_email}}
 * - {{subject}}
 * - {{message}}
 * - {{reply_to}}
 */
export const prepareEmailParams = (data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  // Format current date/time
  const now = new Date();
  const timeString = now.toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return {
    // Primary variables (most commonly used)
    from_name: data.name,
    from_email: data.email,
    subject: data.subject || emailjsConfig.defaultSubject,
    message: data.message,
    reply_to: data.email,
    
    // Alternative variable names (for compatibility)
    user_name: data.name,
    user_email: data.email,
    to_email: emailjsConfig.recipientEmail,
    
    // Additional fields that might be useful
    name: data.name,
    email: data.email,
    time: timeString, // Timestamp for email template
  };
};

