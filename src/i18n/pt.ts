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
};

export type Translations = typeof pt;
