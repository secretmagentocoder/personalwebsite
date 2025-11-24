# EmailJS Setup Guide for Contact Form

## Current Configuration

- **Service ID**: `service_68afgse`
- **Template ID**: `template_vym6kik`
- **Public Key**: `rWAnWDHGYERdj6-7I`
- **Recipient Email**: `anasmagento@gmail.com`

## Troubleshooting Steps

### 1. Verify EmailJS Account Setup

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Log in to your EmailJS account
3. Verify the Service ID `service_68afgse` exists and is active
4. Verify the Template ID `template_vym6kik` exists

### 2. Check EmailJS Template Variables

Your EmailJS template should have these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Subject line
- `{{message}}` - Message content
- `{{to_email}}` - Recipient email (anasmagento@gmail.com)
- `{{reply_to}}` - Reply-to email

### 3. Verify Service Configuration

In EmailJS Dashboard:
1. Go to **Email Services**
2. Check if `service_68afgse` is connected to Gmail/Email service
3. Verify the service is active and has email quota remaining

### 4. Check Template Configuration

In EmailJS Dashboard:
1. Go to **Email Templates**
2. Open template `template_vym6kik`
3. Verify:
   - To Email: `anasmagento@gmail.com` or `{{to_email}}`
   - Subject: `{{subject}}`
   - Content includes: `{{from_name}}`, `{{from_email}}`, `{{message}}`

### 5. Test EmailJS Connection

Open browser console (F12) and test:
```javascript
emailjs.send('service_68afgse', 'template_vym6kik', {
  from_name: 'Test User',
  from_email: 'test@example.com',
  subject: 'Test Email',
  message: 'This is a test message',
  to_email: 'anasmagento@gmail.com',
  reply_to: 'test@example.com'
}, 'rWAnWDHGYERdj6-7I')
.then(response => console.log('Success!', response))
.catch(error => console.error('Error:', error));
```

## Alternative Solutions

If EmailJS doesn't work, consider:

1. **PHP Backend** - Create a simple PHP script to send emails
2. **Node.js Backend** - Use nodemailer or similar
3. **Form Submission Service** - Use Formspree, FormSubmit, etc.
4. **Direct Mailto** - Use mailto links (already added as fallback)

## Quick Fix: Update EmailJS Credentials

If you need to update the credentials, edit:
- File: `src/components/ContactPage.tsx`
- Lines: 35-37 (serviceID, templateID, publicKey)

