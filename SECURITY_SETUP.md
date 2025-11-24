# Security Setup Instructions

## ✅ Quick Setup Checklist

### 1. Apache Configuration (Already Done)
- ✅ Security headers added to `/etc/apache2/sites-available/anas.local.conf`
- ✅ Headers module is enabled

**To apply changes:**
```bash
sudo systemctl reload apache2
```

### 2. HTML Security Meta Tags (Already Done)
- ✅ Security meta tags added to `index.html`

### 3. Input Sanitization (Already Done)
- ✅ Security utilities created in `src/utils/security.ts`
- ✅ Contact form updated to use sanitization

### 4. Environment Variables
**Important**: Never commit sensitive data to git!

Create a `.env` file (if needed):
```bash
# .env (add to .gitignore)
VITE_EMAILJS_PUBLIC_KEY=your_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

### 5. Dependencies Security Audit
Run regularly:
```bash
npm audit
npm audit fix
```

### 6. Production Checklist

Before deploying to production:

- [ ] SSL certificate installed
- [ ] HTTPS redirect enabled
- [ ] Update CSP policy for production domains
- [ ] Remove `unsafe-inline` and `unsafe-eval` from CSP (if possible)
- [ ] Set up server-side rate limiting
- [ ] Configure firewall rules
- [ ] Set up monitoring and logging
- [ ] Regular backups configured

## 🔧 Testing Security

### Test Input Sanitization:
1. Try submitting form with HTML tags: `<script>alert('xss')</script>`
2. Try SQL injection: `'; DROP TABLE users; --`
3. Try XSS in email: `test<script>alert(1)</script>@example.com`

All should be sanitized and rejected.

### Test Rate Limiting:
1. Submit form 5+ times quickly
2. Should see rate limit error after 5 attempts

### Test Security Headers:
Use browser DevTools → Network tab → Check Response Headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`
- `Content-Security-Policy: ...`

## 🚨 Important Notes

1. **EmailJS Public Key**: Safe to expose (it's public by design)
2. **Client-side validation**: Not enough! Always validate server-side too
3. **CSP Policy**: May need adjustment based on your specific needs
4. **Rate Limiting**: Client-side is basic; implement server-side for production

## 📞 Need Help?

Refer to `SECURITY.md` for detailed security documentation.

