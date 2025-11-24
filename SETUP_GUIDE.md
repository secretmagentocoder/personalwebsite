# Setup Guide - ANAS KP Personal Website

## Quick Start

### 1. Start Development Server

```bash
cd /var/www/html/anas.local
npm run dev
```

The dev server will start on `http://localhost:5173`

### 2. Access via Virtual Host

Once the dev server is running, access your website at:
- **http://anas.local** (via Apache proxy)
- **http://localhost:5173** (direct Vite server)

---

## Prerequisites

Make sure you have:
- ✅ Node.js installed (v20+)
- ✅ npm installed
- ✅ Apache web server running
- ✅ Virtual host configured (`anas.local.conf`)

---

## Initial Setup (First Time Only)

### Install Dependencies

```bash
cd /var/www/html/anas.local
npm install
```

This installs all required packages (React, Vite, TypeScript, Tailwind CSS, etc.)

---

## Starting the Development Server

### Option 1: Foreground (with logs)
```bash
cd /var/www/html/anas.local
npm run dev
```

### Option 2: Background (detached)
```bash
cd /var/www/html/anas.local
npm run dev > /tmp/vite.log 2>&1 &
```

### Option 3: Using nohup (persistent)
```bash
cd /var/www/html/anas.local
nohup npm run dev > /tmp/vite.log 2>&1 &
```

### Check if Server is Running
```bash
ps aux | grep vite
# or
netstat -tlnp | grep 5173
```

---

## Apache Virtual Host Configuration

The virtual host is configured at: `/etc/apache2/sites-available/anas.local.conf`

### Current Configuration
- ✅ Proxies all requests to Vite dev server (port 5173)
- ✅ Supports WebSocket for Hot Module Replacement (HMR)
- ✅ No DocumentRoot (everything goes through proxy)

### Reload Apache After Changes
```bash
sudo systemctl reload apache2
# or
sudo service apache2 reload
```

### Test Apache Configuration
```bash
sudo apache2ctl configtest
```

---

## Available npm Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## Troubleshooting

### Blank Page on anas.local

1. **Check if Vite dev server is running:**
   ```bash
   ps aux | grep vite
   ```

2. **If not running, start it:**
   ```bash
   cd /var/www/html/anas.local
   npm run dev
   ```

3. **Check Apache proxy:**
   ```bash
   curl -I http://anas.local/@vite/client
   # Should return: HTTP/1.1 200 OK
   ```

4. **Clear browser cache:**
   - Hard refresh: `Ctrl + Shift + R` (Linux/Windows) or `Cmd + Shift + R` (Mac)
   - Or use incognito/private window

5. **Check Apache error logs:**
   ```bash
   tail -f /var/log/apache2/anas.local-error.log
   ```

### Port Already in Use

If port 5173 is already in use:
```bash
# Find and kill the process
lsof -ti:5173 | xargs kill -9
# or
pkill -f vite
```

### Assets Not Loading

1. Verify proxy is working:
   ```bash
   curl http://anas.local/@vite/client
   ```

2. Check Apache virtual host config:
   ```bash
   cat /etc/apache2/sites-available/anas.local.conf
   ```

3. Ensure ProxyPass is configured correctly

### React App Not Rendering

1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify all scripts are loading:
   - `/@vite/client` should return 200
   - `/src/main.tsx` should return 200
   - `/@react-refresh` should return 200

---

## Production Build

### Build for Production

```bash
cd /var/www/html/anas.local
npm run build
```

This creates a `dist/` folder with optimized production files.

### Serve Production Build

Update Apache virtual host to serve from `dist/` folder:

```apache
<VirtualHost *:80>
    ServerName anas.local
    DocumentRoot /var/www/html/anas.local/dist
    
    <Directory /var/www/html/anas.local/dist>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/anas.local-error.log
    CustomLog ${APACHE_LOG_DIR}/anas.local-access.log combined
</VirtualHost>
```

Then reload Apache:
```bash
sudo systemctl reload apache2
```

---

## Project Structure

```
anas.local/
├── public/              # Static assets (images, favicon, etc.)
├── src/
│   ├── components/     # React components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS config
├── package.json        # Dependencies
└── tsconfig.json       # TypeScript config
```

---

## Development Workflow

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Make changes** to files in `src/` directory

3. **See changes instantly** - Vite HMR will auto-reload

4. **Access via:**
   - http://anas.local (recommended)
   - http://localhost:5173

---

## Important Notes

- ⚠️ **Always start the Vite dev server before accessing anas.local**
- ⚠️ **The dev server must be running for the proxy to work**
- ✅ **Changes are hot-reloaded automatically (no refresh needed)**
- ✅ **Use `npm run build` for production deployment**

---

## Quick Reference Commands

```bash
# Start dev server
cd /var/www/html/anas.local && npm run dev

# Check if running
ps aux | grep vite

# Stop dev server
pkill -f vite

# Reload Apache
sudo systemctl reload apache2

# View Apache logs
tail -f /var/log/apache2/anas.local-error.log

# Build for production
npm run build
```

---

## Need Help?

1. Check browser console (F12) for errors
2. Check Apache error logs: `/var/log/apache2/anas.local-error.log`
3. Verify Vite dev server is running: `ps aux | grep vite`
4. Test proxy: `curl http://anas.local/@vite/client`

---

**Last Updated:** November 2025
**Project:** ANAS KP Personal Website
**Tech Stack:** React + TypeScript + Vite + Tailwind CSS

