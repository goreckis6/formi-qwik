// Swedish translations
import type { Translations } from "./en";

export const sv: Translations = {
  locale: "sv",
  name: "Svenska",
  flag: "🇸🇪",

  nav: {
    converters: "Konverterare",
    viewers: "Visare",
    compress: "Komprimera",
    samples: "Exempel",
  },

  home: {
    title: "Gratis Online Filkonverterare - FormiPeek | Konvertera 300+ Format Direkt",
    metaDescription:
      "Konvertera filer mellan 300+ format direkt. Snabb, säker och gratis filkonverteringstjänst. Stöd för bilder, dokument, e-böcker och datafiler.",
    metaKeywords:
      "filkonverterare, online konverterare, bildkonverterare, dokumentkonverterare, e-bok konverterare, batchkonvertering, gratis konverterare",

    hero: {
      badge: "Gratis För Alltid • Ingen Registrering",
      title: "Transformera Filer",
      titleHighlight: "Direkt",
      subtitle:
        "Konvertera mellan {count} format med blixtsnabb hastighet. Säker, gratis och ingen registrering krävs.",
      buttonStart: "Börja Konvertera",
      buttonView: "Visa Filer",
      feature1: "100% Gratis",
      feature2: "Ingen Registrering",
      feature3: "Säker och Privat",
      feature4: "Batchbearbetning",
    },

    stats: {
      formats: "Stödda Format",
      dataProcessed: "Bearbetad Data",
      batchFiles: "Batchbearbetning",
    },

    explore: {
      title: "Utforska Våra Verktyg",
      subtitle: "Allt du behöver för filkonvertering, visning, komprimering och mer",
      converters: {
        title: "Konverterare",
        description:
          "Konvertera mellan 300+ filformat direkt. Bilder, dokument, e-böcker och datafiler.",
      },
      viewers: {
        title: "Visare",
        description:
          "Förhandsgranska och visa filer direkt i din webbläsare. Inga nedladdningar behövs.",
      },
      compress: {
        title: "Komprimera",
        description: "Minska filstorlekar utan kvalitetsförlust. JPG, PNG och PDF komprimering.",
      },
      samples: {
        title: "Exempel",
        description:
          "Bläddra genom exempelfiler för alla stödda format. Testa innan du konverterar.",
      },
    },

    howItWorks: {
      title: "Hur Fungerar Våra Konverterare?",
      subtitle: "Tre enkla steg för att konvertera vilket filformat som helst",
      step1: {
        title: "Ladda Upp Fil",
        description:
          "Dra och släpp eller bläddra för att välja din fil. Stöder upp till 100MB per fil.",
      },
      step2: {
        title: "Välj Format",
        description: "Välj önskat utdataformat från 300+ stödda format.",
      },
      step3: {
        title: "Ladda Ner",
        description: "Klicka på konvertera och ladda ner din fil direkt. Ingen väntan, inga köer.",
      },
    },

    popular: {
      title: "Populära Konverterare",
      subtitle: "Snabb åtkomst till våra mest använda konverteringsverktyg",
      viewAll: "Visa Alla 300+ Konverterare",
      viewAllMobile: "Visa Alla Konverterare",
    },

    features: {
      title: "Varför Välja FormiPeek?",
      subtitle: "Byggt för professionella och vardagsanvändare",
      lightning: {
        title: "Blixtsnabb",
        description: "Bearbeta filer på sekunder med vår optimerade konverteringsmotor",
      },
      secure: {
        title: "Säker och Privat",
        description: "Företagsnivå säkerhet. Filer raderas automatiskt efter bearbetning",
      },
      universal: {
        title: "Universellt Stöd",
        description: "Konvertera mellan 300+ formatkombinationer för alla filtyper",
      },
      batch: {
        title: "Batchbearbetning",
        description: "Konvertera upp till 20 filer åt gången med vår kraftfulla batchmotor",
      },
      viewer: {
        title: "Filvisare",
        description: "Förhandsgranska och visa dina filer direkt i webbläsaren",
      },
      quality: {
        title: "Professionell Kvalitet",
        description: "Industristandard konvertering med anpassningsbara inställningar",
      },
    },

    faq: {
      title: "Vanliga Frågor",
      items: [
        {
          q: "Vad är FormiPeek?",
          a: "FormiPeek är en gratis onlineplattform som låter dig konvertera, visa och komprimera filer direkt i din webbläsare. Den stöder över 300 filformatkombinationer utan installation krävs.",
        },
        {
          q: "Är FormiPeek gratis?",
          a: "Ja. Alla filkonverterings- och visningsverktyg på FormiPeek är helt gratis och kräver ingen registrering eller prenumerationer.",
        },
        {
          q: "Är mina filer säkra på FormiPeek?",
          a: "Ja. Filer som laddas upp till FormiPeek bearbetas säkert och raderas automatiskt efter konvertering. Vi lagrar eller delar aldrig dina filer.",
        },
        {
          q: "Vilka filformat stöder FormiPeek?",
          a: "FormiPeek stöder över 300 filformatkombinationer, inklusive bilder, dokument, e-böcker och datafiler som PDF, JPG, PNG, HEIC, CSV, EPUB och mer.",
        },
        {
          q: "Behöver jag installera någon programvara?",
          a: "Nej. FormiPeek fungerar helt online i din webbläsare på vilken enhet som helst, inklusive Windows, macOS, Linux, iOS och Android.",
        },
        {
          q: "Kan jag konvertera flera filer samtidigt?",
          a: "Ja. FormiPeek stöder batchkonvertering, vilket gör att du kan konvertera upp till 20 filer samtidigt med en total storleksgräns på 100MB.",
        },
      ],
    },
  },

  // Converters Page
  converters: {
    title: "Filkonverterare",
    subtitle: "Konvertera mellan 300+ filformat direkt",
    searchPlaceholder: "Sök konverterare... (t.ex. HEIC till PDF)",
    noConvertersFound: "Inga konverterare hittades som matchar",
    sections: {
      heic: {
        title: "HEIC-konverterare",
        description: "Konvertera bilder i Apple HEIC-format. HEIC (High Efficiency Image Container) är Apple's proprietära bildformat som används av iPhone och iPad sedan iOS 11. Det ger utmärkt komprimering samtidigt som den bibehåller hög bildkvalitet.",
      },
      heif: {
        title: "HEIF-konverterare",
        description: "Konvertera bilder i HEIF-format. HEIF (High Efficiency Image Format) är det öppna standardcontainerformat som HEIC bygger på. Medan HEIC är Apple's implementation, används HEIF av andra enheter och plattformar.",
        difference: "Obs: HEIF är containerformatet, medan HEIC är Apple's specifika implementation. Båda formaten är kompatibla, men HEIC-filer används oftare av Apple-enheter.",
      },
      jpg: {
        title: "JPG Omvandlare",
        description: "Konvertera JPG/JPEG-bilder till andra format. JPG (Joint Photographic Experts Group) är det mest använda bildformatet för foton, optimerat för fotografiskt innehåll med förlustkompr imering.",
      },
    },
     heicToPdf: {
      name: "HEIC till PDF",
      description: "Konvertera Apple HEIC-foton till PDF-format direkt",
    },
    heicToPng: {
      name: "HEIC till PNG",
      description: "Konvertera Apple HEIC-foton till PNG-format direkt",
    },
    heicToJpg: {
      name: "HEIC till JPG",
      description: "Konvertera Apple HEIC-foton till JPG-format direkt",
    },
    heicToWebp: {
      name: "HEIC till WebP",
      description: "Konvertera Apple HEIC-foton till WebP-format direkt",
    },
    heicToTiff: {
      name: "HEIC till TIFF",
      description: "Konvertera Apple HEIC-foton till TIFF-format omedelbart",
    },
    heicToAvif: {
      name: "HEIC till AVIF",
      description: "Konvertera Apple HEIC-foton till AVIF-format direkt",
    },
    heicToGif: {
      name: "HEIC till GIF",
      description: "Konvertera Apple HEIC-foton till GIF-format direkt",
    },
    heifToJpg: {
      name: "HEIF till JPG",
      description: "Konvertera HEIF-bilder till JPG-format direkt",
    },
    heifToPng: {
      name: "HEIF till PNG",
      description: "Konvertera HEIF-bilder till PNG-format direkt",
    },
    heifToPdf: {
      name: "HEIF till PDF",
      description: "Konvertera HEIF-bilder till PDF-format direkt",
    },
    heifToWebp: {
      name: "HEIF till WebP",
      description: "Konvertera HEIF-bilder till WebP-format direkt",
    },
    heifToAvif: {
      name: "HEIF till AVIF",
      description: "Konvertera HEIF-bilder till AVIF-format direkt",
    },
    heifToTiff: {
      name: "HEIF till TIFF",
      description: "Konvertera HEIF-bilder till TIFF-format direkt",
    },
    heifToGif: {
      name: "HEIF till GIF",
      description: "Konvertera HEIF-bilder till GIF för sociala medier och delning",
    },
    jpgToPng: {
      name: "JPG till PNG",
      description: "Konvertera JPG till PNG för transparens och förlustfri kvalitet",
    },
    jpgToWebp: {
      name: "JPG till WebP",
      description: "Konvertera JPG till WebP för 25-35% mindre filer och bättre webbprestanda",
    },
    jpgToAvif: {
      name: "JPG till AVIF",
      description: "Konvertera JPG till AVIF för 50% mindre filer med överlägsen kvalitet och modern komprimering",
    },
    jpgToTiff: {
      name: "JPG till TIFF",
      description: "Konvertera JPG till TIFF för förlustfri kvalitet, professionell utskrift och arkivering",
    },
    jpgToGif: {
      name: "JPG till GIF",
      description: "Konvertera JPG till GIF för animationer, sociala medier och webbgrafik med transparensstöd",
    },
    jpgToPdf: {
      name: "JPG till PDF",
      description: "Konvertera JPG-bilder till PDF-dokument för universell kompatibilitet och professionell presentation",
    },
  },

  heicToPdf: {
    title: "HEIC till PDF Konverterare - Konvertera Apple Foton till PDF Gratis Online",
    metaDescription:
      "Konvertera HEIC-bilder till PDF-format direkt. Gratis online HEIC till PDF konverterare med batchbearbetning. Snabb, säker och ingen registrering krävs. Fungerar med iPhone och iPad foton.",
    metaKeywords:
      "HEIC till PDF, konvertera HEIC, Apple foton till PDF, iPhone foton till PDF, HEIC konverterare, bild till PDF, batch konvertera HEIC, gratis HEIC konverterare",

    hero: {
      title: "HEIC till PDF Konverterare",
      subtitle:
        "Transformera dina Apple HEIC-foton till universella PDF-dokument direkt. Gratis, snabb och säker konvertering utan filstorleksbegränsningar.",
      badge1: "Blixtsnabb",
      badge2: "100% Säker",
      badge3: "Ingen Registrering",
    },

    upload: {
      title: "Ladda Upp HEIC Filer",
      description:
        "Dra och släpp dina HEIC-foton här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batch Konvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda Ner PDF",
      downloadAll: "Ladda Ner Alla som ZIP",
      convertAnother: "Konvertera En Annan Fil",
    },

    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ HEIC till PDF konvertering",
        "Batchbearbetning upp till 20 filer",
        "Bevarar bildkvalitet och EXIF-data",
        "Inga filstorleksbegränsningar",
        "100% säker och privat",
        "Fungerar med iPhone och iPad foton",
        "Omedelbar nedladdning efter konvertering",
        "Inga vattenstämplar tillagda",
      ],
    },

    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda Upp HEIC Filer",
      step1Desc: "Välj en eller flera HEIC-foton från din enhet",
      step2Title: "Auto Konvertera",
      step2Desc: "Vår konverterare bearbetar dina filer direkt",
      step3Title: "Ladda Ner PDF",
      step3Desc: "Få dina konverterade PDF-filer direkt",
    },

    about: {
      title: "Om HEIC till PDF Konvertering",
      whatIsHeic: {
        title: "Vad är HEIC-formatet?",
        content:
          "HEIC (High Efficiency Image Container) är standardfotoformatet som används av Apple-enheter sedan iOS 11. Det erbjuder överlägsen komprimering samtidigt som det behåller hög bildkvalitet, vilket gör att foton tar mindre lagringsutrymme på din iPhone eller iPad.",
      },
      whyConvert: {
        title: "Varför Konvertera HEIC till PDF?",
        content:
          "Även om HEIC är effektivt stöds det inte universellt. Att konvertera till PDF säkerställer att dina foton kan visas på vilken enhet som helst, enkelt delas via e-post och presenteras professionellt i dokument. PDF:er är också idealiska för utskrift och arkivering.",
      },
      benefits: {
        title: "Fördelar Med Vår Konverterare",
        list: [
          "Universell Kompatibilitet - PDF:er fungerar på alla enheter och plattformar",
          "Professionell Presentation - Perfekt för affärsdokument och portföljer",
          "Enkel Delning - E-postvänligt format som alla kan öppna",
          "Utskriftsredo - Behåller kvalitet för fysiska utskrifter",
          "Säker Lagring - Industristandard format för arkivering",
          "Ingen Kvalitetsförlust - Bevarar ursprunglig bildupplösning",
        ],
      },
    },

    faq: {
      title: "Vanliga Frågor – HEIC till PDF",
      items: [
        {
          q: "Är det gratis att konvertera HEIC till PDF?",
          a: "Ja! Vår HEIC till PDF konverterare är helt gratis att använda. Du kan konvertera HEIC-bilder till PDF utan registrering, prenumerationer eller dolda avgifter.",
        },
        {
          q: "Kan jag konvertera HEIC-foton från iPhone till PDF?",
          a: "Ja. Du kan konvertera HEIC-foton tagna på iPhone, iPad eller vilken Apple-enhet som helst direkt till PDF. Ladda bara upp dina HEIC-filer från din enhet, och konverteringen fungerar omedelbart i din webbläsare.",
        },
        {
          q: "Kommer kvaliteten att bevaras vid konvertering av HEIC till PDF?",
          a: "Ja. Vi bevarar den ursprungliga bildkvaliteten under konvertering. Dina HEIC-foton konverteras till PDF-filer med hög upplösning utan komprimering eller kvalitetsförlust.",
        },
        {
          q: "Vad är den maximala filstorleken för HEIC till PDF konvertering?",
          a: "Du kan konvertera HEIC-filer upp till 100MB per fil. För batchkonvertering kan du ladda upp upp till 20 filer åt gången, med en total storleksbegränsning på 100MB.",
        },
      ],
    },

    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "JPG till PDF", url: "/convert/jpg-to-pdf" },
        { name: "PNG till PDF", url: "/convert/png-to-pdf" },
        { name: "WEBP till PDF", url: "/convert/webp-to-pdf" },
        { name: "HEIC till WEBP", url: "/convert/heic-to-webp" },
      ],
    },

    footer: {
      tagline:
        "Den ultimata filkonverterings- och visningsplattformen för professionella och vardagsanvändare.",
      security:
        "100% Säker: Inga filer lagras på våra servrar. Alla konverteringar bearbetas och filer raderas automatiskt direkt efter bearbetning.",
      copyright: "© 2025 FormiPeek",
      madeWith: "Byggd med",
      byDevelopers: "av utvecklare som bryr sig om kvalitet.",
    },
  },

  heicToPng: {
    title: "HEIC till PNG-konverterare - Konvertera Apple-foton gratis online till PNG",
    metaDescription:
      "Konvertera HEIC-bilder direkt till PNG-format. Gratis online HEIC till PNG-konverterare med batchbearbetning. Snabb, säker och ingen registrering krävs. Fungerar med iPhone- och iPad-foton.",
    metaKeywords:
      "HEIC till PNG, konvertera HEIC, Apple foton till PNG, iPhone foton till PNG, HEIC-konverterare, bild till PNG, batch konvertera HEIC, gratis HEIC-konverterare",

    hero: {
      title: "HEIC till PNG-konverterare",
      subtitle:
        "Konvertera dina Apple HEIC-foton direkt till universella PNG-bilder. Gratis, snabb och säker konvertering utan filstorleksbegränsningar.",
      badge1: "Blixtsnabb",
      badge2: "100% Säker",
      badge3: "Ingen Registrering",
    },

    upload: {
      title: "Ladda upp HEIC-filer",
      description:
        "Dra och släpp dina HEIC-foton här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batch Konvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner PNG",
      downloadAll: "Ladda ner Alla som ZIP",
      convertAnother: "Konvertera Annan Fil",
    },

    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ HEIC till PNG-konvertering",
        "Batchbearbetning upp till 20 filer",
        "Bevarar bildkvalitet och transparens",
        "Ingen filstorleksbegränsning",
        "100% säker och privat",
        "Fungerar med iPhone- och iPad-foton",
        "Omedelbar nedladdning efter konvertering",
        "Inga vattenstämplar tillagda",
      ],
    },

    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp HEIC-filer",
      step1Desc: "Välj en eller flera HEIC-foton från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer direkt",
      step3Title: "Ladda ner PNG",
      step3Desc: "Få dina konverterade PNG-filer direkt",
    },

    about: {
      title: "Om HEIC till PNG-konvertering",
      whatIsHeic: {
        title: "Vad är HEIC-formatet?",
        content:
          "HEIC (High Efficiency Image Container) är standardfotoformatet som används av Apple-enheter sedan iOS 11. Det erbjuder överlägsen komprimering samtidigt som den höga bildkvaliteten bevaras, vilket gör att foton tar mindre lagringsutrymme på din iPhone eller iPad.",
      },
      whyConvert: {
        title: "Varför konvertera HEIC till PNG?",
        content:
          "Även om HEIC är effektivt, stöds det inte universellt. Att konvertera till PNG säkerställer att dina foton kan visas på vilken enhet som helst, enkelt delas via e-post och användas i webbdesign och grafik. PNG-formatet stöder transparens och förlustfri komprimering, vilket gör det idealiskt för professionell användning.",
      },
      benefits: {
        title: "Fördelar med Vår Konverterare",
        list: [
          "Universell Kompatibilitet - PNG fungerar på alla enheter och plattformar",
          "Transparensstöd - Perfekt för grafik och webbdesign",
          "Förlustfri Kvalitet - Inga komprimeringsartefakter eller kvalitetsförlust",
          "Enkel Delning - Brett stött format som vem som helst kan öppna",
          "Webbredo - Idealiskt för webbplatser, sociala medier och onlineanvändning",
          "Ingen Kvalitetsförlust - Bevarar originalbildens upplösning",
        ],
      },
    },

    faq: {
      title: "Vanliga Frågor – HEIC till PNG",
      items: [
        {
          q: "Är det gratis att konvertera HEIC till PNG?",
          a: "Ja! Vår HEIC till PNG-konverterare är helt gratis. Du kan konvertera HEIC-bilder till PNG utan registrering, prenumerationer eller dolda avgifter.",
        },
        {
          q: "Kommer kvaliteten att bevaras när HEIC konverteras till PNG?",
          a: "Ja. Vi bevarar originalbildkvaliteten under konvertering. Dina HEIC-foton konverteras till högupplösta PNG-filer utan komprimering eller kvalitetsförlust.",
        },
        {
          q: "Kan jag konvertera HEIC-foton från iPhone till PNG?",
          a: "Ja. Du kan konvertera HEIC-foton tagna på iPhone, iPad eller vilken Apple-enhet som helst direkt till PNG. Ladda bara upp dina HEIC-filer och konvertera dem direkt i din webbläsare.",
        },
        {
          q: "Behöver jag installera programvara för att konvertera HEIC till PNG?",
          a: "Ingen installation behövs. HEIC till PNG-konverteraren fungerar helt online i din webbläsare på Windows, macOS, Linux, iOS och Android.",
        },
      ],
    },

    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC till JPG", url: "/convert/heic-to-jpg" },
        { name: "PNG till PDF", url: "/convert/png-to-pdf" },
        { name: "JPG till PNG", url: "/convert/jpg-to-png" },
        { name: "WEBP till PNG", url: "/convert/webp-to-png" },
        { name: "HEIC till WEBP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to JPG Converter
  heicToJpg: {
    title: "HEIC till JPG-konverterare - Konvertera Apple-foton gratis online till JPG",
    metaDescription:
    "Konvertera HEIC-bilder direkt till JPG-format. Gratis online HEIC till JPG-konverterare med batchbearbetning. Snabb, säker och ingen registrering krävs. Fungerar med iPhone- och iPad-foton.",
    metaKeywords:
    "HEIC till JPG, konvertera HEIC, Apple foton till JPG, iPhone foton till JPG, HEIC-konverterare, bild till JPG, batch konvertera HEIC, gratis HEIC-konverterare",

    hero: {
    title: "HEIC till JPG-konverterare",
    subtitle:
      "Konvertera dina Apple HEIC-foton direkt till universella JPG-bilder. Gratis, snabb och säker konvertering utan filstorleksbegränsningar.",
    badge1: "Blixtsnabb",
    badge2: "100% Säker",
    badge3: "Ingen Registrering",
    },

    upload: {
    title: "Ladda upp HEIC-filer",
    description:
      "Dra och släpp dina HEIC-foton här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
    buttonSingle: "Enskild Fil",
    buttonBatch: "Batch Konvertera",
    chooseFile: "Välj Filer",
    converting: "Konverterar...",
    success: "Konvertering lyckades!",
    download: "Ladda ner JPG",
    downloadAll: "Ladda ner Alla som ZIP",
    convertAnother: "Konvertera Annan Fil",
    },

    features: {
    title: "Funktioner",
    list: [
      "Högkvalitativ HEIC till JPG-konvertering",
      "Batchbearbetning upp till 20 filer",
      "Bevarar bildkvalitet",
      "Ingen filstorleksbegränsning",
      "100% säker och privat",
      "Fungerar med iPhone- och iPad-foton",
      "Omedelbar nedladdning efter konvertering",
      "Inga vattenstämplar tillagda",
    ],
    },

    howItWorks: {
    title: "Hur Det Fungerar",
    step1Title: "Ladda upp HEIC-filer",
    step1Desc: "Välj en eller flera HEIC-foton från din enhet",
    step2Title: "Automatisk Konvertering",
    step2Desc: "Vår konverterare bearbetar dina filer direkt",
    step3Title: "Ladda ner JPG",
    step3Desc: "Få dina konverterade JPG-filer direkt",
    },

    about: {
    title: "Om HEIC till JPG-konvertering",
    whatIsHeic: {
      title: "Vad är HEIC-formatet?",
      content:
        "HEIC (High Efficiency Image Container) är standardfotoformatet som används av Apple-enheter sedan iOS 11. Det erbjuder överlägsen komprimering samtidigt som den höga bildkvaliteten bevaras, vilket gör att foton tar mindre lagringsutrymme på din iPhone eller iPad.",
    },
    whyConvert: {
      title: "Varför konvertera HEIC till JPG?",
      content:
        "Även om HEIC är effektivt, stöds det inte universellt. Att konvertera till JPG säkerställer att dina foton kan visas på vilken enhet som helst, enkelt delas via e-post och används i webbdesign och grafik. JPG-formatet är det mest bredt stödda bildformatet, vilket gör det idealiskt för delning och kompatibilitet.",
    },
    benefits: {
      title: "Fördelar med Vår Konverterare",
      list: [
        "Universell Kompatibilitet - JPG fungerar på alla enheter och plattformar",
        "Mindre Filstorlek - Effektiv komprimering för snabbare delning",
        "Brett Stöd - Mest använda bildformatet i världen",
        "Enkel Delning - Kompatibel med alla e-postklienter och sociala medier",
        "Webbredo - Idealiskt för webbplatser, sociala medier och onlineanvändning",
        "Hög Kvalitet - Bevarar originalbildens upplösning",
      ],
    },
    },

    faq: {
      title: "Vanliga Frågor – HEIC till JPG",
      items: [
        {
          q: "Är det gratis att konvertera HEIC till JPG?",
          a: "Ja! Vår HEIC till JPG-konverterare är helt gratis utan dolda avgifter. Du kan konvertera obegränsat antal filer utan registrering eller prenumeration.",
        },
        {
          q: "Är mina data säkra?",
          a: "Absolut. Alla konverteringar sker säkert på våra servrar med SSL-kryptering. Dina filer raderas automatiskt direkt efter konvertering. Vi lagrar, delar eller öppnar aldrig dina filer.",
        },
        {
          q: "Vad är den maximala filstorleken?",
          a: "Du kan konvertera HEIC-filer upp till 100MB vardera. För batchkonvertering kan du bearbeta upp till 20 filer samtidigt med en total gräns på 100MB.",
        },
        {
          q: "Stöder ni batchkonvertering?",
          a: "Ja! Du kan ladda upp och konvertera upp till 20 HEIC-filer samtidigt. Alla konverterade JPG:er kommer att vara tillgängliga för nedladdning som individuella filer eller i ett enda ZIP-arkiv.",
        },
        {
          q: "Kommer kvaliteten att bevaras?",
          a: "Ja, vi bevarar hög bildkvalitet under konvertering. Dina HEIC-foton kommer att konverteras till högupplösta JPG:er med minimal kvalitetsförlust.",
        },
        {
          q: "Kan jag konvertera HEIC direkt från iPhone?",
          a: "Ja! Vår konverterare fungerar perfekt med foton tagna på iPhone, iPad eller vilken Apple-enhet som helst. Ladda bara upp dina HEIC-filer från ditt kamerarull.",
        },
        {
          q: "Behöver jag installera någon programvara?",
          a: "Ingen installation behövs. Vår onlinekonverterare fungerar direkt i din webbläsare på vilken enhet som helst - Windows, Mac, Linux, iOS eller Android.",
        },
        {
          q: "Hur lång tid tar konverteringen?",
          a: "Konvertering är nästan omedelbar! De flesta HEIC-filer konverteras till JPG på bara några sekunder, beroende på filstorleken och din internetanslutning.",
        },
      ],
    },

    related: {
    title: "Relaterade Konverterare",
    converters: [
      { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
      { name: "HEIC till PNG", url: "/convert/heic-to-png" },
      { name: "JPG till PDF", url: "/convert/jpg-to-pdf" },
      { name: "PNG till JPG", url: "/convert/png-to-jpg" },
      { name: "WEBP till JPG", url: "/convert/webp-to-jpg" },
      { name: "HEIC till WEBP", url: "/convert/heic-to-webp" },
    ],
    },
  },

  // HEIC to WebP Converter
  heicToWebp: {
    title: "HEIC till WebP-konverterare - Konvertera Apple-foton gratis online till WebP",
    metaDescription:
      "Konvertera HEIC-bilder direkt till WebP-format. Gratis online HEIC till WebP-konverterare med batchbearbetning. Snabb, säker och ingen registrering krävs. Fungerar med iPhone- och iPad-foton.",
    metaKeywords:
      "HEIC till WebP, konvertera HEIC, Apple foton till WebP, iPhone foton till WebP, HEIC-konverterare, bild till WebP, batch konvertera HEIC, gratis HEIC-konverterare",

    hero: {
      title: "HEIC till WebP-konverterare",
      subtitle:
        "Konvertera dina Apple HEIC-foton direkt till moderna WebP-bilder. Gratis, snabb och säker konvertering utan filstorleksbegränsningar.",
      badge1: "Blixtsnabb",
      badge2: "100% Säker",
      badge3: "Ingen Registrering",
    },

    upload: {
      title: "Ladda upp HEIC-filer",
      description:
        "Dra och släpp dina HEIC-foton här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batch Konvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner WebP",
      downloadAll: "Ladda ner Alla som ZIP",
      convertAnother: "Konvertera Annan Fil",
    },

    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ HEIC till WebP-konvertering",
        "Batchbearbetning upp till 20 filer",
        "Överlägsen komprimering med kvalitetsbevarande",
        "Ingen filstorleksbegränsning",
        "100% säker och privat",
        "Fungerar med iPhone- och iPad-foton",
        "Omedelbar nedladdning efter konvertering",
        "Inga vattenstämplar tillagda",
      ],
    },

    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp HEIC-filer",
      step1Desc: "Välj en eller flera HEIC-foton från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer direkt",
      step3Title: "Ladda ner WebP",
      step3Desc: "Få dina konverterade WebP-filer direkt",
    },

    about: {
      title: "Om HEIC till WebP-konvertering",
      whatIsHeic: {
        title: "Vad är HEIC-formatet?",
        content:
          "HEIC (High Efficiency Image Container) är standardfotoformatet som används av Apple-enheter sedan iOS 11. Det erbjuder överlägsen komprimering samtidigt som den höga bildkvaliteten bevaras, vilket gör att foton tar mindre lagringsutrymme på din iPhone eller iPad.",
      },
      whyConvert: {
        title: "Varför konvertera HEIC till WebP?",
        content:
          "WebP är ett modernt bildformat utvecklat av Google som ger överlägsen komprimering jämfört med PNG och JPG medan utmärkt kvalitet bibehålls. Att konvertera HEIC till WebP ger mindre filstorlekar perfekta för webbanvändning, snabbare sidladdningar och bättre SEO-prestanda. WebP stöds av alla moderna webbläsare och är idealiskt för webbplatser, progressiva webbappar och onlinedelning.",
      },
      benefits: {
        title: "Fördelar med Vår Konverterare",
        list: [
          "Överlägsen Komprimering - Filer 25-35% mindre än PNG/JPG med samma kvalitet",
          "Webboptimerad - Perfekt för webbplatser, PWAs och onlineplattformar",
          "Modernt Format - Stöds av alla större webbläsare och plattformar",
          "Snabbare Laddning - Mindre filer betyder snabbare sidladdningstider",
          "SEO-vänlig - Förbättrar webbplatsens prestandamätvärden",
          "Kvalitet Bevarad - Utmärkt visuell kvalitet med effektiv komprimering",
        ],
      },
    },

    faq: {
      title: "Vanliga Frågor – HEIC till WebP",
      items: [
        {
          q: "Är det gratis att konvertera HEIC till WebP?",
          a: "Ja! Vår HEIC till WebP-konverterare är helt gratis. Du kan konvertera HEIC-bilder till WebP utan registrering, prenumerationer eller dolda avgifter.",
        },
        {
          q: "Kommer kvaliteten att bevaras när HEIC konverteras till WebP?",
          a: "Ja. WebP-formatet ger utmärkt bildkvalitet med överlägsen komprimering. Dina HEIC-foton konverteras till högkvalitativa WebP-filer med minimal kvalitetsförlust.",
        },
        {
          q: "Kan jag konvertera HEIC-foton från iPhone till WebP?",
          a: "Ja. Du kan konvertera HEIC-foton tagna på iPhone, iPad eller vilken Apple-enhet som helst direkt till WebP. Ladda bara upp dina HEIC-filer och konvertera dem direkt online.",
        },
        {
          q: "Behöver jag installera programvara för att konvertera HEIC till WebP?",
          a: "Ingen installation behövs. HEIC till WebP-konverteraren fungerar helt online i din webbläsare på Windows, macOS, Linux, iOS och Android.",
        },
      ],
    },

    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "HEIC till JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC till WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to AVIF Converter
  heicToAvif: {
    title: "HEIC till AVIF-konverterare - Konvertera Apple-foton gratis online till AVIF",
    metaDescription:
      "Konvertera HEIC-bilder direkt till AVIF-format. Gratis online HEIC till AVIF-konverterare med batchbearbetning. Snabb, säker och ingen registrering krävs. Fungerar med iPhone- och iPad-foton.",
    metaKeywords:
      "HEIC till AVIF, konvertera HEIC, Apple-foton till AVIF, iPhone-foton till AVIF, HEIC-konverterare, bild till AVIF, batchkonvertering HEIC, gratis HEIC-konverterare",

    hero: {
      title: "HEIC till AVIF-konverterare",
      subtitle:
        "Förvandla dina Apple HEIC-foton till AVIF-bilder av nästa generation direkt. Gratis, snabb och säker konvertering utan filstorleksbegränsningar.",
      badge1: "Blixtsnabb",
      badge2: "100% Säker",
      badge3: "Ingen Registrering",
    },

    upload: {
      title: "Ladda upp HEIC-filer",
      description:
        "Dra och släpp dina HEIC-foton här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batchkonvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner AVIF",
      downloadAll: "Ladda ner Allt som ZIP",
      convertAnother: "Konvertera Ytterligare Fil",
    },

    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ HEIC till AVIF-konvertering",
        "Batchbearbetning upp till 20 filer",
        "Bästa komprimering med kvalitetsbevarande",
        "Inga filstorleksbegränsningar",
        "100% säker och privat",
        "Fungerar med iPhone & iPad-foton",
        "Omedelbar nedladdning efter konvertering",
        "Inga vattenstämplar tillagda",
      ],
    },

    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp HEIC-filer",
      step1Desc: "Välj en eller flera HEIC-foton från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer direkt",
      step3Title: "Ladda ner AVIF",
      step3Desc: "Få dina konverterade AVIF-filer omedelbart",
    },

    about: {
      title: "Om HEIC till AVIF-konvertering",
      whatIsHeic: {
        title: "Vad är HEIC-formatet?",
        content:
          "HEIC (High Efficiency Image Container) är standardfotoformatet som används av Apple-enheter sedan iOS 11. Det erbjuder överlägsen komprimering samtidigt som det behåller hög bildkvalitet, vilket gör att foton tar mindre lagringsutrymme på din iPhone eller iPad.",
      },
      whyConvert: {
        title: "Varför Konvertera HEIC till AVIF?",
        content:
          "AVIF (AV1 Image File Format) är det senaste bildformatet utvecklat av Alliance for Open Media, som erbjuder ännu bättre komprimering än WebP och JPEG samtidigt som det behåller överlägsen kvalitet. Att konvertera HEIC till AVIF resulterar i de minsta möjliga filstorlekarna för webbanvändning, dramatiskt snabbare sidladdningstider och utmärkt SEO-prestanda. AVIF stöds av moderna webbläsare och är idealiskt för banbrytande webbplatser, progressiva webbappar och högpresterande onlineplattformar.",
      },
      benefits: {
        title: "Fördelar med Vår Konverterare",
        list: [
          "Bästa Komprimering - Filer upp till 50% mindre än JPEG med samma eller bättre kvalitet",
          "Nästa Generations Format - Framtiden för webbbilder med branschstöd",
          "Överlägsen Kvalitet - Utmärkt visuell kvalitet även vid mycket hög komprimering",
          "Snabbare Laddning - Mindre filer betyder betydligt snabbare sidladdningstider",
          "SEO-Optimerad - Förbättrar Core Web Vitals och sökrankningar",
          "Kvalitet Bevarad - Utmärkt visuell kvalitet med maximal komprimerings effektivitet",
        ],
      },
    },

    faq: {
      title: "Vanliga Frågor – HEIC till AVIF",
      items: [
        {
          q: "Är det gratis att konvertera HEIC till AVIF?",
          a: "Ja! Vår HEIC till AVIF-konverterare är helt gratis. Du kan konvertera HEIC-bilder till AVIF utan registrering, prenumerationer eller dolda avgifter.",
        },
        {
          q: "Kommer kvaliteten att bevaras när HEIC konverteras till AVIF?",
          a: "Ja. AVIF-formatet ger utmärkt bildkvalitet med avancerad komprimering. Dina HEIC-foton konverteras till högkvalitativa AVIF-filer med minimal kvalitetsförlust och betydligt mindre filstorlekar.",
        },
        {
          q: "Kan jag konvertera HEIC-foton från iPhone till AVIF?",
          a: "Ja. Du kan konvertera HEIC-foton tagna på iPhone, iPad eller vilken Apple-enhet som helst direkt till AVIF.",
        },
        {
          q: "Behöver jag installera programvara för att konvertera HEIC till AVIF?",
          a: "Ingen installation krävs. Konverteraren fungerar helt online i din webbläsare på vilken enhet som helst.",
        },
      ],
    },

    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "HEIC till JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC till WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to TIFF Converter
  heicToTiff: {
    title: "HEIC till TIFF-konverterare - Konvertera Apple-foton gratis online till TIFF",
    metaDescription:
      "Konvertera HEIC-bilder direkt till TIFF-format. Gratis online HEIC till TIFF-konverterare med batchbearbetning. Snabb, säker och ingen registrering krävs. Fungerar med iPhone- och iPad-foton.",
    metaKeywords:
      "HEIC till TIFF, konvertera HEIC, Apple-foton till TIFF, iPhone-foton till TIFF, HEIC-konverterare, bild till TIFF, batchkonvertering HEIC, gratis HEIC-konverterare",

    hero: {
      title: "HEIC till TIFF-konverterare",
      subtitle:
        "Förvandla dina Apple HEIC-foton till TIFF-bilder av nästa generation direkt. Gratis, snabb och säker konvertering utan filstorleksbegränsningar.",
      badge1: "Blixtsnabb",
      badge2: "100% Säker",
      badge3: "Ingen Registrering",
    },

    upload: {
      title: "Ladda upp HEIC-filer",
      description:
        "Dra och släpp dina HEIC-foton här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batchkonvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner TIFF",
      downloadAll: "Ladda ner Allt som ZIP",
      convertAnother: "Konvertera Ytterligare Fil",
    },

    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ HEIC till TIFF-konvertering",
        "Batchbearbetning upp till 20 filer",
        "Bästa komprimering med kvalitetsbevarande",
        "Inga filstorleksbegränsningar",
        "100% säker och privat",
        "Fungerar med iPhone & iPad-foton",
        "Omedelbar nedladdning efter konvertering",
        "Inga vattenstämplar tillagda",
      ],
    },

    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp HEIC-filer",
      step1Desc: "Välj en eller flera HEIC-foton från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer direkt",
      step3Title: "Ladda ner TIFF",
      step3Desc: "Få dina konverterade TIFF-filer omedelbart",
    },

    about: {
      title: "Om HEIC till TIFF-konvertering",
      whatIsHeic: {
        title: "Vad är HEIC-formatet?",
        content:
          "HEIC (High Efficiency Image Container) är standardfotoformatet som används av Apple-enheter sedan iOS 11. Det erbjuder överlägsen komprimering samtidigt som det behåller hög bildkvalitet, vilket gör att foton tar mindre lagringsutrymme på din iPhone eller iPad.",
      },
      whyConvert: {
        title: "Varför Konvertera HEIC till TIFF?",
        content:
          "TIFF (AV1 Image File Format) är det senaste bildformatet utvecklat av Alliance for Open Media, som erbjuder ännu bättre komprimering än WebP och JPEG samtidigt som det behåller överlägsen kvalitet. Att konvertera HEIC till TIFF resulterar i de minsta möjliga filstorlekarna för webbanvändning, dramatiskt snabbare sidladdningstider och utmärkt SEO-prestanda. TIFF stöds av moderna webbläsare och är idealiskt för banbrytande webbplatser, progressiva webbappar och högpresterande onlineplattformar.",
      },
      benefits: {
        title: "Fördelar med Vår Konverterare",
        list: [
          "Bästa Komprimering - Filer upp till 50% mindre än JPEG med samma eller bättre kvalitet",
          "Nästa Generations Format - Framtiden för webbbilder med branschstöd",
          "Överlägsen Kvalitet - Utmärkt visuell kvalitet även vid mycket hög komprimering",
          "Snabbare Laddning - Mindre filer betyder betydligt snabbare sidladdningstider",
          "SEO-Optimerad - Förbättrar Core Web Vitals och sökrankningar",
          "Kvalitet Bevarad - Utmärkt visuell kvalitet med maximal komprimerings effektivitet",
        ],
      },
    },

    faq: {
      title: "Vanliga Frågor – HEIC till TIFF",
      items: [
        {
          q: "Är det gratis att konvertera HEIC till TIFF?",
          a: "Ja! Vår HEIC till TIFF-konverterare är helt gratis. Du kan konvertera HEIC-bilder till TIFF utan registrering, prenumerationer eller dolda avgifter.",
        },
        {
          q: "Kommer kvaliteten att bevaras när HEIC konverteras till TIFF?",
          a: "Ja. TIFF-formatet ger utmärkt bildkvalitet med avancerad komprimering. Dina HEIC-foton konverteras till högkvalitativa TIFF-filer med minimal kvalitetsförlust och betydligt mindre filstorlekar.",
        },
        {
          q: "Kan jag konvertera HEIC-foton från iPhone till TIFF?",
          a: "Ja. Du kan konvertera HEIC-foton tagna på iPhone, iPad eller vilken Apple-enhet som helst direkt till TIFF.",
        },
        {
          q: "Behöver jag installera programvara för att konvertera HEIC till TIFF?",
          a: "Ingen installation krävs. Konverteraren fungerar helt online i din webbläsare på vilken enhet som helst.",
        },
      ],
    },

    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "HEIC till JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC till WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to GIF Converter
  heicToGif: {
    title: "HEIC till GIF-konverterare - Konvertera Apple-foton gratis online till GIF",
    metaDescription:
      "Konvertera HEIC-bilder direkt till GIF-format. Gratis online HEIC till GIF-konverterare med batchbearbetning. Snabb, säker och ingen registrering krävs. Fungerar med iPhone- och iPad-foton.",
    metaKeywords:
      "HEIC till GIF, konvertera HEIC, Apple-foton till GIF, iPhone-foton till GIF, HEIC-konverterare, bild till GIF, batch konvertera HEIC, gratis HEIC-konverterare",
    hero: {
      title: "HEIC till GIF-konverterare",
      subtitle:
        "Förvandla dina Apple HEIC-foton till animerade eller statiska GIF-bilder direkt. Gratis, snabb och säker konvertering utan filstorleksbegränsningar.",
      badge1: "Blixtsnabb",
      badge2: "100% Säker",
      badge3: "Ingen Registrering",
    },
    upload: {
      title: "Ladda Upp HEIC Filer",
      description:
        "Dra och släpp dina HEIC-foton här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batch Konvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda Ner GIF",
      downloadAll: "Ladda Ner Alla som ZIP",
      convertAnother: "Konvertera En Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ HEIC till GIF-konvertering",
        "Batchbearbetning upp till 20 filer",
        "Bevarar bildkvalitet",
        "Inga filstorleksbegränsningar",
        "100% säker och privat",
        "Fungerar med iPhone- och iPad-foton",
        "Omedelbar nedladdning efter konvertering",
        "Inga vattenstämplar tillagda",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda Upp HEIC Filer",
      step1Desc: "Välj en eller flera HEIC-foton från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer direkt",
      step3Title: "Ladda Ner GIF",
      step3Desc: "Få dina konverterade GIF-filer omedelbart",
    },
    about: {
      title: "Om HEIC till GIF-konvertering",
      whatIsHeic: {
        title: "Vad är HEIC-formatet?",
        content:
          "HEIC (High Efficiency Image Container) är standardfotoformatet som används av Apple-enheter sedan iOS 11. Det erbjuder överlägsen komprimering samtidigt som den höga bildkvaliteten bevaras, vilket gör att foton tar mindre lagringsutrymme på din iPhone eller iPad.",
      },
      whyConvert: {
        title: "Varför konvertera HEIC till GIF?",
        content:
          "GIF-formatet är perfekt för webbanvändning, sociala medier delning och skapande av animerade bilder. Att konvertera HEIC till GIF säkerställer att dina foton enkelt kan delas online, bäddas in i webbplatser och visas på vilken plattform som helst. GIF-filer stöds brett och är perfekta för att skapa enkla animationer eller statiska bilder med bred kompatibilitet.",
      },
      benefits: {
        title: "Fördelar med Vår Konverterare",
        list: [
          "Webboptimerad - GIF-formatet är perfekt för webb och sociala medier",
          "Universell Kompatibilitet - GIF-filer fungerar överallt",
          "Små Filstorlekar - Effektiv komprimering för snabb laddning",
          "Enkel Delning - Dela GIF-filer på vilken plattform eller socialt nätverk som helst",
          "Animationsstöd - Skapa animerade GIF-filer från flera bilder",
          "Ingen Kvalitetsförlust - Bevara visuell kvalitet i GIF-format",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – HEIC till GIF",
      items: [
        {
          q: "Är det gratis att konvertera HEIC till GIF?",
          a: "Ja! Vår HEIC till GIF-konverterare är helt gratis. Du kan konvertera HEIC-bilder till GIF utan registrering, prenumerationer eller dolda avgifter.",
        },
        {
          q: "Kan jag konvertera HEIC-foton från iPhone till GIF?",
          a: "Ja. Du kan konvertera HEIC-foton som tagits på iPhone, iPad eller vilken Apple-enhet som helst direkt till GIF. Ladda bara upp dina HEIC-filer från din enhet, och konverteringen fungerar direkt i din webbläsare.",
        },
        {
          q: "Kommer kvaliteten att bevaras vid konvertering av HEIC till GIF?",
          a: "Ja. Vi bevarar bildkvaliteten under konverteringen. Dina HEIC-foton konverteras till högkvalitativa GIF-filer med optimala komprimeringsinställningar för att balansera kvalitet och filstorlek.",
        },
        {
          q: "Vad är den maximala filstorleken för HEIC till GIF-konvertering?",
          a: "Du kan konvertera HEIC-filer upp till 100MB per fil. För batchkonvertering kan du ladda upp upp till 20 filer åt gången, med en total storleksgräns på 100MB.",
        },
        {
          q: "Varför bör jag konvertera HEIC till GIF i stället för andra format?",
          a: "GIF-formatet är idealiskt för webbanvändning, sociala medier och skapande av delbara bilder. Det stöds brett, laddas snabbt och är perfekt för inbäddning i webbplatser eller onlinedelning.",
        },
        {
          q: "Behöver jag installera programvara för att konvertera HEIC till GIF?",
          a: "Ingen installation krävs. HEIC till GIF-konverteraren fungerar helt online i din webbläsare på Windows, macOS, Linux, iOS och Android.",
        },
        {
          q: "Kan jag konvertera flera HEIC-filer till GIF samtidigt?",
          a: "Ja! Vår konverterare stöder batchbearbetning. Du kan ladda upp och konvertera upp till 20 HEIC-filer samtidigt. Alla konverterade GIF-filer kommer att vara tillgängliga för nedladdning som individuella filer eller i ett enda ZIP-arkiv.",
        },
        {
          q: "Kan jag skapa animerade GIF-filer från HEIC-filer?",
          a: "Vår konverterare skapar statiska GIF-filer från enskilda HEIC-bilder. För animerade GIF-filer skulle du behöva flera bilder kombinerade till en animation, vilket kräver ytterligare bearbetning.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "HEIC till JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC till WebP", url: "/convert/heic-to-webp" },
        { name: "PNG till GIF", url: "/convert/png-to-gif" },
        { name: "JPG till GIF", url: "/convert/jpg-to-gif" },
      ],
    },
  },

  // HEIF to JPG Converter
  heifToJpg: {
    title: "HEIF till JPG-konverterare - Konvertera HEIF-bilder Gratis Online till JPG",
    metaDescription:
      "Konvertera HEIF-bilder direkt till JPG-format. Gratis online HEIF till JPG-konverterare med batchbearbetning. Snabb, säker och ingen registrering krävs. Fungerar med HEIF-foton från alla enheter.",
    metaKeywords:
      "HEIF till JPG, konvertera HEIF, HEIF bilder till JPG, HEIF-konverterare, bild till JPG, batch konvertera HEIF, gratis HEIF-konverterare, HEIF vs HEIC",
    hero: {
      title: "HEIF till JPG-konverterare",
      subtitle:
        "Förvandla dina HEIF-bilder direkt till universellt JPG-format. Gratis, snabb och säker konvertering utan filstorleksbegränsningar. Perfekt för HEIF-foton från vilken enhet som helst.",
      badge1: "Blixtsnabb",
      badge2: "100% Säker",
      badge3: "Ingen Registrering",
    },
    upload: {
      title: "Ladda upp HEIF-filer",
      description:
        "Dra och släpp dina HEIF-bilder här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batch Konvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner JPG",
      downloadAll: "Ladda ner Alla som ZIP",
      convertAnother: "Konvertera Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ HEIF till JPG-konvertering",
        "Batchbearbetning upp till 20 filer",
        "Bevarar bildkvalitet",
        "Ingen filstorleksbegränsning",
        "100% säker och privat",
        "Fungerar med HEIF-foton från alla enheter",
        "Omedelbar nedladdning efter konvertering",
        "Inga vattenstämplar tillagda",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp HEIF-filer",
      step1Desc: "Välj en eller flera HEIF-bilder från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer direkt",
      step3Title: "Ladda ner JPG",
      step3Desc: "Få dina konverterade JPG-filer direkt",
    },
    about: {
      title: "Om HEIF till JPG-konvertering",
      whatIsHeif: {
        title: "Vad är HEIF-formatet?",
        content:
          "HEIF (High Efficiency Image Format) är ett modernt bildcontainerformat som använder HEVC (H.265) komprimering. Även om det liknar HEIC, är HEIF standardformatets namn, medan HEIC specifikt hänvisar till Apples implementering. HEIF erbjuder överlägsen komprimering jämfört med JPEG samtidigt som det behåller hög bildkvalitet, vilket gör det idealiskt för effektiv lagring av foton.",
      },
      whyConvert: {
        title: "Varför konvertera HEIF till JPG?",
        content:
          "Även om HEIF är effektivt och modernt, stöds det inte universellt på alla enheter och plattformar. Att konvertera HEIF till JPG säkerställer att dina bilder kan visas på vilken enhet som helst, enkelt delas via e-post, laddas upp till webbplatser och användas i vilken applikation som helst. JPG-formatet är det mest bredt stödda bildformatet i världen, vilket gör det idealiskt för maximal kompatibilitet och delning.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Vad är Skillnaden?",
        content:
          "HEIF (High Efficiency Image Format) är containerformatets standard, medan HEIC (High Efficiency Image Container) är Apples specifika implementering av HEIF. I praktiken är de mycket lika - båda använder samma komprimerings teknologi och erbjuder samma fördelar. Apple-enheter sparar foton som HEIC-filer, som faktiskt är HEIF-kompatibla. Vår konverterare hanterar båda formaten sömlöst, så du kan konvertera vilken HEIF/HEIC-bild som helst till JPG-format.",
      },
      benefits: {
        title: "Fördelar med Vår Konverterare",
        list: [
          "Universell Kompatibilitet - JPG fungerar på alla enheter och plattformar",
          "Mindre Filstorlek - Effektiv komprimering för snabbare delning",
          "Brett Stöd - Mest använda bildformatet i världen",
          "Enkel Delning - Kompatibel med alla e-postklienter och sociala medier",
          "Webbredo - Idealiskt för webbplatser, sociala medier och onlineanvändning",
          "Hög Kvalitet - Bevarar originalbildens upplösning",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – HEIF till JPG",
      items: [
        {
          q: "Är det gratis att konvertera HEIF till JPG?",
          a: "Ja! Vår HEIF till JPG-konverterare är helt gratis utan dolda avgifter. Du kan konvertera obegränsat antal filer utan registrering eller prenumeration.",
        },
        {
          q: "Vad är skillnaden mellan HEIF och HEIC?",
          a: "HEIF (High Efficiency Image Format) är standardformatets namn, medan HEIC (High Efficiency Image Container) är Apples specifika implementering. De använder samma komprimerings teknologi och är funktionellt mycket lika. Vår konverterare hanterar båda formaten sömlöst.",
        },
        {
          q: "Är mina data säkra?",
          a: "Absolut. Alla konverteringar sker säkert på våra servrar med SSL-kryptering. Dina filer raderas automatiskt direkt efter konvertering. Vi lagrar, delar eller öppnar aldrig dina filer.",
        },
        {
          q: "Vad är den maximala filstorleken?",
          a: "Du kan konvertera HEIF-filer upp till 100MB vardera. För batchkonvertering kan du bearbeta upp till 20 filer samtidigt med en total gräns på 100MB.",
        },
        {
          q: "Stöder ni batchkonvertering?",
          a: "Ja! Du kan ladda upp och konvertera upp till 20 HEIF-filer samtidigt. Alla konverterade JPG:er kommer att vara tillgängliga för nedladdning som individuella filer eller i ett enda ZIP-arkiv.",
        },
        {
          q: "Kommer kvaliteten att bevaras?",
          a: "Ja, vi bevarar hög bildkvalitet under konvertering. Dina HEIF-bilder kommer att konverteras till högupplösta JPG:er med minimal kvalitetsförlust.",
        },
        {
          q: "Kan jag konvertera HEIF från vilken enhet som helst?",
          a: "Ja! Vår konverterare fungerar med HEIF-bilder från vilken enhet eller kamera som helst som stöder HEIF-formatet, inte bara Apple-enheter. Ladda bara upp dina HEIF-filer och konvertera dem till JPG.",
        },
        {
          q: "Behöver jag installera någon programvara?",
          a: "Ingen installation behövs. Vår onlinekonverterare fungerar direkt i din webbläsare på vilken enhet som helst - Windows, Mac, Linux, iOS eller Android.",
        },
        {
          q: "Hur lång tid tar konverteringen?",
          a: "Konvertering är nästan omedelbar! De flesta HEIF-filer konverteras till JPG på bara några sekunder, beroende på filstorleken och din internetanslutning.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "HEIF till PNG", url: "/convert/heif-to-png" },
        { name: "JPG till PDF", url: "/convert/jpg-to-pdf" },
        { name: "PNG till JPG", url: "/convert/png-to-jpg" },
      ],
    },
  },

  // HEIF to TIFF Converter
  heifToTiff: {
    title: "HEIF till TIFF-konverterare - Konvertera HEIF-bilder Gratis Online till TIFF",
    metaDescription:
      "Konvertera HEIF-bilder direkt till TIFF-format. Gratis online HEIF till TIFF-konverterare med batchbearbetning. Snabb, säker och ingen registrering krävs. Fungerar med HEIF-foton från alla enheter.",
    metaKeywords:
      "HEIF till TIFF, konvertera HEIF, HEIF bilder till TIFF, HEIF-konverterare, bild till TIFF, batch konvertera HEIF, gratis HEIF-konverterare, HEIF vs HEIC",
    hero: {
      title: "HEIF till TIFF-konverterare",
      subtitle:
        "Förvandla dina HEIF-bilder direkt till universellt TIFF-format. Gratis, snabb och säker konvertering utan filstorleksbegränsningar. Perfekt för HEIF-foton från vilken enhet som helst.",
      badge1: "Blixtsnabb",
      badge2: "100% Säker",
      badge3: "Ingen Registrering",
    },
    upload: {
      title: "Ladda upp HEIF-filer",
      description:
        "Dra och släpp dina HEIF-bilder här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batch Konvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner TIFF",
      downloadAll: "Ladda ner Alla som ZIP",
      convertAnother: "Konvertera Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ HEIF till TIFF-konvertering",
        "Batchbearbetning upp till 20 filer",
        "Bevarar bildkvalitet",
        "Ingen filstorleksbegränsning",
        "100% säker och privat",
        "Fungerar med HEIF-foton från alla enheter",
        "Omedelbar nedladdning efter konvertering",
        "Inga vattenstämplar tillagda",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp HEIF-filer",
      step1Desc: "Välj en eller flera HEIF-bilder från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer direkt",
      step3Title: "Ladda ner TIFF",
      step3Desc: "Få dina konverterade TIFF-filer direkt",
    },
    about: {
      title: "Om HEIF till TIFF-konvertering",
      whatIsHeif: {
        title: "Vad är HEIF-formatet?",
        content:
          "HEIF (High Efficiency Image Format) är ett modernt bildcontainerformat som använder HEVC (H.265) komprimering. Även om det liknar HEIC, är HEIF standardformatets namn, medan HEIC specifikt hänvisar till Apples implementering. HEIF erbjuder överlägsen komprimering jämfört med TIFF samtidigt som det behåller hög bildkvalitet, vilket gör det idealiskt för effektiv lagring av foton.",
      },
      whyConvert: {
        title: "Varför konvertera HEIF till TIFF?",
        content:
          "Även om HEIF är effektivt och modernt, stöds det inte universellt på alla enheter och plattformar. Att konvertera HEIF till TIFF säkerställer att dina bilder kan visas på vilken enhet som helst, enkelt delas via e-post, laddas upp till webbplatser och användas i vilken applikation som helst. TIFF-formatet är det mest bredt stödda bildformatet i världen, vilket gör det idealiskt för maximal kompatibilitet och delning.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Vad är Skillnaden?",
        content:
          "HEIF (High Efficiency Image Format) är containerformatets standard, medan HEIC (High Efficiency Image Container) är Apples specifika implementering av HEIF. I praktiken är de mycket lika - båda använder samma komprimerings teknologi och erbjuder samma fördelar. Apple-enheter sparar foton som HEIC-filer, som faktiskt är HEIF-kompatibla. Vår konverterare hanterar båda formaten sömlöst, så du kan konvertera vilken HEIF/HEIC-bild som helst till TIFF-format.",
      },
      benefits: {
        title: "Fördelar med Vår Konverterare",
        list: [
          "Universell Kompatibilitet - TIFF fungerar på alla enheter och plattformar",
          "Mindre Filstorlek - Effektiv komprimering för snabbare delning",
          "Brett Stöd - Mest använda bildformatet i världen",
          "Enkel Delning - Kompatibel med alla e-postklienter och sociala medier",
          "Webbredo - Idealiskt för webbplatser, sociala medier och onlineanvändning",
          "Hög Kvalitet - Bevarar originalbildens upplösning",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – HEIF till TIFF",
      items: [
        {
          q: "Är det gratis att konvertera HEIF till TIFF?",
          a: "Ja! Vår HEIF till TIFF-konverterare är helt gratis utan dolda avgifter. Du kan konvertera obegränsat antal filer utan registrering eller prenumeration.",
        },
        {
          q: "Vad är skillnaden mellan HEIF och HEIC?",
          a: "HEIF (High Efficiency Image Format) är standardformatets namn, medan HEIC (High Efficiency Image Container) är Apples specifika implementering. De använder samma komprimerings teknologi och är funktionellt mycket lika. Vår konverterare hanterar båda formaten sömlöst.",
        },
        {
          q: "Är mina data säkra?",
          a: "Absolut. Alla konverteringar sker säkert på våra servrar med SSL-kryptering. Dina filer raderas automatiskt direkt efter konvertering. Vi lagrar, delar eller öppnar aldrig dina filer.",
        },
        {
          q: "Vad är den maximala filstorleken?",
          a: "Du kan konvertera HEIF-filer upp till 100MB vardera. För batchkonvertering kan du bearbeta upp till 20 filer samtidigt med en total gräns på 100MB.",
        },
        {
          q: "Stöder ni batchkonvertering?",
          a: "Ja! Du kan ladda upp och konvertera upp till 20 HEIF-filer samtidigt. Alla konverterade TIFF:er kommer att vara tillgängliga för nedladdning som individuella filer eller i ett enda ZIP-arkiv.",
        },
        {
          q: "Kommer kvaliteten att bevaras?",
          a: "Ja, vi bevarar hög bildkvalitet under konvertering. Dina HEIF-bilder kommer att konverteras till högupplösta TIFF:er med minimal kvalitetsförlust.",
        },
        {
          q: "Kan jag konvertera HEIF från vilken enhet som helst?",
          a: "Ja! Vår konverterare fungerar med HEIF-bilder från vilken enhet eller kamera som helst som stöder HEIF-formatet, inte bara Apple-enheter. Ladda bara upp dina HEIF-filer och konvertera dem till TIFF.",
        },
        {
          q: "Behöver jag installera någon programvara?",
          a: "Ingen installation behövs. Vår onlinekonverterare fungerar direkt i din webbläsare på vilken enhet som helst - Windows, Mac, Linux, iOS eller Android.",
        },
        {
          q: "Hur lång tid tar konverteringen?",
          a: "Konvertering är nästan omedelbar! De flesta HEIF-filer konverteras till TIFF på bara några sekunder, beroende på filstorleken och din internetanslutning.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till TIFF", url: "/convert/heic-to-tiff" },
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "HEIF till PNG", url: "/convert/heif-to-png" },
        { name: "TIFF till PDF", url: "/convert/tiff-to-pdf" },
        { name: "PNG till TIFF", url: "/convert/png-to-tiff" },
      ],
    },
  },
  // HEIF to AVIF Converter
  heifToAvif: {
    title: "HEIF till AVIF Omvandlare - Konvertera till Nästa Generations AV1 Bildformat",
    metaDescription:
      "Konvertera HEIF till AVIF för banbrytande komprimering. 50% mindre än JPEG, 20% mindre än WebP. Royaltyfritt AV1-format med HDR-stöd. Används av Netflix och YouTube. Gratis batchomvandlare.",
    metaKeywords:
      "HEIF till AVIF, AV1 bildformat, nästa generations komprimering, HDR bilder, royaltyfritt format, AVIF vs WebP, batchkonvertering HEIF, modernt bildformat",
    hero: {
      title: "HEIF till AVIF-konverterare",
      subtitle:
        "Förvandla dina HEIF-bilder direkt till universellt AVIF-format. Gratis, snabb och säker konvertering utan filstorleksbegränsningar. Perfekt för HEIF-foton från vilken enhet som helst.",
      badge1: "Blixtsnabb",
      badge2: "100% Säker",
      badge3: "Ingen Registrering",
    },
    upload: {
      title: "Ladda upp HEIF-filer",
      description:
        "Dra och släpp dina HEIF-bilder här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batch Konvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner AVIF",
      downloadAll: "Ladda ner Alla som ZIP",
      convertAnother: "Konvertera Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ HEIF till AVIF-konvertering",
        "Batchbearbetning upp till 20 filer",
        "Bevarar bildkvalitet",
        "Ingen filstorleksbegränsning",
        "100% säker och privat",
        "Fungerar med HEIF-foton från alla enheter",
        "Omedelbar nedladdning efter konvertering",
        "Inga vattenstämplar tillagda",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp HEIF-filer",
      step1Desc: "Välj en eller flera HEIF-bilder från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer direkt",
      step3Title: "Ladda ner AVIF",
      step3Desc: "Få dina konverterade AVIF-filer direkt",
    },
    about: {
      title: "Om HEIF till AVIF-konvertering",
      whatIsHeif: {
        title: "Vad är HEIF-formatet?",
        content:
          "HEIF (High Efficiency Image Format) är ett modernt bildcontainerformat som använder HEVC (H.265) komprimering. Även om det liknar HEIC, är HEIF standardformatets namn, medan HEIC specifikt hänvisar till Apples implementering. HEIF erbjuder överlägsen komprimering jämfört med AVIF samtidigt som det behåller hög bildkvalitet, vilket gör det idealiskt för effektiv lagring av foton.",
      },
      whyConvert: {
        title: "Varför konvertera HEIF till AVIF?",
        content:
          "Även om HEIF är effektivt och modernt, stöds det inte universellt på alla enheter och plattformar. Att konvertera HEIF till AVIF säkerställer att dina bilder kan visas på vilken enhet som helst, enkelt delas via e-post, laddas upp till webbplatser och användas i vilken applikation som helst. AVIF-formatet är det mest bredt stödda bildformatet i världen, vilket gör det idealiskt för maximal kompatibilitet och delning.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Vad är Skillnaden?",
        content:
          "HEIF (High Efficiency Image Format) är containerformatets standard, medan HEIC (High Efficiency Image Container) är Apples specifika implementering av HEIF. I praktiken är de mycket lika - båda använder samma komprimerings teknologi och erbjuder samma fördelar. Apple-enheter sparar foton som HEIC-filer, som faktiskt är HEIF-kompatibla. Vår konverterare hanterar båda formaten sömlöst, så du kan konvertera vilken HEIF/HEIC-bild som helst till AVIF-format.",
      },
      benefits: {
        title: "Fördelar med Vår Konverterare",
        list: [
          "Universell Kompatibilitet - AVIF fungerar på alla enheter och plattformar",
          "Mindre Filstorlek - Effektiv komprimering för snabbare delning",
          "Brett Stöd - Mest använda bildformatet i världen",
          "Enkel Delning - Kompatibel med alla e-postklienter och sociala medier",
          "Webbredo - Idealiskt för webbplatser, sociala medier och onlineanvändning",
          "Hög Kvalitet - Bevarar originalbildens upplösning",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – HEIF till AVIF",
      items: [
        {
          q: "Är det gratis att konvertera HEIF till AVIF?",
          a: "Ja! Vår HEIF till AVIF-konverterare är helt gratis utan dolda avgifter. Du kan konvertera obegränsat antal filer utan registrering eller prenumeration.",
        },
        {
          q: "Vad är skillnaden mellan HEIF och HEIC?",
          a: "HEIF (High Efficiency Image Format) är standardformatets namn, medan HEIC (High Efficiency Image Container) är Apples specifika implementering. De använder samma komprimerings teknologi och är funktionellt mycket lika. Vår konverterare hanterar båda formaten sömlöst.",
        },
        {
          q: "Är mina data säkra?",
          a: "Absolut. Alla konverteringar sker säkert på våra servrar med SSL-kryptering. Dina filer raderas automatiskt direkt efter konvertering. Vi lagrar, delar eller öppnar aldrig dina filer.",
        },
        {
          q: "Vad är den maximala filstorleken?",
          a: "Du kan konvertera HEIF-filer upp till 100MB vardera. För batchkonvertering kan du bearbeta upp till 20 filer samtidigt med en total gräns på 100MB.",
        },
        {
          q: "Stöder ni batchkonvertering?",
          a: "Ja! Du kan ladda upp och konvertera upp till 20 HEIF-filer samtidigt. Alla konverterade AVIF:er kommer att vara tillgängliga för nedladdning som individuella filer eller i ett enda ZIP-arkiv.",
        },
        {
          q: "Kommer kvaliteten att bevaras?",
          a: "Ja, vi bevarar hög bildkvalitet under konvertering. Dina HEIF-bilder kommer att konverteras till högupplösta AVIF:er med minimal kvalitetsförlust.",
        },
        {
          q: "Kan jag konvertera HEIF från vilken enhet som helst?",
          a: "Ja! Vår konverterare fungerar med HEIF-bilder från vilken enhet eller kamera som helst som stöder HEIF-formatet, inte bara Apple-enheter. Ladda bara upp dina HEIF-filer och konvertera dem till AVIF.",
        },
        {
          q: "Behöver jag installera någon programvara?",
          a: "Ingen installation behövs. Vår onlinekonverterare fungerar direkt i din webbläsare på vilken enhet som helst - Windows, Mac, Linux, iOS eller Android.",
        },
        {
          q: "Hur lång tid tar konverteringen?",
          a: "Konvertering är nästan omedelbar! De flesta HEIF-filer konverteras till AVIF på bara några sekunder, beroende på filstorleken och din internetanslutning.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till AVIF", url: "/convert/heic-to-avif" },
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "HEIF till PNG", url: "/convert/heif-to-png" },
        { name: "AVIF till PDF", url: "/convert/avif-to-pdf" },
        { name: "PNG till AVIF", url: "/convert/png-to-avif" },
      ],
    },
  },
  // HEIF to WebP Converter
  heifToWebp: {
    title: "HEIF till WebP Omvandlare - Konvertera till Modernt Webboptimerat Format",
    metaDescription:
      "Konvertera HEIF till WebP för överlägsen webbprestanda. 25-35% mindre filer än JPEG med bättre kvalitet. Googles nästa generations format med transparensstöd. Gratis batchomvandlare, ingen registrering.",
    metaKeywords:
      "HEIF till WebP, webboptimering, nästa generations format, Google WebP, lossy WebP, transparens WebP, batchkonvertering HEIF, modernt bildformat",
    hero: {
      title: "HEIF till WebP-konverterare",
      subtitle:
        "Förvandla dina HEIF-bilder direkt till universellt WebP-format. Gratis, snabb och säker konvertering utan filstorleksbegränsningar. Perfekt för HEIF-foton från vilken enhet som helst.",
      badge1: "Blixtsnabb",
      badge2: "100% Säker",
      badge3: "Ingen Registrering",
    },
    upload: {
      title: "Ladda upp HEIF-filer",
      description:
        "Dra och släpp dina HEIF-bilder här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batch Konvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner WebP",
      downloadAll: "Ladda ner Alla som ZIP",
      convertAnother: "Konvertera Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ HEIF till WebP-konvertering",
        "Batchbearbetning upp till 20 filer",
        "Bevarar bildkvalitet",
        "Ingen filstorleksbegränsning",
        "100% säker och privat",
        "Fungerar med HEIF-foton från alla enheter",
        "Omedelbar nedladdning efter konvertering",
        "Inga vattenstämplar tillagda",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp HEIF-filer",
      step1Desc: "Välj en eller flera HEIF-bilder från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer direkt",
      step3Title: "Ladda ner WebP",
      step3Desc: "Få dina konverterade WebP-filer direkt",
    },
    about: {
      title: "Om HEIF till WebP-konvertering",
      whatIsHeif: {
        title: "Vad är HEIF-formatet?",
        content:
          "HEIF (High Efficiency Image Format) är ett modernt bildcontainerformat som använder HEVC (H.265) komprimering. Även om det liknar HEIC, är HEIF standardformatets namn, medan HEIC specifikt hänvisar till Apples implementering. HEIF erbjuder överlägsen komprimering jämfört med WebP samtidigt som det behåller hög bildkvalitet, vilket gör det idealiskt för effektiv lagring av foton.",
      },
      whyConvert: {
        title: "Varför konvertera HEIF till WebP?",
        content:
          "Även om HEIF är effektivt och modernt, stöds det inte universellt på alla enheter och plattformar. Att konvertera HEIF till WebP säkerställer att dina bilder kan visas på vilken enhet som helst, enkelt delas via e-post, laddas upp till webbplatser och användas i vilken applikation som helst. WebP-formatet är det mest bredt stödda bildformatet i världen, vilket gör det idealiskt för maximal kompatibilitet och delning.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Vad är Skillnaden?",
        content:
          "HEIF (High Efficiency Image Format) är containerformatets standard, medan HEIC (High Efficiency Image Container) är Apples specifika implementering av HEIF. I praktiken är de mycket lika - båda använder samma komprimerings teknologi och erbjuder samma fördelar. Apple-enheter sparar foton som HEIC-filer, som faktiskt är HEIF-kompatibla. Vår konverterare hanterar båda formaten sömlöst, så du kan konvertera vilken HEIF/HEIC-bild som helst till WebP-format.",
      },
      benefits: {
        title: "Fördelar med Vår Konverterare",
        list: [
          "Universell Kompatibilitet - WebP fungerar på alla enheter och plattformar",
          "Mindre Filstorlek - Effektiv komprimering för snabbare delning",
          "Brett Stöd - Mest använda bildformatet i världen",
          "Enkel Delning - Kompatibel med alla e-postklienter och sociala medier",
          "Webbredo - Idealiskt för webbplatser, sociala medier och onlineanvändning",
          "Hög Kvalitet - Bevarar originalbildens upplösning",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – HEIF till WebP",
      items: [
        {
          q: "Är det gratis att konvertera HEIF till WebP?",
          a: "Ja! Vår HEIF till WebP-konverterare är helt gratis utan dolda avgifter. Du kan konvertera obegränsat antal filer utan registrering eller prenumeration.",
        },
        {
          q: "Vad är skillnaden mellan HEIF och HEIC?",
          a: "HEIF (High Efficiency Image Format) är standardformatets namn, medan HEIC (High Efficiency Image Container) är Apples specifika implementering. De använder samma komprimerings teknologi och är funktionellt mycket lika. Vår konverterare hanterar båda formaten sömlöst.",
        },
        {
          q: "Är mina data säkra?",
          a: "Absolut. Alla konverteringar sker säkert på våra servrar med SSL-kryptering. Dina filer raderas automatiskt direkt efter konvertering. Vi lagrar, delar eller öppnar aldrig dina filer.",
        },
        {
          q: "Vad är den maximala filstorleken?",
          a: "Du kan konvertera HEIF-filer upp till 100MB vardera. För batchkonvertering kan du bearbeta upp till 20 filer samtidigt med en total gräns på 100MB.",
        },
        {
          q: "Stöder ni batchkonvertering?",
          a: "Ja! Du kan ladda upp och konvertera upp till 20 HEIF-filer samtidigt. Alla konverterade WebP:er kommer att vara tillgängliga för nedladdning som individuella filer eller i ett enda ZIP-arkiv.",
        },
        {
          q: "Kommer kvaliteten att bevaras?",
          a: "Ja, vi bevarar hög bildkvalitet under konvertering. Dina HEIF-bilder kommer att konverteras till högupplösta WebP:er med minimal kvalitetsförlust.",
        },
        {
          q: "Kan jag konvertera HEIF från vilken enhet som helst?",
          a: "Ja! Vår konverterare fungerar med HEIF-bilder från vilken enhet eller kamera som helst som stöder HEIF-formatet, inte bara Apple-enheter. Ladda bara upp dina HEIF-filer och konvertera dem till WebP.",
        },
        {
          q: "Behöver jag installera någon programvara?",
          a: "Ingen installation behövs. Vår onlinekonverterare fungerar direkt i din webbläsare på vilken enhet som helst - Windows, Mac, Linux, iOS eller Android.",
        },
        {
          q: "Hur lång tid tar konverteringen?",
          a: "Konvertering är nästan omedelbar! De flesta HEIF-filer konverteras till WebP på bara några sekunder, beroende på filstorleken och din internetanslutning.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till WebP", url: "/convert/heic-to-webp" },
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "HEIF till PNG", url: "/convert/heif-to-png" },
        { name: "WebP till PDF", url: "/convert/webp-to-pdf" },
        { name: "PNG till WebP", url: "/convert/png-to-webp" },
      ],
    },
  },
  // HEIF to PDF Converter
  heifToPdf: {
    title: "HEIF till PDF Omvandlare - Skapa Universella PDF-Dokument från HEIF-Bilder",
    metaDescription:
      "Konvertera HEIF till PDF för universell dokumentdelning. Visa på vilken enhet som helst utan appar. Perfekt för e-post, utskrift och arkivering. Slå samman flera HEIFs till en PDF. Gratis batchomvandlare, ingen registrering.",
    metaKeywords:
      "HEIF till PDF, bild till dokument, universell PDF, e-postdelning, utskriftsklar PDF, slå samman bilder PDF, batchkonvertering HEIF, dokumentskapande",
    hero: {
      title: "HEIF till PDF-konverterare",
      subtitle:
        "Förvandla dina HEIF-bilder direkt till universellt PDF-format. Gratis, snabb och säker konvertering utan filstorleksbegränsningar. Perfekt för HEIF-foton från vilken enhet som helst.",
      badge1: "Blixtsnabb",
      badge2: "100% Säker",
      badge3: "Ingen Registrering",
    },
    upload: {
      title: "Ladda upp HEIF-filer",
      description:
        "Dra och släpp dina HEIF-bilder här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batch Konvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner PDF",
      downloadAll: "Ladda ner Alla som ZIP",
      convertAnother: "Konvertera Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ HEIF till PDF-konvertering",
        "Batchbearbetning upp till 20 filer",
        "Bevarar bildkvalitet",
        "Ingen filstorleksbegränsning",
        "100% säker och privat",
        "Fungerar med HEIF-foton från alla enheter",
        "Omedelbar nedladdning efter konvertering",
        "Inga vattenstämplar tillagda",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp HEIF-filer",
      step1Desc: "Välj en eller flera HEIF-bilder från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer direkt",
      step3Title: "Ladda ner PDF",
      step3Desc: "Få dina konverterade PDF-filer direkt",
    },
    about: {
      title: "Om HEIF till PDF-konvertering",
      whatIsHeif: {
        title: "Vad är HEIF-formatet?",
        content:
          "HEIF (High Efficiency Image Format) är ett modernt bildcontainerformat som använder HEVC (H.265) komprimering. Även om det liknar HEIC, är HEIF standardformatets namn, medan HEIC specifikt hänvisar till Apples implementering. HEIF erbjuder överlägsen komprimering jämfört med PDF samtidigt som det behåller hög bildkvalitet, vilket gör det idealiskt för effektiv lagring av foton.",
      },
      whyConvert: {
        title: "Varför konvertera HEIF till PDF?",
        content:
          "Även om HEIF är effektivt och modernt, stöds det inte universellt på alla enheter och plattformar. Att konvertera HEIF till PDF säkerställer att dina bilder kan visas på vilken enhet som helst, enkelt delas via e-post, laddas upp till webbplatser och användas i vilken applikation som helst. PDF-formatet är det mest bredt stödda bildformatet i världen, vilket gör det idealiskt för maximal kompatibilitet och delning.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Vad är Skillnaden?",
        content:
          "HEIF (High Efficiency Image Format) är containerformatets standard, medan HEIC (High Efficiency Image Container) är Apples specifika implementering av HEIF. I praktiken är de mycket lika - båda använder samma komprimerings teknologi och erbjuder samma fördelar. Apple-enheter sparar foton som HEIC-filer, som faktiskt är HEIF-kompatibla. Vår konverterare hanterar båda formaten sömlöst, så du kan konvertera vilken HEIF/HEIC-bild som helst till PDF-format.",
      },
      benefits: {
        title: "Fördelar med Vår Konverterare",
        list: [
          "Universell Kompatibilitet - PDF fungerar på alla enheter och plattformar",
          "Mindre Filstorlek - Effektiv komprimering för snabbare delning",
          "Brett Stöd - Mest använda bildformatet i världen",
          "Enkel Delning - Kompatibel med alla e-postklienter och sociala medier",
          "Webbredo - Idealiskt för webbplatser, sociala medier och onlineanvändning",
          "Hög Kvalitet - Bevarar originalbildens upplösning",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – HEIF till PDF",
      items: [
        {
          q: "Är det gratis att konvertera HEIF till PDF?",
          a: "Ja! Vår HEIF till PDF-konverterare är helt gratis utan dolda avgifter. Du kan konvertera obegränsat antal filer utan registrering eller prenumeration.",
        },
        {
          q: "Vad är skillnaden mellan HEIF och HEIC?",
          a: "HEIF (High Efficiency Image Format) är standardformatets namn, medan HEIC (High Efficiency Image Container) är Apples specifika implementering. De använder samma komprimerings teknologi och är funktionellt mycket lika. Vår konverterare hanterar båda formaten sömlöst.",
        },
        {
          q: "Är mina data säkra?",
          a: "Absolut. Alla konverteringar sker säkert på våra servrar med SSL-kryptering. Dina filer raderas automatiskt direkt efter konvertering. Vi lagrar, delar eller öppnar aldrig dina filer.",
        },
        {
          q: "Vad är den maximala filstorleken?",
          a: "Du kan konvertera HEIF-filer upp till 100MB vardera. För batchkonvertering kan du bearbeta upp till 20 filer samtidigt med en total gräns på 100MB.",
        },
        {
          q: "Stöder ni batchkonvertering?",
          a: "Ja! Du kan ladda upp och konvertera upp till 20 HEIF-filer samtidigt. Alla konverterade PDF:er kommer att vara tillgängliga för nedladdning som individuella filer eller i ett enda ZIP-arkiv.",
        },
        {
          q: "Kommer kvaliteten att bevaras?",
          a: "Ja, vi bevarar hög bildkvalitet under konvertering. Dina HEIF-bilder kommer att konverteras till högupplösta PDF:er med minimal kvalitetsförlust.",
        },
        {
          q: "Kan jag konvertera HEIF från vilken enhet som helst?",
          a: "Ja! Vår konverterare fungerar med HEIF-bilder från vilken enhet eller kamera som helst som stöder HEIF-formatet, inte bara Apple-enheter. Ladda bara upp dina HEIF-filer och konvertera dem till PDF.",
        },
        {
          q: "Behöver jag installera någon programvara?",
          a: "Ingen installation behövs. Vår onlinekonverterare fungerar direkt i din webbläsare på vilken enhet som helst - Windows, Mac, Linux, iOS eller Android.",
        },
        {
          q: "Hur lång tid tar konverteringen?",
          a: "Konvertering är nästan omedelbar! De flesta HEIF-filer konverteras till PDF på bara några sekunder, beroende på filstorleken och din internetanslutning.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "HEIF till PNG", url: "/convert/heif-to-png" },
        { name: "PDF till PDF", url: "/convert/pdf-to-pdf" },
        { name: "PNG till PDF", url: "/convert/png-to-pdf" },
      ],
    },
  },

  // HEIF to GIF Converter
  heifToGif: {
    title: "HEIF till GIF-konverterare - Skapa Animerade GIFs och Delbara Bilder",
    metaDescription:
      "Konvertera HEIF till GIF för universell delning och animationer. Perfekt för sociala medier, memes och webbplatser. Fungerar överallt - ingen app behövs. Skapa animerade GIFs från foton. Gratis batchkonverterare.",
    metaKeywords:
      "HEIF till GIF, animerad GIF, sociala medier delning, memes, universell kompatibilitet, GIF animation, batch konvertera HEIF, delbara bilder",
    hero: {
      title: "HEIF till GIF-konverterare",
      subtitle:
        "Konvertera HEIF till GIF - det mest delbara bildformatet. Perfekt för sociala medier inlägg, memes och animationer. Universell kompatibilitet på alla plattformar, appar och meddelandetjänster. Ingen speciell visare behövs.",
      badge1: "Universell Delning",
      badge2: "Sociala Medier Redo",
      badge3: "Animationsstöd",
    },
    upload: {
      title: "Ladda upp HEIF-filer",
      description:
        "Dra och släpp dina HEIF-bilder här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batchkonvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner GIF",
      downloadAll: "Ladda ner Allt som ZIP",
      convertAnother: "Konvertera Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "Universell kompatibilitet - GIFs fungerar absolut överallt",
        "Perfekt för sociala medier (Twitter, Facebook, Instagram, WhatsApp)",
        "Batchbearbetning upp till 20 filer samtidigt",
        "Animationsstöd för att skapa GIF-loopar",
        "100% säkert med automatisk filborttagning",
        "Små filstorlekar optimerade för delning",
        "Omedelbar nedladdning - redo att publicera",
        "Inga vattenstämplar - rena delbara bilder",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp HEIF-filer",
      step1Desc: "Välj en eller flera HEIF-bilder från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer omedelbart",
      step3Title: "Ladda ner GIF",
      step3Desc: "Få dina konverterade GIF-filer omedelbart",
    },
    about: {
      title: "Om HEIF till GIF-konvertering",
      whatIsHeif: {
        title: "Varför är GIF Perfekt för Sociala Medier och Delning?",
        content:
          "GIF (Graphics Interchange Format) är det mest universellt kompatibla bildformatet, skapat 1987 och fortfarande framgångsrikt idag. GIFs fungerar absolut överallt - alla sociala medier plattformar (Twitter, Facebook, Instagram, Reddit, Tumblr), meddelandeappar (WhatsApp, Telegram, Discord, Slack), e-postklienter, forum och webbplatser visar GIFs utan speciell programvara. GIF:s huvudfunktion är animationsstöd - skapa looping-animationer, cinemagraphs och memes som fångar uppmärksamhet. GIFs använder förlustfri komprimering för upp till 256 färger, vilket gör dem perfekta för grafik, logotyper och enkla animationer. Filstorlekar är små och delbara, idealiska för mobildata och snabb laddning. GIF är lingua franca för internetkultur - formatet för reaktioner, memes och viralt innehåll.",
      },
      whyConvert: {
        title: "Varför Konvertera HEIF till GIF?",
        content:
          "Konvertera HEIF till GIF för maximal delbarhet och universell kompatibilitet. HEIF fungerar bara på nyare Apple-enheter och kräver speciell programvara - vilket gör delning svårt. GIF fungerar omedelbart på varje enhet, plattform och app utan visare behövs. Perfekt för: sociala medier inlägg (Twitter GIFs, Facebook reaktioner, Instagram stories), meme-skapande (universellt format för viralt innehåll), meddelanden (WhatsApp, Telegram stöder GIF-förhandsvisning), webbinbäddningar (alla webbläsare visar GIFs inbyggt), e-postsignaturer och marknadsföring (garanterad visning), foruminlägg och kommentarer (universellt stöd), och reaktionsbilder (dela känslor omedelbart). GIFs spelar automatiskt och loopar, vilket gör dem uppmärksamhetsväckande för marknadsföring och socialt engagemang. Medan GIF-kvalitet är begränsad till 256 färger, är den optimerad för grafik, textöverlägg och enkla animationer - vilket gör den idealisk för internetkommunikation.",
      },
      heifVsHeic: {
        title: "GIF vs Moderna Format - När Ska Man Välja GIF",
        content:
          "GIF byter bildkvalitet mot universell kompatibilitet och animation. Välj GIF när: dela på sociala medier (Instagram, Twitter auto-visning), skapa memes eller reaktioner (universellt format), göra enkla animationer eller loopar, säkerställa 100% kompatibilitet (ingen visare behövs), dela via meddelandeappar (stöd för automatisk förhandsvisning), eller rikta in sig på viralt/delbart innehåll. GIF:s begränsningar (256 färger, större än WebP) kompenseras av garanterad synlighet överallt. Moderna format som AVIF/WebP erbjuder bättre kvalitet men behöver speciella visare. För internetkultur, memes och social delning förblir GIF oöverträffad trots 35+ år. Dess enkelhet och universella stöd gör det till standardvalet för delbart innehåll.",
      },
      benefits: {
        title: "Fördelar med GIF-format",
        list: [
          "Universell Kompatibilitet - Fungerar bokstavligen på varje enhet och plattform",
          "Sociala Medier Native - Auto-visar på Twitter, Facebook, Instagram, Reddit",
          "Animationsstöd - Skapa looping GIFs och cinemagraphs",
          "Ingen Visare Behövs - Visar omedelbart utan speciell programvara",
          "Meme-Vänlig - Standardformatet för internetkultur",
          "Auto-Spelning - Loopar automatiskt för uppmärksamhetsväckande innehåll",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – HEIF till GIF",
      items: [
        {
          q: "Är det gratis att konvertera HEIF till GIF?",
          a: "Ja! Vår HEIF till GIF-konverterare är helt gratis med obegränsade konverteringar. Ingen registrering, prenumerationer eller dolda avgifter. Konvertera så många bilder du behöver för sociala medier, memes eller delning.",
        },
        {
          q: "Varför är GIF så populärt för sociala medier och memes?",
          a: "GIF är universellt kompatibelt - det fungerar på varje plattform, app och enhet utan speciell programvara. Sociala medier plattformar som Twitter, Facebook, Instagram och Reddit stöder GIFs inbyggt med auto-spelning och looping. GIFs kan vara animerade (perfekta för reaktioner och memes), är små nog för mobil delning, och har blivit standardformatet för internetkultur och viralt innehåll. Alla kan se din GIF omedelbart, oavsett vilken enhet de använder.",
        },
        {
          q: "Kan jag skapa animerade GIFs från HEIF-bilder?",
          a: "Ja! Medan en enda HEIF konverteras till en statisk GIF, kan du ladda upp flera HEIF-bilder i batchläge för att skapa ramar för animation. Vår konverterare bearbetar varje bild separat. För att skapa verkliga animerade GIFs med flera ramar kan du använda batchkonvertering och sedan kombinera ramarna med gratis GIF-animationsverktyg online.",
        },
        {
          q: "Kommer GIF att fungera på alla sociala medier plattformar?",
          a: "Absolut! GIF stöds inbyggt av alla större plattformar: Twitter/X (GIF-knapp i kompositorn), Facebook (auto-spelande GIFs), Instagram (Stories och DMs), Reddit (inline-visning), Tumblr (GIF-fokuserad plattform), WhatsApp (auto-förhandsvisning), Telegram, Discord, Slack, och praktiskt taget varje meddelandeapp och forum. GIFs visas och loopar automatiskt utan visare eller plugin behövs.",
        },
        {
          q: "Varför är GIF-filer större än HEIF?",
          a: "GIF använder okomprimerad eller förlustfri komprimering för att behålla kvalitet ram för ram för animationer, medan HEIF använder modern videokomprimering. GIF:s universella kompatibilitet och garanterad visning gör dock storlekskompromissen värd för delning. För sociala medier och memes är omedelbar synlighet på alla enheter mer värdefull än filstorleksoptimering. Dessutom optimerar vår konverterare GIF-utdata för webbdelning.",
        },
        {
          q: "Kan jag använda GIF för professionellt arbete?",
          a: "Ja! GIF är perfekt för: e-postmarknadsföring (animerede banners, signaturer), webbplats-element (laddningsanimationer, ikoner), presentationer (animerede diagram, övergångar), kundkommunikation (garanterad visning), och sociala medier marknadsföring (höga engagemangsgrad). Medan GIF har 256-färgsbegränsningar är det idealiskt för grafik, logotyper, textöverlägg och enkla animationer där universell kompatibilitet betyder mer än foto-realistisk kvalitet.",
        },
        {
          q: "Vad är skillnaden mellan GIF och moderna format som WebP?",
          a: "GIF (1987) prioriterar universell kompatibilitet och animation; WebP (2010) prioriterar komprimering och kvalitet. GIF fungerar på 100% av enheterna utan speciell visare; WebP behöver moderna webbläsare (97% stöd). För sociala medier, memes och delbart innehåll vinner GIF:s garanterade synlighet. För webbplatsoptimering och fotokvalitet är WebP bättre. Välj GIF när delning betyder mer än filstorlek.",
        },
        {
          q: "Kan jag skapa memes med GIF?",
          a: "Absolut! GIF är standardformatet för internetmemes och reaktionsbilder. Efter att ha konverterat HEIF till GIF kan du lägga till textöverlägg, kombinera ramar eller använda GIF direkt för delning. GIFs är perfekta för memes eftersom de fungerar överallt, auto-spelar för omedelbar effekt, kan vara animerade för extra uttryck, och är lätt delbara på alla plattformar. Internetmeme-kulturen är byggd på GIF-format.",
        },
        {
          q: "Hur lång tid tar HEIF till GIF-konvertering?",
          a: "Konvertering tar 1-2 sekunder per bild. GIF-skapande är snabbt eftersom det är ett enkelt format optimerat för kompatibilitet snarare än komplex komprimering. Resultatet är en universellt kompatibel fil redo för omedelbar delning på sociala medier, meddelandeappar eller vilken plattform som helst.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till GIF", url: "/convert/heic-to-gif" },
        { name: "HEIF till PNG", url: "/convert/heif-to-png" },
        { name: "HEIF till JPG", url: "/convert/heif-to-jpg" },
        { name: "PNG till GIF", url: "/convert/png-to-gif" },
        { name: "JPG till GIF", url: "/convert/jpg-to-gif" },
        { name: "GIF till PNG", url: "/convert/gif-to-png" },
      ],
    },
  },

  // JPG to PNG Converter
  jpgToPng: {
    title: "JPG till PNG-konverterare - Lägg till Transparens & Förlustfri Kvalitet",
    metaDescription:
      "Konvertera JPG till PNG för transparensstöd och förlustfri kvalitet. Perfekt för logotyper, grafik och webbbilder. Bevara bildkvalitet utan komprimeringsartefakter. Gratis batchkonverterare, ingen registrering.",
    metaKeywords:
      "JPG till PNG, lägg till transparens, förlustfri konvertering, grafikomvandlare, logoomvandlare, webbbilder, batchkonvertera JPG, ta bort bakgrund",
    hero: {
      title: "JPG till PNG-konverterare",
      subtitle:
        "Konvertera JPG till PNG för transparensstöd och överlägsen kvalitet. Perfekt för logotyper, grafik och professionella bilder. PNG bevarar varje detalj utan komprimeringsartefakter - idealiskt för webbgrafik, överlägg och bilder som kräver transparenta bakgrunder.",
      badge1: "Transparensstöd",
      badge2: "Förlustfri Kvalitet",
      badge3: "Inga Artefakter",
    },
    upload: {
      title: "Ladda upp JPG-filer",
      description:
        "Dra och släpp dina JPG-bilder här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batchkonvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner PNG",
      downloadAll: "Ladda ner Allt som ZIP",
      convertAnother: "Konvertera Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "Transparensstöd - lägg till alfakanal för överlägg",
        "Förlustfri kvalitet - bevara varje pixel perfekt",
        "Batchbearbetning upp till 20 filer samtidigt",
        "Inga komprimeringsartefakter - skarpa kanter och text",
        "100% säkert med automatisk filborttagning",
        "Perfekt för logotyper, grafik och webbbilder",
        "Omedelbar nedladdning - redo att använda",
        "Inga vattenstämplar - professionell kvalitet",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp JPG-filer",
      step1Desc: "Välj en eller flera JPG-bilder från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer omedelbart",
      step3Title: "Ladda ner PNG",
      step3Desc: "Få dina konverterade PNG-filer omedelbart",
    },
    about: {
      title: "Om JPG till PNG-konvertering",
      whatIsHeif: {
        title: "Varför är PNG Perfekt för Grafik och Logotyper?",
        content:
          "PNG (Portable Network Graphics) är det professionella valet för grafik, logotyper och bilder som kräver transparens. Skapat 1996 som ett patentfritt alternativ till GIF, använder PNG förlustfri komprimering - vilket betyder noll kvalitetsförlust oavsett hur många gånger du sparar det. PNG:s huvudfunktion är alfakanaltransparens - perfekt för logotyper, överlägg, vattenstämplar och grafik som behöver smälta sömlöst med bakgrunder. Till skillnad från JPG (förlustkomprimering som försämrar kvaliteten) bevarar PNG varje pixel perfekt, behåller skarpa kanter på text, skarpa linjer på grafik och livfulla färger utan komprimeringsartefakter. PNG stöder 16 miljoner färger plus 256 transparensnivåer, vilket gör det till standarden för webbgrafik, UI-element, ikoner, skärmdumpar och professionellt designarbete. Filstorlekar är större än JPG men kvaliteten och transparensstödet är värt det för grafik och logotyper.",
      },
      whyConvert: {
        title: "Varför Konvertera JPG till PNG?",
        content:
          "Konvertera JPG till PNG när du behöver transparens eller förlustfri kvalitet. JPG använder förlustkomprimering som permanent försämrar bildkvalitet med varje redigering - skapar komprimeringsartefakter, suddig text och färgbandning. PNG använder förlustfri komprimering, bevarar perfekt kvalitet för alltid. Viktiga skäl att konvertera: lägg till transparens för logotyper och överlägg (ta bort bakgrunder), förbered grafik för webb/designarbete (skarpa kanter), undvik kvalitetsförsämring (inga artefakter), skapa skiktade kompositioner (alfakanalstöd), bevara text och linjekonst (skarpa kanter), eller redigera bilder upprepade gånger utan förlust. PNG är väsentligt för logotyper, ikoner, grafik, skärmdumpar, UI-element, vattenstämplar och alla bilder som kräver transparenta bakgrunder. Även om PNG-filer är större än JPG gör kvaliteten och transparensstödet det till det professionella valet för grafikarbete. Konvertera JPG till PNG före redigering för att förhindra ytterligare kvalitetsförlust.",
      },
      heifVsHeic: {
        title: "PNG vs JPG - När Ska Man Välja PNG",
        content:
          "PNG och JPG tjänar olika syften. Välj PNG för: logotyper och grafik (skarpa kanter, transparens), texttunga bilder (ingen suddighet), bilder som kräver transparens (överlägg, vattenstämplar), grafik som behöver upprepad redigering (förlustfri), ikoner och UI-element (skarpa detaljer), skärmdumpar (bevara klarhet), eller professionellt designarbete (noll artefakter). Välj JPG för: fotografier (effektiv komprimering), bilder utan transparensbehov, filstorleksprioritet (mindre filer), eller sociala medie-foton (acceptabel kvalitetsförlust). PNG:s fördelar: förlustfri kvalitet (perfekt bevarande), transparensstöd (alfakanal), inga komprimeringsartefakter (skarpa kanter), obegränsad redigering utan försämring. PNG:s nackdelar: större filstorlekar (2-10× större än JPG), inte idealiskt för foton (ineffektiv komprimering). För webbanvändning: PNG för logotyper/grafik, JPG för foton. För tryck: PNG för grafik, JPG för foton. För redigering: Alltid PNG (förhindrar kvalitetsförlust).",
      },
      benefits: {
        title: "Fördelar med PNG-format",
        list: [
          "Transparensstöd - Lägg till alfakanal för logotyper och överlägg",
          "Förlustfri Kvalitet - Noll kvalitetsförlust, perfekt pixelbevarande",
          "Inga Komprimeringsartefakter - Skarpa kanter, skarp text, ren grafik",
          "Obegränsad Redigering - Redigera upprepade gånger utan kvalitetsförsämring",
          "Professionell Standard - Branschens val för grafik och logotyper",
          "Webboptimerad - Perfekt för UI-element, ikoner och grafik",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – JPG till PNG",
      items: [
        {
          q: "Är det gratis att konvertera JPG till PNG?",
          a: "Ja! Vår JPG till PNG-konverterare är helt gratis med obegränsade konverteringar. Ingen registrering, prenumerationer eller dolda avgifter. Konvertera så många bilder du behöver för logotyper, grafik eller professionellt bruk.",
        },
        {
          q: "Kommer konvertering av JPG till PNG att lägga till transparens?",
          a: "Att konvertera JPG till PNG lägger till transparensstöd (alfakanal) men gör inte automatiskt befintliga vita/svarta bakgrunder transparenta. PNG-formatet stöder transparens, så du kan sedan redigera PNG i fotoredigerare (Photoshop, GIMP, Photopea) för att ta bort bakgrunder. Konverteringen förbereder din bild för transparensarbete genom att ändra den till ett format som stöder alfakanaler.",
        },
        {
          q: "Varför är PNG bättre än JPG för logotyper och grafik?",
          a: "PNG använder förlustfri komprimering (noll kvalitetsförlust) medan JPG använder förlustkomprimering (permanent kvalitetsförsämring). PNG bevarar skarpa kanter, skarp text och rena linjer perfekt - viktigt för logotyper och grafik. PNG stöder också transparens för överlägg och bakgrunder. JPG skapar komprimeringsartefakter (suddighet, färgbandning) särskilt runt text och skarpa kanter. För logotyper, ikoner, grafik och texttunga bilder är PNG det professionella valet.",
        },
        {
          q: "Kommer PNG-filer att vara större än JPG?",
          a: "Ja, PNG-filer är typiskt 2-10 gånger större än JPG eftersom PNG använder förlustfri komprimering medan JPG använder förlustkomprimering. Kvaliteten och transparensstödet gör det dock värt det för grafik, logotyper och professionella bilder. För webbanvändning kompenseras den lilla ökningen av filstorlek av perfekt kvalitet och transparensfunktioner. Moderna webbläsare hanterar PNG effektivt.",
        },
        {
          q: "Kan jag redigera PNG utan att förlora kvalitet?",
          a: "Absolut! PNG är förlustfri, vilket betyder att du kan redigera och spara det obegränsat antal gånger utan kvalitetsförsämring. Varje sparande bevarar perfekt kvalitet. Detta är avgörande för designarbete där du behöver göra flera redigeringar. JPG förlorar kvalitet med varje sparande på grund av omkomprimering. För professionella redigeringsarbetsflöden, använd alltid PNG.",
        },
        {
          q: "Är PNG bra för webbanvändning?",
          a: "Ja! PNG är standardformatet för webbgrafik, logotyper, ikoner och UI-element. Även om större än JPG gör PNG:s transparensstöd och skarpa kvalitet det väsentligt för webbdesign. Använd PNG för logotyper, ikoner, knappar, grafik och texttunga bilder. Använd JPG för fotografier där transparens inte behövs. Modern komprimering och CDN:er hanterar PNG effektivt.",
        },
        {
          q: "Vad är skillnaden mellan PNG-8 och PNG-24?",
          a: "PNG-8 stöder 256 färger (som GIF) med enkel transparens, vilket resulterar i mindre filer. PNG-24 stöder 16 miljoner färger med 256 nivåer av alfatransparens (delvis transparens), erbjuder full kvalitet och mjuk transparens men större filer. Vår konverterare skapar PNG-24 för maximal kvalitet och fullt transparensstöd. Använd PNG-8 endast för enkel grafik med få färger.",
        },
        {
          q: "Kan jag använda PNG för tryck?",
          a: "Ja! PNG:s förlustfria kvalitet gör det utmärkt för tryck, särskilt för grafik, logotyper och texttunga design. PNG bevarar perfekt kvalitet vid vilken upplösning som helst. För fotografier kan dock TIFF eller hög kvalitet JPG vara mer effektivt på grund av mindre filstorlekar. För grafisk design tryckarbete (affischer, flygblad, visitkort) är PNG idealiskt.",
        },
        {
          q: "Hur lång tid tar JPG till PNG-konvertering?",
          a: "Konvertering tar 1-2 sekunder per bild. PNG-konvertering är snabb eftersom det är en formatändring som bevarar alla data. Resultatet är en förlustfri PNG redo för transparensarbete, upprepad redigering eller professionellt bruk utan kvalitetsförsämring.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "PNG till JPG", url: "/convert/png-to-jpg" },
        { name: "JPG till WebP", url: "/convert/jpg-to-webp" },
        { name: "PNG till WebP", url: "/convert/png-to-webp" },
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "HEIF till PNG", url: "/convert/heif-to-png" },
        { name: "JPG till PDF", url: "/convert/jpg-to-pdf" },
      ],
    },
  },

  // JPG to WebP Converter
  jpgToWebp: {
    title: "JPG till WebP-konverterare - Optimera Bilder för Web med Överlägsen Komprimering",
    metaDescription:
      "Konvertera JPG till WebP för 25-35% mindre filstorlekar med bättre kvalitet. Perfekt för webbplatser, snabbare laddning och SEO. Modernt format med transparensstöd. Gratis batchkonverterare, ingen registrering.",
    metaKeywords:
      "JPG till WebP, WebP-konverterare, bildoptimering, webbbilder, mindre filstorlek, snabbare laddning, SEO-optimering, batchkonvertera JPG, modernt bildformat",
    hero: {
      title: "JPG till WebP-konverterare",
      subtitle:
        "Konvertera JPG till WebP för överlägsen komprimering och kvalitet. WebP-bilder är 25-35% mindre än JPG medan de behåller samma visuella kvalitet - perfekt för snabbare webbplatser, bättre SEO och reducerade bandbreddskostnader. Moderna webbläsare stöder WebP internt.",
      badge1: "25-35% Mindre",
      badge2: "Bättre Kvalitet",
      badge3: "Webboptimerad",
    },
    upload: {
      title: "Ladda upp JPG-filer",
      description:
        "Dra och släpp dina JPG-bilder här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batchkonvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner WebP",
      downloadAll: "Ladda ner Allt som ZIP",
      convertAnother: "Konvertera Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "25-35% mindre filer än JPG med samma kvalitet",
        "Överlägsen komprimering - bättre än JPG och PNG",
        "Transparensstöd - alfakanal som PNG",
        "Batchbearbetning upp till 20 filer samtidigt",
        "100% säkert med automatisk filradering",
        "Perfekt för webbplatser och webbapplikationer",
        "Omedelbar nedladdning - redo för distribution",
        "Inga vattenstämplar - professionell kvalitet",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp JPG-filer",
      step1Desc: "Välj en eller flera JPG-bilder från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer omedelbart",
      step3Title: "Ladda ner WebP",
      step3Desc: "Få dina optimerade WebP-filer omedelbart",
    },
    about: {
      title: "Om JPG till WebP-konvertering",
      whatIsHeif: {
        title: "Varför är WebP Perfekt för Moderna Webbplatser?",
        content:
          "WebP är Googles moderna bildformat designat specifikt för webben. Släppt 2010, använder WebP avancerade komprimeringsalgoritmer för att skapa bilder som är 25-35% mindre än JPG medan de behåller samma visuella kvalitet. WebP kombinerar det bästa av båda världar: förlustkomprimering som JPG (för foton) och förlustfri komprimering som PNG (för grafik), plus alfakanal transparensstöd. WebP stöds internt av 97% av moderna webbläsare (Chrome, Firefox, Edge, Opera, Safari 14+) och är det rekommenderade formatet för webboptimering av Google PageSpeed Insights. WebP-bilder laddas snabbare, minskar bandbreddskostnader, förbättrar SEO-rankningar och ger bättre användarupplevelse. Stora plattformar som Facebook, YouTube och Google använder WebP omfattande för sin bildleverans.",
      },
      whyConvert: {
        title: "Varför Konvertera JPG till WebP?",
        content:
          "Konvertera JPG till WebP för att dramatiskt minska filstorlekar medan du behåller eller förbättrar bildkvaliteten. WebPs avancerade komprimeringsalgoritmer skapar filer som är 25-35% mindre än motsvarande JPG-bilder, vilket resulterar i snabbare sidladdningar, bättre SEO-rankningar, reducerade bandbreddskostnader och förbättrad användarupplevelse. Nyckel fördelar: snabbare webbplatsladdning (mindre filer = snabbare nedladdningar), bättre SEO (Google gynnar snabbt laddande webbplatser), reducerade bandbreddskostnader (mindre dataöverföring), förbättrad mobilupplevelse (snabbare på långsamma anslutningar), transparensstöd (alfakanal som PNG), och modern webbläsarstöd (97% täckning). WebP är väsentligt för modern webbutveckling, e-handelsplatser, bloggar och vilken webbplats som helst som prioriterar prestanda. Google PageSpeed Insights rekommenderar WebP för optimala prestandapoäng.",
      },
      heifVsHeic: {
        title: "WebP vs JPG - När Välja WebP",
        content:
          "WebP och JPG tjänar olika syften i modern webbutveckling. Välj WebP för: webbplatser och webbapplikationer (optimal prestanda), SEO-optimering (snabbare laddning = bättre rankningar), mobile-first design (mindre filer = snabbare mobil laddning), e-handelsplatser (minska bandbreddskostnader), moderna webbläsare (97% stöd), transparensbehov (alfakanal stöd), eller prestandakritiska applikationer. Välj JPG för: maximal kompatibilitet (100% webbläsarstöd), äldre webbläsarstöd (IE, äldre Safari), e-postklienter (begränsat WebP-stöd), eller när filstorlek inte är kritisk. WebPs fördelar: 25-35% mindre filer, bättre komprimering, transparensstöd, förlustfri alternativ tillgänglig, modernt format optimerat för webb. WebPs nackdelar: 3% av webbläsare stöder inte (äldre Safari, IE), kräver fallback för maximal kompatibilitet. För moderna webbplatser: Alltid WebP med JPG-fallback. För e-post: Använd JPG. För maximal kompatibilitet: Tillhandahåll båda formaten.",
      },
      benefits: {
        title: "Fördelar med WebP-format",
        list: [
          "25-35% Mindre Filer - Minskar dramatiskt filstorlekar vs JPG",
          "Bättre Kvalitet - Samma eller bättre visuell kvalitet vid mindre storlekar",
          "Transparensstöd - Alfakanal som PNG för överlägg",
          "Snabbare Laddning - Mindre filer betyder snabbare sidladdningar",
          "SEO-optimerad - Google gynnar snabbt laddande webbplatser",
          "Modern Standard - Rekommenderad av Google PageSpeed Insights",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – JPG till WebP",
      items: [
        {
          q: "Är det gratis att konvertera JPG till WebP?",
          a: "Ja! Vår JPG till WebP-konverterare är helt gratis med obegränsade konverteringar. Ingen registrering, prenumerationer eller dolda avgifter. Konvertera så många bilder du behöver för din webbplats, blogg eller webbapplikation.",
        },
        {
          q: "Hur mycket mindre är WebP-filer jämfört med JPG?",
          a: "WebP-filer är typiskt 25-35% mindre än motsvarande JPG-bilder medan de behåller samma visuella kvalitet. Detta betyder snabbare sidladdningar, reducerade bandbreddskostnader och bättre användarupplevelse. Det exakta komprimeringsförhållandet beror på bildinnehållet, men WebP överträffar konsekvent JPG i filstorleksminskning.",
        },
        {
          q: "Kommer WebP att fungera i alla webbläsare?",
          a: "WebP stöds av 97% av moderna webbläsare, inklusive Chrome, Firefox, Edge, Opera och Safari 14+. Äldre webbläsare (IE, Safari <14) stöder inte WebP, så för maximal kompatibilitet, tillhandahåll JPG-fallbacks med HTML <picture>-elementet eller servera WebP med korrekta Content-Type-huvuden och JPG-fallbacks.",
        },
        {
          q: "Är WebP-kvalitet bättre än JPG?",
          a: "WebP kan uppnå samma visuella kvalitet som JPG vid 25-35% mindre filstorlekar, eller bättre kvalitet vid samma filstorlek. WebP använder avancerade komprimeringsalgoritmer som är mer effektiva än JPGs äldre komprimering. För webbanvändning är WebP det överlägsna valet för både kvalitet och filstorlek.",
        },
        {
          q: "Kan WebP stödja transparens som PNG?",
          a: "Ja! WebP stöder alfakanal transparens precis som PNG, vilket gör det perfekt för bilder som behöver genomskinliga bakgrunder, överlägg eller grafik. Detta är en stor fördel över JPG, som inte stöder transparens. WebP kan ersätta både JPG (för foton) och PNG (för grafik med transparens) i många fall.",
        },
        {
          q: "Är WebP bra för SEO?",
          a: "Absolut! WebP är utmärkt för SEO eftersom det skapar mindre filer som laddas snabbare. Googles PageSpeed Insights rekommenderar WebP för optimala prestandapoäng. Snabbare laddande webbplatser rankar högre i sökresultat, och WebP är en nyckelfaktor för att uppnå snabba sidladdningstider. Google själv använder WebP omfattande på sina plattformar.",
        },
        {
          q: "Kan jag använda WebP för e-handelsproduktbilder?",
          a: "Ja! WebP är perfekt för e-handel eftersom det minskar filstorlekar utan att offra kvalitet, vilket resulterar i snabbare produktssidladdningar och bättre användarupplevelse. Stora e-handelsplattformar stöder WebP, och det är särskilt fördelaktigt för mobila köpare som kan ha långsammare anslutningar. Tillhandahåll alltid JPG-fallbacks för maximal kompatibilitet.",
        },
        {
          q: "Vad är skillnaden mellan förlustbehållande och förlustfri WebP?",
          a: "Förlustbehållande WebP (som JPG) använder komprimering som minskar kvaliteten något för mycket mindre filstorlekar - perfekt för foton. Förlustfri WebP (som PNG) bevarar perfekt kvalitet men med bättre komprimering än PNG - perfekt för grafik. Vår konverterare skapar förlustbehållande WebP optimerat för webbanvändning, balanserar kvalitet och filstorlek för optimal prestanda.",
        },
        {
          q: "Hur lång tid tar JPG till WebP-konvertering?",
          a: "Konverteringen tar 1-2 sekunder per bild. WebP-konvertering är snabb eftersom den är optimerad för webbprestanda. Resultatet är en mindre, snabbare laddande bild redo för omedelbar användning på din webbplats eller webbapplikation.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "PNG till WebP", url: "/convert/png-to-webp" },
        { name: "HEIC till WebP", url: "/convert/heic-to-webp" },
        { name: "HEIF till WebP", url: "/convert/heif-to-webp" },
        { name: "JPG till PNG", url: "/convert/jpg-to-png" },
        { name: "JPG till GIF", url: "/convert/jpg-to-gif" },
        { name: "JPG till PDF", url: "/convert/jpg-to-pdf" },
      ],
    },
  },
  // JPG to AVIF Converter
  jpgToAvif: {
    title: "JPG till AVIF-konverterare - Ultra-Modern Komprimering med 50% Mindre Filer",
    metaDescription:
      "Konvertera JPG till AVIF för 50% mindre filstorlekar med överlägsen kvalitet. Nästa generations bildformat med avancerad komprimering. Perfekt för moderna webbplatser, snabbare laddning och optimal prestanda. Gratis batchkonverterare, ingen registrering.",
    metaKeywords:
      "JPG till AVIF, AVIF-konverterare, nästa generations bildformat, ultra komprimering, mindre filstorlek, snabbare laddning, moderna webbbilder, batchkonvertera JPG, AV1 bildformat",
    hero: {
      title: "JPG till AVIF-konverterare",
      subtitle:
        "Konvertera JPG till AVIF för den ultimata bildkomprimeringen. AVIF-bilder är 50% mindre än JPG med överlägsen kvalitet - perfekt för moderna webbplatser, snabbare laddningstider och optimal prestanda. AVIF är nästa generations bildformat baserat på AV1 videokodek.",
      badge1: "50% Mindre",
      badge2: "Överlägsen Kvalitet",
      badge3: "Next-Gen Format",
    },
    upload: {
      title: "Ladda upp JPG-filer",
      description:
        "Dra och släpp dina JPG-bilder här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batchkonvertering",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner AVIF",
      downloadAll: "Ladda ner Allt som ZIP",
      convertAnother: "Konvertera En Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "50% mindre filer än JPG med överlägsen kvalitet",
        "Nästa generations komprimering - bästa i klassen effektivitet",
        "Transparensstöd - alfakanal som PNG",
        "Batchbearbetning upp till 20 filer samtidigt",
        "100% säkert med automatisk filborttagning",
        "Perfekt för moderna webbplatser och applikationer",
        "Omedelbar nedladdning - redo för distribution",
        "Inga vattenstämplar - professionell kvalitet",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp JPG-filer",
      step1Desc: "Välj en eller flera JPG-bilder från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer omedelbart",
      step3Title: "Ladda ner AVIF",
      step3Desc: "Få dina optimerade AVIF-filer omedelbart",
    },
    about: {
      title: "Om JPG till AVIF Konvertering",
      whatIsHeif: {
        title: "Varför är AVIF Framtiden för Webbbilder?",
        content:
          "AVIF (AV1 Image File Format) är nästa generations bildformat baserat på AV1 videokodeken, utvecklad av Alliance for Open Media. Släppt 2019, använder AVIF toppmodern komprimeringsteknologi för att skapa bilder som är 50% mindre än JPG med överlägsen kvalitet. AVIF kombinerar förlustfulla och förlustfria komprimeringslägen, stöder HDR (High Dynamic Range), breda färgomfång och alfakanaltransparens. AVIF stöds av moderna webbläsare (Chrome 85+, Firefox 93+, Edge 121+, Safari 17+) och blir snabbt standarden för modern webboptimering. Stora plattformar som Netflix, YouTube och Google adopterar AVIF för dess exceptionella komprimeringseffektivitet. AVIF representerar framtiden för webbbilder med oöverträffade komprimeringsförhållanden och kvalitet.",
      },
      whyConvert: {
        title: "Varför Konvertera JPG till AVIF?",
        content:
          "Konvertera JPG till AVIF för att uppnå den ultimata bildkomprimeringen och kvaliteten. AVIF:s avancerade AV1-baserade komprimering skapar filer som är 50% mindre än JPG medan visuell kvalitet bibehålls eller förbättras. Nyckelvinster: dramatiskt mindre filstorlekar (50% minskning vs JPG), överlägsen kvalitet (bättre än JPG vid samma filstorlek), snabbare sidladdningar (mindre filer = snabbare nedladdningar), bättre SEO (Google gynnar snabbt laddande webbplatser), reducerade bandbreddskostnader (mindre dataöverföring), förbättrad mobilupplevelse (snabbare på långsamma anslutningar), transparensstöd (alfakanal), HDR-stöd (bredare färgomfång) och modern webbläsarstöd (växande adoption). AVIF är väsentligt för toppmodern webbutveckling, prestandakritiska applikationer och alla webbplatser som prioriterar optimal bildleverans. AVIF är framtiden för webbbilder.",
      },
      heifVsHeic: {
        title: "AVIF vs JPG - När Ska Man Välja AVIF",
        content:
          "AVIF och JPG tjänar olika syften i modern webbutveckling. Välj AVIF för: moderna webbplatser och applikationer (optimal prestanda), maximal komprimering (50% mindre än JPG), överlägsen kvalitet (bättre än JPG vid samma storlek), prestandakritiska webbplatser (snabbast laddning), moderna webbläsare (Chrome 85+, Firefox 93+, Safari 17+), transparensbehov (alfakanal), HDR-innehåll (brett färgomfång) eller toppmodern webbutveckling. Välj JPG för: maximal kompatibilitet (100% webbläsarstöd), stöd för äldre webbläsare (före 2019), e-postklienter (begränsat AVIF-stöd) eller när filstorlek inte är kritisk. AVIF-fördelar: 50% mindre filer, överlägsen komprimering, bättre kvalitet, transparensstöd, HDR-stöd, förlustfri alternativ, next-gen format. AVIF-nackdelar: nyare format (kräver moderna webbläsare), kräver fallback för äldre webbläsare. För moderna webbplatser: Alltid AVIF med JPG fallback. För e-post: Använd JPG. För maximal kompatibilitet: Tillhandahåll båda formaten.",
      },
      benefits: {
        title: "Fördelar med AVIF-formatet",
        list: [
          "50% Mindre Filer - Dramatiskt reducerade filstorlekar vs JPG",
          "Överlägsen Kvalitet - Bättre än JPG vid samma filstorlek",
          "Next-Gen Komprimering - Bästa i klassen effektivitet",
          "Transparensstöd - Alfakanal som PNG",
          "HDR-stöd - Brett färgomfång och högt dynamiskt område",
          "Modern Webbläsarstöd - Växande adoption i Chrome, Firefox, Safari",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – JPG till AVIF",
      items: [
        {
          q: "Är det gratis att konvertera JPG till AVIF?",
          a: "Ja! Vår JPG till AVIF-konverterare är helt gratis med obegränsade konverteringar. Ingen registrering, prenumerationer eller dolda avgifter. Konvertera så många bilder du behöver för moderna webbplatser, applikationer eller professionellt bruk.",
        },
        {
          q: "Hur mycket mindre är AVIF-filer jämfört med JPG?",
          a: "AVIF-filer är typiskt 50% mindre än JPG medan de behåller samma eller bättre visuell kvalitet. Denna dramatiska storleksminskning resulterar i snabbare sidladdningar, bättre SEO-rankningar och reducerade bandbreddskostnader. AVIF:s avancerade komprimering är den mest effektiva tillgängliga för webbbilder.",
        },
        {
          q: "Är AVIF-kvalitet bättre än JPG?",
          a: "Ja! AVIF levererar överlägsen kvalitet jämfört med JPG vid samma filstorlek, eller samma kvalitet vid 50% mindre filstorlek. AVIF:s AV1-baserade komprimering är mer avancerad än JPG:s äldre komprimeringsalgoritmer, vilket resulterar i bättre detaljbevarande, färre artefakter och överlägsen färgnoggrannhet.",
        },
        {
          q: "Vilka webbläsare stöder AVIF?",
          a: "AVIF stöds av moderna webbläsare: Chrome 85+, Firefox 93+, Edge 121+, Safari 17+ och Opera 71+. AVIF-stöd växer snabbt, och de flesta moderna webbläsare stöder det nu. För maximal kompatibilitet, tillhandahåll JPG-fallbacks för äldre webbläsare.",
        },
        {
          q: "Kan AVIF stödja transparens som PNG?",
          a: "Ja! AVIF stöder alfakanaltransparens precis som PNG, vilket gör det perfekt för logotyper, grafik och bilder som kräver transparenta bakgrunder. AVIF kombinerar komprimeringsfördelarna med moderna format med PNG:s transparensförmågor.",
        },
        {
          q: "Är AVIF bra för SEO?",
          a: "Absolut! AVIF är utmärkt för SEO eftersom mindre filstorlekar resulterar i snabbare sidladdningar, vilket Google gynnar i sökrankningar. Snabbare laddande webbplatser rankar högre, och AVIF:s 50% storleksminskning förbättrar sidhastighetspoäng avsevärt. Google PageSpeed Insights erkänner AVIF som ett optimalt format.",
        },
        {
          q: "Kan jag använda AVIF för e-handelsproduktbilder?",
          a: "Ja! AVIF är perfekt för e-handel eftersom det dramatiskt minskar filstorlekar utan att offra kvalitet, vilket leder till snabbare produktssidans laddningar och bättre användarupplevelse. Många stora e-handelsplattformar stöder AVIF, och det är särskilt fördelaktigt för mobila köpare med långsammare anslutningar.",
        },
        {
          q: "Hur lång tid tar JPG till AVIF-konvertering?",
          a: "Konvertering tar 1-2 sekunder per bild. AVIF-konvertering är snabb eftersom den är optimerad för moderna processorer. Resultatet är en mycket komprimerad, hög kvalitetsbild redo för modern webbdistribution med optimal prestanda.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "AVIF till JPG", url: "/convert/avif-to-jpg" },
        { name: "JPG till WebP", url: "/convert/jpg-to-webp" },
        { name: "JPG till PNG", url: "/convert/jpg-to-png" },
        { name: "HEIC till AVIF", url: "/convert/heic-to-avif" },
        { name: "HEIF till AVIF", url: "/convert/heif-to-avif" },
        { name: "JPG till PDF", url: "/convert/jpg-to-pdf" },
      ],
    },
  },
  // JPG to GIF Converter
  jpgToGif: {
    title: "JPG till GIF Konverterare - Skapa Animerade GIFs och Webbgrafik",
    metaDescription:
      "Konvertera JPG till GIF för animationer, sociala medier och webbgrafik. GIF-formatet stöder transparens och animation. Perfekt för memes, sociala medie-inlägg och animerad grafik. Gratis batch-konverterare, ingen registrering.",
    metaKeywords:
      "JPG till GIF, konvertera JPG till GIF, GIF konverterare, animerad GIF, sociala medie-bilder, webbgrafik, transparensstöd, batch konvertera JPG, gratis GIF konverterare",
    hero: {
      title: "JPG till GIF Konverterare",
      subtitle:
        "Konvertera JPG till GIF för animationer, sociala medier och webbgrafik. GIF (Graphics Interchange Format) stöder transparens och är perfekt för memes, sociala medie-inlägg, animerad grafik och enkla animationer. GIF stöds brett på alla plattformar och webbläsare.",
      badge1: "Redo för Animation",
      badge2: "Sociala Medier",
      badge3: "Webbgrafik",
    },
    upload: {
      title: "Ladda Upp JPG-filer",
      description:
        "Dra och släpp dina JPG-bilder här eller klicka för att bläddra. Stöder batch-konvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batch Konvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda Ner GIF",
      downloadAll: "Ladda Ner Allt som ZIP",
      convertAnother: "Konvertera En Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "Konvertera JPG till GIF för animationer och webbgrafik",
        "Transparensstöd - perfekt för överlägg och grafik",
        "Sociala medier optimerad - ideal för memes och inlägg",
        "Batchbearbetning upp till 20 filer samtidigt",
        "100% säker med automatisk filborttagning",
        "Brett stött format - fungerar överallt",
        "Omedelbar nedladdning - redo att dela",
        "Inga vattenstämplar - professionell kvalitet",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda Upp JPG-filer",
      step1Desc: "Välj en eller flera JPG-bilder från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer omedelbart",
      step3Title: "Ladda Ner GIF",
      step3Desc: "Få dina GIF-filer omedelbart",
    },
    about: {
      title: "Om JPG till GIF Konvertering",
      whatIsGif: {
        title: "Vad är GIF-formatet?",
        content:
          "GIF (Graphics Interchange Format) är ett bitmap-bildformat introducerat av CompuServe 1987. GIF stöder upp till 256 färger per bildruta, transparens och animation. GIF används ofta för enkla animationer, memes, sociala medie-grafik, webbgrafik och logotyper. GIF:s animationsförmåga gör det unikt bland bildformat - det kan visa flera bildrutor i sekvens för att skapa animerade bilder. GIF stöds av praktiskt taget alla webbläsare, plattformar och applikationer, vilket gör det till det universella valet för animerad grafik och enkel webbgrafik. Även om GIF använder förlustfri komprimering är det begränsat till 256 färger, vilket gör det idealiskt för grafik med begränsade färgpaletter snarare än fotografier.",
      },
      whyConvert: {
        title: "Varför Konvertera JPG till GIF?",
        content:
          "Konvertera JPG till GIF när du behöver animerad grafik, sociala medie-innehåll eller webbgrafik med transparens. Viktiga fördelar: animationsstöd (skapa animerade GIFs från flera bilder), sociala medier kompatibilitet (perfekt för memes och inlägg), transparensstöd (ideal för överlägg och grafik), universell kompatibilitet (fungerar på alla plattformar), webbgrafik (perfekt för enkel grafik och logotyper) eller små filstorlekar (för grafik med begränsade färger). GIF är viktigt för: sociala medier marknadsföring (memes, animerade inlägg), webbdesign (animerad grafik, logotyper), presentationer (animerade element), e-postmarknadsföring (animerade banners) eller enkla animationer (grundläggande animerad grafik). GIF säkerställer att din grafik fungerar överallt och stöder animation när det behövs.",
      },
      benefits: {
        title: "Fördelar med GIF-formatet",
        list: [
          "Animationsstöd - Skapa animerad grafik från flera bildrutor",
          "Transparensstöd - Perfekt för överlägg och grafik",
          "Universell Kompatibilitet - Fungerar på alla plattformar och webbläsare",
          "Redo för Sociala Medier - Ideal för memes och animerade inlägg",
          "Webbgrafik - Perfekt för enkel grafik och logotyper",
          "Små Filstorlekar - Effektivt för grafik med begränsade färger",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – JPG till GIF",
      items: [
        {
          q: "Är det gratis att konvertera JPG till GIF?",
          a: "Ja! Vår JPG till GIF konverterare är helt gratis med obegränsade konverteringar. Ingen registrering, prenumerationer eller dolda avgifter. Konvertera så många bilder du behöver för animationer, sociala medier eller webbgrafik.",
        },
        {
          q: "Kan jag skapa animerade GIFs från JPG-bilder?",
          a: "Vår konverterare konverterar enskilda JPG-bilder till statiskt GIF-format. För att skapa animerade GIFs skulle du behöva flera bilder (bildrutor) som kombineras till en animerad GIF. För animerade GIFs skulle du behöva ladda upp flera bilder eller använda specialiserade animationsverktyg.",
        },
        {
          q: "Kommer GIF-filer att vara mindre än JPG?",
          a: "GIF-filer är typiskt större än JPG för fotografier eftersom GIF är begränsat till 256 färger och använder förlustfri komprimering, medan JPG använder förlustkomprimering optimerad för foton. För grafik med begränsade färger (logotyper, ikoner, enkel grafik) kan GIF dock vara mindre och mer effektiv.",
        },
        {
          q: "Stöder GIF transparens?",
          a: "Ja! GIF stöder transparens, vilket gör det perfekt för grafik som behöver genomskinliga bakgrunder, överlägg eller grafik. GIF:s transparensstöd är enkelt (en färg kan vara transparent), vilket är idealiskt för grafik och logotyper.",
        },
        {
          q: "Är GIF bra för sociala medier?",
          a: "Ja! GIF är perfekt för sociala medier, särskilt för memes, animerade inlägg och enkel grafik. De flesta sociala medie-plattformar stöder GIF internt, och GIF:s animationsförmåga gör det idealiskt för engagerande sociala medie-innehåll.",
        },
        {
          q: "Kan jag använda GIF för webbgrafik?",
          a: "Absolut! GIF är utmärkt för webbgrafik, särskilt för logotyper, ikoner, enkel grafik och animerade element. GIF:s universella kompatibilitet och transparensstöd gör det idealiskt för webbdesign. För fotografier är dock JPG eller WebP vanligtvis bättre val.",
        },
        {
          q: "Vad är skillnaden mellan GIF och JPG?",
          a: "GIF stöder animation och transparens men är begränsat till 256 färger, vilket gör det idealiskt för grafik. JPG stöder miljoner färger och är optimerat för fotografier men stöder inte animation eller transparens. Välj GIF för grafik, animationer och enkla bilder. Välj JPG för fotografier.",
        },
        {
          q: "Hur lång tid tar JPG till GIF konvertering?",
          a: "Konvertering tar 1-2 sekunder per bild. GIF-konvertering är snabb och effektiv, vilket producerar GIF-filer redo för animationer, sociala medier, webbgrafik eller alla applikationer som kräver GIF-format.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "GIF till JPG", url: "/convert/gif-to-jpg" },
        { name: "JPG till PNG", url: "/convert/jpg-to-png" },
        { name: "JPG till WebP", url: "/convert/jpg-to-webp" },
        { name: "PNG till GIF", url: "/convert/png-to-gif" },
        { name: "HEIC till GIF", url: "/convert/heic-to-gif" },
        { name: "JPG till PDF", url: "/convert/jpg-to-pdf" },
      ],
    },
  },
  // JPG to PDF Converter
  jpgToPdf: {
    title: "JPG till PDF-konverterare - Konvertera Bilder till PDF-dokument Gratis Online",
    metaDescription:
      "Konvertera JPG-bilder till PDF-format omedelbart. Perfekt för dokument, portföljer och professionella presentationer. Gratis batchkonverterare, ingen registrering. Bevara bildkvalitet i universellt PDF-format.",
    metaKeywords:
      "JPG till PDF, konvertera JPG till PDF, bild till PDF, foto till PDF, batch konvertera JPG, PDF-konverterare, gratis PDF-konverterare, bild till dokument",
    hero: {
      title: "JPG till PDF-konverterare",
      subtitle:
        "Konvertera JPG-bilder till professionella PDF-dokument omedelbart. Perfekt för att skapa portföljer, presentationer och dokument. PDF-format säkerställer universell kompatibilitet och enkel delning på alla enheter och plattformar.",
      badge1: "Universellt Format",
      badge2: "Professionell Kvalitet",
      badge3: "Enkel Delning",
    },
    upload: {
      title: "Ladda upp JPG-filer",
      description:
        "Dra och släpp dina JPG-bilder här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batchkonvertering",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner PDF",
      downloadAll: "Ladda ner Allt som ZIP",
      convertAnother: "Konvertera Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ JPG till PDF-konvertering",
        "Batchbearbetning upp till 20 filer samtidigt",
        "Bevarar bildkvalitet och upplösning",
        "Universell kompatibilitet - PDF fungerar överallt",
        "100% säkert med automatisk filradering",
        "Perfekt för dokument och portföljer",
        "Omedelbar nedladdning - Redo att dela",
        "Inga vattenstämplar - Professionell kvalitet",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp JPG-filer",
      step1Desc: "Välj en eller flera JPG-bilder från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer omedelbart",
      step3Title: "Ladda ner PDF",
      step3Desc: "Få dina konverterade PDF-filer omedelbart",
    },
    about: {
      title: "Om JPG till PDF-konvertering",
      whatIsHeif: {
        title: "Varför är PDF Perfekt för Dokument och Portföljer?",
        content:
          "PDF (Portable Document Format) är den universella standarden för dokument, skapad av Adobe 1993. PDF säkerställer att dina dokument ser exakt likadana ut på vilken enhet, operativsystem eller applikation som helst - vilket gör det till det professionella valet för delning, arkivering och utskrift. PDF bevarar bildkvalitet, stöder flera sidor och är universellt kompatibla. Till skillnad från bildformat (JPG, PNG) som är designade för visning, är PDF designade för dokument - perfekta för portföljer, presentationer, rapporter och professionella dokument. PDF kan innehålla flera bilder, text och formatering, vilket gör dem idealiska för att skapa omfattande dokument från dina foton.",
      },
      whyConvert: {
        title: "Varför Konvertera JPG till PDF?",
        content:
          "Konvertera JPG till PDF när du behöver skapa dokument, portföljer eller presentationer. JPG är ett bildformat designat för att visa foton, medan PDF är ett dokumentformat designat för delning och utskrift. Viktiga skäl att konvertera: skapa professionella portföljer (flera bilder i ett dokument), förbereda dokument för utskrift (PDF är utskriftsklart), säkerställa universell kompatibilitet (PDF fungerar på alla enheter), dela via e-post (PDF är e-postvänliga), arkivera foton professionellt (branschstandardformat), eller kombinera flera bilder till ett dokument. PDF är viktiga för affärsdokument, portföljer, presentationer, rapporter och all professionell användning där du behöver kombinera bilder till ett dokumentformat. PDF behåller bildkvalitet samtidigt som de tillhandahåller dokumentstruktur och universell kompatibilitet.",
      },
      heifVsHeic: {
        title: "PDF vs JPG - När Välja PDF",
        content:
          "PDF och JPG tjänar olika syften. Välj PDF för: dokument och portföljer (flera bilder i en fil), professionella presentationer (universell kompatibilitet), utskrift och arkivering (utskriftsklart format), e-postdelning (e-postvänligt), affärsanvändning (professionell standard), eller kombinera flera bilder (dokumentstruktur). Välj JPG för: visa foton (bildformat), webbanvändning (mindre filstorlekar), sociala medier (nativt stöd), eller dela en enda bild (enklare format). PDF-fördelar: universell kompatibilitet (fungerar överallt), dokumentstruktur (flera sidor, textstöd), utskriftsklart (perfekt för utskrift), professionell standard (branschval), bevarar kvalitet (behåller bildupplösning). PDF-nackdelar: större filstorlekar (dokumentoverhead), inte idealiskt för webb (långsammare laddning), kräver PDF-visare (även om inbyggd i de flesta system). För dokument: Alltid PDF. För foton: Använd JPG. För portföljer: PDF är det professionella valet.",
      },
      benefits: {
        title: "Fördelar med PDF-format",
        list: [
          "Universell Kompatibilitet - PDF fungerar på alla enheter och plattformar",
          "Professionell Standard - Branschval för dokument och portföljer",
          "Utskriftsklart - Perfekt för fysisk utskrift och arkivering",
          "Dokumentstruktur - Kombinera flera bilder till ett dokument",
          "Enkel Delning - E-postvänligt format som vem som helst kan öppna",
          "Kvalitetsbevarande - Behåller originalbildupplösning",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – JPG till PDF",
      items: [
        {
          q: "Är det gratis att konvertera JPG till PDF?",
          a: "Ja! Vår JPG till PDF-konverterare är helt gratis med obegränsade konverteringar. Ingen registrering, prenumerationer eller dolda avgifter. Konvertera så många bilder du behöver för dokument, portföljer eller professionell användning.",
        },
        {
          q: "Kan jag konvertera flera JPG-bilder till en PDF?",
          a: "Ja! Vår batchkonverterare låter dig ladda upp upp till 20 JPG-bilder och konvertera dem till separata PDF-filer. Varje JPG-bild blir sitt eget PDF-dokument, vilket bevarar originalbildkvalitet och upplösning.",
        },
        {
          q: "Kommer bildkvaliteten att bevaras vid konvertering av JPG till PDF?",
          a: "Ja. Vi bevarar originalbildkvaliteten under konverteringen. Dina JPG-bilder konverteras till PDF-filer med hög upplösning utan komprimering eller kvalitetsförlust. PDF behåller samma bildkvalitet som originalet JPG.",
        },
        {
          q: "Kan jag använda PDF för utskrift?",
          a: "Absolut! PDF är standardformatet för utskrift. PDF är utskriftsklara och behåller bildkvalitet vid vilken upplösning som helst. PDF används av professionella tryckerier och är idealiska för portföljer, presentationer och dokument som behöver skrivas ut.",
        },
        {
          q: "Kommer PDF att fungera på alla enheter?",
          a: "Ja! PDF är universellt kompatibla och fungerar på alla enheter, operativsystem och plattformar. PDF kan öppnas på Windows, macOS, Linux, iOS, Android och vilken enhet som helst med en PDF-visare (som är inbyggd i de flesta moderna system).",
        },
        {
          q: "Kan jag redigera PDF efter konvertering?",
          a: "PDF skapade från JPG-bilder innehåller bilderna som inbäddat innehåll. Du kan visa och skriva ut PDF på vilken enhet som helst. För avancerad redigering (lägga till text, kombinera sidor, etc.) behöver du PDF-redigeringsprogramvara som Adobe Acrobat, men bilderna själva är perfekt bevarade i PDF-formatet.",
        },
        {
          q: "Vad är den maximala filstorleken för JPG till PDF-konvertering?",
          a: "Du kan konvertera JPG-filer upp till 100MB vardera. För batchkonvertering kan du ladda upp upp till 20 filer åt gången, med en total storleksgräns på 100MB. Den resulterande PDF behåller originalbildkvaliteten.",
        },
        {
          q: "Hur lång tid tar JPG till PDF-konvertering?",
          a: "Konverteringen tar 1-2 sekunder per bild. PDF-konvertering är snabb eftersom det främst är en formatändring som bevarar alla bilddata. Resultatet är en högkvalitativ PDF redo för delning, utskrift eller professionell användning.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "PDF till JPG", url: "/convert/pdf-to-jpg" },
        { name: "PNG till PDF", url: "/convert/png-to-pdf" },
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "JPG till PNG", url: "/convert/jpg-to-png" },
        { name: "JPG till WebP", url: "/convert/jpg-to-webp" },
        { name: "HEIF till PDF", url: "/convert/heif-to-pdf" },
      ],
    },
  },
  // HEIF to PNG Converter
  heifToPng: {
    title: "HEIF till PNG-konverterare - Konvertera HEIF-bilder Gratis Online till PNG",
    metaDescription:
      "Konvertera HEIF-bilder direkt till PNG-format. Gratis online HEIF till PNG-konverterare med batchbearbetning. Snabb, säker och ingen registrering krävs. Fungerar med HEIF-foton från alla enheter.",
    metaKeywords:
      "HEIF till PNG, konvertera HEIF, HEIF bilder till PNG, HEIF-konverterare, bild till PNG, batch konvertera HEIF, gratis HEIF-konverterare, HEIF vs HEIC",
    hero: {
      title: "HEIF till PNG-konverterare",
      subtitle:
        "Förvandla dina HEIF-bilder direkt till universellt PNG-format. Gratis, snabb och säker konvertering utan filstorleksbegränsningar. Perfekt för HEIF-foton från vilken enhet som helst.",
      badge1: "Blixtsnabb",
      badge2: "100% Säker",
      badge3: "Ingen Registrering",
    },
    upload: {
      title: "Ladda upp HEIF-filer",
      description:
        "Dra och släpp dina HEIF-bilder här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.",
      buttonSingle: "Enskild Fil",
      buttonBatch: "Batch Konvertera",
      chooseFile: "Välj Filer",
      converting: "Konverterar...",
      success: "Konvertering lyckades!",
      download: "Ladda ner PNG",
      downloadAll: "Ladda ner Alla som ZIP",
      convertAnother: "Konvertera Annan Fil",
    },
    features: {
      title: "Funktioner",
      list: [
        "Högkvalitativ HEIF till PNG-konvertering",
        "Batchbearbetning upp till 20 filer",
        "Bevarar bildkvalitet",
        "Ingen filstorleksbegränsning",
        "100% säker och privat",
        "Fungerar med HEIF-foton från alla enheter",
        "Omedelbar nedladdning efter konvertering",
        "Inga vattenstämplar tillagda",
      ],
    },
    howItWorks: {
      title: "Hur Det Fungerar",
      step1Title: "Ladda upp HEIF-filer",
      step1Desc: "Välj en eller flera HEIF-bilder från din enhet",
      step2Title: "Automatisk Konvertering",
      step2Desc: "Vår konverterare bearbetar dina filer direkt",
      step3Title: "Ladda ner PNG",
      step3Desc: "Få dina konverterade PNG-filer direkt",
    },
    about: {
      title: "Om HEIF till PNG-konvertering",
      whatIsHeif: {
        title: "Vad är HEIF-formatet?",
        content:
          "HEIF (High Efficiency Image Format) är ett modernt bildcontainerformat som använder HEVC (H.265) komprimering. Även om det liknar HEIC, är HEIF standardformatets namn, medan HEIC specifikt hänvisar till Apples implementering. HEIF erbjuder överlägsen komprimering jämfört med JPEG samtidigt som det behåller hög bildkvalitet, vilket gör det idealiskt för effektiv lagring av foton.",
      },
      whyConvert: {
        title: "Varför konvertera HEIF till PNG?",
        content:
          "Även om HEIF är effektivt och modernt, stöds det inte universellt på alla enheter och plattformar. Att konvertera HEIF till PNG säkerställer att dina bilder kan visas på vilken enhet som helst, enkelt delas via e-post, laddas upp till webbplatser och användas i vilken applikation som helst. PNG-formatet är det mest bredt stödda bildformatet i världen, vilket gör det idealiskt för maximal kompatibilitet och delning.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Vad är Skillnaden?",
        content:
          "HEIF (High Efficiency Image Format) är containerformatets standard, medan HEIC (High Efficiency Image Container) är Apples specifika implementering av HEIF. I praktiken är de mycket lika - båda använder samma komprimerings teknologi och erbjuder samma fördelar. Apple-enheter sparar foton som HEIC-filer, som faktiskt är HEIF-kompatibla. Vår konverterare hanterar båda formaten sömlöst, så du kan konvertera vilken HEIF/HEIC-bild som helst till PNG-format.",
      },
      benefits: {
        title: "Fördelar med Vår Konverterare",
        list: [
          "Universell Kompatibilitet - PNG fungerar på alla enheter och plattformar",
          "Mindre Filstorlek - Effektiv komprimering för snabbare delning",
          "Brett Stöd - Mest använda bildformatet i världen",
          "Enkel Delning - Kompatibel med alla e-postklienter och sociala medier",
          "Webbredo - Idealiskt för webbplatser, sociala medier och onlineanvändning",
          "Hög Kvalitet - Bevarar originalbildens upplösning",
        ],
      },
    },
    faq: {
      title: "Vanliga Frågor – HEIF till PNG",
      items: [
        {
          q: "Är det gratis att konvertera HEIF till PNG?",
          a: "Ja! Vår HEIF till PNG-konverterare är helt gratis utan dolda avgifter. Du kan konvertera obegränsat antal filer utan registrering eller prenumeration.",
        },
        {
          q: "Vad är skillnaden mellan HEIF och HEIC?",
          a: "HEIF (High Efficiency Image Format) är standardformatets namn, medan HEIC (High Efficiency Image Container) är Apples specifika implementering. De använder samma komprimerings teknologi och är funktionellt mycket lika. Vår konverterare hanterar båda formaten sömlöst.",
        },
        {
          q: "Är mina data säkra?",
          a: "Absolut. Alla konverteringar sker säkert på våra servrar med SSL-kryptering. Dina filer raderas automatiskt direkt efter konvertering. Vi lagrar, delar eller öppnar aldrig dina filer.",
        },
        {
          q: "Vad är den maximala filstorleken?",
          a: "Du kan konvertera HEIF-filer upp till 100MB vardera. För batchkonvertering kan du bearbeta upp till 20 filer samtidigt med en total gräns på 100MB.",
        },
        {
          q: "Stöder ni batchkonvertering?",
          a: "Ja! Du kan ladda upp och konvertera upp till 20 HEIF-filer samtidigt. Alla konverterade PNG:er kommer att vara tillgängliga för nedladdning som individuella filer eller i ett enda ZIP-arkiv.",
        },
        {
          q: "Kommer kvaliteten att bevaras?",
          a: "Ja, vi bevarar hög bildkvalitet under konvertering. Dina HEIF-bilder kommer att konverteras till högupplösta PNG:er med minimal kvalitetsförlust.",
        },
        {
          q: "Kan jag konvertera HEIF från vilken enhet som helst?",
          a: "Ja! Vår konverterare fungerar med HEIF-bilder från vilken enhet eller kamera som helst som stöder HEIF-formatet, inte bara Apple-enheter. Ladda bara upp dina HEIF-filer och konvertera dem till PNG.",
        },
        {
          q: "Behöver jag installera någon programvara?",
          a: "Ingen installation behövs. Vår onlinekonverterare fungerar direkt i din webbläsare på vilken enhet som helst - Windows, Mac, Linux, iOS eller Android.",
        },
        {
          q: "Hur lång tid tar konverteringen?",
          a: "Konvertering är nästan omedelbar! De flesta HEIF-filer konverteras till PNG på bara några sekunder, beroende på filstorleken och din internetanslutning.",
        },
      ],
    },
    related: {
      title: "Relaterade Konverterare",
      converters: [
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "HEIC till PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC till PNG", url: "/convert/heic-to-png" },
        { name: "HEIF till PNG", url: "/convert/heif-to-png" },
        { name: "PNG till PDF", url: "/convert/png-to-pdf" },
        { name: "PNG till PNG", url: "/convert/png-to-png" },
      ],
    },
  },
};

export type Translations = typeof sv;

