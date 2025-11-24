# Contact Form Troubleshooting Guide

## Current Setup

The contact form uses **EmailJS** to send emails to `anasmagento@gmail.com`.

### EmailJS Configuration
- **Service ID**: `service_68afgse`
- **Template ID**: `template_vym6kik`
- **Public Key**: `rWAnWDHGYERdj6-7I`

## Steps to Fix EmailJS

### Step 1: Verify EmailJS Account
1. Go to https://dashboard.emailjs.com/
2. Log in to your EmailJS account
3. Check if you have an active account with email quota

### Step 2: Verify Service Configuration
1. In EmailJS Dashboard, go to **Email Services**
2. Find service `service_68afgse`
3. Verify it's connected to Gmail or your email service
4. Check if the service is active

### Step 3: Verify Template Configuration
1. Go to **Email Templates**
2. Open template `template_vym6kik`
3. Verify the template has these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_email}}` or hardcoded `anasmagento@gmail.com`
   - `{{reply_to}}`

### Step 4: Test EmailJS
Open browser console (F12) on http://anas.local/contact and run:

```javascript
emailjs.send('service_68afgse', 'template_vym6kik', {
  from_name: 'Test User',
  from_email: 'test@example.com',
  subject: 'Test Email',
  message: 'This is a test',
  to_email: 'anasmagento@gmail.com',
  reply_to: 'test@example.com'
}, 'rWAnWDHGYERdj6-7I')
.then(response => console.log('SUCCESS:', response))
.catch(error => console.error('ERROR:', error));
```

### Step 5: Update Credentials (if needed)
If you need to use different EmailJS credentials, edit:
- File: `src/components/ContactPage.tsx`
- Lines: 42-44 (serviceID, templateID, publicKey)

## Alternative: Use Formspree (Easier Setup)

If EmailJS doesn't work, you can use Formspree:

1. Go to https://formspree.io/
2. Create a free account
3. Create a new form
4. Get your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
5. Update the form submission in `ContactPage.tsx` to use Formspree

## Current Error Handling

The form now includes:
- ✅ Detailed error messages
- ✅ Console logging for debugging
- ✅ Fallback mailto link in error message
- ✅ Better user feedback

## Testing

1. Fill out the contact form
2. Open browser console (F12) to see logs
3. Check for any error messages
4. If it fails, check the error details in console

## Next Steps

1. **Check browser console** when submitting the form
2. **Verify EmailJS credentials** are correct
3. **Test EmailJS** using the console command above
4. **Update credentials** if needed in ContactPage.tsx

