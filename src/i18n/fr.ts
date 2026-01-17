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
};

export type Translations = typeof fr;

