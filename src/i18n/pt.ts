// Portuguese translations
import type { Translations as EnTranslations } from "./en";

export const pt: EnTranslations = {
  locale: "pt",
  name: "Português",
  flag: "🇵🇹",

  nav: {
    converters: "Conversores",
    viewers: "Visualizadores",
    compress: "Comprimir",
    samples: "Amostras",
  },

  home: {
    title:
      "Conversor de Arquivos Online Grátis - FormiPeek | Converta 300+ Formatos Instantaneamente",
    metaDescription:
      "Converta arquivos entre 300+ formatos instantaneamente. Serviço de conversão de arquivos rápido, seguro e gratuito. Suporte para imagens, documentos, ebooks e arquivos de dados.",
    metaKeywords:
      "conversor de arquivos, conversor online, conversor de imagens, conversor de documentos, conversor de ebooks, conversão em lote, conversor gratuito",

    hero: {
      badge: "Gratuito Para Sempre • Sem Registro",
      title: "Transforme Arquivos",
      titleHighlight: "Instantaneamente",
      subtitle:
        "Converta entre {count} formatos com velocidade relâmpago. Seguro, gratuito e sem necessidade de registro.",
      buttonStart: "Começar Conversão",
      buttonView: "Ver Arquivos",
      feature1: "100% Gratuito",
      feature2: "Sem Registro",
      feature3: "Seguro e Privado",
      feature4: "Processamento em Lote",
    },

    stats: {
      formats: "Formatos Suportados",
      dataProcessed: "Dados Processados",
      batchFiles: "Processamento em Lote",
    },

    explore: {
      title: "Explore Nossas Ferramentas",
      subtitle: "Tudo que você precisa para conversão de arquivos, visualização, compressão e mais",
      converters: {
        title: "Conversores",
        description:
          "Converta entre 300+ formatos de arquivos instantaneamente. Imagens, documentos, ebooks e arquivos de dados.",
      },
      viewers: {
        title: "Visualizadores",
        description:
          "Visualize e veja arquivos diretamente no seu navegador. Nenhum download necessário.",
      },
      compress: {
        title: "Comprimir",
        description:
          "Reduza o tamanho dos arquivos sem perder qualidade. Compressão JPG, PNG e PDF.",
      },
      samples: {
        title: "Amostras",
        description:
          "Navegue arquivos de exemplo para todos os formatos suportados. Teste antes de converter.",
      },
    },

    howItWorks: {
      title: "Como Funcionam Nossos Conversores?",
      subtitle: "Três passos simples para converter qualquer formato de arquivo",
      step1: {
        title: "Enviar Arquivo",
        description:
          "Arraste e solte ou navegue para selecionar seu arquivo. Suporta até 100MB por arquivo.",
      },
      step2: {
        title: "Escolher Formato",
        description: "Selecione seu formato de saída desejado de 300+ formatos suportados.",
      },
      step3: {
        title: "Baixar",
        description:
          "Clique em converter e baixe seu arquivo instantaneamente. Sem espera, sem filas.",
      },
    },

    popular: {
      title: "Conversores Populares",
      subtitle: "Acesso rápido às nossas ferramentas de conversão mais usadas",
      viewAll: "Ver Todos os 300+ Conversores",
      viewAllMobile: "Ver Todos os Conversores",
    },

    features: {
      title: "Por Que Escolher FormiPeek?",
      subtitle: "Construído para profissionais e usuários cotidianos",
      lightning: {
        title: "Ultra Rápido",
        description: "Processe arquivos em segundos com nosso motor de conversão otimizado",
      },
      secure: {
        title: "Seguro e Privado",
        description:
          "Segurança de nível empresarial. Arquivos são automaticamente excluídos após processamento",
      },
      universal: {
        title: "Suporte Universal",
        description: "Converta entre 300+ combinações de formatos em todos os tipos de arquivos",
      },
      batch: {
        title: "Processamento em Lote",
        description: "Converta até 20 arquivos de uma vez com nosso poderoso motor em lote",
      },
      viewer: {
        title: "Visualizador de Arquivos",
        description: "Visualize e veja seus arquivos diretamente no navegador",
      },
      quality: {
        title: "Qualidade Profissional",
        description: "Conversão de padrão industrial com configurações personalizáveis",
      },
    },

    faq: {
      title: "Perguntas Frequentes",
      items: [
        {
          q: "O que é FormiPeek?",
          a: "FormiPeek é uma plataforma online gratuita que permite converter, visualizar e comprimir arquivos diretamente no navegador. Suporta mais de 300 combinações de formatos de arquivo sem necessidade de instalação.",
        },
        {
          q: "FormiPeek é gratuito?",
          a: "Sim. Todas as ferramentas de conversão e visualização de arquivos no FormiPeek são completamente gratuitas e não requerem registro ou assinaturas.",
        },
        {
          q: "Meus arquivos estão seguros no FormiPeek?",
          a: "Sim. Os arquivos enviados para FormiPeek são processados com segurança e excluídos automaticamente após a conversão. Nunca armazenamos ou compartilhamos seus arquivos.",
        },
        {
          q: "Quais formatos de arquivo o FormiPeek suporta?",
          a: "FormiPeek suporta mais de 300 combinações de formatos de arquivo, incluindo imagens, documentos, ebooks e arquivos de dados como PDF, JPG, PNG, HEIC, CSV, EPUB e mais.",
        },
        {
          q: "Preciso instalar algum software?",
          a: "Não. FormiPeek funciona inteiramente online no navegador em qualquer dispositivo, incluindo Windows, macOS, Linux, iOS e Android.",
        },
        {
          q: "Posso converter vários arquivos de uma vez?",
          a: "Sim. FormiPeek suporta conversão em lote, permitindo converter até 20 arquivos de uma vez com um limite de tamanho total de 100MB.",
        },
      ],
    },
  },

  // Converters Page
  converters: {
    title: "Conversores de Arquivos",
    subtitle: "Converta entre 300+ formatos de arquivo instantaneamente",
    searchPlaceholder: "Pesquisar conversores... (ex., HEIC para PDF)",
    noConvertersFound: "Nenhum conversor encontrado correspondente a",
    sections: {
      heic: {
        title: "Conversores HEIC",
        description: "Converta imagens no formato Apple HEIC. HEIC (High Efficiency Image Container) é o formato de imagem proprietário da Apple usado por iPhones e iPads desde o iOS 11. Fornece excelente compressão mantendo alta qualidade de imagem.",
      },
      heif: {
        title: "Conversores HEIF",
        description: "Converta imagens no formato HEIF. HEIF (High Efficiency Image Format) é o formato contêiner padrão aberto no qual HEIC é baseado. Enquanto HEIC é a implementação da Apple, HEIF é usado por outros dispositivos e plataformas.",
        difference: "Nota: HEIF é o formato contêiner, enquanto HEIC é a implementação específica da Apple. Ambos os formatos são compatíveis, mas arquivos HEIC são mais comumente usados por dispositivos Apple.",
      },
      jpg: {
        title: "Conversores JPG",
        description: "Converter imagens JPG/JPEG para outros formatos. JPG (Joint Photographic Experts Group) é o formato de imagem mais usado para fotos, otimizado para conteúdo fotográfico com compressão com perda.",
      },
    },
    heicToPdf: {
      name: "HEIC para PDF",
      description: "Converta fotos Apple HEIC para formato PDF instantaneamente",
    },
    heicToPng: {
      name: "HEIC para PNG",
      description: "Converta fotos Apple HEIC para formato PNG instantaneamente",
    },
    heicToJpg: {
      name: "HEIC para JPG",
      description: "Converta fotos Apple HEIC para formato JPG instantaneamente",
    },
    heicToWebp: {
      name: "HEIC para WebP",
      description: "Converta fotos Apple HEIC para formato WebP instantaneamente",
    },
    heicToTiff: {
      name: "HEIC para TIFF",
      description: "Converta fotos Apple HEIC para o formato TIFF instantaneamente",
    },
    heicToAvif: {
      name: "HEIC para AVIF",
      description: "Converta fotos Apple HEIC para formato AVIF instantaneamente",
    },
    heicToGif: {
      name: "HEIC para GIF",
      description: "Converta fotos Apple HEIC para formato GIF instantaneamente",
    },
    heifToJpg: {
      name: "HEIF para JPG",
      description: "Converta imagens HEIF para formato JPG instantaneamente",
    },
    heifToPng: {
      name: "HEIF para PNG",
      description: "Converta imagens HEIF para formato PNG instantaneamente",
    },
    heifToPdf: {
      name: "HEIF para PDF",
      description: "Converta imagens HEIF para formato PDF instantaneamente",
    },
    heifToWebp: {
      name: "HEIF para WebP",
      description: "Converta imagens HEIF para formato WebP instantaneamente",
    },
    heifToAvif: {
      name: "HEIF para AVIF",
      description: "Converta imagens HEIF para formato AVIF instantaneamente",
    },
    heifToTiff: {
      name: "HEIF para TIFF",
      description: "Converta imagens HEIF para formato TIFF instantaneamente",
    },
    heifToGif: {
      name: "HEIF para GIF",
      description: "Converter imagens HEIF para GIF para mídias sociais e compartilhamento",
    },
    jpgToPng: {
      name: "JPG para PNG",
      description: "Converter JPG para PNG para transparência e qualidade sem perda",
    },
  },

  heicToPdf: {
    title: "Conversor de HEIC para PDF - Converta Fotos da Apple para PDF Grátis Online",
    metaDescription:
      "Converta imagens HEIC para formato PDF instantaneamente. Conversor gratuito online de HEIC para PDF com processamento em lote. Rápido, seguro e sem registro necessário. Funciona com fotos do iPhone e iPad.",
    metaKeywords:
      "HEIC para PDF, converter HEIC, fotos Apple para PDF, fotos iPhone para PDF, conversor HEIC, imagem para PDF, conversão em lote HEIC, conversor HEIC gratuito",

    hero: {
      title: "Conversor de HEIC para PDF",
      subtitle:
        "Transforme suas fotos HEIC da Apple em documentos PDF universais instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },

    upload: {
      title: "Carregar Arquivos HEIC",
      description:
        "Arraste e solte suas fotos HEIC aqui ou clique para navegar. Suporta conversão em lote de até 20 arquivos. Máximo de 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar PDF",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },

    features: {
      title: "Recursos",
      list: [
        "Conversão de HEIC para PDF de alta qualidade",
        "Processamento em lote de até 20 arquivos",
        "Preserva qualidade da imagem e dados EXIF",
        "Sem limites de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos de iPhone e iPad",
        "Download instantâneo após conversão",
        "Sem marcas d'água adicionadas",
      ],
    },

    howItWorks: {
      title: "Como Funciona",
      step1Title: "Carregar Arquivos HEIC",
      step1Desc: "Selecione uma ou várias fotos HEIC do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar PDF",
      step3Desc: "Obtenha seus arquivos PDF convertidos imediatamente",
    },

    about: {
      title: "Sobre a Conversão de HEIC para PDF",
      whatIsHeic: {
        title: "O que é o formato HEIC?",
        content:
          "HEIC (High Efficiency Image Container) é o formato de foto padrão usado por dispositivos Apple desde o iOS 11. Oferece compressão superior mantendo alta qualidade de imagem, fazendo com que as fotos ocupem menos espaço de armazenamento no seu iPhone ou iPad.",
      },
      whyConvert: {
        title: "Por que Converter HEIC para PDF?",
        content:
          "Embora o HEIC seja eficiente, não é universalmente suportado. Converter para PDF garante que suas fotos possam ser visualizadas em qualquer dispositivo, facilmente compartilhadas por e-mail e apresentadas profissionalmente em documentos. PDFs também são ideais para impressão e arquivamento.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Compatibilidade Universal - PDFs funcionam em todos os dispositivos e plataformas",
          "Apresentação Profissional - Perfeito para documentos empresariais e portfólios",
          "Fácil Compartilhamento - Formato amigável por e-mail que qualquer um pode abrir",
          "Pronto para Impressão - Mantém a qualidade para impressões físicas",
          "Armazenamento Seguro - Formato padrão da indústria para arquivamento",
          "Sem Perda de Qualidade - Preserva a resolução original da imagem",
        ],
      },
    },

    faq: {
      title: "Perguntas Frequentes – HEIC para PDF",
      items: [
        {
          q: "É grátis converter HEIC para PDF?",
          a: "Sim! Nosso conversor de HEIC para PDF é completamente gratuito de usar. Você pode converter imagens HEIC para PDF sem registro, assinaturas ou taxas ocultas.",
        },
        {
          q: "Posso converter fotos HEIC do iPhone para PDF?",
          a: "Sim. Você pode converter fotos HEIC tiradas no iPhone, iPad ou qualquer dispositivo Apple diretamente para PDF. Basta carregar seus arquivos HEIC do seu dispositivo, e a conversão funciona instantaneamente no seu navegador.",
        },
        {
          q: "A qualidade será preservada ao converter HEIC para PDF?",
          a: "Sim. Preservamos a qualidade original da imagem durante a conversão. Suas fotos HEIC são convertidas em arquivos PDF de alta resolução sem compressão ou perda de qualidade.",
        },
        {
          q: "Qual é o tamanho máximo de arquivo para conversão de HEIC para PDF?",
          a: "Você pode converter arquivos HEIC de até 100MB por arquivo. Para conversão em lote, você pode carregar até 20 arquivos de uma vez, com um limite de tamanho total de 100MB.",
        },
      ],
    },

    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "JPG para PDF", url: "/convert/jpg-to-pdf" },
        { name: "PNG para PDF", url: "/convert/png-to-pdf" },
        { name: "WEBP para PDF", url: "/convert/webp-to-pdf" },
        { name: "HEIC para WEBP", url: "/convert/heic-to-webp" },
      ],
    },

    footer: {
      tagline:
        "A plataforma definitiva de conversão e visualização de arquivos para profissionais e usuários comuns.",
      security:
        "100% Seguro: Nenhum arquivo é armazenado em nossos servidores. Todas as conversões são processadas e os arquivos são automaticamente excluídos imediatamente após o processamento.",
      copyright: "© 2025 FormiPeek",
      madeWith: "Feito com",
      byDevelopers: "por desenvolvedores que se preocupam com a qualidade.",
    },
  },

  heicToPng: {
    title: "Conversor de HEIC para PNG - Converta Fotos da Apple para PNG Grátis Online",
    metaDescription:
      "Converta imagens HEIC para formato PNG instantaneamente. Conversor gratuito online de HEIC para PNG com processamento em lote. Rápido, seguro e sem registro necessário. Funciona com fotos do iPhone e iPad.",
    metaKeywords:
      "HEIC para PNG, converter HEIC, fotos Apple para PNG, fotos iPhone para PNG, conversor HEIC, imagem para PNG, conversão em lote HEIC, conversor HEIC gratuito",

    hero: {
      title: "Conversor de HEIC para PNG",
      subtitle:
        "Transforme suas fotos HEIC da Apple em imagens PNG universais instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },

    upload: {
      title: "Carregar Arquivos HEIC",
      description:
        "Arraste e solte suas fotos HEIC aqui ou clique para navegar. Suporta conversão em lote de até 20 arquivos. Máximo de 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar PNG",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },

    features: {
      title: "Recursos",
      list: [
        "Conversão de HEIC para PNG de alta qualidade",
        "Processamento em lote de até 20 arquivos",
        "Preserva qualidade da imagem e transparência",
        "Sem limites de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos de iPhone e iPad",
        "Download instantâneo após conversão",
        "Sem marcas d'água adicionadas",
      ],
    },

    howItWorks: {
      title: "Como Funciona",
      step1Title: "Carregar Arquivos HEIC",
      step1Desc: "Selecione uma ou múltiplas fotos HEIC do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar PNG",
      step3Desc: "Obtenha seus arquivos PNG convertidos imediatamente",
    },

    about: {
      title: "Sobre a Conversão HEIC para PNG",
      whatIsHeic: {
        title: "O que é o Formato HEIC?",
        content:
          "HEIC (High Efficiency Image Container) é o formato de foto padrão usado por dispositivos Apple desde iOS 11. Oferece compressão superior mantendo alta qualidade de imagem, fazendo com que as fotos ocupem menos espaço de armazenamento no seu iPhone ou iPad.",
      },
      whyConvert: {
        title: "Por Que Converter HEIC para PNG?",
        content:
          "Embora HEIC seja eficiente, não é universalmente suportado. Converter para PNG garante que suas fotos possam ser visualizadas em qualquer dispositivo, facilmente compartilhadas por e-mail e usadas em design web e gráficos. O formato PNG suporta transparência e compressão sem perdas, tornando-o ideal para uso profissional.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Compatibilidade Universal - PNGs funcionam em todos os dispositivos e plataformas",
          "Suporte à Transparência - Perfeito para gráficos e design web",
          "Qualidade Sem Perdas - Sem artefatos de compressão ou perda de qualidade",
          "Fácil Compartilhamento - Formato amplamente suportado que qualquer um pode abrir",
          "Pronto para Web - Ideal para sites, redes sociais e uso online",
          "Sem Perda de Qualidade - Preserva a resolução original da imagem",
        ],
      },
    },

    faq: {
      title: "Perguntas Frequentes – HEIC para PNG",
      items: [
        {
          q: "É gratuito converter HEIC para PNG?",
          a: "Sim! Nosso conversor de HEIC para PNG é completamente gratuito. Você pode converter imagens HEIC para PNG sem registro, assinaturas ou taxas ocultas.",
        },
        {
          q: "A qualidade será preservada ao converter HEIC para PNG?",
          a: "Sim. Preservamos a qualidade original da imagem durante a conversão. Suas fotos HEIC são convertidas em arquivos PNG de alta resolução sem compressão ou perda de qualidade.",
        },
        {
          q: "Posso converter fotos HEIC do iPhone para PNG?",
          a: "Sim. Você pode converter fotos HEIC tiradas no iPhone, iPad ou qualquer dispositivo Apple diretamente para PNG. Basta carregar seus arquivos HEIC e convertê-los instantaneamente no seu navegador.",
        },
        {
          q: "Preciso instalar software para converter HEIC para PNG?",
          a: "Nenhuma instalação necessária. O conversor HEIC para PNG funciona completamente online no seu navegador web em Windows, macOS, Linux, iOS e Android.",
        },
      ],
    },

    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para JPG", url: "/convert/heic-to-jpg" },
        { name: "PNG para PDF", url: "/convert/png-to-pdf" },
        { name: "JPG para PNG", url: "/convert/jpg-to-png" },
        { name: "WEBP para PNG", url: "/convert/webp-to-png" },
        { name: "HEIC para WEBP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to JPG Converter
  heicToJpg: {
    title: "Conversor HEIC para JPG - Converta Fotos Apple para JPG Grátis Online",
    metaDescription:
      "Converta imagens HEIC para formato JPG instantaneamente. Conversor online gratuito HEIC para JPG com processamento em lote. Rápido, seguro e sem registro necessário. Funciona com fotos de iPhone e iPad.",
    metaKeywords:
      "HEIC para JPG, converter HEIC, fotos Apple para JPG, fotos iPhone para JPG, conversor HEIC, imagem para JPG, conversão em lote HEIC, conversor HEIC gratuito",

    hero: {
      title: "Conversor HEIC para JPG",
      subtitle:
        "Transforme suas fotos Apple HEIC em imagens JPG universais instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },

    upload: {
      title: "Enviar Arquivos HEIC",
      description:
        "Arraste e solte suas fotos HEIC aqui ou clique para procurar. Suporta conversão em lote até 20 arquivos. Máximo 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar JPG",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },

    features: {
      title: "Recursos",
      list: [
        "Conversão HEIC para JPG de alta qualidade",
        "Processamento em lote até 20 arquivos",
        "Preserva a qualidade da imagem",
        "Sem limitações de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos de iPhone e iPad",
        "Download instantâneo após conversão",
        "Sem marcas d'água",
      ],
    },

    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos HEIC",
      step1Desc: "Selecione uma ou várias fotos HEIC do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar JPG",
      step3Desc: "Obtenha seus arquivos JPG convertidos imediatamente",
    },

    about: {
      title: "Sobre a Conversão HEIC para JPG",
      whatIsHeic: {
        title: "O que é o Formato HEIC?",
        content:
          "HEIC (High Efficiency Image Container) é o formato de foto padrão usado por dispositivos Apple desde iOS 11. Oferece compressão superior mantendo alta qualidade de imagem, fazendo com que as fotos ocupem menos espaço de armazenamento no seu iPhone ou iPad.",
      },
      whyConvert: {
        title: "Por que Converter HEIC para JPG?",
        content:
          "Embora HEIC seja eficiente, não é universalmente suportado. Converter para JPG garante que suas fotos possam ser visualizadas em qualquer dispositivo, facilmente compartilhadas por e-mail e usadas em design web e gráficos. O formato JPG é o formato de imagem mais amplamente suportado, ideal para compartilhamento e compatibilidade.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Compatibilidade Universal - JPGs funcionam em todos os dispositivos e plataformas",
          "Tamanho de Arquivo Menor - Compressão eficiente para compartilhamento mais rápido",
          "Amplo Suporte - Formato de imagem mais usado mundialmente",
          "Fácil Compartilhamento - Compatível com todos os clientes de e-mail e redes sociais",
          "Pronto para Web - Ideal para sites, redes sociais e uso online",
          "Alta Qualidade - Preserve a resolução original da imagem",
        ],
      },
    },

    faq: {
      title: "Perguntas Frequentes – HEIC para JPG",
      items: [
        {
          q: "É gratuito converter HEIC para JPG?",
          a: "Sim! Nosso conversor HEIC para JPG é completamente gratuito sem taxas ocultas. Você pode converter arquivos ilimitados sem registro ou assinatura.",
        },
        {
          q: "Meus dados estão seguros?",
          a: "Absolutamente. Todas as conversões acontecem com segurança em nossos servidores com criptografia SSL. Seus arquivos são automaticamente excluídos imediatamente após a conversão. Nunca armazenamos, compartilhamos ou acessamos seus arquivos.",
        },
        {
          q: "Qual é o tamanho máximo do arquivo?",
          a: "Você pode converter arquivos HEIC de até 100MB cada. Para conversão em lote, você pode processar até 20 arquivos de uma vez com um limite total de 100MB.",
        },
        {
          q: "Vocês suportam conversão em lote?",
          a: "Sim! Você pode enviar e converter até 20 arquivos HEIC simultaneamente. Todos os JPGs convertidos estarão disponíveis para download como arquivos individuais ou em um único arquivo ZIP.",
        },
        {
          q: "A qualidade será preservada?",
          a: "Sim, mantemos alta qualidade de imagem durante a conversão. Suas fotos HEIC serão convertidas em JPGs de alta resolução com perda mínima de qualidade.",
        },
        {
          q: "Posso converter HEIC diretamente do iPhone?",
          a: "Sim! Nosso conversor funciona perfeitamente com fotos tiradas no iPhone, iPad ou qualquer dispositivo Apple. Basta enviar seus arquivos HEIC da sua galeria de fotos.",
        },
        {
          q: "Preciso instalar algum software?",
          a: "Nenhuma instalação necessária. Nosso conversor online funciona diretamente no seu navegador web em qualquer dispositivo - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Quanto tempo leva a conversão?",
          a: "A conversão é quase instantânea! A maioria dos arquivos HEIC se converte para JPG em apenas alguns segundos, dependendo do tamanho do arquivo e sua conexão com a internet.",
        },
      ],
    },

    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "JPG para PDF", url: "/convert/jpg-to-pdf" },
        { name: "PNG para JPG", url: "/convert/png-to-jpg" },
        { name: "WEBP para JPG", url: "/convert/webp-to-jpg" },
        { name: "HEIC para WEBP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to WebP Converter
  heicToWebp: {
    title: "Conversor de HEIC para WebP - Converta Fotos da Apple para WebP Grátis Online",
    metaDescription:
      "Converta imagens HEIC para formato WebP instantaneamente. Conversor gratuito online de HEIC para WebP com processamento em lote. Rápido, seguro e sem registro necessário. Funciona com fotos do iPhone e iPad.",
    metaKeywords:
      "HEIC para WebP, converter HEIC, fotos Apple para WebP, fotos iPhone para WebP, conversor HEIC, imagem para WebP, conversão em lote HEIC, conversor HEIC gratuito",

    hero: {
      title: "Conversor de HEIC para WebP",
      subtitle:
        "Transforme suas fotos HEIC da Apple em imagens WebP modernas instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },

    upload: {
      title: "Carregar Arquivos HEIC",
      description:
        "Arraste e solte suas fotos HEIC aqui ou clique para navegar. Suporta conversão em lote de até 20 arquivos. Máximo de 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar WebP",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },

    features: {
      title: "Recursos",
      list: [
        "Conversão de HEIC para WebP de alta qualidade",
        "Processamento em lote de até 20 arquivos",
        "Compressão superior com preservação de qualidade",
        "Sem limites de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos de iPhone e iPad",
        "Download instantâneo após conversão",
        "Sem marcas d'água adicionadas",
      ],
    },

    howItWorks: {
      title: "Como Funciona",
      step1Title: "Carregar Arquivos HEIC",
      step1Desc: "Selecione uma ou múltiplas fotos HEIC do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar WebP",
      step3Desc: "Obtenha seus arquivos WebP convertidos imediatamente",
    },

    about: {
      title: "Sobre a Conversão HEIC para WebP",
      whatIsHeic: {
        title: "O que é o Formato HEIC?",
        content:
          "HEIC (High Efficiency Image Container) é o formato de foto padrão usado por dispositivos Apple desde iOS 11. Oferece compressão superior mantendo alta qualidade de imagem, fazendo com que as fotos ocupem menos espaço de armazenamento no seu iPhone ou iPad.",
      },
      whyConvert: {
        title: "Por Que Converter HEIC para WebP?",
        content:
          "WebP é um formato de imagem moderno desenvolvido pelo Google que fornece compressão superior em comparação com PNG e JPG enquanto mantém excelente qualidade. Converter HEIC para WebP resulta em tamanhos de arquivo menores perfeitos para uso web, carregamentos de página mais rápidos e melhor desempenho SEO. WebP é compatível com todos os navegadores modernos e é ideal para sites, aplicativos web progressivos e compartilhamento online.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Compressão Superior - Arquivos 25-35% menores que PNG/JPG com a mesma qualidade",
          "Otimizado para Web - Perfeito para sites, PWAs e plataformas online",
          "Formato Moderno - Compatível com todos os principais navegadores e plataformas",
          "Carregamento Mais Rápido - Arquivos menores significam tempos de carregamento de página mais rápidos",
          "Amigável ao SEO - Melhora as métricas de desempenho do site",
          "Qualidade Preservada - Excelente qualidade visual com compressão eficiente",
        ],
      },
    },

    faq: {
      title: "Perguntas Frequentes – HEIC para WebP",
      items: [
        {
          q: "É gratuito converter HEIC para WebP?",
          a: "Sim! Nosso conversor de HEIC para WebP é completamente gratuito. Você pode converter imagens HEIC para WebP sem registro, assinaturas ou taxas ocultas.",
        },
        {
          q: "A qualidade será preservada ao converter HEIC para WebP?",
          a: "Sim. O formato WebP fornece excelente qualidade de imagem com compressão superior. Suas fotos HEIC são convertidas em arquivos WebP de alta qualidade com perda de qualidade mínima.",
        },
        {
          q: "Posso converter fotos HEIC do iPhone para WebP?",
          a: "Sim. Você pode converter fotos HEIC tiradas no iPhone, iPad ou qualquer dispositivo Apple diretamente para WebP. Basta carregar seus arquivos HEIC e convertê-los instantaneamente online.",
        },
        {
          q: "Preciso instalar software para converter HEIC para WebP?",
          a: "Nenhuma instalação necessária. O conversor HEIC para WebP funciona completamente online no seu navegador web em Windows, macOS, Linux, iOS e Android.",
        },
      ],
    },

    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "HEIC para JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC para WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to AVIF Converter
  heicToAvif: {
    title: "Conversor de HEIC para AVIF - Converta Fotos da Apple para AVIF Grátis Online",
    metaDescription:
      "Converta imagens HEIC para formato AVIF instantaneamente. Conversor gratuito online de HEIC para AVIF com processamento em lote. Rápido, seguro e sem registro necessário. Funciona com fotos do iPhone e iPad.",
    metaKeywords:
      "HEIC para AVIF, converter HEIC, fotos Apple para AVIF, fotos iPhone para AVIF, conversor HEIC, imagem para AVIF, conversão em lote HEIC, conversor HEIC gratuito",

    hero: {
      title: "Conversor de HEIC para AVIF",
      subtitle:
        "Transforme suas fotos HEIC da Apple em imagens AVIF de próxima geração instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },

    upload: {
      title: "Enviar Arquivos HEIC",
      description:
        "Arraste e solte suas fotos HEIC aqui ou clique para navegar. Suporta conversão em lote de até 20 arquivos. Máximo 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar AVIF",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },

    features: {
      title: "Recursos",
      list: [
        "Conversão HEIC para AVIF de alta qualidade",
        "Processamento em lote de até 20 arquivos",
        "Compressão de primeira classe com preservação de qualidade",
        "Sem limitações de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos do iPhone e iPad",
        "Download instantâneo após conversão",
        "Sem marcas d'água adicionadas",
      ],
    },

    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos HEIC",
      step1Desc: "Selecione uma ou várias fotos HEIC do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar AVIF",
      step3Desc: "Obtenha seus arquivos AVIF convertidos imediatamente",
    },

    about: {
      title: "Sobre a Conversão HEIC para AVIF",
      whatIsHeic: {
        title: "O que é o Formato HEIC?",
        content:
          "HEIC (High Efficiency Image Container) é o formato de foto padrão usado por dispositivos Apple desde iOS 11. Oferece compressão superior mantendo alta qualidade de imagem, fazendo com que as fotos ocupem menos espaço de armazenamento no seu iPhone ou iPad.",
      },
      whyConvert: {
        title: "Por Que Converter HEIC para AVIF?",
        content:
          "AVIF (AV1 Image File Format) é o formato de imagem mais recente desenvolvido pela Alliance for Open Media, oferecendo compressão ainda melhor que WebP e JPEG mantendo qualidade superior. Converter HEIC para AVIF resulta nos menores tamanhos de arquivo possíveis para uso web, carregamentos de página dramaticamente mais rápidos e excelente desempenho SEO. AVIF é suportado por navegadores modernos e é ideal para sites de ponta, aplicativos web progressivos e plataformas online de alto desempenho.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Melhor Compressão - Arquivos até 50% menores que JPEG com a mesma ou melhor qualidade",
          "Formato de Próxima Geração - O futuro das imagens web com suporte da indústria",
          "Qualidade Superior - Excelente qualidade visual mesmo com compressão muito alta",
          "Carregamento Mais Rápido - Arquivos menores significam tempos de carregamento de página significativamente mais rápidos",
          "Otimizado para SEO - Melhora Core Web Vitals e rankings de pesquisa",
          "Qualidade Preservada - Qualidade visual excepcional com máxima eficiência de compressão",
        ],
      },
    },

    faq: {
      title: "Perguntas Frequentes – HEIC para AVIF",
      items: [
        {
          q: "É gratuito converter HEIC para AVIF?",
          a: "Sim! Nosso conversor de HEIC para AVIF é completamente gratuito. Você pode converter imagens HEIC para AVIF sem registro, assinaturas ou taxas ocultas.",
        },
        {
          q: "A qualidade será preservada ao converter HEIC para AVIF?",
          a: "Sim. O formato AVIF oferece excelente qualidade de imagem com compressão avançada. Suas fotos HEIC são convertidas em arquivos AVIF de alta qualidade com perda de qualidade mínima e tamanhos de arquivo significativamente menores.",
        },
        {
          q: "Posso converter fotos HEIC do iPhone para AVIF?",
          a: "Sim. Você pode converter fotos HEIC tiradas no iPhone, iPad ou qualquer dispositivo Apple diretamente para AVIF.",
        },
        {
          q: "Preciso instalar software para converter HEIC para AVIF?",
          a: "Nenhuma instalação é necessária. O conversor funciona inteiramente online no seu navegador web em qualquer dispositivo.",
        },
      ],
    },

    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "HEIC para JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC para WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to TIFF Converter
  heicToTiff: {
    title: "Conversor de HEIC para TIFF - Converta Fotos da Apple para TIFF Grátis Online",
    metaDescription:
      "Converta imagens HEIC para formato TIFF instantaneamente. Conversor gratuito online de HEIC para TIFF com processamento em lote. Rápido, seguro e sem registro necessário. Funciona com fotos do iPhone e iPad.",
    metaKeywords:
      "HEIC para TIFF, converter HEIC, fotos Apple para TIFF, fotos iPhone para TIFF, conversor HEIC, imagem para TIFF, conversão em lote HEIC, conversor HEIC gratuito",

    hero: {
      title: "Conversor de HEIC para TIFF",
      subtitle:
        "Transforme suas fotos HEIC da Apple em imagens TIFF de próxima geração instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },

    upload: {
      title: "Enviar Arquivos HEIC",
      description:
        "Arraste e solte suas fotos HEIC aqui ou clique para navegar. Suporta conversão em lote de até 20 arquivos. Máximo 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar TIFF",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },

    features: {
      title: "Recursos",
      list: [
        "Conversão HEIC para TIFF de alta qualidade",
        "Processamento em lote de até 20 arquivos",
        "Compressão de primeira classe com preservação de qualidade",
        "Sem limitações de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos do iPhone e iPad",
        "Download instantâneo após conversão",
        "Sem marcas d'água adicionadas",
      ],
    },

    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos HEIC",
      step1Desc: "Selecione uma ou várias fotos HEIC do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar TIFF",
      step3Desc: "Obtenha seus arquivos TIFF convertidos imediatamente",
    },

    about: {
      title: "Sobre a Conversão HEIC para TIFF",
      whatIsHeic: {
        title: "O que é o Formato HEIC?",
        content:
          "HEIC (High Efficiency Image Container) é o formato de foto padrão usado por dispositivos Apple desde iOS 11. Oferece compressão superior mantendo alta qualidade de imagem, fazendo com que as fotos ocupem menos espaço de armazenamento no seu iPhone ou iPad.",
      },
      whyConvert: {
        title: "Por Que Converter HEIC para TIFF?",
        content:
          "TIFF (AV1 Image File Format) é o formato de imagem mais recente desenvolvido pela Alliance for Open Media, oferecendo compressão ainda melhor que WebP e JPEG mantendo qualidade superior. Converter HEIC para TIFF resulta nos menores tamanhos de arquivo possíveis para uso web, carregamentos de página dramaticamente mais rápidos e excelente desempenho SEO. TIFF é suportado por navegadores modernos e é ideal para sites de ponta, aplicativos web progressivos e plataformas online de alto desempenho.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Melhor Compressão - Arquivos até 50% menores que JPEG com a mesma ou melhor qualidade",
          "Formato de Próxima Geração - O futuro das imagens web com suporte da indústria",
          "Qualidade Superior - Excelente qualidade visual mesmo com compressão muito alta",
          "Carregamento Mais Rápido - Arquivos menores significam tempos de carregamento de página significativamente mais rápidos",
          "Otimizado para SEO - Melhora Core Web Vitals e rankings de pesquisa",
          "Qualidade Preservada - Qualidade visual excepcional com máxima eficiência de compressão",
        ],
      },
    },

    faq: {
      title: "Perguntas Frequentes – HEIC para TIFF",
      items: [
        {
          q: "É gratuito converter HEIC para TIFF?",
          a: "Sim! Nosso conversor de HEIC para TIFF é completamente gratuito. Você pode converter imagens HEIC para TIFF sem registro, assinaturas ou taxas ocultas.",
        },
        {
          q: "A qualidade será preservada ao converter HEIC para TIFF?",
          a: "Sim. O formato TIFF oferece excelente qualidade de imagem com compressão avançada. Suas fotos HEIC são convertidas em arquivos TIFF de alta qualidade com perda de qualidade mínima e tamanhos de arquivo significativamente menores.",
        },
        {
          q: "Posso converter fotos HEIC do iPhone para TIFF?",
          a: "Sim. Você pode converter fotos HEIC tiradas no iPhone, iPad ou qualquer dispositivo Apple diretamente para TIFF.",
        },
        {
          q: "Preciso instalar software para converter HEIC para TIFF?",
          a: "Nenhuma instalação é necessária. O conversor funciona inteiramente online no seu navegador web em qualquer dispositivo.",
        },
      ],
    },

    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "HEIC para JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC para WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to GIF Converter
  heicToGif: {
    title: "Conversor HEIC para GIF - Converta Fotos da Apple para GIF Grátis Online",
    metaDescription:
      "Converta imagens HEIC para formato GIF instantaneamente. Conversor HEIC para GIF online gratuito com processamento em lote. Rápido, seguro e sem registro necessário. Funciona com fotos iPhone e iPad.",
    metaKeywords:
      "HEIC para GIF, converter HEIC, fotos Apple para GIF, fotos iPhone para GIF, conversor HEIC, imagem para GIF, conversão em lote HEIC, conversor HEIC gratuito",
    hero: {
      title: "Conversor HEIC para GIF",
      subtitle:
        "Transforme suas fotos HEIC da Apple em imagens GIF animadas ou estáticas instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },
    upload: {
      title: "Carregar Arquivos HEIC",
      description:
        "Arraste e solte suas fotos HEIC aqui ou clique para navegar. Suporta conversão em lote de até 20 arquivos. Máximo de 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar GIF",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },
    features: {
      title: "Recursos",
      list: [
        "Conversão HEIC para GIF de alta qualidade",
        "Processamento em lote de até 20 arquivos",
        "Preserva a qualidade da imagem",
        "Sem limitações de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos iPhone e iPad",
        "Download instantâneo após a conversão",
        "Sem marcas d'água adicionadas",
      ],
    },
    howItWorks: {
      title: "Como Funciona",
      step1Title: "Carregar Arquivos HEIC",
      step1Desc: "Selecione uma ou várias fotos HEIC do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar GIF",
      step3Desc: "Obtenha seus arquivos GIF convertidos imediatamente",
    },
    about: {
      title: "Sobre a Conversão HEIC para GIF",
      whatIsHeic: {
        title: "O que é o Formato HEIC?",
        content:
          "HEIC (High Efficiency Image Container) é o formato de foto padrão usado por dispositivos Apple desde iOS 11. Oferece compressão superior mantendo alta qualidade de imagem, fazendo com que as fotos ocupem menos espaço de armazenamento no seu iPhone ou iPad.",
      },
      whyConvert: {
        title: "Por que Converter HEIC para GIF?",
        content:
          "O formato GIF é perfeito para uso na web, compartilhamento em redes sociais e criação de imagens animadas. Converter HEIC para GIF garante que suas fotos possam ser facilmente compartilhadas online, incorporadas em sites e visualizadas em qualquer plataforma. Os GIFs são amplamente suportados e perfeitos para criar animações simples ou imagens estáticas com ampla compatibilidade.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Otimizado para Web - O formato GIF é perfeito para web e redes sociais",
          "Compatibilidade Universal - Os GIFs funcionam em todos os lugares",
          "Tamanhos de Arquivo Pequenos - Compressão eficiente para carregamento rápido",
          "Fácil de Compartilhar - Compartilhe GIFs em qualquer plataforma ou rede social",
          "Suporte a Animações - Crie GIFs animados a partir de múltiplas imagens",
          "Sem Perda de Qualidade - Preserve a qualidade visual no formato GIF",
        ],
      },
    },
    faq: {
      title: "Perguntas Frequentes – HEIC para GIF",
      items: [
        {
          q: "É gratuito converter HEIC para GIF?",
          a: "Sim! Nosso conversor HEIC para GIF é completamente gratuito. Você pode converter imagens HEIC para GIF sem registro, assinaturas ou taxas ocultas.",
        },
        {
          q: "Posso converter fotos HEIC do iPhone para GIF?",
          a: "Sim. Você pode converter fotos HEIC tiradas no iPhone, iPad ou qualquer dispositivo Apple diretamente para GIF. Basta fazer upload dos seus arquivos HEIC do seu dispositivo, e a conversão funciona instantaneamente no seu navegador.",
        },
        {
          q: "A qualidade será preservada ao converter HEIC para GIF?",
          a: "Sim. Preservamos a qualidade da imagem durante a conversão. Suas fotos HEIC são convertidas em arquivos GIF de alta qualidade com configurações de compressão ótimas para equilibrar qualidade e tamanho do arquivo.",
        },
        {
          q: "Qual é o tamanho máximo de arquivo para conversão HEIC para GIF?",
          a: "Você pode converter arquivos HEIC de até 100MB por arquivo. Para conversão em lote, você pode fazer upload de até 20 arquivos de uma vez, com um limite de tamanho total de 100MB.",
        },
        {
          q: "Por que devo converter HEIC para GIF em vez de outros formatos?",
          a: "O formato GIF é ideal para uso na web, redes sociais e criação de imagens compartilháveis. É amplamente suportado, carrega rapidamente e é perfeito para incorporar em sites ou compartilhar online.",
        },
        {
          q: "Preciso instalar algum software para converter HEIC para GIF?",
          a: "Nenhuma instalação é necessária. O conversor HEIC para GIF funciona inteiramente online no seu navegador web em Windows, macOS, Linux, iOS e Android.",
        },
        {
          q: "Posso converter vários arquivos HEIC para GIF de uma vez?",
          a: "Sim! Nosso conversor suporta processamento em lote. Você pode fazer upload e converter até 20 arquivos HEIC simultaneamente. Todos os arquivos GIF convertidos estarão disponíveis para download como arquivos individuais ou em um único arquivo ZIP.",
        },
        {
          q: "Posso criar GIFs animados a partir de arquivos HEIC?",
          a: "Nosso conversor cria GIFs estáticos a partir de imagens HEIC individuais. Para GIFs animados, você precisaria de múltiplas imagens combinadas em uma animação, o que requer processamento adicional.",
        },
      ],
    },
    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "HEIC para JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC para WebP", url: "/convert/heic-to-webp" },
        { name: "PNG para GIF", url: "/convert/png-to-gif" },
        { name: "JPG para GIF", url: "/convert/jpg-to-gif" },
      ],
    },
  },

  // HEIF to JPG Converter
  heifToJpg: {
    title: "Conversor HEIF para JPG - Converta Imagens HEIF para JPG Grátis Online",
    metaDescription:
      "Converta imagens HEIF para formato JPG instantaneamente. Conversor online gratuito HEIF para JPG com processamento em lote. Rápido, seguro e sem registro necessário. Funciona com fotos HEIF de todos os dispositivos.",
    metaKeywords:
      "HEIF para JPG, converter HEIF, imagens HEIF para JPG, conversor HEIF, imagem para JPG, conversão em lote HEIF, conversor HEIF gratuito, HEIF vs HEIC",
    hero: {
      title: "Conversor HEIF para JPG",
      subtitle:
        "Transforme suas imagens HEIF em formato JPG universal instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo. Perfeito para fotos HEIF de qualquer dispositivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },
    upload: {
      title: "Enviar Arquivos HEIF",
      description:
        "Arraste e solte suas imagens HEIF aqui ou clique para procurar. Suporta conversão em lote até 20 arquivos. Máximo 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar JPG",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },
    features: {
      title: "Recursos",
      list: [
        "Conversão HEIF para JPG de alta qualidade",
        "Processamento em lote até 20 arquivos",
        "Preserva a qualidade da imagem",
        "Sem limitações de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos HEIF de todos os dispositivos",
        "Download instantâneo após conversão",
        "Sem marcas d'água",
      ],
    },
    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos HEIF",
      step1Desc: "Selecione uma ou várias imagens HEIF do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar JPG",
      step3Desc: "Obtenha seus arquivos JPG convertidos imediatamente",
    },
    about: {
      title: "Sobre a Conversão HEIF para JPG",
      whatIsHeif: {
        title: "O que é o Formato HEIF?",
        content:
          "HEIF (High Efficiency Image Format) é um formato de contêiner de imagens moderno que usa compressão HEVC (H.265). Embora semelhante ao HEIC, HEIF é o nome de formato padrão, enquanto HEIC refere-se especificamente à implementação da Apple. HEIF oferece compressão superior comparado ao JPEG mantendo alta qualidade de imagem, tornando-o ideal para armazenar fotos de forma eficiente.",
      },
      whyConvert: {
        title: "Por que Converter HEIF para JPG?",
        content:
          "Embora HEIF seja eficiente e moderno, não é universalmente suportado em todos os dispositivos e plataformas. Converter HEIF para JPG garante que suas imagens possam ser visualizadas em qualquer dispositivo, facilmente compartilhadas por e-mail, enviadas para sites e usadas em qualquer aplicativo. O formato JPG é o formato de imagem mais amplamente suportado no mundo, tornando-o perfeito para máxima compatibilidade e compartilhamento.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Qual é a Diferença?",
        content:
          "HEIF (High Efficiency Image Format) é o padrão de formato de contêiner, enquanto HEIC (High Efficiency Image Container) é a implementação específica da Apple do HEIF. Na prática, são muito semelhantes - ambos usam a mesma tecnologia de compressão e oferecem os mesmos benefícios. Dispositivos Apple salvam fotos como arquivos HEIC, que são na verdade compatíveis com HEIF. Nosso conversor trata ambos os formatos sem problemas, então você pode converter qualquer imagem HEIF/HEIC para formato JPG.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Compatibilidade Universal - JPGs funcionam em todos os dispositivos e plataformas",
          "Tamanho de Arquivo Menor - Compressão eficiente para compartilhamento mais rápido",
          "Amplo Suporte - Formato de imagem mais usado mundialmente",
          "Fácil Compartilhamento - Compatível com todos os clientes de e-mail e redes sociais",
          "Pronto para Web - Ideal para sites, redes sociais e uso online",
          "Alta Qualidade - Preserve a resolução original da imagem",
        ],
      },
    },
    faq: {
      title: "Perguntas Frequentes – HEIF para JPG",
      items: [
        {
          q: "É gratuito converter HEIF para JPG?",
          a: "Sim! Nosso conversor HEIF para JPG é completamente gratuito sem custos ocultos. Você pode converter arquivos ilimitados sem registro ou assinatura.",
        },
        {
          q: "Qual é a diferença entre HEIF e HEIC?",
          a: "HEIF (High Efficiency Image Format) é o nome de formato padrão, enquanto HEIC (High Efficiency Image Container) é a implementação específica da Apple. Eles usam a mesma tecnologia de compressão e são funcionalmente muito semelhantes. Nosso conversor trata ambos os formatos sem problemas.",
        },
        {
          q: "Meus dados estão seguros?",
          a: "Absolutamente. Todas as conversões acontecem com segurança em nossos servidores com criptografia SSL. Seus arquivos são automaticamente excluídos imediatamente após a conversão. Nunca armazenamos, compartilhamos ou acessamos seus arquivos.",
        },
        {
          q: "Qual é o tamanho máximo do arquivo?",
          a: "Você pode converter arquivos HEIF de até 100MB cada. Para conversão em lote, você pode processar até 20 arquivos por vez com um limite total de 100MB.",
        },
        {
          q: "Vocês suportam conversão em lote?",
          a: "Sim! Você pode enviar e converter até 20 arquivos HEIF simultaneamente. Todos os JPGs convertidos estarão disponíveis para download como arquivos individuais ou em um único arquivo ZIP.",
        },
        {
          q: "A qualidade será preservada?",
          a: "Sim, mantemos alta qualidade de imagem durante a conversão. Suas imagens HEIF serão convertidas em JPGs de alta resolução com perda mínima de qualidade.",
        },
        {
          q: "Posso converter HEIF de qualquer dispositivo?",
          a: "Sim! Nosso conversor funciona com imagens HEIF de qualquer dispositivo ou câmera que suporte formato HEIF, não apenas dispositivos Apple. Simplesmente envie seus arquivos HEIF e converta-os para JPG.",
        },
        {
          q: "Preciso instalar algum software?",
          a: "Nenhuma instalação necessária. Nosso conversor online funciona diretamente no seu navegador da web em qualquer dispositivo - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Quanto tempo leva a conversão?",
          a: "A conversão é quase instantânea! A maioria dos arquivos HEIF se converte para JPG em apenas alguns segundos, dependendo do tamanho do arquivo e da sua conexão com a Internet.",
        },
      ],
    },
    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "HEIF para PNG", url: "/convert/heif-to-png" },
        { name: "JPG para PDF", url: "/convert/jpg-to-pdf" },
        { name: "PNG para JPG", url: "/convert/png-to-jpg" },
      ],
    },
  },

  // HEIF to TIFF Converter
  heifToTiff: {
    title: "Conversor HEIF para TIFF - Converta Imagens HEIF para TIFF Grátis Online",
    metaDescription:
      "Converta imagens HEIF para formato TIFF instantaneamente. Conversor online gratuito HEIF para TIFF com processamento em lote. Rápido, seguro e sem registro necessário. Funciona com fotos HEIF de todos os dispositivos.",
    metaKeywords:
      "HEIF para TIFF, converter HEIF, imagens HEIF para TIFF, conversor HEIF, imagem para TIFF, conversão em lote HEIF, conversor HEIF gratuito, HEIF vs HEIC",
    hero: {
      title: "Conversor HEIF para TIFF",
      subtitle:
        "Transforme suas imagens HEIF em formato TIFF universal instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo. Perfeito para fotos HEIF de qualquer dispositivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },
    upload: {
      title: "Enviar Arquivos HEIF",
      description:
        "Arraste e solte suas imagens HEIF aqui ou clique para procurar. Suporta conversão em lote até 20 arquivos. Máximo 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar TIFF",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },
    features: {
      title: "Recursos",
      list: [
        "Conversão HEIF para TIFF de alta qualidade",
        "Processamento em lote até 20 arquivos",
        "Preserva a qualidade da imagem",
        "Sem limitações de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos HEIF de todos os dispositivos",
        "Download instantâneo após conversão",
        "Sem marcas d'água",
      ],
    },
    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos HEIF",
      step1Desc: "Selecione uma ou várias imagens HEIF do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar TIFF",
      step3Desc: "Obtenha seus arquivos TIFF convertidos imediatamente",
    },
    about: {
      title: "Sobre a Conversão HEIF para TIFF",
      whatIsHeif: {
        title: "O que é o Formato HEIF?",
        content:
          "HEIF (High Efficiency Image Format) é um formato de contêiner de imagens moderno que usa compressão HEVC (H.265). Embora semelhante ao HEIC, HEIF é o nome de formato padrão, enquanto HEIC refere-se especificamente à implementação da Apple. HEIF oferece compressão superior comparado ao TIFF mantendo alta qualidade de imagem, tornando-o ideal para armazenar fotos de forma eficiente.",
      },
      whyConvert: {
        title: "Por que Converter HEIF para TIFF?",
        content:
          "Embora HEIF seja eficiente e moderno, não é universalmente suportado em todos os dispositivos e plataformas. Converter HEIF para TIFF garante que suas imagens possam ser visualizadas em qualquer dispositivo, facilmente compartilhadas por e-mail, enviadas para sites e usadas em qualquer aplicativo. O formato TIFF é o formato de imagem mais amplamente suportado no mundo, tornando-o perfeito para máxima compatibilidade e compartilhamento.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Qual é a Diferença?",
        content:
          "HEIF (High Efficiency Image Format) é o padrão de formato de contêiner, enquanto HEIC (High Efficiency Image Container) é a implementação específica da Apple do HEIF. Na prática, são muito semelhantes - ambos usam a mesma tecnologia de compressão e oferecem os mesmos benefícios. Dispositivos Apple salvam fotos como arquivos HEIC, que são na verdade compatíveis com HEIF. Nosso conversor trata ambos os formatos sem problemas, então você pode converter qualquer imagem HEIF/HEIC para formato TIFF.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Compatibilidade Universal - TIFFs funcionam em todos os dispositivos e plataformas",
          "Tamanho de Arquivo Menor - Compressão eficiente para compartilhamento mais rápido",
          "Amplo Suporte - Formato de imagem mais usado mundialmente",
          "Fácil Compartilhamento - Compatível com todos os clientes de e-mail e redes sociais",
          "Pronto para Web - Ideal para sites, redes sociais e uso online",
          "Alta Qualidade - Preserve a resolução original da imagem",
        ],
      },
    },
    faq: {
      title: "Perguntas Frequentes – HEIF para TIFF",
      items: [
        {
          q: "É gratuito converter HEIF para TIFF?",
          a: "Sim! Nosso conversor HEIF para TIFF é completamente gratuito sem custos ocultos. Você pode converter arquivos ilimitados sem registro ou assinatura.",
        },
        {
          q: "Qual é a diferença entre HEIF e HEIC?",
          a: "HEIF (High Efficiency Image Format) é o nome de formato padrão, enquanto HEIC (High Efficiency Image Container) é a implementação específica da Apple. Eles usam a mesma tecnologia de compressão e são funcionalmente muito semelhantes. Nosso conversor trata ambos os formatos sem problemas.",
        },
        {
          q: "Meus dados estão seguros?",
          a: "Absolutamente. Todas as conversões acontecem com segurança em nossos servidores com criptografia SSL. Seus arquivos são automaticamente excluídos imediatamente após a conversão. Nunca armazenamos, compartilhamos ou acessamos seus arquivos.",
        },
        {
          q: "Qual é o tamanho máximo do arquivo?",
          a: "Você pode converter arquivos HEIF de até 100MB cada. Para conversão em lote, você pode processar até 20 arquivos por vez com um limite total de 100MB.",
        },
        {
          q: "Vocês suportam conversão em lote?",
          a: "Sim! Você pode enviar e converter até 20 arquivos HEIF simultaneamente. Todos os TIFFs convertidos estarão disponíveis para download como arquivos individuais ou em um único arquivo ZIP.",
        },
        {
          q: "A qualidade será preservada?",
          a: "Sim, mantemos alta qualidade de imagem durante a conversão. Suas imagens HEIF serão convertidas em TIFFs de alta resolução com perda mínima de qualidade.",
        },
        {
          q: "Posso converter HEIF de qualquer dispositivo?",
          a: "Sim! Nosso conversor funciona com imagens HEIF de qualquer dispositivo ou câmera que suporte formato HEIF, não apenas dispositivos Apple. Simplesmente envie seus arquivos HEIF e converta-os para TIFF.",
        },
        {
          q: "Preciso instalar algum software?",
          a: "Nenhuma instalação necessária. Nosso conversor online funciona diretamente no seu navegador da web em qualquer dispositivo - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Quanto tempo leva a conversão?",
          a: "A conversão é quase instantânea! A maioria dos arquivos HEIF se converte para TIFF em apenas alguns segundos, dependendo do tamanho do arquivo e da sua conexão com a Internet.",
        },
      ],
    },
    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para TIFF", url: "/convert/heic-to-tiff" },
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "HEIF para PNG", url: "/convert/heif-to-png" },
        { name: "TIFF para PDF", url: "/convert/tiff-to-pdf" },
        { name: "PNG para TIFF", url: "/convert/png-to-tiff" },
      ],
    },
  },
  // HEIF to AVIF Converter
  heifToAvif: {
    title: "Conversor HEIF para AVIF - Converter para Formato de Imagem AV1 de Nova Geração",
    metaDescription:
      "Converta HEIF para AVIF para compressão de ponta. 50% menor que JPEG, 20% menor que WebP. Formato AV1 livre de royalties com suporte HDR. Usado por Netflix e YouTube. Conversor em lote gratuito.",
    metaKeywords:
      "HEIF para AVIF, formato de imagem AV1, compressão next-gen, imagens HDR, formato livre de royalties, AVIF vs WebP, conversão em lote HEIF, formato de imagem moderno",
    hero: {
      title: "Conversor HEIF para AVIF",
      subtitle:
        "Transforme suas imagens HEIF em formato AVIF universal instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo. Perfeito para fotos HEIF de qualquer dispositivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },
    upload: {
      title: "Enviar Arquivos HEIF",
      description:
        "Arraste e solte suas imagens HEIF aqui ou clique para procurar. Suporta conversão em lote até 20 arquivos. Máximo 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar AVIF",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },
    features: {
      title: "Recursos",
      list: [
        "Conversão HEIF para AVIF de alta qualidade",
        "Processamento em lote até 20 arquivos",
        "Preserva a qualidade da imagem",
        "Sem limitações de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos HEIF de todos os dispositivos",
        "Download instantâneo após conversão",
        "Sem marcas d'água",
      ],
    },
    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos HEIF",
      step1Desc: "Selecione uma ou várias imagens HEIF do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar AVIF",
      step3Desc: "Obtenha seus arquivos AVIF convertidos imediatamente",
    },
    about: {
      title: "Sobre a Conversão HEIF para AVIF",
      whatIsHeif: {
        title: "O que é o Formato HEIF?",
        content:
          "HEIF (High Efficiency Image Format) é um formato de contêiner de imagens moderno que usa compressão HEVC (H.265). Embora semelhante ao HEIC, HEIF é o nome de formato padrão, enquanto HEIC refere-se especificamente à implementação da Apple. HEIF oferece compressão superior comparado ao AVIF mantendo alta qualidade de imagem, tornando-o ideal para armazenar fotos de forma eficiente.",
      },
      whyConvert: {
        title: "Por que Converter HEIF para AVIF?",
        content:
          "Embora HEIF seja eficiente e moderno, não é universalmente suportado em todos os dispositivos e plataformas. Converter HEIF para AVIF garante que suas imagens possam ser visualizadas em qualquer dispositivo, facilmente compartilhadas por e-mail, enviadas para sites e usadas em qualquer aplicativo. O formato AVIF é o formato de imagem mais amplamente suportado no mundo, tornando-o perfeito para máxima compatibilidade e compartilhamento.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Qual é a Diferença?",
        content:
          "HEIF (High Efficiency Image Format) é o padrão de formato de contêiner, enquanto HEIC (High Efficiency Image Container) é a implementação específica da Apple do HEIF. Na prática, são muito semelhantes - ambos usam a mesma tecnologia de compressão e oferecem os mesmos benefícios. Dispositivos Apple salvam fotos como arquivos HEIC, que são na verdade compatíveis com HEIF. Nosso conversor trata ambos os formatos sem problemas, então você pode converter qualquer imagem HEIF/HEIC para formato AVIF.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Compatibilidade Universal - AVIFs funcionam em todos os dispositivos e plataformas",
          "Tamanho de Arquivo Menor - Compressão eficiente para compartilhamento mais rápido",
          "Amplo Suporte - Formato de imagem mais usado mundialmente",
          "Fácil Compartilhamento - Compatível com todos os clientes de e-mail e redes sociais",
          "Pronto para Web - Ideal para sites, redes sociais e uso online",
          "Alta Qualidade - Preserve a resolução original da imagem",
        ],
      },
    },
    faq: {
      title: "Perguntas Frequentes – HEIF para AVIF",
      items: [
        {
          q: "É gratuito converter HEIF para AVIF?",
          a: "Sim! Nosso conversor HEIF para AVIF é completamente gratuito sem custos ocultos. Você pode converter arquivos ilimitados sem registro ou assinatura.",
        },
        {
          q: "Qual é a diferença entre HEIF e HEIC?",
          a: "HEIF (High Efficiency Image Format) é o nome de formato padrão, enquanto HEIC (High Efficiency Image Container) é a implementação específica da Apple. Eles usam a mesma tecnologia de compressão e são funcionalmente muito semelhantes. Nosso conversor trata ambos os formatos sem problemas.",
        },
        {
          q: "Meus dados estão seguros?",
          a: "Absolutamente. Todas as conversões acontecem com segurança em nossos servidores com criptografia SSL. Seus arquivos são automaticamente excluídos imediatamente após a conversão. Nunca armazenamos, compartilhamos ou acessamos seus arquivos.",
        },
        {
          q: "Qual é o tamanho máximo do arquivo?",
          a: "Você pode converter arquivos HEIF de até 100MB cada. Para conversão em lote, você pode processar até 20 arquivos por vez com um limite total de 100MB.",
        },
        {
          q: "Vocês suportam conversão em lote?",
          a: "Sim! Você pode enviar e converter até 20 arquivos HEIF simultaneamente. Todos os AVIFs convertidos estarão disponíveis para download como arquivos individuais ou em um único arquivo ZIP.",
        },
        {
          q: "A qualidade será preservada?",
          a: "Sim, mantemos alta qualidade de imagem durante a conversão. Suas imagens HEIF serão convertidas em AVIFs de alta resolução com perda mínima de qualidade.",
        },
        {
          q: "Posso converter HEIF de qualquer dispositivo?",
          a: "Sim! Nosso conversor funciona com imagens HEIF de qualquer dispositivo ou câmera que suporte formato HEIF, não apenas dispositivos Apple. Simplesmente envie seus arquivos HEIF e converta-os para AVIF.",
        },
        {
          q: "Preciso instalar algum software?",
          a: "Nenhuma instalação necessária. Nosso conversor online funciona diretamente no seu navegador da web em qualquer dispositivo - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Quanto tempo leva a conversão?",
          a: "A conversão é quase instantânea! A maioria dos arquivos HEIF se converte para AVIF em apenas alguns segundos, dependendo do tamanho do arquivo e da sua conexão com a Internet.",
        },
      ],
    },
    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para AVIF", url: "/convert/heic-to-avif" },
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "HEIF para PNG", url: "/convert/heif-to-png" },
        { name: "AVIF para PDF", url: "/convert/avif-to-pdf" },
        { name: "PNG para AVIF", url: "/convert/png-to-avif" },
      ],
    },
  },
  // HEIF to WebP Converter
  heifToWebp: {
    title: "Conversor HEIF para WebP - Converter para Formato Web Moderno Otimizado",
    metaDescription:
      "Converta HEIF para WebP para desempenho web superior. Arquivos 25-35% menores que JPEG com melhor qualidade. Formato next-gen do Google com suporte a transparência. Conversor em lote gratuito, sem registro.",
    metaKeywords:
      "HEIF para WebP, otimização web, formato next-gen, Google WebP, WebP lossy, transparência WebP, conversão em lote HEIF, formato de imagem moderno",
    hero: {
      title: "Conversor HEIF para WebP",
      subtitle:
        "Transforme suas imagens HEIF em formato WebP universal instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo. Perfeito para fotos HEIF de qualquer dispositivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },
    upload: {
      title: "Enviar Arquivos HEIF",
      description:
        "Arraste e solte suas imagens HEIF aqui ou clique para procurar. Suporta conversão em lote até 20 arquivos. Máximo 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar WebP",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },
    features: {
      title: "Recursos",
      list: [
        "Conversão HEIF para WebP de alta qualidade",
        "Processamento em lote até 20 arquivos",
        "Preserva a qualidade da imagem",
        "Sem limitações de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos HEIF de todos os dispositivos",
        "Download instantâneo após conversão",
        "Sem marcas d'água",
      ],
    },
    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos HEIF",
      step1Desc: "Selecione uma ou várias imagens HEIF do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar WebP",
      step3Desc: "Obtenha seus arquivos WebP convertidos imediatamente",
    },
    about: {
      title: "Sobre a Conversão HEIF para WebP",
      whatIsHeif: {
        title: "O que é o Formato HEIF?",
        content:
          "HEIF (High Efficiency Image Format) é um formato de contêiner de imagens moderno que usa compressão HEVC (H.265). Embora semelhante ao HEIC, HEIF é o nome de formato padrão, enquanto HEIC refere-se especificamente à implementação da Apple. HEIF oferece compressão superior comparado ao WebP mantendo alta qualidade de imagem, tornando-o ideal para armazenar fotos de forma eficiente.",
      },
      whyConvert: {
        title: "Por que Converter HEIF para WebP?",
        content:
          "Embora HEIF seja eficiente e moderno, não é universalmente suportado em todos os dispositivos e plataformas. Converter HEIF para WebP garante que suas imagens possam ser visualizadas em qualquer dispositivo, facilmente compartilhadas por e-mail, enviadas para sites e usadas em qualquer aplicativo. O formato WebP é o formato de imagem mais amplamente suportado no mundo, tornando-o perfeito para máxima compatibilidade e compartilhamento.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Qual é a Diferença?",
        content:
          "HEIF (High Efficiency Image Format) é o padrão de formato de contêiner, enquanto HEIC (High Efficiency Image Container) é a implementação específica da Apple do HEIF. Na prática, são muito semelhantes - ambos usam a mesma tecnologia de compressão e oferecem os mesmos benefícios. Dispositivos Apple salvam fotos como arquivos HEIC, que são na verdade compatíveis com HEIF. Nosso conversor trata ambos os formatos sem problemas, então você pode converter qualquer imagem HEIF/HEIC para formato WebP.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Compatibilidade Universal - WebPs funcionam em todos os dispositivos e plataformas",
          "Tamanho de Arquivo Menor - Compressão eficiente para compartilhamento mais rápido",
          "Amplo Suporte - Formato de imagem mais usado mundialmente",
          "Fácil Compartilhamento - Compatível com todos os clientes de e-mail e redes sociais",
          "Pronto para Web - Ideal para sites, redes sociais e uso online",
          "Alta Qualidade - Preserve a resolução original da imagem",
        ],
      },
    },
    faq: {
      title: "Perguntas Frequentes – HEIF para WebP",
      items: [
        {
          q: "É gratuito converter HEIF para WebP?",
          a: "Sim! Nosso conversor HEIF para WebP é completamente gratuito sem custos ocultos. Você pode converter arquivos ilimitados sem registro ou assinatura.",
        },
        {
          q: "Qual é a diferença entre HEIF e HEIC?",
          a: "HEIF (High Efficiency Image Format) é o nome de formato padrão, enquanto HEIC (High Efficiency Image Container) é a implementação específica da Apple. Eles usam a mesma tecnologia de compressão e são funcionalmente muito semelhantes. Nosso conversor trata ambos os formatos sem problemas.",
        },
        {
          q: "Meus dados estão seguros?",
          a: "Absolutamente. Todas as conversões acontecem com segurança em nossos servidores com criptografia SSL. Seus arquivos são automaticamente excluídos imediatamente após a conversão. Nunca armazenamos, compartilhamos ou acessamos seus arquivos.",
        },
        {
          q: "Qual é o tamanho máximo do arquivo?",
          a: "Você pode converter arquivos HEIF de até 100MB cada. Para conversão em lote, você pode processar até 20 arquivos por vez com um limite total de 100MB.",
        },
        {
          q: "Vocês suportam conversão em lote?",
          a: "Sim! Você pode enviar e converter até 20 arquivos HEIF simultaneamente. Todos os WebPs convertidos estarão disponíveis para download como arquivos individuais ou em um único arquivo ZIP.",
        },
        {
          q: "A qualidade será preservada?",
          a: "Sim, mantemos alta qualidade de imagem durante a conversão. Suas imagens HEIF serão convertidas em WebPs de alta resolução com perda mínima de qualidade.",
        },
        {
          q: "Posso converter HEIF de qualquer dispositivo?",
          a: "Sim! Nosso conversor funciona com imagens HEIF de qualquer dispositivo ou câmera que suporte formato HEIF, não apenas dispositivos Apple. Simplesmente envie seus arquivos HEIF e converta-os para WebP.",
        },
        {
          q: "Preciso instalar algum software?",
          a: "Nenhuma instalação necessária. Nosso conversor online funciona diretamente no seu navegador da web em qualquer dispositivo - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Quanto tempo leva a conversão?",
          a: "A conversão é quase instantânea! A maioria dos arquivos HEIF se converte para WebP em apenas alguns segundos, dependendo do tamanho do arquivo e da sua conexão com a Internet.",
        },
      ],
    },
    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para WebP", url: "/convert/heic-to-webp" },
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "HEIF para PNG", url: "/convert/heif-to-png" },
        { name: "WebP para PDF", url: "/convert/webp-to-pdf" },
        { name: "PNG para WebP", url: "/convert/png-to-webp" },
      ],
    },
  },
  // HEIF to PDF Converter
  heifToPdf: {
    title: "Conversor HEIF para PDF - Criar Documentos PDF Universais a partir de Imagens HEIF",
    metaDescription:
      "Converta HEIF para PDF para compartilhamento universal de documentos. Visualize em qualquer dispositivo sem apps. Perfeito para email, impressão e arquivamento. Mesclar vários HEIFs em um PDF. Conversor em lote gratuito, sem registro.",
    metaKeywords:
      "HEIF para PDF, imagem para documento, PDF universal, compartilhamento email, PDF pronto impressão, mesclar imagens PDF, conversão em lote HEIF, criação documentos",
    hero: {
      title: "Conversor HEIF para PDF",
      subtitle:
        "Transforme suas imagens HEIF em formato PDF universal instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo. Perfeito para fotos HEIF de qualquer dispositivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },
    upload: {
      title: "Enviar Arquivos HEIF",
      description:
        "Arraste e solte suas imagens HEIF aqui ou clique para procurar. Suporta conversão em lote até 20 arquivos. Máximo 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar PDF",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },
    features: {
      title: "Recursos",
      list: [
        "Conversão HEIF para PDF de alta qualidade",
        "Processamento em lote até 20 arquivos",
        "Preserva a qualidade da imagem",
        "Sem limitações de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos HEIF de todos os dispositivos",
        "Download instantâneo após conversão",
        "Sem marcas d'água",
      ],
    },
    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos HEIF",
      step1Desc: "Selecione uma ou várias imagens HEIF do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar PDF",
      step3Desc: "Obtenha seus arquivos PDF convertidos imediatamente",
    },
    about: {
      title: "Sobre a Conversão HEIF para PDF",
      whatIsHeif: {
        title: "O que é o Formato HEIF?",
        content:
          "HEIF (High Efficiency Image Format) é um formato de contêiner de imagens moderno que usa compressão HEVC (H.265). Embora semelhante ao HEIC, HEIF é o nome de formato padrão, enquanto HEIC refere-se especificamente à implementação da Apple. HEIF oferece compressão superior comparado ao PDF mantendo alta qualidade de imagem, tornando-o ideal para armazenar fotos de forma eficiente.",
      },
      whyConvert: {
        title: "Por que Converter HEIF para PDF?",
        content:
          "Embora HEIF seja eficiente e moderno, não é universalmente suportado em todos os dispositivos e plataformas. Converter HEIF para PDF garante que suas imagens possam ser visualizadas em qualquer dispositivo, facilmente compartilhadas por e-mail, enviadas para sites e usadas em qualquer aplicativo. O formato PDF é o formato de imagem mais amplamente suportado no mundo, tornando-o perfeito para máxima compatibilidade e compartilhamento.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Qual é a Diferença?",
        content:
          "HEIF (High Efficiency Image Format) é o padrão de formato de contêiner, enquanto HEIC (High Efficiency Image Container) é a implementação específica da Apple do HEIF. Na prática, são muito semelhantes - ambos usam a mesma tecnologia de compressão e oferecem os mesmos benefícios. Dispositivos Apple salvam fotos como arquivos HEIC, que são na verdade compatíveis com HEIF. Nosso conversor trata ambos os formatos sem problemas, então você pode converter qualquer imagem HEIF/HEIC para formato PDF.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Compatibilidade Universal - PDFs funcionam em todos os dispositivos e plataformas",
          "Tamanho de Arquivo Menor - Compressão eficiente para compartilhamento mais rápido",
          "Amplo Suporte - Formato de imagem mais usado mundialmente",
          "Fácil Compartilhamento - Compatível com todos os clientes de e-mail e redes sociais",
          "Pronto para Web - Ideal para sites, redes sociais e uso online",
          "Alta Qualidade - Preserve a resolução original da imagem",
        ],
      },
    },
    faq: {
      title: "Perguntas Frequentes – HEIF para PDF",
      items: [
        {
          q: "É gratuito converter HEIF para PDF?",
          a: "Sim! Nosso conversor HEIF para PDF é completamente gratuito sem custos ocultos. Você pode converter arquivos ilimitados sem registro ou assinatura.",
        },
        {
          q: "Qual é a diferença entre HEIF e HEIC?",
          a: "HEIF (High Efficiency Image Format) é o nome de formato padrão, enquanto HEIC (High Efficiency Image Container) é a implementação específica da Apple. Eles usam a mesma tecnologia de compressão e são funcionalmente muito semelhantes. Nosso conversor trata ambos os formatos sem problemas.",
        },
        {
          q: "Meus dados estão seguros?",
          a: "Absolutamente. Todas as conversões acontecem com segurança em nossos servidores com criptografia SSL. Seus arquivos são automaticamente excluídos imediatamente após a conversão. Nunca armazenamos, compartilhamos ou acessamos seus arquivos.",
        },
        {
          q: "Qual é o tamanho máximo do arquivo?",
          a: "Você pode converter arquivos HEIF de até 100MB cada. Para conversão em lote, você pode processar até 20 arquivos por vez com um limite total de 100MB.",
        },
        {
          q: "Vocês suportam conversão em lote?",
          a: "Sim! Você pode enviar e converter até 20 arquivos HEIF simultaneamente. Todos os PDFs convertidos estarão disponíveis para download como arquivos individuais ou em um único arquivo ZIP.",
        },
        {
          q: "A qualidade será preservada?",
          a: "Sim, mantemos alta qualidade de imagem durante a conversão. Suas imagens HEIF serão convertidas em PDFs de alta resolução com perda mínima de qualidade.",
        },
        {
          q: "Posso converter HEIF de qualquer dispositivo?",
          a: "Sim! Nosso conversor funciona com imagens HEIF de qualquer dispositivo ou câmera que suporte formato HEIF, não apenas dispositivos Apple. Simplesmente envie seus arquivos HEIF e converta-os para PDF.",
        },
        {
          q: "Preciso instalar algum software?",
          a: "Nenhuma instalação necessária. Nosso conversor online funciona diretamente no seu navegador da web em qualquer dispositivo - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Quanto tempo leva a conversão?",
          a: "A conversão é quase instantânea! A maioria dos arquivos HEIF se converte para PDF em apenas alguns segundos, dependendo do tamanho do arquivo e da sua conexão com a Internet.",
        },
      ],
    },
    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "HEIF para PNG", url: "/convert/heif-to-png" },
        { name: "PDF para PDF", url: "/convert/pdf-to-pdf" },
        { name: "PNG para PDF", url: "/convert/png-to-pdf" },
      ],
    },
  },

  // HEIF to GIF Converter
  heifToGif: {
    title: "Conversor HEIF para GIF - Criar GIFs Animados e Imagens Compartilháveis",
    metaDescription:
      "Converter HEIF para GIF para compartilhamento universal e animações. Perfeito para mídias sociais, memes e sites. Funciona em qualquer lugar - sem necessidade de app. Conversor em lote gratuito.",
    metaKeywords:
      "HEIF para GIF, GIF animado, compartilhamento mídias sociais, memes, compatibilidade universal, animação GIF, conversão HEIF em lote, imagens compartilháveis",
    hero: {
      title: "Conversor HEIF para GIF",
      subtitle:
        "Convert HEIF to GIF - the most shareable image format. Perfect for social media posts, memes, and animations. Universal compatibility across all platforms, apps, and messaging services. No special viewer needed.",
      badge1: "Universal Sharing",
      badge2: "Social Media Ready",
      badge3: "Animation Support",
    },
    upload: {
      title: "Upload HEIF Files",
      description:
        "Drag & drop your HEIF images here or click to browse. Supports batch conversion up to 20 files. Maximum 100MB per file.",
      buttonSingle: "Single File",
      buttonBatch: "Batch Convert",
      chooseFile: "Choose Files",
      converting: "Converting...",
      success: "Conversion successful!",
      download: "Download GIF",
      downloadAll: "Download All as ZIP",
      convertAnother: "Convert Another File",
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
      title: "How It Works",
      step1Title: "Upload HEIF Files",
      step1Desc: "Select one or multiple HEIF images from your device",
      step2Title: "Auto Convert",
      step2Desc: "Our converter processes your files instantly",
      step3Title: "Download GIF",
      step3Desc: "Get your converted GIF files immediately",
    },
    about: {
      title: "About HEIF to GIF Conversion",
      whatIsHeif: {
        title: "Why GIF is Perfect for Social Media and Sharing?",
        content:
          "GIF (Graphics Interchange Format) is the most universally compatible image format, created in 1987 and still thriving today. GIFs work absolutely everywhere - all social media platforms (Twitter, Facebook, Instagram, Reddit, Tumblr), messaging apps (WhatsApp, Telegram, Discord, Slack), email clients, forums, and websites display GIFs without any special software.",
      },
      whyConvert: {
        title: "Why Convert HEIF to GIF?",
        content:
          "Convert HEIF to GIF for maximum shareability and universal compatibility. HEIF only works on newer Apple devices and requires special software - making sharing difficult. GIF works instantly on every device, platform, and app without any viewer needed. Perfect for social media posts, meme creation, messaging, website embeds, and reaction images.",
      },
      heifVsHeic: {
        title: "GIF vs Modern Formats - When to Choose GIF",
        content:
          "GIF trades image quality for universal compatibility and animation. Choose GIF when sharing on social media, creating memes or reactions, making simple animations or loops, ensuring 100% compatibility, or targeting viral/shareable content. For internet culture, memes, and social sharing, GIF remains unbeatable despite being 35+ years old.",
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
          a: "GIF is universally compatible - it works on every platform, app, and device without any special software. Social media platforms like Twitter, Facebook, Instagram, and Reddit natively support GIFs with auto-play and looping. GIFs can be animated, are small enough for mobile sharing, and have become the standard format for internet culture and viral content.",
        },
        {
          q: "Can I create animated GIFs from HEIF images?",
          a: "Yes! While a single HEIF converts to a static GIF, you can upload multiple HEIF images in batch mode to create frames for animation. Our converter processes each image separately. To create true animated GIFs with multiple frames, you can use batch conversion and then combine the frames using free GIF animation tools online.",
        },
        {
          q: "Will GIF work on all social media platforms?",
          a: "Absolutely! GIF is natively supported by all major platforms: Twitter/X, Facebook, Instagram, Reddit, Tumblr, WhatsApp, Telegram, Discord, Slack, and virtually every messaging app and forum. GIFs display and loop automatically without any viewer or plugin needed.",
        },
        {
          q: "Why are GIF files larger than HEIF?",
          a: "GIF uses uncompressed or lossless compression to maintain frame-by-frame quality for animations, while HEIF uses modern video compression. However, GIF's universal compatibility and guaranteed display make the size trade-off worthwhile for sharing. For social media and memes, instant visibility on all devices is more valuable than file size optimization.",
        },
        {
          q: "Can I use GIF for professional work?",
          a: "Yes! GIF is perfect for email marketing, website elements, presentations, client communications, and social media marketing. While GIF has 256-color limitations, it's ideal for graphics, logos, text overlays, and simple animations where universal compatibility matters more than photo-realistic quality.",
        },
        {
          q: "What's the difference between GIF and modern formats like WebP?",
          a: "GIF (1987) prioritizes universal compatibility and animation; WebP (2010) prioritizes compression and quality. GIF works on 100% of devices with no special viewer; WebP needs modern browsers. For social media, memes, and shareable content, GIF's guaranteed visibility wins. For website optimization and photo quality, WebP is better.",
        },
        {
          q: "Can I create memes with GIF?",
          a: "Absolutely! GIF is the standard format for internet memes and reaction images. After converting HEIF to GIF, you can add text overlays, combine frames, or use the GIF directly for sharing. GIFs are perfect for memes because they work everywhere, auto-play for immediate impact, and are easily shareable across all platforms.",
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
        { name: "GIF to PNG", url: "/convert/gif-to-png" },
      ],
    },
  },

  // HEIF to PNG Converter
  heifToPng: {
    title: "Conversor HEIF para PNG - Converta Imagens HEIF para PNG Grátis Online",
    metaDescription:
      "Converta imagens HEIF para formato PNG instantaneamente. Conversor online gratuito HEIF para PNG com processamento em lote. Rápido, seguro e sem registro necessário. Funciona com fotos HEIF de todos os dispositivos.",
    metaKeywords:
      "HEIF para PNG, converter HEIF, imagens HEIF para PNG, conversor HEIF, imagem para PNG, conversão em lote HEIF, conversor HEIF gratuito, HEIF vs HEIC",
    hero: {
      title: "Conversor HEIF para PNG",
      subtitle:
        "Transforme suas imagens HEIF em formato PNG universal instantaneamente. Conversão gratuita, rápida e segura sem limites de tamanho de arquivo. Perfeito para fotos HEIF de qualquer dispositivo.",
      badge1: "Super Rápido",
      badge2: "100% Seguro",
      badge3: "Sem Registro",
    },
    upload: {
      title: "Enviar Arquivos HEIF",
      description:
        "Arraste e solte suas imagens HEIF aqui ou clique para procurar. Suporta conversão em lote até 20 arquivos. Máximo 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar PNG",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },
    features: {
      title: "Recursos",
      list: [
        "Conversão HEIF para PNG de alta qualidade",
        "Processamento em lote até 20 arquivos",
        "Preserva a qualidade da imagem",
        "Sem limitações de tamanho de arquivo",
        "100% seguro e privado",
        "Funciona com fotos HEIF de todos os dispositivos",
        "Download instantâneo após conversão",
        "Sem marcas d'água",
      ],
    },
    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos HEIF",
      step1Desc: "Selecione uma ou várias imagens HEIF do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar PNG",
      step3Desc: "Obtenha seus arquivos PNG convertidos imediatamente",
    },
    about: {
      title: "Sobre a Conversão HEIF para PNG",
      whatIsHeif: {
        title: "O que é o Formato HEIF?",
        content:
          "HEIF (High Efficiency Image Format) é um formato de contêiner de imagens moderno que usa compressão HEVC (H.265). Embora semelhante ao HEIC, HEIF é o nome de formato padrão, enquanto HEIC refere-se especificamente à implementação da Apple. HEIF oferece compressão superior comparado ao JPEG mantendo alta qualidade de imagem, tornando-o ideal para armazenar fotos de forma eficiente.",
      },
      whyConvert: {
        title: "Por que Converter HEIF para PNG?",
        content:
          "Embora HEIF seja eficiente e moderno, não é universalmente suportado em todos os dispositivos e plataformas. Converter HEIF para PNG garante que suas imagens possam ser visualizadas em qualquer dispositivo, facilmente compartilhadas por e-mail, enviadas para sites e usadas em qualquer aplicativo. O formato PNG é o formato de imagem mais amplamente suportado no mundo, tornando-o perfeito para máxima compatibilidade e compartilhamento.",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - Qual é a Diferença?",
        content:
          "HEIF (High Efficiency Image Format) é o padrão de formato de contêiner, enquanto HEIC (High Efficiency Image Container) é a implementação específica da Apple do HEIF. Na prática, são muito semelhantes - ambos usam a mesma tecnologia de compressão e oferecem os mesmos benefícios. Dispositivos Apple salvam fotos como arquivos HEIC, que são na verdade compatíveis com HEIF. Nosso conversor trata ambos os formatos sem problemas, então você pode converter qualquer imagem HEIF/HEIC para formato PNG.",
      },
      benefits: {
        title: "Benefícios do Nosso Conversor",
        list: [
          "Compatibilidade Universal - PNGs funcionam em todos os dispositivos e plataformas",
          "Tamanho de Arquivo Menor - Compressão eficiente para compartilhamento mais rápido",
          "Amplo Suporte - Formato de imagem mais usado mundialmente",
          "Fácil Compartilhamento - Compatível com todos os clientes de e-mail e redes sociais",
          "Pronto para Web - Ideal para sites, redes sociais e uso online",
          "Alta Qualidade - Preserve a resolução original da imagem",
        ],
      },
    },
    faq: {
      title: "Perguntas Frequentes – HEIF para PNG",
      items: [
        {
          q: "É gratuito converter HEIF para PNG?",
          a: "Sim! Nosso conversor HEIF para PNG é completamente gratuito sem custos ocultos. Você pode converter arquivos ilimitados sem registro ou assinatura.",
        },
        {
          q: "Qual é a diferença entre HEIF e HEIC?",
          a: "HEIF (High Efficiency Image Format) é o nome de formato padrão, enquanto HEIC (High Efficiency Image Container) é a implementação específica da Apple. Eles usam a mesma tecnologia de compressão e são funcionalmente muito semelhantes. Nosso conversor trata ambos os formatos sem problemas.",
        },
        {
          q: "Meus dados estão seguros?",
          a: "Absolutamente. Todas as conversões acontecem com segurança em nossos servidores com criptografia SSL. Seus arquivos são automaticamente excluídos imediatamente após a conversão. Nunca armazenamos, compartilhamos ou acessamos seus arquivos.",
        },
        {
          q: "Qual é o tamanho máximo do arquivo?",
          a: "Você pode converter arquivos HEIF de até 100MB cada. Para conversão em lote, você pode processar até 20 arquivos por vez com um limite total de 100MB.",
        },
        {
          q: "Vocês suportam conversão em lote?",
          a: "Sim! Você pode enviar e converter até 20 arquivos HEIF simultaneamente. Todos os PNGs convertidos estarão disponíveis para download como arquivos individuais ou em um único arquivo ZIP.",
        },
        {
          q: "A qualidade será preservada?",
          a: "Sim, mantemos alta qualidade de imagem durante a conversão. Suas imagens HEIF serão convertidas em PNGs de alta resolução com perda mínima de qualidade.",
        },
        {
          q: "Posso converter HEIF de qualquer dispositivo?",
          a: "Sim! Nosso conversor funciona com imagens HEIF de qualquer dispositivo ou câmera que suporte formato HEIF, não apenas dispositivos Apple. Simplesmente envie seus arquivos HEIF e converta-os para PNG.",
        },
        {
          q: "Preciso instalar algum software?",
          a: "Nenhuma instalação necessária. Nosso conversor online funciona diretamente no seu navegador da web em qualquer dispositivo - Windows, Mac, Linux, iOS ou Android.",
        },
        {
          q: "Quanto tempo leva a conversão?",
          a: "A conversão é quase instantânea! A maioria dos arquivos HEIF se converte para PNG em apenas alguns segundos, dependendo do tamanho do arquivo e da sua conexão com a Internet.",
        },
      ],
    },
    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "HEIF para PNG", url: "/convert/heif-to-png" },
        { name: "PNG para PDF", url: "/convert/png-to-pdf" },
        { name: "PNG para PNG", url: "/convert/png-to-png" },
      ],
    },
  },

  // JPG to PNG Converter
  jpgToPng: {
    title: "Conversor JPG para PNG - Adicionar Transparência e Qualidade Sem Perdas",
    metaDescription:
      "Converta JPG para PNG para suporte de transparência e qualidade sem perdas. Perfeito para logos, gráficos e imagens web. Preserve a qualidade sem artefatos de compressão. Conversor em lote gratuito, sem registro.",
    metaKeywords:
      "JPG para PNG, adicionar transparência, conversão sem perdas, conversor de gráficos, conversor de logo, imagens web, converter JPG em lote, remover fundo",
    hero: {
      title: "JPG to PNG Converter",
      subtitle:
        "Convert JPG to PNG for transparency support and superior quality. Perfect for logos, graphics, and professional images. PNG preserves every detail without compression artifacts - ideal for web graphics, overlays, and images requiring transparent backgrounds.",
      badge1: "Transparency Support",
      badge2: "Lossless Quality",
      badge3: "No Artifacts",
    },
    upload: {
      title: "Upload JPG Files",
      description:
        "Drag & drop your JPG images here or click to browse. Supports batch conversion up to 20 files. Maximum 100MB per file.",
      buttonSingle: "Single File",
      buttonBatch: "Batch Convert",
      chooseFile: "Choose Files",
      converting: "Converting...",
      success: "Conversion successful!",
      download: "Download PNG",
      downloadAll: "Download All as ZIP",
      convertAnother: "Convert Another File",
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
      title: "How It Works",
      step1Title: "Upload JPG Files",
      step1Desc: "Select one or multiple JPG images from your device",
      step2Title: "Auto Convert",
      step2Desc: "Our converter processes your files instantly",
      step3Title: "Download PNG",
      step3Desc: "Get your converted PNG files immediately",
    },
    about: {
      title: "About JPG to PNG Conversion",
      whatIsHeif: {
        title: "Why PNG is Perfect for Graphics and Logos?",
        content:
          "PNG (Portable Network Graphics) is the professional choice for graphics, logos, and images requiring transparency. Created in 1996 as a patent-free alternative to GIF, PNG uses lossless compression - meaning zero quality loss regardless of how many times you save it. PNG's killer feature is alpha channel transparency - perfect for logos, overlays, watermarks, and graphics that need to blend seamlessly with backgrounds. Unlike JPG (lossy compression that degrades quality), PNG preserves every pixel perfectly, maintaining crisp edges on text, sharp lines on graphics, and vibrant colors without compression artifacts. PNG supports 16 million colors plus 256 levels of transparency, making it the standard for web graphics, UI elements, icons, screenshots, and professional design work. File sizes are larger than JPG but the quality and transparency support are worth it for graphics and logos.",
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
      title: "Frequently Asked Questions – JPG to PNG",
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
      title: "Related Converters",
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

};

export type Translations = typeof pt;
