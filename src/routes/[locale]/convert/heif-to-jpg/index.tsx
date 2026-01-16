import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { getTranslations, supportedLanguages } from "~/i18n";
import { getLocalizedPath } from "~/i18n/utils";
import { AdsPlaceholder } from "~/components/ads/ads-placeholder";
import { initializeAds } from "~/lib/ads-config";
import { getSoftwareApplicationSchema } from "~/seo/softwareApplicationSchema";
import { getFaqSchema } from "~/seo/faqSchema";

const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL || 'https://api.formipeek.com';

interface ConversionResult {
  originalName: string;
  outputFilename?: string;
  size?: number;
  success: boolean;
  error?: string;
  downloadPath?: string;
  blob?: Blob; // Store blob for single file downloads
}

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB per file
const MAX_BATCH_FILES = 20; // Maximum files in batch
const MAX_BATCH_TOTAL_SIZE = 100 * 1024 * 1024; // 100 MB total for batch

export const useLocaleLoader = routeLoader$(({ params, url }) => {
  const locale = params.locale || 'en';
  const isValidLocale = supportedLanguages.some(lang => lang.code === locale);
  const finalLocale = isValidLocale ? locale : 'en';
  
  return {
    locale: finalLocale,
    translations: getTranslations(finalLocale),
  };
});

