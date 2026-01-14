# SEO Changes Summary

## ✅ Co zostało zrobione:

### 1. **SoftwareApplication Schema** (dla wszystkich konwerterów)
- Utworzono helper: `src/seo/softwareApplicationSchema.ts`
- Dodano schema do:
  - `src/routes/convert/heic-to-jpg/index.tsx`
  - `src/routes/convert/heic-to-pdf/index.tsx`
  - `src/routes/convert/heic-to-png/index.tsx`
- Schema zawiera: name, description, url, lang, applicationCategory, operatingSystem, offers

### 2. **Usunięto `keywords` meta tag**
- Google ignoruje meta keywords (legacy)
- Usunięto z wszystkich stron konwerterów

### 3. **Zmieniono `og:type` z "website" na "article"**
- Lepsze dla stron konwerterów (nie homepage)
- Lepsze preview na Facebook/X/Slack
- Zastosowano do wszystkich konwerterów

### 4. **Dynamiczny `og:url`**
- Zamiast hardcoded URL
- Teraz: `url.origin + url.pathname` (zgodne z canonicalem w RouterHead)
- Zastosowano do wszystkich konwerterów

### 5. **RouterHead - poprawki wcześniejsze**
- Canonical URL bez query params
- Dynamiczny `inLanguage` per język
- `hreflang` links dla wszystkich 16 języków
- WebSite schema tylko na homepage
- Organization schema zawsze

## 📁 Pliki zmienione:
- `src/seo/softwareApplicationSchema.ts` (NOWY)
- `src/routes/convert/heic-to-jpg/index.tsx`
- `src/routes/convert/heic-to-pdf/index.tsx`
- `src/routes/convert/heic-to-png/index.tsx`
- `src/components/router-head/router-head.tsx` (wcześniej)

## 🎯 Struktura SEO (finalna):
```
Homepage:
├── Organization + WebSite schema (RouterHead)
├── og:type: "website"
└── og:url: statyczny (OK na razie)

Converter pages:
├── SoftwareApplication schema (per page)
├── og:type: "article"
├── og:url: dynamiczny (url.origin + url.pathname)
└── brak keywords (usunięte)
```

## 📝 Do przypomnienia:
"Zrobiłeś SEO dla konwerterów: SoftwareApplication schema, usunięte keywords, og:type: article, dynamiczny og:url. Wszystko w plikach heic-to-jpg/pdf/png."
