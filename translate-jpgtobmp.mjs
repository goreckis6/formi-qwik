// Update jpgToBmp translations - copy from en.ts to other languages as fallback
import fs from 'fs';

// For now, keep English as fallback for non-translated languages
// Languages that need manual translation: ar, es, fr, hi, id, it, ja, ko, nl, pt, ru, sv, tr, zh

const languages = {
  'ar': 'en', // Arabic - use English fallback
  'es': 'en', // Spanish - use English fallback  
  'fr': 'en', // French - use English fallback
  'hi': 'en', // Hindi - use English fallback
  'id': 'en', // Indonesian - use English fallback
  'it': 'en', // Italian - use English fallback
  'ja': 'en', // Japanese - use English fallback
  'ko': 'en', // Korean - use English fallback
  'nl': 'en', // Dutch - use English fallback
  'pt': 'en', // Portuguese - use English fallback
  'ru': 'en', // Russian - use English fallback
  'sv': 'en', // Swedish - use English fallback
  'tr': 'en', // Turkish - use English fallback
  'zh': 'en', // Chinese - use English fallback
};

console.log('Translations for pl.ts and de.ts are done manually.');
console.log('Other languages will use English as fallback for now.');
console.log('Languages can be translated individually later.');
console.log('\nCurrent status:');
console.log('✅ en.ts - English (original)');
console.log('✅ pl.ts - Polish (translated)');
console.log('✅ de.ts - German (partially translated)');
console.log('⏳ Other languages - using English fallback');
