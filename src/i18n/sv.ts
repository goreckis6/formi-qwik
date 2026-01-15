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
    heicToAvif: {
      name: "HEIC till AVIF",
      description: "Konvertera Apple HEIC-foton till AVIF-format direkt",
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
        title: "Vanliga Frågor",
        q1: "Är det gratis att konvertera HEIC till JPG?",
        a1: "Ja! Vår HEIC till JPG-konverterare är helt gratis utan dolda avgifter. Du kan konvertera obegränsat antal filer utan registrering eller prenumeration.",
        q2: "Är mina data säkra?",
        a2: "Absolut. Alla konverteringar sker säkert på våra servrar med SSL-kryptering. Dina filer raderas automatiskt direkt efter konvertering. Vi lagrar, delar eller öppnar aldrig dina filer.",
        q3: "Vad är den maximala filstorleken?",
        a3: "Du kan konvertera HEIC-filer upp till 100MB vardera. För batchkonvertering kan du bearbeta upp till 20 filer samtidigt med en total gräns på 100MB.",
        q4: "Stöder ni batchkonvertering?",
        a4: "Ja! Du kan ladda upp och konvertera upp till 20 HEIC-filer samtidigt. Alla konverterade JPG:er kommer att vara tillgängliga för nedladdning som individuella filer eller i ett enda ZIP-arkiv.",
        q5: "Kommer kvaliteten att bevaras?",
        a5: "Ja, vi bevarar hög bildkvalitet under konvertering. Dina HEIC-foton kommer att konverteras till högupplösta JPG:er med minimal kvalitetsförlust.",
        q6: "Kan jag konvertera HEIC direkt från iPhone?",
        a6: "Ja! Vår konverterare fungerar perfekt med foton tagna på iPhone, iPad eller vilken Apple-enhet som helst. Ladda bara upp dina HEIC-filer från ditt kamerarull.",
        q7: "Behöver jag installera någon programvara?",
        a7: "Ingen installation behövs. Vår onlinekonverterare fungerar direkt i din webbläsare på vilken enhet som helst - Windows, Mac, Linux, iOS eller Android.",
        q8: "Hur lång tid tar konverteringen?",
        a8: "Konvertering är nästan omedelbar! De flesta HEIC-filer konverteras till JPG på bara några sekunder, beroende på filstorleken och din internetanslutning.",
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

    footer: {
      tagline:
        "Den ultimata filkonverterings- och visningsplattformen för proffs och dagliga användare.",
      security:
        "100% Säker: Inga filer lagras på våra servrar. Alla konverteringar bearbetas och filer raderas automatiskt direkt efter bearbetning.",
      copyright: "© 2025 FormiPeek",
      madeWith: "Byggd med",
      byDevelopers: "av utvecklare som bryr sig om kvalitet.",
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
};
