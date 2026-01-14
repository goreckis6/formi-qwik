import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { SHOW_PLACEHOLDERS, ADS_ENABLED, hasEnabledAdForPosition } from "~/lib/ads-config";

interface AdsPlaceholderProps {
  position: 'top' | 'bottom';
  className?: string;
}

export const AdsPlaceholder = component$<AdsPlaceholderProps>((props) => {
  const shouldShow = useSignal(true);
  const showAdCode = useSignal(false);

  useVisibleTask$(() => {
    // Check if placeholders should be shown (independent toggle)
    if (!SHOW_PLACEHOLDERS) {
      shouldShow.value = false;
      return;
    }

    // Placeholders are enabled - show them
    shouldShow.value = true;

    // Check if ad code should be injected (independent toggle)
    // Ad code is injected only if ADS_ENABLED is true AND there's an enabled ad for this position
    if (ADS_ENABLED) {
      const hasAd = hasEnabledAdForPosition(props.position);
      showAdCode.value = hasAd;
    } else {
      showAdCode.value = false;
    }
  });

  // Don't render if placeholders are disabled
  if (!shouldShow.value) {
    return null;
  }

  return (
    <div class={`ads-container ads-${props.position} ${props.className || ''}`}>
      {/* Ad placeholder - will be replaced by ad script */}
      <div 
        id={`ad-${props.position}`}
        class="w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center min-h-[100px] sm:min-h-[250px] flex items-center justify-center"
        data-ad-position={props.position}
      >
        <div class="text-gray-400 text-xs sm:text-sm">
          <svg class="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
          </svg>
          <p class="hidden sm:block">Advertisement</p>
          <p class="text-xs">Ad Space</p>
        </div>
      </div>
    </div>
  );
});
