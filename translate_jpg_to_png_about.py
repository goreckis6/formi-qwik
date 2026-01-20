#!/usr/bin/env python3
"""
Translate about section for jpgToPng in all languages
Part 3: about (p1, p2, p3 structure)
"""

import os
import re

TRANSLATIONS = {
    "de": {
        "title": "Über die Konvertierung von JPG zu PNG",
        "p1": "JPG (oder JPEG) ist ein verlustbehaftetes Bildformat, das für Fotos optimiert ist, aber keine Transparenz unterstützt. PNG (Portable Network Graphics) ist ein verlustfreies Format, das perfekt für Grafiken, Logos und Bilder ist, die transparente Hintergründe oder scharfe Kanten erfordern. Die Konvertierung von JPG zu PNG ist ideal, wenn Sie Transparenz hinzufügen, mehrere Bearbeitungsrunden ohne Qualitätsverlust durchführen oder Bilder für das Web mit sauberen Kanten vorbereiten müssen.",
        "p2": "Unser JPG-zu-PNG-Konverter bewahrt jedes Pixel Ihres Originalbildes perfekt, während er es in das verlustfreie PNG-Format umwandelt. Im Gegensatz zu JPG, das bei jedem Speichern an Qualität verliert, können PNG-Dateien wiederholt bearbeitet und gespeichert werden, ohne an Qualität einzubüßen. Dies macht PNG zur bevorzugten Wahl für professionelle Designer, die Erstellung von Logos und jedes Projekt, bei dem Präzision wichtig ist. Das PNG-Format unterstützt auch Alpha-Transparenz, sodass Sie Bilder mit transparenten Hintergründen erstellen können - etwas, das JPG nicht kann.",
        "p3": "Die Konvertierung ist sofort, sicher und bewahrt die Farbgenauigkeit. Ihre Dateien werden niemals gespeichert oder geteilt - alles geschieht sicher in Ihrem Browser. Ob Sie ein einzelnes Logo oder eine Charge von Produktbildern konvertieren, unser Tool liefert professionelle Ergebnisse ohne Wasserzeichen oder versteckte Gebühren.",
    },
    "es": {
        "title": "Acerca de la Conversión de JPG a PNG",
        "p1": "JPG (o JPEG) es un formato de imagen con pérdida optimizado para fotografías, pero no admite transparencia. PNG (Portable Network Graphics) es un formato sin pérdidas perfecto para gráficos, logotipos e imágenes que requieren fondos transparentes o bordes nítidos. Convertir JPG a PNG es ideal cuando necesitas agregar transparencia, realizar múltiples rondas de edición sin pérdida de calidad o preparar imágenes para la web con bordes limpios.",
        "p2": "Nuestro convertidor de JPG a PNG preserva perfectamente cada píxel de tu imagen original mientras la transforma en el formato PNG sin pérdidas. A diferencia del JPG que pierde calidad cada vez que se guarda, los archivos PNG se pueden editar y guardar repetidamente sin degradación. Esto hace que PNG sea la opción preferida para diseñadores profesionales, creación de logotipos y cualquier proyecto donde la precisión importa. El formato PNG también admite transparencia alfa, lo que te permite crear imágenes con fondos transparentes, algo que JPG no puede hacer.",
        "p3": "La conversión es instantánea, segura y preserva la precisión del color. Tus archivos nunca se almacenan ni se comparten: todo sucede de forma segura en tu navegador. Ya sea que estés convirtiendo un solo logotipo o un lote de imágenes de productos, nuestra herramienta ofrece resultados profesionales sin marcas de agua ni tarifas ocultas.",
    },
    "fr": {
        "title": "À Propos de la Conversion JPG vers PNG",
        "p1": "JPG (ou JPEG) est un format d'image avec perte optimisé pour les photographies, mais ne prend pas en charge la transparence. PNG (Portable Network Graphics) est un format sans perte parfait pour les graphiques, logos et images nécessitant des arrière-plans transparents ou des bords nets. Convertir JPG en PNG est idéal lorsque vous devez ajouter de la transparence, effectuer plusieurs cycles d'édition sans perte de qualité ou préparer des images pour le web avec des bords propres.",
        "p2": "Notre convertisseur JPG vers PNG préserve parfaitement chaque pixel de votre image originale tout en la transformant au format PNG sans perte. Contrairement au JPG qui perd de la qualité à chaque sauvegarde, les fichiers PNG peuvent être édités et sauvegardés à plusieurs reprises sans dégradation. Cela fait du PNG le choix préféré des designers professionnels, de la création de logos et de tout projet où la précision compte. Le format PNG prend également en charge la transparence alpha, vous permettant de créer des images avec des arrière-plans transparents - quelque chose que le JPG ne peut pas faire.",
        "p3": "La conversion est instantanée, sécurisée et préserve la précision des couleurs. Vos fichiers ne sont jamais stockés ni partagés - tout se passe en toute sécurité dans votre navigateur. Que vous convertissiez un seul logo ou un lot d'images de produits, notre outil offre des résultats professionnels sans filigrane ni frais cachés.",
    },
    "it": {
        "title": "Informazioni sulla Conversione da JPG a PNG",
        "p1": "JPG (o JPEG) è un formato immagine con perdita ottimizzato per le fotografie, ma non supporta la trasparenza. PNG (Portable Network Graphics) è un formato senza perdita perfetto per grafica, loghi e immagini che richiedono sfondi trasparenti o bordi nitidi. Convertire JPG in PNG è ideale quando è necessario aggiungere trasparenza, eseguire più cicli di modifica senza perdita di qualità o preparare immagini per il web con bordi puliti.",
        "p2": "Il nostro convertitore da JPG a PNG preserva perfettamente ogni pixel della tua immagine originale trasformandola nel formato PNG senza perdita. A differenza del JPG che perde qualità ogni volta che viene salvato, i file PNG possono essere modificati e salvati ripetutamente senza degradazione. Questo rende PNG la scelta preferita per designer professionali, creazione di loghi e qualsiasi progetto in cui la precisione conta. Il formato PNG supporta anche la trasparenza alfa, permettendoti di creare immagini con sfondi trasparenti - qualcosa che JPG non può fare.",
        "p3": "La conversione è istantanea, sicura e preserva la precisione dei colori. I tuoi file non vengono mai memorizzati o condivisi - tutto avviene in modo sicuro nel tuo browser. Che tu stia convertendo un singolo logo o un lotto di immagini di prodotti, il nostro strumento offre risultati professionali senza filigrane o costi nascosti.",
    },
    "ru": {
        "title": "О Конвертации JPG в PNG",
        "p1": "JPG (или JPEG) — это формат изображения с потерями, оптимизированный для фотографий, но не поддерживающий прозрачность. PNG (Portable Network Graphics) — это формат без потерь, идеальный для графики, логотипов и изображений, требующих прозрачного фона или четких краев. Конвертация JPG в PNG идеальна, когда вам нужно добавить прозрачность, провести несколько раундов редактирования без потери качества или подготовить изображения для веба с чистыми краями.",
        "p2": "Наш конвертер JPG в PNG идеально сохраняет каждый пиксель вашего исходного изображения, преобразуя его в формат PNG без потерь. В отличие от JPG, который теряет качество при каждом сохранении, файлы PNG можно редактировать и сохранять повторно без ухудшения. Это делает PNG предпочтительным выбором для профессиональных дизайнеров, создания логотипов и любого проекта, где важна точность. Формат PNG также поддерживает альфа-прозрачность, позволяя создавать изображения с прозрачным фоном — то, что JPG не может сделать.",
        "p3": "Конвертация мгновенная, безопасная и сохраняет точность цветов. Ваши файлы никогда не хранятся и не передаются — все происходит безопасно в вашем браузере. Независимо от того, конвертируете ли вы один логотип или пакет изображений продуктов, наш инструмент обеспечивает профессиональные результаты без водяных знаков или скрытых платежей.",
    },
    "ar": {
        "title": "حول التحويل من JPG إلى PNG",
        "p1": "JPG (أو JPEG) هو تنسيق صورة مع فقدان محسّن للصور الفوتوغرافية، لكنه لا يدعم الشفافية. PNG (رسومات الشبكة المحمولة) هو تنسيق بدون فقدان مثالي للرسومات والشعارات والصور التي تتطلب خلفيات شفافة أو حواف حادة. تحويل JPG إلى PNG مثالي عندما تحتاج إلى إضافة الشفافية، أو إجراء جولات متعددة من التحرير دون فقدان الجودة، أو إعداد الصور للويب بحواف نظيفة.",
        "p2": "يحافظ محول JPG إلى PNG الخاص بنا على كل بكسل من صورتك الأصلية بشكل مثالي مع تحويلها إلى تنسيق PNG بدون فقدان. على عكس JPG الذي يفقد الجودة في كل مرة يتم حفظه، يمكن تحرير ملفات PNG وحفظها بشكل متكرر دون تدهور. وهذا يجعل PNG الخيار المفضل للمصممين المحترفين، وإنشاء الشعارات، وأي مشروع حيث الدقة مهمة. يدعم تنسيق PNG أيضًا شفافية ألفا، مما يسمح لك بإنشاء صور بخلفيات شفافة - شيء لا يمكن لـ JPG القيام به.",
        "p3": "التحويل فوري وآمن ويحافظ على دقة الألوان. لن يتم تخزين ملفاتك أو مشاركتها أبدًا - كل شيء يحدث بأمان في متصفحك. سواء كنت تحول شعارًا واحدًا أو دفعة من صور المنتجات، تقدم أداتنا نتائج احترافية بدون علامات مائية أو رسوم خفية.",
    },
    "zh": {
        "title": "关于JPG到PNG转换",
        "p1": "JPG（或JPEG）是一种针对照片优化的有损图像格式，但不支持透明度。PNG（便携式网络图形）是一种无损格式，非常适合需要透明背景或清晰边缘的图形、徽标和图像。当您需要添加透明度、进行多轮编辑而不损失质量或准备具有干净边缘的网络图像时，将JPG转换为PNG是理想选择。",
        "p2": "我们的JPG到PNG转换器完美保留原始图像的每个像素，同时将其转换为无损PNG格式。与每次保存都会损失质量的JPG不同，PNG文件可以反复编辑和保存而不会降级。这使得PNG成为专业设计师、徽标创建和任何精度重要项目的首选。PNG格式还支持Alpha透明度，允许您创建具有透明背景的图像——这是JPG无法做到的。",
        "p3": "转换是即时的、安全的，并保持颜色准确性。您的文件永远不会被存储或共享——一切都在您的浏览器中安全进行。无论您是转换单个徽标还是一批产品图像，我们的工具都能提供专业结果，没有水印或隐藏费用。",
    },
    "ja": {
        "title": "JPGからPNGへの変換について",
        "p1": "JPG（またはJPEG）は写真に最適化された非可逆画像フォーマットですが、透明度をサポートしていません。PNG（Portable Network Graphics）は、透明な背景や鮮明なエッジを必要とするグラフィックス、ロゴ、画像に最適な可逆フォーマットです。JPGからPNGへの変換は、透明度を追加したり、品質を損なうことなく複数回の編集を行ったり、クリーンなエッジを持つWeb用画像を準備したりする必要がある場合に理想的です。",
        "p2": "当社のJPGからPNGへのコンバーターは、元の画像のすべてのピクセルを完璧に保持しながら、可逆的なPNG形式に変換します。保存するたびに品質が低下するJPGとは異なり、PNGファイルは劣化することなく繰り返し編集および保存できます。これにより、PNGはプロのデザイナー、ロゴ作成、および精度が重要なあらゆるプロジェクトの優先選択肢となっています。PNG形式はアルファ透明度もサポートしており、透明な背景を持つ画像を作成できます。これはJPGではできないことです。",
        "p3": "変換は即座で安全であり、色の精度を保持します。ファイルは保存または共有されることはありません。すべてブラウザ内で安全に行われます。単一のロゴを変換する場合でも、製品画像のバッチを変換する場合でも、当社のツールは透かしや隠れた料金なしでプロフェッショナルな結果を提供します。",
    },
    "ko": {
        "title": "JPG에서 PNG로의 변환에 대하여",
        "p1": "JPG(또는 JPEG)는 사진에 최적화된 손실 이미지 형식이지만 투명도를 지원하지 않습니다. PNG(Portable Network Graphics)는 투명한 배경이나 선명한 가장자리가 필요한 그래픽, 로고 및 이미지에 완벽한 무손실 형식입니다. JPG를 PNG로 변환하는 것은 투명도를 추가하거나, 품질 손실 없이 여러 번의 편집을 수행하거나, 깨끗한 가장자리로 웹용 이미지를 준비해야 할 때 이상적입니다.",
        "p2": "당사의 JPG에서 PNG로 변환기는 원본 이미지의 모든 픽셀을 완벽하게 보존하면서 무손실 PNG 형식으로 변환합니다. 저장할 때마다 품질이 손실되는 JPG와 달리 PNG 파일은 저하 없이 반복적으로 편집하고 저장할 수 있습니다. 이로 인해 PNG는 전문 디자이너, 로고 생성 및 정밀도가 중요한 모든 프로젝트의 선호되는 선택이 됩니다. PNG 형식은 알파 투명도도 지원하여 투명한 배경이 있는 이미지를 만들 수 있습니다. 이는 JPG로는 할 수 없는 것입니다.",
        "p3": "변환은 즉각적이고 안전하며 색상 정확도를 유지합니다. 파일은 절대 저장되거나 공유되지 않습니다. 모든 것이 브라우저에서 안전하게 이루어집니다. 단일 로고를 변환하든 제품 이미지 배치를 변환하든, 당사의 도구는 워터마크나 숨겨진 요금 없이 전문적인 결과를 제공합니다.",
    },
    "hi": {
        "title": "JPG से PNG रूपांतरण के बारे में",
        "p1": "JPG (या JPEG) एक हानिपूर्ण छवि प्रारूप है जो फ़ोटोग्राफ़ी के लिए अनुकूलित है, लेकिन पारदर्शिता का समर्थन नहीं करता है। PNG (पोर्टेबल नेटवर्क ग्राफ़िक्स) एक दोषरहित प्रारूप है जो ग्राफ़िक्स, लोगो और उन छवियों के लिए एकदम सही है जिन्हें पारदर्शी पृष्ठभूमि या तीक्ष्ण किनारों की आवश्यकता होती है। JPG को PNG में बदलना तब आदर्श है जब आपको पारदर्शिता जोड़ने, गुणवत्ता हानि के बिना कई संपादन राउंड करने, या साफ किनारों के साथ वेब के लिए छवियों को तैयार करने की आवश्यकता होती है।",
        "p2": "हमारा JPG से PNG कनवर्टर आपकी मूल छवि के हर पिक्सेल को पूरी तरह से संरक्षित करता है जबकि इसे दोषरहित PNG प्रारूप में परिवर्तित करता है। JPG के विपरीत जो हर बार सहेजे जाने पर गुणवत्ता खो देता है, PNG फ़ाइलें बिना ख़राब हुए बार-बार संपादित और सहेजी जा सकती हैं। यह PNG को पेशेवर डिजाइनरों, लोगो निर्माण और किसी भी परियोजना के लिए पसंदीदा विकल्प बनाता है जहां सटीकता मायने रखती है। PNG प्रारूप अल्फा पारदर्शिता का भी समर्थन करता है, जिससे आप पारदर्शी पृष्ठभूमि वाली छवियां बना सकते हैं - कुछ ऐसा जो JPG नहीं कर सकता।",
        "p3": "रूपांतरण तत्काल, सुरक्षित है और रंग सटीकता को संरक्षित करता है। आपकी फ़ाइलें कभी भी संग्रहीत या साझा नहीं की जाती हैं - सब कुछ आपके ब्राउज़र में सुरक्षित रूप से होता है। चाहे आप एक लोगो परिवर्तित कर रहे हों या उत्पाद छवियों का बैच, हमारा उपकरण बिना वॉटरमार्क या छिपे हुए शुल्क के पेशेवर परिणाम प्रदान करता है।",
    },
    "id": {
        "title": "Tentang Konversi JPG ke PNG",
        "p1": "JPG (atau JPEG) adalah format gambar lossy yang dioptimalkan untuk fotografi, tetapi tidak mendukung transparansi. PNG (Portable Network Graphics) adalah format lossless yang sempurna untuk grafik, logo, dan gambar yang memerlukan latar belakang transparan atau tepi yang tajam. Mengonversi JPG ke PNG ideal ketika Anda perlu menambahkan transparansi, melakukan beberapa putaran pengeditan tanpa kehilangan kualitas, atau menyiapkan gambar untuk web dengan tepi yang bersih.",
        "p2": "Konverter JPG ke PNG kami mempertahankan setiap piksel gambar asli Anda dengan sempurna sambil mengubahnya menjadi format PNG lossless. Tidak seperti JPG yang kehilangan kualitas setiap kali disimpan, file PNG dapat diedit dan disimpan berulang kali tanpa degradasi. Ini membuat PNG menjadi pilihan utama untuk desainer profesional, pembuatan logo, dan proyek apa pun di mana presisi penting. Format PNG juga mendukung transparansi alfa, memungkinkan Anda membuat gambar dengan latar belakang transparan - sesuatu yang tidak dapat dilakukan JPG.",
        "p3": "Konversi bersifat instan, aman, dan mempertahankan akurasi warna. File Anda tidak pernah disimpan atau dibagikan - semuanya terjadi dengan aman di browser Anda. Baik Anda mengonversi satu logo atau sekumpulan gambar produk, alat kami memberikan hasil profesional tanpa watermark atau biaya tersembunyi.",
    },
    "tr": {
        "title": "JPG'den PNG'ye Dönüşüm Hakkında",
        "p1": "JPG (veya JPEG), fotoğraflar için optimize edilmiş kayıplı bir görüntü formatıdır, ancak saydamlığı desteklemez. PNG (Portable Network Graphics), şeffaf arka planlar veya keskin kenarlar gerektiren grafikler, logolar ve görseller için mükemmel olan kayıpsız bir formattır. JPG'yi PNG'ye dönüştürmek, saydamlık eklemeniz, kalite kaybı olmadan birden fazla düzenleme turu yapmanız veya temiz kenarlarla web için görselleri hazırlamanız gerektiğinde idealdir.",
        "p2": "JPG'den PNG'ye dönüştürücümüz, orijinal görselinizin her pikselini mükemmel şekilde korurken kayıpsız PNG formatına dönüştürür. Her kaydedildiğinde kalite kaybeden JPG'nin aksine, PNG dosyaları bozulma olmadan tekrar tekrar düzenlenebilir ve kaydedilebilir. Bu, PNG'yi profesyonel tasarımcılar, logo oluşturma ve hassasiyetin önemli olduğu her proje için tercih edilen seçenek yapar. PNG formatı ayrıca alfa saydamlığını destekler, şeffaf arka planlara sahip görseller oluşturmanıza olanak tanır - JPG'nin yapamayacağı bir şey.",
        "p3": "Dönüştürme anlıktır, güvenlidir ve renk doğruluğunu korur. Dosyalarınız asla saklanmaz veya paylaşılmaz - her şey tarayıcınızda güvenli bir şekilde gerçekleşir. İster tek bir logo dönüştürün ister bir grup ürün görseli, aracımız filigran veya gizli ücret olmadan profesyonel sonuçlar sunar.",
    },
    "nl": {
        "title": "Over JPG naar PNG Conversie",
        "p1": "JPG (of JPEG) is een lossy beeldformaat geoptimaliseerd voor fotografie, maar ondersteunt geen transparantie. PNG (Portable Network Graphics) is een lossless formaat perfect voor graphics, logo's en afbeeldingen die transparante achtergronden of scherpe randen vereisen. JPG naar PNG converteren is ideaal wanneer u transparantie moet toevoegen, meerdere bewerkingsrondes zonder kwaliteitsverlies moet uitvoeren, of afbeeldingen voor het web met schone randen moet voorbereiden.",
        "p2": "Onze JPG naar PNG converter behoudt perfect elke pixel van uw originele afbeelding terwijl deze wordt getransformeerd naar het lossless PNG-formaat. In tegenstelling tot JPG dat elke keer dat het wordt opgeslagen kwaliteit verliest, kunnen PNG-bestanden herhaaldelijk worden bewerkt en opgeslagen zonder verslechtering. Dit maakt PNG de voorkeurskeuze voor professionele ontwerpers, logo-creatie en elk project waar precisie belangrijk is. Het PNG-formaat ondersteunt ook alfa-transparantie, waarmee u afbeeldingen met transparante achtergronden kunt maken - iets wat JPG niet kan.",
        "p3": "De conversie is direct, veilig en behoudt kleurnauwkeurigheid. Uw bestanden worden nooit opgeslagen of gedeeld - alles gebeurt veilig in uw browser. Of u nu een enkel logo converteert of een batch productafbeeldingen, onze tool levert professionele resultaten zonder watermerken of verborgen kosten.",
    },
    "sv": {
        "title": "Om JPG till PNG Konvertering",
        "p1": "JPG (eller JPEG) är ett förlustbehäftat bildformat optimerat för fotografering, men stöder inte transparens. PNG (Portable Network Graphics) är ett förlustfritt format perfekt för grafik, logotyper och bilder som kräver transparenta bakgrunder eller skarpa kanter. Att konvertera JPG till PNG är idealiskt när du behöver lägga till transparens, utföra flera redigeringsomgångar utan kvalitetsförlust eller förbereda bilder för webben med rena kanter.",
        "p2": "Vår JPG till PNG-konverterare bevarar perfekt varje pixel i din originalbild medan den omvandlas till förlustfritt PNG-format. Till skillnad från JPG som förlorar kvalitet varje gång den sparas, kan PNG-filer redigeras och sparas upprepade gånger utan försämring. Detta gör PNG till det föredragna valet för professionella designers, logotypskapande och alla projekt där precision spelar roll. PNG-formatet stöder också alfatransparens, vilket gör att du kan skapa bilder med transparenta bakgrunder - något som JPG inte kan göra.",
        "p3": "Konverteringen är omedelbar, säker och bevarar färgnoggrannhet. Dina filer lagras eller delas aldrig - allt sker säkert i din webbläsare. Oavsett om du konverterar en enda logotyp eller en batch produktbilder, levererar vårt verktyg professionella resultat utan vattenstämplar eller dolda avgifter.",
    },
    "pl": {
        "title": "O Konwersji JPG do PNG",
        "p1": "JPG (lub JPEG) to stratny format obrazu zoptymalizowany pod kątem fotografii, ale nie obsługuje przezroczystości. PNG (Portable Network Graphics) to bezstratny format idealny dla grafik, logo i obrazów wymagających przezroczystych teł lub ostrych krawędzi. Konwersja JPG do PNG jest idealna, gdy potrzebujesz dodać przezroczystość, przeprowadzić wiele rund edycji bez utraty jakości lub przygotować obrazy do sieci z czystymi krawędziami.",
        "p2": "Nasz konwerter JPG do PNG idealnie zachowuje każdy piksel oryginalnego obrazu, przekształcając go w bezstratny format PNG. W przeciwieństwie do JPG, który traci jakość przy każdym zapisie, pliki PNG mogą być edytowane i ponownie zapisywane bez pogorszenia. To czyni PNG preferowanym wyborem dla profesjonalnych projektantów, tworzenia logo i każdego projektu, gdzie precyzja ma znaczenie. Format PNG obsługuje również przezroczystość alfa, pozwalając tworzyć obrazy z przezroczystymi tłami - coś, czego JPG nie może zrobić.",
        "p3": "Konwersja jest natychmiastowa, bezpieczna i zachowuje dokładność kolorów. Twoje pliki nigdy nie są przechowywane ani udostępniane - wszystko odbywa się bezpiecznie w przeglądarce. Niezależnie od tego, czy konwertujesz jedno logo, czy partię obrazów produktów, nasze narzędzie zapewnia profesjonalne wyniki bez znaków wodnych lub ukrytych opłat.",
    },
}

