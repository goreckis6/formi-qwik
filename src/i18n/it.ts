// Italian translations
import type { Translations } from './en';

export const it: Translations = {
  locale: 'it',
  name: 'Italiano',
  flag: '🇮🇹',
  
  nav: {
    converters: 'Convertitori',
    viewers: 'Visualizzatori',
    compress: 'Comprimi',
    samples: 'Esempi',
  },
  
  home: {
    title: 'Convertitore di File Online Gratuito - FormiPeek | Converti 300+ Formati Istantaneamente',
    metaDescription: 'Converti file tra 300+ formati istantaneamente. Servizio di conversione file veloce, sicuro e gratuito. Supporto per immagini, documenti, ebook e file di dati.',
    metaKeywords: 'convertitore di file, convertitore online, convertitore di immagini, convertitore di documenti, convertitore di ebook, conversione batch, convertitore gratuito',
    
    hero: {
      badge: 'Gratis Per Sempre • Nessuna Registrazione',
      title: 'Trasforma File',
      titleHighlight: 'Istantaneamente',
      subtitle: 'Converti tra {count} formati con velocità fulminea. Sicuro, gratuito e senza registrazione richiesta.',
      buttonStart: 'Inizia Conversione',
      buttonView: 'Visualizza File',
      feature1: '100% Gratis',
      feature2: 'Nessuna Registrazione',
      feature3: 'Sicuro e Privato',
      feature4: 'Elaborazione Batch',
    },
    
    stats: {
      formats: 'Formati Supportati',
      dataProcessed: 'Dati Elaborati',
      batchFiles: 'Elaborazione Batch',
    },
    
    explore: {
      title: 'Esplora I Nostri Strumenti',
      subtitle: 'Tutto ciò di cui hai bisogno per conversione file, visualizzazione, compressione e altro',
      converters: {
        title: 'Convertitori',
        description: 'Converti tra 300+ formati di file istantaneamente. Immagini, documenti, ebook e file di dati.',
      },
      viewers: {
        title: 'Visualizzatori',
        description: 'Anteprima e visualizzazione file direttamente nel tuo browser. Nessun download necessario.',
      },
      compress: {
        title: 'Comprimi',
        description: 'Riduci le dimensioni dei file senza perdere qualità. Compressione JPG, PNG e PDF.',
      },
      samples: {
        title: 'Esempi',
        description: 'Sfoglia file di esempio per tutti i formati supportati. Prova prima di convertire.',
      },
    },
    
    howItWorks: {
      title: 'Come Funzionano I Nostri Convertitori?',
      subtitle: 'Tre semplici passaggi per convertire qualsiasi formato di file',
      step1: {
        title: 'Carica File',
        description: 'Trascina e rilascia o sfoglia per selezionare il tuo file. Supporta fino a 100MB per file.',
      },
      step2: {
        title: 'Scegli Formato',
        description: 'Seleziona il formato di output desiderato da 300+ formati supportati.',
      },
      step3: {
        title: 'Scarica',
        description: 'Clicca converti e scarica il tuo file istantaneamente. Nessuna attesa, nessuna coda.',
      },
    },
    
    popular: {
      title: 'Convertitori Popolari',
      subtitle: 'Accesso rapido ai nostri strumenti di conversione più utilizzati',
      viewAll: 'Vedi Tutti i 300+ Convertitori',
      viewAllMobile: 'Vedi Tutti i Convertitori',
    },
    
    features: {
      title: 'Perché Scegliere FormiPeek?',
      subtitle: 'Costruito per professionisti e utenti quotidiani allo stesso modo',
      lightning: {
        title: 'Velocità Fulminea',
        description: 'Elabora file in secondi con il nostro motore di conversione ottimizzato',
      },
      secure: {
        title: 'Sicuro e Privato',
        description: 'Sicurezza di livello aziendale. I file vengono eliminati automaticamente dopo l\'elaborazione',
      },
      universal: {
        title: 'Supporto Universale',
        description: 'Converti tra 300+ combinazioni di formati per tutti i tipi di file',
      },
      batch: {
        title: 'Elaborazione Batch',
        description: 'Converti fino a 20 file alla volta con il nostro potente motore batch',
      },
      viewer: {
        title: 'Visualizzatore File',
        description: 'Anteprima e visualizzazione dei tuoi file direttamente nel browser',
      },
      quality: {
        title: 'Qualità Professionale',
        description: 'Conversione di standard industriale con impostazioni personalizzabili',
      },
    },
  },
  
  // Converters Page
  converters: {
    title: 'Convertitori di File',
    subtitle: 'Converti tra 300+ formati di file istantaneamente',
    searchPlaceholder: 'Cerca convertitori... (es. HEIC a PDF)',
    heicToPdf: {
      name: 'HEIC a PDF',
      description: 'Converti foto Apple HEIC in formato PDF istantaneamente',
    },
  },
  
  heicToPdf: {
    title: 'Convertitore da HEIC a PDF - Converti Foto Apple in PDF Gratis Online',
    metaDescription: 'Converti immagini HEIC in formato PDF istantaneamente. Convertitore gratuito online da HEIC a PDF con elaborazione batch. Veloce, sicuro e senza registrazione richiesta. Funziona con foto iPhone e iPad.',
    metaKeywords: 'HEIC a PDF, convertire HEIC, foto Apple a PDF, foto iPhone a PDF, convertitore HEIC, immagine a PDF, conversione batch HEIC, convertitore HEIC gratuito',
    
    hero: {
      title: 'Convertitore da HEIC a PDF',
      subtitle: 'Trasforma le tue foto HEIC Apple in documenti PDF universali istantaneamente. Conversione gratuita, veloce e sicura senza limiti di dimensione file.',
      badge1: 'Velocissimo',
      badge2: '100% Sicuro',
      badge3: 'Senza Registrazione',
    },
    
    upload: {
      title: 'Carica File HEIC',
      description: 'Trascina e rilascia le tue foto HEIC qui o clicca per sfogliare. Supporta conversione batch fino a 20 file. Massimo 100MB per file.',
      buttonSingle: 'File Singolo',
      buttonBatch: 'Conversione Batch',
      chooseFile: 'Scegli File',
      converting: 'Conversione in corso...',
      success: 'Conversione riuscita!',
      download: 'Scarica PDF',
      downloadAll: 'Scarica Tutto come ZIP',
      convertAnother: 'Converti un Altro File',
    },
    
    features: {
      title: 'Caratteristiche',
      list: [
        'Conversione da HEIC a PDF di alta qualità',
        'Elaborazione batch fino a 20 file',
        'Preserva qualità immagine e dati EXIF',
        'Nessun limite di dimensione file',
        '100% sicuro e privato',
        'Funziona con foto iPhone e iPad',
        'Download istantaneo dopo conversione',
        'Nessuna filigrana aggiunta',
      ],
    },
    
    howItWorks: {
      title: 'Come Funziona',
      step1Title: 'Carica File HEIC',
      step1Desc: 'Seleziona una o più foto HEIC dal tuo dispositivo',
      step2Title: 'Conversione Automatica',
      step2Desc: 'Il nostro convertitore elabora i tuoi file istantaneamente',
      step3Title: 'Scarica PDF',
      step3Desc: 'Ottieni i tuoi file PDF convertiti immediatamente',
    },
    
    about: {
      title: 'Informazioni sulla Conversione da HEIC a PDF',
      whatIsHeic: {
        title: 'Cos\'è il formato HEIC?',
        content: 'HEIC (High Efficiency Image Container) è il formato foto predefinito utilizzato dai dispositivi Apple da iOS 11. Offre compressione superiore mantenendo alta qualità dell\'immagine, facendo occupare meno spazio di archiviazione alle foto sul tuo iPhone o iPad.',
      },
      whyConvert: {
        title: 'Perché Convertire HEIC in PDF?',
        content: 'Sebbene HEIC sia efficiente, non è universalmente supportato. La conversione in PDF garantisce che le tue foto possano essere visualizzate su qualsiasi dispositivo, condivise facilmente via email e presentate professionalmente nei documenti. I PDF sono anche ideali per la stampa e l\'archiviazione.',
      },
      benefits: {
        title: 'Vantaggi del Nostro Convertitore',
        list: [
          'Compatibilità Universale - I PDF funzionano su tutti i dispositivi e piattaforme',
          'Presentazione Professionale - Perfetto per documenti aziendali e portfolio',
          'Facile Condivisione - Formato email-friendly che chiunque può aprire',
          'Pronto per la Stampa - Mantiene la qualità per stampe fisiche',
          'Archiviazione Sicura - Formato standard dell\'industria per l\'archiviazione',
          'Nessuna Perdita di Qualità - Preserva la risoluzione dell\'immagine originale',
        ],
      },
    },
    
    faq: {
      title: 'Domande Frequenti',
      q1: 'È gratuito convertire HEIC in PDF?',
      a1: 'Sì! Il nostro convertitore da HEIC a PDF è completamente gratuito senza costi nascosti. Puoi convertire file illimitati senza alcuna registrazione o abbonamento.',
      q2: 'I miei dati sono al sicuro?',
      a2: 'Assolutamente. Tutte le conversioni avvengono in modo sicuro sui nostri server con crittografia SSL. I tuoi file vengono eliminati automaticamente subito dopo la conversione. Non memorizziamo, condividiamo o accediamo mai ai tuoi file.',
      q3: 'Qual è la dimensione massima del file?',
      a3: 'Puoi convertire file HEIC fino a 100MB ciascuno. Per la conversione batch, puoi elaborare fino a 20 file alla volta con un limite totale di 100MB.',
      q4: 'Supportate la conversione batch?',
      a4: 'Sì! Puoi caricare e convertire fino a 20 file HEIC simultaneamente. Tutti i PDF convertiti saranno disponibili per il download come file singoli o in un unico archivio ZIP.',
      q5: 'La qualità verrà preservata?',
      a5: 'Sì, manteniamo la qualità dell\'immagine originale durante la conversione. Le tue foto HEIC verranno convertite in PDF ad alta risoluzione senza compressione o perdita di qualità.',
      q6: 'Posso convertire HEIC direttamente da iPhone?',
      a6: 'Sì! Il nostro convertitore funziona perfettamente con foto scattate su iPhone, iPad o qualsiasi dispositivo Apple. Basta caricare i tuoi file HEIC dal rullino fotografico.',
      q7: 'Devo installare software?',
      a7: 'Nessuna installazione necessaria. Il nostro convertitore online funziona direttamente nel tuo browser web su qualsiasi dispositivo - Windows, Mac, Linux, iOS o Android.',
      q8: 'Quanto tempo impiega la conversione?',
      a8: 'La conversione è quasi istantanea! La maggior parte dei file HEIC viene convertita in PDF in pochi secondi, a seconda della dimensione del file e della tua connessione internet.',
    },
    
    related: {
      title: 'Convertitori Correlati',
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
      tagline: 'La piattaforma definitiva per la conversione e visualizzazione di file per professionisti e utenti quotidiani.',
      security: '100% Sicuro: Nessun file viene memorizzato sui nostri server. Tutte le conversioni vengono elaborate e i file vengono eliminati automaticamente immediatamente dopo l\'elaborazione.',
      copyright: '© 2025 FormiPeek',
      madeWith: 'Realizzato con',
      byDevelopers: 'da sviluppatori che si preoccupano della qualità.',
    },
  },
};
