// Chinese translations
import type { Translations } from "./en";

export const zh: Translations = {
  locale: "zh",
  name: "中文",
  flag: "🇨🇳",

  nav: {
    converters: "转换器",
    viewers: "查看器",
    compress: "压缩",
    samples: "示例",
  },

  home: {
    title: "免费在线文件转换器 - FormiPeek | 即时转换300+格式",
    metaDescription:
      "在300+格式之间即时转换文件。快速、安全且免费的文件转换服务。支持图像、文档、电子书和数据文件。",
    metaKeywords:
      "文件转换器, 在线转换器, 图像转换器, 文档转换器, 电子书转换器, 批量转换, 免费转换器",

    hero: {
      badge: "永久免费 • 无需注册",
      title: "转换文件",
      titleHighlight: "即时",
      subtitle: "以闪电般的速度在{count}种格式之间转换。安全、免费且无需注册。",
      buttonStart: "开始转换",
      buttonView: "查看文件",
      feature1: "100%免费",
      feature2: "无需注册",
      feature3: "安全私密",
      feature4: "批量处理",
    },

    stats: {
      formats: "支持的格式",
      dataProcessed: "已处理数据",
      batchFiles: "批量处理",
    },

    explore: {
      title: "探索我们的工具",
      subtitle: "文件转换、查看、压缩等所需的一切",
      converters: {
        title: "转换器",
        description: "在300+文件格式之间即时转换。图像、文档、电子书和数据文件。",
      },
      viewers: {
        title: "查看器",
        description: "直接在浏览器中预览和查看文件。无需下载。",
      },
      compress: {
        title: "压缩",
        description: "在不损失质量的情况下减小文件大小。JPG、PNG和PDF压缩。",
      },
      samples: {
        title: "示例",
        description: "浏览所有支持格式的示例文件。转换前先测试。",
      },
    },

    howItWorks: {
      title: "我们的转换器如何工作？",
      subtitle: "转换任何文件格式的三个简单步骤",
      step1: {
        title: "上传文件",
        description: "拖放或浏览以选择您的文件。每个文件最多支持100MB。",
      },
      step2: {
        title: "选择格式",
        description: "从300+支持的格式中选择您想要的输出格式。",
      },
      step3: {
        title: "下载",
        description: "点击转换并立即下载您的文件。无需等待，无需排队。",
      },
    },

    popular: {
      title: "热门转换器",
      subtitle: "快速访问我们最常用的转换工具",
      viewAll: "查看所有300+转换器",
      viewAllMobile: "查看所有转换器",
    },

    features: {
      title: "为什么选择FormiPeek？",
      subtitle: "为专业人士和日常用户而构建",
      lightning: {
        title: "闪电般快速",
        description: "使用我们优化的转换引擎在几秒钟内处理文件",
      },
      secure: {
        title: "安全私密",
        description: "企业级安全性。文件在处理后自动删除",
      },
      universal: {
        title: "通用支持",
        description: "在所有文件类型之间转换300+格式组合",
      },
      batch: {
        title: "批量处理",
        description: "使用我们强大的批量引擎一次转换最多20个文件",
      },
      viewer: {
        title: "文件查看器",
        description: "直接在浏览器中预览和查看您的文件",
      },
      quality: {
        title: "专业质量",
        description: "具有可自定义设置的行业标准转换",
      },
    },

    faq: {
      title: "常见问题",
      items: [
        {
          q: "什么是FormiPeek?",
          a: "FormiPeek是一个免费的在线平台，可直接在浏览器中转换、查看和压缩文件。它支持300多种文件格式组合，无需安装。",
        },
        {
          q: "FormiPeek是免费的吗?",
          a: "是的。FormiPeek上的所有文件转换和查看工具完全免费，无需注册或订阅。",
        },
        {
          q: "我的文件在FormiPeek上安全吗?",
          a: "是的。上传到FormiPeek的文件会安全处理，并在转换后自动删除。我们从不存储或共享您的文件。",
        },
        {
          q: "FormiPeek支持哪些文件格式?",
          a: "FormiPeek支持300多种文件格式组合，包括图像、文档、电子书和数据文件，如PDF、JPG、PNG、HEIC、CSV、EPUB等。",
        },
        {
          q: "我需要安装任何软件吗?",
          a: "不需要。FormiPeek完全在线运行，可在任何设备（包括Windows、macOS、Linux、iOS和Android）的Web浏览器中使用。",
        },
        {
          q: "我可以一次转换多个文件吗?",
          a: "可以。FormiPeek支持批量转换，允许一次转换最多20个文件，总大小限制为100MB。",
        },
      ],
    },
  },

  // Converters Page
  converters: {
    title: "文件转换器",
    subtitle: "在300+种文件格式之间即时转换",
    searchPlaceholder: "搜索转换器... (例如：HEIC转PDF)",
    noConvertersFound: "未找到匹配的转换器",
    sections: {
      heic: {
        title: "HEIC转换器",
        description: "转换Apple HEIC格式图像。HEIC（高效图像容器）是Apple自iOS 11以来用于iPhone和iPad的专有图像格式。它在保持高质量图像的同时提供出色的压缩。",
      },
      heif: {
        title: "HEIF转换器",
        description: "转换HEIF格式图像。HEIF（高效图像格式）是HEIC所基于的开放标准容器格式。虽然HEIC是Apple的实现，但HEIF被其他设备和平台使用。",
        difference: "注意：HEIF是容器格式，而HEIC是Apple的特定实现。两种格式兼容，但HEIC文件更常用于Apple设备。",
      },
    },
     heicToPdf: {
      name: "HEIC转PDF",
      description: "即时将Apple HEIC照片转换为PDF格式",
    },
    heicToPng: {
      name: "HEIC转PNG",
      description: "即时将Apple HEIC照片转换为PNG格式",
    },
    heicToJpg: {
      name: "HEIC转JPG",
      description: "即时将Apple HEIC照片转换为JPG格式",
    },
    heicToWebp: {
      name: "HEIC转WebP",
      description: "即时将Apple HEIC照片转换为WebP格式",
    },
    heicToTiff: {
      name: "HEIC转TIFF",
      description: "即时将Apple HEIC照片转换为TIFF格式",
    },
    heicToAvif: {
      name: "HEIC转AVIF",
      description: "即时将Apple HEIC照片转换为AVIF格式",
    },
    heicToGif: {
      name: "HEIC转GIF",
      description: "即时将Apple HEIC照片转换为GIF格式",
    },
    heifToJpg: {
      name: "HEIF转JPG",
      description: "即时将HEIF图像转换为JPG格式",
    },
    heifToPng: {
      name: "HEIF转PNG",
      description: "即时将HEIF图像转换为PNG格式",
    },
    heifToPdf: {
      name: "HEIF转PDF",
      description: "即时将HEIF图像转换为PDF格式",
    },
    heifToWebp: {
      name: "HEIF转WebP",
      description: "即时将HEIF图像转换为WebP格式",
    },
    heifToAvif: {
      name: "HEIF转AVIF",
      description: "即时将HEIF图像转换为AVIF格式",
    },
    heifToTiff: {
      name: "HEIF转TIFF",
      description: "即时将HEIF图像转换为TIFF格式",
    },
  },

  heicToPdf: {
    title: "HEIC转PDF转换器 - 免费在线将Apple照片转换为PDF",
    metaDescription:
      "即时将HEIC图像转换为PDF格式。免费在线HEIC转PDF转换器，支持批量处理。快速、安全且无需注册。适用于iPhone和iPad照片。",
    metaKeywords:
      "HEIC转PDF, 转换HEIC, Apple照片转PDF, iPhone照片转PDF, HEIC转换器, 图像转PDF, 批量转换HEIC, 免费HEIC转换器",

    hero: {
      title: "HEIC转PDF转换器",
      subtitle:
        "立即将您的Apple HEIC照片转换为通用PDF文档。免费、快速且安全的转换，无文件大小限制。",
      badge1: "闪电般快速",
      badge2: "100%安全",
      badge3: "无需注册",
    },

    upload: {
      title: "上传HEIC文件",
      description:
        "将您的HEIC照片拖放到此处或点击浏览。支持批量转换最多20个文件。每个文件最大100MB。",
      buttonSingle: "单个文件",
      buttonBatch: "批量转换",
      chooseFile: "选择文件",
      converting: "转换中...",
      success: "转换成功！",
      download: "下载PDF",
      downloadAll: "全部下载为ZIP",
      convertAnother: "转换另一个文件",
    },

    features: {
      title: "功能",
      list: [
        "高质量HEIC转PDF转换",
        "批量处理最多20个文件",
        "保留图像质量和EXIF数据",
        "无文件大小限制",
        "100%安全私密",
        "适用于iPhone和iPad照片",
        "转换后即时下载",
        "不添加水印",
      ],
    },

    howItWorks: {
      title: "工作原理",
      step1Title: "上传HEIC文件",
      step1Desc: "从您的设备中选择一个或多个HEIC照片",
      step2Title: "自动转换",
      step2Desc: "我们的转换器立即处理您的文件",
      step3Title: "下载PDF",
      step3Desc: "立即获取转换后的PDF文件",
    },

    about: {
      title: "关于HEIC转PDF转换",
      whatIsHeic: {
        title: "什么是HEIC格式？",
        content:
          "HEIC（高效图像容器）是自iOS 11以来Apple设备使用的默认照片格式。它在保持高图像质量的同时提供卓越的压缩，使照片在iPhone或iPad上占用更少的存储空间。",
      },
      whyConvert: {
        title: "为什么将HEIC转换为PDF？",
        content:
          "虽然HEIC很高效，但它并不被普遍支持。转换为PDF可确保您的照片可以在任何设备上查看，通过电子邮件轻松共享，并在文档中专业呈现。PDF也适合打印和归档。",
      },
      benefits: {
        title: "我们转换器的优势",
        list: [
          "通用兼容性 - PDF在所有设备和平台上都能工作",
          "专业呈现 - 非常适合商业文档和作品集",
          "易于共享 - 任何人都可以打开的电子邮件友好格式",
          "打印就绪 - 保持物理打印的质量",
          "安全存储 - 用于归档的行业标准格式",
          "无质量损失 - 保留原始图像分辨率",
        ],
      },
    },

    faq: {
      title: "常见问题 – HEIC转PDF",
      items: [
        {
          q: "将HEIC转换为PDF是否免费？",
          a: "是的！我们的HEIC转PDF转换器完全免费使用。您可以在不注册、订阅或隐藏费用的情况下将HEIC图像转换为PDF。",
        },
        {
          q: "我可以将iPhone的HEIC照片转换为PDF吗？",
          a: "是的。您可以将iPhone、iPad或任何Apple设备拍摄的HEIC照片直接转换为PDF。只需从设备上传HEIC文件，转换就会在浏览器中即时进行。",
        },
        {
          q: "将HEIC转换为PDF时会保留质量吗？",
          a: "是的。我们在转换过程中保留原始图像质量。您的HEIC照片将转换为高分辨率PDF文件，无压缩或质量损失。",
        },
        {
          q: "HEIC转PDF转换的最大文件大小是多少？",
          a: "您可以转换每个最大100MB的HEIC文件。对于批量转换，您可以一次上传最多20个文件，总大小限制为100MB。",
        },
      ],
    },

    related: {
      title: "相关转换器",
      converters: [
        { name: "HEIC转JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC转PNG", url: "/convert/heic-to-png" },
        { name: "JPG转PDF", url: "/convert/jpg-to-pdf" },
        { name: "PNG转PDF", url: "/convert/png-to-pdf" },
        { name: "WEBP转PDF", url: "/convert/webp-to-pdf" },
        { name: "HEIC转WEBP", url: "/convert/heic-to-webp" },
      ],
    },

    footer: {
      tagline: "面向专业人士和日常用户的终极文件转换和查看平台。",
      security:
        "100%安全：我们的服务器上不存储任何文件。所有转换都会处理，文件在处理后立即自动删除。",
      copyright: "© 2025 FormiPeek",
      madeWith: "使用",
      byDevelopers: "由关心质量的开发人员构建。",
    },
  },

  heicToPng: {
    title: "HEIC转PNG转换器 - 免费在线将Apple照片转换为PNG",
    metaDescription:
      "即时将HEIC图像转换为PNG格式。免费在线HEIC转PNG转换器，支持批量处理。快速、安全且无需注册。适用于iPhone和iPad照片。",
    metaKeywords:
      "HEIC转PNG, 转换HEIC, Apple照片转PNG, iPhone照片转PNG, HEIC转换器, 图像转PNG, 批量转换HEIC, 免费HEIC转换器",

    hero: {
      title: "HEIC转PNG转换器",
      subtitle:
        "即时将您的Apple HEIC照片转换为通用PNG图像。免费、快速且安全的转换，无文件大小限制。",
      badge1: "超快",
      badge2: "100%安全",
      badge3: "无需注册",
    },

    upload: {
      title: "上传HEIC文件",
      description:
        "将您的HEIC照片拖放到此处或点击浏览。支持批量转换，最多20个文件。每个文件最大100MB。",
      buttonSingle: "单个文件",
      buttonBatch: "批量转换",
      chooseFile: "选择文件",
      converting: "转换中...",
      success: "转换成功！",
      download: "下载PNG",
      downloadAll: "全部下载为ZIP",
      convertAnother: "转换另一个文件",
    },

    features: {
      title: "功能",
      list: [
        "高质量HEIC转PNG转换",
        "批量处理最多20个文件",
        "保持图像质量和透明度",
        "无文件大小限制",
        "100%安全私密",
        "适用于iPhone和iPad照片",
        "转换后即时下载",
        "不添加水印",
      ],
    },

    howItWorks: {
      title: "工作原理",
      step1Title: "上传HEIC文件",
      step1Desc: "从设备中选择一个或多个HEIC照片",
      step2Title: "自动转换",
      step2Desc: "我们的转换器即时处理您的文件",
      step3Title: "下载PNG",
      step3Desc: "立即获取转换后的PNG文件",
    },

    about: {
      title: "关于HEIC转PNG转换",
      whatIsHeic: {
        title: "什么是HEIC格式？",
        content:
          "HEIC（高效图像容器）是自iOS 11以来Apple设备使用的默认照片格式。它在保持高图像质量的同时提供卓越的压缩，使照片在iPhone或iPad上占用更少的存储空间。",
      },
      whyConvert: {
        title: "为什么将HEIC转换为PNG？",
        content:
          "虽然HEIC很高效，但它并不被普遍支持。转换为PNG可确保您的照片可以在任何设备上查看，轻松通过电子邮件分享，并在网页设计和图形中使用。PNG格式支持透明度和无损压缩，非常适合专业使用。",
      },
      benefits: {
        title: "我们转换器的优势",
        list: [
          "通用兼容性 - PNG在所有设备和平台上都能工作",
          "透明度支持 - 非常适合图形和网页设计",
          "无损质量 - 无压缩伪影或质量损失",
          "易于分享 - 广泛支持的格式，任何人都可以打开",
          "网页就绪 - 非常适合网站、社交媒体和在线使用",
          "无质量损失 - 保持原始图像分辨率",
        ],
      },
    },

    faq: {
      title: "常见问题 – HEIC转PNG",
      items: [
        {
          q: "将HEIC转换为PNG是否免费？",
          a: "是的！我们的HEIC转PNG转换器完全免费。您可以无需注册、订阅或隐藏费用即可将HEIC图像转换为PNG。",
        },
        {
          q: "将HEIC转换为PNG时质量会被保留吗？",
          a: "是的。我们在转换过程中保持原始图像质量。您的HEIC照片转换为高分辨率PNG文件，无压缩或质量损失。",
        },
        {
          q: "我可以将iPhone的HEIC照片转换为PNG吗？",
          a: "是的。您可以将iPhone、iPad或任何Apple设备上拍摄的HEIC照片直接转换为PNG。只需上传HEIC文件并在浏览器中即时转换即可。",
        },
        {
          q: "我需要安装软件才能将HEIC转换为PNG吗？",
          a: "无需安装。HEIC转PNG转换器在Windows、macOS、Linux、iOS和Android的任何设备上的网络浏览器中完全在线工作。",
        },
      ],
    },

    related: {
      title: "相关转换器",
      converters: [
        { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC转JPG", url: "/convert/heic-to-jpg" },
        { name: "PNG转PDF", url: "/convert/png-to-pdf" },
        { name: "JPG转PNG", url: "/convert/jpg-to-png" },
        { name: "WEBP转PNG", url: "/convert/webp-to-png" },
        { name: "HEIC转WEBP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to JPG Converter
  heicToJpg: {
    title: "HEIC转JPG转换器 - 免费在线将Apple照片转换为JPG",
    metaDescription:
    "即时将HEIC图像转换为JPG格式。免费在线HEIC转JPG转换器，支持批量处理。快速、安全、无需注册。适用于iPhone和iPad照片。",
    metaKeywords:
    "HEIC转JPG, 转换HEIC, Apple照片转JPG, iPhone照片转JPG, HEIC转换器, 图像转JPG, 批量转换HEIC, 免费HEIC转换器",

    hero: {
    title: "HEIC转JPG转换器",
    subtitle:
      "即时将您的Apple HEIC照片转换为通用JPG图像。免费、快速、安全的转换，无文件大小限制。",
    badge1: "超快速",
    badge2: "100%安全",
    badge3: "无需注册",
    },

    upload: {
    title: "上传HEIC文件",
    description:
      "将您的HEIC照片拖放到此处或点击浏览。支持批量转换最多20个文件。每个文件最大100MB。",
    buttonSingle: "单个文件",
    buttonBatch: "批量转换",
    chooseFile: "选择文件",
    converting: "转换中...",
    success: "转换成功！",
    download: "下载JPG",
    downloadAll: "全部下载为ZIP",
    convertAnother: "转换另一个文件",
    },

    features: {
    title: "功能",
    list: [
      "高质量HEIC转JPG转换",
      "批量处理最多20个文件",
      "保持图像质量",
      "无文件大小限制",
      "100%安全和私密",
      "适用于iPhone和iPad照片",
      "转换后即时下载",
      "无水印",
    ],
    },

    howItWorks: {
    title: "工作原理",
    step1Title: "上传HEIC文件",
    step1Desc: "从您的设备选择一个或多个HEIC照片",
    step2Title: "自动转换",
    step2Desc: "我们的转换器即时处理您的文件",
    step3Title: "下载JPG",
    step3Desc: "立即获取转换后的JPG文件",
    },

    about: {
    title: "关于HEIC转JPG转换",
    whatIsHeic: {
      title: "什么是HEIC格式？",
      content:
        "HEIC（高效图像容器）是自iOS 11以来Apple设备使用的默认照片格式。它在保持高图像质量的同时提供卓越的压缩，使照片在您的iPhone或iPad上占用更少的存储空间。",
    },
    whyConvert: {
      title: "为什么将HEIC转换为JPG？",
      content:
        "虽然HEIC很高效，但它并不被普遍支持。转换为JPG确保您的照片可以在任何设备上查看，轻松通过电子邮件分享，并用于网页设计和图形。JPG格式是使用最广泛的图像格式，非常适合分享和兼容性。",
    },
    benefits: {
      title: "我们转换器的优势",
      list: [
        "通用兼容性 - JPG在所有设备和平台上工作",
        "更小的文件大小 - 高效压缩，更快分享",
        "广泛支持 - 全球使用最广泛的图像格式",
        "易于分享 - 与所有电子邮件客户端和社交媒体兼容",
        "网页就绪 - 适合网站、社交媒体和在线使用",
        "高质量 - 保持原始图像分辨率",
      ],
    },
    },

    faq: {
      title: "常见问题 – HEIC转JPG",
      items: [
        {
          q: "将HEIC转换为JPG是免费的吗？",
          a: "是的！我们的HEIC转JPG转换器完全免费，无隐藏费用。您可以无限制地转换文件，无需注册或订阅。",
        },
        {
          q: "我的数据安全吗？",
          a: "绝对安全。所有转换都在我们的服务器上通过SSL加密安全进行。您的文件在转换后立即自动删除。我们从不存储、分享或访问您的文件。",
        },
        {
          q: "最大文件大小是多少？",
          a: "您可以转换每个最大100MB的HEIC文件。对于批量转换，您可以一次处理最多20个文件，总限制为100MB。",
        },
        {
          q: "你们支持批量转换吗？",
          a: "是的！您可以同时上传和转换最多20个HEIC文件。所有转换后的JPG将作为单独文件或单个ZIP存档提供下载。",
        },
        {
          q: "质量会被保留吗？",
          a: "是的，我们在转换过程中保持高图像质量。您的HEIC照片将以最小的质量损失转换为高分辨率JPG。",
        },
        {
          q: "我可以直接从iPhone转换HEIC吗？",
          a: "是的！我们的转换器与在iPhone、iPad或任何Apple设备上拍摄的照片完美配合。只需从您的照片库上传HEIC文件即可。",
        },
        {
          q: "我需要安装任何软件吗？",
          a: "无需安装。我们的在线转换器可在任何设备（Windows、Mac、Linux、iOS或Android）的网页浏览器中直接运行。",
        },
        {
          q: "转换需要多长时间？",
          a: "转换几乎是即时的！大多数HEIC文件在几秒钟内转换为JPG，具体取决于文件大小和您的互联网连接。",
        },
      ],
    },

    related: {
    title: "相关转换器",
    converters: [
      { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
      { name: "HEIC转PNG", url: "/convert/heic-to-png" },
      { name: "JPG转PDF", url: "/convert/jpg-to-pdf" },
      { name: "PNG转JPG", url: "/convert/png-to-jpg" },
      { name: "WEBP转JPG", url: "/convert/webp-to-jpg" },
      { name: "HEIC转WEBP", url: "/convert/heic-to-webp" },
    ],
    },
  },

  // HEIC to WebP Converter
  heicToWebp: {
    title: "HEIC转WebP转换器 - 免费在线将Apple照片转换为WebP",
    metaDescription:
      "即时将HEIC图像转换为WebP格式。免费在线HEIC转WebP转换器，支持批量处理。快速、安全且无需注册。适用于iPhone和iPad照片。",
    metaKeywords:
      "HEIC转WebP, 转换HEIC, Apple照片转WebP, iPhone照片转WebP, HEIC转换器, 图像转WebP, 批量转换HEIC, 免费HEIC转换器",

    hero: {
      title: "HEIC转WebP转换器",
      subtitle:
        "即时将您的Apple HEIC照片转换为现代WebP图像。免费、快速且安全的转换，无文件大小限制。",
      badge1: "超快",
      badge2: "100%安全",
      badge3: "无需注册",
    },

    upload: {
      title: "上传HEIC文件",
      description:
        "将您的HEIC照片拖放到此处或点击浏览。支持批量转换，最多20个文件。每个文件最大100MB。",
      buttonSingle: "单个文件",
      buttonBatch: "批量转换",
      chooseFile: "选择文件",
      converting: "转换中...",
      success: "转换成功！",
      download: "下载WebP",
      downloadAll: "全部下载为ZIP",
      convertAnother: "转换另一个文件",
    },

    features: {
      title: "功能",
      list: [
        "高质量HEIC转WebP转换",
        "批量处理最多20个文件",
        "卓越压缩并保持质量",
        "无文件大小限制",
        "100%安全私密",
        "适用于iPhone和iPad照片",
        "转换后即时下载",
        "不添加水印",
      ],
    },

    howItWorks: {
      title: "工作原理",
      step1Title: "上传HEIC文件",
      step1Desc: "从设备中选择一个或多个HEIC照片",
      step2Title: "自动转换",
      step2Desc: "我们的转换器即时处理您的文件",
      step3Title: "下载WebP",
      step3Desc: "立即获取转换后的WebP文件",
    },

    about: {
      title: "关于HEIC转WebP转换",
      whatIsHeic: {
        title: "什么是HEIC格式？",
        content:
          "HEIC（高效图像容器）是自iOS 11以来Apple设备使用的默认照片格式。它在保持高图像质量的同时提供卓越的压缩，使照片在iPhone或iPad上占用更少的存储空间。",
      },
      whyConvert: {
        title: "为什么将HEIC转换为WebP？",
        content:
          "WebP是Google开发的现代图像格式，与PNG和JPG相比提供卓越的压缩，同时保持出色的质量。将HEIC转换为WebP可获得更小的文件大小，非常适合网页使用、更快的页面加载速度和更好的SEO性能。WebP受所有现代浏览器支持，非常适合网站、渐进式Web应用程序和在线分享。",
      },
      benefits: {
        title: "我们转换器的优势",
        list: [
          "卓越压缩 - 相同质量下比PNG/JPG小25-35%",
          "网页优化 - 非常适合网站、PWA和在线平台",
          "现代格式 - 所有主要浏览器和平台都支持",
          "加载更快 - 更小的文件意味着更快的页面加载时间",
          "SEO友好 - 改善网站性能指标",
          "质量保持 - 高效压缩的出色视觉效果",
        ],
      },
    },

    faq: {
      title: "常见问题 – HEIC转WebP",
      items: [
        {
          q: "将HEIC转换为WebP是否免费？",
          a: "是的！我们的HEIC转WebP转换器完全免费。您可以无需注册、订阅或隐藏费用即可将HEIC图像转换为WebP。",
        },
        {
          q: "将HEIC转换为WebP时质量会被保留吗？",
          a: "是的。WebP格式提供卓越的图像质量和压缩。您的HEIC照片转换为高质量WebP文件，质量损失最小。",
        },
        {
          q: "我可以将iPhone的HEIC照片转换为WebP吗？",
          a: "是的。您可以将iPhone、iPad或任何Apple设备上拍摄的HEIC照片直接转换为WebP。只需上传HEIC文件并在线即时转换即可。",
        },
        {
          q: "我需要安装软件才能将HEIC转换为WebP吗？",
          a: "无需安装。HEIC转WebP转换器在Windows、macOS、Linux、iOS和Android的任何设备上的网络浏览器中完全在线工作。",
        },
      ],
    },

    related: {
      title: "相关转换器",
      converters: [
        { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC转PNG", url: "/convert/heic-to-png" },
        { name: "HEIC转JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC转WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to AVIF Converter
  heicToAvif: {
    title: "HEIC转AVIF转换器 - 免费在线将Apple照片转换为AVIF",
    metaDescription:
      "即时将HEIC图像转换为AVIF格式。免费在线HEIC转AVIF转换器，支持批量处理。快速、安全且无需注册。适用于iPhone和iPad照片。",
    metaKeywords:
      "HEIC转AVIF, 转换HEIC, Apple照片转AVIF, iPhone照片转AVIF, HEIC转换器, 图像转AVIF, HEIC批量转换, 免费HEIC转换器",

    hero: {
      title: "HEIC转AVIF转换器",
      subtitle:
        "将您的Apple HEIC照片即时转换为下一代AVIF图像。免费、快速、安全的转换，无文件大小限制。",
      badge1: "超快速度",
      badge2: "100%安全",
      badge3: "无需注册",
    },

    upload: {
      title: "上传HEIC文件",
      description:
        "将HEIC照片拖放到此处或点击浏览。支持最多20个文件的批量转换。每个文件最大100MB。",
      buttonSingle: "单个文件",
      buttonBatch: "批量转换",
      chooseFile: "选择文件",
      converting: "转换中...",
      success: "转换成功！",
      download: "下载AVIF",
      downloadAll: "全部下载为ZIP",
      convertAnother: "转换另一个文件",
    },

    features: {
      title: "功能",
      list: [
        "高质量HEIC转AVIF转换",
        "最多20个文件的批量处理",
        "一流的压缩，保持质量",
        "无文件大小限制",
        "100%安全私密",
        "适用于iPhone和iPad照片",
        "转换后即时下载",
        "不添加水印",
      ],
    },

    howItWorks: {
      title: "工作原理",
      step1Title: "上传HEIC文件",
      step1Desc: "从设备中选择一个或多个HEIC照片",
      step2Title: "自动转换",
      step2Desc: "我们的转换器即时处理您的文件",
      step3Title: "下载AVIF",
      step3Desc: "立即获取转换后的AVIF文件",
    },

    about: {
      title: "关于HEIC转AVIF转换",
      whatIsHeic: {
        title: "什么是HEIC格式？",
        content:
          "HEIC（高效图像容器）是自iOS 11以来Apple设备使用的默认照片格式。它在保持高图像质量的同时提供卓越的压缩，使照片在iPhone或iPad上占用更少的存储空间。",
      },
      whyConvert: {
        title: "为什么将HEIC转换为AVIF？",
        content:
          "AVIF（AV1图像文件格式）是由开放媒体联盟开发的最新图像格式，在保持卓越质量的同时提供比WebP和JPEG更好的压缩。将HEIC转换为AVIF可实现网络使用的最小文件大小、显著更快的页面加载速度和出色的SEO性能。AVIF受到现代浏览器的支持，非常适合前沿网站、渐进式Web应用程序和高性能在线平台。",
      },
      benefits: {
        title: "我们转换器的优势",
        list: [
          "最佳压缩 - 在相同或更好质量下，文件比JPEG小50%",
          "下一代格式 - 行业支持的Web图像未来",
          "卓越质量 - 即使在极高压缩下也能保持出色的视觉质量",
          "更快加载 - 更小的文件意味着显著更快的页面加载时间",
          "SEO优化 - 改善Core Web Vitals和搜索排名",
          "质量保持 - 最大压缩效率下的出色视觉质量",
        ],
      },
    },

    faq: {
      title: "常见问题 – HEIC转AVIF",
      items: [
        {
          q: "将HEIC转换为AVIF是否免费？",
          a: "是的！我们的HEIC转AVIF转换器完全免费。您可以在不注册、订阅或隐藏费用的情况下将HEIC图像转换为AVIF。",
        },
        {
          q: "将HEIC转换为AVIF时质量会保持吗？",
          a: "是的。AVIF格式通过高级压缩提供出色的图像质量。您的HEIC照片被转换为高质量的AVIF文件，质量损失最小，文件大小显著减小。",
        },
        {
          q: "我可以将iPhone的HEIC照片转换为AVIF吗？",
          a: "是的。您可以将iPhone、iPad或任何Apple设备上拍摄的HEIC照片直接转换为AVIF。",
        },
        {
          q: "我需要安装软件来将HEIC转换为AVIF吗？",
          a: "无需安装。转换器可在任何设备的Web浏览器中完全在线工作。",
        },
      ],
    },

    related: {
      title: "相关转换器",
      converters: [
        { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC转PNG", url: "/convert/heic-to-png" },
        { name: "HEIC转JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC转WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to TIFF Converter
  heicToTiff: {
    title: "HEIC转AVIF转换器 - 免费在线将Apple照片转换为AVIF",
    metaDescription:
      "即时将HEIC图像转换为AVIF格式。免费在线HEIC转AVIF转换器，支持批量处理。快速、安全且无需注册。适用于iPhone和iPad照片。",
    metaKeywords:
      "HEIC转AVIF, 转换HEIC, Apple照片转AVIF, iPhone照片转AVIF, HEIC转换器, 图像转AVIF, HEIC批量转换, 免费HEIC转换器",

    hero: {
      title: "HEIC转AVIF转换器",
      subtitle:
        "将您的Apple HEIC照片即时转换为下一代AVIF图像。免费、快速、安全的转换，无文件大小限制。",
      badge1: "超快速度",
      badge2: "100%安全",
      badge3: "无需注册",
    },

    upload: {
      title: "上传HEIC文件",
      description:
        "将HEIC照片拖放到此处或点击浏览。支持最多20个文件的批量转换。每个文件最大100MB。",
      buttonSingle: "单个文件",
      buttonBatch: "批量转换",
      chooseFile: "选择文件",
      converting: "转换中...",
      success: "转换成功！",
      download: "下载AVIF",
      downloadAll: "全部下载为ZIP",
      convertAnother: "转换另一个文件",
    },

    features: {
      title: "功能",
      list: [
        "高质量HEIC转AVIF转换",
        "最多20个文件的批量处理",
        "一流的压缩，保持质量",
        "无文件大小限制",
        "100%安全私密",
        "适用于iPhone和iPad照片",
        "转换后即时下载",
        "不添加水印",
      ],
    },

    howItWorks: {
      title: "工作原理",
      step1Title: "上传HEIC文件",
      step1Desc: "从设备中选择一个或多个HEIC照片",
      step2Title: "自动转换",
      step2Desc: "我们的转换器即时处理您的文件",
      step3Title: "下载AVIF",
      step3Desc: "立即获取转换后的AVIF文件",
    },

    about: {
      title: "关于HEIC转AVIF转换",
      whatIsHeic: {
        title: "什么是HEIC格式？",
        content:
          "HEIC（高效图像容器）是自iOS 11以来Apple设备使用的默认照片格式。它在保持高图像质量的同时提供卓越的压缩，使照片在iPhone或iPad上占用更少的存储空间。",
      },
      whyConvert: {
        title: "为什么将HEIC转换为AVIF？",
        content:
          "TIFF（AV1图像文件格式）是由开放媒体联盟开发的最新图像格式，在保持卓越质量的同时提供比WebP和JPEG更好的压缩。将HEIC转换为AVIF可实现网络使用的最小文件大小、显著更快的页面加载速度和出色的SEO性能。AVIF受到现代浏览器的支持，非常适合前沿网站、渐进式Web应用程序和高性能在线平台。",
      },
      benefits: {
        title: "我们转换器的优势",
        list: [
          "最佳压缩 - 在相同或更好质量下，文件比JPEG小50%",
          "下一代格式 - 行业支持的Web图像未来",
          "卓越质量 - 即使在极高压缩下也能保持出色的视觉质量",
          "更快加载 - 更小的文件意味着显著更快的页面加载时间",
          "SEO优化 - 改善Core Web Vitals和搜索排名",
          "质量保持 - 最大压缩效率下的出色视觉质量",
        ],
      },
    },

    faq: {
      title: "常见问题 – HEIC转AVIF",
      items: [
        {
          q: "将HEIC转换为AVIF是否免费？",
          a: "是的！我们的HEIC转AVIF转换器完全免费。您可以在不注册、订阅或隐藏费用的情况下将HEIC图像转换为AVIF。",
        },
        {
          q: "将HEIC转换为AVIF时质量会保持吗？",
          a: "是的。AVIF格式通过高级压缩提供出色的图像质量。您的HEIC照片被转换为高质量的AVIF文件，质量损失最小，文件大小显著减小。",
        },
        {
          q: "我可以将iPhone的HEIC照片转换为AVIF吗？",
          a: "是的。您可以将iPhone、iPad或任何Apple设备上拍摄的HEIC照片直接转换为AVIF。",
        },
        {
          q: "我需要安装软件来将HEIC转换为AVIF吗？",
          a: "无需安装。转换器可在任何设备的Web浏览器中完全在线工作。",
        },
      ],
    },

    related: {
      title: "相关转换器",
      converters: [
        { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC转PNG", url: "/convert/heic-to-png" },
        { name: "HEIC转JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC转WebP", url: "/convert/heic-to-webp" },
      ],
    },
  },

  // HEIC to GIF Converter
  heicToGif: {
    title: "HEIC转GIF转换器 - 免费在线将Apple照片转换为GIF",
    metaDescription:
      "即时将HEIC图像转换为GIF格式。免费在线HEIC转GIF转换器，支持批量处理。快速、安全且无需注册。适用于iPhone和iPad照片。",
    metaKeywords:
      "HEIC转GIF, 转换HEIC, Apple照片转GIF, iPhone照片转GIF, HEIC转换器, 图像转GIF, 批量转换HEIC, 免费HEIC转换器",
    hero: {
      title: "HEIC转GIF转换器",
      subtitle:
        "立即将您的Apple HEIC照片转换为动画或静态GIF图像。免费、快速且安全的转换，无文件大小限制。",
      badge1: "闪电般快速",
      badge2: "100%安全",
      badge3: "无需注册",
    },
    upload: {
      title: "上传HEIC文件",
      description:
        "将您的HEIC照片拖放到此处或点击浏览。支持批量转换最多20个文件。每个文件最大100MB。",
      buttonSingle: "单个文件",
      buttonBatch: "批量转换",
      chooseFile: "选择文件",
      converting: "转换中...",
      success: "转换成功！",
      download: "下载GIF",
      downloadAll: "全部下载为ZIP",
      convertAnother: "转换另一个文件",
    },
    features: {
      title: "功能",
      list: [
        "高质量HEIC转GIF转换",
        "批量处理最多20个文件",
        "保留图像质量",
        "无文件大小限制",
        "100%安全私密",
        "适用于iPhone和iPad照片",
        "转换后即时下载",
        "不添加水印",
      ],
    },
    howItWorks: {
      title: "使用方法",
      step1Title: "上传HEIC文件",
      step1Desc: "从您的设备选择一个或多个HEIC照片",
      step2Title: "自动转换",
      step2Desc: "我们的转换器即时处理您的文件",
      step3Title: "下载GIF",
      step3Desc: "立即获取转换后的GIF文件",
    },
    about: {
      title: "关于HEIC转GIF转换",
      whatIsHeic: {
        title: "什么是HEIC格式？",
        content:
          "HEIC（高效图像容器）是自iOS 11以来Apple设备使用的默认照片格式。它在保持高质量图像的同时提供卓越的压缩，使照片在iPhone或iPad上占用更少的存储空间。",
      },
      whyConvert: {
        title: "为什么将HEIC转换为GIF？",
        content:
          "GIF格式非常适合网页使用、社交媒体分享和创建动画图像。将HEIC转换为GIF确保您的照片可以轻松在线分享、嵌入网站并在任何平台上查看。GIF被广泛支持，非常适合创建简单的动画或具有广泛兼容性的静态图像。",
      },
      benefits: {
        title: "我们转换器的优势",
        list: [
          "网页优化 - GIF格式非常适合网页和社交媒体",
          "通用兼容性 - GIF在任何地方都能工作",
          "小文件大小 - 高效压缩，快速加载",
          "易于分享 - 在任何平台或社交网络上分享GIF",
          "动画支持 - 从多个图像创建动画GIF",
          "无质量损失 - 在GIF格式中保持视觉质量",
        ],
      },
    },
    faq: {
      title: "常见问题 – HEIC转GIF",
      items: [
        {
          q: "将HEIC转换为GIF是免费的吗？",
          a: "是的！我们的HEIC转GIF转换器完全免费使用。您可以无需注册、订阅或隐藏费用即可将HEIC图像转换为GIF。",
        },
        {
          q: "我可以将iPhone的HEIC照片转换为GIF吗？",
          a: "是的。您可以将iPhone、iPad或任何Apple设备上拍摄的HEIC照片直接转换为GIF。只需从设备上传HEIC文件，转换即可在浏览器中即时工作。",
        },
        {
          q: "将HEIC转换为GIF时质量会保持吗？",
          a: "是的。我们在转换过程中保持图像质量。您的HEIC照片会被转换为高质量的GIF文件，具有优化的压缩设置，以平衡质量和文件大小。",
        },
        {
          q: "HEIC转GIF转换的最大文件大小是多少？",
          a: "您可以转换每个最大100MB的HEIC文件。对于批量转换，您可以一次上传最多20个文件，总大小限制为100MB。",
        },
        {
          q: "为什么我应该将HEIC转换为GIF而不是其他格式？",
          a: "GIF格式非常适合网页使用、社交媒体和创建可分享的图像。它被广泛支持，加载速度快，非常适合嵌入网站或在线分享。",
        },
        {
          q: "我需要安装任何软件来将HEIC转换为GIF吗？",
          a: "无需安装。HEIC转GIF转换器在Windows、macOS、Linux、iOS和Android上的网页浏览器中完全在线工作。",
        },
        {
          q: "我可以一次将多个HEIC文件转换为GIF吗？",
          a: "是的！我们的转换器支持批量处理。您可以同时上传和转换最多20个HEIC文件。所有转换后的GIF文件将作为单独文件或单个ZIP存档提供下载。",
        },
        {
          q: "我可以从HEIC文件创建动画GIF吗？",
          a: "我们的转换器从单个HEIC图像创建静态GIF。对于动画GIF，您需要将多个图像组合成动画，这需要额外的处理。",
        },
      ],
    },
    related: {
      title: "相关转换器",
      converters: [
        { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC转PNG", url: "/convert/heic-to-png" },
        { name: "HEIC转JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC转WebP", url: "/convert/heic-to-webp" },
        { name: "PNG转GIF", url: "/convert/png-to-gif" },
        { name: "JPG转GIF", url: "/convert/jpg-to-gif" },
      ],
    },
  },

  // HEIF to JPG Converter
  heifToJpg: {
    title: "HEIF转JPG转换器 - 免费在线将HEIF图像转换为JPG",
    metaDescription:
      "即时将HEIF图像转换为JPG格式。免费在线HEIF转JPG转换器，支持批量处理。快速、安全且无需注册。适用于所有设备的HEIF照片。",
    metaKeywords:
      "HEIF转JPG, 转换HEIF, HEIF图像转JPG, HEIF转换器, 图像转JPG, 批量转换HEIF, 免费HEIF转换器, HEIF vs HEIC",
    hero: {
      title: "HEIF转JPG转换器",
      subtitle:
        "即时将您的HEIF图像转换为通用JPG格式。免费、快速、安全的转换，无文件大小限制。适合任何设备的HEIF照片。",
      badge1: "超快速",
      badge2: "100%安全",
      badge3: "无需注册",
    },
    upload: {
      title: "上传HEIF文件",
      description:
        "将您的HEIF图像拖放到此处或点击浏览。支持批量转换最多20个文件。每个文件最大100MB。",
      buttonSingle: "单个文件",
      buttonBatch: "批量转换",
      chooseFile: "选择文件",
      converting: "转换中...",
      success: "转换成功！",
      download: "下载JPG",
      downloadAll: "全部下载为ZIP",
      convertAnother: "转换另一个文件",
    },
    features: {
      title: "功能",
      list: [
        "高质量HEIF转JPG转换",
        "批量处理最多20个文件",
        "保持图像质量",
        "无文件大小限制",
        "100%安全和私密",
        "适用于所有设备的HEIF照片",
        "转换后即时下载",
        "无水印",
      ],
    },
    howItWorks: {
      title: "工作原理",
      step1Title: "上传HEIF文件",
      step1Desc: "从您的设备选择一个或多个HEIF图像",
      step2Title: "自动转换",
      step2Desc: "我们的转换器即时处理您的文件",
      step3Title: "下载JPG",
      step3Desc: "立即获取转换后的JPG文件",
    },
    about: {
      title: "关于HEIF转JPG转换",
      whatIsHeif: {
        title: "什么是HEIF格式？",
        content:
          "HEIF（高效图像格式）是一种使用HEVC（H.265）压缩的现代图像容器格式。虽然与HEIC相似，但HEIF是标准格式名称，而HEIC具体指Apple的实现。HEIF与JPEG相比提供卓越的压缩，同时保持高图像质量，使其成为高效存储照片的理想选择。",
      },
      whyConvert: {
        title: "为什么将HEIF转换为JPG？",
        content:
          "虽然HEIF高效且现代，但它并不在所有设备和平台上得到普遍支持。将HEIF转换为JPG确保您的图像可以在任何设备上查看，轻松通过电子邮件分享，上传到网站，并在任何应用程序中使用。JPG格式是全球使用最广泛的图像格式，非常适合最大兼容性和分享。",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - 有什么区别？",
        content:
          "HEIF（高效图像格式）是容器格式标准，而HEIC（高效图像容器）是Apple对HEIF的具体实现。实际上，它们非常相似 - 都使用相同的压缩技术并提供相同的优势。Apple设备将照片保存为HEIC文件，这些文件实际上符合HEIF标准。我们的转换器无缝处理两种格式，因此您可以将任何HEIF/HEIC图像转换为JPG格式。",
      },
      benefits: {
        title: "我们转换器的优势",
        list: [
          "通用兼容性 - JPG在所有设备和平台上工作",
          "更小的文件大小 - 高效压缩，更快分享",
          "广泛支持 - 全球使用最广泛的图像格式",
          "易于分享 - 与所有电子邮件客户端和社交媒体兼容",
          "网页就绪 - 适合网站、社交媒体和在线使用",
          "高质量 - 保持原始图像分辨率",
        ],
      },
    },
    faq: {
      title: "常见问题 – HEIF转JPG",
      items: [
        {
          q: "将HEIF转换为JPG是免费的吗？",
          a: "是的！我们的HEIF转JPG转换器完全免费，无隐藏费用。您可以无限制地转换文件，无需注册或订阅。",
        },
        {
          q: "HEIF和HEIC有什么区别？",
          a: "HEIF（高效图像格式）是标准格式名称，而HEIC（高效图像容器）是Apple的具体实现。它们使用相同的压缩技术，功能上非常相似。我们的转换器无缝处理两种格式。",
        },
        {
          q: "我的数据安全吗？",
          a: "绝对安全。所有转换都在我们的服务器上通过SSL加密安全进行。您的文件在转换后立即自动删除。我们从不存储、分享或访问您的文件。",
        },
        {
          q: "最大文件大小是多少？",
          a: "您可以转换每个最大100MB的HEIF文件。对于批量转换，您可以一次处理最多20个文件，总限制为100MB。",
        },
        {
          q: "你们支持批量转换吗？",
          a: "是的！您可以同时上传和转换最多20个HEIF文件。所有转换后的JPG将作为单独文件或单个ZIP存档提供下载。",
        },
        {
          q: "质量会被保留吗？",
          a: "是的，我们在转换过程中保持高图像质量。您的HEIF图像将以最小的质量损失转换为高分辨率JPG。",
        },
        {
          q: "我可以从任何设备转换HEIF吗？",
          a: "是的！我们的转换器适用于支持HEIF格式的任何设备或相机的HEIF图像，不仅仅是Apple设备。只需上传您的HEIF文件并将它们转换为JPG。",
        },
        {
          q: "我需要安装任何软件吗？",
          a: "无需安装。我们的在线转换器直接在您的网页浏览器中工作，适用于任何设备 - Windows、Mac、Linux、iOS或Android。",
        },
        {
          q: "转换需要多长时间？",
          a: "转换几乎是即时的！大多数HEIF文件只需几秒钟即可转换为JPG，具体取决于文件大小和您的互联网连接。",
        },
      ],
    },
    related: {
      title: "相关转换器",
      converters: [
        { name: "HEIC转JPG", url: "/convert/heic-to-jpg" },
        { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC转PNG", url: "/convert/heic-to-png" },
        { name: "HEIF转PNG", url: "/convert/heif-to-png" },
        { name: "JPG转PDF", url: "/convert/jpg-to-pdf" },
        { name: "PNG转JPG", url: "/convert/png-to-jpg" },
      ],
    },
  },

  // HEIF to TIFF Converter
  heifToTiff: {
    title: "HEIF转TIFF转换器 - 免费在线将HEIF图像转换为TIFF",
    metaDescription:
      "即时将HEIF图像转换为TIFF格式。免费在线HEIF转TIFF转换器，支持批量处理。快速、安全且无需注册。适用于所有设备的HEIF照片。",
    metaKeywords:
      "HEIF转TIFF, 转换HEIF, HEIF图像转TIFF, HEIF转换器, 图像转TIFF, 批量转换HEIF, 免费HEIF转换器, HEIF vs HEIC",
    hero: {
      title: "HEIF转TIFF转换器",
      subtitle:
        "即时将您的HEIF图像转换为通用TIFF格式。免费、快速、安全的转换，无文件大小限制。适合任何设备的HEIF照片。",
      badge1: "超快速",
      badge2: "100%安全",
      badge3: "无需注册",
    },
    upload: {
      title: "上传HEIF文件",
      description:
        "将您的HEIF图像拖放到此处或点击浏览。支持批量转换最多20个文件。每个文件最大100MB。",
      buttonSingle: "单个文件",
      buttonBatch: "批量转换",
      chooseFile: "选择文件",
      converting: "转换中...",
      success: "转换成功！",
      download: "下载TIFF",
      downloadAll: "全部下载为ZIP",
      convertAnother: "转换另一个文件",
    },
    features: {
      title: "功能",
      list: [
        "高质量HEIF转TIFF转换",
        "批量处理最多20个文件",
        "保持图像质量",
        "无文件大小限制",
        "100%安全和私密",
        "适用于所有设备的HEIF照片",
        "转换后即时下载",
        "无水印",
      ],
    },
    howItWorks: {
      title: "工作原理",
      step1Title: "上传HEIF文件",
      step1Desc: "从您的设备选择一个或多个HEIF图像",
      step2Title: "自动转换",
      step2Desc: "我们的转换器即时处理您的文件",
      step3Title: "下载TIFF",
      step3Desc: "立即获取转换后的TIFF文件",
    },
    about: {
      title: "关于HEIF转TIFF转换",
      whatIsHeif: {
        title: "什么是HEIF格式？",
        content:
          "HEIF（高效图像格式）是一种使用HEVC（H.265）压缩的现代图像容器格式。虽然与HEIC相似，但HEIF是标准格式名称，而HEIC具体指Apple的实现。HEIF与TIFF相比提供卓越的压缩，同时保持高图像质量，使其成为高效存储照片的理想选择。",
      },
      whyConvert: {
        title: "为什么将HEIF转换为TIFF？",
        content:
          "虽然HEIF高效且现代，但它并不在所有设备和平台上得到普遍支持。将HEIF转换为TIFF确保您的图像可以在任何设备上查看，轻松通过电子邮件分享，上传到网站，并在任何应用程序中使用。TIFF格式是全球使用最广泛的图像格式，非常适合最大兼容性和分享。",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - 有什么区别？",
        content:
          "HEIF（高效图像格式）是容器格式标准，而HEIC（高效图像容器）是Apple对HEIF的具体实现。实际上，它们非常相似 - 都使用相同的压缩技术并提供相同的优势。Apple设备将照片保存为HEIC文件，这些文件实际上符合HEIF标准。我们的转换器无缝处理两种格式，因此您可以将任何HEIF/HEIC图像转换为TIFF格式。",
      },
      benefits: {
        title: "我们转换器的优势",
        list: [
          "通用兼容性 - TIFF在所有设备和平台上工作",
          "更小的文件大小 - 高效压缩，更快分享",
          "广泛支持 - 全球使用最广泛的图像格式",
          "易于分享 - 与所有电子邮件客户端和社交媒体兼容",
          "网页就绪 - 适合网站、社交媒体和在线使用",
          "高质量 - 保持原始图像分辨率",
        ],
      },
    },
    faq: {
      title: "常见问题 – HEIF转TIFF",
      items: [
        {
          q: "将HEIF转换为TIFF是免费的吗？",
          a: "是的！我们的HEIF转TIFF转换器完全免费，无隐藏费用。您可以无限制地转换文件，无需注册或订阅。",
        },
        {
          q: "HEIF和HEIC有什么区别？",
          a: "HEIF（高效图像格式）是标准格式名称，而HEIC（高效图像容器）是Apple的具体实现。它们使用相同的压缩技术，功能上非常相似。我们的转换器无缝处理两种格式。",
        },
        {
          q: "我的数据安全吗？",
          a: "绝对安全。所有转换都在我们的服务器上通过SSL加密安全进行。您的文件在转换后立即自动删除。我们从不存储、分享或访问您的文件。",
        },
        {
          q: "最大文件大小是多少？",
          a: "您可以转换每个最大100MB的HEIF文件。对于批量转换，您可以一次处理最多20个文件，总限制为100MB。",
        },
        {
          q: "你们支持批量转换吗？",
          a: "是的！您可以同时上传和转换最多20个HEIF文件。所有转换后的TIFF将作为单独文件或单个ZIP存档提供下载。",
        },
        {
          q: "质量会被保留吗？",
          a: "是的，我们在转换过程中保持高图像质量。您的HEIF图像将以最小的质量损失转换为高分辨率TIFF。",
        },
        {
          q: "我可以从任何设备转换HEIF吗？",
          a: "是的！我们的转换器适用于支持HEIF格式的任何设备或相机的HEIF图像，不仅仅是Apple设备。只需上传您的HEIF文件并将它们转换为TIFF。",
        },
        {
          q: "我需要安装任何软件吗？",
          a: "无需安装。我们的在线转换器直接在您的网页浏览器中工作，适用于任何设备 - Windows、Mac、Linux、iOS或Android。",
        },
        {
          q: "转换需要多长时间？",
          a: "转换几乎是即时的！大多数HEIF文件只需几秒钟即可转换为TIFF，具体取决于文件大小和您的互联网连接。",
        },
      ],
    },
    related: {
      title: "相关转换器",
      converters: [
        { name: "HEIC转TIFF", url: "/convert/heic-to-tiff" },
        { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC转PNG", url: "/convert/heic-to-png" },
        { name: "HEIF转PNG", url: "/convert/heif-to-png" },
        { name: "TIFF转PDF", url: "/convert/tiff-to-pdf" },
        { name: "PNG转TIFF", url: "/convert/png-to-tiff" },
      ],
    },
  },
  // HEIF to AVIF Converter
  heifToAvif: {
    title: "HEIF转AVIF转换器 - 转换为下一代AV1图像格式",
    metaDescription:
      "将HEIF转换为AVIF以获得尖端压缩。比JPEG小50%，比WebP小20%。免版税AV1格式，支持HDR。Netflix和YouTube使用。免费批量转换器。",
    metaKeywords:
      "HEIF转AVIF, AV1图像格式, 下一代压缩, HDR图像, 免版税格式, AVIF对比WebP, 批量转换HEIF, 现代图像格式",
    hero: {
      title: "HEIF转AVIF转换器",
      subtitle:
        "即时将您的HEIF图像转换为通用AVIF格式。免费、快速、安全的转换，无文件大小限制。适合任何设备的HEIF照片。",
      badge1: "超快速",
      badge2: "100%安全",
      badge3: "无需注册",
    },
    upload: {
      title: "上传HEIF文件",
      description:
        "将您的HEIF图像拖放到此处或点击浏览。支持批量转换最多20个文件。每个文件最大100MB。",
      buttonSingle: "单个文件",
      buttonBatch: "批量转换",
      chooseFile: "选择文件",
      converting: "转换中...",
      success: "转换成功！",
      download: "下载AVIF",
      downloadAll: "全部下载为ZIP",
      convertAnother: "转换另一个文件",
    },
    features: {
      title: "功能",
      list: [
        "高质量HEIF转AVIF转换",
        "批量处理最多20个文件",
        "保持图像质量",
        "无文件大小限制",
        "100%安全和私密",
        "适用于所有设备的HEIF照片",
        "转换后即时下载",
        "无水印",
      ],
    },
    howItWorks: {
      title: "工作原理",
      step1Title: "上传HEIF文件",
      step1Desc: "从您的设备选择一个或多个HEIF图像",
      step2Title: "自动转换",
      step2Desc: "我们的转换器即时处理您的文件",
      step3Title: "下载AVIF",
      step3Desc: "立即获取转换后的AVIF文件",
    },
    about: {
      title: "关于HEIF转AVIF转换",
      whatIsHeif: {
        title: "什么是HEIF格式？",
        content:
          "HEIF（高效图像格式）是一种使用HEVC（H.265）压缩的现代图像容器格式。虽然与HEIC相似，但HEIF是标准格式名称，而HEIC具体指Apple的实现。HEIF与AVIF相比提供卓越的压缩，同时保持高图像质量，使其成为高效存储照片的理想选择。",
      },
      whyConvert: {
        title: "为什么将HEIF转换为AVIF？",
        content:
          "虽然HEIF高效且现代，但它并不在所有设备和平台上得到普遍支持。将HEIF转换为AVIF确保您的图像可以在任何设备上查看，轻松通过电子邮件分享，上传到网站，并在任何应用程序中使用。AVIF格式是全球使用最广泛的图像格式，非常适合最大兼容性和分享。",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - 有什么区别？",
        content:
          "HEIF（高效图像格式）是容器格式标准，而HEIC（高效图像容器）是Apple对HEIF的具体实现。实际上，它们非常相似 - 都使用相同的压缩技术并提供相同的优势。Apple设备将照片保存为HEIC文件，这些文件实际上符合HEIF标准。我们的转换器无缝处理两种格式，因此您可以将任何HEIF/HEIC图像转换为AVIF格式。",
      },
      benefits: {
        title: "我们转换器的优势",
        list: [
          "通用兼容性 - AVIF在所有设备和平台上工作",
          "更小的文件大小 - 高效压缩，更快分享",
          "广泛支持 - 全球使用最广泛的图像格式",
          "易于分享 - 与所有电子邮件客户端和社交媒体兼容",
          "网页就绪 - 适合网站、社交媒体和在线使用",
          "高质量 - 保持原始图像分辨率",
        ],
      },
    },
    faq: {
      title: "常见问题 – HEIF转AVIF",
      items: [
        {
          q: "将HEIF转换为AVIF是免费的吗？",
          a: "是的！我们的HEIF转AVIF转换器完全免费，无隐藏费用。您可以无限制地转换文件，无需注册或订阅。",
        },
        {
          q: "HEIF和HEIC有什么区别？",
          a: "HEIF（高效图像格式）是标准格式名称，而HEIC（高效图像容器）是Apple的具体实现。它们使用相同的压缩技术，功能上非常相似。我们的转换器无缝处理两种格式。",
        },
        {
          q: "我的数据安全吗？",
          a: "绝对安全。所有转换都在我们的服务器上通过SSL加密安全进行。您的文件在转换后立即自动删除。我们从不存储、分享或访问您的文件。",
        },
        {
          q: "最大文件大小是多少？",
          a: "您可以转换每个最大100MB的HEIF文件。对于批量转换，您可以一次处理最多20个文件，总限制为100MB。",
        },
        {
          q: "你们支持批量转换吗？",
          a: "是的！您可以同时上传和转换最多20个HEIF文件。所有转换后的AVIF将作为单独文件或单个ZIP存档提供下载。",
        },
        {
          q: "质量会被保留吗？",
          a: "是的，我们在转换过程中保持高图像质量。您的HEIF图像将以最小的质量损失转换为高分辨率AVIF。",
        },
        {
          q: "我可以从任何设备转换HEIF吗？",
          a: "是的！我们的转换器适用于支持HEIF格式的任何设备或相机的HEIF图像，不仅仅是Apple设备。只需上传您的HEIF文件并将它们转换为AVIF。",
        },
        {
          q: "我需要安装任何软件吗？",
          a: "无需安装。我们的在线转换器直接在您的网页浏览器中工作，适用于任何设备 - Windows、Mac、Linux、iOS或Android。",
        },
        {
          q: "转换需要多长时间？",
          a: "转换几乎是即时的！大多数HEIF文件只需几秒钟即可转换为AVIF，具体取决于文件大小和您的互联网连接。",
        },
      ],
    },
    related: {
      title: "相关转换器",
      converters: [
        { name: "HEIC转AVIF", url: "/convert/heic-to-avif" },
        { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC转PNG", url: "/convert/heic-to-png" },
        { name: "HEIF转PNG", url: "/convert/heif-to-png" },
        { name: "AVIF转PDF", url: "/convert/avif-to-pdf" },
        { name: "PNG转AVIF", url: "/convert/png-to-avif" },
      ],
    },
  },
  // HEIF to WebP Converter
  heifToWebp: {
    title: "HEIF转WebP转换器 - 转换为现代Web优化格式",
    metaDescription:
      "将HEIF转换为WebP以获得卓越的Web性能。比JPEG小25-35%的文件，质量更好。Google的下一代格式，支持透明度。免费批量转换器，无需注册。",
    metaKeywords:
      "HEIF转WebP, 网页优化, 下一代格式, Google WebP, 有损WebP, 透明度WebP, 批量转换HEIF, 现代图像格式",
    hero: {
      title: "HEIF转WebP转换器",
      subtitle:
        "即时将您的HEIF图像转换为通用WebP格式。免费、快速、安全的转换，无文件大小限制。适合任何设备的HEIF照片。",
      badge1: "超快速",
      badge2: "100%安全",
      badge3: "无需注册",
    },
    upload: {
      title: "上传HEIF文件",
      description:
        "将您的HEIF图像拖放到此处或点击浏览。支持批量转换最多20个文件。每个文件最大100MB。",
      buttonSingle: "单个文件",
      buttonBatch: "批量转换",
      chooseFile: "选择文件",
      converting: "转换中...",
      success: "转换成功！",
      download: "下载WebP",
      downloadAll: "全部下载为ZIP",
      convertAnother: "转换另一个文件",
    },
    features: {
      title: "功能",
      list: [
        "高质量HEIF转WebP转换",
        "批量处理最多20个文件",
        "保持图像质量",
        "无文件大小限制",
        "100%安全和私密",
        "适用于所有设备的HEIF照片",
        "转换后即时下载",
        "无水印",
      ],
    },
    howItWorks: {
      title: "工作原理",
      step1Title: "上传HEIF文件",
      step1Desc: "从您的设备选择一个或多个HEIF图像",
      step2Title: "自动转换",
      step2Desc: "我们的转换器即时处理您的文件",
      step3Title: "下载WebP",
      step3Desc: "立即获取转换后的WebP文件",
    },
    about: {
      title: "关于HEIF转WebP转换",
      whatIsHeif: {
        title: "什么是HEIF格式？",
        content:
          "HEIF（高效图像格式）是一种使用HEVC（H.265）压缩的现代图像容器格式。虽然与HEIC相似，但HEIF是标准格式名称，而HEIC具体指Apple的实现。HEIF与WebP相比提供卓越的压缩，同时保持高图像质量，使其成为高效存储照片的理想选择。",
      },
      whyConvert: {
        title: "为什么将HEIF转换为WebP？",
        content:
          "虽然HEIF高效且现代，但它并不在所有设备和平台上得到普遍支持。将HEIF转换为WebP确保您的图像可以在任何设备上查看，轻松通过电子邮件分享，上传到网站，并在任何应用程序中使用。WebP格式是全球使用最广泛的图像格式，非常适合最大兼容性和分享。",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - 有什么区别？",
        content:
          "HEIF（高效图像格式）是容器格式标准，而HEIC（高效图像容器）是Apple对HEIF的具体实现。实际上，它们非常相似 - 都使用相同的压缩技术并提供相同的优势。Apple设备将照片保存为HEIC文件，这些文件实际上符合HEIF标准。我们的转换器无缝处理两种格式，因此您可以将任何HEIF/HEIC图像转换为WebP格式。",
      },
      benefits: {
        title: "我们转换器的优势",
        list: [
          "通用兼容性 - WebP在所有设备和平台上工作",
          "更小的文件大小 - 高效压缩，更快分享",
          "广泛支持 - 全球使用最广泛的图像格式",
          "易于分享 - 与所有电子邮件客户端和社交媒体兼容",
          "网页就绪 - 适合网站、社交媒体和在线使用",
          "高质量 - 保持原始图像分辨率",
        ],
      },
    },
    faq: {
      title: "常见问题 – HEIF转WebP",
      items: [
        {
          q: "将HEIF转换为WebP是免费的吗？",
          a: "是的！我们的HEIF转WebP转换器完全免费，无隐藏费用。您可以无限制地转换文件，无需注册或订阅。",
        },
        {
          q: "HEIF和HEIC有什么区别？",
          a: "HEIF（高效图像格式）是标准格式名称，而HEIC（高效图像容器）是Apple的具体实现。它们使用相同的压缩技术，功能上非常相似。我们的转换器无缝处理两种格式。",
        },
        {
          q: "我的数据安全吗？",
          a: "绝对安全。所有转换都在我们的服务器上通过SSL加密安全进行。您的文件在转换后立即自动删除。我们从不存储、分享或访问您的文件。",
        },
        {
          q: "最大文件大小是多少？",
          a: "您可以转换每个最大100MB的HEIF文件。对于批量转换，您可以一次处理最多20个文件，总限制为100MB。",
        },
        {
          q: "你们支持批量转换吗？",
          a: "是的！您可以同时上传和转换最多20个HEIF文件。所有转换后的WebP将作为单独文件或单个ZIP存档提供下载。",
        },
        {
          q: "质量会被保留吗？",
          a: "是的，我们在转换过程中保持高图像质量。您的HEIF图像将以最小的质量损失转换为高分辨率WebP。",
        },
        {
          q: "我可以从任何设备转换HEIF吗？",
          a: "是的！我们的转换器适用于支持HEIF格式的任何设备或相机的HEIF图像，不仅仅是Apple设备。只需上传您的HEIF文件并将它们转换为WebP。",
        },
        {
          q: "我需要安装任何软件吗？",
          a: "无需安装。我们的在线转换器直接在您的网页浏览器中工作，适用于任何设备 - Windows、Mac、Linux、iOS或Android。",
        },
        {
          q: "转换需要多长时间？",
          a: "转换几乎是即时的！大多数HEIF文件只需几秒钟即可转换为WebP，具体取决于文件大小和您的互联网连接。",
        },
      ],
    },
    related: {
      title: "相关转换器",
      converters: [
        { name: "HEIC转WebP", url: "/convert/heic-to-webp" },
        { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC转PNG", url: "/convert/heic-to-png" },
        { name: "HEIF转PNG", url: "/convert/heif-to-png" },
        { name: "WebP转PDF", url: "/convert/webp-to-pdf" },
        { name: "PNG转WebP", url: "/convert/png-to-webp" },
      ],
    },
  },
  // HEIF to PDF Converter
  heifToPdf: {
    title: "HEIF转PDF转换器 - 免费在线将HEIF图像转换为PDF",
    metaDescription:
      "即时将HEIF图像转换为PDF格式。免费在线HEIF转PDF转换器，支持批量处理。快速、安全且无需注册。适用于所有设备的HEIF照片。",
    metaKeywords:
      "HEIF转PDF, 转换HEIF, HEIF图像转PDF, HEIF转换器, 图像转PDF, 批量转换HEIF, 免费HEIF转换器, HEIF vs HEIC",
    hero: {
      title: "HEIF转PDF转换器",
      subtitle:
        "即时将您的HEIF图像转换为通用PDF格式。免费、快速、安全的转换，无文件大小限制。适合任何设备的HEIF照片。",
      badge1: "超快速",
      badge2: "100%安全",
      badge3: "无需注册",
    },
    upload: {
      title: "上传HEIF文件",
      description:
        "将您的HEIF图像拖放到此处或点击浏览。支持批量转换最多20个文件。每个文件最大100MB。",
      buttonSingle: "单个文件",
      buttonBatch: "批量转换",
      chooseFile: "选择文件",
      converting: "转换中...",
      success: "转换成功！",
      download: "下载PDF",
      downloadAll: "全部下载为ZIP",
      convertAnother: "转换另一个文件",
    },
    features: {
      title: "功能",
      list: [
        "高质量HEIF转PDF转换",
        "批量处理最多20个文件",
        "保持图像质量",
        "无文件大小限制",
        "100%安全和私密",
        "适用于所有设备的HEIF照片",
        "转换后即时下载",
        "无水印",
      ],
    },
    howItWorks: {
      title: "工作原理",
      step1Title: "上传HEIF文件",
      step1Desc: "从您的设备选择一个或多个HEIF图像",
      step2Title: "自动转换",
      step2Desc: "我们的转换器即时处理您的文件",
      step3Title: "下载PDF",
      step3Desc: "立即获取转换后的PDF文件",
    },
    about: {
      title: "关于HEIF转PDF转换",
      whatIsHeif: {
        title: "什么是HEIF格式？",
        content:
          "HEIF（高效图像格式）是一种使用HEVC（H.265）压缩的现代图像容器格式。虽然与HEIC相似，但HEIF是标准格式名称，而HEIC具体指Apple的实现。HEIF与PDF相比提供卓越的压缩，同时保持高图像质量，使其成为高效存储照片的理想选择。",
      },
      whyConvert: {
        title: "为什么将HEIF转换为PDF？",
        content:
          "虽然HEIF高效且现代，但它并不在所有设备和平台上得到普遍支持。将HEIF转换为PDF确保您的图像可以在任何设备上查看，轻松通过电子邮件分享，上传到网站，并在任何应用程序中使用。PDF格式是全球使用最广泛的图像格式，非常适合最大兼容性和分享。",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - 有什么区别？",
        content:
          "HEIF（高效图像格式）是容器格式标准，而HEIC（高效图像容器）是Apple对HEIF的具体实现。实际上，它们非常相似 - 都使用相同的压缩技术并提供相同的优势。Apple设备将照片保存为HEIC文件，这些文件实际上符合HEIF标准。我们的转换器无缝处理两种格式，因此您可以将任何HEIF/HEIC图像转换为PDF格式。",
      },
      benefits: {
        title: "我们转换器的优势",
        list: [
          "通用兼容性 - PDF在所有设备和平台上工作",
          "更小的文件大小 - 高效压缩，更快分享",
          "广泛支持 - 全球使用最广泛的图像格式",
          "易于分享 - 与所有电子邮件客户端和社交媒体兼容",
          "网页就绪 - 适合网站、社交媒体和在线使用",
          "高质量 - 保持原始图像分辨率",
        ],
      },
    },
    faq: {
      title: "常见问题 – HEIF转PDF",
      items: [
        {
          q: "将HEIF转换为PDF是免费的吗？",
          a: "是的！我们的HEIF转PDF转换器完全免费，无隐藏费用。您可以无限制地转换文件，无需注册或订阅。",
        },
        {
          q: "HEIF和HEIC有什么区别？",
          a: "HEIF（高效图像格式）是标准格式名称，而HEIC（高效图像容器）是Apple的具体实现。它们使用相同的压缩技术，功能上非常相似。我们的转换器无缝处理两种格式。",
        },
        {
          q: "我的数据安全吗？",
          a: "绝对安全。所有转换都在我们的服务器上通过SSL加密安全进行。您的文件在转换后立即自动删除。我们从不存储、分享或访问您的文件。",
        },
        {
          q: "最大文件大小是多少？",
          a: "您可以转换每个最大100MB的HEIF文件。对于批量转换，您可以一次处理最多20个文件，总限制为100MB。",
        },
        {
          q: "你们支持批量转换吗？",
          a: "是的！您可以同时上传和转换最多20个HEIF文件。所有转换后的PDF将作为单独文件或单个ZIP存档提供下载。",
        },
        {
          q: "质量会被保留吗？",
          a: "是的，我们在转换过程中保持高图像质量。您的HEIF图像将以最小的质量损失转换为高分辨率PDF。",
        },
        {
          q: "我可以从任何设备转换HEIF吗？",
          a: "是的！我们的转换器适用于支持HEIF格式的任何设备或相机的HEIF图像，不仅仅是Apple设备。只需上传您的HEIF文件并将它们转换为PDF。",
        },
        {
          q: "我需要安装任何软件吗？",
          a: "无需安装。我们的在线转换器直接在您的网页浏览器中工作，适用于任何设备 - Windows、Mac、Linux、iOS或Android。",
        },
        {
          q: "转换需要多长时间？",
          a: "转换几乎是即时的！大多数HEIF文件只需几秒钟即可转换为PDF，具体取决于文件大小和您的互联网连接。",
        },
      ],
    },
    related: {
      title: "相关转换器",
      converters: [
        { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC转PNG", url: "/convert/heic-to-png" },
        { name: "HEIF转PNG", url: "/convert/heif-to-png" },
        { name: "PDF转PDF", url: "/convert/pdf-to-pdf" },
        { name: "PNG转PDF", url: "/convert/png-to-pdf" },
      ],
    },
  },
  // HEIF to PNG Converter
  heifToPng: {
    title: "HEIF转PNG转换器 - 免费在线将HEIF图像转换为PNG",
    metaDescription:
      "即时将HEIF图像转换为PNG格式。免费在线HEIF转PNG转换器，支持批量处理。快速、安全且无需注册。适用于所有设备的HEIF照片。",
    metaKeywords:
      "HEIF转PNG, 转换HEIF, HEIF图像转PNG, HEIF转换器, 图像转PNG, 批量转换HEIF, 免费HEIF转换器, HEIF vs HEIC",
    hero: {
      title: "HEIF转PNG转换器",
      subtitle:
        "即时将您的HEIF图像转换为通用PNG格式。免费、快速、安全的转换，无文件大小限制。适合任何设备的HEIF照片。",
      badge1: "超快速",
      badge2: "100%安全",
      badge3: "无需注册",
    },
    upload: {
      title: "上传HEIF文件",
      description:
        "将您的HEIF图像拖放到此处或点击浏览。支持批量转换最多20个文件。每个文件最大100MB。",
      buttonSingle: "单个文件",
      buttonBatch: "批量转换",
      chooseFile: "选择文件",
      converting: "转换中...",
      success: "转换成功！",
      download: "下载PNG",
      downloadAll: "全部下载为ZIP",
      convertAnother: "转换另一个文件",
    },
    features: {
      title: "功能",
      list: [
        "高质量HEIF转PNG转换",
        "批量处理最多20个文件",
        "保持图像质量",
        "无文件大小限制",
        "100%安全和私密",
        "适用于所有设备的HEIF照片",
        "转换后即时下载",
        "无水印",
      ],
    },
    howItWorks: {
      title: "工作原理",
      step1Title: "上传HEIF文件",
      step1Desc: "从您的设备选择一个或多个HEIF图像",
      step2Title: "自动转换",
      step2Desc: "我们的转换器即时处理您的文件",
      step3Title: "下载PNG",
      step3Desc: "立即获取转换后的PNG文件",
    },
    about: {
      title: "关于HEIF转PNG转换",
      whatIsHeif: {
        title: "什么是HEIF格式？",
        content:
          "HEIF（高效图像格式）是一种使用HEVC（H.265）压缩的现代图像容器格式。虽然与HEIC相似，但HEIF是标准格式名称，而HEIC具体指Apple的实现。HEIF与JPEG相比提供卓越的压缩，同时保持高图像质量，使其成为高效存储照片的理想选择。",
      },
      whyConvert: {
        title: "为什么将HEIF转换为PNG？",
        content:
          "虽然HEIF高效且现代，但它并不在所有设备和平台上得到普遍支持。将HEIF转换为PNG确保您的图像可以在任何设备上查看，轻松通过电子邮件分享，上传到网站，并在任何应用程序中使用。PNG格式是全球使用最广泛的图像格式，非常适合最大兼容性和分享。",
      },
      heifVsHeic: {
        title: "HEIF vs HEIC - 有什么区别？",
        content:
          "HEIF（高效图像格式）是容器格式标准，而HEIC（高效图像容器）是Apple对HEIF的具体实现。实际上，它们非常相似 - 都使用相同的压缩技术并提供相同的优势。Apple设备将照片保存为HEIC文件，这些文件实际上符合HEIF标准。我们的转换器无缝处理两种格式，因此您可以将任何HEIF/HEIC图像转换为PNG格式。",
      },
      benefits: {
        title: "我们转换器的优势",
        list: [
          "通用兼容性 - PNG在所有设备和平台上工作",
          "更小的文件大小 - 高效压缩，更快分享",
          "广泛支持 - 全球使用最广泛的图像格式",
          "易于分享 - 与所有电子邮件客户端和社交媒体兼容",
          "网页就绪 - 适合网站、社交媒体和在线使用",
          "高质量 - 保持原始图像分辨率",
        ],
      },
    },
    faq: {
      title: "常见问题 – HEIF转PNG",
      items: [
        {
          q: "将HEIF转换为PNG是免费的吗？",
          a: "是的！我们的HEIF转PNG转换器完全免费，无隐藏费用。您可以无限制地转换文件，无需注册或订阅。",
        },
        {
          q: "HEIF和HEIC有什么区别？",
          a: "HEIF（高效图像格式）是标准格式名称，而HEIC（高效图像容器）是Apple的具体实现。它们使用相同的压缩技术，功能上非常相似。我们的转换器无缝处理两种格式。",
        },
        {
          q: "我的数据安全吗？",
          a: "绝对安全。所有转换都在我们的服务器上通过SSL加密安全进行。您的文件在转换后立即自动删除。我们从不存储、分享或访问您的文件。",
        },
        {
          q: "最大文件大小是多少？",
          a: "您可以转换每个最大100MB的HEIF文件。对于批量转换，您可以一次处理最多20个文件，总限制为100MB。",
        },
        {
          q: "你们支持批量转换吗？",
          a: "是的！您可以同时上传和转换最多20个HEIF文件。所有转换后的PNG将作为单独文件或单个ZIP存档提供下载。",
        },
        {
          q: "质量会被保留吗？",
          a: "是的，我们在转换过程中保持高图像质量。您的HEIF图像将以最小的质量损失转换为高分辨率PNG。",
        },
        {
          q: "我可以从任何设备转换HEIF吗？",
          a: "是的！我们的转换器适用于支持HEIF格式的任何设备或相机的HEIF图像，不仅仅是Apple设备。只需上传您的HEIF文件并将它们转换为PNG。",
        },
        {
          q: "我需要安装任何软件吗？",
          a: "无需安装。我们的在线转换器直接在您的网页浏览器中工作，适用于任何设备 - Windows、Mac、Linux、iOS或Android。",
        },
        {
          q: "转换需要多长时间？",
          a: "转换几乎是即时的！大多数HEIF文件只需几秒钟即可转换为PNG，具体取决于文件大小和您的互联网连接。",
        },
      ],
    },
    related: {
      title: "相关转换器",
      converters: [
        { name: "HEIC转PNG", url: "/convert/heic-to-png" },
        { name: "HEIC转PDF", url: "/convert/heic-to-pdf" },
        { name: "HEIC转PNG", url: "/convert/heic-to-png" },
        { name: "HEIF转PNG", url: "/convert/heif-to-png" },
        { name: "PNG转PDF", url: "/convert/png-to-pdf" },
        { name: "PNG转PNG", url: "/convert/png-to-png" },
      ],
    },
  },
};

export type Translations = typeof zh;

