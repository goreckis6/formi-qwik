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
      title: "Télécharger des Fichiers HEIC",
      description:
        "Glissez-déposez vos photos HEIC ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100Mo par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir des Fichiers",
      converting: "Conversion en cours...",
      success: "Conversion réussie !",
      download: "Télécharger le PDF",
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
      step1Title: "Télécharger des Fichiers HEIC",
      step1Desc: "Sélectionnez une ou plusieurs photos HEIC depuis votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger le PDF",
      step3Desc: "Obtenez vos fichiers PDF convertis immédiatement",
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
      title: "Questions Fréquemment Posées – HEIC en PDF",
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
      title: "Convertisseurs Associés",
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
      title: "Télécharger des Fichiers HEIC",
      description:
        "Glissez-déposez vos photos HEIC ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir des Fichiers",
      converting: "Conversion en cours...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Télécharger Tout en ZIP",
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
      step1Title: "Télécharger des Fichiers HEIC",
      step1Desc: "Sélectionnez une ou plusieurs photos HEIC de votre appareil",
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
        title: "Télécharger les Fichiers HEIC",
        description:
          "Glissez-déposez vos photos HEIC ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
        buttonSingle: "Fichier Unique",
        buttonBatch: "Conversion par Lots",
        chooseFile: "Choisir les Fichiers",
        converting: "Conversion...",
        success: "Conversion réussie !",
        download: "Télécharger JPG",
        downloadAll: "Télécharger Tout en ZIP",
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
        title: "Comment ça Fonctionne",
        step1Title: "Télécharger les Fichiers HEIC",
        step1Desc: "Sélectionnez une ou plusieurs photos HEIC de votre appareil",
        step2Title: "Conversion Automatique",
        step2Desc: "Notre convertisseur traite vos fichiers instantanément",
        step3Title: "Télécharger JPG",
        step3Desc: "Obtenez vos fichiers JPG convertis immédiatement",
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
      title: "Télécharger des Fichiers HEIC",
      description:
        "Glissez-déposez vos photos HEIC ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir des Fichiers",
      converting: "Conversion en cours...",
      success: "Conversion réussie !",
      download: "Télécharger WebP",
      downloadAll: "Télécharger Tout en ZIP",
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
      step1Title: "Télécharger des Fichiers HEIC",
      step1Desc: "Sélectionnez une ou plusieurs photos HEIC de votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger WebP",
      step3Desc: "Obtenez vos fichiers WebP convertis immédiatement",
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
      title: "Télécharger des Fichiers HEIC",
      description:
        "Glissez-déposez vos photos HEIC ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100Mo par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir des Fichiers",
      converting: "Conversion en cours...",
      success: "Conversion réussie !",
      download: "Télécharger AVIF",
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
      step1Title: "Télécharger des Fichiers HEIC",
      step1Desc: "Sélectionnez une ou plusieurs photos HEIC de votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger AVIF",
      step3Desc: "Obtenez vos fichiers AVIF convertis immédiatement",
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
      title: "Télécharger des Fichiers HEIC",
      description:
        "Glissez-déposez vos photos HEIC ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100Mo par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir des Fichiers",
      converting: "Conversion en cours...",
      success: "Conversion réussie !",
      download: "Télécharger TIFF",
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
      step1Title: "Télécharger des Fichiers HEIC",
      step1Desc: "Sélectionnez une ou plusieurs photos HEIC de votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger TIFF",
      step3Desc: "Obtenez vos fichiers TIFF convertis immédiatement",
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
      title: "Télécharger des Fichiers HEIC",
      description:
        "Glissez-déposez vos photos HEIC ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100Mo par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir des Fichiers",
      converting: "Conversion en cours...",
      success: "Conversion réussie !",
      download: "Télécharger le GIF",
      downloadAll: "Télécharger Tout en ZIP",
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
      title: "Comment ça Fonctionne",
      step1Title: "Télécharger des Fichiers HEIC",
      step1Desc: "Sélectionnez une ou plusieurs photos HEIC de votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger le GIF",
      step3Desc: "Obtenez vos fichiers GIF convertis immédiatement",
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
      title: "Télécharger les Fichiers HEIF",
      description:
        "Glissez-déposez vos images HEIF ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir les Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger JPG",
      downloadAll: "Télécharger Tout en ZIP",
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
      title: "Comment ça Fonctionne",
      step1Title: "Télécharger les Fichiers HEIF",
      step1Desc: "Sélectionnez une ou plusieurs images HEIF de votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger JPG",
      step3Desc: "Obtenez vos fichiers JPG convertis immédiatement",
    },
    about: {
      title: "À Propos de la Conversion HEIF en JPG",
      whatIsHeif: {
        title: "Qu'est-ce que le Format HEIF ?",
        content:
          "HEIF (High Efficiency Image Format) est un format de conteneur d'images moderne qui utilise la compression HEVC (H.265). Bien que similaire à HEIC, HEIF est le nom de format standard, tandis que HEIC fait spécifiquement référence à l'implémentation d'Apple. HEIF offre une compression supérieure par rapport à JPEG tout en maintenant une haute qualité d'image, ce qui le rend idéal pour stocker des photos efficacement.",
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
      title: "Télécharger les Fichiers HEIF",
      description:
        "Glissez-déposez vos images HEIF ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir les Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger TIFF",
      downloadAll: "Télécharger Tout en ZIP",
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
      title: "Comment ça Fonctionne",
      step1Title: "Télécharger les Fichiers HEIF",
      step1Desc: "Sélectionnez une ou plusieurs images HEIF de votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger TIFF",
      step3Desc: "Obtenez vos fichiers TIFF convertis immédiatement",
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
      title: "Télécharger les Fichiers HEIF",
      description:
        "Glissez-déposez vos images HEIF ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir les Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger AVIF",
      downloadAll: "Télécharger Tout en ZIP",
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
      title: "Comment ça Fonctionne",
      step1Title: "Télécharger les Fichiers HEIF",
      step1Desc: "Sélectionnez une ou plusieurs images HEIF de votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger AVIF",
      step3Desc: "Obtenez vos fichiers AVIF convertis immédiatement",
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
      title: "Télécharger les Fichiers HEIF",
      description:
        "Glissez-déposez vos images HEIF ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir les Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger WebP",
      downloadAll: "Télécharger Tout en ZIP",
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
      title: "Comment ça Fonctionne",
      step1Title: "Télécharger les Fichiers HEIF",
      step1Desc: "Sélectionnez une ou plusieurs images HEIF de votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger WebP",
      step3Desc: "Obtenez vos fichiers WebP convertis immédiatement",
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
      title: "Télécharger les Fichiers HEIF",
      description:
        "Glissez-déposez vos images HEIF ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir les Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PDF",
      downloadAll: "Télécharger Tout en ZIP",
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
      title: "Comment ça Fonctionne",
      step1Title: "Télécharger les Fichiers HEIF",
      step1Desc: "Sélectionnez une ou plusieurs images HEIF de votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PDF",
      step3Desc: "Obtenez vos fichiers PDF convertis immédiatement",
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

  // HEIF to GIF Converter
  heifToGif: {
    title: "Convertisseur HEIF en GIF - Créer des GIFs Animés et Images Partageables",
    metaDescription:
      "Convertissez HEIF en GIF pour partage universel et animations. Parfait pour réseaux sociaux, memes et sites web. Fonctionne partout - aucune app nécessaire. Créez des GIFs animés à partir de photos. Convertisseur par lots gratuit.",
    metaKeywords:
      "HEIF en GIF, GIF animé, partage réseaux sociaux, memes, compatibilité universelle, animation GIF, convertir HEIF par lots, images partageables",
    hero: {
      title: "Convertisseur HEIF en GIF",
      subtitle:
        "Convertissez HEIF en GIF - le format d'image le plus partageable. Parfait pour posts réseaux sociaux, memes et animations. Compatibilité universelle sur toutes les plateformes, apps et services de messagerie. Aucun visualiseur spécial nécessaire.",
      badge1: "Partage Universel",
      badge2: "Prêt pour Réseaux Sociaux",
      badge3: "Support Animation",
    },
    upload: {
      title: "Télécharger des Fichiers HEIF",
      description:
        "Glissez-déposez vos images HEIF ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir des Fichiers",
      converting: "Conversion en cours...",
      success: "Conversion réussie !",
      download: "Télécharger GIF",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },
    features: {
      title: "Fonctionnalités",
      list: [
        "Compatibilité universelle - Les GIFs fonctionnent absolument partout",
        "Parfait pour réseaux sociaux (Twitter, Facebook, Instagram, WhatsApp)",
        "Traitement par lots jusqu'à 20 fichiers simultanément",
        "Support animation pour créer des boucles GIF",
        "100% sécurisé avec suppression automatique des fichiers",
        "Petites tailles de fichier optimisées pour partage",
        "Téléchargement instantané - prêt à publier",
        "Sans filigrane - images partageables propres",
      ],
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger des Fichiers HEIF",
      step1Desc: "Sélectionnez une ou plusieurs images HEIF de votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger GIF",
      step3Desc: "Obtenez vos fichiers GIF convertis immédiatement",
    },
    about: {
      title: "À Propos de la Conversion HEIF en GIF",
      whatIsHeif: {
        title: "Pourquoi GIF est Parfait pour Réseaux Sociaux et Partage ?",
        content:
          "GIF (Graphics Interchange Format) est le format d'image le plus universellement compatible, créé en 1987 et toujours prospère aujourd'hui. Les GIFs fonctionnent absolument partout - toutes les plateformes de réseaux sociaux (Twitter, Facebook, Instagram, Reddit, Tumblr), apps de messagerie (WhatsApp, Telegram, Discord, Slack), clients email, forums et sites web affichent les GIFs sans logiciel spécial. La caractéristique clé de GIF est le support d'animation - créez des animations en boucle, cinemagraphs et memes qui captent l'attention. Les GIFs utilisent la compression sans perte pour jusqu'à 256 couleurs, les rendant parfaits pour graphiques, logos et animations simples. Les tailles de fichier sont petites et partageables, idéales pour données mobiles et chargement rapide. GIF est la lingua franca de la culture internet - le format de choix pour réactions, memes et contenu viral.",
      },
      whyConvert: {
        title: "Pourquoi Convertir HEIF en GIF ?",
        content:
          "Convertissez HEIF en GIF pour partageabilité maximale et compatibilité universelle. HEIF ne fonctionne que sur appareils Apple plus récents et nécessite un logiciel spécial - rendant le partage difficile. GIF fonctionne instantanément sur chaque appareil, plateforme et app sans visualiseur nécessaire. Parfait pour : posts réseaux sociaux (GIFs Twitter, réactions Facebook, stories Instagram), création de memes (format universel pour contenu viral), messagerie (WhatsApp, Telegram supportent aperçu GIF), intégrations web (tous navigateurs affichent GIFs nativement), signatures email et marketing (affichage garanti), posts et commentaires forums (support universel), et images de réaction (partagez émotions instantanément). Les GIFs se lisent automatiquement et bouclent, les rendant accrocheurs pour marketing et engagement social. Bien que la qualité GIF soit limitée à 256 couleurs, elle est optimisée pour graphiques, superpositions texte et animations simples - la rendant idéale pour communication internet.",
      },
      heifVsHeic: {
        title: "GIF vs Formats Modernes - Quand Choisir GIF",
        content:
          "GIF échange qualité d'image pour compatibilité universelle et animation. Choisissez GIF quand : partager sur réseaux sociaux (Instagram, Twitter auto-affichage), créer memes ou réactions (format universel), faire animations simples ou boucles, assurer 100% compatibilité (aucun visualiseur nécessaire), partager via apps de messagerie (support aperçu automatique), ou cibler contenu viral/partageable. Les limitations de GIF (256 couleurs, plus grand que WebP) sont compensées par visibilité garantie partout. Les formats modernes comme AVIF/WebP offrent meilleure qualité mais nécessitent des visualiseurs spéciaux. Pour culture internet, memes et partage social, GIF reste imbattable malgré 35+ ans. Sa simplicité et support universel en font le choix par défaut pour contenu partageable.",
      },
      benefits: {
        title: "Avantages du Format GIF",
        list: [
          "Compatibilité Universelle - Fonctionne littéralement sur chaque appareil et plateforme",
          "Natif Réseaux Sociaux - Auto-affiche sur Twitter, Facebook, Instagram, Reddit",
          "Support Animation - Créez GIFs en boucle et cinemagraphs",
          "Aucun Visualiseur Nécessaire - Affiche instantanément sans logiciel spécial",
          "Ami des Memes - Le format standard pour culture internet",
          "Auto-Lecture - Boucle automatiquement pour contenu accrocheur",
        ],
      },
    },
    faq: {
      title: "Questions Fréquentes – HEIF en GIF",
      items: [
        {
          q: "Est-ce gratuit de convertir HEIF en GIF ?",
          a: "Oui ! Notre convertisseur HEIF en GIF est entièrement gratuit avec conversions illimitées. Pas d'inscription, d'abonnements ou de frais cachés. Convertissez autant d'images que vous avez besoin pour réseaux sociaux, memes ou partage.",
        },
        {
          q: "Pourquoi GIF est si populaire pour réseaux sociaux et memes ?",
          a: "GIF est universellement compatible - il fonctionne sur chaque plateforme, app et appareil sans logiciel spécial. Les plateformes de réseaux sociaux comme Twitter, Facebook, Instagram et Reddit supportent nativement les GIFs avec auto-lecture et boucle. Les GIFs peuvent être animés (parfaits pour réactions et memes), sont assez petits pour partage mobile, et sont devenus le format standard pour culture internet et contenu viral. Tout le monde peut voir votre GIF instantanément, peu importe l'appareil qu'ils utilisent.",
        },
        {
          q: "Puis-je créer des GIFs animés à partir d'images HEIF ?",
          a: "Oui ! Bien qu'un seul HEIF se convertisse en GIF statique, vous pouvez télécharger plusieurs images HEIF en mode lot pour créer des frames pour animation. Notre convertisseur traite chaque image séparément. Pour créer de vrais GIFs animés avec plusieurs frames, vous pouvez utiliser conversion par lots puis combiner les frames en utilisant des outils d'animation GIF gratuits en ligne.",
        },
        {
          q: "GIF fonctionnera-t-il sur toutes les plateformes de réseaux sociaux ?",
          a: "Absolument ! GIF est supporté nativement par toutes les plateformes majeures : Twitter/X (bouton GIF dans composeur), Facebook (GIFs auto-lecture), Instagram (Stories et DMs), Reddit (affichage inline), Tumblr (plateforme centrée GIF), WhatsApp (aperçu automatique), Telegram, Discord, Slack, et pratiquement chaque app de messagerie et forum. Les GIFs s'affichent et bouclent automatiquement sans visualiseur ou plugin nécessaire.",
        },
        {
          q: "Pourquoi les fichiers GIF sont-ils plus grands que HEIF ?",
          a: "GIF utilise compression non compressée ou sans perte pour maintenir qualité frame par frame pour animations, tandis que HEIF utilise compression vidéo moderne. Cependant, la compatibilité universelle de GIF et affichage garanti rendent le compromis de taille valable pour partage. Pour réseaux sociaux et memes, visibilité instantanée sur tous appareils est plus précieuse que optimisation taille fichier. De plus, notre convertisseur optimise sortie GIF pour partage web.",
        },
        {
          q: "Puis-je utiliser GIF pour travail professionnel ?",
          a: "Oui ! GIF est parfait pour : marketing email (bannières animées, signatures), éléments web (animations chargement, icônes), présentations (graphiques animés, transitions), communications clients (visualisation garantie), et marketing réseaux sociaux (taux d'engagement élevés). Bien que GIF ait limitations 256 couleurs, il est idéal pour graphiques, logos, superpositions texte et animations simples où compatibilité universelle compte plus que qualité photo-réaliste.",
        },
        {
          q: "Quelle est la différence entre GIF et formats modernes comme WebP ?",
          a: "GIF (1987) priorise compatibilité universelle et animation ; WebP (2010) priorise compression et qualité. GIF fonctionne sur 100% des appareils sans visualiseur spécial ; WebP a besoin de navigateurs modernes (97% support). Pour réseaux sociaux, memes et contenu partageable, la visibilité garantie de GIF gagne. Pour optimisation web et qualité photo, WebP est meilleur. Choisissez GIF quand partage compte plus que taille fichier.",
        },
        {
          q: "Puis-je créer des memes avec GIF ?",
          a: "Absolument ! GIF est le format standard pour memes internet et images de réaction. Après conversion HEIF en GIF, vous pouvez ajouter superpositions texte, combiner frames, ou utiliser GIF directement pour partage. Les GIFs sont parfaits pour memes car ils fonctionnent partout, auto-lecture pour impact immédiat, peuvent être animés pour expression extra, et sont facilement partageables sur toutes plateformes. La culture meme internet est construite sur format GIF.",
        },
        {
          q: "Combien de temps prend la conversion HEIF en GIF ?",
          a: "La conversion prend 1-2 secondes par image. La création GIF est rapide car c'est un format simple optimisé pour compatibilité plutôt que compression complexe. Le résultat est un fichier universellement compatible prêt pour partage immédiat sur réseaux sociaux, apps de messagerie ou toute plateforme.",
        },
      ],
    },
    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "HEIC en GIF", url: "/convert/heic-to-gif" },
        { name: "HEIF en PNG", url: "/convert/heif-to-png" },
        { name: "HEIF en JPG", url: "/convert/heif-to-jpg" },
        { name: "PNG en GIF", url: "/convert/png-to-gif" },
        { name: "JPG en GIF", url: "/convert/jpg-to-gif" },
        { name: "GIF en PNG", url: "/convert/gif-to-png" },
      ],
    },
  },

  // JPG to PNG Converter
  jpgToPng: {
    title: "Convertisseur JPG en PNG - Ajoutez la Transparence et la Qualité Sans Perte",
    metaDescription:
      "Convertissez JPG en PNG pour le support de la transparence et la qualité sans perte. Parfait pour les logos, graphiques et images web. Préservez la qualité d'image sans artefacts de compression. Convertisseur par lots gratuit, sans inscription.",
    metaKeywords:
      "JPG en PNG, ajouter transparence, conversion sans perte, convertisseur graphique, convertisseur logo, images web, convertir JPG par lots, supprimer arrière-plan",
    hero: {
      title: "Convertisseur JPG en PNG",
      subtitle:
        "Convertissez JPG en PNG pour le support de la transparence et une qualité supérieure. Parfait pour les logos, graphiques et images professionnelles. PNG préserve chaque détail sans artefacts de compression - idéal pour les graphiques web, les superpositions et les images nécessitant des arrière-plans transparents.",
      badge1: "Support de Transparence",
      badge2: "Qualité Sans Perte",
      badge3: "Sans Artefacts",
    },
    upload: {
      title: "Télécharger des Fichiers JPG",
      description:
        "Glissez-déposez vos images JPG ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir des Fichiers",
      converting: "Conversion en cours...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Tout Télécharger en ZIP",
      convertAnother: "Convertir un Autre Fichier",
    },
    features: {
      title: "Fonctionnalités",
      list: [
        "Support de transparence - ajoutez un canal alpha pour les superpositions",
        "Qualité sans perte - préservez chaque pixel parfaitement",
        "Traitement par lots jusqu'à 20 fichiers simultanément",
        "Aucun artefact de compression - bords nets et texte",
        "100% sécurisé avec suppression automatique des fichiers",
        "Parfait pour les logos, graphiques et images web",
        "Téléchargement instantané - prêt à l'emploi",
        "Sans filigrane - qualité professionnelle",
      ],
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1Title: "Télécharger des Fichiers JPG",
      step1Desc: "Sélectionnez une ou plusieurs images JPG de votre appareil",
      step2Title: "Conversion Automatique",
      step2Desc: "Notre convertisseur traite vos fichiers instantanément",
      step3Title: "Télécharger PNG",
      step3Desc: "Obtenez vos fichiers PNG convertis immédiatement",
    },
    about: {
      title: "À Propos de la Conversion JPG en PNG",
      whatIsHeif: {
        title: "Pourquoi PNG est Parfait pour les Graphiques et Logos ?",
        content:
          "PNG (Portable Network Graphics) est le choix professionnel pour les graphiques, logos et images nécessitant la transparence. Créé en 1996 comme alternative sans brevet à GIF, PNG utilise la compression sans perte - ce qui signifie zéro perte de qualité peu importe combien de fois vous l'enregistrez. La caractéristique clé de PNG est la transparence du canal alpha - parfaite pour les logos, superpositions, filigranes et graphiques qui doivent se fondre parfaitement avec les arrière-plans. Contrairement à JPG (compression avec perte qui dégrade la qualité), PNG préserve chaque pixel parfaitement, maintenant des bords nets sur le texte, des lignes nettes sur les graphiques et des couleurs vibrantes sans artefacts de compression. PNG prend en charge 16 millions de couleurs plus 256 niveaux de transparence, en faisant la norme pour les graphiques web, éléments UI, icônes, captures d'écran et travail de design professionnel. Les tailles de fichier sont plus grandes que JPG mais la qualité et le support de transparence en valent la peine pour les graphiques et logos.",
      },
      whyConvert: {
        title: "Pourquoi Convertir JPG en PNG ?",
        content:
          "Convertissez JPG en PNG lorsque vous avez besoin de transparence ou de qualité sans perte. JPG utilise la compression avec perte qui dégrade définitivement la qualité d'image à chaque édition - créant des artefacts de compression, du texte flou et des bandes de couleur. PNG utilise la compression sans perte, préservant une qualité parfaite pour toujours. Raisons clés de conversion : ajouter la transparence pour logos et superpositions (supprimer les arrière-plans), préparer les graphiques pour le travail web/design (bords nets), éviter la dégradation de qualité (pas d'artefacts), créer des compositions en couches (support de canal alpha), préserver le texte et l'art linéaire (bords nets), ou éditer des images à plusieurs reprises sans perte. PNG est essentiel pour les logos, icônes, graphiques, captures d'écran, éléments UI, filigranes et toute image nécessitant des arrière-plans transparents. Bien que les fichiers PNG soient plus grands que JPG, la qualité et le support de transparence en font le choix professionnel pour le travail graphique. Convertissez JPG en PNG avant l'édition pour éviter une perte de qualité supplémentaire.",
      },
      heifVsHeic: {
        title: "PNG vs JPG - Quand Choisir PNG",
        content:
          "PNG et JPG servent des objectifs différents. Choisissez PNG pour : logos et graphiques (bords nets, transparence), images avec beaucoup de texte (pas de flou), images nécessitant la transparence (superpositions, filigranes), graphiques nécessitant une édition répétée (sans perte), icônes et éléments UI (détails nets), captures d'écran (préserver la clarté), ou travail de design professionnel (zéro artefact). Choisissez JPG pour : photographies (compression efficace), images sans besoin de transparence, priorité de taille de fichier (fichiers plus petits), ou photos de réseaux sociaux (perte de qualité acceptable). Avantages de PNG : qualité sans perte (préservation parfaite), support de transparence (canal alpha), aucun artefact de compression (bords nets), édition illimitée sans dégradation. Inconvénients de PNG : tailles de fichier plus grandes (2-10× plus grand que JPG), pas idéal pour les photos (compression inefficace). Pour usage web : PNG pour logos/graphiques, JPG pour photos. Pour impression : PNG pour graphiques, JPG pour photos. Pour édition : Toujours PNG (prévient la perte de qualité).",
      },
      benefits: {
        title: "Avantages du Format PNG",
        list: [
          "Support de Transparence - Ajoutez un canal alpha pour logos et superpositions",
          "Qualité Sans Perte - Zéro perte de qualité, préservation parfaite des pixels",
          "Aucun Artefact de Compression - Bords nets, texte net, graphiques propres",
          "Édition Illimitée - Éditez à plusieurs reprises sans dégradation de qualité",
          "Standard Professionnel - Choix de l'industrie pour graphiques et logos",
          "Optimisé pour Web - Parfait pour éléments UI, icônes et graphiques",
        ],
      },
    },
    faq: {
      title: "Questions Fréquentes – JPG en PNG",
      items: [
        {
          q: "Est-ce gratuit de convertir JPG en PNG ?",
          a: "Oui ! Notre convertisseur JPG en PNG est entièrement gratuit avec des conversions illimitées. Pas d'inscription, d'abonnements ou de frais cachés. Convertissez autant d'images que vous avez besoin pour logos, graphiques ou usage professionnel.",
        },
        {
          q: "La conversion de JPG en PNG ajoutera-t-elle la transparence ?",
          a: "Convertir JPG en PNG ajoute le support de transparence (canal alpha) mais ne rend pas automatiquement transparents les arrière-plans blancs/noirs existants. Le format PNG prend en charge la transparence, vous pouvez donc éditer le PNG dans les éditeurs photo (Photoshop, GIMP, Photopea) pour supprimer les arrière-plans. La conversion prépare votre image pour le travail avec transparence en la changeant en un format qui prend en charge les canaux alpha.",
        },
        {
          q: "Pourquoi PNG est meilleur que JPG pour logos et graphiques ?",
          a: "PNG utilise la compression sans perte (zéro perte de qualité) tandis que JPG utilise la compression avec perte (dégradation permanente de qualité). PNG préserve les bords nets, le texte net et les lignes propres parfaitement - essentiel pour logos et graphiques. PNG prend également en charge la transparence pour superpositions et arrière-plans. JPG crée des artefacts de compression (flou, bandes de couleur) surtout autour du texte et des bords nets. Pour logos, icônes, graphiques et images avec beaucoup de texte, PNG est le choix professionnel.",
        },
        {
          q: "Les fichiers PNG seront-ils plus grands que JPG ?",
          a: "Oui, les fichiers PNG sont typiquement 2-10 fois plus grands que JPG car PNG utilise la compression sans perte tandis que JPG utilise la compression avec perte. Cependant, la qualité et le support de transparence le rendent valable pour graphiques, logos et images professionnelles. Pour usage web, la légère augmentation de taille de fichier est compensée par une qualité parfaite et des capacités de transparence. Les navigateurs modernes gèrent PNG efficacement.",
        },
        {
          q: "Puis-je éditer PNG sans perdre en qualité ?",
          a: "Absolument ! PNG est sans perte, ce qui signifie que vous pouvez l'éditer et l'enregistrer un nombre illimité de fois sans dégradation de qualité. Chaque enregistrement préserve une qualité parfaite. C'est crucial pour le travail de design où vous devez faire plusieurs éditions. JPG perd en qualité à chaque enregistrement en raison de la recompression. Pour les flux de travail d'édition professionnels, utilisez toujours PNG.",
        },
        {
          q: "PNG est-il bon pour usage web ?",
          a: "Oui ! PNG est le format standard pour graphiques web, logos, icônes et éléments UI. Bien que plus grand que JPG, le support de transparence et la qualité nette de PNG le rendent essentiel pour le design web. Utilisez PNG pour logos, icônes, boutons, graphiques et images avec beaucoup de texte. Utilisez JPG pour photographies où la transparence n'est pas nécessaire. La compression moderne et les CDN gèrent PNG efficacement.",
        },
        {
          q: "Quelle est la différence entre PNG-8 et PNG-24 ?",
          a: "PNG-8 prend en charge 256 couleurs (comme GIF) avec transparence simple, résultant en fichiers plus petits. PNG-24 prend en charge 16 millions de couleurs avec 256 niveaux de transparence alpha (transparence partielle), offrant une qualité complète et une transparence douce mais des fichiers plus grands. Notre convertisseur crée PNG-24 pour une qualité maximale et un support complet de transparence. Utilisez PNG-8 uniquement pour graphiques simples avec peu de couleurs.",
        },
        {
          q: "Puis-je utiliser PNG pour impression ?",
          a: "Oui ! La qualité sans perte de PNG le rend excellent pour l'impression, surtout pour graphiques, logos et designs avec beaucoup de texte. PNG préserve une qualité parfaite à toute résolution. Cependant, pour photographies, TIFF ou JPG haute qualité pourraient être plus efficaces en raison de tailles de fichier plus petites. Pour travail de design graphique d'impression (affiches, dépliants, cartes de visite), PNG est idéal.",
        },
        {
          q: "Combien de temps prend la conversion JPG en PNG ?",
          a: "La conversion prend 1-2 secondes par image. La conversion PNG est rapide car c'est un changement de format qui préserve toutes les données. Le résultat est un PNG sans perte prêt pour travail avec transparence, édition répétée ou usage professionnel sans dégradation de qualité.",
        },
      ],
    },
    related: {
      title: "Convertisseurs Associés",
      converters: [
        { name: "PNG en JPG", url: "/convert/png-to-jpg" },
        { name: "JPG en WebP", url: "/convert/jpg-to-webp" },
        { name: "PNG en WebP", url: "/convert/png-to-webp" },
        { name: "HEIC en PNG", url: "/convert/heic-to-png" },
        { name: "HEIF en PNG", url: "/convert/heif-to-png" },
        { name: "JPG en PDF", url: "/convert/jpg-to-pdf" },
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
      title: "Télécharger les Fichiers HEIF",
      description:
        "Glissez-déposez vos images HEIF ici ou cliquez pour parcourir. Prend en charge la conversion par lots jusqu'à 20 fichiers. Maximum 100MB par fichier.",
      buttonSingle: "Fichier Unique",
      buttonBatch: "Conversion par Lots",
      chooseFile: "Choisir les Fichiers",
      converting: "Conversion...",
      success: "Conversion réussie !",
      download: "Télécharger PNG",
      downloadAll: "Télécharger Tout en ZIP",
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
      title: "Comment ça Fonctionne",
      step1Title: "Télécharger les Fichiers HEIF",
      step1Desc: "Sélectionnez une ou plusieurs images HEIF de votre appareil",
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
};

export type Translations = typeof fr;

