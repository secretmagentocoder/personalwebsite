# EmailJS Configuration Guide

## Quick Setup Steps

### 1. Get Your Service ID
- Go to EmailJS Dashboard → **Email Services**
- Click on your new service
- Copy the **Service ID** (looks like: `service_xxxxxxxx`)

### 2. Create Email Template
- Go to **Email Templates** → **Create New Template**
- Configure the template with these variables:

**Template Settings:**
- **To Email**: `anasmagento@gmail.com` (or `{{to_email}}`)
- **Subject**: `{{subject}}`
- **Reply To**: `{{reply_to}}`

**Template Content Example:**
```
From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

**Template Variables Available:**
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email  
- `{{subject}}` - Subject line
- `{{message}}` - Message content
- `{{to_email}}` - Recipient email (anasmagento@gmail.com)
- `{{reply_to}}` - Reply-to email
- `{{user_name}}` - User name (same as from_name)
- `{{user_email}}` - User email (same as from_email)

- Copy the **Template ID** (looks like: `template_xxxxxxxx`)

### 3. Get Public Key
- Go to **Account** → **General**
- Find **Public Key** section
- Copy your Public Key (long string of characters)

### 4. Update Code
Once you have all three values, provide them to me and I'll update the code.

## Current Configuration (to be updated)

- Service ID: `service_68afgse` → **UPDATE THIS**
- Template ID: `template_vym6kik` → **UPDATE THIS**  
- Public Key: `rWAnWDHGYERdj6-7I` → **UPDATE THIS**

## Testing

After updating, test the form:
1. Go to http://anas.local/contact
2. Fill out the form
3. Submit and check browser console (F12) for logs
4. Check your email inbox

