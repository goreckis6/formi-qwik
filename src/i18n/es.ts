// Spanish translations
import type { Translations } from "./en";

export const es: Translations = {
  locale: "es",
  name: "Español",
  flag: "🇪🇸",

  nav: {
    converters: "Convertidores",
    viewers: "Visores",
    compress: "Comprimir",
    samples: "Muestras",
  },

  home: {
    title:
      "Convertidor de Archivos Online Gratis - FormiPeek | Convierte 300+ Formatos Instantáneamente",
    metaDescription:
      "Convierte archivos entre 300+ formatos instantáneamente. Servicio de conversión de archivos rápido, seguro y gratuito. Soporte para imágenes, documentos, libros electrónicos y archivos de datos.",
    metaKeywords:
      "convertidor de archivos, convertidor online, convertidor de imágenes, convertidor de documentos, convertidor de libros electrónicos, conversión por lotes, convertidor gratuito",

    hero: {
      badge: "Gratis Para Siempre • Sin Registro",
      title: "Transforma Archivos",
      titleHighlight: "Instantáneamente",
      subtitle:
        "Convierte entre {count} formatos con velocidad relámpago. Seguro, gratuito y sin necesidad de registro.",
      buttonStart: "Comenzar Conversión",
      buttonView: "Ver Archivos",
      feature1: "100% Gratis",
      feature2: "Sin Registro",
      feature3: "Seguro y Privado",
      feature4: "Procesamiento por Lotes",
    },

    stats: {
      formats: "Formatos Soportados",
      dataProcessed: "Datos Procesados",
      batchFiles: "Procesamiento por Lotes",
    },

    explore: {
      title: "Explora Nuestras Herramientas",
      subtitle:
        "Todo lo que necesitas para conversión de archivos, visualización, compresión y más",
      converters: {
        title: "Convertidores",
        description:
          "Convierte entre 300+ formatos de archivos instantáneamente. Imágenes, documentos, libros electrónicos y archivos de datos.",
      },
      viewers: {
        title: "Visores",
        description:
          "Vista previa y visualización de archivos directamente en tu navegador. No se necesitan descargas.",
      },
      compress: {
        title: "Comprimir",
        description: "Reduce el tamaño de archivos sin perder calidad. Compresión JPG, PNG y PDF.",
      },
      samples: {
        title: "Muestras",
        description:
          "Navega archivos de muestra para todos los formatos soportados. Prueba antes de convertir.",
      },
    },

    howItWorks: {
      title: "¿Cómo Funcionan Nuestros Convertidores?",
      subtitle: "Tres pasos simples para convertir cualquier formato de archivo",
      step1: {
        title: "Subir Archivo",
        description:
          "Arrastra y suelta o navega para seleccionar tu archivo. Soporta hasta 100MB por archivo.",
      },
      step2: {
        title: "Elegir Formato",
        description: "Selecciona tu formato de salida deseado de 300+ formatos soportados.",
      },
      step3: {
        title: "Descargar",
        description:
          "Haz clic en convertir y descarga tu archivo instantáneamente. Sin esperas, sin colas.",
      },
    },

    popular: {
      title: "Convertidores Populares",
      subtitle: "Acceso rápido a nuestras herramientas de conversión más utilizadas",
      viewAll: "Ver Todos los 300+ Convertidores",
      viewAllMobile: "Ver Todos los Convertidores",
    },

    features: {
      title: "¿Por Qué Elegir FormiPeek?",
      subtitle: "Construido para profesionales y usuarios cotidianos por igual",
      lightning: {
        title: "Ultra Rápido",
        description: "Procesa archivos en segundos con nuestro motor de conversión optimizado",
      },
      secure: {
        title: "Seguro y Privado",
        description:
          "Seguridad de nivel empresarial. Los archivos se eliminan automáticamente después del procesamiento",
      },
      universal: {
        title: "Soporte Universal",
        description:
          "Convierte entre 300+ combinaciones de formatos en todos los tipos de archivos",
      },
      batch: {
        title: "Procesamiento por Lotes",
        description: "Convierte hasta 20 archivos a la vez con nuestro potente motor por lotes",
      },
      viewer: {
        title: "Visor de Archivos",
        description: "Vista previa y visualización de tus archivos directamente en el navegador",
      },
      quality: {
        title: "Calidad Profesional",
        description: "Conversión de estándar industrial con configuraciones personalizables",
      },
    },

    faq: {
      title: "Preguntas Frecuentes",
      items: [
        {
          q: "¿Qué es FormiPeek?",
          a: "FormiPeek es una plataforma online gratuita que te permite convertir, ver y comprimir archivos directamente en tu navegador. Soporta más de 300 combinaciones de formatos de archivo sin necesidad de instalación.",
        },
        {
          q: "¿Es FormiPeek gratuito?",
          a: "Sí. Todas las herramientas de conversión y visualización de archivos en FormiPeek son completamente gratuitas y no requieren registro ni suscripciones.",
        },
        {
          q: "¿Mis archivos están seguros en FormiPeek?",
          a: "Sí. Los archivos subidos a FormiPeek se procesan de forma segura y se eliminan automáticamente después de la conversión. Nunca almacenamos ni compartimos tus archivos.",
        },
        {
          q: "¿Qué formatos de archivo soporta FormiPeek?",
          a: "FormiPeek soporta más de 300 combinaciones de formatos de archivo, incluyendo imágenes, documentos, libros electrónicos y archivos de datos como PDF, JPG, PNG, HEIC, CSV, EPUB y más.",
        },
        {
          q: "¿Necesito instalar algún software?",
          a: "No. FormiPeek funciona completamente online en tu navegador web en cualquier dispositivo, incluyendo Windows, macOS, Linux, iOS y Android.",
        },
        {
          q: "¿Puedo convertir múltiples archivos a la vez?",
          a: "Sí. FormiPeek soporta conversión por lotes, permitiéndote convertir hasta 20 archivos a la vez con un límite de tamaño total de 100MB.",
        },
      ],
    },
  },

  // Converters Page
  converters: {
    title: "Convertidores de Archivos",
    subtitle: "Convierte entre 300+ formatos de archivo al instante",
    searchPlaceholder: "Buscar convertidores... (ej., HEIC a PDF)",
    noConvertersFound: "No se encontraron convertidores que coincidan con",
    heicToPdf: {
      name: "HEIC a PDF",
      description: "Convierte fotos Apple HEIC a formato PDF al instante",
    },
    heicToPng: {
      name: "HEIC a PNG",
      description: "Convierte fotos Apple HEIC a formato PNG al instante",
    },
    heicToJpg: {
      name: "HEIC a JPG",
      description: "Convierte fotos Apple HEIC a formato JPG al instante",
    },
    heicToWebp: {
      name: "HEIC a WebP",
      description: "Convierte fotos Apple HEIC a formato WebP al instante",
    },
    heicToAvif: {
      name: "HEIC a AVIF",
      description: "Convierte fotos Apple HEIC a formato AVIF al instante",
    },
  },

  heicToPdf: {
    title: "Convertidor de HEIC a PDF - Convierte Fotos de Apple a PDF Gratis en Línea",
    metaDescription:
      "Convierte imágenes HEIC a formato PDF instantáneamente. Convertidor gratuito en línea de HEIC a PDF con procesamiento por lotes. Rápido, seguro y sin registro requerido. Funciona con fotos de iPhone e iPad.",
    metaKeywords:
      "HEIC a PDF, convertir HEIC, fotos Apple a PDF, fotos iPhone a PDF, convertidor HEIC, imagen a PDF, conversión por lotes HEIC, convertidor HEIC gratuito",

    hero: {
      title: "Convertidor de HEIC a PDF",
      subtitle:
        "Transforma tus fotos HEIC de Apple en documentos PDF universales instantáneamente. Conversión gratuita, rápida y segura sin límites de tamaño de archivo.",
      badge1: "Ultrarrápido",
      badge2: "100% Seguro",
      badge3: "Sin Registro",
    },

    upload: {
      title: "Subir Archivos HEIC",
      description:
        "Arrastra y suelta tus fotos HEIC aquí o haz clic para explorar. Admite conversión por lotes de hasta 20 archivos. Máximo 100MB por archivo.",
      buttonSingle: "Archivo Individual",
      buttonBatch: "Conversión por Lotes",
      chooseFile: "Elegir Archivos",
      converting: "Convirtiendo...",
      success: "¡Conversión exitosa!",
      download: "Descargar PDF",
      downloadAll: "Descargar Todo como ZIP",
      convertAnother: "Convertir Otro Archivo",
    },

    features: {
      title: "Características",
      list: [
        "Conversión de HEIC a PDF de alta calidad",
        "Procesamiento por lotes de hasta 20 archivos",
        "Preserva la calidad de imagen y datos EXIF",
        "Sin límites de tamaño de archivo",
        "100% seguro y privado",
        "Funciona con fotos de iPhone e iPad",
        "Descarga instantánea después de la conversión",
        "Sin marcas de agua añadidas",
      ],
    },

    howItWorks: {
      title: "Cómo Funciona",
      step1Title: "Subir Archivos HEIC",
      step1Desc: "Selecciona una o varias fotos HEIC de tu dispositivo",
      step2Title: "Conversión Automática",
      step2Desc: "Nuestro convertidor procesa tus archivos instantáneamente",
      step3Title: "Descargar PDF",
      step3Desc: "Obtén tus archivos PDF convertidos inmediatamente",
    },

    about: {
      title: "Acerca de la Conversión de HEIC a PDF",
      whatIsHeic: {
        title: "¿Qué es el formato HEIC?",
        content:
          "HEIC (High Efficiency Image Container) es el formato de foto predeterminado utilizado por dispositivos Apple desde iOS 11. Ofrece compresión superior mientras mantiene alta calidad de imagen, haciendo que las fotos ocupen menos espacio de almacenamiento en tu iPhone o iPad.",
      },
      whyConvert: {
        title: "¿Por qué convertir HEIC a PDF?",
        content:
          "Aunque HEIC es eficiente, no es compatible universalmente. Convertir a PDF asegura que tus fotos puedan verse en cualquier dispositivo, compartirse fácilmente por correo electrónico y presentarse profesionalmente en documentos. Los PDFs también son ideales para imprimir y archivar.",
      },
      benefits: {
        title: "Beneficios de Nuestro Convertidor",
        list: [
          "Compatibilidad Universal - Los PDFs funcionan en todos los dispositivos y plataformas",
          "Presentación Profesional - Perfecto para documentos empresariales y portafolios",
          "Fácil de Compartir - Formato amigable por correo que cualquiera puede abrir",
          "Listo para Imprimir - Mantiene la calidad para impresiones físicas",
          "Almacenamiento Seguro - Formato estándar de la industria para archivar",
          "Sin Pérdida de Calidad - Preserva la resolución de imagen original",
        ],
      },
    },

    faq: {
      title: "Preguntas Frecuentes – HEIC a PDF",
      items: [
        {
          q: "¿Es gratis convertir HEIC a PDF?",
          a: "¡Sí! Nuestro convertidor de HEIC a PDF es completamente gratuito de usar. Puedes convertir imágenes HEIC a PDF sin registro, suscripciones ni cargos ocultos.",
        },
        {
          q: "¿Puedo convertir fotos HEIC del iPhone a PDF?",
          a: "Sí. Puedes convertir fotos HEIC tomadas en iPhone, iPad o cualquier dispositivo Apple directamente a PDF. Simplemente sube tus archivos HEIC desde tu dispositivo, y la conversión funciona al instante en tu navegador.",
        },
        {
          q: "¿Se preservará la calidad al convertir HEIC a PDF?",
          a: "Sí. Preservamos la calidad de imagen original durante la conversión. Tus fotos HEIC se convierten en archivos PDF de alta resolución sin compresión ni pérdida de calidad.",
        },
        {
          q: "¿Cuál es el tamaño máximo de archivo para la conversión de HEIC a PDF?",
          a: "Puedes convertir archivos HEIC de hasta 100MB por archivo. Para conversión por lotes, puedes subir hasta 20 archivos a la vez, con un límite de tamaño total de 100MB.",
        },
      ],
    },

    related: {
      title: "Convertidores Relacionados",
      converters: [
        { name: "HEIC a JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC a PNG", url: "/convert/heic-to-png" },
        { name: "JPG a PDF", url: "/convert/jpg-to-pdf" },
        { name: "PNG a PDF", url: "/convert/png-to-pdf" },
        { name: "WEBP a PDF", url: "/convert/webp-to-pdf" },
        { name: "HEIC a WEBP", url: "/convert/heic-to-webp" },
      ],
    },

    footer: {
      tagline:
        "La plataforma definitiva de conversión y visualización de archivos para profesionales y usuarios cotidianos.",
      security:
        "100% Seguro: No se almacenan archivos en nuestros servidores. Todas las conversiones se procesan y los archivos se eliminan automáticamente inmediatamente después del procesamiento.",
      copyright: "© 2025 FormiPeek",
      madeWith: "Hecho con",
      byDevelopers: "por desarrolladores que se preocupan por la calidad.",
    },
  },

  heicToPng: {
    title: "Convertidor de HEIC a PNG - Convierte Fotos de Apple a PNG Gratis en Línea",
    metaDescription:
      "Convierte imágenes HEIC a formato PNG instantáneamente. Convertidor gratuito en línea de HEIC a PNG con procesamiento por lotes. Rápido, seguro y sin registro requerido. Funciona con fotos de iPhone e iPad.",
    metaKeywords:
      "HEIC a PNG, convertir HEIC, fotos Apple a PNG, fotos iPhone a PNG, convertidor HEIC, imagen a PNG, conversión por lotes HEIC, convertidor HEIC gratuito",

    hero: {
      title: "Convertidor de HEIC a PNG",
      subtitle:
        "Transforma tus fotos HEIC de Apple en imágenes PNG universales instantáneamente. Conversión gratuita, rápida y segura sin límites de tamaño de archivo.",
      badge1: "Súper Rápido",
      badge2: "100% Seguro",
      badge3: "Sin Registro",
    },

    upload: {
      title: "Subir Archivos HEIC",
      description:
        "Arrastra y suelta tus fotos HEIC aquí o haz clic para navegar. Soporta conversión por lotes de hasta 20 archivos. Máximo 100MB por archivo.",
      buttonSingle: "Archivo Único",
      buttonBatch: "Conversión por Lotes",
      chooseFile: "Elegir Archivos",
      converting: "Convirtiendo...",
      success: "¡Conversión exitosa!",
      download: "Descargar PNG",
      downloadAll: "Descargar Todo como ZIP",
      convertAnother: "Convertir Otro Archivo",
    },

    features: {
      title: "Características",
      list: [
        "Conversión de HEIC a PNG de alta calidad",
        "Procesamiento por lotes de hasta 20 archivos",
        "Preserva calidad de imagen y transparencia",
        "Sin límites de tamaño de archivo",
        "100% seguro y privado",
        "Funciona con fotos de iPhone e iPad",
        "Descarga instantánea después de la conversión",
        "Sin marcas de agua añadidas",
      ],
    },

    howItWorks: {
      title: "Cómo Funciona",
      step1Title: "Subir Archivos HEIC",
      step1Desc: "Selecciona una o múltiples fotos HEIC de tu dispositivo",
      step2Title: "Conversión Automática",
      step2Desc: "Nuestro convertidor procesa tus archivos instantáneamente",
      step3Title: "Descargar PNG",
      step3Desc: "Obtén tus archivos PNG convertidos inmediatamente",
    },

    about: {
      title: "Acerca de la Conversión HEIC a PNG",
      whatIsHeic: {
        title: "¿Qué es el Formato HEIC?",
        content:
          "HEIC (High Efficiency Image Container) es el formato de foto predeterminado utilizado por dispositivos Apple desde iOS 11. Ofrece compresión superior mientras mantiene alta calidad de imagen, haciendo que las fotos ocupen menos espacio de almacenamiento en tu iPhone o iPad.",
      },
      whyConvert: {
        title: "¿Por Qué Convertir HEIC a PNG?",
        content:
          "Aunque HEIC es eficiente, no es universalmente compatible. Convertir a PNG asegura que tus fotos puedan verse en cualquier dispositivo, compartirse fácilmente por correo electrónico y usarse en diseño web y gráficos. El formato PNG soporta transparencia y compresión sin pérdidas, lo que lo hace ideal para uso profesional.",
      },
      benefits: {
        title: "Beneficios de Nuestro Convertidor",
        list: [
          "Compatibilidad Universal - Los PNG funcionan en todos los dispositivos y plataformas",
          "Soporte de Transparencia - Perfecto para gráficos y diseño web",
          "Calidad Sin Pérdidas - Sin artefactos de compresión o pérdida de calidad",
          "Fácil Compartir - Formato ampliamente compatible que cualquiera puede abrir",
          "Listo para Web - Ideal para sitios web, redes sociales y uso en línea",
          "Sin Pérdida de Calidad - Preserva la resolución original de la imagen",
        ],
      },
    },

    faq: {
      title: "Preguntas Frecuentes – HEIC a PNG",
      items: [
        {
          q: "¿Es gratis convertir HEIC a PNG?",
          a: "¡Sí! Nuestro convertidor de HEIC a PNG es completamente gratuito. Puedes convertir imágenes HEIC a PNG sin registro, suscripciones ni cargos ocultos.",
        },
        {
          q: "¿Se preservará la calidad al convertir HEIC a PNG?",
          a: "Sí. Preservamos la calidad de imagen original durante la conversión. Tus fotos HEIC se convierten en archivos PNG de alta resolución sin compresión ni pérdida de calidad.",
        },
        {
          q: "¿Puedo convertir fotos HEIC del iPhone a PNG?",
          a: "Sí. Puedes convertir fotos HEIC tomadas en iPhone, iPad o cualquier dispositivo Apple directamente a PNG. Simplemente sube tus archivos HEIC y conviértelos al instante en tu navegador.",
        },
        {
          q: "¿Necesito instalar software para convertir HEIC a PNG?",
          a: "No se requiere instalación. El convertidor HEIC a PNG funciona completamente en línea en tu navegador web en Windows, macOS, Linux, iOS y Android.",
        },
      ],
    },

    related: {
      title: "Convertidores Relacionados",
      converters: [
        { name: "HEIC a PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC a JPG", url: "/convert/heic-to-jpg" },
        { name: "PNG a PDF", url: "/convert/png-to-pdf" },
        { name: "JPG a PNG", url: "/convert/jpg-to-png" },
        { name: "WEBP a PNG", url: "/convert/webp-to-png" },
        { name: "HEIC a WEBP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to JPG Converter
  heicToJpg: {
    title: "Convertidor HEIC a JPG - Convierte Fotos Apple a JPG Gratis Online",
    metaDescription:
    "Convierte imágenes HEIC a formato JPG al instante. Convertidor online gratuito HEIC a JPG con procesamiento por lotes. Rápido, seguro y sin registro requerido. Funciona con fotos de iPhone e iPad.",
    metaKeywords:
    "HEIC a JPG, convertir HEIC, fotos Apple a JPG, fotos iPhone a JPG, convertidor HEIC, imagen a JPG, conversión por lotes HEIC, convertidor HEIC gratis",

    hero: {
    title: "Convertidor HEIC a JPG",
    subtitle:
      "Transforma tus fotos Apple HEIC en imágenes JPG universales al instante. Conversión gratuita, rápida y segura sin límites de tamaño de archivo.",
    badge1: "Súper Rápido",
    badge2: "100% Seguro",
    badge3: "Sin Registro",
    },

    upload: {
    title: "Subir Archivos HEIC",
    description:
      "Arrastra y suelta tus fotos HEIC aquí o haz clic para explorar. Soporta conversión por lotes hasta 20 archivos. Máximo 100MB por archivo.",
    buttonSingle: "Archivo Único",
    buttonBatch: "Conversión por Lotes",
    chooseFile: "Elegir Archivos",
    converting: "Convirtiendo...",
    success: "¡Conversión exitosa!",
    download: "Descargar JPG",
    downloadAll: "Descargar Todo como ZIP",
    convertAnother: "Convertir Otro Archivo",
    },

    features: {
    title: "Características",
    list: [
      "Conversión HEIC a JPG de alta calidad",
      "Procesamiento por lotes hasta 20 archivos",
      "Preserva la calidad de imagen",
      "Sin limitaciones de tamaño de archivo",
      "100% seguro y privado",
      "Funciona con fotos de iPhone e iPad",
      "Descarga instantánea después de la conversión",
      "Sin marcas de agua",
    ],
    },

    howItWorks: {
    title: "Cómo Funciona",
    step1Title: "Subir Archivos HEIC",
    step1Desc: "Selecciona una o varias fotos HEIC de tu dispositivo",
    step2Title: "Conversión Automática",
    step2Desc: "Nuestro convertidor procesa tus archivos al instante",
    step3Title: "Descargar JPG",
    step3Desc: "Obtén tus archivos JPG convertidos inmediatamente",
    },

    about: {
    title: "Acerca de la Conversión HEIC a JPG",
    whatIsHeic: {
      title: "¿Qué es el Formato HEIC?",
      content:
        "HEIC (High Efficiency Image Container) es el formato de foto predeterminado utilizado por los dispositivos Apple desde iOS 11. Ofrece compresión superior manteniendo alta calidad de imagen, haciendo que las fotos ocupen menos espacio de almacenamiento en tu iPhone o iPad.",
    },
    whyConvert: {
      title: "¿Por qué Convertir HEIC a JPG?",
      content:
        "Aunque HEIC es eficiente, no es universalmente compatible. Convertir a JPG asegura que tus fotos puedan verse en cualquier dispositivo, compartirse fácilmente por correo electrónico y usarse en diseño web y gráficos. El formato JPG es el formato de imagen más ampliamente compatible, ideal para compartir y compatibilidad.",
    },
    benefits: {
      title: "Beneficios de Nuestro Convertidor",
      list: [
        "Compatibilidad Universal - Los JPG funcionan en todos los dispositivos y plataformas",
        "Tamaño de Archivo Más Pequeño - Compresión eficiente para compartir más rápido",
        "Amplio Soporte - Formato de imagen más utilizado en todo el mundo",
        "Fácil de Compartir - Compatible con todos los clientes de correo y redes sociales",
        "Listo para Web - Ideal para sitios web, redes sociales y uso online",
        "Alta Calidad - Preserva la resolución original de la imagen",
      ],
    },
    },

    faq: {
    title: "Preguntas Frecuentes",
    q1: "¿Es gratis convertir HEIC a JPG?",
    a1: "¡Sí! Nuestro convertidor HEIC a JPG es completamente gratuito sin cargos ocultos. Puedes convertir archivos ilimitados sin registro ni suscripción.",
    q2: "¿Mis datos están seguros?",
    a2: "Absolutamente. Todas las conversiones ocurren de forma segura en nuestros servidores con cifrado SSL. Tus archivos se eliminan automáticamente inmediatamente después de la conversión. Nunca almacenamos, compartimos o accedemos a tus archivos.",
    q3: "¿Cuál es el tamaño máximo de archivo?",
    a3: "Puedes convertir archivos HEIC de hasta 100MB cada uno. Para conversión por lotes, puedes procesar hasta 20 archivos a la vez con un límite total de 100MB.",
    q4: "¿Soportan conversión por lotes?",
    a4: "¡Sí! Puedes subir y convertir hasta 20 archivos HEIC simultáneamente. Todos los JPG convertidos estarán disponibles para descarga como archivos individuales o en un solo archivo ZIP.",
    q5: "¿Se preservará la calidad?",
    a5: "Sí, mantenemos alta calidad de imagen durante la conversión. Tus fotos HEIC se convertirán en JPG de alta resolución con pérdida mínima de calidad.",
    q6: "¿Puedo convertir HEIC directamente desde iPhone?",
    a6: "¡Sí! Nuestro convertidor funciona perfectamente con fotos tomadas en iPhone, iPad o cualquier dispositivo Apple. Simplemente sube tus archivos HEIC desde tu galería de fotos.",
    q7: "¿Necesito instalar algún software?",
    a7: "No se requiere instalación. Nuestro convertidor online funciona directamente en tu navegador web en cualquier dispositivo - Windows, Mac, Linux, iOS o Android.",
    q8: "¿Cuánto tiempo tarda la conversión?",
    a8: "¡La conversión es casi instantánea! La mayoría de los archivos HEIC se convierten a JPG en solo unos segundos, dependiendo del tamaño del archivo y tu conexión a internet.",
    },

    related: {
    title: "Convertidores Relacionados",
    converters: [
      { name: "HEIC a PDF", url: "/convert/heic-to-pdf" },
      { name: "HEIC a PNG", url: "/convert/heic-to-png" },
      { name: "JPG a PDF", url: "/convert/jpg-to-pdf" },
      { name: "PNG a JPG", url: "/convert/png-to-jpg" },
      { name: "WEBP a JPG", url: "/convert/webp-to-jpg" },
      { name: "HEIC a WEBP", url: "/convert/heic-to-webp" },
    ],
    },
  },

  // HEIC to WebP Converter
  heicToWebp: {
    title: "Convertidor de HEIC a WebP - Convierte Fotos de Apple a WebP Gratis en Línea",
    metaDescription:
      "Convierte imágenes HEIC a formato WebP instantáneamente. Convertidor gratuito en línea de HEIC a WebP con procesamiento por lotes. Rápido, seguro y sin registro requerido. Funciona con fotos de iPhone e iPad.",
    metaKeywords:
      "HEIC a WebP, convertir HEIC, fotos Apple a WebP, fotos iPhone a WebP, convertidor HEIC, imagen a WebP, conversión por lotes HEIC, convertidor HEIC gratuito",

    hero: {
      title: "Convertidor de HEIC a WebP",
      subtitle:
        "Transforma tus fotos HEIC de Apple en imágenes WebP modernas instantáneamente. Conversión gratuita, rápida y segura sin límites de tamaño de archivo.",
      badge1: "Súper Rápido",
      badge2: "100% Seguro",
      badge3: "Sin Registro",
    },

    upload: {
      title: "Subir Archivos HEIC",
      description:
        "Arrastra y suelta tus fotos HEIC aquí o haz clic para navegar. Soporta conversión por lotes de hasta 20 archivos. Máximo 100MB por archivo.",
      buttonSingle: "Archivo Único",
      buttonBatch: "Conversión por Lotes",
      chooseFile: "Elegir Archivos",
      converting: "Convirtiendo...",
      success: "¡Conversión exitosa!",
      download: "Descargar WebP",
      downloadAll: "Descargar Todo como ZIP",
      convertAnother: "Convertir Otro Archivo",
    },

    features: {
      title: "Características",
      list: [
        "Conversión de HEIC a WebP de alta calidad",
        "Procesamiento por lotes de hasta 20 archivos",
        "Compresión superior con preservación de calidad",
        "Sin límites de tamaño de archivo",
        "100% seguro y privado",
        "Funciona con fotos de iPhone e iPad",
        "Descarga instantánea después de la conversión",
        "Sin marcas de agua añadidas",
      ],
    },

    howItWorks: {
      title: "Cómo Funciona",
      step1Title: "Subir Archivos HEIC",
      step1Desc: "Selecciona una o múltiples fotos HEIC de tu dispositivo",
      step2Title: "Conversión Automática",
      step2Desc: "Nuestro convertidor procesa tus archivos instantáneamente",
      step3Title: "Descargar WebP",
      step3Desc: "Obtén tus archivos WebP convertidos inmediatamente",
    },

    about: {
      title: "Acerca de la Conversión HEIC a WebP",
      whatIsHeic: {
        title: "¿Qué es el Formato HEIC?",
        content:
          "HEIC (High Efficiency Image Container) es el formato de foto predeterminado utilizado por dispositivos Apple desde iOS 11. Ofrece compresión superior mientras mantiene alta calidad de imagen, haciendo que las fotos ocupen menos espacio de almacenamiento en tu iPhone o iPad.",
      },
      whyConvert: {
        title: "¿Por Qué Convertir HEIC a WebP?",
        content:
          "WebP es un formato de imagen moderno desarrollado por Google que proporciona compresión superior en comparación con PNG y JPG mientras mantiene excelente calidad. Convertir HEIC a WebP resulta en tamaños de archivo más pequeños perfectos para uso web, cargas de página más rápidas y mejor rendimiento SEO. WebP es compatible con todos los navegadores modernos y es ideal para sitios web, aplicaciones web progresivas y compartir en línea.",
      },
      benefits: {
        title: "Beneficios de Nuestro Convertidor",
        list: [
          "Compresión Superior - Archivos 25-35% más pequeños que PNG/JPG con la misma calidad",
          "Optimizado para Web - Perfecto para sitios web, PWAs y plataformas en línea",
          "Formato Moderno - Compatible con todos los principales navegadores y plataformas",
          "Carga Más Rápida - Archivos más pequeños significan tiempos de carga de página más rápidos",
          "Amigable con SEO - Mejora las métricas de rendimiento del sitio web",
          "Calidad Preservada - Excelente calidad visual con compresión eficiente",
        ],
      },
    },

    faq: {
      title: "Preguntas Frecuentes – HEIC a WebP",
      items: [
        {
          q: "¿Es gratis convertir HEIC a WebP?",
          a: "¡Sí! Nuestro convertidor de HEIC a WebP es completamente gratuito. Puedes convertir imágenes HEIC a WebP sin registro, suscripciones ni cargos ocultos.",
        },
        {
          q: "¿Se preservará la calidad al convertir HEIC a WebP?",
          a: "Sí. El formato WebP proporciona excelente calidad de imagen con compresión superior. Tus fotos HEIC se convierten en archivos WebP de alta calidad con pérdida de calidad mínima.",
        },
        {
          q: "¿Puedo convertir fotos HEIC del iPhone a WebP?",
          a: "Sí. Puedes convertir fotos HEIC tomadas en iPhone, iPad o cualquier dispositivo Apple directamente a WebP. Simplemente sube tus archivos HEIC y conviértelos al instante en línea.",
        },
        {
          q: "¿Necesito instalar software para convertir HEIC a WebP?",
          a: "No se requiere instalación. El convertidor HEIC a WebP funciona completamente en línea en tu navegador web en Windows, macOS, Linux, iOS y Android.",
        },
      ],
    },

    related: {
      title: "Convertidores Relacionados",
      converters: [
        { name: "HEIC a PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC a PNG", url: "/convert/heic-to-png" },
        { name: "HEIC a JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC a WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to AVIF Converter
  heicToAvif: {
    title: "Convertidor de HEIC a AVIF - Convierte Fotos de Apple a AVIF Gratis en Línea",
    metaDescription:
      "Convierte imágenes HEIC a formato AVIF instantáneamente. Convertidor gratuito en línea de HEIC a AVIF con procesamiento por lotes. Rápido, seguro y sin registro requerido. Funciona con fotos de iPhone e iPad.",
    metaKeywords:
      "HEIC a AVIF, convertir HEIC, fotos Apple a AVIF, fotos iPhone a AVIF, convertidor HEIC, imagen a AVIF, conversión por lotes HEIC, convertidor HEIC gratuito",

    hero: {
      title: "Convertidor de HEIC a AVIF",
      subtitle:
        "Transforma tus fotos HEIC de Apple en imágenes AVIF de próxima generación instantáneamente. Conversión gratuita, rápida y segura sin límites de tamaño de archivo.",
      badge1: "Súper Rápido",
      badge2: "100% Seguro",
      badge3: "Sin Registro",
    },

    upload: {
      title: "Subir Archivos HEIC",
      description:
        "Arrastra y suelta tus fotos HEIC aquí o haz clic para navegar. Soporta conversión por lotes de hasta 20 archivos. Máximo 100MB por archivo.",
      buttonSingle: "Archivo Único",
      buttonBatch: "Conversión por Lotes",
      chooseFile: "Elegir Archivos",
      converting: "Convirtiendo...",
      success: "¡Conversión exitosa!",
      download: "Descargar AVIF",
      downloadAll: "Descargar Todo como ZIP",
      convertAnother: "Convertir Otro Archivo",
    },

    features: {
      title: "Características",
      list: [
        "Conversión de HEIC a AVIF de alta calidad",
        "Procesamiento por lotes de hasta 20 archivos",
        "Compresión de primera clase con preservación de calidad",
        "Sin límites de tamaño de archivo",
        "100% seguro y privado",
        "Funciona con fotos de iPhone e iPad",
        "Descarga instantánea después de la conversión",
        "Sin marcas de agua añadidas",
      ],
    },

    howItWorks: {
      title: "Cómo Funciona",
      step1Title: "Subir Archivos HEIC",
      step1Desc: "Selecciona una o múltiples fotos HEIC de tu dispositivo",
      step2Title: "Conversión Automática",
      step2Desc: "Nuestro convertidor procesa tus archivos instantáneamente",
      step3Title: "Descargar AVIF",
      step3Desc: "Obtén tus archivos AVIF convertidos inmediatamente",
    },

    about: {
      title: "Acerca de la Conversión HEIC a AVIF",
      whatIsHeic: {
        title: "¿Qué es el Formato HEIC?",
        content:
          "HEIC (High Efficiency Image Container) es el formato de foto predeterminado utilizado por dispositivos Apple desde iOS 11. Ofrece compresión superior mientras mantiene alta calidad de imagen, haciendo que las fotos ocupen menos espacio de almacenamiento en tu iPhone o iPad.",
      },
      whyConvert: {
        title: "¿Por Qué Convertir HEIC a AVIF?",
        content:
          "AVIF (AV1 Image File Format) es el formato de imagen más reciente desarrollado por la Alliance for Open Media, ofreciendo incluso mejor compresión que WebP y JPEG mientras mantiene calidad superior. Convertir HEIC a AVIF resulta en los tamaños de archivo más pequeños posibles para uso web, cargas de página dramáticamente más rápidas y excelente rendimiento SEO. AVIF es compatible con navegadores modernos y es ideal para sitios web de vanguardia, aplicaciones web progresivas y plataformas en línea de alto rendimiento.",
      },
      benefits: {
        title: "Beneficios de Nuestro Convertidor",
        list: [
          "Mejor Compresión - Archivos hasta 50% más pequeños que JPEG con la misma o mejor calidad",
          "Formato de Próxima Generación - El futuro de las imágenes web con apoyo de la industria",
          "Calidad Superior - Excelente calidad visual incluso con compresión muy alta",
          "Carga Más Rápida - Archivos más pequeños significan tiempos de carga de página significativamente más rápidos",
          "Optimizado para SEO - Mejora Core Web Vitals y rankings de búsqueda",
          "Calidad Preservada - Calidad visual excepcional con máxima eficiencia de compresión",
        ],
      },
    },

    faq: {
      title: "Preguntas Frecuentes – HEIC a AVIF",
      items: [
        {
          q: "¿Es gratis convertir HEIC a AVIF?",
          a: "¡Sí! Nuestro convertidor de HEIC a AVIF es completamente gratuito. Puedes convertir imágenes HEIC a AVIF sin registro, suscripciones ni cargos ocultos.",
        },
        {
          q: "¿Se preservará la calidad al convertir HEIC a AVIF?",
          a: "Sí. El formato AVIF proporciona excelente calidad de imagen con compresión avanzada. Tus fotos HEIC se convierten en archivos AVIF de alta calidad con pérdida de calidad mínima y tamaños de archivo significativamente más pequeños.",
        },
        {
          q: "¿Puedo convertir fotos HEIC del iPhone a AVIF?",
          a: "Sí. Puedes convertir fotos HEIC tomadas en iPhone, iPad o cualquier dispositivo Apple directamente a AVIF.",
        },
        {
          q: "¿Necesito instalar software para convertir HEIC a AVIF?",
          a: "No se requiere instalación. El convertidor funciona completamente en línea en tu navegador web en cualquier dispositivo.",
        },
      ],
    },

    related: {
      title: "Convertidores Relacionados",
      converters: [
        { name: "HEIC a PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC a PNG", url: "/convert/heic-to-png" },
        { name: "HEIC a JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC a WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },
};

export type Translations = typeof es;

