import fs from 'fs';

// Spanish translations
const esTranslations = {
  converters: {
    jpgToBmp: {
      name: "JPG a BMP",
      description: "Convierte imágenes JPG a formato BMP para compatibilidad con Windows y calidad sin comprimir"
    }
  },
  main: `  // JPG to BMP Converter
  jpgToBmp: {
    title: "Convertidor JPG a BMP - Convierte Imágenes a Formato Windows Bitmap Gratis Online",
    metaDescription:
      "Convierte imágenes JPG a formato BMP instantáneamente. Convertidor gratuito JPG a BMP en línea con procesamiento por lotes. Rápido, seguro y sin registro. Perfecto para compatibilidad con Windows y calidad sin comprimir.",
    metaKeywords:
      "JPG a BMP, convertir JPG a BMP, imagen a BMP, foto a BMP, conversión por lotes JPG, convertidor BMP, convertidor BMP gratuito, convertidor Windows bitmap",
    hero: {
      title: "Convertidor JPG a BMP",
      subtitle:
        "Convierte imágenes JPG a formato Windows BMP instantáneamente. BMP (Bitmap) es un formato de imagen sin comprimir ideal para compatibilidad con Windows y preservar la máxima calidad de imagen. Conversión gratuita, rápida y segura.",
      badge1: "Calidad Sin Comprimir",
      badge2: "Compatible con Windows",
      badge3: "Sin Registro",
    },
    upload: {
      title: "Subir Archivos JPG",
      description:
        "Arrastra y suelta tus imágenes JPG aquí o haz clic para explorar. Admite conversión por lotes de hasta 20 archivos. Máximo 100MB por archivo.",
      buttonSingle: "Archivo Único",
      buttonBatch: "Conversión por Lotes",
      chooseFile: "Elegir Archivos",
      converting: "Convirtiendo...",
      success: "¡Conversión exitosa!",
      download: "Descargar BMP",
      downloadAll: "Descargar Todo como ZIP",
      convertAnother: "Convertir Otro Archivo",
    },
    features: {
      title: "Características",
      list: [
        "Conversión JPG a BMP de alta calidad",
        "Procesamiento por lotes de hasta 20 archivos simultáneamente",
        "El formato sin comprimir preserva la máxima calidad",
        "Perfecta compatibilidad con Windows",
        "100% seguro con eliminación automática de archivos",
        "Sin pérdida de calidad durante la conversión",
        "Descarga instantánea - listo para usar",
        "Sin marcas de agua - calidad profesional",
      ],
    },
    howItWorks: {
      title: "Cómo Funciona",
      step1Title: "Subir Archivos JPG",
      step1Desc: "Selecciona una o varias imágenes JPG desde tu dispositivo",
      step2Title: "Conversión Automática",
      step2Desc: "Nuestro convertidor procesa tus archivos instantáneamente",
      step3Title: "Descargar BMP",
      step3Desc: "Obtén tus archivos BMP convertidos inmediatamente",
    },
    about: {
      title: "Acerca de la Conversión JPG a BMP",
      whatIsHeif: {
        title: "¿Qué es el Formato BMP?",
        content:
          "BMP (Bitmap Image File) es un formato de archivo de imagen ráster desarrollado por Microsoft para Windows. Los archivos BMP están sin comprimir, lo que significa que preservan cada píxel de la imagen original sin artefactos de compresión. Si bien los archivos BMP son más grandes que formatos comprimidos como JPG, ofrecen la máxima calidad de imagen y son universalmente compatibles con sistemas Windows. El formato BMP admite varias profundidades de color (1-bit, 4-bit, 8-bit, 16-bit, 24-bit y 32-bit) y es ideal para aplicaciones que requieren datos de imagen sin comprimir.",
      },
      whyConvert: {
        title: "¿Por Qué Convertir JPG a BMP?",
        content:
          "Convierte JPG a BMP cuando necesites calidad de imagen sin comprimir o compatibilidad específica con Windows. JPG usa compresión con pérdida que reduce permanentemente la calidad de la imagen, mientras que BMP está sin comprimir y preserva cada píxel perfectamente. Razones clave para convertir: preservar la máxima calidad de imagen (sin artefactos de compresión), asegurar compatibilidad con Windows (soporte nativo BMP), preparar imágenes para aplicaciones Windows (muchos programas Windows prefieren BMP), archivar imágenes sin pérdida de calidad (formato sin comprimir), o usar imágenes en sistemas legacy (BMP es ampliamente compatible). BMP es esencial para aplicaciones que requieren precisión pixel a pixel, desarrollo de software Windows y propósitos de archivo donde la preservación de calidad es crítica.",
      },
      heifVsHeic: {
        title: "BMP vs JPG - Cuándo Elegir BMP",
        content:
          "BMP y JPG sirven para diferentes propósitos. Elige BMP para: calidad sin comprimir (preservación perfecta de píxeles), aplicaciones Windows (soporte nativo), almacenamiento de archivo (sin pérdida de calidad), desarrollo de software (programas Windows), sistemas legacy (compatibilidad universal), o requisitos de precisión pixel (sin artefactos). Elige JPG para: uso web (tamaños de archivo más pequeños), compartir en línea (transferencias más rápidas), redes sociales (soporte nativo), fotografía general (almacenamiento eficiente), o cuando el tamaño del archivo importa (formato comprimido).",
      },
      benefits: {
        title: "Beneficios del Formato BMP",
        list: [
          "Calidad Sin Comprimir - Cero artefactos de compresión, preservación perfecta de píxeles",
          "Nativo de Windows - Soporte integrado en todos los sistemas Windows",
          "Máxima Compatibilidad - Funciona con todas las aplicaciones Windows",
          "Sin Pérdida de Calidad - Preserva cada píxel de la imagen original",
          "Formato Simple - Fácil de leer y procesar por software",
          "Soporte de Profundidad de Color - Admite varias profundidades de color hasta 32-bit",
        ],
      },
    },
    faq: {
      title: "Preguntas Frecuentes – JPG a BMP",
      items: [
        {
          q: "¿Es gratis convertir JPG a BMP?",
          a: "¡Sí! Nuestro convertidor JPG a BMP es completamente gratuito con conversiones ilimitadas. Sin registro, suscripciones ni tarifas ocultas.",
        },
        {
          q: "¿Los archivos BMP serán más grandes que los archivos JPG?",
          a: "Sí, los archivos BMP son típicamente 3-10 veces más grandes que los archivos JPG porque BMP está sin comprimir mientras que JPG usa compresión con pérdida. Sin embargo, BMP preserva cada píxel perfectamente sin pérdida de calidad.",
        },
        {
          q: "¿Se preservará la calidad de imagen al convertir JPG a BMP?",
          a: "El formato BMP preserva los datos de imagen del archivo JPG, pero dado que JPG usa compresión con pérdida, algo de calidad puede haberse perdido ya en el JPG original. Convertir a BMP previene más pérdida de calidad.",
        },
        {
          q: "¿Puedo usar archivos BMP en sistemas que no sean Windows?",
          a: "Sí, los archivos BMP se pueden abrir en macOS, Linux y otros sistemas operativos, aunque están más comúnmente asociados con Windows.",
        },
        {
          q: "¿Cuál es el tamaño máximo de archivo para la conversión JPG a BMP?",
          a: "Puedes convertir archivos JPG de hasta 100MB cada uno. Para conversión por lotes, puedes subir hasta 20 archivos a la vez.",
        },
        {
          q: "¿Por qué elegiría BMP sobre JPG?",
          a: "Elige BMP cuando necesites calidad sin comprimir, compatibilidad específica con Windows, o cuando trabajes con aplicaciones que requieren formato BMP.",
        },
        {
          q: "¿Cuánto tiempo tarda la conversión JPG a BMP?",
          a: "La conversión tarda 1-2 segundos por imagen. La conversión BMP es rápida porque es principalmente un cambio de formato.",
        },
      ],
    },
    related: {
      title: "Convertidores Relacionados",
      converters: [
        { name: "JPG a PNG", url: "/convert/jpg-to-png" },
        { name: "PNG a BMP", url: "/convert/png-to-bmp" },
        { name: "BMP a PNG", url: "/convert/bmp-to-png" },
        { name: "JPG a WebP", url: "/convert/jpg-to-webp" },
        { name: "JPG a TIFF", url: "/convert/jpg-to-tiff" },
        { name: "JPG a PDF", url: "/convert/jpg-to-pdf" },
      ],
    },
  },`
};

console.log('Spanish translations prepared');
console.log('Ready to update es.ts');