def update_about(filepath, lang_code):
    """Update about section with new p1, p2, p3 structure"""
    
    if lang_code == "en":
        return False
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if lang_code not in TRANSLATIONS:
        print(f"✗ {lang_code}: No translations")
        return False
    
    trans = TRANSLATIONS[lang_code]
    
    # Find jpgToPng section and replace about with new structure
    # Pattern matches the old structure (whatIsHeif, whyConvert, etc) OR the new structure (p1, p2, p3)
    about_pattern = r'(jpgToPng:[^}]*about:\s*\{)[^}]*title:\s*"[^"]*",[^}]*\},'
    
    about_replacement = f'''\\1
      title: "{trans['title']}",
      p1: "{trans['p1']}",
      p2: "{trans['p2']}",
      p3: "{trans['p3']}",
    }},'''
    
    new_content = re.sub(about_pattern, about_replacement, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✓ {lang_code}: Updated about section")
        return True
    else:
        print(f"✗ {lang_code}: No changes")
        return False

def main():
    i18n_dir = "/home/slavko/cursor/formi-qwik/src/i18n"
    languages = ["de", "es", "fr", "it", "pt", "ru", "ar", "zh", "ja", "ko", "hi", "id", "tr", "nl", "sv", "pl"]
    
    print("=== Part 3: Translating about section ===\n")
    
    updated = 0
    for lang in languages:
        filepath = os.path.join(i18n_dir, f"{lang}.ts")
        if os.path.exists(filepath):
            if update_about(filepath, lang):
                updated += 1
    
    print(f"\n✓ Updated {updated}/16 languages")
    print("✓ Progress: 3/4 parts complete")

if __name__ == "__main__":
    main()
