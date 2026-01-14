// Chinese translations
import type { Translations } from './en';

export const zh: Translations = {
  locale: 'zh',
  name: '中文',
  flag: '🇨🇳',
  
  nav: {
    converters: '转换器',
    viewers: '查看器',
    compress: '压缩',
    samples: '示例',
  },
  
  home: {
    title: '免费在线文件转换器 - FormiPeek | 即时转换300+格式',
    metaDescription: '在300+格式之间即时转换文件。快速、安全且免费的文件转换服务。支持图像、文档、电子书和数据文件。',
    metaKeywords: '文件转换器, 在线转换器, 图像转换器, 文档转换器, 电子书转换器, 批量转换, 免费转换器',
    
    hero: {
      badge: '永久免费 • 无需注册',
      title: '转换文件',
      titleHighlight: '即时',
      subtitle: '以闪电般的速度在{count}种格式之间转换。安全、免费且无需注册。',
      buttonStart: '开始转换',
      buttonView: '查看文件',
      feature1: '100%免费',
      feature2: '无需注册',
      feature3: '安全私密',
      feature4: '批量处理',
    },
    
    stats: {
      formats: '支持的格式',
      dataProcessed: '已处理数据',
      batchFiles: '批量处理',
    },
    
    explore: {
      title: '探索我们的工具',
      subtitle: '文件转换、查看、压缩等所需的一切',
      converters: {
        title: '转换器',
        description: '在300+文件格式之间即时转换。图像、文档、电子书和数据文件。',
      },
      viewers: {
        title: '查看器',
        description: '直接在浏览器中预览和查看文件。无需下载。',
      },
      compress: {
        title: '压缩',
        description: '在不损失质量的情况下减小文件大小。JPG、PNG和PDF压缩。',
      },
      samples: {
        title: '示例',
        description: '浏览所有支持格式的示例文件。转换前先测试。',
      },
    },
    
    howItWorks: {
      title: '我们的转换器如何工作？',
      subtitle: '转换任何文件格式的三个简单步骤',
      step1: {
        title: '上传文件',
        description: '拖放或浏览以选择您的文件。每个文件最多支持100MB。',
      },
      step2: {
        title: '选择格式',
        description: '从300+支持的格式中选择您想要的输出格式。',
      },
      step3: {
        title: '下载',
        description: '点击转换并立即下载您的文件。无需等待，无需排队。',
      },
    },
    
    popular: {
      title: '热门转换器',
      subtitle: '快速访问我们最常用的转换工具',
      viewAll: '查看所有300+转换器',
      viewAllMobile: '查看所有转换器',
    },
    
    features: {
      title: '为什么选择FormiPeek？',
      subtitle: '为专业人士和日常用户而构建',
      lightning: {
        title: '闪电般快速',
        description: '使用我们优化的转换引擎在几秒钟内处理文件',
      },
      secure: {
        title: '安全私密',
        description: '企业级安全性。文件在处理后自动删除',
      },
      universal: {
        title: '通用支持',
        description: '在所有文件类型之间转换300+格式组合',
      },
      batch: {
        title: '批量处理',
        description: '使用我们强大的批量引擎一次转换最多20个文件',
      },
      viewer: {
        title: '文件查看器',
        description: '直接在浏览器中预览和查看您的文件',
      },
      quality: {
        title: '专业质量',
        description: '具有可自定义设置的行业标准转换',
      },
    },
  },
  
  // Converters Page
  converters: {
    title: '文件转换器',
    subtitle: '在300+种文件格式之间即时转换',
    searchPlaceholder: '搜索转换器... (例如：HEIC转PDF)',
    noConvertersFound: '未找到匹配的转换器',
    heicToPdf: {
      name: 'HEIC转PDF',
      description: '即时将Apple HEIC照片转换为PDF格式',
    },
    heicToPng: {
      name: 'HEIC转PNG',
      description: '即时将Apple HEIC照片转换为PNG格式',
    },
    heicToJpg: {
      name: 'HEIC转JPG',
      description: '即时将Apple HEIC照片转换为JPG格式',
    },
  },
  
  heicToPdf: {
    title: 'HEIC转PDF转换器 - 免费在线将Apple照片转换为PDF',
    metaDescription: '即时将HEIC图像转换为PDF格式。免费在线HEIC转PDF转换器，支持批量处理。快速、安全且无需注册。适用于iPhone和iPad照片。',
    metaKeywords: 'HEIC转PDF, 转换HEIC, Apple照片转PDF, iPhone照片转PDF, HEIC转换器, 图像转PDF, 批量转换HEIC, 免费HEIC转换器',
    
    hero: {
      title: 'HEIC转PDF转换器',
      subtitle: '立即将您的Apple HEIC照片转换为通用PDF文档。免费、快速且安全的转换，无文件大小限制。',
      badge1: '闪电般快速',
      badge2: '100%安全',
      badge3: '无需注册',
    },
    
    upload: {
      title: '上传HEIC文件',
      description: '将您的HEIC照片拖放到此处或点击浏览。支持批量转换最多20个文件。每个文件最大100MB。',
      buttonSingle: '单个文件',
      buttonBatch: '批量转换',
      chooseFile: '选择文件',
      converting: '转换中...',
      success: '转换成功！',
      download: '下载PDF',
      downloadAll: '全部下载为ZIP',
      convertAnother: '转换另一个文件',
    },
    
    features: {
      title: '功能',
      list: [
        '高质量HEIC转PDF转换',
        '批量处理最多20个文件',
        '保留图像质量和EXIF数据',
        '无文件大小限制',
        '100%安全私密',
        '适用于iPhone和iPad照片',
        '转换后即时下载',
        '不添加水印',
      ],
    },
    
    howItWorks: {
      title: '工作原理',
      step1Title: '上传HEIC文件',
      step1Desc: '从您的设备中选择一个或多个HEIC照片',
      step2Title: '自动转换',
      step2Desc: '我们的转换器立即处理您的文件',
      step3Title: '下载PDF',
      step3Desc: '立即获取转换后的PDF文件',
    },
    
    about: {
      title: '关于HEIC转PDF转换',
      whatIsHeic: {
        title: '什么是HEIC格式？',
        content: 'HEIC（高效图像容器）是自iOS 11以来Apple设备使用的默认照片格式。它在保持高图像质量的同时提供卓越的压缩，使照片在iPhone或iPad上占用更少的存储空间。',
      },
      whyConvert: {
        title: '为什么将HEIC转换为PDF？',
        content: '虽然HEIC很高效，但它并不被普遍支持。转换为PDF可确保您的照片可以在任何设备上查看，通过电子邮件轻松共享，并在文档中专业呈现。PDF也适合打印和归档。',
      },
      benefits: {
        title: '我们转换器的优势',
        list: [
          '通用兼容性 - PDF在所有设备和平台上都能工作',
          '专业呈现 - 非常适合商业文档和作品集',
          '易于共享 - 任何人都可以打开的电子邮件友好格式',
          '打印就绪 - 保持物理打印的质量',
          '安全存储 - 用于归档的行业标准格式',
          '无质量损失 - 保留原始图像分辨率',
        ],
      },
    },
    
    faq: {
      title: '常见问题',
      q1: '将HEIC转换为PDF是否免费？',
      a1: '是的！我们的HEIC转PDF转换器完全免费，无隐藏费用。您可以无限制地转换文件，无需任何注册或订阅。',
      q2: '我的数据安全吗？',
      a2: '绝对安全。所有转换都在我们的服务器上通过SSL加密安全进行。您的文件在转换后立即自动删除。我们从不存储、共享或访问您的文件。',
      q3: '最大文件大小是多少？',
      a3: '您可以转换每个最大100MB的HEIC文件。对于批量转换，您可以一次处理最多20个文件，总限制为100MB。',
      q4: '您支持批量转换吗？',
      a4: '是的！您可以同时上传和转换最多20个HEIC文件。所有转换后的PDF将作为单个文件或单个ZIP存档提供下载。',
      q5: '质量会保留吗？',
      a5: '是的，我们在转换过程中保持原始图像质量。您的HEIC照片将转换为高分辨率PDF，无压缩或质量损失。',
      q6: '我可以直接从iPhone转换HEIC吗？',
      a6: '是的！我们的转换器与在iPhone、iPad或任何Apple设备上拍摄的照片完美配合。只需从您的相机胶卷上传HEIC文件。',
      q7: '我需要安装任何软件吗？',
      a7: '无需安装。我们的在线转换器直接在您的网络浏览器中工作，适用于任何设备 - Windows、Mac、Linux、iOS或Android。',
      q8: '转换需要多长时间？',
      a8: '转换几乎是即时的！大多数HEIC文件在几秒钟内转换为PDF，具体取决于文件大小和您的互联网连接。',
    },
    
    related: {
      title: '相关转换器',
      converters: [
        { name: 'HEIC转JPG', url: '/convert/heic-to-jpg' },
        { name: 'HEIC转PNG', url: '/convert/heic-to-png' },
        { name: 'JPG转PDF', url: '/convert/jpg-to-pdf' },
        { name: 'PNG转PDF', url: '/convert/png-to-pdf' },
        { name: 'WEBP转PDF', url: '/convert/webp-to-pdf' },
        { name: 'HEIC转WEBP', url: '/convert/heic-to-webp' },
      ],
    },
    
    footer: {
      tagline: '面向专业人士和日常用户的终极文件转换和查看平台。',
      security: '100%安全：我们的服务器上不存储任何文件。所有转换都会处理，文件在处理后立即自动删除。',
      copyright: '© 2025 FormiPeek',
      madeWith: '使用',
      byDevelopers: '由关心质量的开发人员构建。',
    },
  },
  
  heicToPng: {
    title: 'HEIC转PNG转换器 - 免费在线将Apple照片转换为PNG',
    metaDescription: '即时将HEIC图像转换为PNG格式。免费在线HEIC转PNG转换器，支持批量处理。快速、安全且无需注册。适用于iPhone和iPad照片。',
    metaKeywords: 'HEIC转PNG, 转换HEIC, Apple照片转PNG, iPhone照片转PNG, HEIC转换器, 图像转PNG, 批量转换HEIC, 免费HEIC转换器',
    
    hero: {
      title: 'HEIC转PNG转换器',
      subtitle: '即时将您的Apple HEIC照片转换为通用PNG图像。免费、快速且安全的转换，无文件大小限制。',
      badge1: '超快',
      badge2: '100%安全',
      badge3: '无需注册',
    },
    
    upload: {
      title: '上传HEIC文件',
      description: '将您的HEIC照片拖放到此处或点击浏览。支持批量转换，最多20个文件。每个文件最大100MB。',
      buttonSingle: '单个文件',
      buttonBatch: '批量转换',
      chooseFile: '选择文件',
      converting: '转换中...',
      success: '转换成功！',
      download: '下载PNG',
      downloadAll: '全部下载为ZIP',
      convertAnother: '转换另一个文件',
    },
    
    features: {
      title: '功能',
      list: [
        '高质量HEIC转PNG转换',
        '批量处理最多20个文件',
        '保持图像质量和透明度',
        '无文件大小限制',
        '100%安全私密',
        '适用于iPhone和iPad照片',
        '转换后即时下载',
        '不添加水印',
      ],
    },
    
    howItWorks: {
      title: '工作原理',
      step1Title: '上传HEIC文件',
      step1Desc: '从设备中选择一个或多个HEIC照片',
      step2Title: '自动转换',
      step2Desc: '我们的转换器即时处理您的文件',
      step3Title: '下载PNG',
      step3Desc: '立即获取转换后的PNG文件',
    },
    
    about: {
      title: '关于HEIC转PNG转换',
      whatIsHeic: {
        title: '什么是HEIC格式？',
        content: 'HEIC（高效图像容器）是自iOS 11以来Apple设备使用的默认照片格式。它在保持高图像质量的同时提供卓越的压缩，使照片在iPhone或iPad上占用更少的存储空间。',
      },
      whyConvert: {
        title: '为什么将HEIC转换为PNG？',
        content: '虽然HEIC很高效，但它并不被普遍支持。转换为PNG可确保您的照片可以在任何设备上查看，轻松通过电子邮件分享，并在网页设计和图形中使用。PNG格式支持透明度和无损压缩，非常适合专业使用。',
      },
      benefits: {
        title: '我们转换器的优势',
        list: [
          '通用兼容性 - PNG在所有设备和平台上都能工作',
          '透明度支持 - 非常适合图形和网页设计',
          '无损质量 - 无压缩伪影或质量损失',
          '易于分享 - 广泛支持的格式，任何人都可以打开',
          '网页就绪 - 非常适合网站、社交媒体和在线使用',
          '无质量损失 - 保持原始图像分辨率',
        ],
      },
    },
    
    faq: {
      title: '常见问题',
      q1: '将HEIC转换为PNG是否免费？',
      a1: '是的！我们的HEIC转PNG转换器完全免费，无隐藏费用。您可以无限制地转换文件，无需注册或订阅。',
      q2: '我的数据安全吗？',
      a2: '绝对安全。所有转换都在我们的服务器上通过SSL加密安全进行。您的文件在转换后立即自动删除。我们从不存储、共享或访问您的文件。',
      q3: '最大文件大小是多少？',
      a3: '您可以转换每个最大100MB的HEIC文件。对于批量转换，您可以一次处理最多20个文件，总限制为100MB。',
      q4: '您支持批量转换吗？',
      a4: '是的！您可以同时上传和转换最多20个HEIC文件。所有转换后的PNG将作为单独文件或单个ZIP存档提供下载。',
      q5: '质量会被保留吗？',
      a5: '是的，我们在转换过程中保持原始图像质量。您的HEIC照片将转换为高分辨率PNG，无压缩或质量损失。',
      q6: '我可以直接从iPhone转换HEIC吗？',
      a6: '是的！我们的转换器与在iPhone、iPad或任何Apple设备上拍摄的照片完美配合。只需从您的相机胶卷上传HEIC文件。',
      q7: '我需要安装任何软件吗？',
      a7: '无需安装。我们的在线转换器直接在您的网络浏览器中工作，适用于任何设备 - Windows、Mac、Linux、iOS或Android。',
      q8: '转换需要多长时间？',
      a8: '转换几乎是即时的！大多数HEIC文件在几秒钟内转换为PNG，具体取决于文件大小和您的互联网连接。',
    },
    
    related: {
      title: '相关转换器',
      converters: [
        { name: 'HEIC转PDF', url: '/convert/heic-to-pdf' },
        { name: 'HEIC转JPG', url: '/convert/heic-to-jpg' },
        { name: 'PNG转PDF', url: '/convert/png-to-pdf' },
        { name: 'JPG转PNG', url: '/convert/jpg-to-png' },
        { name: 'WEBP转PNG', url: '/convert/webp-to-png' },
        { name: 'HEIC转WEBP', url: '/convert/heic-to-webp' },
      ],
    },
    
    // HEIC to JPG Converter
    heicToJpg: {
      title: 'HEIC转JPG转换器 - 免费在线将Apple照片转换为JPG',
      metaDescription: '即时将HEIC图像转换为JPG格式。免费在线HEIC转JPG转换器，支持批量处理。快速、安全、无需注册。适用于iPhone和iPad照片。',
      metaKeywords: 'HEIC转JPG, 转换HEIC, Apple照片转JPG, iPhone照片转JPG, HEIC转换器, 图像转JPG, 批量转换HEIC, 免费HEIC转换器',
      
      hero: {
        title: 'HEIC转JPG转换器',
        subtitle: '即时将您的Apple HEIC照片转换为通用JPG图像。免费、快速、安全的转换，无文件大小限制。',
        badge1: '超快速',
        badge2: '100%安全',
        badge3: '无需注册',
      },
      
      upload: {
        title: '上传HEIC文件',
        description: '将您的HEIC照片拖放到此处或点击浏览。支持批量转换最多20个文件。每个文件最大100MB。',
        buttonSingle: '单个文件',
        buttonBatch: '批量转换',
        chooseFile: '选择文件',
        converting: '转换中...',
        success: '转换成功！',
        download: '下载JPG',
        downloadAll: '全部下载为ZIP',
        convertAnother: '转换另一个文件',
      },
      
      features: {
        title: '功能',
        list: [
          '高质量HEIC转JPG转换',
          '批量处理最多20个文件',
          '保持图像质量',
          '无文件大小限制',
          '100%安全和私密',
          '适用于iPhone和iPad照片',
          '转换后即时下载',
          '无水印',
        ],
      },
      
      howItWorks: {
        title: '工作原理',
        step1Title: '上传HEIC文件',
        step1Desc: '从您的设备选择一个或多个HEIC照片',
        step2Title: '自动转换',
        step2Desc: '我们的转换器即时处理您的文件',
        step3Title: '下载JPG',
        step3Desc: '立即获取转换后的JPG文件',
      },
      
      about: {
        title: '关于HEIC转JPG转换',
        whatIsHeic: {
          title: '什么是HEIC格式？',
          content: 'HEIC（高效图像容器）是自iOS 11以来Apple设备使用的默认照片格式。它在保持高图像质量的同时提供卓越的压缩，使照片在您的iPhone或iPad上占用更少的存储空间。',
        },
        whyConvert: {
          title: '为什么将HEIC转换为JPG？',
          content: '虽然HEIC很高效，但它并不被普遍支持。转换为JPG确保您的照片可以在任何设备上查看，轻松通过电子邮件分享，并用于网页设计和图形。JPG格式是使用最广泛的图像格式，非常适合分享和兼容性。',
        },
        benefits: {
          title: '我们转换器的优势',
          list: [
            '通用兼容性 - JPG在所有设备和平台上工作',
            '更小的文件大小 - 高效压缩，更快分享',
            '广泛支持 - 全球使用最广泛的图像格式',
            '易于分享 - 与所有电子邮件客户端和社交媒体兼容',
            '网页就绪 - 适合网站、社交媒体和在线使用',
            '高质量 - 保持原始图像分辨率',
          ],
        },
      },
      
      faq: {
        title: '常见问题',
        q1: '将HEIC转换为JPG是免费的吗？',
        a1: '是的！我们的HEIC转JPG转换器完全免费，无隐藏费用。您可以无限制地转换文件，无需注册或订阅。',
        q2: '我的数据安全吗？',
        a2: '绝对安全。所有转换都在我们的服务器上通过SSL加密安全进行。您的文件在转换后立即自动删除。我们从不存储、分享或访问您的文件。',
        q3: '最大文件大小是多少？',
        a3: '您可以转换每个最大100MB的HEIC文件。对于批量转换，您可以一次处理最多20个文件，总限制为100MB。',
        q4: '你们支持批量转换吗？',
        a4: '是的！您可以同时上传和转换最多20个HEIC文件。所有转换后的JPG将作为单独文件或单个ZIP存档提供下载。',
        q5: '质量会被保留吗？',
        a5: '是的，我们在转换过程中保持高图像质量。您的HEIC照片将以最小的质量损失转换为高分辨率JPG。',
        q6: '我可以直接从iPhone转换HEIC吗？',
        a6: '是的！我们的转换器与在iPhone、iPad或任何Apple设备上拍摄的照片完美配合。只需从您的照片库上传HEIC文件即可。',
        q7: '我需要安装任何软件吗？',
        a7: '无需安装。我们的在线转换器可在任何设备（Windows、Mac、Linux、iOS或Android）的网页浏览器中直接运行。',
        q8: '转换需要多长时间？',
        a8: '转换几乎是即时的！大多数HEIC文件在几秒钟内转换为JPG，具体取决于文件大小和您的互联网连接。',
      },
      
      related: {
        title: '相关转换器',
        converters: [
          { name: 'HEIC转PDF', url: '/convert/heic-to-pdf' },
          { name: 'HEIC转PNG', url: '/convert/heic-to-png' },
          { name: 'JPG转PDF', url: '/convert/jpg-to-pdf' },
          { name: 'PNG转JPG', url: '/convert/png-to-jpg' },
          { name: 'WEBP转JPG', url: '/convert/webp-to-jpg' },
          { name: 'HEIC转WEBP', url: '/convert/heic-to-webp' },
        ],
      },
    },
    
    footer: {
      tagline: '面向专业人士和日常用户的终极文件转换和查看平台。',
      security: '100%安全：我们的服务器上不存储任何文件。所有转换都会被处理，文件在处理后立即自动删除。',
      copyright: '© 2025 FormiPeek',
      madeWith: '使用',
      byDevelopers: '由关心质量的开发人员构建。',
    },
  },
};