export default component$(() => {
  const mode = useSignal<'single' | 'batch'>('single');
  const localeData = useLocaleLoader();
  const t = localeData.value.translations;
  const locale = localeData.value.locale;
  const conv = t.heifToJpg;

  const softwareSchema = getSoftwareApplicationSchema({
    name: conv.title,
    description: conv.metaDescription,
    url: `https://formipeek.com${locale === 'en' ? '' : `/${locale}`}/convert/heif-to-jpg`,
    lang: locale,
  });

  const faqSchema = getFaqSchema(conv.faq.items);

  // File handling signals
  const selectedFiles = useSignal<File[]>([]);
  const isConverting = useSignal(false);
  const progress = useSignal(0);
  const conversionResults = useSignal<ConversionResult[]>([]);
  const errorMessage = useSignal<string | null>(null);
  const dragOver = useSignal(false);

  // Handle file selection
  const handleFileSelect = $((event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files).filter(
        file => file.name.toLowerCase().endsWith('.heif') || file.name.toLowerCase().endsWith('.heif')
      );
      
      if (mode.value === 'single') {
        // Single file validation
        if (files.length > 0) {
          const file = files[0];
          if (file.size > MAX_FILE_SIZE) {
            errorMessage.value = `File size limit is 100 MB. "${file.name}" is too large.`;
            return;
          }
          selectedFiles.value = [file];
        }
      } else {
        // Batch validation
        if (files.length > MAX_BATCH_FILES) {
          errorMessage.value = `Maximum ${MAX_BATCH_FILES} files allowed in batch mode. You selected ${files.length} files.`;
          return;
        }
        
        const oversizedFiles = files.filter(file => file.size > MAX_FILE_SIZE);
        if (oversizedFiles.length > 0) {
          errorMessage.value = `File size limit is 100 MB per file. The following files are too large: ${oversizedFiles.map(f => f.name).join(', ')}`;
          return;
        }
        
        const totalSize = files.reduce((sum, file) => sum + file.size, 0);
        if (totalSize > MAX_BATCH_TOTAL_SIZE) {
          errorMessage.value = `Total size limit is 100 MB for batch conversion. Selected files total: ${formatFileSize(totalSize)}`;
          return;
        }
        
        selectedFiles.value = files;
      }
      
      errorMessage.value = null;
      conversionResults.value = [];
    }
  });

  // Handle drag and drop
  const handleDragOver = $((e: DragEvent) => {
    e.preventDefault();
    dragOver.value = true;
  });

  const handleDragLeave = $(() => {
    dragOver.value = false;
  });

  const handleDrop = $((e: DragEvent) => {
    e.preventDefault();
    dragOver.value = false;
    
    if (e.dataTransfer?.files) {
      const files = Array.from(e.dataTransfer.files).filter(
        file => file.name.toLowerCase().endsWith('.heif') || file.name.toLowerCase().endsWith('.heif')
      );
      
      if (mode.value === 'single') {
        // Single file validation
        if (files.length > 0) {
          const file = files[0];
          if (file.size > MAX_FILE_SIZE) {
            errorMessage.value = `File size limit is 100 MB. "${file.name}" is too large.`;
            return;
          }
          selectedFiles.value = [file];
        }
      } else {
        // Batch validation
        if (files.length > MAX_BATCH_FILES) {
          errorMessage.value = `Maximum ${MAX_BATCH_FILES} files allowed in batch mode. You selected ${files.length} files.`;
          return;
        }
        
        const oversizedFiles = files.filter(file => file.size > MAX_FILE_SIZE);
        if (oversizedFiles.length > 0) {
          errorMessage.value = `File size limit is 100 MB per file. The following files are too large: ${oversizedFiles.map(f => f.name).join(', ')}`;
          return;
        }
        
        const totalSize = files.reduce((sum, file) => sum + file.size, 0);
        if (totalSize > MAX_BATCH_TOTAL_SIZE) {
          errorMessage.value = `Total size limit is 100 MB for batch conversion. Selected files total: ${formatFileSize(totalSize)}`;
          return;
        }
        
        selectedFiles.value = files;
      }
      
      errorMessage.value = null;
      conversionResults.value = [];
    }
  });

  // Download handler
  const downloadFile = $(async (result: ConversionResult) => {
    try {
      let blob: Blob;
      
      if (result.blob) {
        // Single file - use stored blob
        blob = result.blob;
      } else if (result.downloadPath) {
        // Batch file - convert base64 data URL to blob (allows multiple downloads)
        const base64Data = result.downloadPath.split(',')[1];
        const binaryString = atob(base64Data);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        blob = new Blob([bytes], { type: 'image/jpeg' });
      } else {
        errorMessage.value = 'No file data available for download';
        return;
      }
      
      // Create download link with blob URL
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = result.outputFilename || 'converted.jpg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      // Revoke URL after a short delay to allow download to start
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : 'Download failed';
    }
  });

  // Download all as ZIP (batch mode only)
  const downloadAllAsZip = $(async () => {
    const successfulResults = conversionResults.value.filter(r => r.success);
    
    if (successfulResults.length === 0) {
      errorMessage.value = 'No successful conversions to download';
      return;
    }

    try {
      // Dynamic import JSZip (client-side only)
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      
      // Add all files to ZIP
      for (const result of successfulResults) {
        if (result.blob) {
          // Single file mode - use blob
          const arrayBuffer = await result.blob.arrayBuffer();
          zip.file(result.outputFilename || 'converted.jpg', arrayBuffer);
        } else if (result.downloadPath) {
          // Batch mode - convert base64 to blob
          const base64Data = result.downloadPath.split(',')[1];
          const binaryString = atob(base64Data);
          const bytes = new Uint8Array(binaryString.length);
          for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          zip.file(result.outputFilename || 'converted.jpg', bytes);
        }
      }

      // Generate ZIP file
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      
      // Download ZIP
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `heif-to-jpg-conversions-${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : 'Failed to create ZIP file';
    }
  });

  // Convert files
  const convertFiles = $(async () => {
    if (selectedFiles.value.length === 0) {
      errorMessage.value = 'Please select at least one HEIF file';
      return;
    }

    // Validate before conversion
    if (mode.value === 'single') {
      const file = selectedFiles.value[0];
      if (file.size > MAX_FILE_SIZE) {
        errorMessage.value = `File size limit is 100 MB. "${file.name}" is too large.`;
        return;
      }
    } else {
      // Batch validation
      if (selectedFiles.value.length > MAX_BATCH_FILES) {
        errorMessage.value = `Maximum ${MAX_BATCH_FILES} files allowed in batch mode.`;
        return;
      }
      
      const oversizedFiles = selectedFiles.value.filter(file => file.size > MAX_FILE_SIZE);
      if (oversizedFiles.length > 0) {
        errorMessage.value = `File size limit is 100 MB per file. The following files are too large: ${oversizedFiles.map(f => f.name).join(', ')}`;
        return;
      }
      
      const totalSize = selectedFiles.value.reduce((sum, file) => sum + file.size, 0);
      if (totalSize > MAX_BATCH_TOTAL_SIZE) {
        errorMessage.value = `Total size limit is 100 MB for batch conversion. Selected files total: ${formatFileSize(totalSize)}`;
        return;
      }
    }

    isConverting.value = true;
    progress.value = 0;
    errorMessage.value = null;
    conversionResults.value = [];

    try {
      if (mode.value === 'single') {
        // Single file conversion
        const formData = new FormData();
        formData.append('file', selectedFiles.value[0]);
        formData.append('quality', '95');
        formData.append('maxDimension', '4096');

        progress.value = 30;

        const response = await fetch(`${API_BASE_URL}/convert/heif-to-jpg/single`, {
          method: 'POST',
          body: formData,
        });

        progress.value = 70;

        if (response.ok) {
          const blob = await response.blob();
          const filename = selectedFiles.value[0].name.replace(/\.(heic|heif)$/i, '.jpg');
          
          // Store blob for download button (don't auto-download)
          conversionResults.value = [{
            originalName: selectedFiles.value[0].name,
            outputFilename: filename,
            size: blob.size,
            success: true,
            blob: blob,
          }];
        } else {
          const error = await response.json();
          throw new Error(error.error || 'Conversion failed');
        }
      } else {
        // Batch conversion
        const formData = new FormData();
        selectedFiles.value.forEach(file => {
          formData.append('files', file);
        });
        formData.append('quality', '95');
        formData.append('maxDimension', '4096');

        progress.value = 30;

        const response = await fetch(`${API_BASE_URL}/convert/heif-to-jpg/batch`, {
          method: 'POST',
          body: formData,
        });

        progress.value = 70;

        if (response.ok) {
          const data = await response.json();
          // Store results without auto-downloading
          conversionResults.value = data.results;
        } else {
          const error = await response.json();
          throw new Error(error.error || 'Batch conversion failed');
        }
      }

      progress.value = 100;
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : 'Conversion failed';
      conversionResults.value = [];
    } finally {
      isConverting.value = false;
    }
  });

  // Clear selection
  const clearSelection = $(() => {
    selectedFiles.value = [];
    conversionResults.value = [];
    errorMessage.value = null;
    progress.value = 0;
  });

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  // Initialize ads globally when component is visible
  useVisibleTask$(() => {
    initializeAds();
  });

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Banner */}
      <div class="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div class="text-center">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {conv.hero.title}
            </h1>
            <p class="text-lg sm:text-xl text-purple-100 mb-6 max-w-3xl mx-auto">
              {conv.hero.subtitle}
            </p>
            <div class="flex flex-wrap justify-center gap-4 text-sm text-purple-200">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{conv.hero.badge1}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>{conv.hero.badge2}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{conv.hero.badge3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Converter Panel */}
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              
              {/* Mode Toggle */}
              <div class="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick$={() => {
                    mode.value = 'single';
                    clearSelection();
                  }}
                  class={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    mode.value === 'single' 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <svg class="w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {conv.upload.buttonSingle}
                </button>
                <button 
                  onClick$={() => {
                    mode.value = 'batch';
                    clearSelection();
                  }}
                  class={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    mode.value === 'batch' 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <svg class="w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {conv.upload.buttonBatch}
                </button>
              </div>

              {/* Ad Placeholder - Top */}
              <AdsPlaceholder position="top" className="mb-6" />

              {/* Upload Area */}
              <div 
                class={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                  dragOver.value 
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-300 hover:border-purple-400'
                }`}
                onDragOver$={handleDragOver}
                onDragLeave$={handleDragLeave}
                onDrop$={handleDrop}
              >
                <input
                  type="file"
                  accept=".heif"
                  multiple={mode.value === 'batch'}
                  onChange$={handleFileSelect}
                  class="hidden"
                  id="file-input"
                />
                <label for="file-input" class="cursor-pointer">
                  <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    {mode.value === 'single' ? conv.upload.title : 'Drag & drop your HEIF photos here or click to browse'}
                  </h3>
                  <p class="text-gray-600 mb-4 text-sm sm:text-base">
                    {mode.value === 'single' 
                      ? conv.upload.description 
                      : 'Supports batch conversion up to 20 files. Maximum 100MB per file.'}
                  </p>
                  <span class="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl inline-block">
                    {conv.upload.chooseFile}
                  </span>
                </label>
              </div>

              {/* Ad Placeholder - Bottom */}
              <AdsPlaceholder position="bottom" className="mt-6" />

              {/* Selected Files */}
              {selectedFiles.value.length > 0 && (
                <div class="mt-6">
                  <h4 class="text-sm font-medium text-gray-700 mb-3">
                    Selected files ({selectedFiles.value.length}):
                  </h4>
                  <div class="space-y-2">
                    {selectedFiles.value.map((file, index) => (
                      <div key={index} class="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <div class="flex items-center gap-3">
                          <svg class="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <div>
                            <p class="text-sm font-medium text-gray-900">{file.name}</p>
                            <p class="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Convert Button */}
                  <div class="mt-6 flex gap-4">
                    <button
                      onClick$={convertFiles}
                      disabled={isConverting.value}
                      class={`flex-1 px-6 py-4 rounded-xl font-bold text-lg transition-all ${
                        isConverting.value
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isConverting.value ? (
                        <span class="flex items-center justify-center gap-2">
                          <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Converting... {progress.value}%
                        </span>
                      ) : (
                        <span class="flex items-center justify-center gap-2">
                          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                          Convert to JPG
                        </span>
                      )}
                    </button>
                    <button
                      onClick$={clearSelection}
                      class="px-6 py-4 rounded-xl font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}

              {/* Progress Bar */}
              {isConverting.value && (
                <div class="mt-6">
                  <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
                      style={{ width: `${progress.value}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {errorMessage.value && (
                <div class="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div class="flex items-center gap-3">
                    <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="text-red-700">{errorMessage.value}</p>
                  </div>
                </div>
              )}

              {/* Conversion Results */}
              {conversionResults.value.length > 0 && (
                <div class="mt-6">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h4 class="text-base sm:text-sm font-medium text-gray-700">Conversion Results:</h4>
                    {mode.value === 'batch' && conversionResults.value.some(r => r.success) && (
                      <button
                        onClick$={downloadAllAsZip}
                        class="w-full sm:w-auto px-4 py-2.5 sm:py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 text-sm"
                      >
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download All as ZIP
                      </button>
                    )}
                  </div>
                  <div class="space-y-3">
                    {conversionResults.value.map((result, index) => (
                      <div 
                        key={index} 
                        class={`flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg p-4 gap-3 ${
                          result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                        }`}
                      >
                        <div class="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                          {result.success ? (
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          <div class="flex-1 min-w-0">
                            <p class="text-sm sm:text-sm font-medium break-words sm:truncate">{result.originalName}</p>
                            {result.success ? (
                              <p class="text-xs sm:text-xs text-green-600 mt-1 break-words sm:truncate">
                                → {result.outputFilename} {result.size ? `(${formatFileSize(result.size)})` : ''}
                              </p>
                            ) : (
                              <p class="text-xs sm:text-xs text-red-600 mt-1 break-words">{result.error}</p>
                            )}
                          </div>
                        </div>
                        {result.success && (
                          <button
                            onClick$={() => downloadFile(result)}
                            class="w-full sm:w-auto sm:ml-4 px-4 py-2.5 sm:py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 flex-shrink-0"
                          >
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About Section */}
            <div class="mt-8 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{conv.about.title}</h2>
              
              <div class="space-y-6">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-3">{conv.about.whatIsHeif.title}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.about.whatIsHeif.content}</p>
                </div>

                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-3">{conv.about.whyConvert.title}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.about.whyConvert.content}</p>
                </div>

                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-3">{conv.about.heifVsHeic.title}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.about.heifVsHeic.content}</p>
                </div>

                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-3">{conv.about.benefits.title}</h3>
                  <ul class="space-y-2">
                    {conv.about.benefits.list.map((benefit, index) => (
                      <li key={index} class="flex items-start gap-3">
                        <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div class="mt-8 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{conv.faq.title}</h2>
              
              <div class="space-y-6">
                {conv.faq.items.map((item, i) => (
                  <div key={i}>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                    <p class="text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div class="lg:col-span-1">
            {/* Features */}
            <div class="bg-white rounded-2xl shadow-xl p-6 mb-6 sticky top-24">
              <h3 class="text-xl font-bold text-gray-900 mb-4">{conv.features.title}</h3>
              <ul class="space-y-3">
                {conv.features.list.map((feature, index) => (
                  <li key={index} class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* How It Works */}
              <div class="mt-8 pt-6 border-t border-gray-200">
                <h3 class="text-xl font-bold text-gray-900 mb-4">{conv.howItWorks.title}</h3>
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <div class="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 class="font-semibold text-gray-900 text-sm">{conv.howItWorks.step1Title}</h4>
                      <p class="text-xs text-gray-600">{conv.howItWorks.step1Desc}</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 class="font-semibold text-gray-900 text-sm">{conv.howItWorks.step2Title}</h4>
                      <p class="text-xs text-gray-600">{conv.howItWorks.step2Desc}</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 class="font-semibold text-gray-900 text-sm">{conv.howItWorks.step3Title}</h4>
                      <p class="text-xs text-gray-600">{conv.howItWorks.step3Desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Converters */}
              <div class="mt-8 pt-6 border-t border-gray-200">
                <h3 class="text-lg font-bold text-gray-900 mb-4">{conv.related.title}</h3>
                <div class="flex flex-wrap gap-2">
                  {conv.related.converters.map((converter, index) => (
                    <a 
                      key={index}
                      href={getLocalizedPath(converter.url, locale)} 
                      class="text-xs px-3 py-1.5 bg-gray-100 hover:bg-purple-100 hover:text-purple-700 text-gray-700 rounded-full transition-colors font-medium"
                    >
                      {converter.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SoftwareApplication Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={JSON.stringify(softwareSchema)} />

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={JSON.stringify(faqSchema)} />
    </div>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const localeData = resolveValue(useLocaleLoader);
  const conv = localeData.translations.heifToJpg;
  const locale = localeData.locale;
  
  return {
    title: conv.title,
    meta: [
      {
        name: "description",
        content: conv.metaDescription,
      },
      {
        name: "keywords",
        content: conv.metaKeywords,
      },
      // Open Graph
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: `https://formipeek.com${locale === 'en' ? '' : `/${locale}`}/convert/heif-to-jpg`,
      },
      {
        property: "og:title",
        content: conv.title,
      },
      {
        property: "og:description",
        content: conv.metaDescription,
      },
      {
        property: "og:image",
        content: "https://formipeek.com/og-heif-to-jpg.jpg",
      },
      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: conv.title,
      },
      {
        name: "twitter:description",
        content: conv.metaDescription,
      },
      {
        name: "twitter:image",
        content: "https://formipeek.com/og-heif-to-jpg.jpg",
      },
    ],
  };
};
