# Deployment Guide

This guide covers deploying your Qwik application to various platforms.

## 📦 Build for Production

Before deploying, build your application:

```bash
npm run build
```

This creates optimized production files in the `dist/` directory.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel has native support for Qwik applications.

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment.

**Or use GitHub integration:**
- Push your code to GitHub
- Import repository on [vercel.com](https://vercel.com)
- Vercel auto-detects Qwik and deploys

### Option 2: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Create `netlify.toml` in project root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

3. Deploy:
```bash
netlify deploy --prod
```

### Option 3: Cloudflare Pages

1. Build your project:
```bash
npm run build
```

2. Create a new Pages project in Cloudflare Dashboard

3. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 18 or higher

4. Connect your Git repository and deploy

### Option 4: Node.js Server

For self-hosted deployments:

1. Ensure Node.js 18+ is installed on your server

2. Build the project:
```bash
npm run build
```

3. Install production dependencies:
```bash
npm ci --production
```

4. Start the server:
```bash
node dist/server/entry.ssr.js
```

5. Use a process manager like PM2:
```bash
npm install -g pm2
pm2 start dist/server/entry.ssr.js --name formipeek
pm2 save
pm2 startup
```

### Option 5: Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm ci --production

EXPOSE 3000
CMD ["node", "dist/server/entry.ssr.js"]
```

Build and run:
```bash
docker build -t formipeek .
docker run -p 3000:3000 formipeek
```

## 🌍 Environment Variables

For production, create a `.env.production` file:

```bash
NODE_ENV=production
APP_URL=https://yourdomain.com
```

## 🔧 Pre-Deployment Checklist

- [ ] Replace placeholder logo with actual logo
- [ ] Update meta tags and SEO information
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Test on mobile devices
- [ ] Run performance audit (Lighthouse)
- [ ] Set up SSL certificate
- [ ] Configure CDN if needed
- [ ] Test all routes and functionality
- [ ] Optimize images and assets

## 📊 Performance Optimization

### Before Deployment:

1. **Optimize Images**
   - Convert to WebP format
   - Use appropriate sizes
   - Implement lazy loading

2. **Enable Compression**
   Most hosting providers enable gzip/brotli by default

3. **Set Cache Headers**
   Configure in your hosting platform settings

4. **Use a CDN**
   Distribute static assets globally

### Monitor Performance:

- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- Check [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor with [Web Vitals](https://web.dev/vitals/)

## 🔐 Security Checklist

- [ ] Enable HTTPS
- [ ] Set security headers
- [ ] Implement rate limiting
- [ ] Sanitize user inputs
- [ ] Keep dependencies updated
- [ ] Use environment variables for secrets
- [ ] Enable CORS properly
- [ ] Implement CSP headers

## 📱 Custom Domain

### For Vercel/Netlify:

1. Go to project settings
2. Add custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate provisioning

### DNS Configuration Example:

```
Type: A
Name: @
Value: [Your hosting IP]

Type: CNAME
Name: www
Value: [Your hosting URL]
```

## 🐛 Troubleshooting

### Build Fails

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist .cache`
- Check Node.js version: `node -v` (should be 18+)

### Runtime Errors

- Check server logs
- Enable error tracking
- Test locally with production build: `npm run preview`

### Performance Issues

- Check bundle size: `npm run build -- --analyze`
- Optimize images and assets
- Implement code splitting
- Use CDN for static assets

## 📞 Support

For deployment issues:
- [Qwik Discord](https://qwik.builder.io/chat)
- [Qwik Documentation](https://qwik.builder.io/docs/deployments/)
- Check hosting provider documentation

---

Good luck with your deployment! 🚀
