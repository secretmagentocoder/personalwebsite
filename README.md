# ANAS KP - Personal Website

Professional portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Start Development Server
```bash
cd /var/www/html/anas.local
npm run dev
```

### Access Website
- **Via Virtual Host:** http://anas.local
- **Direct Vite Server:** http://localhost:5173

## 📋 Prerequisites

- Node.js (v20+)
- npm
- Apache web server
- Virtual host configured

## 📖 Full Setup Guide

For detailed setup instructions, troubleshooting, and production deployment, see **[SETUP_GUIDE.md](./SETUP_GUIDE.md)**

## 🛠️ Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## ⚠️ Important Notes

- **Always start the Vite dev server before accessing anas.local**
- The dev server must be running for the Apache proxy to work
- Changes are hot-reloaded automatically

## 🏗️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## 📁 Project Structure

```
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── App.tsx      # Main app
│   └── main.tsx     # Entry point
├── index.html       # HTML template
└── vite.config.ts   # Vite config
```

---

**For detailed setup and troubleshooting, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)**
