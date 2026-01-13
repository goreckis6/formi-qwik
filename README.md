# FormiPeek - Qwik Application

A high-performance file conversion and viewing platform built with Qwik 1.18.0.

## Tech Stack

- **Framework:** Qwik 1.18.0
- **Routing:** Qwik City 1.18.0 (file-based routing)
- **Build Tool:** Vite 5.0.0 (with Qwik plugins)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (via CDN)
- **Features:** Server-Side Rendering (SSR) ready

## Project Structure

```
formmi2/
├── src/
│   ├── components/
│   │   ├── header/
│   │   │   └── header.tsx
│   │   ├── footer/
│   │   │   └── footer.tsx
│   │   └── router-head/
│   │       └── router-head.tsx
│   ├── routes/
│   │   ├── layout.tsx
│   │   └── index.tsx
│   ├── root.tsx
│   ├── entry.ssr.tsx
│   └── global.css
├── public/
│   └── logo.jpg
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features

- 🚀 **Lightning Fast** - Resumable, out-of-order streaming with Qwik
- 📱 **Responsive Design** - Mobile-first, fully responsive UI
- 🎨 **Modern UI** - Beautiful gradients, animations, and transitions
- ♿ **Accessible** - Semantic HTML and ARIA attributes
- 🔍 **SEO Optimized** - JSON-LD structured data and meta tags
- ⚡ **Zero Hydration** - Instant interactivity with Qwik's resumability

## Routes

- `/` - Home page with hero section, stats, and features
- `/converters` - File converters page (to be implemented)
- `/viewers` - File viewers page (to be implemented)
- `/compress` - Compression tools page (to be implemented)
- `/samples` - Sample files page (to be implemented)

## Components

### Header
- Sticky navigation with logo and links
- Mobile-responsive menu
- Language switcher

### Footer
- Company information
- Security notice
- Social links placeholder

### Router Head
- Dynamic meta tags
- SEO optimization
- JSON-LD schema markup

## Customization

To customize the site:

1. **Update branding** - Modify logo in `public/logo.jpg`
2. **Change colors** - Edit gradient classes in components
3. **Add routes** - Create new files in `src/routes/`
4. **Add components** - Create new components in `src/components/`

## License

© 2025 FormiPeek. All rights reserved.
# formi-qwik

## Node Server

This app has a minimal zero-dependencies server. Using the built-in `http.createServer` API.
This should be faster and less overhead than Express or other frameworks.

After running a full build, you can preview the build using the command:

```
npm run serve
```

Then visit [http://localhost:3004/](http://localhost:3004/)
