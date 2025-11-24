# Website Security Guide

This document outlines security measures implemented to protect the website from external JavaScript attacks and other security threats.

## 🔒 Implemented Security Measures

### 1. Content Security Policy (CSP)
- **Location**: Apache configuration and HTML meta tags
- **Purpose**: Prevents XSS attacks by controlling which resources can be loaded
- **Implementation**: 
  - CSP headers in Apache config
  - Meta tags in HTML head

### 2. Input Sanitization
- **Location**: `src/utils/security.ts`
- **Functions**:
  - `sanitizeInput()` - Removes HTML tags and escapes special characters
  - `sanitizeFormData()` - Validates and sanitizes all form inputs
  - `validateEmail()` - Email format validation
  - `validatePhone()` - Phone number validation

### 3. Security Headers
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-XSS-Protection**: Enables browser XSS filter
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Restricts browser features

### 4. Rate Limiting
- **Client-side**: Basic rate limiting using localStorage
- **Server-side**: Should be implemented at Apache/application level

### 5. HTTPS/SSL
- **Required**: Always use HTTPS in production
- **Implementation**: SSL certificate configuration in Apache

## 🛡️ Security Best Practices

### For Development
1. **Never commit sensitive data**:
   - API keys
   - Passwords
   - Private keys
   - Use `.env` files (add to `.gitignore`)

2. **Keep dependencies updated**:
   ```bash
   npm audit
   npm audit fix
   ```

3. **Validate all user inputs**:
   - Use the `sanitizeFormData()` function
   - Never trust client-side validation alone

### For Production

1. **Environment Variables**:
   - Store sensitive config in environment variables
   - Never expose API keys in client-side code
   - Use server-side proxy for sensitive API calls

2. **Content Security Policy**:
   - Strict CSP policy
   - Only allow trusted sources
   - Use nonce or hash for inline scripts

3. **HTTPS Only**:
   - Force HTTPS redirects
   - Use HSTS (HTTP Strict Transport Security)
   - Valid SSL certificate

4. **Regular Updates**:
   - Update dependencies regularly
   - Monitor security advisories
   - Keep server software updated

## 🔍 Security Checklist

### Before Going Live:
- [ ] SSL certificate installed and configured
- [ ] HTTPS redirect enabled
- [ ] Security headers configured
- [ ] CSP policy tested
- [ ] Input validation implemented
- [ ] Rate limiting configured
- [ ] Environment variables secured
- [ ] Dependencies audited (`npm audit`)
- [ ] Error messages don't expose sensitive info
- [ ] Logging configured (without sensitive data)

### Regular Maintenance:
- [ ] Weekly dependency updates
- [ ] Monthly security audits
- [ ] Monitor error logs
- [ ] Review access logs
- [ ] Test form submissions
- [ ] Verify CSP compliance

## 🚨 Common Attack Vectors & Protections

### 1. Cross-Site Scripting (XSS)
**Protection**:
- Input sanitization (`sanitizeInput()`)
- Content Security Policy
- React's built-in XSS protection (auto-escaping)

### 2. Cross-Site Request Forgery (CSRF)
**Protection**:
- CSRF tokens for forms
- SameSite cookie attribute
- Verify origin headers

### 3. SQL Injection
**Protection**:
- Not applicable (no direct database access)
- EmailJS handles backend securely

### 4. Clickjacking
**Protection**:
- X-Frame-Options header
- CSP frame-ancestors directive

### 5. Man-in-the-Middle (MITM)
**Protection**:
- HTTPS/SSL encryption
- HSTS header
- Certificate pinning (advanced)

### 6. Open Redirect
**Protection**:
- `isValidURL()` function
- Validate redirect URLs
- Whitelist allowed domains

## 📝 Code Examples

### Using Input Sanitization:
```typescript
import { sanitizeFormData } from '../utils/security';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const sanitized = sanitizeFormData(formData);
  if (!sanitized.isValid) {
    // Handle errors
    console.error(sanitized.errors);
    return;
  }
  
  // Use sanitized data
  // ...
};
```

### Rate Limiting:
```typescript
import { checkRateLimit } from '../utils/security';

if (!checkRateLimit('contact_form', 5, 60000)) {
  alert('Too many requests. Please try again later.');
  return;
}
```

## 🔧 Apache Security Configuration

Security headers are configured in `/etc/apache2/sites-available/anas.local.conf`:

```apache
# Security Headers
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.emailjs.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.emailjs.com;"
```

## 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [React Security Best Practices](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

## ⚠️ Important Notes

1. **Client-side security is not enough**: Always implement server-side validation
2. **EmailJS API keys**: Public keys are safe to expose, but monitor usage
3. **Regular audits**: Run `npm audit` regularly and fix vulnerabilities
4. **Monitor logs**: Check Apache error logs regularly for suspicious activity
5. **Backup regularly**: Keep regular backups of your website and database

## 🆘 Incident Response

If you suspect a security breach:

1. **Immediately**:
   - Change all passwords
   - Revoke API keys
   - Check server logs
   - Review recent changes

2. **Investigation**:
   - Identify attack vector
   - Assess damage
   - Document findings

3. **Remediation**:
   - Patch vulnerabilities
   - Update security measures
   - Notify affected users (if applicable)

4. **Prevention**:
   - Update security policies
   - Implement additional protections
   - Regular security audits

---

**Last Updated**: 2025
**Maintained By**: ANAS KP

