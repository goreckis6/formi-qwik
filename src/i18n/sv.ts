// Swedish translations
import type { Translations } from './en';

export const sv: Translations = {
  locale: 'sv',
  name: 'Svenska',
  flag: '🇸🇪',
  
  nav: {
    converters: 'Konverterare',
    viewers: 'Visare',
    compress: 'Komprimera',
    samples: 'Exempel',
  },
  
  home: {
    title: 'Gratis Online Filkonverterare - FormiPeek | Konvertera 300+ Format Direkt',
    metaDescription: 'Konvertera filer mellan 300+ format direkt. Snabb, säker och gratis filkonverteringstjänst. Stöd för bilder, dokument, e-böcker och datafiler.',
    metaKeywords: 'filkonverterare, online konverterare, bildkonverterare, dokumentkonverterare, e-bok konverterare, batchkonvertering, gratis konverterare',
    
    hero: {
      badge: 'Gratis För Alltid • Ingen Registrering',
      title: 'Transformera Filer',
      titleHighlight: 'Direkt',
      subtitle: 'Konvertera mellan {count} format med blixtsnabb hastighet. Säker, gratis och ingen registrering krävs.',
      buttonStart: 'Börja Konvertera',
      buttonView: 'Visa Filer',
      feature1: '100% Gratis',
      feature2: 'Ingen Registrering',
      feature3: 'Säker och Privat',
      feature4: 'Batchbearbetning',
    },
    
    stats: {
      formats: 'Stödda Format',
      dataProcessed: 'Bearbetad Data',
      batchFiles: 'Batchbearbetning',
    },
    
    explore: {
      title: 'Utforska Våra Verktyg',
      subtitle: 'Allt du behöver för filkonvertering, visning, komprimering och mer',
      converters: {
        title: 'Konverterare',
        description: 'Konvertera mellan 300+ filformat direkt. Bilder, dokument, e-böcker och datafiler.',
      },
      viewers: {
        title: 'Visare',
        description: 'Förhandsgranska och visa filer direkt i din webbläsare. Inga nedladdningar behövs.',
      },
      compress: {
        title: 'Komprimera',
        description: 'Minska filstorlekar utan kvalitetsförlust. JPG, PNG och PDF komprimering.',
      },
      samples: {
        title: 'Exempel',
        description: 'Bläddra genom exempelfiler för alla stödda format. Testa innan du konverterar.',
      },
    },
    
    howItWorks: {
      title: 'Hur Fungerar Våra Konverterare?',
      subtitle: 'Tre enkla steg för att konvertera vilket filformat som helst',
      step1: {
        title: 'Ladda Upp Fil',
        description: 'Dra och släpp eller bläddra för att välja din fil. Stöder upp till 100MB per fil.',
      },
      step2: {
        title: 'Välj Format',
        description: 'Välj önskat utdataformat från 300+ stödda format.',
      },
      step3: {
        title: 'Ladda Ner',
        description: 'Klicka på konvertera och ladda ner din fil direkt. Ingen väntan, inga köer.',
      },
    },
    
    popular: {
      title: 'Populära Konverterare',
      subtitle: 'Snabb åtkomst till våra mest använda konverteringsverktyg',
      viewAll: 'Visa Alla 300+ Konverterare',
      viewAllMobile: 'Visa Alla Konverterare',
    },
    
    features: {
      title: 'Varför Välja FormiPeek?',
      subtitle: 'Byggt för professionella och vardagsanvändare',
      lightning: {
        title: 'Blixtsnabb',
        description: 'Bearbeta filer på sekunder med vår optimerade konverteringsmotor',
      },
      secure: {
        title: 'Säker och Privat',
        description: 'Företagsnivå säkerhet. Filer raderas automatiskt efter bearbetning',
      },
      universal: {
        title: 'Universellt Stöd',
        description: 'Konvertera mellan 300+ formatkombinationer för alla filtyper',
      },
      batch: {
        title: 'Batchbearbetning',
        description: 'Konvertera upp till 20 filer åt gången med vår kraftfulla batchmotor',
      },
      viewer: {
        title: 'Filvisare',
        description: 'Förhandsgranska och visa dina filer direkt i webbläsaren',
      },
      quality: {
        title: 'Professionell Kvalitet',
        description: 'Industristandard konvertering med anpassningsbara inställningar',
      },
    },
  },
  
  // Converters Page
  converters: {
    title: 'Filkonverterare',
    subtitle: 'Konvertera mellan 300+ filformat direkt',
    searchPlaceholder: 'Sök konverterare... (t.ex. HEIC till PDF)',
    noConvertersFound: 'Inga konverterare hittades som matchar',
    heicToPdf: {
      name: 'HEIC till PDF',
      description: 'Konvertera Apple HEIC-foton till PDF-format direkt',
    },
    heicToPng: {
      name: 'HEIC till PNG',
      description: 'Konvertera Apple HEIC-foton till PNG-format direkt',
    },
  },
  
  heicToPdf: {
    title: 'HEIC till PDF Konverterare - Konvertera Apple Foton till PDF Gratis Online',
    metaDescription: 'Konvertera HEIC-bilder till PDF-format direkt. Gratis online HEIC till PDF konverterare med batchbearbetning. Snabb, säker och ingen registrering krävs. Fungerar med iPhone och iPad foton.',
    metaKeywords: 'HEIC till PDF, konvertera HEIC, Apple foton till PDF, iPhone foton till PDF, HEIC konverterare, bild till PDF, batch konvertera HEIC, gratis HEIC konverterare',
    
    hero: {
      title: 'HEIC till PDF Konverterare',
      subtitle: 'Transformera dina Apple HEIC-foton till universella PDF-dokument direkt. Gratis, snabb och säker konvertering utan filstorleksbegränsningar.',
      badge1: 'Blixtsnabb',
      badge2: '100% Säker',
      badge3: 'Ingen Registrering',
    },
    
    upload: {
      title: 'Ladda Upp HEIC Filer',
      description: 'Dra och släpp dina HEIC-foton här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.',
      buttonSingle: 'Enskild Fil',
      buttonBatch: 'Batch Konvertera',
      chooseFile: 'Välj Filer',
      converting: 'Konverterar...',
      success: 'Konvertering lyckades!',
      download: 'Ladda Ner PDF',
      downloadAll: 'Ladda Ner Alla som ZIP',
      convertAnother: 'Konvertera En Annan Fil',
    },
    
    features: {
      title: 'Funktioner',
      list: [
        'Högkvalitativ HEIC till PDF konvertering',
        'Batchbearbetning upp till 20 filer',
        'Bevarar bildkvalitet och EXIF-data',
        'Inga filstorleksbegränsningar',
        '100% säker och privat',
        'Fungerar med iPhone och iPad foton',
        'Omedelbar nedladdning efter konvertering',
        'Inga vattenstämplar tillagda',
      ],
    },
    
    howItWorks: {
      title: 'Hur Det Fungerar',
      step1Title: 'Ladda Upp HEIC Filer',
      step1Desc: 'Välj en eller flera HEIC-foton från din enhet',
      step2Title: 'Auto Konvertera',
      step2Desc: 'Vår konverterare bearbetar dina filer direkt',
      step3Title: 'Ladda Ner PDF',
      step3Desc: 'Få dina konverterade PDF-filer direkt',
    },
    
    about: {
      title: 'Om HEIC till PDF Konvertering',
      whatIsHeic: {
        title: 'Vad är HEIC-formatet?',
        content: 'HEIC (High Efficiency Image Container) är standardfotoformatet som används av Apple-enheter sedan iOS 11. Det erbjuder överlägsen komprimering samtidigt som det behåller hög bildkvalitet, vilket gör att foton tar mindre lagringsutrymme på din iPhone eller iPad.',
      },
      whyConvert: {
        title: 'Varför Konvertera HEIC till PDF?',
        content: 'Även om HEIC är effektivt stöds det inte universellt. Att konvertera till PDF säkerställer att dina foton kan visas på vilken enhet som helst, enkelt delas via e-post och presenteras professionellt i dokument. PDF:er är också idealiska för utskrift och arkivering.',
      },
      benefits: {
        title: 'Fördelar Med Vår Konverterare',
        list: [
          'Universell Kompatibilitet - PDF:er fungerar på alla enheter och plattformar',
          'Professionell Presentation - Perfekt för affärsdokument och portföljer',
          'Enkel Delning - E-postvänligt format som alla kan öppna',
          'Utskriftsredo - Behåller kvalitet för fysiska utskrifter',
          'Säker Lagring - Industristandard format för arkivering',
          'Ingen Kvalitetsförlust - Bevarar ursprunglig bildupplösning',
        ],
      },
    },
    
    faq: {
      title: 'Vanliga Frågor',
      q1: 'Är det gratis att konvertera HEIC till PDF?',
      a1: 'Ja! Vår HEIC till PDF konverterare är helt gratis utan dolda avgifter. Du kan konvertera obegränsat antal filer utan registrering eller prenumeration.',
      q2: 'Är mina data säkra?',
      a2: 'Absolut. Alla konverteringar sker säkert på våra servrar med SSL-kryptering. Dina filer raderas automatiskt direkt efter konvertering. Vi lagrar, delar eller öppnar aldrig dina filer.',
      q3: 'Vad är den maximala filstorleken?',
      a3: 'Du kan konvertera HEIC-filer upp till 100MB vardera. För batchkonvertering kan du bearbeta upp till 20 filer åt gången med en total gräns på 100MB.',
      q4: 'Stöder ni batchkonvertering?',
      a4: 'Ja! Du kan ladda upp och konvertera upp till 20 HEIC-filer samtidigt. Alla konverterade PDF:er kommer att vara tillgängliga för nedladdning som individuella filer eller i ett enda ZIP-arkiv.',
      q5: 'Kommer kvaliteten att bevaras?',
      a5: 'Ja, vi behåller den ursprungliga bildkvaliteten under konvertering. Dina HEIC-foton kommer att konverteras till högupplösta PDF:er utan komprimering eller kvalitetsförlust.',
      q6: 'Kan jag konvertera HEIC direkt från iPhone?',
      a6: 'Ja! Vår konverterare fungerar perfekt med foton tagna på iPhone, iPad eller vilken Apple-enhet som helst. Ladda bara upp dina HEIC-filer från din kamerarulle.',
      q7: 'Behöver jag installera någon programvara?',
      a7: 'Ingen installation behövs. Vår onlinekonverterare fungerar direkt i din webbläsare på vilken enhet som helst - Windows, Mac, Linux, iOS eller Android.',
      q8: 'Hur lång tid tar konvertering?',
      a8: 'Konvertering är nästan omedelbar! De flesta HEIC-filer konverteras till PDF på bara några sekunder, beroende på filstorlek och din internetanslutning.',
    },
    
    related: {
      title: 'Relaterade Konverterare',
      converters: [
        { name: 'HEIC till JPG', url: '/convert/heic-to-jpg' },
        { name: 'HEIC till PNG', url: '/convert/heic-to-png' },
        { name: 'JPG till PDF', url: '/convert/jpg-to-pdf' },
        { name: 'PNG till PDF', url: '/convert/png-to-pdf' },
        { name: 'WEBP till PDF', url: '/convert/webp-to-pdf' },
        { name: 'HEIC till WEBP', url: '/convert/heic-to-webp' },
      ],
    },
    
    footer: {
      tagline: 'Den ultimata filkonverterings- och visningsplattformen för professionella och vardagsanvändare.',
      security: '100% Säker: Inga filer lagras på våra servrar. Alla konverteringar bearbetas och filer raderas automatiskt direkt efter bearbetning.',
      copyright: '© 2025 FormiPeek',
      madeWith: 'Byggd med',
      byDevelopers: 'av utvecklare som bryr sig om kvalitet.',
    },
  },
  
  heicToPng: {
    title: 'HEIC till PNG-konverterare - Konvertera Apple-foton gratis online till PNG',
    metaDescription: 'Konvertera HEIC-bilder direkt till PNG-format. Gratis online HEIC till PNG-konverterare med batchbearbetning. Snabb, säker och ingen registrering krävs. Fungerar med iPhone- och iPad-foton.',
    metaKeywords: 'HEIC till PNG, konvertera HEIC, Apple foton till PNG, iPhone foton till PNG, HEIC-konverterare, bild till PNG, batch konvertera HEIC, gratis HEIC-konverterare',
    
    hero: {
      title: 'HEIC till PNG-konverterare',
      subtitle: 'Konvertera dina Apple HEIC-foton direkt till universella PNG-bilder. Gratis, snabb och säker konvertering utan filstorleksbegränsningar.',
      badge1: 'Blixtsnabb',
      badge2: '100% Säker',
      badge3: 'Ingen Registrering',
    },
    
    upload: {
      title: 'Ladda upp HEIC-filer',
      description: 'Dra och släpp dina HEIC-foton här eller klicka för att bläddra. Stöder batchkonvertering upp till 20 filer. Maximalt 100MB per fil.',
      buttonSingle: 'Enskild Fil',
      buttonBatch: 'Batch Konvertera',
      chooseFile: 'Välj Filer',
      converting: 'Konverterar...',
      success: 'Konvertering lyckades!',
      download: 'Ladda ner PNG',
      downloadAll: 'Ladda ner Alla som ZIP',
      convertAnother: 'Konvertera Annan Fil',
    },
    
    features: {
      title: 'Funktioner',
      list: [
        'Högkvalitativ HEIC till PNG-konvertering',
        'Batchbearbetning upp till 20 filer',
        'Bevarar bildkvalitet och transparens',
        'Ingen filstorleksbegränsning',
        '100% säker och privat',
        'Fungerar med iPhone- och iPad-foton',
        'Omedelbar nedladdning efter konvertering',
        'Inga vattenstämplar tillagda',
      ],
    },
    
    howItWorks: {
      title: 'Hur Det Fungerar',
      step1Title: 'Ladda upp HEIC-filer',
      step1Desc: 'Välj en eller flera HEIC-foton från din enhet',
      step2Title: 'Automatisk Konvertering',
      step2Desc: 'Vår konverterare bearbetar dina filer direkt',
      step3Title: 'Ladda ner PNG',
      step3Desc: 'Få dina konverterade PNG-filer direkt',
    },
    
    about: {
      title: 'Om HEIC till PNG-konvertering',
      whatIsHeic: {
        title: 'Vad är HEIC-formatet?',
        content: 'HEIC (High Efficiency Image Container) är standardfotoformatet som används av Apple-enheter sedan iOS 11. Det erbjuder överlägsen komprimering samtidigt som den höga bildkvaliteten bevaras, vilket gör att foton tar mindre lagringsutrymme på din iPhone eller iPad.',
      },
      whyConvert: {
        title: 'Varför konvertera HEIC till PNG?',
        content: 'Även om HEIC är effektivt, stöds det inte universellt. Att konvertera till PNG säkerställer att dina foton kan visas på vilken enhet som helst, enkelt delas via e-post och användas i webbdesign och grafik. PNG-formatet stöder transparens och förlustfri komprimering, vilket gör det idealiskt för professionell användning.',
      },
      benefits: {
        title: 'Fördelar med Vår Konverterare',
        list: [
          'Universell Kompatibilitet - PNG fungerar på alla enheter och plattformar',
          'Transparensstöd - Perfekt för grafik och webbdesign',
          'Förlustfri Kvalitet - Inga komprimeringsartefakter eller kvalitetsförlust',
          'Enkel Delning - Brett stött format som vem som helst kan öppna',
          'Webbredo - Idealiskt för webbplatser, sociala medier och onlineanvändning',
          'Ingen Kvalitetsförlust - Bevarar originalbildens upplösning',
        ],
      },
    },
    
    faq: {
      title: 'Vanliga Frågor',
      q1: 'Är det gratis att konvertera HEIC till PNG?',
      a1: 'Ja! Vår HEIC till PNG-konverterare är helt gratis utan dolda avgifter. Du kan konvertera obegränsat antal filer utan registrering eller prenumeration.',
      q2: 'Är mina data säkra?',
      a2: 'Absolut. Alla konverteringar sker säkert på våra servrar med SSL-kryptering. Dina filer raderas automatiskt direkt efter konvertering. Vi lagrar, delar eller öppnar aldrig dina filer.',
      q3: 'Vad är den maximala filstorleken?',
      a3: 'Du kan konvertera HEIC-filer upp till 100MB vardera. För batchkonvertering kan du bearbeta upp till 20 filer samtidigt med en total gräns på 100MB.',
      q4: 'Stöder ni batchkonvertering?',
      a4: 'Ja! Du kan ladda upp och konvertera upp till 20 HEIC-filer samtidigt. Alla konverterade PNG:er kommer att vara tillgängliga för nedladdning som individuella filer eller i ett enda ZIP-arkiv.',
      q5: 'Kommer kvaliteten att bevaras?',
      a5: 'Ja, vi bevarar originalbildkvaliteten under konvertering. Dina HEIC-foton kommer att konverteras till högupplösta PNG:er utan komprimering eller kvalitetsförlust.',
      q6: 'Kan jag konvertera HEIC direkt från iPhone?',
      a6: 'Ja! Vår konverterare fungerar perfekt med foton tagna på iPhone, iPad eller vilken Apple-enhet som helst. Ladda bara upp dina HEIC-filer från ditt kamerarull.',
      q7: 'Behöver jag installera någon programvara?',
      a7: 'Ingen installation behövs. Vår onlinekonverterare fungerar direkt i din webbläsare på vilken enhet som helst - Windows, Mac, Linux, iOS eller Android.',
      q8: 'Hur lång tid tar konverteringen?',
      a8: 'Konvertering är nästan omedelbar! De flesta HEIC-filer konverteras till PNG på bara några sekunder, beroende på filstorleken och din internetanslutning.',
    },
    
    related: {
      title: 'Relaterade Konverterare',
      converters: [
        { name: 'HEIC till PDF', url: '/convert/heic-to-pdf' },
        { name: 'HEIC till JPG', url: '/convert/heic-to-jpg' },
        { name: 'PNG till PDF', url: '/convert/png-to-pdf' },
        { name: 'JPG till PNG', url: '/convert/jpg-to-png' },
        { name: 'WEBP till PNG', url: '/convert/webp-to-png' },
        { name: 'HEIC till WEBP', url: '/convert/heic-to-webp' },
      ],
    },
    
    footer: {
      tagline: 'Den ultimata filkonverterings- och visningsplattformen för proffs och dagliga användare.',
      security: '100% Säker: Inga filer lagras på våra servrar. Alla konverteringar bearbetas och filer raderas automatiskt direkt efter bearbetning.',
      copyright: '© 2025 FormiPeek',
      madeWith: 'Byggd med',
      byDevelopers: 'av utvecklare som bryr sig om kvalitet.',
    },
  },
};
