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
    jpgToWebp: {
      name: "JPG para WebP",
      description: "Converter JPG para WebP para arquivos 25-35% menores e melhor desempenho web",
    },
    jpgToAvif: {
      name: "JPG para AVIF",
      description: "Converter JPG para AVIF para arquivos 50% menores com qualidade superior e compressão moderna",
    },
    jpgToTiff: {
      name: "JPG para TIFF",
      description: "Converter JPG para TIFF para qualidade sem perda, impressão profissional e arquivamento",
    },
    jpgToGif: {
      name: "JPG para GIF",
      description: "Converter JPG para GIF para animações, redes sociais e gráficos web com suporte de transparência",
    },
    jpgToPdf: {
      name: "JPG para PDF",
      description: "Converter imagens JPG para documentos PDF para compatibilidade universal e apresentação profissional",
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

  // JPG to PNG Converter
  jpgToPng: {
    title: "Conversor JPG para PNG - Adicione Transparência e Qualidade Sem Perdas",
    metaDescription:
      "Converta JPG para PNG para suporte de transparência e qualidade sem perdas. Perfeito para logotipos, gráficos e imagens web. Preserve a qualidade da imagem sem artefatos de compressão. Conversor em lote gratuito, sem registro.",
    metaKeywords:
      "JPG para PNG, adicionar transparência, conversão sem perdas, conversor de gráficos, conversor de logotipos, imagens web, converter JPG em lote, remover fundo",
    hero: {
      title: "Conversor JPG para PNG",
      subtitle:
        "Converta JPG para PNG para suporte de transparência e qualidade superior. Perfeito para logotipos, gráficos e imagens profissionais. PNG preserva cada detalhe sem artefatos de compressão - ideal para gráficos web, sobreposições e imagens que requerem fundos transparentes.",
      badge1: "Suporte à Transparência",
      badge2: "Qualidade Sem Perdas",
      badge3: "Sem Artefatos",
    },
    upload: {
      title: "Enviar Arquivos JPG",
      description:
        "Arraste e solte suas imagens JPG aqui ou clique para navegar. Suporta conversão em lote até 20 arquivos. Máximo 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Converter em Lote",
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
        "Suporte à transparência - adicione canal alfa para sobreposições",
        "Qualidade sem perdas - preserve cada pixel perfeitamente",
        "Processamento em lote até 20 arquivos simultaneamente",
        "Sem artefatos de compressão - bordas nítidas e texto",
        "100% seguro com exclusão automática de arquivos",
        "Perfeito para logotipos, gráficos e imagens web",
        "Download instantâneo - pronto para uso",
        "Sem marcas d'água - qualidade profissional",
      ],
    },
    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos JPG",
      step1Desc: "Selecione uma ou múltiplas imagens JPG do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar PNG",
      step3Desc: "Obtenha seus arquivos PNG convertidos imediatamente",
    },
    about: {
      title: "Sobre Conversão JPG para PNG",
      whatIsHeif: {
        title: "Por que PNG é Perfeito para Gráficos e Logotipos?",
        content:
          "PNG (Portable Network Graphics) é a escolha profissional para gráficos, logotipos e imagens que requerem transparência. Criado em 1996 como uma alternativa livre de patentes ao GIF, PNG usa compressão sem perdas - significando zero perda de qualidade independentemente de quantas vezes você o salve. A característica principal do PNG é a transparência do canal alfa - perfeita para logotipos, sobreposições, marcas d'água e gráficos que precisam se misturar perfeitamente com fundos. Ao contrário de JPG (compressão com perdas que degrada a qualidade), PNG preserva cada pixel perfeitamente, mantendo bordas nítidas no texto, linhas afiadas em gráficos e cores vibrantes sem artefatos de compressão. PNG suporta 16 milhões de cores mais 256 níveis de transparência, tornando-o o padrão para gráficos web, elementos UI, ícones, capturas de tela e trabalho de design profissional. Os tamanhos de arquivo são maiores que JPG, mas a qualidade e o suporte à transparência valem a pena para gráficos e logotipos.",
      },
      whyConvert: {
        title: "Por que Converter JPG para PNG?",
        content:
          "Converta JPG para PNG quando precisar de transparência ou qualidade sem perdas. JPG usa compressão com perdas que degrada permanentemente a qualidade da imagem com cada edição - criando artefatos de compressão, texto borrado e bandas de cor. PNG usa compressão sem perdas, preservando qualidade perfeita para sempre. Principais razões para converter: adicionar transparência para logotipos e sobreposições (remover fundos), preparar gráficos para trabalho web/design (bordas nítidas), evitar degradação de qualidade (sem artefatos), criar composições em camadas (suporte ao canal alfa), preservar texto e arte linear (bordas afiadas), ou editar imagens repetidamente sem perda. PNG é essencial para logotipos, ícones, gráficos, capturas de tela, elementos UI, marcas d'água e qualquer imagem que requer fundos transparentes. Embora os arquivos PNG sejam maiores que JPG, a qualidade e o suporte à transparência tornam-no a escolha profissional para trabalho gráfico. Converta JPG para PNG antes de editar para prevenir maior perda de qualidade.",
      },
      heifVsHeic: {
        title: "PNG vs JPG - Quando Escolher PNG",
        content:
          "PNG e JPG servem propósitos diferentes. Escolha PNG para: logotipos e gráficos (bordas nítidas, transparência), imagens com muito texto (sem desfoque), imagens que requerem transparência (sobreposições, marcas d'água), gráficos que precisam de edição repetida (sem perdas), ícones e elementos UI (detalhes afiados), capturas de tela (preservar clareza), ou trabalho de design profissional (zero artefatos). Escolha JPG para: fotografias (compressão eficiente), imagens sem necessidade de transparência, prioridade de tamanho de arquivo (arquivos menores), ou fotos de redes sociais (perda de qualidade aceitável). Vantagens do PNG: qualidade sem perdas (preservação perfeita), suporte à transparência (canal alfa), sem artefatos de compressão (bordas nítidas), edição ilimitada sem degradação. Desvantagens do PNG: tamanhos de arquivo maiores (2-10× maior que JPG), não ideal para fotos (compressão ineficiente). Para uso web: PNG para logotipos/gráficos, JPG para fotos. Para impressão: PNG para gráficos, JPG para fotos. Para edição: Sempre PNG (previne perda de qualidade).",
      },
      benefits: {
        title: "Benefícios do Formato PNG",
        list: [
          "Suporte à Transparência - Adicione canal alfa para logotipos e sobreposições",
          "Qualidade Sem Perdas - Zero perda de qualidade, preservação perfeita de pixels",
          "Sem Artefatos de Compressão - Bordas nítidas, texto afiado, gráficos limpos",
          "Edição Ilimitada - Edite repetidamente sem degradação de qualidade",
          "Padrão Profissional - Escolha da indústria para gráficos e logotipos",
          "Otimizado para Web - Perfeito para elementos UI, ícones e gráficos",
        ],
      },
    },
    faq: {
      title: "Perguntas Frequentes – JPG para PNG",
      items: [
        {
          q: "É gratuito converter JPG para PNG?",
          a: "Sim! Nosso conversor JPG para PNG é completamente gratuito com conversões ilimitadas. Sem registro, assinaturas ou taxas ocultas. Converta quantas imagens precisar para logotipos, gráficos ou uso profissional.",
        },
        {
          q: "Converter JPG para PNG adicionará transparência?",
          a: "Converter JPG para PNG adiciona suporte à transparência (canal alfa), mas não torna automaticamente os fundos brancos/pretos existentes transparentes. O formato PNG suporta transparência, então você pode editar o PNG em editores de fotos (Photoshop, GIMP, Photopea) para remover fundos. A conversão prepara sua imagem para trabalho com transparência mudando-a para um formato que suporta canais alfa.",
        },
        {
          q: "Por que PNG é melhor que JPG para logotipos e gráficos?",
          a: "PNG usa compressão sem perdas (zero perda de qualidade) enquanto JPG usa compressão com perdas (degradação permanente de qualidade). PNG preserva bordas nítidas, texto afiado e linhas limpas perfeitamente - essencial para logotipos e gráficos. PNG também suporta transparência para sobreposições e fundos. JPG cria artefatos de compressão (desfoque, bandas de cor), especialmente ao redor de texto e bordas afiadas. Para logotipos, ícones, gráficos e imagens com muito texto, PNG é a escolha profissional.",
        },
        {
          q: "Os arquivos PNG serão maiores que JPG?",
          a: "Sim, os arquivos PNG são tipicamente 2-10 vezes maiores que JPG porque PNG usa compressão sem perdas enquanto JPG usa compressão com perdas. No entanto, a qualidade e o suporte à transparência tornam-no valioso para gráficos, logotipos e imagens profissionais. Para uso web, o ligeiro aumento no tamanho do arquivo é compensado por qualidade perfeita e capacidades de transparência. Navegadores modernos lidam com PNG eficientemente.",
        },
        {
          q: "Posso editar PNG sem perder qualidade?",
          a: "Absolutamente! PNG é sem perdas, significando que você pode editá-lo e salvá-lo ilimitadas vezes sem degradação de qualidade. Cada salvamento preserva qualidade perfeita. Isso é crucial para trabalho de design onde você precisa fazer múltiplas edições. JPG perde qualidade com cada salvamento devido à recompressão. Para fluxos de trabalho de edição profissional, sempre use PNG.",
        },
        {
          q: "PNG é bom para uso web?",
          a: "Sim! PNG é o formato padrão para gráficos web, logotipos, ícones e elementos UI. Embora maior que JPG, o suporte à transparência e qualidade nítida do PNG tornam-no essencial para design web. Use PNG para logotipos, ícones, botões, gráficos e imagens com muito texto. Use JPG para fotografias onde transparência não é necessária. Compressão moderna e CDNs lidam com PNG eficientemente.",
        },
        {
          q: "Qual é a diferença entre PNG-8 e PNG-24?",
          a: "PNG-8 suporta 256 cores (como GIF) com transparência simples, resultando em arquivos menores. PNG-24 suporta 16 milhões de cores com 256 níveis de transparência alfa (transparência parcial), oferecendo qualidade completa e transparência suave, mas arquivos maiores. Nosso conversor cria PNG-24 para máxima qualidade e suporte completo à transparência. Use PNG-8 apenas para gráficos simples com poucas cores.",
        },
        {
          q: "Posso usar PNG para impressão?",
          a: "Sim! A qualidade sem perdas do PNG torna-o excelente para impressão, especialmente para gráficos, logotipos e designs com muito texto. PNG preserva qualidade perfeita em qualquer resolução. No entanto, para fotografias, TIFF ou JPG de alta qualidade podem ser mais eficientes devido a tamanhos de arquivo menores. Para trabalho de design gráfico de impressão (posters, folhetos, cartões de visita), PNG é ideal.",
        },
        {
          q: "Quanto tempo leva a conversão JPG para PNG?",
          a: "A conversão leva 1-2 segundos por imagem. A conversão PNG é rápida porque é uma mudança de formato que preserva todos os dados. O resultado é um PNG sem perdas pronto para trabalho com transparência, edição repetida ou uso profissional sem degradação de qualidade.",
        },
      ],
    },
    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "PNG para JPG", url: "/convert/png-to-jpg" },
        { name: "JPG para WebP", url: "/convert/jpg-to-webp" },
        { name: "PNG para WebP", url: "/convert/png-to-webp" },
        { name: "HEIC para PNG", url: "/convert/heic-to-png" },
        { name: "HEIF para PNG", url: "/convert/heif-to-png" },
        { name: "JPG para PDF", url: "/convert/jpg-to-pdf" },
      ],
    },
  },

  // JPG to WebP Converter
  jpgToWebp: {
    title: "Conversor JPG para WebP - Otimize Imagens para Web com Compressão Superior",
    metaDescription:
      "Converta JPG para WebP para arquivos 25-35% menores com melhor qualidade. Perfeito para sites, carregamento mais rápido e SEO. Formato moderno com suporte a transparência. Conversor em lote gratuito, sem registro.",
    metaKeywords:
      "JPG para WebP, conversor WebP, otimização de imagens, imagens web, tamanho de arquivo menor, carregamento mais rápido, otimização SEO, converter JPG em lote, formato de imagem moderno",
    hero: {
      title: "Conversor JPG para WebP",
      subtitle:
        "Converta JPG para WebP para compressão e qualidade superiores. Imagens WebP são 25-35% menores que JPG mantendo a mesma qualidade visual - perfeito para sites mais rápidos, melhor SEO e custos de largura de banda reduzidos. Navegadores modernos suportam WebP nativamente.",
      badge1: "25-35% Menor",
      badge2: "Melhor Qualidade",
      badge3: "Otimizado para Web",
    },
    upload: {
      title: "Enviar Arquivos JPG",
      description:
        "Arraste e solte suas imagens JPG aqui ou clique para navegar. Suporta conversão em lote até 20 arquivos. Máximo 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Converter em Lote",
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
        "25-35% arquivos menores que JPG com a mesma qualidade",
        "Compressão superior - melhor que JPG e PNG",
        "Suporte a transparência - canal alfa como PNG",
        "Processamento em lote até 20 arquivos simultaneamente",
        "100% seguro com exclusão automática de arquivos",
        "Perfeito para sites e aplicações web",
        "Download instantâneo - pronto para implantação",
        "Sem marcas d'água - qualidade profissional",
      ],
    },
    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos JPG",
      step1Desc: "Selecione uma ou várias imagens JPG do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar WebP",
      step3Desc: "Obtenha seus arquivos WebP otimizados imediatamente",
    },
    about: {
      title: "Sobre Conversão JPG para WebP",
      whatIsHeif: {
        title: "Por que WebP é Perfeito para Sites Modernos?",
        content:
          "WebP é o formato de imagem moderno do Google projetado especificamente para a web. Lançado em 2010, WebP usa algoritmos de compressão avançados para criar imagens que são 25-35% menores que JPG mantendo a mesma qualidade visual. WebP combina o melhor de ambos os mundos: compressão com perdas como JPG (para fotos) e compressão sem perdas como PNG (para gráficos), além de suporte a transparência de canal alfa. WebP é suportado nativamente por 97% dos navegadores modernos (Chrome, Firefox, Edge, Opera, Safari 14+) e é o formato recomendado para otimização web pelo Google PageSpeed Insights. Imagens WebP carregam mais rápido, reduzem custos de largura de banda, melhoram rankings de SEO e fornecem melhor experiência do usuário. Grandes plataformas como Facebook, YouTube e Google usam WebP extensivamente para entrega de imagens.",
      },
      whyConvert: {
        title: "Por que Converter JPG para WebP?",
        content:
          "Converta JPG para WebP para reduzir drasticamente os tamanhos de arquivo mantendo ou melhorando a qualidade da imagem. Os algoritmos de compressão avançados do WebP criam arquivos que são 25-35% menores que imagens JPG equivalentes, resultando em carregamentos de página mais rápidos, melhores rankings de SEO, custos de largura de banda reduzidos e experiência do usuário melhorada. Benefícios principais: carregamento de site mais rápido (arquivos menores = downloads mais rápidos), melhor SEO (Google favorece sites de carregamento rápido), custos de largura de banda reduzidos (menos transferência de dados), experiência móvel melhorada (mais rápido em conexões lentas), suporte a transparência (canal alfa como PNG), e suporte de navegadores modernos (97% de cobertura). WebP é essencial para desenvolvimento web moderno, sites de e-commerce, blogs e qualquer site priorizando desempenho. Google PageSpeed Insights recomenda WebP para pontuações de desempenho ótimas.",
      },
      heifVsHeic: {
        title: "WebP vs JPG - Quando Escolher WebP",
        content:
          "WebP e JPG servem propósitos diferentes no desenvolvimento web moderno. Escolha WebP para: sites e aplicações web (desempenho ótimo), otimização SEO (carregamento mais rápido = melhores rankings), design mobile-first (arquivos menores = carregamento móvel mais rápido), sites de e-commerce (reduzir custos de largura de banda), navegadores modernos (97% de suporte), necessidades de transparência (suporte a canal alfa), ou aplicações críticas de desempenho. Escolha JPG para: compatibilidade máxima (100% de suporte do navegador), suporte a navegadores mais antigos (IE, Safari mais antigo), clientes de e-mail (suporte WebP limitado), ou quando o tamanho do arquivo não é crítico. Vantagens do WebP: 25-35% arquivos menores, melhor compressão, suporte a transparência, opção sem perdas disponível, formato moderno otimizado para web. Desvantagens do WebP: 3% dos navegadores não suportam (Safari mais antigo, IE), requer fallback para compatibilidade máxima. Para sites modernos: Sempre WebP com fallback JPG. Para e-mail: Use JPG. Para compatibilidade máxima: Forneça ambos os formatos.",
      },
      benefits: {
        title: "Benefícios do Formato WebP",
        list: [
          "25-35% Arquivos Menores - Reduz drasticamente tamanhos de arquivo vs JPG",
          "Melhor Qualidade - Mesma ou melhor qualidade visual em tamanhos menores",
          "Suporte a Transparência - Canal alfa como PNG para sobreposições",
          "Carregamento Mais Rápido - Arquivos menores significam carregamentos de página mais rápidos",
          "Otimizado para SEO - Google favorece sites de carregamento rápido",
          "Padrão Moderno - Recomendado pelo Google PageSpeed Insights",
        ],
      },
    },
    faq: {
      title: "Perguntas Frequentes – JPG para WebP",
      items: [
        {
          q: "É gratuito converter JPG para WebP?",
          a: "Sim! Nosso conversor JPG para WebP é completamente gratuito com conversões ilimitadas. Sem registro, assinaturas ou taxas ocultas. Converta quantas imagens precisar para seu site, blog ou aplicação web.",
        },
        {
          q: "Quanto menores são os arquivos WebP comparados a JPG?",
          a: "Arquivos WebP são tipicamente 25-35% menores que imagens JPG equivalentes mantendo a mesma qualidade visual. Isso significa carregamentos de página mais rápidos, custos de largura de banda reduzidos e melhor experiência do usuário. A proporção de compressão exata depende do conteúdo da imagem, mas WebP consistentemente supera JPG na redução do tamanho do arquivo.",
        },
        {
          q: "WebP funcionará em todos os navegadores?",
          a: "WebP é suportado por 97% dos navegadores modernos, incluindo Chrome, Firefox, Edge, Opera e Safari 14+. Navegadores mais antigos (IE, Safari <14) não suportam WebP, então para compatibilidade máxima, forneça fallbacks JPG usando o elemento HTML <picture> ou sirva WebP com cabeçalhos Content-Type apropriados e fallbacks JPG.",
        },
        {
          q: "A qualidade WebP é melhor que JPG?",
          a: "WebP pode alcançar a mesma qualidade visual que JPG em tamanhos de arquivo 25-35% menores, ou melhor qualidade no mesmo tamanho de arquivo. WebP usa algoritmos de compressão avançados que são mais eficientes que a compressão mais antiga do JPG. Para uso web, WebP é a escolha superior tanto para qualidade quanto tamanho de arquivo.",
        },
        {
          q: "WebP pode suportar transparência como PNG?",
          a: "Sim! WebP suporta transparência de canal alfa exatamente como PNG, tornando-o perfeito para imagens que precisam de fundos transparentes, sobreposições ou gráficos. Esta é uma grande vantagem sobre JPG, que não suporta transparência. WebP pode substituir tanto JPG (para fotos) quanto PNG (para gráficos com transparência) em muitos casos.",
        },
        {
          q: "WebP é bom para SEO?",
          a: "Absolutamente! WebP é excelente para SEO porque cria arquivos menores que carregam mais rápido. Google PageSpeed Insights recomenda WebP para pontuações de desempenho ótimas. Sites de carregamento mais rápido classificam mais alto nos resultados de pesquisa, e WebP é um fator chave para alcançar tempos de carregamento de página rápidos. O próprio Google usa WebP extensivamente em suas plataformas.",
        },
        {
          q: "Posso usar WebP para imagens de produtos de e-commerce?",
          a: "Sim! WebP é perfeito para e-commerce porque reduz tamanhos de arquivo sem sacrificar qualidade, resultando em carregamentos de página de produtos mais rápidos e melhor experiência do usuário. Grandes plataformas de e-commerce suportam WebP, e é especialmente benéfico para compradores móveis que podem ter conexões mais lentas. Sempre forneça fallbacks JPG para compatibilidade máxima.",
        },
        {
          q: "Qual é a diferença entre WebP com perdas e sem perdas?",
          a: "WebP com perdas (como JPG) usa compressão que reduz ligeiramente a qualidade para tamanhos de arquivo muito menores - perfeito para fotos. WebP sem perdas (como PNG) preserva qualidade perfeita mas com melhor compressão que PNG - perfeito para gráficos. Nosso conversor cria WebP com perdas otimizado para uso web, equilibrando qualidade e tamanho de arquivo para desempenho ótimo.",
        },
        {
          q: "Quanto tempo leva a conversão JPG para WebP?",
          a: "A conversão leva 1-2 segundos por imagem. A conversão WebP é rápida porque é otimizada para desempenho web. O resultado é uma imagem menor e de carregamento mais rápido pronta para uso imediato em seu site ou aplicação web.",
        },
      ],
    },
    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "PNG para WebP", url: "/convert/png-to-webp" },
        { name: "HEIC para WebP", url: "/convert/heic-to-webp" },
        { name: "HEIF para WebP", url: "/convert/heif-to-webp" },
        { name: "JPG para PNG", url: "/convert/jpg-to-png" },
        { name: "JPG para GIF", url: "/convert/jpg-to-gif" },
        { name: "JPG para PDF", url: "/convert/jpg-to-pdf" },
      ],
    },
  },
  // JPG to AVIF Converter
  jpgToAvif: {
    title: "Conversor JPG para AVIF - Compressão Ultra-Moderna com Arquivos 50% Menores",
    metaDescription:
      "Convertea JPG para AVIF para tamanhos de arquivo 50% menores com qualidade superior. Formato de imagem de próxima geração com compressão avançada. Perfeito para sites modernos, carregamento mais rápido e desempenho ótimo. Conversor em lote gratuito, sem registro.",
    metaKeywords:
      "JPG para AVIF, conversor AVIF, formato de imagem de próxima geração, ultra compressão, tamanho de arquivo menor, carregamento mais rápido, imagens web modernas, converter JPG em lote, formato de imagem AV1",
    hero: {
      title: "Conversor JPG para AVIF",
      subtitle:
        "Convertea JPG para AVIF para a máxima compressão de imagens. Imagens AVIF são 50% menores que JPG oferecendo qualidade superior - perfeito para sites modernos, tempos de carregamento mais rápidos e desempenho ótimo. AVIF é o formato de imagem de próxima geração baseado no codec de vídeo AV1.",
      badge1: "50% Menor",
      badge2: "Qualidade Superior",
      badge3: "Formato Next-Gen",
    },
    upload: {
      title: "Enviar Arquivos JPG",
      description:
        "Arraste e solte suas imagens JPG aqui ou clique para navegar. Suporta conversão em lote até 20 arquivos. Máximo 100MB por arquivo.",
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
        "50% arquivos menores que JPG com qualidade superior",
        "Compressão de próxima geração - eficiência de classe mundial",
        "Suporte à transparência - canal alfa como PNG",
        "Processamento em lote até 20 arquivos simultaneamente",
        "100% seguro com exclusão automática de arquivos",
        "Perfeito para sites e aplicativos modernos",
        "Download instantâneo - pronto para implantação",
        "Sem marcas d'água - qualidade profissional",
      ],
    },
    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos JPG",
      step1Desc: "Selecione uma ou várias imagens JPG do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar AVIF",
      step3Desc: "Obtenha seus arquivos AVIF otimizados imediatamente",
    },
    about: {
      title: "Sobre Conversão JPG para AVIF",
      whatIsHeif: {
        title: "Por que AVIF é o Futuro das Imagens Web?",
        content:
          "AVIF (AV1 Image File Format) é o formato de imagem de próxima geração baseado no codec de vídeo AV1, desenvolvido pela Alliance for Open Media. Lançado em 2019, AVIF usa tecnologia de compressão de ponta para criar imagens que são 50% menores que JPG oferecendo qualidade superior. AVIF combina modos de compressão com perda e sem perda, suporta HDR (High Dynamic Range), amplas gamas de cores e transparência de canal alfa. AVIF é suportado por navegadores modernos (Chrome 85+, Firefox 93+, Edge 121+, Safari 17+) e está rapidamente se tornando o padrão para otimização web moderna. Grandes plataformas como Netflix, YouTube e Google estão adotando AVIF por sua excepcional eficiência de compressão. AVIF representa o futuro das imagens web com taxas de compressão e qualidade incomparáveis.",
      },
      whyConvert: {
        title: "Por que Converter JPG para AVIF?",
        content:
          "Convertea JPG para AVIF para alcançar a máxima compressão e qualidade de imagens. A compressão avançada baseada em AV1 do AVIF cria arquivos que são 50% menores que JPG mantendo ou melhorando a qualidade visual. Benefícios principais: tamanhos de arquivo dramaticamente menores (50% de redução vs JPG), qualidade superior (melhor que JPG no mesmo tamanho de arquivo), carregamentos de página mais rápidos (arquivos menores = downloads mais rápidos), melhor SEO (Google favorece sites de carregamento rápido), custos de largura de banda reduzidos (menos transferência de dados), experiência móvel melhorada (mais rápido em conexões lentas), suporte à transparência (canal alfa), suporte HDR (gama de cores mais ampla) e suporte de navegadores modernos (adoção crescente). AVIF é essencial para desenvolvimento web de ponta, aplicativos críticos de desempenho e qualquer site que prioriza entrega ótima de imagens. AVIF é o futuro das imagens web.",
      },
      heifVsHeic: {
        title: "AVIF vs JPG - Quando Escolher AVIF",
        content:
          "AVIF e JPG servem a propósitos diferentes no desenvolvimento web moderno. Escolha AVIF para: sites e aplicativos modernos (desempenho ótimo), compressão máxima (50% menor que JPG), qualidade superior (melhor que JPG no mesmo tamanho), sites críticos de desempenho (carregamento mais rápido), navegadores modernos (Chrome 85+, Firefox 93+, Safari 17+), necessidades de transparência (canal alfa), conteúdo HDR (gama de cores ampla) ou desenvolvimento web de ponta. Escolha JPG para: compatibilidade máxima (100% de suporte do navegador), suporte de navegadores antigos (anteriores a 2019), clientes de email (suporte AVIF limitado) ou quando o tamanho do arquivo não é crítico. Vantagens do AVIF: 50% arquivos menores, compressão superior, melhor qualidade, suporte à transparência, suporte HDR, opção sem perda, formato de próxima geração. Desvantagens do AVIF: formato mais novo (requer navegadores modernos), requer fallback para navegadores antigos. Para sites modernos: Sempre AVIF com fallback JPG. Para email: Use JPG. Para compatibilidade máxima: Forneça ambos os formatos.",
      },
      benefits: {
        title: "Benefícios do Formato AVIF",
        list: [
          "50% Arquivos Menores - Tamanhos de arquivo dramaticamente reduzidos vs JPG",
          "Qualidade Superior - Melhor que JPG no mesmo tamanho de arquivo",
          "Compressão Next-Gen - Eficiência de classe mundial",
          "Suporte à Transparência - Canal alfa como PNG",
          "Suporte HDR - Gama de cores ampla e alto alcance dinâmico",
          "Suporte de Navegadores Modernos - Adoção crescente em Chrome, Firefox, Safari",
        ],
      },
    },
    faq: {
      title: "Perguntas Frequentes – JPG para AVIF",
      items: [
        {
          q: "É gratuito converter JPG para AVIF?",
          a: "Sim! Nosso conversor JPG para AVIF é completamente gratuito com conversões ilimitadas. Sem registro, assinaturas ou taxas ocultas. Convertea quantas imagens precisar para sites modernos, aplicativos ou uso profissional.",
        },
        {
          q: "Quanto menores são os arquivos AVIF comparados a JPG?",
          a: "Arquivos AVIF são tipicamente 50% menores que JPG mantendo a mesma ou melhor qualidade visual. Esta redução dramática de tamanho resulta em carregamentos de página mais rápidos, melhores classificações SEO e custos de largura de banda reduzidos. A compressão avançada do AVIF é a mais eficiente disponível para imagens web.",
        },
        {
          q: "A qualidade AVIF é melhor que JPG?",
          a: "Sim! AVIF oferece qualidade superior comparado a JPG no mesmo tamanho de arquivo, ou a mesma qualidade em 50% tamanho de arquivo menor. A compressão baseada em AV1 do AVIF é mais avançada que os algoritmos de compressão mais antigos do JPG, resultando em melhor preservação de detalhes, menos artefatos e precisão de cores superior.",
        },
        {
          q: "Quais navegadores suportam AVIF?",
          a: "AVIF é suportado por navegadores modernos: Chrome 85+, Firefox 93+, Edge 121+, Safari 17+ e Opera 71+. O suporte AVIF está crescendo rapidamente, e a maioria dos navegadores modernos agora o suporta. Para compatibilidade máxima, forneça fallbacks JPG para navegadores antigos.",
        },
        {
          q: "AVIF pode suportar transparência como PNG?",
          a: "Sim! AVIF suporta transparência de canal alfa exatamente como PNG, tornando-o perfeito para logotipos, gráficos e imagens que requerem fundos transparentes. AVIF combina os benefícios de compressão de formatos modernos com as capacidades de transparência do PNG.",
        },
        {
          q: "AVIF é bom para SEO?",
          a: "Absolutamente! AVIF é excelente para SEO porque tamanhos de arquivo menores resultam em carregamentos de página mais rápidos, o que Google favorece em classificações de pesquisa. Sites de carregamento mais rápido classificam mais alto, e a redução de tamanho de 50% do AVIF melhora significativamente as pontuações de velocidade de página. Google PageSpeed Insights reconhece AVIF como um formato ótimo.",
        },
        {
          q: "Posso usar AVIF para imagens de produtos de e-commerce?",
          a: "Sim! AVIF é perfeito para e-commerce porque reduz dramaticamente os tamanhos de arquivo sem sacrificar qualidade, levando a carregamentos de página de produtos mais rápidos e melhor experiência do usuário. Muitas grandes plataformas de e-commerce suportam AVIF, e é especialmente benéfico para compradores móveis com conexões mais lentas.",
        },
        {
          q: "Quanto tempo leva a conversão JPG para AVIF?",
          a: "A conversão leva 1-2 segundos por imagem. A conversão AVIF é rápida porque está otimizada para processadores modernos. O resultado é uma imagem altamente comprimida e de alta qualidade pronta para implantação web moderna com desempenho ótimo.",
        },
      ],
    },
    related: {
      title: "Convertidores Relacionados",
      converters: [
        { name: "AVIF para JPG", url: "/convert/avif-to-jpg" },
        { name: "JPG para WebP", url: "/convert/jpg-to-webp" },
        { name: "JPG para PNG", url: "/convert/jpg-to-png" },
        { name: "HEIC para AVIF", url: "/convert/heic-to-avif" },
        { name: "HEIF para AVIF", url: "/convert/heif-to-avif" },
        { name: "JPG para PDF", url: "/convert/jpg-to-pdf" },
      ],
    },
  },
  // JPG to GIF Converter
        jpgToGif: {
        title: "JPG to GIF Converter - Create Animated GIFs and Web Graphics",
        metaDescription:
          "Convert JPG to GIF for animations, social media, and web graphics. GIF format supports transparency and animation. Perfect for memes, social media posts, and animated graphics. Free batch converter, no registration.",
        metaKeywords:
          "JPG to GIF, convert JPG to GIF, GIF converter, animated GIF, social media images, web graphics, transparency support, batch convert JPG, free GIF converter",
        hero: {
          title: "JPG to GIF Converter",
          subtitle:
            "Convert JPG to GIF for animations, social media, and web graphics. GIF (Graphics Interchange Format) supports transparency and is perfect for memes, social media posts, animated graphics, and simple animations. GIF is widely supported across all platforms and browsers.",
          badge1: "Animation Ready",
          badge2: "Social Media",
          badge3: "Web Graphics",
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
          download: "Download GIF",
          downloadAll: "Download All as ZIP",
          convertAnother: "Convert Another File",
        },
        features: {
          title: "Features",
          list: [
            "Convert JPG to GIF for animations and web graphics",
            "Transparency support - perfect for overlays and graphics",
            "Social media optimized - ideal for memes and posts",
            "Batch processing up to 20 files simultaneously",
            "100% secure with automatic file deletion",
            "Widely supported format - works everywhere",
            "Instant download - ready for sharing",
            "No watermarks - professional quality",
          ],
        },
        howItWorks: {
          title: "How It Works",
          step1Title: "Upload JPG Files",
          step1Desc: "Select one or multiple JPG images from your device",
          step2Title: "Auto Convert",
          step2Desc: "Our converter processes your files instantly",
          step3Title: "Download GIF",
          step3Desc: "Get your GIF files immediately",
        },
        about: {
          title: "About JPG to GIF Conversion",
          whatIsGif: {
            title: "What is GIF Format?",
            content:
              "GIF (Graphics Interchange Format) is a bitmap image format introduced by CompuServe in 1987. GIF supports up to 256 colors per frame, transparency, and animation. GIF is widely used for simple animations, memes, social media graphics, web graphics, and logos. GIF's animation capability makes it unique among image formats - it can display multiple frames in sequence to create animated images. GIF is supported by virtually all browsers, platforms, and applications, making it the universal choice for animated graphics and simple web graphics. While GIF uses lossless compression, it's limited to 256 colors, making it ideal for graphics with limited color palettes rather than photographs.",
          },
          whyConvert: {
            title: "Why Convert JPG to GIF?",
            content:
              "Convert JPG to GIF when you need animated graphics, social media content, or web graphics with transparency. Key benefits: animation support (create animated GIFs from multiple images), social media compatibility (perfect for memes and posts), transparency support (ideal for overlays and graphics), universal compatibility (works on all platforms), web graphics (perfect for simple graphics and logos), or small file sizes (for graphics with limited colors). GIF is essential for: social media marketing (memes, animated posts), web design (animated graphics, logos), presentations (animated elements), email marketing (animated banners), or simple animations (basic animated graphics). GIF ensures your graphics work everywhere and support animation when needed.",
          },
          benefits: {
            title: "Benefits of GIF Format",
            list: [
              "Animation Support - Create animated graphics from multiple frames",
              "Transparency Support - Perfect for overlays and graphics",
              "Universal Compatibility - Works on all platforms and browsers",
              "Social Media Ready - Ideal for memes and animated posts",
              "Web Graphics - Perfect for simple graphics and logos",
              "Small File Sizes - Efficient for graphics with limited colors",
            ],
          },
        },
        faq: {
          title: "Frequently Asked Questions – JPG to GIF",
          items: [
            {
              q: "Is it free to convert JPG to GIF?",
              a: "Yes! Our JPG to GIF converter is completely free with unlimited conversions. No registration, subscriptions, or hidden fees. Convert as many images as you need for animations, social media, or web graphics.",
            },
            {
              q: "Can I create animated GIFs from JPG images?",
              a: "Our converter converts single JPG images to static GIF format. To create animated GIFs, you would need multiple images (frames) that are combined into one animated GIF. For animated GIFs, you would need to upload multiple images or use specialized animation tools.",
            },
            {
              q: "Will GIF files be smaller than JPG?",
              a: "GIF files are typically larger than JPG for photographs because GIF is limited to 256 colors and uses lossless compression, while JPG uses lossy compression optimized for photos. However, for graphics with limited colors (logos, icons, simple graphics), GIF can be smaller and more efficient.",
            },
            {
              q: "Does GIF support transparency?",
              a: "Yes! GIF supports transparency, making it perfect for graphics that need transparent backgrounds, overlays, or graphics. GIF's transparency support is simple (one color can be transparent), which is ideal for graphics and logos.",
            },
            {
              q: "Is GIF good for social media?",
              a: "Yes! GIF is perfect for social media, especially for memes, animated posts, and simple graphics. Most social media platforms support GIF natively, and GIF's animation capability makes it ideal for engaging social media content.",
            },
            {
              q: "Can I use GIF for web graphics?",
              a: "Absolutely! GIF is excellent for web graphics, especially for logos, icons, simple graphics, and animated elements. GIF's universal compatibility and transparency support make it ideal for web design. However, for photographs, JPG or WebP are usually better choices.",
            },
            {
              q: "What's the difference between GIF and JPG?",
              a: "GIF supports animation and transparency but is limited to 256 colors, making it ideal for graphics. JPG supports millions of colors and is optimized for photographs but doesn't support animation or transparency. Choose GIF for graphics, animations, and simple images. Choose JPG for photographs.",
            },
            {
              q: "How long does JPG to GIF conversion take?",
              a: "Conversion takes 1-2 seconds per image. GIF conversion is fast and efficient, producing GIF files ready for animations, social media, web graphics, or any application requiring GIF format.",
            },
          ],
        },
        related: {
          title: "Related Converters",
          converters: [
            { name: "GIF to JPG", url: "/convert/gif-to-jpg" },
            { name: "JPG to PNG", url: "/convert/jpg-to-png" },
            { name: "JPG to WebP", url: "/convert/jpg-to-webp" },
            { name: "PNG to GIF", url: "/convert/png-to-gif" },
            { name: "HEIC to GIF", url: "/convert/heic-to-gif" },
            { name: "JPG to PDF", url: "/convert/jpg-to-pdf" },
          ],
        },
      },
      // JPG to BMP Converter
  jpgToBmp: {
    title: "Conversor JPG para BMP - Converta Imagens para Formato Windows Bitmap Grátis",
    metaDescription:
      "Converta imagens JPG para BMP instantaneamente. Conversor JPG para BMP gratuito online com processamento em lote. Rápido, seguro e sem registro. Ideal para compatibilidade com Windows e qualidade sem compressão.",
    metaKeywords:
      "JPG para BMP, converter JPG para BMP, imagem para BMP, foto para BMP, conversão em lote JPG, conversor BMP, conversor BMP gratuito, Windows bitmap",
    hero: {
      title: "Conversor JPG para BMP",
      subtitle:
        "Converta imagens JPG para o formato Windows BMP instantaneamente. BMP (Bitmap) é um formato de imagem sem compressão ideal para compatibilidade com Windows e preservação máxima de qualidade. Conversão gratuita, rápida e segura.",
      badge1: "Qualidade Sem Compressão",
      badge2: "Compatível com Windows",
      badge3: "Sem Registro",
    },
    upload: {
      title: "Enviar Arquivos JPG",
      description:
        "Arraste e solte suas imagens JPG aqui ou clique para navegar. Suporta conversão em lote até 20 arquivos. Máximo 100MB por arquivo.",
      buttonSingle: "Arquivo Único",
      buttonBatch: "Conversão em Lote",
      chooseFile: "Escolher Arquivos",
      converting: "Convertendo...",
      success: "Conversão bem-sucedida!",
      download: "Baixar BMP",
      downloadAll: "Baixar Tudo como ZIP",
      convertAnother: "Converter Outro Arquivo",
    },
    features: {
      title: "Recursos",
      list: [
        "Conversão JPG para BMP de alta qualidade",
        "Processamento em lote até 20 arquivos simultaneamente",
        "Formato sem compressão preserva a máxima qualidade",
        "Compatibilidade perfeita com Windows",
        "100% seguro com exclusão automática de arquivos",
        "Sem perda de qualidade durante a conversão",
        "Download instantâneo - pronto para uso",
        "Sem marca d'água - qualidade profissional",
      ],
    },
    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos JPG",
      step1Desc: "Selecione uma ou várias imagens JPG do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar BMP",
      step3Desc: "Obtenha seus arquivos BMP convertidos imediatamente",
    },
    about: {
      title: "Sobre a Conversão JPG para BMP",
      whatIsHeif: {
        title: "O que é o Formato BMP?",
        content:
          "BMP (Bitmap Image File) é um formato de imagem raster desenvolvido pela Microsoft para Windows. Os arquivos BMP não são comprimidos, preservando cada pixel da imagem original sem artefatos de compressão. Embora sejam maiores que formatos comprimidos como JPG, oferecem máxima qualidade e são amplamente suportados no Windows. O formato BMP suporta várias profundidades de cor (1, 4, 8, 16, 24 e 32 bits) e é ideal para aplicações que exigem dados de imagem sem compressão.",
      },
      whyConvert: {
        title: "Por que Converter JPG para BMP?",
        content:
          "Converta JPG para BMP quando precisar de qualidade sem compressão ou compatibilidade específica com Windows. JPG usa compressão com perda, enquanto BMP preserva cada pixel. Motivos principais: manter a máxima qualidade, garantir compatibilidade Windows, preparar imagens para aplicativos Windows, arquivar sem perda de qualidade ou usar em sistemas legados.",
      },
      heifVsHeic: {
        title: "BMP vs JPG - Quando Escolher BMP",
        content:
          "BMP e JPG servem a propósitos diferentes. Escolha BMP para qualidade sem compressão, aplicações Windows, arquivamento sem perda, desenvolvimento de software, sistemas legados ou precisão. Escolha JPG para web, compartilhamento online ou quando o tamanho do arquivo importa.",
      },
      benefits: {
        title: "Benefícios do Formato BMP",
        list: [
          "Qualidade Sem Compressão - Zero artefatos, preservação perfeita de pixels",
          "Nativo do Windows - Suporte integrado em todos os sistemas Windows",
          "Compatibilidade Máxima - Funciona com todas as aplicações Windows",
          "Sem Perda de Qualidade - Preserva cada pixel da imagem original",
          "Formato Simples - Fácil de ler e processar",
          "Suporte de Profundidade de Cor - Até 32 bits",
        ],
      },
    },
    faq: {
      title: "Perguntas Frequentes – JPG para BMP",
      items: [
        {
          q: "É gratuito converter JPG para BMP?",
          a: "Sim. Nosso conversor JPG para BMP é totalmente gratuito com conversões ilimitadas.",
        },
        {
          q: "Arquivos BMP são maiores que JPG?",
          a: "Sim, BMP costuma ser 3-10 vezes maior por não ser comprimido.",
        },
        {
          q: "A qualidade é preservada na conversão?",
          a: "BMP preserva os dados do JPG. Se o JPG já perdeu qualidade, isso não é recuperado, mas não há perda adicional.",
        },
        {
          q: "Posso usar BMP em sistemas não Windows?",
          a: "Sim, BMP abre em macOS, Linux e outros sistemas, embora seja mais associado ao Windows.",
        },
        {
          q: "Qual o tamanho máximo para converter em BMP?",
          a: "Até 100MB por arquivo e até 20 arquivos em lote.",
        },
        {
          q: "Por que escolher BMP em vez de JPG?",
          a: "Escolha BMP para qualidade sem compressão e compatibilidade com Windows. Para web, JPG costuma ser mais prático.",
        },
        {
          q: "Quanto tempo leva a conversão JPG para BMP?",
          a: "Cerca de 1-2 segundos por imagem. É rápido porque é principalmente uma troca de formato.",
        },
      ],
    },
    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "JPG para PNG", url: "/convert/jpg-to-png" },
        { name: "PNG para BMP", url: "/convert/png-to-bmp" },
        { name: "BMP para PNG", url: "/convert/bmp-to-png" },
      ],
    },
  },
  // JPG to PDF Converter
  jpgToPdf: {
    title: "Conversor JPG para PDF - Converta Imagens em Documentos PDF Gratuitamente Online",
    metaDescription:
      "Converta imagens JPG para formato PDF instantaneamente. Perfeito para documentos, portfólios e apresentações profissionais. Conversor em lote gratuito, sem registro. Preserve a qualidade da imagem em formato PDF universal.",
    metaKeywords:
      "JPG para PDF, converter JPG para PDF, imagem para PDF, foto para PDF, converter JPG em lote, conversor PDF, conversor PDF gratuito, imagem para documento",
    hero: {
      title: "Conversor JPG para PDF",
      subtitle:
        "Converta imagens JPG em documentos PDF profissionais instantaneamente. Perfeito para criar portfólios, apresentações e documentos. O formato PDF garante compatibilidade universal e fácil compartilhamento em todos os dispositivos e plataformas.",
      badge1: "Formato Universal",
      badge2: "Qualidade Profissional",
      badge3: "Fácil Compartilhamento",
    },
    upload: {
      title: "Enviar Arquivos JPG",
      description:
        "Arraste e solte suas imagens JPG aqui ou clique para navegar. Suporta conversão em lote até 20 arquivos. Máximo 100MB por arquivo.",
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
        "Conversão JPG para PDF de alta qualidade",
        "Processamento em lote até 20 arquivos simultaneamente",
        "Preserva qualidade e resolução da imagem",
        "Compatibilidade universal - PDFs funcionam em todos os lugares",
        "100% seguro com exclusão automática de arquivos",
        "Perfeito para documentos e portfólios",
        "Download instantâneo - Pronto para compartilhar",
        "Sem marcas d'água - Qualidade profissional",
      ],
    },
    howItWorks: {
      title: "Como Funciona",
      step1Title: "Enviar Arquivos JPG",
      step1Desc: "Selecione uma ou várias imagens JPG do seu dispositivo",
      step2Title: "Conversão Automática",
      step2Desc: "Nosso conversor processa seus arquivos instantaneamente",
      step3Title: "Baixar PDF",
      step3Desc: "Obtenha seus arquivos PDF convertidos imediatamente",
    },
    about: {
      title: "Sobre a Conversão JPG para PDF",
      whatIsHeif: {
        title: "Por que PDF é Perfeito para Documentos e Portfólios?",
        content:
          "PDF (Portable Document Format) é o padrão universal para documentos, criado pela Adobe em 1993. PDF garante que seus documentos pareçam exatamente iguais em qualquer dispositivo, sistema operacional ou aplicativo - tornando-o a escolha profissional para compartilhamento, arquivamento e impressão. PDFs preservam a qualidade da imagem, suportam várias páginas e são universalmente compatíveis. Ao contrário dos formatos de imagem (JPG, PNG) projetados para visualização, PDFs são projetados para documentos - perfeitos para portfólios, apresentações, relatórios e documentos profissionais. PDFs podem conter várias imagens, texto e formatação, tornando-os ideais para criar documentos abrangentes a partir de suas fotos.",
      },
      whyConvert: {
        title: "Por que Converter JPG para PDF?",
        content:
          "Converta JPG para PDF quando precisar criar documentos, portfólios ou apresentações. JPG é um formato de imagem projetado para visualizar fotos, enquanto PDF é um formato de documento projetado para compartilhamento e impressão. Principais razões para converter: criar portfólios profissionais (várias imagens em um documento), preparar documentos para impressão (PDF está pronto para impressão), garantir compatibilidade universal (PDFs funcionam em todos os dispositivos), compartilhar por e-mail (PDFs são compatíveis com e-mail), arquivar fotos profissionalmente (formato padrão da indústria), ou combinar várias imagens em um documento. PDFs são essenciais para documentos comerciais, portfólios, apresentações, relatórios e qualquer uso profissional onde você precise combinar imagens em um formato de documento. PDFs mantêm a qualidade da imagem enquanto fornecem estrutura de documento e compatibilidade universal.",
      },
      heifVsHeic: {
        title: "PDF vs JPG - Quando Escolher PDF",
        content:
          "PDF e JPG servem a propósitos diferentes. Escolha PDF para: documentos e portfólios (várias imagens em um arquivo), apresentações profissionais (compatibilidade universal), impressão e arquivamento (formato pronto para impressão), compartilhamento por e-mail (compatível com e-mail), uso comercial (padrão profissional), ou combinar várias imagens (estrutura de documento). Escolha JPG para: visualizar fotos (formato de imagem), uso na web (tamanhos de arquivo menores), redes sociais (suporte nativo), ou compartilhar uma única imagem (formato mais simples). Vantagens do PDF: compatibilidade universal (funciona em todos os lugares), estrutura de documento (várias páginas, suporte a texto), pronto para impressão (perfeito para impressão), padrão profissional (escolha da indústria), preserva qualidade (mantém resolução da imagem). Desvantagens do PDF: tamanhos de arquivo maiores (sobrecarga do documento), não ideal para web (carregamento mais lento), requer visualizador PDF (embora integrado na maioria dos sistemas). Para documentos: Sempre PDF. Para fotos: Use JPG. Para portfólios: PDF é a escolha profissional.",
      },
      benefits: {
        title: "Benefícios do Formato PDF",
        list: [
          "Compatibilidade Universal - PDFs funcionam em todos os dispositivos e plataformas",
          "Padrão Profissional - Escolha da indústria para documentos e portfólios",
          "Pronto para Impressão - Perfeito para impressão física e arquivamento",
          "Estrutura de Documento - Combine várias imagens em um documento",
          "Fácil Compartilhamento - Formato compatível com e-mail que qualquer pessoa pode abrir",
          "Preservação de Qualidade - Mantém a resolução original da imagem",
        ],
      },
    },
    faq: {
      title: "Perguntas Frequentes – JPG para PDF",
      items: [
        {
          q: "É gratuito converter JPG para PDF?",
          a: "Sim! Nosso conversor JPG para PDF é completamente gratuito com conversões ilimitadas. Sem registro, assinaturas ou taxas ocultas. Converta quantas imagens precisar para documentos, portfólios ou uso profissional.",
        },
        {
          q: "Posso converter várias imagens JPG em um PDF?",
          a: "Sim! Nosso conversor em lote permite enviar até 20 imagens JPG e convertê-las em arquivos PDF separados. Cada imagem JPG se torna seu próprio documento PDF, preservando a qualidade e resolução originais da imagem.",
        },
        {
          q: "A qualidade da imagem será preservada ao converter JPG para PDF?",
          a: "Sim. Preservamos a qualidade original da imagem durante a conversão. Suas imagens JPG são convertidas em arquivos PDF de alta resolução sem compressão ou perda de qualidade. O PDF mantém a mesma qualidade de imagem do JPG original.",
        },
        {
          q: "Posso usar PDFs para impressão?",
          a: "Absolutamente! PDFs são o formato padrão para impressão. PDFs estão prontos para impressão e mantêm a qualidade da imagem em qualquer resolução. PDFs são usados por impressoras profissionais e são ideais para portfólios, apresentações e documentos que precisam ser impressos.",
        },
        {
          q: "PDFs funcionarão em todos os dispositivos?",
          a: "Sim! PDFs são universalmente compatíveis e funcionam em todos os dispositivos, sistemas operacionais e plataformas. PDFs podem ser abertos no Windows, macOS, Linux, iOS, Android e qualquer dispositivo com um visualizador PDF (que está integrado na maioria dos sistemas modernos).",
        },
        {
          q: "Posso editar PDFs após a conversão?",
          a: "PDFs criados a partir de imagens JPG contêm as imagens como conteúdo incorporado. Você pode visualizar e imprimir PDFs em qualquer dispositivo. Para edição avançada (adicionar texto, combinar páginas, etc.), você precisará de software de edição PDF como Adobe Acrobat, mas as próprias imagens são perfeitamente preservadas no formato PDF.",
        },
        {
          q: "Qual é o tamanho máximo de arquivo para conversão JPG para PDF?",
          a: "Você pode converter arquivos JPG até 100MB cada. Para conversão em lote, você pode enviar até 20 arquivos de uma vez, com um limite de tamanho total de 100MB. O PDF resultante manterá a qualidade original da imagem.",
        },
        {
          q: "Quanto tempo leva a conversão JPG para PDF?",
          a: "A conversão leva 1-2 segundos por imagem. A conversão PDF é rápida porque é principalmente uma mudança de formato que preserva todos os dados da imagem. O resultado é um PDF de alta qualidade pronto para compartilhamento, impressão ou uso profissional.",
        },
      ],
    },
    related: {
      title: "Conversores Relacionados",
      converters: [
        { name: "PDF para JPG", url: "/convert/pdf-to-jpg" },
        { name: "PNG para PDF", url: "/convert/png-to-pdf" },
        { name: "HEIC para PDF", url: "/convert/heic-to-pdf" },
        { name: "JPG para PNG", url: "/convert/jpg-to-png" },
        { name: "JPG para WebP", url: "/convert/jpg-to-webp" },
        { name: "HEIF para PDF", url: "/convert/heif-to-pdf" },
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
          q: "A transparência será preservada?",
          a: "Sim. O formato PNG suporta transparência, e nosso conversor preserva qualquer informação de transparência da imagem HEIF original ao converter para PNG.",
        },
        {
          q: "Qual é o tamanho máximo do arquivo?",
          a: "Você pode converter arquivos HEIF de até 100MB cada. Para conversão em lote, você pode processar até 20 arquivos por vez com um limite total de 100MB.",
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

  jpgToTiff: {
    title: "JPG to TIFF Converter - Lossless Quality for Professional Printing & Archival",
    metaDescription:
      "Convert JPG to TIFF for lossless quality, professional printing, and archival purposes. TIFF format preserves maximum image quality with no compression loss. Perfect for photography, printing, and long-term storage. Free batch converter, no registration.",
    metaKeywords:
      "JPG to TIFF, convert JPG to TIFF, lossless image format, professional printing, archival format, batch convert JPG, TIFF converter, free TIFF converter, high quality images",
    hero: {
      title: "JPG to TIFF Converter",
      subtitle:
        "Convert JPG to TIFF for lossless quality and professional printing. TIFF (Tagged Image File Format) preserves maximum image quality with no compression loss - perfect for photography, professional printing, archival purposes, and long-term storage. TIFF is the industry standard for high-quality image preservation.",
      badge1: "Lossless Quality",
      badge2: "Professional Grade",
      badge3: "Print Ready",
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
      download: "Download TIFF",
      downloadAll: "Download All as ZIP",
      convertAnother: "Convert Another File",
    },
    features: {
      title: "Features",
      list: [
        "Lossless quality - no compression artifacts or quality loss",
        "Professional printing standard - industry-accepted format",
        "Archival quality - perfect for long-term storage",
        "Batch processing up to 20 files simultaneously",
        "100% secure with automatic file deletion",
        "Preserves all image data and metadata",
        "Instant download - ready for professional use",
        "No watermarks - professional quality",
      ],
    },
    howItWorks: {
      title: "How It Works",
      step1Title: "Upload JPG Files",
      step1Desc: "Select one or multiple JPG images from your device",
      step2Title: "Auto Convert",
      step2Desc: "Our converter processes your files instantly",
      step3Title: "Download TIFF",
      step3Desc: "Get your high-quality TIFF files immediately",
    },
    about: {
      title: "About JPG to TIFF Conversion",
      whatIsTiff: {
        title: "What is TIFF Format?",
        content:
          "TIFF (Tagged Image File Format) is a lossless image format developed by Aldus (now Adobe) in 1986. TIFF is the industry standard for high-quality image preservation, professional printing, and archival purposes. Unlike JPG which uses lossy compression, TIFF preserves 100% of image data with no quality loss. TIFF supports multiple compression methods (LZW, ZIP, JPEG), color depths (8-bit, 16-bit, 32-bit), color spaces (RGB, CMYK, LAB), and can store multiple images in a single file. TIFF is widely used in photography, publishing, medical imaging, scientific research, and archival systems. Major software like Photoshop, Lightroom, and professional printing services use TIFF as the preferred format for maximum quality preservation.",
      },
      whyConvert: {
        title: "Why Convert JPG to TIFF?",
        content:
          "Convert JPG to TIFF when you need maximum image quality preservation. Key benefits: lossless quality (no compression artifacts), professional printing (industry standard format), archival storage (long-term preservation), maximum detail (preserves all image data), color accuracy (supports wide color spaces), metadata preservation (EXIF, IPTC, XMP), professional workflow (compatible with all professional software), and future-proof format (industry standard). TIFF is essential for: professional photography, printing services, archival systems, scientific research, medical imaging, graphic design, publishing, and any application requiring maximum quality preservation. TIFF ensures your images maintain the highest possible quality for professional use.",
      },
      benefits: {
        title: "Benefits of TIFF Format",
        list: [
          "Lossless Quality - No compression artifacts or quality loss",
          "Professional Standard - Industry-accepted format for printing",
          "Archival Grade - Perfect for long-term storage and preservation",
          "Maximum Detail - Preserves all image data and information",
          "Color Accuracy - Supports wide color spaces and depths",
          "Metadata Support - Preserves EXIF, IPTC, and XMP data",
        ],
      },
    },
    faq: {
      title: "Frequently Asked Questions – JPG to TIFF",
      items: [
        {
          q: "Is it free to convert JPG to TIFF?",
          a: "Yes! Our JPG to TIFF converter is completely free with unlimited conversions. No registration, subscriptions, or hidden fees. Convert as many images as you need for professional printing, archival, or high-quality preservation.",
        },
        {
          q: "Will TIFF files be larger than JPG?",
          a: "Yes, TIFF files are typically larger than JPG because TIFF uses lossless compression (or no compression) while JPG uses lossy compression. However, TIFF preserves 100% of image quality with no artifacts, making it essential for professional printing and archival purposes where quality is paramount.",
        },
        {
          q: "Is TIFF quality better than JPG?",
          a: "Yes! TIFF preserves lossless quality with no compression artifacts, while JPG uses lossy compression that discards some image data. TIFF is the industry standard for professional printing and archival because it maintains maximum image quality. For web use, JPG is more efficient. For professional printing and archival, TIFF is essential.",
        },
        {
          q: "Can TIFF be used for professional printing?",
          a: "Absolutely! TIFF is the industry standard format for professional printing. Print shops, publishers, and professional photographers use TIFF because it preserves maximum quality, supports CMYK color space, and maintains all image data. TIFF is the preferred format for high-quality printing.",
        },
        {
          q: "Is TIFF good for archival storage?",
          a: "Yes! TIFF is perfect for archival storage because it uses lossless compression (or no compression), preserving 100% of image data. Libraries, museums, and archival systems use TIFF for long-term preservation. TIFF ensures your images maintain maximum quality for future generations.",
        },
        {
          q: "Does TIFF support transparency?",
          a: "Yes! TIFF supports alpha channel transparency, making it suitable for images requiring transparent backgrounds. TIFF's transparency support is lossless, preserving perfect transparency quality for professional graphics and design work.",
        },
        {
          q: "Can I convert multiple JPG files to TIFF at once?",
          a: "Yes! Our converter supports batch processing up to 20 files simultaneously. Simply select multiple JPG files, and they'll all be converted to TIFF format instantly. Perfect for photographers and professionals processing large image collections.",
        },
        {
          q: "How long does JPG to TIFF conversion take?",
          a: "Conversion takes 1-3 seconds per image depending on file size. TIFF conversion is fast and efficient, producing high-quality lossless images ready for professional printing, archival, or any application requiring maximum quality preservation.",
        },
      ],
    },
    related: {
      title: "Related Converters",
      converters: [
        { name: "TIFF to JPG", url: "/convert/tiff-to-jpg" },
        { name: "JPG to PNG", url: "/convert/jpg-to-png" },
        { name: "JPG to PDF", url: "/convert/jpg-to-pdf" },
        { name: "PNG to TIFF", url: "/convert/png-to-tiff" },
        { name: "HEIC to TIFF", url: "/convert/heic-to-tiff" },
        { name: "JPG to WebP", url: "/convert/jpg-to-webp" },
      ],
    },
  },
  // JPG to GIF Converter
  // Viewers Page
  viewers: {
    title: "Visualizadores de Arquivos",
    metaTitle: "Visualizadores de Arquivos - Visualização no Navegador | FormiPeek",
    metaDescription: "Visualize arquivos diretamente no seu navegador. Sem download. Suporte para imagens, documentos, PDFs e mais formatos.",
    metaKeywords: "visualizador de arquivos, visualizador online, visualizador PDF, visualizador de imagens, prévia de arquivos",
    subtitle: "Visualize arquivos diretamente no seu navegador. Sem download.",
    cardTitle: "Visualizadores de Arquivos",
    cardDescription: "Visualize arquivos diretamente no navegador sem download. Suporte para imagens, documentos, PDFs e mais formatos.",
    comingSoon: "Em breve...",
  },

  // Compress Page
  compress: {
    title: "Compressão de Arquivos",
    metaTitle: "Compressão de Arquivos - Comprimir Imagens e PDFs Online | FormiPeek",
    metaDescription: "Comprima imagens e PDFs sem perder qualidade. Ferramentas de compressão rápidas e gratuitas. Reduza o tamanho dos arquivos.",
    metaKeywords: "compressão de arquivos, comprimir imagens, comprimir PDF, compressor de imagens, reduzir tamanho arquivo",
    subtitle: "Reduza o tamanho dos arquivos sem perder qualidade. Rápido e gratuito.",
    cardTitle: "Compressão de Arquivos",
    cardDescription: "Comprima imagens e PDFs sem perder qualidade. Reduza o tamanho para uploads mais rápidos. Suporte para JPG, PNG e PDF.",
    comingSoon: "Em breve...",
  },

  // Samples Page
  samples: {
    title: "Arquivos de Exemplo",
    metaTitle: "Arquivos de Exemplo - Baixar Arquivos de Teste | FormiPeek",
    metaDescription: "Baixe arquivos de exemplo em vários formatos para testar nossas ferramentas de conversão. Teste antes de converter.",
    metaKeywords: "arquivos de exemplo, arquivos de teste, exemplos de arquivos, baixar exemplos, teste de conversão",
    subtitle: "Navegue por arquivos de exemplo para todos os formatos suportados. Teste antes de converter.",
    cardTitle: "Arquivos de Exemplo",
    cardDescription: "Baixe arquivos de exemplo em vários formatos para testar nossas ferramentas. Teste com exemplos reais antes de converter.",
    comingSoon: "Em breve...",
  },
};