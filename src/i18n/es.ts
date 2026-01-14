// Spanish translations
import type { Translations } from './en';

export const es: Translations = {
  locale: 'es',
  name: 'Español',
  flag: '🇪🇸',
  
  nav: {
    converters: 'Convertidores',
    viewers: 'Visores',
    compress: 'Comprimir',
    samples: 'Muestras',
  },
  
  home: {
    title: 'Convertidor de Archivos Online Gratis - FormiPeek | Convierte 300+ Formatos Instantáneamente',
    metaDescription: 'Convierte archivos entre 300+ formatos instantáneamente. Servicio de conversión de archivos rápido, seguro y gratuito. Soporte para imágenes, documentos, libros electrónicos y archivos de datos.',
    metaKeywords: 'convertidor de archivos, convertidor online, convertidor de imágenes, convertidor de documentos, convertidor de libros electrónicos, conversión por lotes, convertidor gratuito',
    
    hero: {
      badge: 'Gratis Para Siempre • Sin Registro',
      title: 'Transforma Archivos',
      titleHighlight: 'Instantáneamente',
      subtitle: 'Convierte entre {count} formatos con velocidad relámpago. Seguro, gratuito y sin necesidad de registro.',
      buttonStart: 'Comenzar Conversión',
      buttonView: 'Ver Archivos',
      feature1: '100% Gratis',
      feature2: 'Sin Registro',
      feature3: 'Seguro y Privado',
      feature4: 'Procesamiento por Lotes',
    },
    
    stats: {
      formats: 'Formatos Soportados',
      dataProcessed: 'Datos Procesados',
      batchFiles: 'Procesamiento por Lotes',
    },
    
    explore: {
      title: 'Explora Nuestras Herramientas',
      subtitle: 'Todo lo que necesitas para conversión de archivos, visualización, compresión y más',
      converters: {
        title: 'Convertidores',
        description: 'Convierte entre 300+ formatos de archivos instantáneamente. Imágenes, documentos, libros electrónicos y archivos de datos.',
      },
      viewers: {
        title: 'Visores',
        description: 'Vista previa y visualización de archivos directamente en tu navegador. No se necesitan descargas.',
      },
      compress: {
        title: 'Comprimir',
        description: 'Reduce el tamaño de archivos sin perder calidad. Compresión JPG, PNG y PDF.',
      },
      samples: {
        title: 'Muestras',
        description: 'Navega archivos de muestra para todos los formatos soportados. Prueba antes de convertir.',
      },
    },
    
    howItWorks: {
      title: '¿Cómo Funcionan Nuestros Convertidores?',
      subtitle: 'Tres pasos simples para convertir cualquier formato de archivo',
      step1: {
        title: 'Subir Archivo',
        description: 'Arrastra y suelta o navega para seleccionar tu archivo. Soporta hasta 100MB por archivo.',
      },
      step2: {
        title: 'Elegir Formato',
        description: 'Selecciona tu formato de salida deseado de 300+ formatos soportados.',
      },
      step3: {
        title: 'Descargar',
        description: 'Haz clic en convertir y descarga tu archivo instantáneamente. Sin esperas, sin colas.',
      },
    },
    
    popular: {
      title: 'Convertidores Populares',
      subtitle: 'Acceso rápido a nuestras herramientas de conversión más utilizadas',
      viewAll: 'Ver Todos los 300+ Convertidores',
      viewAllMobile: 'Ver Todos los Convertidores',
    },
    
    features: {
      title: '¿Por Qué Elegir FormiPeek?',
      subtitle: 'Construido para profesionales y usuarios cotidianos por igual',
      lightning: {
        title: 'Ultra Rápido',
        description: 'Procesa archivos en segundos con nuestro motor de conversión optimizado',
      },
      secure: {
        title: 'Seguro y Privado',
        description: 'Seguridad de nivel empresarial. Los archivos se eliminan automáticamente después del procesamiento',
      },
      universal: {
        title: 'Soporte Universal',
        description: 'Convierte entre 300+ combinaciones de formatos en todos los tipos de archivos',
      },
      batch: {
        title: 'Procesamiento por Lotes',
        description: 'Convierte hasta 20 archivos a la vez con nuestro potente motor por lotes',
      },
      viewer: {
        title: 'Visor de Archivos',
        description: 'Vista previa y visualización de tus archivos directamente en el navegador',
      },
      quality: {
        title: 'Calidad Profesional',
        description: 'Conversión de estándar industrial con configuraciones personalizables',
      },
    },
  },
  
  // Converters Page
  converters: {
    title: 'Convertidores de Archivos',
    subtitle: 'Convierte entre 300+ formatos de archivo al instante',
    searchPlaceholder: 'Buscar convertidores... (ej., HEIC a PDF)',
    noConvertersFound: 'No se encontraron convertidores que coincidan con',
    heicToPdf: {
      name: 'HEIC a PDF',
      description: 'Convierte fotos Apple HEIC a formato PDF al instante',
    },
    heicToPng: {
      name: 'HEIC a PNG',
      description: 'Convierte fotos Apple HEIC a formato PNG al instante',
    },
  },
  
  heicToPdf: {
    title: 'Convertidor de HEIC a PDF - Convierte Fotos de Apple a PDF Gratis en Línea',
    metaDescription: 'Convierte imágenes HEIC a formato PDF instantáneamente. Convertidor gratuito en línea de HEIC a PDF con procesamiento por lotes. Rápido, seguro y sin registro requerido. Funciona con fotos de iPhone e iPad.',
    metaKeywords: 'HEIC a PDF, convertir HEIC, fotos Apple a PDF, fotos iPhone a PDF, convertidor HEIC, imagen a PDF, conversión por lotes HEIC, convertidor HEIC gratuito',
    
    hero: {
      title: 'Convertidor de HEIC a PDF',
      subtitle: 'Transforma tus fotos HEIC de Apple en documentos PDF universales instantáneamente. Conversión gratuita, rápida y segura sin límites de tamaño de archivo.',
      badge1: 'Ultrarrápido',
      badge2: '100% Seguro',
      badge3: 'Sin Registro',
    },
    
    upload: {
      title: 'Subir Archivos HEIC',
      description: 'Arrastra y suelta tus fotos HEIC aquí o haz clic para explorar. Admite conversión por lotes de hasta 20 archivos. Máximo 100MB por archivo.',
      buttonSingle: 'Archivo Individual',
      buttonBatch: 'Conversión por Lotes',
      chooseFile: 'Elegir Archivos',
      converting: 'Convirtiendo...',
      success: '¡Conversión exitosa!',
      download: 'Descargar PDF',
      downloadAll: 'Descargar Todo como ZIP',
      convertAnother: 'Convertir Otro Archivo',
    },
    
    features: {
      title: 'Características',
      list: [
        'Conversión de HEIC a PDF de alta calidad',
        'Procesamiento por lotes de hasta 20 archivos',
        'Preserva la calidad de imagen y datos EXIF',
        'Sin límites de tamaño de archivo',
        '100% seguro y privado',
        'Funciona con fotos de iPhone e iPad',
        'Descarga instantánea después de la conversión',
        'Sin marcas de agua añadidas',
      ],
    },
    
    howItWorks: {
      title: 'Cómo Funciona',
      step1Title: 'Subir Archivos HEIC',
      step1Desc: 'Selecciona una o varias fotos HEIC de tu dispositivo',
      step2Title: 'Conversión Automática',
      step2Desc: 'Nuestro convertidor procesa tus archivos instantáneamente',
      step3Title: 'Descargar PDF',
      step3Desc: 'Obtén tus archivos PDF convertidos inmediatamente',
    },
    
    about: {
      title: 'Acerca de la Conversión de HEIC a PDF',
      whatIsHeic: {
        title: '¿Qué es el formato HEIC?',
        content: 'HEIC (High Efficiency Image Container) es el formato de foto predeterminado utilizado por dispositivos Apple desde iOS 11. Ofrece compresión superior mientras mantiene alta calidad de imagen, haciendo que las fotos ocupen menos espacio de almacenamiento en tu iPhone o iPad.',
      },
      whyConvert: {
        title: '¿Por qué convertir HEIC a PDF?',
        content: 'Aunque HEIC es eficiente, no es compatible universalmente. Convertir a PDF asegura que tus fotos puedan verse en cualquier dispositivo, compartirse fácilmente por correo electrónico y presentarse profesionalmente en documentos. Los PDFs también son ideales para imprimir y archivar.',
      },
      benefits: {
        title: 'Beneficios de Nuestro Convertidor',
        list: [
          'Compatibilidad Universal - Los PDFs funcionan en todos los dispositivos y plataformas',
          'Presentación Profesional - Perfecto para documentos empresariales y portafolios',
          'Fácil de Compartir - Formato amigable por correo que cualquiera puede abrir',
          'Listo para Imprimir - Mantiene la calidad para impresiones físicas',
          'Almacenamiento Seguro - Formato estándar de la industria para archivar',
          'Sin Pérdida de Calidad - Preserva la resolución de imagen original',
        ],
      },
    },
    
    faq: {
      title: 'Preguntas Frecuentes',
      q1: '¿Es gratis convertir HEIC a PDF?',
      a1: '¡Sí! Nuestro convertidor de HEIC a PDF es completamente gratuito sin cargos ocultos. Puedes convertir archivos ilimitados sin ningún registro o suscripción.',
      q2: '¿Están seguros mis datos?',
      a2: 'Absolutamente. Todas las conversiones ocurren de forma segura en nuestros servidores con cifrado SSL. Tus archivos se eliminan automáticamente inmediatamente después de la conversión. Nunca almacenamos, compartimos o accedemos a tus archivos.',
      q3: '¿Cuál es el tamaño máximo de archivo?',
      a3: 'Puedes convertir archivos HEIC de hasta 100MB cada uno. Para conversión por lotes, puedes procesar hasta 20 archivos a la vez con un límite total de 100MB.',
      q4: '¿Admiten conversión por lotes?',
      a4: '¡Sí! Puedes subir y convertir hasta 20 archivos HEIC simultáneamente. Todos los PDFs convertidos estarán disponibles para descargar como archivos individuales o en un solo archivo ZIP.',
      q5: '¿Se preservará la calidad?',
      a5: 'Sí, mantenemos la calidad de imagen original durante la conversión. Tus fotos HEIC se convertirán a PDFs de alta resolución sin compresión ni pérdida de calidad.',
      q6: '¿Puedo convertir HEIC directamente desde iPhone?',
      a6: '¡Sí! Nuestro convertidor funciona perfectamente con fotos tomadas en iPhone, iPad o cualquier dispositivo Apple. Simplemente sube tus archivos HEIC desde tu carrete de cámara.',
      q7: '¿Necesito instalar algún software?',
      a7: 'No se necesita instalación. Nuestro convertidor en línea funciona directamente en tu navegador web en cualquier dispositivo - Windows, Mac, Linux, iOS o Android.',
      q8: '¿Cuánto tiempo tarda la conversión?',
      a8: '¡La conversión es casi instantánea! La mayoría de los archivos HEIC se convierten a PDF en solo unos segundos, dependiendo del tamaño del archivo y tu conexión a internet.',
    },
    
    related: {
      title: 'Convertidores Relacionados',
      converters: [
        { name: 'HEIC a JPG', url: '/convert/heic-to-jpg' },
        { name: 'HEIC a PNG', url: '/convert/heic-to-png' },
        { name: 'JPG a PDF', url: '/convert/jpg-to-pdf' },
        { name: 'PNG a PDF', url: '/convert/png-to-pdf' },
        { name: 'WEBP a PDF', url: '/convert/webp-to-pdf' },
        { name: 'HEIC a WEBP', url: '/convert/heic-to-webp' },
      ],
    },
    
    footer: {
      tagline: 'La plataforma definitiva de conversión y visualización de archivos para profesionales y usuarios cotidianos.',
      security: '100% Seguro: No se almacenan archivos en nuestros servidores. Todas las conversiones se procesan y los archivos se eliminan automáticamente inmediatamente después del procesamiento.',
      copyright: '© 2025 FormiPeek',
      madeWith: 'Hecho con',
      byDevelopers: 'por desarrolladores que se preocupan por la calidad.',
    },
  },
  
  heicToPng: {
    title: 'Convertidor de HEIC a PNG - Convierte Fotos de Apple a PNG Gratis en Línea',
    metaDescription: 'Convierte imágenes HEIC a formato PNG instantáneamente. Convertidor gratuito en línea de HEIC a PNG con procesamiento por lotes. Rápido, seguro y sin registro requerido. Funciona con fotos de iPhone e iPad.',
    metaKeywords: 'HEIC a PNG, convertir HEIC, fotos Apple a PNG, fotos iPhone a PNG, convertidor HEIC, imagen a PNG, conversión por lotes HEIC, convertidor HEIC gratuito',
    
    hero: {
      title: 'Convertidor de HEIC a PNG',
      subtitle: 'Transforma tus fotos HEIC de Apple en imágenes PNG universales instantáneamente. Conversión gratuita, rápida y segura sin límites de tamaño de archivo.',
      badge1: 'Súper Rápido',
      badge2: '100% Seguro',
      badge3: 'Sin Registro',
    },
    
    upload: {
      title: 'Subir Archivos HEIC',
      description: 'Arrastra y suelta tus fotos HEIC aquí o haz clic para navegar. Soporta conversión por lotes de hasta 20 archivos. Máximo 100MB por archivo.',
      buttonSingle: 'Archivo Único',
      buttonBatch: 'Conversión por Lotes',
      chooseFile: 'Elegir Archivos',
      converting: 'Convirtiendo...',
      success: '¡Conversión exitosa!',
      download: 'Descargar PNG',
      downloadAll: 'Descargar Todo como ZIP',
      convertAnother: 'Convertir Otro Archivo',
    },
    
    features: {
      title: 'Características',
      list: [
        'Conversión de HEIC a PNG de alta calidad',
        'Procesamiento por lotes de hasta 20 archivos',
        'Preserva calidad de imagen y transparencia',
        'Sin límites de tamaño de archivo',
        '100% seguro y privado',
        'Funciona con fotos de iPhone e iPad',
        'Descarga instantánea después de la conversión',
        'Sin marcas de agua añadidas',
      ],
    },
    
    howItWorks: {
      title: 'Cómo Funciona',
      step1Title: 'Subir Archivos HEIC',
      step1Desc: 'Selecciona una o múltiples fotos HEIC de tu dispositivo',
      step2Title: 'Conversión Automática',
      step2Desc: 'Nuestro convertidor procesa tus archivos instantáneamente',
      step3Title: 'Descargar PNG',
      step3Desc: 'Obtén tus archivos PNG convertidos inmediatamente',
    },
    
    about: {
      title: 'Acerca de la Conversión HEIC a PNG',
      whatIsHeic: {
        title: '¿Qué es el Formato HEIC?',
        content: 'HEIC (High Efficiency Image Container) es el formato de foto predeterminado utilizado por dispositivos Apple desde iOS 11. Ofrece compresión superior mientras mantiene alta calidad de imagen, haciendo que las fotos ocupen menos espacio de almacenamiento en tu iPhone o iPad.',
      },
      whyConvert: {
        title: '¿Por Qué Convertir HEIC a PNG?',
        content: 'Aunque HEIC es eficiente, no es universalmente compatible. Convertir a PNG asegura que tus fotos puedan verse en cualquier dispositivo, compartirse fácilmente por correo electrónico y usarse en diseño web y gráficos. El formato PNG soporta transparencia y compresión sin pérdidas, lo que lo hace ideal para uso profesional.',
      },
      benefits: {
        title: 'Beneficios de Nuestro Convertidor',
        list: [
          'Compatibilidad Universal - Los PNG funcionan en todos los dispositivos y plataformas',
          'Soporte de Transparencia - Perfecto para gráficos y diseño web',
          'Calidad Sin Pérdidas - Sin artefactos de compresión o pérdida de calidad',
          'Fácil Compartir - Formato ampliamente compatible que cualquiera puede abrir',
          'Listo para Web - Ideal para sitios web, redes sociales y uso en línea',
          'Sin Pérdida de Calidad - Preserva la resolución original de la imagen',
        ],
      },
    },
    
    faq: {
      title: 'Preguntas Frecuentes',
      q1: '¿Es gratis convertir HEIC a PNG?',
      a1: '¡Sí! Nuestro convertidor de HEIC a PNG es completamente gratuito sin cargos ocultos. Puedes convertir archivos ilimitados sin registro ni suscripción.',
      q2: '¿Mis datos están seguros?',
      a2: 'Absolutamente. Todas las conversiones ocurren de forma segura en nuestros servidores con cifrado SSL. Tus archivos se eliminan automáticamente inmediatamente después de la conversión. Nunca almacenamos, compartimos o accedemos a tus archivos.',
      q3: '¿Cuál es el tamaño máximo de archivo?',
      a3: 'Puedes convertir archivos HEIC de hasta 100MB cada uno. Para conversión por lotes, puedes procesar hasta 20 archivos a la vez con un límite total de 100MB.',
      q4: '¿Soportan conversión por lotes?',
      a4: '¡Sí! Puedes subir y convertir hasta 20 archivos HEIC simultáneamente. Todos los PNG convertidos estarán disponibles para descarga como archivos individuales o en un solo archivo ZIP.',
      q5: '¿Se preservará la calidad?',
      a5: 'Sí, mantenemos la calidad original de la imagen durante la conversión. Tus fotos HEIC se convertirán en PNG de alta resolución sin compresión o pérdida de calidad.',
      q6: '¿Puedo convertir HEIC directamente desde iPhone?',
      a6: '¡Sí! Nuestro convertidor funciona perfectamente con fotos tomadas en iPhone, iPad o cualquier dispositivo Apple. Simplemente sube tus archivos HEIC desde tu galería.',
      q7: '¿Necesito instalar algún software?',
      a7: 'No se requiere instalación. Nuestro convertidor en línea funciona directamente en tu navegador web en cualquier dispositivo - Windows, Mac, Linux, iOS o Android.',
      q8: '¿Cuánto tiempo toma la conversión?',
      a8: '¡La conversión es casi instantánea! La mayoría de los archivos HEIC se convierten a PNG en solo unos segundos, dependiendo del tamaño del archivo y tu conexión a internet.',
    },
    
    related: {
      title: 'Convertidores Relacionados',
      converters: [
        { name: 'HEIC a PDF', url: '/convert/heic-to-pdf' },
        { name: 'HEIC a JPG', url: '/convert/heic-to-jpg' },
        { name: 'PNG a PDF', url: '/convert/png-to-pdf' },
        { name: 'JPG a PNG', url: '/convert/jpg-to-png' },
        { name: 'WEBP a PNG', url: '/convert/webp-to-png' },
        { name: 'HEIC a WEBP', url: '/convert/heic-to-webp' },
      ],
    },
    
    footer: {
      tagline: 'La plataforma definitiva de conversión y visualización de archivos para profesionales y usuarios cotidianos.',
      security: '100% Seguro: No se almacenan archivos en nuestros servidores. Todas las conversiones se procesan y los archivos se eliminan automáticamente inmediatamente después del procesamiento.',
      copyright: '© 2025 FormiPeek',
      madeWith: 'Hecho con',
      byDevelopers: 'por desarrolladores que se preocupan por la calidad.',
    },
  },
};
