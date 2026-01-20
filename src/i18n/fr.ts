// French translations
import type { Translations } from "./en";

export const fr: Translations = {
  locale: "fr",
  name: "Français",
  flag: "🇫🇷",

  nav: {
    converters: "Convertisseurs",
    viewers: "Visionneuses",
    compress: "Compresser",
    samples: "Échantillons",
  },

  home: {
    title:
      "Convertisseur de Fichiers En Ligne Gratuit - FormiPeek | Convertissez 300+ Formats Instantanément",
    metaDescription:
      "Convertissez des fichiers entre 300+ formats instantanément. Service de conversion de fichiers rapide, sécurisé et gratuit. Support pour images, documents, livres électroniques et fichiers de données.",
    metaKeywords:
      "convertisseur de fichiers, convertisseur en ligne, convertisseur d'images, convertisseur de documents, convertisseur de livres électroniques, conversion par lots, convertisseur gratuit",

    hero: {
      badge: "Gratuit Pour Toujours • Sans Inscription",
      title: "Transformez les Fichiers",
      titleHighlight: "Instantanément",
      subtitle:
        "Convertissez entre {count} formats à la vitesse de l'éclair. Sécurisé, gratuit et sans inscription requise.",
      buttonStart: "Commencer la Conversion",
      buttonView: "Voir les Fichiers",
      feature1: "100% Gratuit",
      feature2: "Sans Inscription",
      feature3: "Sécurisé et Privé",
      feature4: "Traitement par Lots",
    },

    stats: {
      formats: "Formats Supportés",
      dataProcessed: "Données Traitées",
      batchFiles: "Traitement par Lots",
    },

    explore: {
      title: "Explorez Nos Outils",
      subtitle:
        "Tout ce dont vous avez besoin pour la conversion de fichiers, la visualisation, la compression et plus encore",
      converters: {
        title: "Convertisseurs",
        description:
          "Convertissez entre 300+ formats de fichiers instantanément. Images, documents, livres électroniques et fichiers de données.",
      },
      viewers: {
        title: "Visionneuses",
        description:
          "Aperçu et visualisation des fichiers directement dans votre navigateur. Aucun téléchargement nécessaire.",
      },
      compress: {
        title: "Compresser",
        description:
          "Réduisez la taille des fichiers sans perte de qualité. Compression JPG, PNG et PDF.",
      },
      samples: {
        title: "Échantillons",
        description:
          "Parcourez des fichiers d'échantillon pour tous les formats supportés. Testez avant de convertir.",
      },
    },

    howItWorks: {
      title: "Comment Fonctionnent Nos Convertisseurs?",
      subtitle: "Trois étapes simples pour convertir n'importe quel format de fichier",
      step1: {
        title: "Télécharger le Fichier",
        description:
          "Glissez-déposez ou parcourez pour sélectionner votre fichier. Prend en charge jusqu'à 100MB par fichier.",
      },
      step2: {
        title: "Choisir le Format",
        description: "Sélectionnez votre format de sortie souhaité parmi 300+ formats supportés.",
      },
      step3: {
        title: "Télécharger",
        description:
          "Cliquez sur convertir et téléchargez votre fichier instantanément. Pas d'attente, pas de files d'attente.",
      },
    },

    popular: {
      title: "Convertisseurs Populaires",
      subtitle: "Accès rapide à nos outils de conversion les plus utilisés",
      viewAll: "Voir Tous les 300+ Convertisseurs",
      viewAllMobile: "Voir Tous les Convertisseurs",
    },

    features: {
      title: "Pourquoi Choisir FormiPeek?",
      subtitle: "Conçu pour les professionnels et les utilisateurs quotidiens",
      lightning: {
        title: "Ultra Rapide",
        description:
          "Traitez les fichiers en quelques secondes avec notre moteur de conversion optimisé",
      },
      secure: {
        title: "Sécurisé et Privé",
        description:
          "Sécurité de niveau entreprise. Les fichiers sont automatiquement supprimés après traitement",
      },
      universal: {
        title: "Support Universel",
        description:
          "Convertissez entre 300+ combinaisons de formats pour tous les types de fichiers",
      },
      batch: {
        title: "Traitement par Lots",
        description:
          "Convertissez jusqu'à 20 fichiers à la fois avec notre puissant moteur par lots",
      },
      viewer: {
        title: "Visionneuse de Fichiers",
        description: "Aperçu et visualisation de vos fichiers directement dans le navigateur",
      },
      quality: {
        title: "Qualité Professionnelle",
        description: "Conversion de standard industriel avec paramètres personnalisables",
      },
    },

    faq: {
      title: "Questions Fréquemment Posées",
      items: [
        {
          q: "Qu'est-ce que FormiPeek?",
          a: "FormiPeek est une plateforme en ligne gratuite qui vous permet de convertir, visualiser et compresser des fichiers directement dans votre navigateur. Il prend en charge plus de 300 combinaisons de formats de fichiers sans installation requise.",
        },
        {
          q: "FormiPeek est-il gratuit?",
          a: "Oui. Tous les outils de conversion et de visualisation de fichiers sur FormiPeek sont entièrement gratuits et ne nécessitent aucune inscription ni abonnement.",
        },
        {
          q: "Mes fichiers sont-ils sécurisés sur FormiPeek?",
          a: "Oui. Les fichiers téléchargés sur FormiPeek sont traités de manière sécurisée et supprimés automatiquement après la conversion. Nous ne stockons ni ne partageons jamais vos fichiers.",
        },
        {
          q: "Quels formats de fichiers FormiPeek prend-il en charge?",
          a: "FormiPeek prend en charge plus de 300 combinaisons de formats de fichiers, y compris les images, documents, livres électroniques et fichiers de données tels que PDF, JPG, PNG, HEIC, CSV, EPUB et plus encore.",
        },
        {
          q: "Dois-je installer un logiciel?",
          a: "Non. FormiPeek fonctionne entièrement en ligne dans votre navigateur Web sur n'importe quel appareil, y compris Windows, macOS, Linux, iOS et Android.",
        },
        {
          q: "Puis-je convertir plusieurs fichiers à la fois?",
          a: "Oui. FormiPeek prend en charge la conversion par lots, vous permettant de convertir jusqu'à 20 fichiers à la fois avec une limite de taille totale de 100MB.",
        },
      ],
    },
  },

  // Converters Page
  converters: {
    title: "Convertisseurs de Fichiers",
    subtitle: "Convertissez entre 300+ formats de fichiers instantanément",
    searchPlaceholder: "Rechercher des convertisseurs... (ex. HEIC en PDF)",
    noConvertersFound: "Aucun convertisseur trouvé correspondant à",
    sections: {
      heic: {
        title: "Convertisseurs HEIC",
        description: "Convertissez des images au format Apple HEIC. HEIC (High Efficiency Image Container) est le format d'image propriétaire d'Apple utilisé par les iPhones et iPads depuis iOS 11. Il offre une excellente compression tout en maintenant une qualité d'image élevée.",
      },
      heif: {
        title: "Convertisseurs HEIF",
        description: "Convertissez des images au format HEIF. HEIF (High Efficiency Image Format) est le format conteneur standard ouvert sur lequel HEIC est basé. Alors que HEIC est l'implémentation d'Apple, HEIF est utilisé par d'autres appareils et plateformes.",
        difference: "Note : HEIF est le format conteneur, tandis que HEIC est l'implémentation spécifique d'Apple. Les deux formats sont compatibles, mais les fichiers HEIC sont plus couramment utilisés par les appareils Apple.",
      },
      jpg: {
        title: "Convertisseurs JPG",
        description: "Convertir images JPG/JPEG vers autres formats. JPG (Joint Photographic Experts Group) est le format d'image le plus utilisé pour les photos, optimisé pour contenu photographique avec compression avec perte.",
      },
    },
    heicToPdf: {
      name: "HEIC en PDF",
      description: "Convertissez les photos Apple HEIC en format PDF instantanément",
    },
    heicToPng: {
      name: "HEIC en PNG",
      description: "Convertissez les photos Apple HEIC en format PNG instantanément",
    },
    heicToJpg: {
      name: "HEIC en JPG",
      description: "Convertissez les photos Apple HEIC en format JPG instantanément",
    },
    heicToWebp: {
      name: "HEIC en WebP",
      description: "Convertissez les photos Apple HEIC en format WebP instantanément",
    },
    heicToTiff: {
      name: "HEIC en TIFF",
      description: "Convertissez les photos Apple HEIC au format TIFF instantanément",
    },
    heicToAvif: {
      name: "HEIC en AVIF",
      description: "Convertissez les photos Apple HEIC en format AVIF instantanément",
    },
    heicToGif: {
      name: "HEIC en GIF",
      description: "Convertissez les photos Apple HEIC en format GIF instantanément",
    },
    heifToJpg: {
      name: "HEIF en JPG",
      description: "Convertissez les images HEIF en format JPG instantanément",
    },
    heifToPng: {
      name: "HEIF en PNG",
      description: "Convertissez les images HEIF en format PNG instantanément",
    },
    heifToPdf: {
      name: "HEIF en PDF",
      description: "Convertissez les images HEIF en format PDF instantanément",
    },
    heifToWebp: {
      name: "HEIF en WebP",
      description: "Convertissez les images HEIF en format WebP instantanément",
    },
    heifToAvif: {
      name: "HEIF en AVIF",
      description: "Convertissez les images HEIF en format AVIF instantanément",
    },
    heifToTiff: {
      name: "HEIF en TIFF",
      description: "Convertissez les images HEIF en format TIFF instantanément",
    },
    heifToGif: {
      name: "HEIF vers GIF",
      description: "Convertir images HEIF en GIF pour réseaux sociaux et partage",
    },
    jpgToPng: {
      name: "JPG vers PNG",
      description: "Convertir JPG en PNG pour transparence et qualité sans perte",
    },
  },

  heicToPdf: {
    title: "Convertisseur HEIC en PDF - Convertir des Photos Apple en PDF Gratuitement en Ligne",
    metaDescription:
      "Convertissez des images HEIC en format PDF instantanément. Convertisseur gratuit en ligne HEIC vers PDF avec traitement par lots. Rapide, sécurisé et sans inscription requise. Fonctionne avec les photos iPhone et iPad.",
    metaKeywords:
      "HEIC en PDF, convertir HEIC, photos Apple en PDF, photos iPhone en PDF, convertisseur HEIC, image en PDF, conversion par lots HEIC, convertisseur HEIC gratuit",

    hero: {
      title: "Convertisseur HEIC en PDF",
      subtitle:
        "Transformez vos photos HEIC Apple en documents PDF universels instantanément. Conversion gratuite, rapide et sécurisée sans limite de taille de fichier.",
      badge1: "Ultra Rapide",
      badge2: "100% Sécurisé",
      badge3: "Sans Inscription",
    },

    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },

    features: {
      title: "Fonctionnalités",
      list: [
        "Conversion HEIC vers PDF de haute qualité",
        "Traitement par lots jusqu'à 20 fichiers",
        "Préserve la qualité d'image et les données EXIF",
        "Aucune limite de taille de fichier",
        "100% sécurisé et privé",
        "Fonctionne avec les photos iPhone et iPad",
        "Téléchargement instantané après conversion",
        "Aucun filigrane ajouté",
      ],
    },

    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },

    about: {
      title: "À Propos de la Conversion HEIC vers PDF",
      whatIsHeic: {
        title: "Qu'est-ce que le format HEIC ?",
        content:
          "HEIC (High Efficiency Image Container) est le format photo par défaut utilisé par les appareils Apple depuis iOS 11. Il offre une compression supérieure tout en maintenant une haute qualité d'image, permettant aux photos d'occuper moins d'espace de stockage sur votre iPhone ou iPad.",
      },
      whyConvert: {
        title: "Pourquoi Convertir HEIC en PDF ?",
        content:
          "Bien que HEIC soit efficace, il n'est pas universellement pris en charge. La conversion en PDF garantit que vos photos peuvent être visualisées sur n'importe quel appareil, facilement partagées par e-mail et présentées professionnellement dans des documents. Les PDF sont également idéaux pour l'impression et l'archivage.",
      },
      benefits: {
        title: "Avantages de Notre Convertisseur",
        list: [
          "Compatibilité Universelle - Les PDF fonctionnent sur tous les appareils et plateformes",
          "Présentation Professionnelle - Parfait pour les documents commerciaux et portfolios",
          "Partage Facile - Format compatible e-mail que tout le monde peut ouvrir",
          "Prêt à Imprimer - Maintient la qualité pour les impressions physiques",
          "Stockage Sécurisé - Format standard de l'industrie pour l'archivage",
          "Aucune Perte de Qualité - Préserve la résolution d'image originale",
        ],
      },
    },

    faq: {
      title: "Questions Fréquentes – JPG vers PNG",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIC en PDF ?",
          a: "Oui ! Notre convertisseur HEIC vers PDF est complètement gratuit à utiliser. Vous pouvez convertir des images HEIC en PDF sans inscription, abonnements ou frais cachés.",
        },
        {
          q: "Puis-je convertir des photos HEIC de l'iPhone en PDF ?",
          a: "Oui. Vous pouvez convertir des photos HEIC prises sur iPhone, iPad ou tout appareil Apple directement en PDF. Téléchargez simplement vos fichiers HEIC depuis votre appareil, et la conversion fonctionne instantanément dans votre navigateur.",
        },
        {
          q: "La qualité sera-t-elle préservée lors de la conversion de HEIC en PDF ?",
          a: "Oui. Nous préservons la qualité d'image originale pendant la conversion. Vos photos HEIC sont converties en fichiers PDF haute résolution sans compression ni perte de qualité.",
        },
        {
          q: "Quelle est la taille maximale de fichier pour la conversion de HEIC en PDF ?",
          a: "Vous pouvez convertir des fichiers HEIC jusqu'à 100Mo par fichier. Pour la conversion par lots, vous pouvez télécharger jusqu'à 20 fichiers à la fois, avec une limite de taille totale de 100Mo.",
        },
      ],
    },

    related: {
      title: "Convertisseurs Connexes",
      converters: [
        { name: "HEIC en JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "JPG en PDF", url: "/convert/jpg-to-pdf" },
        { name: "PNG en PDF", url: "/convert/png-to-pdf" },
        { name: "WEBP en PDF", url: "/convert/webp-to-pdf" },
        { name: "HEIC en WEBP", url: "/convert/heic-to-webp" },
      ],
    },

    footer: {
      tagline:
        "La plateforme ultime de conversion et de visualisation de fichiers pour les professionnels et les utilisateurs quotidiens.",
      security:
        "100% Sécurisé : Aucun fichier n'est stocké sur nos serveurs. Toutes les conversions sont traitées et les fichiers sont automatiquement supprimés immédiatement après le traitement.",
      copyright: "© 2025 FormiPeek",
      madeWith: "Créé avec",
      byDevelopers: "par des développeurs soucieux de la qualité.",
    },
  },

  heicToPng: {
    title: "Convertisseur HEIC en PNG - Convertir des Photos Apple en PNG Gratuitement en Ligne",
    metaDescription:
      "Convertissez des images HEIC en format PNG instantanément. Convertisseur gratuit en ligne HEIC vers PNG avec traitement par lots. Rapide, sécurisé et sans inscription requise. Fonctionne avec les photos iPhone et iPad.",
    metaKeywords:
      "HEIC en PNG, convertir HEIC, photos Apple en PNG, photos iPhone en PNG, convertisseur HEIC, image en PNG, conversion par lots HEIC, convertisseur HEIC gratuit",

    hero: {
      title: "Convertisseur HEIC en PNG",
      subtitle:
        "Transformez vos photos HEIC Apple en images PNG universelles instantanément. Conversion gratuite, rapide et sécurisée sans limites de taille de fichier.",
      badge1: "Ultra Rapide",
      badge2: "100% Sécurisé",
      badge3: "Sans Inscription",
    },

    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },

    features: {
      title: "Fonctionnalités",
      list: [
        "Conversion HEIC en PNG de haute qualité",
        "Traitement par lots jusqu'à 20 fichiers",
        "Préserve la qualité d'image et la transparence",
        "Aucune limite de taille de fichier",
        "100% sécurisé et privé",
        "Fonctionne avec les photos iPhone et iPad",
        "Téléchargement instantané après conversion",
        "Aucun filigrane ajouté",
      ],
    },

    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },

    about: {
      title: "À Propos de la Conversion HEIC en PNG",
      whatIsHeic: {
        title: "Qu'est-ce que le Format HEIC?",
        content:
          "HEIC (High Efficiency Image Container) est le format photo par défaut utilisé par les appareils Apple depuis iOS 11. Il offre une compression supérieure tout en maintenant une haute qualité d'image, permettant aux photos de prendre moins d'espace de stockage sur votre iPhone ou iPad.",
      },
      whyConvert: {
        title: "Pourquoi Convertir HEIC en PNG?",
        content:
          "Bien que HEIC soit efficace, il n'est pas universellement pris en charge. La conversion en PNG garantit que vos photos peuvent être visualisées sur n'importe quel appareil, facilement partagées par e-mail et utilisées dans le design web et les graphiques. Le format PNG prend en charge la transparence et la compression sans perte, ce qui le rend idéal pour un usage professionnel.",
      },
      benefits: {
        title: "Avantages de Notre Convertisseur",
        list: [
          "Compatibilité Universelle - Les PNG fonctionnent sur tous les appareils et plateformes",
          "Support de la Transparence - Parfait pour les graphiques et le design web",
          "Qualité Sans Perte - Aucun artefact de compression ou perte de qualité",
          "Partage Facile - Format largement pris en charge que tout le monde peut ouvrir",
          "Prêt pour le Web - Idéal pour les sites web, les réseaux sociaux et l'utilisation en ligne",
          "Aucune Perte de Qualité - Préserve la résolution d'image originale",
        ],
      },
    },

    faq: {
      title: "Questions Fréquemment Posées – HEIC en PNG",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIC en PNG?",
          a: "Oui ! Notre convertisseur HEIC en PNG est entièrement gratuit. Vous pouvez convertir des images HEIC en PNG sans inscription, abonnements ou frais cachés.",
        },
        {
          q: "La qualité sera-t-elle préservée lors de la conversion de HEIC en PNG?",
          a: "Oui. Nous préservons la qualité d'image originale pendant la conversion. Vos photos HEIC sont converties en fichiers PNG haute résolution sans compression ni perte de qualité.",
        },
        {
          q: "Puis-je convertir des photos HEIC de l'iPhone en PNG?",
          a: "Oui. Vous pouvez convertir des photos HEIC prises sur iPhone, iPad ou tout appareil Apple directement en PNG. Téléchargez simplement vos fichiers HEIC et convertissez-les instantanément dans votre navigateur.",
        },
        {
          q: "Dois-je installer un logiciel pour convertir HEIC en PNG?",
          a: "Aucune installation nécessaire. Le convertisseur HEIC en PNG fonctionne entièrement en ligne dans votre navigateur web sur Windows, macOS, Linux, iOS et Android.",
        },
      ],
    },

    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC en JPG", url: "/convert/heic-to-jpg" },
        { name: "PNG en PDF", url: "/convert/png-to-pdf" },
        { name: "JPG en PNG", url: "/convert/jpg-to-png" },
        { name: "WEBP en PNG", url: "/convert/webp-to-png" },
        { name: "HEIC en WEBP", url: "/convert/heic-to-webp" },
      ],
    },
    },

    // HEIC to JPG Converter
    heicToJpg: {
      title:
        "Convertisseur HEIC en JPG - Convertissez les Photos Apple en JPG Gratuitement en Ligne",
      metaDescription:
        "Convertissez les images HEIC en format JPG instantanément. Convertisseur en ligne gratuit HEIC en JPG avec traitement par lots. Rapide, sécurisé et sans inscription requise. Fonctionne avec les photos iPhone et iPad.",
      metaKeywords:
        "HEIC en JPG, convertir HEIC, photos Apple en JPG, photos iPhone en JPG, convertisseur HEIC, image en JPG, conversion par lots HEIC, convertisseur HEIC gratuit",

      hero: {
        title: "Convertisseur HEIC en JPG",
        subtitle:
          "Transformez vos photos Apple HEIC en images JPG universelles instantanément. Conversion gratuite, rapide et sécurisée sans limites de taille de fichier.",
        badge1: "Ultra Rapide",
        badge2: "100% Sécurisé",
        badge3: "Sans Inscription",
      },

      upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
      },

      features: {
        title: "Fonctionnalités",
        list: [
          "Conversion HEIC en JPG de haute qualité",
          "Traitement par lots jusqu'à 20 fichiers",
          "Préserve la qualité d'image",
          "Aucune limitation de taille de fichier",
          "100% sécurisé et privé",
          "Fonctionne avec les photos iPhone et iPad",
          "Téléchargement instantané après conversion",
          "Aucun filigrane ajouté",
        ],
      },

      howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
      },

      about: {
        title: "À Propos de la Conversion HEIC en JPG",
        whatIsHeic: {
          title: "Qu'est-ce que le Format HEIC ?",
          content:
            "HEIC (High Efficiency Image Container) est le format photo par défaut utilisé par les appareils Apple depuis iOS 11. Il offre une compression supérieure tout en maintenant une haute qualité d'image, permettant aux photos de prendre moins d'espace de stockage sur votre iPhone ou iPad.",
        },
        whyConvert: {
          title: "Pourquoi Convertir HEIC en JPG ?",
          content:
            "Bien que HEIC soit efficace, il n'est pas universellement pris en charge. La conversion en JPG garantit que vos photos peuvent être visualisées sur n'importe quel appareil, facilement partagées par e-mail et utilisées dans le design web et les graphiques. Le format JPG est le format d'image le plus largement pris en charge, idéal pour le partage et la compatibilité.",
        },
        benefits: {
          title: "Avantages de Notre Convertisseur",
          list: [
            "Compatibilité Universelle - Les JPG fonctionnent sur tous les appareils et plateformes",
            "Taille de Fichier Plus Petite - Compression efficace pour un partage plus rapide",
            "Large Support - Format d'image le plus utilisé dans le monde",
            "Partage Facile - Compatible avec tous les clients e-mail et réseaux sociaux",
            "Prêt pour le Web - Idéal pour les sites web, réseaux sociaux et utilisation en ligne",
            "Haute Qualité - Préservez la résolution d'image d'origine",
          ],
        },
      },

      faq: {
        title: "Questions Fréquemment Posées – HEIC en JPG",
        items: [
          {
            q: "Est-ce gratuit de convertir HEIC en JPG ?",
            a: "Oui ! Notre convertisseur HEIC en JPG est entièrement gratuit sans frais cachés. Vous pouvez convertir des fichiers illimités sans inscription ni abonnement.",
          },
          {
            q: "Mes données sont-elles sécurisées ?",
            a: "Absolument. Toutes les conversions se font en toute sécurité sur nos serveurs avec chiffrement SSL. Vos fichiers sont automatiquement supprimés immédiatement après la conversion. Nous ne stockons, ne partageons ni n'accédons jamais à vos fichiers.",
          },
          {
            q: "Quelle est la taille maximale de fichier ?",
            a: "Vous pouvez convertir des fichiers HEIC jusqu'à 100MB chacun. Pour la conversion par lots, vous pouvez traiter jusqu'à 20 fichiers à la fois avec une limite totale de 100MB.",
          },
          {
            q: "Prenez-vous en charge la conversion par lots ?",
            a: "Oui ! Vous pouvez télécharger et convertir jusqu'à 20 fichiers HEIC simultanément. Tous les JPG convertis seront disponibles en téléchargement en tant que fichiers individuels ou dans une seule archive ZIP.",
          },
          {
            q: "La qualité sera-t-elle préservée ?",
            a: "Oui, nous maintenons une haute qualité d'image pendant la conversion. Vos photos HEIC seront converties en JPG haute résolution avec une perte de qualité minimale.",
          },
          {
            q: "Puis-je convertir HEIC directement depuis iPhone ?",
            a: "Oui ! Notre convertisseur fonctionne parfaitement avec les photos prises sur iPhone, iPad ou tout appareil Apple. Téléchargez simplement vos fichiers HEIC depuis votre galerie de photos.",
          },
          {
            q: "Dois-je installer un logiciel ?",
            a: "Aucune installation nécessaire. Notre convertisseur en ligne fonctionne directement dans votre navigateur web sur n'importe quel appareil - Windows, Mac, Linux, iOS ou Android.",
          },
          {
            q: "Combien de temps prend la conversion ?",
            a: "La conversion est presque instantanée ! La plupart des fichiers HEIC se convertissent en JPG en quelques secondes seulement, selon la taille du fichier et votre connexion internet.",
          },
        ],
      },

      related: {
        title: "Convertisseurs Associés",
        converters: [
          { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
          { name: "HEIC en PNG", url: "/convert/heic-to-png" },
          { name: "JPG en PDF", url: "/convert/jpg-to-pdf" },
          { name: "PNG en JPG", url: "/convert/png-to-jpg" },
          { name: "WEBP en JPG", url: "/convert/webp-to-jpg" },
          { name: "HEIC en WEBP", url: "/convert/heic-to-webp" },
        ],
      },
    },

  // HEIC to WebP Converter
  heicToWebp: {
    title: "Convertisseur HEIC en WebP - Convertir des Photos Apple en WebP Gratuitement en Ligne",
    metaDescription:
      "Convertissez des images HEIC en format WebP instantanément. Convertisseur gratuit en ligne HEIC vers WebP avec traitement par lots. Rapide, sécurisé et sans inscription requise. Fonctionne avec les photos iPhone et iPad.",
    metaKeywords:
      "HEIC en WebP, convertir HEIC, photos Apple en WebP, photos iPhone en WebP, convertisseur HEIC, image en WebP, conversion par lots HEIC, convertisseur HEIC gratuit",

    hero: {
      title: "Convertisseur HEIC en WebP",
      subtitle:
        "Transformez vos photos HEIC Apple en images WebP modernes instantanément. Conversion gratuite, rapide et sécurisée sans limites de taille de fichier.",
      badge1: "Ultra Rapide",
      badge2: "100% Sécurisé",
      badge3: "Sans Inscription",
    },

    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },

    features: {
      title: "Fonctionnalités",
      list: [
        "Conversion HEIC en WebP de haute qualité",
        "Traitement par lots jusqu'à 20 fichiers",
        "Compression supérieure avec préservation de la qualité",
        "Aucune limite de taille de fichier",
        "100% sécurisé et privé",
        "Fonctionne avec les photos iPhone et iPad",
        "Téléchargement instantané après conversion",
        "Aucun filigrane ajouté",
      ],
    },

    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },

    about: {
      title: "À Propos de la Conversion HEIC en WebP",
      whatIsHeic: {
        title: "Qu'est-ce que le Format HEIC?",
        content:
          "HEIC (High Efficiency Image Container) est le format photo par défaut utilisé par les appareils Apple depuis iOS 11. Il offre une compression supérieure tout en maintenant une haute qualité d'image, permettant aux photos de prendre moins d'espace de stockage sur votre iPhone ou iPad.",
      },
      whyConvert: {
        title: "Pourquoi Convertir HEIC en WebP?",
        content:
          "WebP est un format d'image moderne développé par Google qui fournit une compression supérieure par rapport à PNG et JPG tout en maintenant une excellente qualité. Convertir HEIC en WebP donne des tailles de fichier plus petites parfaites pour l'utilisation web, des temps de chargement de page plus rapides et de meilleures performances SEO. WebP est pris en charge par tous les navigateurs modernes et est idéal pour les sites web, les applications web progressives et le partage en ligne.",
      },
      benefits: {
        title: "Avantages de Notre Convertisseur",
        list: [
          "Compression Supérieure - Fichiers 25-35% plus petits que PNG/JPG avec la même qualité",
          "Optimisé pour le Web - Parfait pour les sites web, PWAs et plateformes en ligne",
          "Format Moderne - Pris en charge par tous les principaux navigateurs et plateformes",
          "Chargement Plus Rapide - Des fichiers plus petits signifient des temps de chargement de page plus rapides",
          "Ami du SEO - Améliore les métriques de performance du site web",
          "Qualité Préservée - Excellente qualité visuelle avec compression efficace",
        ],
      },
    },

    faq: {
      title: "Questions Fréquemment Posées – HEIC en WebP",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIC en WebP?",
          a: "Oui ! Notre convertisseur HEIC en WebP est entièrement gratuit. Vous pouvez convertir des images HEIC en WebP sans inscription, abonnements ou frais cachés.",
        },
        {
          q: "La qualité sera-t-elle préservée lors de la conversion de HEIC en WebP?",
          a: "Oui. Le format WebP fournit une excellente qualité d'image avec une compression supérieure. Vos photos HEIC sont converties en fichiers WebP de haute qualité avec une perte de qualité minimale.",
        },
        {
          q: "Puis-je convertir des photos HEIC de l'iPhone en WebP?",
          a: "Oui. Vous pouvez convertir des photos HEIC prises sur iPhone, iPad ou tout appareil Apple directement en WebP. Téléchargez simplement vos fichiers HEIC et convertissez-les instantanément en ligne.",
        },
        {
          q: "Dois-je installer un logiciel pour convertir HEIC en WebP?",
          a: "Aucune installation nécessaire. Le convertisseur HEIC en WebP fonctionne entièrement en ligne dans votre navigateur web sur Windows, macOS, Linux, iOS et Android.",
        },
      ],
    },

    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "HEIC en JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC en WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to AVIF Converter
  heicToAvif: {
    title: "Convertisseur HEIC en AVIF - Convertir des Photos Apple en AVIF Gratuitement en Ligne",
    metaDescription:
      "Convertissez des images HEIC en format AVIF instantanément. Convertisseur gratuit en ligne HEIC vers AVIF avec traitement par lots. Rapide, sécurisé et sans inscription requise. Fonctionne avec les photos iPhone et iPad.",
    metaKeywords:
      "HEIC en AVIF, convertir HEIC, photos Apple en AVIF, photos iPhone en AVIF, convertisseur HEIC, image en AVIF, conversion par lots HEIC, convertisseur HEIC gratuit",

    hero: {
      title: "Convertisseur HEIC en AVIF",
      subtitle:
        "Transformez vos photos HEIC Apple en images AVIF de nouvelle génération instantanément. Conversion gratuite, rapide et sécurisée sans limite de taille de fichier.",
      badge1: "Ultra Rapide",
      badge2: "100% Sécurisé",
      badge3: "Sans Inscription",
    },

    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },

    features: {
      title: "Fonctionnalités",
      list: [
        "Conversion HEIC vers AVIF de haute qualité",
        "Traitement par lots jusqu'à 20 fichiers",
        "Compression de premier ordre avec préservation de la qualité",
        "Aucune limitation de taille de fichier",
        "100% sécurisé et privé",
        "Fonctionne avec les photos iPhone & iPad",
        "Téléchargement instantané après conversion",
        "Aucun filigrane ajouté",
      ],
    },

    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },

    about: {
      title: "À Propos de la Conversion HEIC en AVIF",
      whatIsHeic: {
        title: "Qu'est-ce que le Format HEIC?",
        content:
          "HEIC (High Efficiency Image Container) est le format photo par défaut utilisé par les appareils Apple depuis iOS 11. Il offre une compression supérieure tout en maintenant une haute qualité d'image, permettant aux photos de prendre moins d'espace de stockage sur votre iPhone ou iPad.",
      },
      whyConvert: {
        title: "Pourquoi Convertir HEIC en AVIF?",
        content:
          "AVIF (AV1 Image File Format) est le format d'image le plus récent développé par l'Alliance for Open Media, offrant une compression encore meilleure que WebP et JPEG tout en maintenant une qualité supérieure. Convertir HEIC en AVIF donne les plus petites tailles de fichier possibles pour une utilisation web, des chargements de page considérablement plus rapides et d'excellentes performances SEO. AVIF est pris en charge par les navigateurs modernes et est idéal pour les sites web de pointe, les applications web progressives et les plateformes en ligne haute performance.",
      },
      benefits: {
        title: "Avantages de Notre Convertisseur",
        list: [
          "Meilleure Compression - Jusqu'à 50% de fichiers plus petits que JPEG avec la même ou une meilleure qualité",
          "Format de Nouvelle Génération - L'avenir des images web avec le soutien de l'industrie",
          "Qualité Supérieure - Excellente qualité visuelle même avec une compression très élevée",
          "Chargement Plus Rapide - Des fichiers plus petits signifient des temps de chargement de page considérablement plus rapides",
          "Optimisé pour le SEO - Améliore Core Web Vitals et les classements de recherche",
          "Qualité Préservée - Qualité visuelle exceptionnelle avec une efficacité de compression maximale",
        ],
      },
    },

    faq: {
      title: "Questions Fréquemment Posées – HEIC en AVIF",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIC en AVIF?",
          a: "Oui! Notre convertisseur HEIC en AVIF est entièrement gratuit. Vous pouvez convertir des images HEIC en AVIF sans inscription, abonnements ou frais cachés.",
        },
        {
          q: "La qualité sera-t-elle préservée lors de la conversion HEIC en AVIF?",
          a: "Oui. Le format AVIF offre une excellente qualité d'image avec une compression avancée. Vos photos HEIC sont converties en fichiers AVIF de haute qualité avec une perte de qualité minimale et des tailles de fichier considérablement plus petites.",
        },
        {
          q: "Puis-je convertir des photos HEIC de l'iPhone en AVIF?",
          a: "Oui. Vous pouvez convertir des photos HEIC prises sur iPhone, iPad ou tout appareil Apple directement en AVIF.",
        },
        {
          q: "Dois-je installer un logiciel pour convertir HEIC en AVIF?",
          a: "Aucune installation n'est requise. Le convertisseur fonctionne entièrement en ligne dans votre navigateur web sur n'importe quel appareil.",
        },
      ],
    },

    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "HEIC en JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC en WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to TIFF Converter
  heicToTiff: {
    title: "Convertisseur HEIC en TIFF - Convertir des Photos Apple en TIFF Gratuitement en Ligne",
    metaDescription:
      "Convertissez des images HEIC en format TIFF instantanément. Convertisseur gratuit en ligne HEIC vers TIFF avec traitement par lots. Rapide, sécurisé et sans inscription requise. Fonctionne avec les photos iPhone et iPad.",
    metaKeywords:
      "HEIC en TIFF, convertir HEIC, photos Apple en TIFF, photos iPhone en TIFF, convertisseur HEIC, image en TIFF, conversion par lots HEIC, convertisseur HEIC gratuit",

    hero: {
      title: "Convertisseur HEIC en TIFF",
      subtitle:
        "Transformez vos photos HEIC Apple en images TIFF de nouvelle génération instantanément. Conversion gratuite, rapide et sécurisée sans limite de taille de fichier.",
      badge1: "Ultra Rapide",
      badge2: "100% Sécurisé",
      badge3: "Sans Inscription",
    },

    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },

    features: {
      title: "Fonctionnalités",
      list: [
        "Conversion HEIC vers TIFF de haute qualité",
        "Traitement par lots jusqu'à 20 fichiers",
        "Compression de premier ordre avec préservation de la qualité",
        "Aucune limitation de taille de fichier",
        "100% sécurisé et privé",
        "Fonctionne avec les photos iPhone & iPad",
        "Téléchargement instantané après conversion",
        "Aucun filigrane ajouté",
      ],
    },

    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },

    about: {
      title: "À Propos de la Conversion HEIC en TIFF",
      whatIsHeic: {
        title: "Qu'est-ce que le Format HEIC?",
        content:
          "HEIC (High Efficiency Image Container) est le format photo par défaut utilisé par les appareils Apple depuis iOS 11. Il offre une compression supérieure tout en maintenant une haute qualité d'image, permettant aux photos de prendre moins d'espace de stockage sur votre iPhone ou iPad.",
      },
      whyConvert: {
        title: "Pourquoi Convertir HEIC en TIFF?",
        content:
          "TIFF (AV1 Image File Format) est le format d'image le plus récent développé par l'Alliance for Open Media, offrant une compression encore meilleure que WebP et JPEG tout en maintenant une qualité supérieure. Convertir HEIC en TIFF donne les plus petites tailles de fichier possibles pour une utilisation web, des chargements de page considérablement plus rapides et d'excellentes performances SEO. TIFF est pris en charge par les navigateurs modernes et est idéal pour les sites web de pointe, les applications web progressives et les plateformes en ligne haute performance.",
      },
      benefits: {
        title: "Avantages de Notre Convertisseur",
        list: [
          "Meilleure Compression - Jusqu'à 50% de fichiers plus petits que JPEG avec la même ou une meilleure qualité",
          "Format de Nouvelle Génération - L'avenir des images web avec le soutien de l'industrie",
          "Qualité Supérieure - Excellente qualité visuelle même avec une compression très élevée",
          "Chargement Plus Rapide - Des fichiers plus petits signifient des temps de chargement de page considérablement plus rapides",
          "Optimisé pour le SEO - Améliore Core Web Vitals et les classements de recherche",
          "Qualité Préservée - Qualité visuelle exceptionnelle avec une efficacité de compression maximale",
        ],
      },
    },

    faq: {
      title: "Questions Fréquemment Posées – HEIC en TIFF",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIC en TIFF?",
          a: "Oui! Notre convertisseur HEIC en TIFF est entièrement gratuit. Vous pouvez convertir des images HEIC en TIFF sans inscription, abonnements ou frais cachés.",
        },
        {
          q: "La qualité sera-t-elle préservée lors de la conversion HEIC en TIFF?",
          a: "Oui. Le format TIFF offre une excellente qualité d'image avec une compression avancée. Vos photos HEIC sont converties en fichiers TIFF de haute qualité avec une perte de qualité minimale et des tailles de fichier considérablement plus petites.",
        },
        {
          q: "Puis-je convertir des photos HEIC de l'iPhone en TIFF?",
          a: "Oui. Vous pouvez convertir des photos HEIC prises sur iPhone, iPad ou tout appareil Apple directement en TIFF.",
        },
        {
          q: "Dois-je installer un logiciel pour convertir HEIC en TIFF?",
          a: "Aucune installation n'est requise. Le convertisseur fonctionne entièrement en ligne dans votre navigateur web sur n'importe quel appareil.",
        },
      ],
    },

    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "HEIC en JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC en WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to GIF Converter
  heicToGif: {
    title: "Convertisseur HEIC en GIF - Convertissez les Photos Apple en GIF Gratuitement en Ligne",
    metaDescription:
      "Convertissez les images HEIC au format GIF instantanément. Convertisseur HEIC en GIF gratuit en ligne avec traitement par lots. Rapide, sécurisé et sans inscription requise. Fonctionne avec les photos iPhone et iPad.",
    metaKeywords:
      "HEIC en GIF, convertir HEIC, photos Apple en GIF, photos iPhone en GIF, convertisseur HEIC, image en GIF, conversion par lots HEIC, convertisseur HEIC gratuit",
    hero: {
      title: "Convertisseur HEIC en GIF",
      subtitle:
        "Transformez vos photos HEIC Apple en images GIF animées ou statiques instantanément. Conversion gratuite, rapide et sécurisée sans limite de taille de fichier.",
      badge1: "Ultra Rapide",
      badge2: "100% Sécurisé",
      badge3: "Sans Inscription",
    },
    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },
    features: {
      title: "Caractéristiques",
      list: [
        "Conversion HEIC en GIF de haute qualité",
        "Traitement par lots jusqu'à 20 fichiers",
        "Préserve la qualité d'image",
        "Aucune limitation de taille de fichier",
        "100% sécurisé et privé",
        "Fonctionne avec les photos iPhone et iPad",
        "Téléchargement instantané après conversion",
        "Aucun filigrane ajouté",
      ],
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },
    about: {
      title: "À Propos de la Conversion HEIC en GIF",
      whatIsHeic: {
        title: "Qu'est-ce que le Format HEIC ?",
        content:
          "HEIC (High Efficiency Image Container) est le format photo par défaut utilisé par les appareils Apple depuis iOS 11. Il offre une compression supérieure tout en maintenant une haute qualité d'image, permettant aux photos de prendre moins d'espace de stockage sur votre iPhone ou iPad.",
      },
      whyConvert: {
        title: "Pourquoi Convertir HEIC en GIF ?",
        content:
          "Le format GIF est parfait pour une utilisation web, le partage sur les réseaux sociaux et la création d'images animées. Convertir HEIC en GIF garantit que vos photos peuvent être facilement partagées en ligne, intégrées dans des sites web et visualisées sur n'importe quelle plateforme. Les GIFs sont largement pris en charge et parfaits pour créer des animations simples ou des images statiques avec une large compatibilité.",
      },
      benefits: {
        title: "Avantages de Notre Convertisseur",
        list: [
          "Optimisé pour le Web - Le format GIF est parfait pour le web et les réseaux sociaux",
          "Compatibilité Universelle - Les GIFs fonctionnent partout",
          "Petites Tailles de Fichier - Compression efficace pour un chargement rapide",
          "Partage Facile - Partagez des GIFs sur n'importe quelle plateforme ou réseau social",
          "Support d'Animation - Créez des GIFs animés à partir de plusieurs images",
          "Aucune Perte de Qualité - Préservez la qualité visuelle au format GIF",
        ],
      },
    },
    faq: {
      title: "Questions Fréquemment Posées – HEIC en GIF",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIC en GIF ?",
          a: "Oui ! Notre convertisseur HEIC en GIF est entièrement gratuit. Vous pouvez convertir des images HEIC en GIF sans inscription, abonnement ou frais cachés.",
        },
        {
          q: "Puis-je convertir des photos HEIC d'iPhone en GIF ?",
          a: "Oui. Vous pouvez convertir des photos HEIC prises sur iPhone, iPad ou tout appareil Apple directement en GIF. Téléchargez simplement vos fichiers HEIC depuis votre appareil, et la conversion fonctionne instantanément dans votre navigateur.",
        },
        {
          q: "La qualité sera-t-elle préservée lors de la conversion HEIC en GIF ?",
          a: "Oui. Nous préservons la qualité d'image lors de la conversion. Vos photos HEIC sont converties en fichiers GIF de haute qualité avec des paramètres de compression optimaux pour équilibrer qualité et taille de fichier.",
        },
        {
          q: "Quelle est la taille maximale de fichier pour la conversion HEIC en GIF ?",
          a: "Vous pouvez convertir des fichiers HEIC jusqu'à 100 Mo par fichier. Pour la conversion par lots, vous pouvez télécharger jusqu'à 20 fichiers à la fois, avec une limite de taille totale de 100 Mo.",
        },
        {
          q: "Pourquoi devrais-je convertir HEIC en GIF plutôt qu'en d'autres formats ?",
          a: "Le format GIF est idéal pour une utilisation web, les réseaux sociaux et la création d'images partageables. Il est largement pris en charge, se charge rapidement et est parfait pour l'intégration dans des sites web ou le partage en ligne.",
        },
        {
          q: "Dois-je installer un logiciel pour convertir HEIC en GIF ?",
          a: "Aucune installation n'est requise. Le convertisseur HEIC en GIF fonctionne entièrement en ligne dans votre navigateur web sur Windows, macOS, Linux, iOS et Android.",
        },
        {
          q: "Puis-je convertir plusieurs fichiers HEIC en GIF à la fois ?",
          a: "Oui ! Notre convertisseur prend en charge le traitement par lots. Vous pouvez télécharger et convertir jusqu'à 20 fichiers HEIC simultanément. Tous les fichiers GIF convertis seront disponibles en téléchargement sous forme de fichiers individuels ou dans une seule archive ZIP.",
        },
        {
          q: "Puis-je créer des GIFs animés à partir de fichiers HEIC ?",
          a: "Notre convertisseur crée des GIFs statiques à partir d'images HEIC individuelles. Pour les GIFs animés, vous auriez besoin de plusieurs images combinées en une animation, ce qui nécessite un traitement supplémentaire.",
        },
      ],
    },
    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "HEIC en JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC en WebP", url: "/convert/heic-to-webp" },
        { name: "PNG en GIF", url: "/convert/png-to-gif" },
        { name: "JPG en GIF", url: "/convert/jpg-to-gif" },
      ],
    },
  },

  // HEIF to JPG Converter
  heifToJpg: {
    title: "Convertisseur HEIF en JPG - Convertissez les Images HEIF en JPG Gratuitement en Ligne",
    metaDescription:
      "Convertissez les images HEIF au format JPG instantanément. Convertisseur HEIF en JPG gratuit en ligne avec traitement par lots. Rapide, sécurisé et sans inscription requise. Fonctionne avec les photos HEIF de tous les appareils.",
    metaKeywords:
      "HEIF en JPG, convertir HEIF, images HEIF en JPG, convertisseur HEIF, image en JPG, conversion par lots HEIF, convertisseur HEIF gratuit, HEIF vs HEIC",
    hero: {
      title: "Convertisseur HEIF en JPG",
      subtitle:
        "Transformez vos images HEIF en format JPG universel instantanément. Conversion gratuite, rapide et sécurisée sans limites de taille de fichier. Parfait pour les photos HEIF de n'importe quel appareil.",
      badge1: "Ultra Rapide",
      badge2: "100% Sécurisé",
      badge3: "Sans Inscription",
    },
    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },
    features: {
      title: "Fonctionnalités",
      list: [
        "Conversion HEIF en JPG de haute qualité",
        "Traitement par lots jusqu'à 20 fichiers",
        "Préserve la qualité d'image",
        "Aucune limitation de taille de fichier",
        "100% sécurisé et privé",
        "Fonctionne avec les photos HEIF de tous les appareils",
        "Téléchargement instantané après conversion",
        "Aucun filigrane ajouté",
      ],
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },
    about: {
      title: "À Propos de la Conversion JPG en PNG",
      p1: "JPG (ou JPEG) est un format d'image avec perte optimisé pour les photographies mais ne prend pas en charge la transparence. PNG (Portable Network Graphics) est un format sans perte parfait pour les graphiques, logos et images nécessitant des arrière-plans transparents ou des bords nets. Convertir JPG en PNG est idéal lorsque vous devez ajouter de la transparence, effectuer plusieurs cycles d'édition sans perte de qualité ou préparer des images pour le web avec des bords nets.",
      p2: "Notre convertisseur JPG en PNG préserve parfaitement chaque pixel de votre image originale tout en la transformant au format PNG sans perte. Contrairement au JPG qui perd en qualité à chaque sauvegarde, les fichiers PNG peuvent être modifiés et réenregistrés sans dégradation. Cela fait du PNG le choix préféré des designers professionnels, de la création de logos et de tout projet où la précision compte. Le format PNG prend également en charge la transparence alpha, vous permettant de créer des images avec des arrière-plans transparents - quelque chose que JPG ne peut pas faire.",
      p3: "La conversion est instantanée, sécurisée et préserve la précision des couleurs. Vos fichiers ne sont jamais stockés ni partagés - tout se passe en toute sécurité dans votre navigateur. Que vous convertissiez un seul logo ou un lot d'images de produits, notre outil offre des résultats professionnels sans filigranes ni frais cachés.",
    },
      whyConvert: {
        title: "Pourquoi Convertir HEIF en JPG ?",
        content:
          "Bien que HEIF soit efficace et moderne, il n'est pas universellement pris en charge sur tous les appareils et plateformes. La conversion de HEIF en JPG garantit que vos images peuvent être visualisées sur n'importe quel appareil, facilement partagées par e-mail, téléchargées sur des sites web et utilisées dans n'importe quelle application. Le format JPG est le format d'image le plus largement pris en charge dans le monde, ce qui le rend parfait pour une compatibilité et un partage maximaux.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Quelle est la Différence ?",
        content:
          "HEIF (High Efficiency Image Format) est le standard de format de conteneur, tandis que HEIC (High Efficiency Image Container) est l'implémentation spécifique d'Apple de HEIF. En pratique, ils sont très similaires - les deux utilisent la même technologie de compression et offrent les mêmes avantages. Les appareils Apple enregistrent les photos sous forme de fichiers HEIC, qui sont en fait conformes à HEIF. Notre convertisseur gère les deux formats de manière transparente, vous pouvez donc convertir n'importe quelle image HEIF/HEIC au format JPG.",
      },
      benefits: {
        title: "Avantages de Notre Convertisseur",
        list: [
          "Compatibilité Universelle - Les JPG fonctionnent sur tous les appareils et plateformes",
          "Taille de Fichier Plus Petite - Compression efficace pour un partage plus rapide",
          "Large Support - Format d'image le plus utilisé dans le monde",
          "Facile à Partager - Compatible avec tous les clients de messagerie et les réseaux sociaux",
          "Prêt pour le Web - Idéal pour les sites web, les réseaux sociaux et l'utilisation en ligne",
          "Haute Qualité - Préservez la résolution d'image d'origine",
        ],
      },
    },
    faq: {
      title: "Questions Fréquemment Posées – HEIF en JPG",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIF en JPG ?",
          a: "Oui ! Notre convertisseur HEIF en JPG est entièrement gratuit sans frais cachés. Vous pouvez convertir un nombre illimité de fichiers sans inscription ni abonnement.",
        },
        {
          q: "Quelle est la différence entre HEIF et HEIC ?",
          a: "HEIF (High Efficiency Image Format) est le nom de format standard, tandis que HEIC (High Efficiency Image Container) est l'implémentation spécifique d'Apple. Ils utilisent la même technologie de compression et sont fonctionnellement très similaires. Notre convertisseur gère les deux formats de manière transparente.",
        },
        {
          q: "Mes données sont-elles sûres ?",
          a: "Absolument. Toutes les conversions se font en toute sécurité sur nos serveurs avec chiffrement SSL. Vos fichiers sont automatiquement supprimés immédiatement après la conversion. Nous ne stockons, ne partageons ni n'accédons jamais à vos fichiers.",
        },
        {
          q: "Quelle est la taille maximale de fichier ?",
          a: "Vous pouvez convertir des fichiers HEIF jusqu'à 100MB chacun. Pour la conversion par lots, vous pouvez traiter jusqu'à 20 fichiers à la fois avec une limite totale de 100MB.",
        },
        {
          q: "Prenez-vous en charge la conversion par lots ?",
          a: "Oui ! Vous pouvez télécharger et convertir jusqu'à 20 fichiers HEIF simultanément. Tous les JPG convertis seront disponibles au téléchargement en tant que fichiers individuels ou dans une seule archive ZIP.",
        },
        {
          q: "La qualité sera-t-elle préservée ?",
          a: "Oui, nous maintenons une haute qualité d'image pendant la conversion. Vos images HEIF seront converties en JPG haute résolution avec une perte de qualité minimale.",
        },
        {
          q: "Puis-je convertir HEIF depuis n'importe quel appareil ?",
          a: "Oui ! Notre convertisseur fonctionne avec des images HEIF de n'importe quel appareil ou appareil photo qui prend en charge le format HEIF, pas seulement les appareils Apple. Il suffit de télécharger vos fichiers HEIF et de les convertir en JPG.",
        },
        {
          q: "Dois-je installer un logiciel ?",
          a: "Aucune installation nécessaire. Notre convertisseur en ligne fonctionne directement dans votre navigateur web sur n'importe quel appareil - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Combien de temps prend la conversion ?",
          a: "La conversion est presque instantanée ! La plupart des fichiers HEIF se convertissent en JPG en quelques secondes seulement, selon la taille du fichier et votre connexion Internet.",
        },
      ],
    },
    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "HEIC en JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "HEIF en PNG", url: "/convert/heif-to-png" },
        { name: "JPG en PDF", url: "/convert/jpg-to-pdf" },
        { name: "PNG en JPG", url: "/convert/png-to-jpg" },
      ],
    },
  },

  // HEIF to TIFF Converter
  heifToTiff: {
    title: "Convertisseur HEIF en TIFF - Convertissez les Images HEIF en TIFF Gratuitement en Ligne",
    metaDescription:
      "Convertissez les images HEIF au format TIFF instantanément. Convertisseur HEIF en TIFF gratuit en ligne avec traitement par lots. Rapide, sécurisé et sans inscription requise. Fonctionne avec les photos HEIF de tous les appareils.",
    metaKeywords:
      "HEIF en TIFF, convertir HEIF, images HEIF en TIFF, convertisseur HEIF, image en TIFF, conversion par lots HEIF, convertisseur HEIF gratuit, HEIF vs HEIC",
    hero: {
      title: "Convertisseur HEIF en TIFF",
      subtitle:
        "Transformez vos images HEIF en format TIFF universel instantanément. Conversion gratuite, rapide et sécurisée sans limites de taille de fichier. Parfait pour les photos HEIF de n'importe quel appareil.",
      badge1: "Ultra Rapide",
      badge2: "100% Sécurisé",
      badge3: "Sans Inscription",
    },
    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },
    features: {
      title: "Fonctionnalités",
      list: [
        "Conversion HEIF en TIFF de haute qualité",
        "Traitement par lots jusqu'à 20 fichiers",
        "Préserve la qualité d'image",
        "Aucune limitation de taille de fichier",
        "100% sécurisé et privé",
        "Fonctionne avec les photos HEIF de tous les appareils",
        "Téléchargement instantané après conversion",
        "Aucun filigrane ajouté",
      ],
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },
    about: {
      title: "À Propos de la Conversion HEIF en TIFF",
      whatIsHeif: {
        title: "Qu'est-ce que le Format HEIF ?",
        content:
          "HEIF (High Efficiency Image Format) est un format de conteneur d'images moderne qui utilise la compression HEVC (H.265). Bien que similaire à HEIC, HEIF est le nom de format standard, tandis que HEIC fait spécifiquement référence à l'implémentation d'Apple. HEIF offre une compression supérieure par rapport à TIFF tout en maintenant une haute qualité d'image, ce qui le rend idéal pour stocker des photos efficacement.",
      },
      whyConvert: {
        title: "Pourquoi Convertir HEIF en TIFF ?",
        content:
          "Bien que HEIF soit efficace et moderne, il n'est pas universellement pris en charge sur tous les appareils et plateformes. La conversion de HEIF en TIFF garantit que vos images peuvent être visualisées sur n'importe quel appareil, facilement partagées par e-mail, téléchargées sur des sites web et utilisées dans n'importe quelle application. Le format TIFF est le format d'image le plus largement pris en charge dans le monde, ce qui le rend parfait pour une compatibilité et un partage maximaux.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Quelle est la Différence ?",
        content:
          "HEIF (High Efficiency Image Format) est le standard de format de conteneur, tandis que HEIC (High Efficiency Image Container) est l'implémentation spécifique d'Apple de HEIF. En pratique, ils sont très similaires - les deux utilisent la même technologie de compression et offrent les mêmes avantages. Les appareils Apple enregistrent les photos sous forme de fichiers HEIC, qui sont en fait conformes à HEIF. Notre convertisseur gère les deux formats de manière transparente, vous pouvez donc convertir n'importe quelle image HEIF/HEIC au format TIFF.",
      },
      benefits: {
        title: "Avantages de Notre Convertisseur",
        list: [
          "Compatibilité Universelle - Les TIFF fonctionnent sur tous les appareils et plateformes",
          "Taille de Fichier Plus Petite - Compression efficace pour un partage plus rapide",
          "Large Support - Format d'image le plus utilisé dans le monde",
          "Facile à Partager - Compatible avec tous les clients de messagerie et les réseaux sociaux",
          "Prêt pour le Web - Idéal pour les sites web, les réseaux sociaux et l'utilisation en ligne",
          "Haute Qualité - Préservez la résolution d'image d'origine",
        ],
      },
    },
    faq: {
      title: "Questions Fréquemment Posées – HEIF en TIFF",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIF en TIFF ?",
          a: "Oui ! Notre convertisseur HEIF en TIFF est entièrement gratuit sans frais cachés. Vous pouvez convertir un nombre illimité de fichiers sans inscription ni abonnement.",
        },
        {
          q: "Quelle est la différence entre HEIF et HEIC ?",
          a: "HEIF (High Efficiency Image Format) est le nom de format standard, tandis que HEIC (High Efficiency Image Container) est l'implémentation spécifique d'Apple. Ils utilisent la même technologie de compression et sont fonctionnellement très similaires. Notre convertisseur gère les deux formats de manière transparente.",
        },
        {
          q: "Mes données sont-elles sûres ?",
          a: "Absolument. Toutes les conversions se font en toute sécurité sur nos serveurs avec chiffrement SSL. Vos fichiers sont automatiquement supprimés immédiatement après la conversion. Nous ne stockons, ne partageons ni n'accédons jamais à vos fichiers.",
        },
        {
          q: "Quelle est la taille maximale de fichier ?",
          a: "Vous pouvez convertir des fichiers HEIF jusqu'à 100MB chacun. Pour la conversion par lots, vous pouvez traiter jusqu'à 20 fichiers à la fois avec une limite totale de 100MB.",
        },
        {
          q: "Prenez-vous en charge la conversion par lots ?",
          a: "Oui ! Vous pouvez télécharger et convertir jusqu'à 20 fichiers HEIF simultanément. Tous les TIFF convertis seront disponibles au téléchargement en tant que fichiers individuels ou dans une seule archive ZIP.",
        },
        {
          q: "La qualité sera-t-elle préservée ?",
          a: "Oui, nous maintenons une haute qualité d'image pendant la conversion. Vos images HEIF seront converties en TIFF haute résolution avec une perte de qualité minimale.",
        },
        {
          q: "Puis-je convertir HEIF depuis n'importe quel appareil ?",
          a: "Oui ! Notre convertisseur fonctionne avec des images HEIF de n'importe quel appareil ou appareil photo qui prend en charge le format HEIF, pas seulement les appareils Apple. Il suffit de télécharger vos fichiers HEIF et de les convertir en TIFF.",
        },
        {
          q: "Dois-je installer un logiciel ?",
          a: "Aucune installation nécessaire. Notre convertisseur en ligne fonctionne directement dans votre navigateur web sur n'importe quel appareil - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Combien de temps prend la conversion ?",
          a: "La conversion est presque instantanée ! La plupart des fichiers HEIF se convertissent en TIFF en quelques secondes seulement, selon la taille du fichier et votre connexion Internet.",
        },
      ],
    },
    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "HEIC en TIFF", url: "/convert/heic-to-tiff" },
        { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "HEIF en PNG", url: "/convert/heif-to-png" },
        { name: "TIFF en PDF", url: "/convert/tiff-to-pdf" },
        { name: "PNG en TIFF", url: "/convert/png-to-tiff" },
      ],
    },
  },
  // HEIF to AVIF Converter
  heifToAvif: {
    title: "Convertisseur HEIF vers AVIF - Convertir au Format d'Image AV1 Nouvelle Génération",
    metaDescription:
      "Convertissez HEIF en AVIF pour une compression de pointe. 50% plus petit que JPEG, 20% plus petit que WebP. Format AV1 libre de droits avec support HDR. Utilisé par Netflix et YouTube. Convertisseur par lots gratuit.",
    metaKeywords:
      "HEIF vers AVIF, format d'image AV1, compression next-gen, images HDR, format libre de droits, AVIF vs WebP, conversion par lots HEIF, format d'image moderne",
    hero: {
      title: "Convertisseur HEIF en AVIF",
      subtitle:
        "Transformez vos images HEIF en format AVIF universel instantanément. Conversion gratuite, rapide et sécurisée sans limites de taille de fichier. Parfait pour les photos HEIF de n'importe quel appareil.",
      badge1: "Ultra Rapide",
      badge2: "100% Sécurisé",
      badge3: "Sans Inscription",
    },
    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },
    features: {
      title: "Fonctionnalités",
      list: [
        "Conversion HEIF en AVIF de haute qualité",
        "Traitement par lots jusqu'à 20 fichiers",
        "Préserve la qualité d'image",
        "Aucune limitation de taille de fichier",
        "100% sécurisé et privé",
        "Fonctionne avec les photos HEIF de tous les appareils",
        "Téléchargement instantané après conversion",
        "Aucun filigrane ajouté",
      ],
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },
    about: {
      title: "À Propos de la Conversion HEIF en AVIF",
      whatIsHeif: {
        title: "Qu'est-ce que le Format HEIF ?",
        content:
          "HEIF (High Efficiency Image Format) est un format de conteneur d'images moderne qui utilise la compression HEVC (H.265). Bien que similaire à HEIC, HEIF est le nom de format standard, tandis que HEIC fait spécifiquement référence à l'implémentation d'Apple. HEIF offre une compression supérieure par rapport à AVIF tout en maintenant une haute qualité d'image, ce qui le rend idéal pour stocker des photos efficacement.",
      },
      whyConvert: {
        title: "Pourquoi Convertir HEIF en AVIF ?",
        content:
          "Bien que HEIF soit efficace et moderne, il n'est pas universellement pris en charge sur tous les appareils et plateformes. La conversion de HEIF en AVIF garantit que vos images peuvent être visualisées sur n'importe quel appareil, facilement partagées par e-mail, téléchargées sur des sites web et utilisées dans n'importe quelle application. Le format AVIF est le format d'image le plus largement pris en charge dans le monde, ce qui le rend parfait pour une compatibilité et un partage maximaux.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Quelle est la Différence ?",
        content:
          "HEIF (High Efficiency Image Format) est le standard de format de conteneur, tandis que HEIC (High Efficiency Image Container) est l'implémentation spécifique d'Apple de HEIF. En pratique, ils sont très similaires - les deux utilisent la même technologie de compression et offrent les mêmes avantages. Les appareils Apple enregistrent les photos sous forme de fichiers HEIC, qui sont en fait conformes à HEIF. Notre convertisseur gère les deux formats de manière transparente, vous pouvez donc convertir n'importe quelle image HEIF/HEIC au format AVIF.",
      },
      benefits: {
        title: "Avantages de Notre Convertisseur",
        list: [
          "Compatibilité Universelle - Les AVIF fonctionnent sur tous les appareils et plateformes",
          "Taille de Fichier Plus Petite - Compression efficace pour un partage plus rapide",
          "Large Support - Format d'image le plus utilisé dans le monde",
          "Facile à Partager - Compatible avec tous les clients de messagerie et les réseaux sociaux",
          "Prêt pour le Web - Idéal pour les sites web, les réseaux sociaux et l'utilisation en ligne",
          "Haute Qualité - Préservez la résolution d'image d'origine",
        ],
      },
    },
    faq: {
      title: "Questions Fréquemment Posées – HEIF en AVIF",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIF en AVIF ?",
          a: "Oui ! Notre convertisseur HEIF en AVIF est entièrement gratuit sans frais cachés. Vous pouvez convertir un nombre illimité de fichiers sans inscription ni abonnement.",
        },
        {
          q: "Quelle est la différence entre HEIF et HEIC ?",
          a: "HEIF (High Efficiency Image Format) est le nom de format standard, tandis que HEIC (High Efficiency Image Container) est l'implémentation spécifique d'Apple. Ils utilisent la même technologie de compression et sont fonctionnellement très similaires. Notre convertisseur gère les deux formats de manière transparente.",
        },
        {
          q: "Mes données sont-elles sûres ?",
          a: "Absolument. Toutes les conversions se font en toute sécurité sur nos serveurs avec chiffrement SSL. Vos fichiers sont automatiquement supprimés immédiatement après la conversion. Nous ne stockons, ne partageons ni n'accédons jamais à vos fichiers.",
        },
        {
          q: "Quelle est la taille maximale de fichier ?",
          a: "Vous pouvez convertir des fichiers HEIF jusqu'à 100MB chacun. Pour la conversion par lots, vous pouvez traiter jusqu'à 20 fichiers à la fois avec une limite totale de 100MB.",
        },
        {
          q: "Prenez-vous en charge la conversion par lots ?",
          a: "Oui ! Vous pouvez télécharger et convertir jusqu'à 20 fichiers HEIF simultanément. Tous les AVIF convertis seront disponibles au téléchargement en tant que fichiers individuels ou dans une seule archive ZIP.",
        },
        {
          q: "La qualité sera-t-elle préservée ?",
          a: "Oui, nous maintenons une haute qualité d'image pendant la conversion. Vos images HEIF seront converties en AVIF haute résolution avec une perte de qualité minimale.",
        },
        {
          q: "Puis-je convertir HEIF depuis n'importe quel appareil ?",
          a: "Oui ! Notre convertisseur fonctionne avec des images HEIF de n'importe quel appareil ou appareil photo qui prend en charge le format HEIF, pas seulement les appareils Apple. Il suffit de télécharger vos fichiers HEIF et de les convertir en AVIF.",
        },
        {
          q: "Dois-je installer un logiciel ?",
          a: "Aucune installation nécessaire. Notre convertisseur en ligne fonctionne directement dans votre navigateur web sur n'importe quel appareil - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Combien de temps prend la conversion ?",
          a: "La conversion est presque instantanée ! La plupart des fichiers HEIF se convertissent en AVIF en quelques secondes seulement, selon la taille du fichier et votre connexion Internet.",
        },
      ],
    },
    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "HEIC en AVIF", url: "/convert/heic-to-avif" },
        { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "HEIF en PNG", url: "/convert/heif-to-png" },
        { name: "AVIF en PDF", url: "/convert/avif-to-pdf" },
        { name: "PNG en AVIF", url: "/convert/png-to-avif" },
      ],
    },
  },
  // HEIF to WebP Converter
  heifToWebp: {
    title: "Convertisseur HEIF vers WebP - Convertir au Format Web Moderne Optimisé",
    metaDescription:
      "Convertissez HEIF en WebP pour des performances web supérieures. Fichiers 25-35% plus petits que JPEG avec une meilleure qualité. Format next-gen de Google avec support de transparence. Convertisseur par lots gratuit, sans inscription.",
    metaKeywords:
      "HEIF vers WebP, optimisation web, format next-gen, Google WebP, WebP lossy, transparence WebP, conversion par lots HEIF, format d'image moderne",
    hero: {
      title: "Convertisseur HEIF en WebP",
      subtitle:
        "Transformez vos images HEIF en format WebP universel instantanément. Conversion gratuite, rapide et sécurisée sans limites de taille de fichier. Parfait pour les photos HEIF de n'importe quel appareil.",
      badge1: "Ultra Rapide",
      badge2: "100% Sécurisé",
      badge3: "Sans Inscription",
    },
    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },
    features: {
      title: "Fonctionnalités",
      list: [
        "Conversion HEIF en WebP de haute qualité",
        "Traitement par lots jusqu'à 20 fichiers",
        "Préserve la qualité d'image",
        "Aucune limitation de taille de fichier",
        "100% sécurisé et privé",
        "Fonctionne avec les photos HEIF de tous les appareils",
        "Téléchargement instantané après conversion",
        "Aucun filigrane ajouté",
      ],
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },
    about: {
      title: "À Propos de la Conversion HEIF en WebP",
      whatIsHeif: {
        title: "Qu'est-ce que le Format HEIF ?",
        content:
          "HEIF (High Efficiency Image Format) est un format de conteneur d'images moderne qui utilise la compression HEVC (H.265). Bien que similaire à HEIC, HEIF est le nom de format standard, tandis que HEIC fait spécifiquement référence à l'implémentation d'Apple. HEIF offre une compression supérieure par rapport à WebP tout en maintenant une haute qualité d'image, ce qui le rend idéal pour stocker des photos efficacement.",
      },
      whyConvert: {
        title: "Pourquoi Convertir HEIF en WebP ?",
        content:
          "Bien que HEIF soit efficace et moderne, il n'est pas universellement pris en charge sur tous les appareils et plateformes. La conversion de HEIF en WebP garantit que vos images peuvent être visualisées sur n'importe quel appareil, facilement partagées par e-mail, téléchargées sur des sites web et utilisées dans n'importe quelle application. Le format WebP est le format d'image le plus largement pris en charge dans le monde, ce qui le rend parfait pour une compatibilité et un partage maximaux.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Quelle est la Différence ?",
        content:
          "HEIF (High Efficiency Image Format) est le standard de format de conteneur, tandis que HEIC (High Efficiency Image Container) est l'implémentation spécifique d'Apple de HEIF. En pratique, ils sont très similaires - les deux utilisent la même technologie de compression et offrent les mêmes avantages. Les appareils Apple enregistrent les photos sous forme de fichiers HEIC, qui sont en fait conformes à HEIF. Notre convertisseur gère les deux formats de manière transparente, vous pouvez donc convertir n'importe quelle image HEIF/HEIC au format WebP.",
      },
      benefits: {
        title: "Avantages de Notre Convertisseur",
        list: [
          "Compatibilité Universelle - Les WebP fonctionnent sur tous les appareils et plateformes",
          "Taille de Fichier Plus Petite - Compression efficace pour un partage plus rapide",
          "Large Support - Format d'image le plus utilisé dans le monde",
          "Facile à Partager - Compatible avec tous les clients de messagerie et les réseaux sociaux",
          "Prêt pour le Web - Idéal pour les sites web, les réseaux sociaux et l'utilisation en ligne",
          "Haute Qualité - Préservez la résolution d'image d'origine",
        ],
      },
    },
    faq: {
      title: "Questions Fréquemment Posées – HEIF en WebP",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIF en WebP ?",
          a: "Oui ! Notre convertisseur HEIF en WebP est entièrement gratuit sans frais cachés. Vous pouvez convertir un nombre illimité de fichiers sans inscription ni abonnement.",
        },
        {
          q: "Quelle est la différence entre HEIF et HEIC ?",
          a: "HEIF (High Efficiency Image Format) est le nom de format standard, tandis que HEIC (High Efficiency Image Container) est l'implémentation spécifique d'Apple. Ils utilisent la même technologie de compression et sont fonctionnellement très similaires. Notre convertisseur gère les deux formats de manière transparente.",
        },
        {
          q: "Mes données sont-elles sûres ?",
          a: "Absolument. Toutes les conversions se font en toute sécurité sur nos serveurs avec chiffrement SSL. Vos fichiers sont automatiquement supprimés immédiatement après la conversion. Nous ne stockons, ne partageons ni n'accédons jamais à vos fichiers.",
        },
        {
          q: "Quelle est la taille maximale de fichier ?",
          a: "Vous pouvez convertir des fichiers HEIF jusqu'à 100MB chacun. Pour la conversion par lots, vous pouvez traiter jusqu'à 20 fichiers à la fois avec une limite totale de 100MB.",
        },
        {
          q: "Prenez-vous en charge la conversion par lots ?",
          a: "Oui ! Vous pouvez télécharger et convertir jusqu'à 20 fichiers HEIF simultanément. Tous les WebP convertis seront disponibles au téléchargement en tant que fichiers individuels ou dans une seule archive ZIP.",
        },
        {
          q: "La qualité sera-t-elle préservée ?",
          a: "Oui, nous maintenons une haute qualité d'image pendant la conversion. Vos images HEIF seront converties en WebP haute résolution avec une perte de qualité minimale.",
        },
        {
          q: "Puis-je convertir HEIF depuis n'importe quel appareil ?",
          a: "Oui ! Notre convertisseur fonctionne avec des images HEIF de n'importe quel appareil ou appareil photo qui prend en charge le format HEIF, pas seulement les appareils Apple. Il suffit de télécharger vos fichiers HEIF et de les convertir en WebP.",
        },
        {
          q: "Dois-je installer un logiciel ?",
          a: "Aucune installation nécessaire. Notre convertisseur en ligne fonctionne directement dans votre navigateur web sur n'importe quel appareil - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Combien de temps prend la conversion ?",
          a: "La conversion est presque instantanée ! La plupart des fichiers HEIF se convertissent en WebP en quelques secondes seulement, selon la taille du fichier et votre connexion Internet.",
        },
      ],
    },
    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "HEIC en WebP", url: "/convert/heic-to-webp" },
        { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "HEIF en PNG", url: "/convert/heif-to-png" },
        { name: "WebP en PDF", url: "/convert/webp-to-pdf" },
        { name: "PNG en WebP", url: "/convert/png-to-webp" },
      ],
    },
  },
  // HEIF to PDF Converter
  heifToPdf: {
    title: "Convertisseur HEIF vers PDF - Créer des Documents PDF Universels depuis Images HEIF",
    metaDescription:
      "Convertissez HEIF en PDF pour partage de documents universel. Afficher sur tout appareil sans apps. Parfait pour email, impression et archivage. Fusionner plusieurs HEIFs en un PDF. Convertisseur par lots gratuit, sans inscription.",
    metaKeywords:
      "HEIF vers PDF, image en document, PDF universel, partage email, PDF prêt à imprimer, fusionner images PDF, conversion par lots HEIF, création documents",
    hero: {
      title: "Convertisseur HEIF en PDF",
      subtitle:
        "Transformez vos images HEIF en format PDF universel instantanément. Conversion gratuite, rapide et sécurisée sans limites de taille de fichier. Parfait pour les photos HEIF de n'importe quel appareil.",
      badge1: "Ultra Rapide",
      badge2: "100% Sécurisé",
      badge3: "Sans Inscription",
    },
    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },
    features: {
      title: "Fonctionnalités",
      list: [
        "Conversion HEIF en PDF de haute qualité",
        "Traitement par lots jusqu'à 20 fichiers",
        "Préserve la qualité d'image",
        "Aucune limitation de taille de fichier",
        "100% sécurisé et privé",
        "Fonctionne avec les photos HEIF de tous les appareils",
        "Téléchargement instantané après conversion",
        "Aucun filigrane ajouté",
      ],
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },
    about: {
      title: "À Propos de la Conversion HEIF en PDF",
      whatIsHeif: {
        title: "Qu'est-ce que le Format HEIF ?",
        content:
          "HEIF (High Efficiency Image Format) est un format de conteneur d'images moderne qui utilise la compression HEVC (H.265). Bien que similaire à HEIC, HEIF est le nom de format standard, tandis que HEIC fait spécifiquement référence à l'implémentation d'Apple. HEIF offre une compression supérieure par rapport à PDF tout en maintenant une haute qualité d'image, ce qui le rend idéal pour stocker des photos efficacement.",
      },
      whyConvert: {
        title: "Pourquoi Convertir HEIF en PDF ?",
        content:
          "Bien que HEIF soit efficace et moderne, il n'est pas universellement pris en charge sur tous les appareils et plateformes. La conversion de HEIF en PDF garantit que vos images peuvent être visualisées sur n'importe quel appareil, facilement partagées par e-mail, téléchargées sur des sites web et utilisées dans n'importe quelle application. Le format PDF est le format d'image le plus largement pris en charge dans le monde, ce qui le rend parfait pour une compatibilité et un partage maximaux.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Quelle est la Différence ?",
        content:
          "HEIF (High Efficiency Image Format) est le standard de format de conteneur, tandis que HEIC (High Efficiency Image Container) est l'implémentation spécifique d'Apple de HEIF. En pratique, ils sont très similaires - les deux utilisent la même technologie de compression et offrent les mêmes avantages. Les appareils Apple enregistrent les photos sous forme de fichiers HEIC, qui sont en fait conformes à HEIF. Notre convertisseur gère les deux formats de manière transparente, vous pouvez donc convertir n'importe quelle image HEIF/HEIC au format PDF.",
      },
      benefits: {
        title: "Avantages de Notre Convertisseur",
        list: [
          "Compatibilité Universelle - Les PDF fonctionnent sur tous les appareils et plateformes",
          "Taille de Fichier Plus Petite - Compression efficace pour un partage plus rapide",
          "Large Support - Format d'image le plus utilisé dans le monde",
          "Facile à Partager - Compatible avec tous les clients de messagerie et les réseaux sociaux",
          "Prêt pour le Web - Idéal pour les sites web, les réseaux sociaux et l'utilisation en ligne",
          "Haute Qualité - Préservez la résolution d'image d'origine",
        ],
      },
    },
    faq: {
      title: "Questions Fréquemment Posées – HEIF en PDF",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIF en PDF ?",
          a: "Oui ! Notre convertisseur HEIF en PDF est entièrement gratuit sans frais cachés. Vous pouvez convertir un nombre illimité de fichiers sans inscription ni abonnement.",
        },
        {
          q: "Quelle est la différence entre HEIF et HEIC ?",
          a: "HEIF (High Efficiency Image Format) est le nom de format standard, tandis que HEIC (High Efficiency Image Container) est l'implémentation spécifique d'Apple. Ils utilisent la même technologie de compression et sont fonctionnellement très similaires. Notre convertisseur gère les deux formats de manière transparente.",
        },
        {
          q: "Mes données sont-elles sûres ?",
          a: "Absolument. Toutes les conversions se font en toute sécurité sur nos serveurs avec chiffrement SSL. Vos fichiers sont automatiquement supprimés immédiatement après la conversion. Nous ne stockons, ne partageons ni n'accédons jamais à vos fichiers.",
        },
        {
          q: "Quelle est la taille maximale de fichier ?",
          a: "Vous pouvez convertir des fichiers HEIF jusqu'à 100MB chacun. Pour la conversion par lots, vous pouvez traiter jusqu'à 20 fichiers à la fois avec une limite totale de 100MB.",
        },
        {
          q: "Prenez-vous en charge la conversion par lots ?",
          a: "Oui ! Vous pouvez télécharger et convertir jusqu'à 20 fichiers HEIF simultanément. Tous les PDF convertis seront disponibles au téléchargement en tant que fichiers individuels ou dans une seule archive ZIP.",
        },
        {
          q: "La qualité sera-t-elle préservée ?",
          a: "Oui, nous maintenons une haute qualité d'image pendant la conversion. Vos images HEIF seront converties en PDF haute résolution avec une perte de qualité minimale.",
        },
        {
          q: "Puis-je convertir HEIF depuis n'importe quel appareil ?",
          a: "Oui ! Notre convertisseur fonctionne avec des images HEIF de n'importe quel appareil ou appareil photo qui prend en charge le format HEIF, pas seulement les appareils Apple. Il suffit de télécharger vos fichiers HEIF et de les convertir en PDF.",
        },
        {
          q: "Dois-je installer un logiciel ?",
          a: "Aucune installation nécessaire. Notre convertisseur en ligne fonctionne directement dans votre navigateur web sur n'importe quel appareil - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Combien de temps prend la conversion ?",
          a: "La conversion est presque instantanée ! La plupart des fichiers HEIF se convertissent en PDF en quelques secondes seulement, selon la taille du fichier et votre connexion Internet.",
        },
      ],
    },
    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "HEIF en PNG", url: "/convert/heif-to-png" },
        { name: "PDF en PDF", url: "/convert/pdf-to-pdf" },
        { name: "PNG en PDF", url: "/convert/png-to-pdf" },
      ],
    },
  },
  // HEIF to PNG Converter
  heifToPng: {
    title: "Convertisseur HEIF en PNG - Convertissez les Images HEIF en PNG Gratuitement en Ligne",
    metaDescription:
      "Convertissez les images HEIF au format PNG instantanément. Convertisseur HEIF en PNG gratuit en ligne avec traitement par lots. Rapide, sécurisé et sans inscription requise. Fonctionne avec les photos HEIF de tous les appareils.",
    metaKeywords:
      "HEIF en PNG, convertir HEIF, images HEIF en PNG, convertisseur HEIF, image en PNG, conversion par lots HEIF, convertisseur HEIF gratuit, HEIF vs HEIC",
    hero: {
      title: "Convertisseur HEIF en PNG",
      subtitle:
        "Transformez vos images HEIF en format PNG universel instantanément. Conversion gratuite, rapide et sécurisée sans limites de taille de fichier. Parfait pour les photos HEIF de n'importe quel appareil.",
      badge1: "Ultra Rapide",
      badge2: "100% Sécurisé",
      badge3: "Sans Inscription",
    },
    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },
    features: {
      title: "Fonctionnalités",
      list: [
        "Conversion HEIF en PNG de haute qualité",
        "Traitement par lots jusqu'à 20 fichiers",
        "Préserve la qualité d'image",
        "Aucune limitation de taille de fichier",
        "100% sécurisé et privé",
        "Fonctionne avec les photos HEIF de tous les appareils",
        "Téléchargement instantané après conversion",
        "Aucun filigrane ajouté",
      ],
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },
    about: {
      title: "À Propos de la Conversion HEIF en PNG",
      whatIsHeif: {
        title: "Qu'est-ce que le Format HEIF ?",
        content:
          "HEIF (High Efficiency Image Format) est un format de conteneur d'images moderne qui utilise la compression HEVC (H.265). Bien que similaire à HEIC, HEIF est le nom de format standard, tandis que HEIC fait spécifiquement référence à l'implémentation d'Apple. HEIF offre une compression supérieure par rapport à JPEG tout en maintenant une haute qualité d'image, ce qui le rend idéal pour stocker des photos efficacement.",
      },
      whyConvert: {
        title: "Pourquoi Convertir HEIF en PNG ?",
        content:
          "Bien que HEIF soit efficace et moderne, il n'est pas universellement pris en charge sur tous les appareils et plateformes. La conversion de HEIF en PNG garantit que vos images peuvent être visualisées sur n'importe quel appareil, facilement partagées par e-mail, téléchargées sur des sites web et utilisées dans n'importe quelle application. Le format PNG est le format d'image le plus largement pris en charge dans le monde, ce qui le rend parfait pour une compatibilité et un partage maximaux.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Quelle est la Différence ?",
        content:
          "HEIF (High Efficiency Image Format) est le standard de format de conteneur, tandis que HEIC (High Efficiency Image Container) est l'implémentation spécifique d'Apple de HEIF. En pratique, ils sont très similaires - les deux utilisent la même technologie de compression et offrent les mêmes avantages. Les appareils Apple enregistrent les photos sous forme de fichiers HEIC, qui sont en fait conformes à HEIF. Notre convertisseur gère les deux formats de manière transparente, vous pouvez donc convertir n'importe quelle image HEIF/HEIC au format PNG.",
      },
      benefits: {
        title: "Avantages de Notre Convertisseur",
        list: [
          "Compatibilité Universelle - Les PNG fonctionnent sur tous les appareils et plateformes",
          "Taille de Fichier Plus Petite - Compression efficace pour un partage plus rapide",
          "Large Support - Format d'image le plus utilisé dans le monde",
          "Facile à Partager - Compatible avec tous les clients de messagerie et les réseaux sociaux",
          "Prêt pour le Web - Idéal pour les sites web, les réseaux sociaux et l'utilisation en ligne",
          "Haute Qualité - Préservez la résolution d'image d'origine",
        ],
      },
    },
    faq: {
      title: "Questions Fréquemment Posées – HEIF en PNG",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIF en PNG ?",
          a: "Oui ! Notre convertisseur HEIF en PNG est entièrement gratuit sans frais cachés. Vous pouvez convertir un nombre illimité de fichiers sans inscription ni abonnement.",
        },
        {
          q: "Quelle est la différence entre HEIF et HEIC ?",
          a: "HEIF (High Efficiency Image Format) est le nom de format standard, tandis que HEIC (High Efficiency Image Container) est l'implémentation spécifique d'Apple. Ils utilisent la même technologie de compression et sont fonctionnellement très similaires. Notre convertisseur gère les deux formats de manière transparente.",
        },
        {
          q: "Mes données sont-elles sûres ?",
          a: "Absolument. Toutes les conversions se font en toute sécurité sur nos serveurs avec chiffrement SSL. Vos fichiers sont automatiquement supprimés immédiatement après la conversion. Nous ne stockons, ne partageons ni n'accédons jamais à vos fichiers.",
        },
        {
          q: "Quelle est la taille maximale de fichier ?",
          a: "Vous pouvez convertir des fichiers HEIF jusqu'à 100MB chacun. Pour la conversion par lots, vous pouvez traiter jusqu'à 20 fichiers à la fois avec une limite totale de 100MB.",
        },
        {
          q: "Prenez-vous en charge la conversion par lots ?",
          a: "Oui ! Vous pouvez télécharger et convertir jusqu'à 20 fichiers HEIF simultanément. Tous les PNG convertis seront disponibles au téléchargement en tant que fichiers individuels ou dans une seule archive ZIP.",
        },
        {
          q: "La qualité sera-t-elle préservée ?",
          a: "Oui, nous maintenons une haute qualité d'image pendant la conversion. Vos images HEIF seront converties en PNG haute résolution avec une perte de qualité minimale.",
        },
        {
          q: "Puis-je convertir HEIF depuis n'importe quel appareil ?",
          a: "Oui ! Notre convertisseur fonctionne avec des images HEIF de n'importe quel appareil ou appareil photo qui prend en charge le format HEIF, pas seulement les appareils Apple. Il suffit de télécharger vos fichiers HEIF et de les convertir en PNG.",
        },
        {
          q: "Dois-je installer un logiciel ?",
          a: "Aucune installation nécessaire. Notre convertisseur en ligne fonctionne directement dans votre navigateur web sur n'importe quel appareil - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Combien de temps prend la conversion ?",
          a: "La conversion est presque instantanée ! La plupart des fichiers HEIF se convertissent en PNG en quelques secondes seulement, selon la taille du fichier et votre connexion Internet.",
        },
      ],
    },
    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "HEIC en PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "HEIF en PNG", url: "/convert/heif-to-png" },
        { name: "PNG en PDF", url: "/convert/png-to-pdf" },
        { name: "PNG en PNG", url: "/convert/png-to-png" },
      ],
    },
  },

  // JPG to PNG Converter
  jpgToPng: {
    title: "Convertisseur JPG vers PNG - Ajouter Transparence et Qualité Sans Perte",
    metaDescription:
      "Convertissez JPG en PNG pour la prise en charge de la transparence et la qualité sans perte. Parfait pour les logos, graphiques et images web. Préservez la qualité sans artefacts de compression. Convertisseur par lots gratuit, sans inscription.",
    metaKeywords:
      "JPG vers PNG, ajouter transparence, conversion sans perte, convertisseur graphique, convertisseur logo, images web, convertir JPG par lots, supprimer arrière-plan",
    hero: {
      title: "Convertisseur JPG vers PNG",
      subtitle:
        "Convertissez JPG en PNG pour le support de la transparence et une qualité supérieure. Parfait pour logos, graphiques et images professionnelles. PNG préserve chaque détail sans artefacts de compression - idéal pour graphiques web, overlays et images nécessitant des arrière-plans transparents.",
      badge1: "Support de Transparence",
      badge2: "Qualité Sans Perte",
      badge3: "Sans Artefacts",
    },
    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },
    features: {
      title: "Features",
      list: [
        "Transparency support - add alpha channel for overlays",
        "Lossless quality - preserve every pixel perfectly",
        "Batch processing up to 20 files simultaneously",
        "No compression artifacts - crisp edges and text",
        "100% secure with automatic file deletion",
        "Perfect for logos, graphics, and web images",
        "Instant download - ready for use",
        "No watermarks - professional quality",
      ],
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },
    about: {
      title: "À Propos de la Conversion JPG en PNG",
      p1: "JPG (ou JPEG) est un format d'image avec perte optimisé pour les photographies mais ne prend pas en charge la transparence. PNG (Portable Network Graphics) est un format sans perte parfait pour les graphiques, logos et images nécessitant des arrière-plans transparents ou des bords nets. Convertir JPG en PNG est idéal lorsque vous devez ajouter de la transparence, effectuer plusieurs cycles d'édition sans perte de qualité ou préparer des images pour le web avec des bords nets.",
      p2: "Notre convertisseur JPG en PNG préserve parfaitement chaque pixel de votre image originale tout en la transformant au format PNG sans perte. Contrairement au JPG qui perd en qualité à chaque sauvegarde, les fichiers PNG peuvent être modifiés et réenregistrés sans dégradation. Cela fait du PNG le choix préféré des designers professionnels, de la création de logos et de tout projet où la précision compte. Le format PNG prend également en charge la transparence alpha, vous permettant de créer des images avec des arrière-plans transparents - quelque chose que JPG ne peut pas faire.",
      p3: "La conversion est instantanée, sécurisée et préserve la précision des couleurs. Vos fichiers ne sont jamais stockés ni partagés - tout se passe en toute sécurité dans votre navigateur. Que vous convertissiez un seul logo ou un lot d'images de produits, notre outil offre des résultats professionnels sans filigranes ni frais cachés.",
    },
      whyConvert: {
        title: "Why Convert JPG to PNG?",
        content:
          "Convert JPG to PNG when you need transparency or lossless quality. JPG uses lossy compression that permanently degrades image quality with each edit - creating compression artifacts, blurry text, and color banding. PNG uses lossless compression, preserving perfect quality forever. Key reasons to convert: add transparency for logos and overlays (remove backgrounds), prepare graphics for web/design work (crisp edges), avoid quality degradation (no artifacts), create layered compositions (alpha channel support), preserve text and line art (sharp edges), or edit images repeatedly without loss. PNG is essential for logos, icons, graphics, screenshots, UI elements, watermarks, and any image requiring transparent backgrounds. While PNG files are larger than JPG, the quality and transparency support make it the professional choice for graphics work. Convert JPG to PNG before editing to prevent further quality loss.",
      },
      heifVsHeic: {
        title: "PNG vs JPG - When to Choose PNG",
        content:
          "PNG and JPG serve different purposes. Choose PNG for: logos and graphics (crisp edges, transparency), text-heavy images (no blurriness), images requiring transparency (overlays, watermarks), graphics needing repeated editing (lossless), icons and UI elements (sharp details), screenshots (preserve clarity), or professional design work (zero artifacts). Choose JPG for: photographs (efficient compression), images without transparency needs, file size priority (smaller files), or social media photos (acceptable quality loss). PNG's advantages: lossless quality (perfect preservation), transparency support (alpha channel), no compression artifacts (crisp edges), unlimited editing without degradation. PNG's disadvantages: larger file sizes (2-10× bigger than JPG), not ideal for photos (inefficient compression). For web use: PNG for logos/graphics, JPG for photos. For print: PNG for graphics, JPG for photos. For editing: Always PNG (prevents quality loss).",
      },
      benefits: {
        title: "Benefits of PNG Format",
        list: [
          "Transparency Support - Add alpha channel for logos and overlays",
          "Lossless Quality - Zero quality loss, perfect pixel preservation",
          "No Compression Artifacts - Crisp edges, sharp text, clean graphics",
          "Unlimited Editing - Edit repeatedly without quality degradation",
          "Professional Standard - Industry choice for graphics and logos",
          "Web Optimized - Perfect for UI elements, icons, and graphics",
        ],
      },
    },
    faq: {
      title: "Questions Fréquentes – JPG vers PNG",
      items: [
        {
          q: "Is it free to convert JPG to PNG?",
          a: "Yes! Our JPG to PNG converter is completely free with unlimited conversions. No registration, subscriptions, or hidden fees. Convert as many images as you need for logos, graphics, or professional use.",
        },
        {
          q: "Will converting JPG to PNG add transparency?",
          a: "Converting JPG to PNG adds transparency support (alpha channel) but doesn't automatically make existing white/black backgrounds transparent. PNG format supports transparency, so you can then edit the PNG in photo editors (Photoshop, GIMP, Photopea) to remove backgrounds. The conversion prepares your image for transparency work by changing it to a format that supports alpha channels.",
        },
        {
          q: "Why is PNG better than JPG for logos and graphics?",
          a: "PNG uses lossless compression (zero quality loss) while JPG uses lossy compression (permanent quality degradation). PNG preserves crisp edges, sharp text, and clean lines perfectly - essential for logos and graphics. PNG also supports transparency for overlays and backgrounds. JPG creates compression artifacts (blurriness, color banding) especially around text and sharp edges. For logos, icons, graphics, and text-heavy images, PNG is the professional choice.",
        },
        {
          q: "Will PNG files be larger than JPG?",
          a: "Yes, PNG files are typically 2-10 times larger than JPG because PNG uses lossless compression while JPG uses lossy compression. However, the quality and transparency support make it worthwhile for graphics, logos, and professional images. For web use, the slight increase in file size is offset by perfect quality and transparency capabilities. Modern browsers handle PNG efficiently.",
        },
        {
          q: "Can I edit PNG without losing quality?",
          a: "Absolutely! PNG is lossless, meaning you can edit and save it unlimited times without any quality degradation. Every save preserves perfect quality. This is crucial for design work where you need to make multiple edits. JPG loses quality with each save due to recompression. For professional editing workflows, always use PNG.",
        },
        {
          q: "Is PNG good for web use?",
          a: "Yes! PNG is the standard format for web graphics, logos, icons, and UI elements. While larger than JPG, PNG's transparency support and crisp quality make it essential for web design. Use PNG for logos, icons, buttons, graphics, and text-heavy images. Use JPG for photographs where transparency isn't needed. Modern compression and CDNs handle PNG efficiently.",
        },
        {
          q: "What's the difference between PNG-8 and PNG-24?",
          a: "PNG-8 supports 256 colors (like GIF) with simple transparency, resulting in smaller files. PNG-24 supports 16 million colors with 256 levels of alpha transparency (partial transparency), offering full quality and smooth transparency but larger files. Our converter creates PNG-24 for maximum quality and full transparency support. Use PNG-8 only for simple graphics with few colors.",
        },
        {
          q: "Can I use PNG for print?",
          a: "Yes! PNG's lossless quality makes it excellent for print, especially for graphics, logos, and text-heavy designs. PNG preserves perfect quality at any resolution. However, for photographs, TIFF or high-quality JPG might be more efficient due to smaller file sizes. For graphic design print work (posters, flyers, business cards), PNG is ideal.",
        },
        {
          q: "How long does JPG to PNG conversion take?",
          a: "Conversion takes 1-2 seconds per image. PNG conversion is fast because it's a format change that preserves all data. The result is a lossless PNG ready for transparency work, repeated editing, or professional use without quality degradation.",
        },
      ],
    },
    related: {
      title: "Convertisseurs Connexes",
      converters: [
        { name: "PNG to JPG", url: "/convert/png-to-jpg" },
        { name: "JPG to WebP", url: "/convert/jpg-to-webp" },
        { name: "PNG to WebP", url: "/convert/png-to-webp" },
        { name: "HEIC to PNG", url: "/convert/heic-to-png" },
        { name: "HEIF to PNG", url: "/convert/heif-to-png" },
        { name: "JPG to PDF", url: "/convert/jpg-to-pdf" },
      ],
    },
  },


  // HEIF to GIF Converter
  heifToGif: {
    title: "Convertisseur HEIF vers GIF - Créer des GIFs Animés et Images Partageables",
    metaDescription:
      "Convertissez HEIF en GIF pour partage universel et animations. Parfait pour réseaux sociaux, memes et sites web. Fonctionne partout - aucune app nécessaire. Créez des GIFs animés depuis photos. Convertisseur par lots gratuit.",
    metaKeywords:
      "HEIF vers GIF, GIF animé, partage réseaux sociaux, memes, compatibilité universelle, animation GIF, convertir HEIF par lots, images partageables",
    hero: {
      title: "HEIF to GIF Converter",
      subtitle:
        "Convert HEIF to GIF - the most shareable image format. Perfect for social media posts, memes, and animations. Universal compatibility across all platforms, apps, and messaging services. No special viewer needed.",
      badge1: "Universal Sharing",
      badge2: "Social Media Ready",
      badge3: "Animation Support",
    },
    upload: {
      title: "Télécharger Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Supporte la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },
    features: {
      title: "Features",
      list: [
        "Universal compatibility - GIFs work absolutely everywhere",
        "Perfect for social media (Twitter, Facebook, Instagram, WhatsApp)",
        "Batch processing up to 20 files simultaneously",
        "Animation support for creating GIF loops",
        "100% secure with automatic file deletion",
        "Small file sizes optimized for sharing",
        "Instant download - ready for posting",
        "No watermarks - clean shareable images",
      ],
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },
    about: {
      title: "About HEIF to GIF Conversion",
      whatIsHeif: {
        title: "Why GIF is Perfect for Social Media and Sharing?",
        content:
          "GIF (Graphics Interchange Format) is the most universally compatible image format, created in 1987 and still thriving today. GIFs work absolutely everywhere - all social media platforms (Twitter, Facebook, Instagram, Reddit, Tumblr), messaging apps (WhatsApp, Telegram, Discord, Slack), email clients, forums, and websites display GIFs without any special software. GIF's killer feature is animation support - create looping animations, cinemagraphs, and memes that capture attention. GIFs use lossless compression for up to 256 colors, making them perfect for graphics, logos, and simple animations. File sizes are small and shareable, ideal for mobile data and quick loading. GIF is the lingua franca of internet culture - the go-to format for reactions, memes, and viral content.",
      },
      whyConvert: {
        title: "Why Convert HEIF to GIF?",
        content:
          "Convert HEIF to GIF for maximum shareability and universal compatibility. HEIF only works on newer Apple devices and requires special software - making sharing difficult. GIF works instantly on every device, platform, and app without any viewer needed. Perfect for: social media posts (Twitter GIFs, Facebook reactions, Instagram stories), meme creation (universal format for viral content), messaging (WhatsApp, Telegram support GIF previews), website embeds (all browsers display GIFs natively), email signatures and marketing (guaranteed display), forum posts and comments (universal support), and reaction images (share emotions instantly). GIFs auto-play and loop, making them attention-grabbing for marketing and social engagement. While GIF quality is limited to 256 colors, it's optimized for graphics, text overlays, and simple animations - making it ideal for internet communication.",
      },
      heifVsHeic: {
        title: "GIF vs Modern Formats - When to Choose GIF",
        content:
          "GIF trades image quality for universal compatibility and animation. Choose GIF when: sharing on social media (Instagram, Twitter auto-display), creating memes or reactions (universal format), making simple animations or loops, ensuring 100% compatibility (no viewer needed), sharing via messaging apps (auto-preview support), or targeting viral/shareable content. GIF's limitations (256 colors, larger than WebP) are offset by guaranteed visibility everywhere. Modern formats like AVIF/WebP offer better quality but need special viewers. For internet culture, memes, and social sharing, GIF remains unbeatable despite being 35+ years old. Its simplicity and universal support make it the default choice for shareable content.",
      },
      benefits: {
        title: "Benefits of GIF Format",
        list: [
          "Universal Compatibility - Works on literally every device and platform",
          "Social Media Native - Auto-displays on Twitter, Facebook, Instagram, Reddit",
          "Animation Support - Create looping GIFs and cinemagraphs",
          "No Viewer Needed - Displays instantly without special software",
          "Meme-Friendly - The standard format for internet culture",
          "Auto-Play - Loops automatically for attention-grabbing content",
        ],
      },
    },
    faq: {
      title: "Frequently Asked Questions – HEIF to GIF",
      items: [
        {
          q: "Is it free to convert HEIF to GIF?",
          a: "Yes! Our HEIF to GIF converter is completely free with unlimited conversions. No registration, subscriptions, or hidden fees. Convert as many images as you need for social media, memes, or sharing.",
        },
        {
          q: "Why is GIF so popular for social media and memes?",
          a: "GIF is universally compatible - it works on every platform, app, and device without any special software. Social media platforms like Twitter, Facebook, Instagram, and Reddit natively support GIFs with auto-play and looping. GIFs can be animated (perfect for reactions and memes), are small enough for mobile sharing, and have become the standard format for internet culture and viral content. Everyone can view your GIF instantly, no matter what device they use.",
        },
        {
          q: "Can I create animated GIFs from HEIF images?",
          a: "Yes! While a single HEIF converts to a static GIF, you can upload multiple HEIF images in batch mode to create frames for animation. Our converter processes each image separately. To create true animated GIFs with multiple frames, you can use batch conversion and then combine the frames using free GIF animation tools online.",
        },
        {
          q: "Will GIF work on all social media platforms?",
          a: "Absolutely! GIF is natively supported by all major platforms: Twitter/X (GIF button in composer), Facebook (auto-playing GIFs), Instagram (Stories and DMs), Reddit (inline display), Tumblr (GIF-focused platform), WhatsApp (auto-preview), Telegram, Discord, Slack, and virtually every messaging app and forum. GIFs display and loop automatically without any viewer or plugin needed.",
        },
        {
          q: "Why are GIF files larger than HEIF?",
          a: "GIF uses uncompressed or lossless compression to maintain frame-by-frame quality for animations, while HEIF uses modern video compression. However, GIF's universal compatibility and guaranteed display make the size trade-off worthwhile for sharing. For social media and memes, instant visibility on all devices is more valuable than file size optimization. Plus, our converter optimizes GIF output for web sharing.",
        },
        {
          q: "Can I use GIF for professional work?",
          a: "Yes! GIF is perfect for: email marketing (animated banners, signatures), website elements (loading animations, icons), presentations (animated charts, transitions), client communications (guaranteed viewing), and social media marketing (high engagement rates). While GIF has 256-color limitations, it's ideal for graphics, logos, text overlays, and simple animations where universal compatibility matters more than photo-realistic quality.",
        },
        {
          q: "What's the difference between GIF and modern formats like WebP?",
          a: "GIF (1987) prioritizes universal compatibility and animation; WebP (2010) prioritizes compression and quality. GIF works on 100% of devices with no special viewer; WebP needs modern browsers (97% support). For social media, memes, and shareable content, GIF's guaranteed visibility wins. For website optimization and photo quality, WebP is better. Choose GIF when sharing matters more than file size.",
        },
        {
          q: "Can I create memes with GIF?",
          a: "Absolutely! GIF is the standard format for internet memes and reaction images. After converting HEIF to GIF, you can add text overlays, combine frames, or use the GIF directly for sharing. GIFs are perfect for memes because they work everywhere, auto-play for immediate impact, can be animated for extra expression, and are easily shareable across all platforms. The internet meme culture is built on GIF format.",
        },
        {
          q: "How long does HEIF to GIF conversion take?",
          a: "Conversion takes 1-2 seconds per image. GIF creation is fast because it's a simple format optimized for compatibility rather than complex compression. The result is a universally compatible file ready for immediate sharing on social media, messaging apps, or any platform.",
        },
      ],
    },
    related: {
      title: "Related Converters",
      converters: [
        { name: "HEIC to GIF", url: "/convert/heic-to-gif" },
        { name: "HEIF to PNG", url: "/convert/heif-to-png" },
        { name: "HEIF to JPG", url: "/convert/heif-to-jpg" },
        { name: "PNG to GIF", url: "/convert/png-to-gif" },
        { name: "JPG to GIF", url: "/convert/jpg-to-gif" },
        { name: "WebP to GIF", url: "/convert/webp-to-gif" },
      ],
    },
  },

};

export type Translations = typeof fr;

