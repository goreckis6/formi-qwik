/**
 * Global Ads Configuration
 *
 * Add your ad codes here. The system will automatically load them
 * into ad placeholders on ALL pages that use the AdsPlaceholder component.
 *
 * Format:
 * - position: 'top' or 'bottom' - where the ad appears
 * - code: HTML/JavaScript code for the ad (will be injected)
 * - enabled: whether this ad is active
 */

export interface AdConfig {
  position: 'top' | 'bottom';
  code: string;
  enabled: boolean;
}

/**
 * Global ads toggle
 * Set to false to disable all ads and hide all placeholders site-wide
 */
export const ADS_ENABLED = true; // Set to false to disable all ads globally

/**
 * Global ads configuration
 * These ads will be loaded on ALL pages with ad placeholders
 */
export const adsConfig: AdConfig[] = [
  // ============================================
  // Top Ad (Above Upload/Content Area)
  // ============================================
  {
    position: 'top',
    code: `
      <!-- Google AdSense - Responsive Display Ad -->
      <!-- Replace ca-pub-XXXXXXXXXX with your AdSense Publisher ID -->
      <!-- Replace 1234567890 with your Ad Slot ID -->
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

  // ============================================
  // Bottom Ad (Below Upload/Content Area)
  // ============================================
  {
    position: 'bottom',
    code: `
      <!-- Google AdSense - Responsive Display Ad -->
      <!-- Replace ca-pub-XXXXXXXXXX with your AdSense Publisher ID -->
      <!-- Replace 0987654321 with your Ad Slot ID -->
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

  // ============================================
  // ALTERNATIVE: Fixed Size Display Ad (300x250)
  // ============================================
  // Uncomment and use this if you prefer fixed-size ads
  /*
  {
    position: 'top',
    code: `
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
           crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
           style="display:inline-block;width:300px;height:250px"
           data-ad-client="ca-pub-XXXXXXXXXX"
           data-ad-slot="1234567890"></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    `,
    enabled: false,
  },
  */

  // ============================================
  // ALTERNATIVE: In-Article Ad (for content pages)
  // ============================================
  /*
  {
    position: 'top',
    code: `
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
           crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
           style="display:block; text-align:center;"
           data-ad-layout="in-article"
           data-ad-format="fluid"
           data-ad-client="ca-pub-XXXXXXXXXX"
           data-ad-slot="1234567890"></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    `,
    enabled: false,
  },
  */

  // ============================================
  // ALTERNATIVE: Custom Ad Network (e.g., Media.net, PropellerAds)
  // ============================================
  /*
  {
    position: 'top',
    code: `
      <!-- Example: Media.net -->
      <div id="mnet_ads_container"></div>
      <script type="text/javascript">
        (function() {
          var script = document.createElement('script');
          script.src = 'https://contextual.media.net/dmed.js?cid=YOUR_CUSTOMER_ID';
          script.async = true;
          document.head.appendChild(script);
        })();
      </script>
    `,
    enabled: false,
  },
  */
];

/**
 * Check if ads are enabled globally
 */
export const areAdsEnabled = (): boolean => {
  return ADS_ENABLED && adsConfig.some((ad) => ad.enabled);
};

/**
 * Check if there's an enabled ad for a specific position
 */
export const hasEnabledAdForPosition = (position: 'top' | 'bottom'): boolean => {
  if (!ADS_ENABLED) return false;
  return adsConfig.some((ad) => ad.position === position && ad.enabled);
};

/**
 * Initialize ads globally
 * Call this function in useVisibleTask$ on pages with ad placeholders
 * Works for ALL pages - no pageKey needed
 */
export const initializeAds = () => {
  if (typeof window === "undefined") return;
  
  if (!ADS_ENABLED) {
    // Hide all placeholders if ads are globally disabled
    hidePlaceholders();
    return;
  }

  // Initialize ads for each position
  (['top', 'bottom'] as const).forEach((position) => {
    const ad = adsConfig.find((a) => a.position === position && a.enabled);
    
    if (!ad) {
      // No enabled ad for this position - hide placeholders
      hidePlaceholdersForPosition(position);
      return;
    }

    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      const containers = document.querySelectorAll(`[data-ad-position="${position}"]`);
      containers.forEach((container) => {
        if (container.querySelector("svg")) {
          // Only inject if placeholder is still showing (not already replaced)
          // Create a wrapper div and inject the ad code
          const wrapper = document.createElement("div");
          wrapper.innerHTML = ad.code.trim();
          container.innerHTML = "";
          container.appendChild(wrapper);

          // Execute any scripts in the injected code
          const scripts = wrapper.querySelectorAll("script");
          scripts.forEach((oldScript) => {
            const newScript = document.createElement("script");
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
      });
    }, 100);
  });
};

/**
 * Hide all ad placeholders
 */
const hidePlaceholders = () => {
  if (typeof window === "undefined") return;
  setTimeout(() => {
    const placeholders = document.querySelectorAll('[data-ad-position]');
    placeholders.forEach((placeholder) => {
      const container = placeholder.closest('.ads-container') as HTMLElement;
      if (container) {
        container.style.display = 'none';
      }
    });
  }, 100);
};

/**
 * Hide placeholders for a specific position
 */
const hidePlaceholdersForPosition = (position: 'top' | 'bottom') => {
  if (typeof window === "undefined") return;
  setTimeout(() => {
    const placeholders = document.querySelectorAll(`[data-ad-position="${position}"]`);
    placeholders.forEach((placeholder) => {
      const container = placeholder.closest('.ads-container') as HTMLElement;
      if (container) {
        container.style.display = 'none';
      }
    });
  }, 100);
};
