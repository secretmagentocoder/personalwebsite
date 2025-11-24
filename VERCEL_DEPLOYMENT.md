# Vercel Deployment Guide

## Fixing 404 Errors on Vercel

If you're getting 404 errors when accessing URLs like `https://anaskp.com/experience` directly, you need to configure Vercel to handle React Router routes.

## Solution: Add `vercel.json` Configuration

I've created a `vercel.json` file in your project root. This file tells Vercel to serve `index.html` for all routes, allowing React Router to handle routing client-side.

## What the Configuration Does

The `vercel.json` file includes:

1. **Rewrites**: Redirects all routes to `index.html` so React Router can handle them
2. **Security Headers**: Adds important security headers to protect your site

## Deployment Steps

### 1. Commit the `vercel.json` file

```bash
git add vercel.json
git commit -m "Add Vercel configuration for React Router"
git push
```

### 2. Deploy to Vercel

If you're using Vercel CLI:
```bash
vercel --prod
```

Or if using Git integration, just push to your main branch and Vercel will auto-deploy.

### 3. Verify Deployment

After deployment, test:
- `https://anaskp.com/experience` - Should work ✅
- `https://anaskp.com/about` - Should work ✅
- `https://anaskp.com/projects` - Should work ✅
- Refresh any page - Should still work ✅

## How It Works

When someone visits `https://anaskp.com/experience`:
1. Vercel receives the request
2. The `vercel.json` rewrite rule catches it
3. Vercel serves `index.html` instead
4. React Router loads and handles the `/experience` route
5. The correct page displays ✅

## Alternative: Using `_redirects` File

If `vercel.json` doesn't work, you can also use a `_redirects` file in your `public` folder:

**Create `public/_redirects`:**
```
/*    /index.html   200
```

This does the same thing but uses Vercel's redirects feature.

## Build Configuration

Make sure your Vercel project settings are correct:

1. **Framework Preset**: Vite
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Install Command**: `npm install`

## Troubleshooting

### Still Getting 404?

1. **Check if `vercel.json` is in the root** of your project (same level as `package.json`)

2. **Verify it's committed to git:**
   ```bash
   git ls-files | grep vercel.json
   ```

3. **Check Vercel deployment logs:**
   - Go to your Vercel dashboard
   - Click on the latest deployment
   - Check the build logs

4. **Try redeploying:**
   - In Vercel dashboard, click "Redeploy"
   - Or push a new commit

### Verify Configuration

After deployment, check the Network tab in browser DevTools:
- Visit `https://anaskp.com/experience`
- Should return `200 OK` (not 404)
- The response should be `index.html`

## Additional Vercel Settings

### Environment Variables

If you need environment variables, add them in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add any needed variables (like EmailJS keys)

### Custom Domain

Make sure your custom domain (`anaskp.com`) is configured:
- Go to Project Settings → Domains
- Add `anaskp.com` and `www.anaskp.com`
- Follow DNS setup instructions

## Quick Checklist

- [ ] `vercel.json` file exists in project root
- [ ] File is committed to git
- [ ] Pushed to repository
- [ ] Vercel deployment completed
- [ ] Tested direct URL access
- [ ] Tested page refresh

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **React Router on Vercel**: https://vercel.com/docs/configuration#routes
- **Check deployment logs** in Vercel dashboard

---

**The `vercel.json` file is already created in your project!** Just commit and deploy. 🚀

