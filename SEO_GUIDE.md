# SEO & Prerendering Guide

Complete guide for SEO optimization and static site generation in your Qwik app.

## 🎯 Current SEO Implementation

### ✅ What's Already Set Up

1. **Server-Side Rendering (SSR)**
   - All pages render on the server
   - Search engines see full HTML content
   - Fast initial page load

2. **Static Site Generation (SSG)**
   - Routes are prerendered at build time
   - Configured in `vite.config.ts`
   - Routes prerendered: `/`, `/converters`, `/viewers`, `/compress`, `/samples`

3. **Meta Tags**
   - Title tags (unique per page)
   - Description meta tags
   - Keywords meta tags
   - Open Graph tags (Facebook)
   - Twitter Card tags

4. **Structured Data**
   - JSON-LD schema in `router-head.tsx`
   - Organization schema
   - WebSite schema

5. **Technical SEO**
   - Canonical URLs
   - robots.txt
   - sitemap.xml
   - Semantic HTML
   - Mobile responsive
   - Fast loading (Qwik's resumability)

## 🚀 How Prerendering Works

### Current Configuration

In `vite.config.ts`:

```typescript
qwikCity({
  staticGenerate: {
    maxWorkers: 4,
    routes: [
      '/',
      '/converters',
      '/viewers',
      '/compress',
      '/samples',
    ],
  },
})
```

### What Happens at Build Time

When you run `npm run build`:

1. **Static HTML Generation**
   - Each route in the `routes` array is rendered
   - Full HTML is generated and saved to `dist/`
   - No JavaScript needed for initial render

2. **Benefits**
   - ⚡ Instant page loads (HTML is already rendered)
   - 🔍 Perfect for SEO (crawlers see full content)
   - 📊 Better Core Web Vitals scores
   - 💰 Can be hosted on CDN (Netlify, Vercel, etc.)

3. **Process**
   ```
   npm run build
   → Prerender all routes
   → Generate static HTML files
   → Optimize assets
   → Output to dist/
   ```

## 📝 Adding More Routes to Prerender

### For Static Pages

Add to `vite.config.ts`:

```typescript
routes: [
  '/',
  '/converters',
  '/viewers',
  '/compress',
  '/samples',
  '/about',        // Add new route
  '/privacy',      // Add new route
  '/terms',        // Add new route
],
```

### For Dynamic Routes

If you have dynamic routes like `/convert/[format]`, you can:

1. **List them explicitly**:
```typescript
routes: [
  '/convert/csv-to-json',
  '/convert/pdf-to-docx',
  '/convert/jpg-to-png',
  // ... etc
],
```

2. **Or generate them programmatically**:

Create `prerender-routes.ts`:
```typescript
export function generateRoutes() {
  const formats = ['csv-to-json', 'pdf-to-docx', 'jpg-to-png'];
  return formats.map(format => `/convert/${format}`);
}
```

Then in `vite.config.ts`:
```typescript
import { generateRoutes } from './prerender-routes';

staticGenerate: {
  routes: [
    '/',
    '/converters',
    ...generateRoutes(),
  ],
}
```

## 🎨 Adding SEO to New Pages

### Example: Adding SEO to a new page

```typescript
// src/routes/about/index.tsx

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>About FormiPeek</h1>
      <p>Your content here...</p>
    </div>
  );
});

// SEO Configuration
export const head: DocumentHead = {
  title: "About Us - FormiPeek | Free File Conversion Platform",
  meta: [
    {
      name: "description",
      content: "Learn about FormiPeek, the free online file conversion platform trusted by millions.",
    },
    {
      name: "keywords",
      content: "about formipeek, file converter, company info",
    },
    // Open Graph
    {
      property: "og:title",
      content: "About FormiPeek - Free File Conversion",
    },
    {
      property: "og:description",
      content: "Learn about FormiPeek and our mission to provide free file conversion.",
    },
    {
      property: "og:url",
      content: "https://formipeek.com/about",
    },
    // Twitter
    {
      name: "twitter:title",
      content: "About FormiPeek",
    },
  ],
};
```

## 🗺️ Sitemap Management

### Current Sitemap

Location: `public/sitemap.xml`

### Updating the Sitemap

When you add new pages, update `sitemap.xml`:

```xml
<url>
  <loc>https://formipeek.com/your-new-page</loc>
  <lastmod>2025-01-12</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

### Dynamic Sitemap Generation

For sites with many pages, generate sitemap dynamically:

Create `scripts/generate-sitemap.ts`:

```typescript
import fs from 'fs';

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/converters', priority: '0.9', changefreq: 'weekly' },
  // ... more routes
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>https://formipeek.com${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`).join('')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('✅ Sitemap generated!');
```

Add to `package.json`:
```json
"scripts": {
  "generate-sitemap": "tsx scripts/generate-sitemap.ts"
}
```

## 🔍 Testing SEO

### 1. Test with Google Search Console

After deployment:
- Add your site to [Google Search Console](https://search.google.com/search-console)
- Submit your sitemap: `https://yourdomain.com/sitemap.xml`
- Monitor indexing status

### 2. Rich Results Test

Test structured data:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- Paste your URL or HTML

### 3. Meta Tags Preview

Test social media previews:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 4. Local Testing

Test prerendered pages:

```bash
# Build the site
npm run build

# Preview the built site
npm run preview

# Check if pages are prerendered
ls dist/
# You should see index.html, converters/index.html, etc.
```

## 📊 Performance & Core Web Vitals

### Qwik Advantages

1. **Resumability**: No hydration needed
2. **Fine-grained lazy loading**: Load code on interaction
3. **Optimal bundle size**: Send less JavaScript

### Monitoring

Use these tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

### Expected Scores

With Qwik and prerendering:
- **Lighthouse Performance**: 95-100
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 2s
- **Cumulative Layout Shift**: < 0.1

## 🚀 Deployment for Best SEO

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Vercel automatically:
- Enables CDN
- Sets proper cache headers
- Supports SSR and SSG
- Provides analytics

### Option 2: Netlify

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Option 3: Static Hosting (Cloudflare Pages, AWS S3, etc.)

After `npm run build`, deploy the `dist/` folder to any static host.

## 📋 SEO Checklist

Before launching:

- [ ] Unique title for each page (50-60 characters)
- [ ] Unique description for each page (150-160 characters)
- [ ] Open Graph images (1200x630px recommended)
- [ ] Favicon and app icons
- [ ] robots.txt configured
- [ ] sitemap.xml updated
- [ ] Canonical URLs set
- [ ] JSON-LD structured data
- [ ] Mobile responsive
- [ ] Fast loading times (< 3s)
- [ ] HTTPS enabled
- [ ] No broken links
- [ ] Alt text for images
- [ ] Semantic HTML (h1, h2, etc.)

## 🎯 Advanced SEO

### 1. Add More Schema Types

In your pages, add relevant schemas:

- **Article**: For blog posts
- **Product**: For converter tools
- **FAQPage**: For FAQ sections
- **HowTo**: For tutorials

### 2. Implement Breadcrumbs

Add breadcrumb navigation and schema:

```typescript
const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://formipeek.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Converters",
      "item": "https://formipeek.com/converters"
    }
  ]
};
```

### 3. Add Language Alternatives

For multi-language support:

```typescript
export const head: DocumentHead = {
  links: [
    {
      rel: "alternate",
      hreflang: "en",
      href: "https://formipeek.com/",
    },
    {
      rel: "alternate",
      hreflang: "pl",
      href: "https://formipeek.com/pl/",
    },
  ],
};
```

## 📈 Monitoring SEO Performance

### Key Metrics to Track

1. **Organic Traffic**: Google Analytics
2. **Search Rankings**: Google Search Console
3. **Indexing Status**: Google Search Console
4. **Core Web Vitals**: PageSpeed Insights
5. **Backlinks**: Ahrefs, SEMrush

### Regular Tasks

- **Weekly**: Check Search Console for issues
- **Monthly**: Review rankings and traffic
- **Quarterly**: Audit content and update outdated info
- **Yearly**: Full SEO audit

## 🆘 Troubleshooting

### Pages Not Being Indexed

1. Check `robots.txt` allows crawling
2. Submit sitemap to Google Search Console
3. Check for `noindex` meta tags
4. Verify canonical URLs are correct

### Slow Loading Times

1. Run Lighthouse audit
2. Optimize images (use WebP)
3. Check bundle size
4. Enable CDN
5. Use prerendering

### Duplicate Content

1. Set canonical URLs
2. Use `rel="canonical"` tags
3. Avoid duplicate pages

## 📚 Resources

- [Qwik SEO Guide](https://qwik.builder.io/docs/guides/static-site-generation/)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)

---

Your site is now fully optimized for SEO and prerendering! 🚀
