/**
 * Ads Configuration
 * 
 * Add your ad codes here. The system will automatically load them
 * into ad placeholders on pages that use the AdsPlaceholder component.
 * 
 * Format:
 * - key: unique identifier (e.g., 'heic-to-pdf-top')
 * - selector: CSS selector for the ad container
 * - code: HTML/JavaScript code for the ad (will be injected)
 * - enabled: whether this ad is active
 */

export interface AdConfig {
  key: string;
  selector: string;
  code: string;
  enabled: boolean;
}

export const adsConfig: AdConfig[] = [
  // Example: HEIC to PDF - Top ad
  {
    key: 'heic-to-pdf-top',
    selector: '[data-ad-position="top"]',
    code: `
      <!-- Example AdSense code - replace with your actual ad code -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
           crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-XXXXXXXXXX"
           data-ad-slot="1234567890"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    `,
    enabled: false, // Set to true when you have real ad code
  },
  
  // Example: HEIC to PDF - Bottom ad
  {
    key: 'heic-to-pdf-bottom',
    selector: '[data-ad-position="bottom"]',
    code: `
      <!-- Example AdSense code - replace with your actual ad code -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
           crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-XXXXXXXXXX"
           data-ad-slot="0987654321"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    `,
    enabled: false, // Set to true when you have real ad code
  },
];

/**
 * Initialize ads for a specific page
 * Call this function in useVisibleTask$ on pages with ad placeholders
 */
export const initializeAds = (pageKey: string) => {
  if (typeof window === 'undefined') return;

  const pageAds = adsConfig.filter(
    ad => ad.key.startsWith(pageKey) && ad.enabled
  );

  pageAds.forEach(ad => {
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      const container = document.querySelector(ad.selector);
      if (container && container.querySelector('svg')) {
        // Only inject if placeholder is still showing (not already replaced)
        // Create a wrapper div and inject the ad code
        const wrapper = document.createElement('div');
        wrapper.innerHTML = ad.code.trim();
        container.innerHTML = '';
        container.appendChild(wrapper);
        
        // Execute any scripts in the injected code
        const scripts = wrapper.querySelectorAll('script');
        scripts.forEach(oldScript => {
          const newScript = document.createElement('script');
          if (oldScript.src) {
            newScript.src = oldScript.src;
          }
          if (oldScript.innerHTML) {
            newScript.innerHTML = oldScript.innerHTML;
          }
          if (oldScript.async) {
            newScript.async = true;
          }
          if (oldScript.defer) {
            newScript.defer = true;
          }
          // Remove old script and add new one
          oldScript.remove();
          document.head.appendChild(newScript);
        });
      }
    }, 100);
  });
};
