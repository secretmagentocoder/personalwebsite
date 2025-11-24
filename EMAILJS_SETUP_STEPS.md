# EmailJS Configuration Steps

## Step 1: Get Your EmailJS Credentials

After creating a new service in EmailJS, you need to get:

1. **Service ID** - Found in Email Services section
2. **Template ID** - Found in Email Templates section  
3. **Public Key** - Found in Account > General Settings

## Step 2: Configure Email Service

1. Go to **Email Services** in EmailJS Dashboard
2. Click on your new service
3. Connect it to Gmail (or your email provider)
4. Authorize EmailJS to send emails from your account
5. Copy the **Service ID** (format: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS Dashboard
2. Click **Create New Template**
3. Configure:
   - **To Email**: `anasmagento@gmail.com` (or use variable `{{to_email}}`)
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Reply To**: `{{reply_to}}`
   - **Subject**: `{{subject}}`
   - **Message**: Include `{{message}}` and other details

### Template Example:
```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Copy the **Template ID** (format: `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** > **General** in EmailJS Dashboard
2. Find **Public Key**
3. Copy it (format: `xxxxxxxxxxxxx`)

## Step 5: Update Code

Once you have all three values, I'll update the ContactPage.tsx file with your new credentials.

## Step 6: Test

1. Fill out the contact form
2. Check browser console (F12) for any errors
3. Check your email inbox (anasmagento@gmail.com)

