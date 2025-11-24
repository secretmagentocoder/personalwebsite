# Production Deployment Guide

## Fixing 404 Errors on Direct URL Access

If you're getting 404 errors when directly accessing URLs like `https://anaskp.com/experience`, follow these steps:

## Problem

When you navigate using React Router links from the homepage, it works fine. But when you directly access a URL like `/experience` or refresh the page, you get a 404 error.

**Why?** Apache doesn't know about React Router routes. When you access `/experience` directly, Apache looks for a file at that path, which doesn't exist.

## Solution

You need to configure Apache to serve `index.html` for all routes (except static assets), so React Router can handle the routing client-side.

## Step-by-Step Fix

### 1. Ensure mod_rewrite is enabled

```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

### 2. Update Apache Virtual Host Configuration

For production site (`anaskp.com`), you need to configure Apache to:

**Option A: Use `.htaccess` file (Recommended for shared hosting)**

1. Ensure `.htaccess` file exists in your production `dist/` directory
2. Make sure Apache allows `.htaccess` files:

```apache
<Directory /var/www/html/anaskp.com/dist>
    Options -Indexes +FollowSymLinks
    AllowOverride All  # This allows .htaccess files
    Require all granted
</Directory>
```

**Option B: Add rewrite rules directly to Apache config (Recommended for VPS/dedicated server)**

Add these rules directly to your Apache virtual host configuration:

```apache
<Directory /var/www/html/anaskp.com/dist>
    Options -Indexes +FollowSymLinks
    AllowOverride All
    Require all granted
    
    # React Router - Fallback to index.html
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</Directory>
```

### 3. Full Production Apache Configuration

See `apache-production.conf.example` for a complete production configuration.

### 4. Reload Apache

After making changes:

```bash
sudo apache2ctl configtest  # Test configuration
sudo systemctl reload apache2  # Reload Apache
```

## Testing

1. **Build your production files:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to your production server

3. **Test direct URL access:**
   - Visit `https://anaskp.com/experience` directly
   - Should load correctly (not 404)

4. **Test navigation:**
   - Click links from homepage
   - Should work as before

5. **Test refresh:**
   - Navigate to `/experience`
   - Refresh the page (F5)
   - Should still work (not 404)

## Common Issues

### Issue: Still getting 404 after configuration

**Check:**
1. Is `mod_rewrite` enabled? (`sudo a2enmod rewrite`)
2. Is `AllowOverride All` set in Apache config?
3. Is `.htaccess` file in the `dist/` directory?
4. Are rewrite rules correct in Apache config?
5. Did you reload Apache? (`sudo systemctl reload apache2`)

### Issue: Static assets (CSS/JS/images) not loading

**Fix:** Make sure rewrite rules exclude existing files:
```apache
RewriteCond %{REQUEST_FILENAME} !-f  # Don't rewrite if file exists
RewriteCond %{REQUEST_FILENAME} !-d  # Don't rewrite if directory exists
```

### Issue: Infinite redirect loop

**Fix:** Make sure the rewrite rule excludes `index.html`:
```apache
RewriteRule ^index\.html$ - [L]  # Don't rewrite index.html
```

## Production Checklist

- [ ] `mod_rewrite` enabled
- [ ] Apache virtual host configured with rewrite rules
- [ ] `.htaccess` file in `dist/` directory
- [ ] `AllowOverride All` set (if using `.htaccess`)
- [ ] Production build created (`npm run build`)
- [ ] `dist/` folder deployed to production server
- [ ] Apache reloaded/restarted
- [ ] Direct URL access tested
- [ ] Page refresh tested
- [ ] Static assets loading correctly

## Quick Reference

**Enable mod_rewrite:**
```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

**Test Apache config:**
```bash
sudo apache2ctl configtest
```

**Reload Apache:**
```bash
sudo systemctl reload apache2
```

**Check if rewrite is working:**
```bash
curl -I https://anaskp.com/experience
# Should return 200 OK, not 404
```

---

**Need help?** Check Apache error logs:
```bash
tail -f /var/log/apache2/anaskp.com-error.log
```

