import { Doctor, ServiceDetail, Facility, FaqItem } from '@/types';

export const CLINIC_INFO = {
  name: "Meridian Tibb Mərkəzi",
  shortName: "Meridian",
  legalName: "Meridian Medical Center Bakı",
  tagline: "Dəqiq Diaqnostika, Beynəlxalq Standartlar və Fərdi Qayğı",
  subTagline: "Bakıda müasir tibbin ən son standartlarına cavab verən, pasiyent təhlükəsizliyi və dəqiq diaqnostikanı əsas götürən özəl tibb müəssisəsi.",
  address: "Bakı şəhəri, Nəsimi rayonu, Səməd Vurğun küçəsi 142",
  landmark: "Gənclik m/s və Nəsimi bazarı yaxınlığı",
  city: "Bakı, Azərbaycan",
  phoneDisplay: "+994 (12) 490 88 00",
  phoneTel: "+994124908800",
  mobileDisplay: "+994 (50) 490 88 00",
  mobileTel: "+994504908800",
  emergencyPhone: "+994 (12) 490 88 03",
  whatsappNumber: "994504908800",
  whatsappUrl: "https://wa.me/994504908800?text=Salam,%20Meridian%20Tibb%20M%C9%99rk%C9%99zind%C9%99%20q%C9%99bula%20yaz%C4%B1lmaq%20ist%C9%99yir%C9%99m",
  email: "info@meridianmedical.az",
  workingHours: {
    weekdays: "08:30 – 20:00",
    saturday: "09:00 – 16:00",
    sunday: "Təcili və Növbətçi şöbə (24/7)",
    emergency: "24/7 Fasiləsiz Təcili Yardım"
  },
  stats: [
    { value: "18+", label: "İxtisaslaşmış Şöbə" },
    { value: "45+", label: "Təcrübəli Həkim Heyəti" },
    { value: "120K+", label: "Məmnun Pasiyent" },
    { value: "100%", label: "Sterilizasiya və Təhlükəsizlik" }
  ]
};

export const DEPARTMENTS = [
  { id: "terapiya", name: "Terapiya və Daxili Xəstəliklər" },
  { id: "kardiologiya", name: "Kardiologiya və Funksional Diaqnostika" },
  { id: "nevrologiya", name: "Nevrologiya və Neyrofiziologiya" },
  { id: "stomatologiya", name: "Stomatologiya və İmplantologiya" },
  { id: "pediatriya", name: "Pediatriya və Uşaq Sağlamlığı" },
  { id: "dermatologiya", name: "Dermatologiya və Dermatoskopiya" },
  { id: "laboratoriya", name: "Klinik Diaqnostik Laboratoriya" },
  { id: "usm", name: "Ultrasəs Müayinəsi (USM / Doppler)" }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "terapiya",
    departmentId: "terapiya",
    name: "Terapiya",
    category: "Ümumi Müayinə",
    iconName: "Stethoscope",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Daxili orqan xəstəliklərinin hərtərəfli müayinəsi, fərdi müalicə planının tərtibi və ümumi sağlamlıq skrininqi.",
    fullDesc: "Terapiya şöbəmiz pasiyentin ümumi sağlamlıq vəziyyətini dərindən qiymətləndirir. Daxili orqanların fəaliyyət pozuntuları, tənəffüs, həzm və endokrin sistem narahatlıqları erkən mərhələdə aşkarlanaraq sübutlu təbabət protokollarına uyğun müalicə olunur.",
    diagnosticEquip: "Kompüterləşdirilmiş Funksional Qiymətləndirmə Paneli",
    duration: "40 - 50 dəqiqə",
    preparation: "İlkin müayinə üçün acqarına gəlmək tövsiyə olunur.",
    priceRange: "İlkin konsultasiya təyin olunmuş tariflər əsasında",
    features: [
      "Hərtərəfli klinik baxış və anamnez toplanması",
      "Kompleks illik check-up proqramları",
      "Maddələr mübadiləsi və daxili orqanların monitorinqi",
      "Xroniki xəstəliklərin fərdi idarəetmə planı"
    ]
  },
  {
    id: "kardiologiya",
    departmentId: "kardiologiya",
    name: "Kardiologiya",
    category: "Ürək-Damar Diaqnostikası",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Ürək-damar sistemi xəstəliklərinin dəqiq diaqnostikası, EKQ, 24 saatlıq Holter və exokardioqrafik müayinələr.",
    fullDesc: "Müasir kardiologiya kabinetimiz ən son nəsil GE Vivid ultrasonoqrafiya və Holter monitorinq sistemləri ilə təchiz edilmişdir. Aritmiyalar, hipertoniya, ürəyin işemik xəstəlikləri dəqiqliklə differensiasiya edilir.",
    diagnosticEquip: "GE Healthcare Vivid E90 4D Exokardioqrafiya və Schiller Holter Sistemi",
    duration: "45 - 60 dəqiqə",
    preparation: "Son 12 saat ərzində kofein qəbulunu məhdudlaşdırın.",
    priceRange: "Diaqnostika paketlərinə uyğun olaraq",
    features: [
      "Yüksək dəqiqlikli 12 kanallı rəqəmsal EKQ",
      "Rəngli Doppler Exokardioqrafiya (Echo-KG)",
      "24/48 saatlıq EKQ və Təzyiq Holter monitorinqi",
      "Ürək çatışmazlığı və hipertoniyanın idarə edilməsi"
    ]
  },
  {
    id: "nevrologiya",
    departmentId: "nevrologiya",
    name: "Nevrologiya",
    category: "Sinir Sistemi",
    iconName: "Brain",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Baş ağrıları, yuxu pozuntuları, onurğa və periferik sinir xəstəliklərinin müasir diaqnostika və bərpa müalicəsi.",
    fullDesc: "Mərkəzi və periferik sinir sistemi patologiyalarının araşdırılması. Xroniki miqren, vegetativ distoniya, insult sonrası reabilitasiya və fəqərəarası yırtıqların konservativ müalicəsi ixtisaslaşmış nevroloqlar tərəfindən aparılır.",
    diagnosticEquip: "Rəqəmsal Video-EEQ və Neyrofizioloji Monitorinq Stansiyası",
    duration: "40 - 50 dəqiqə",
    preparation: "Müayinədən əvvəl həkimə qəbul etdiyiniz nevroloji dərmanlar barədə məlumat verin.",
    priceRange: "Klinik protokol və müayinə növünə əsasən",
    features: [
      "Baş beyin qan dövranının dopplerometriyası",
      "Miqren və xroniki baş ağrılarının diferensial diaqnostikası",
      "Onurğa sütunu xəstəliklərində nevroloji reabilitasiya",
      "Yuxu pozğunluqları və vegetativ sinir tənzimlənməsi"
    ]
  },
  {
    id: "stomatologiya",
    departmentId: "stomatologiya",
    name: "Stomatologiya",
    category: "Diş və Çənə Müalicəsi",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Ağrısız müalicə, estetik restavrasiya, mikroskop altında endodontiya və cərrahi implantasiya xidmətləri.",
    fullDesc: "Stomatologiya şöbəmizdə Almaniya və İsveçrə istehsalı avadanlıqlar, rəqəmsal 3D rentgen və mikroskopik optika tətbiq olunur. Bütün prosedurlar tam ağrısız və steril protokollar çərçivəsində həyata keçirilir.",
    diagnosticEquip: "Kavo Dental Unit & Carl Zeiss Cərrahi Mikroskop",
    duration: "30 - 90 dəqiqə",
    preparation: "Xüsusi hazırlıq tələb olunmur.",
    priceRange: "Xidmətin həcminə və material növünə uyğun",
    features: [
      "Mikroskop altında dəqiq kanal müalicəsi (endodontiya)",
      "Premium dərəcəli titan implantasiya sistemləri",
      "Estetik zirkonium və keramik vinirlər",
      "Peşəkar ultrasəs təmizləmə və Air-Flow gigiyenası"
    ]
  },
  {
    id: "pediatriya",
    departmentId: "pediatriya",
    name: "Pediatriya",
    category: "Uşaq Sağlamlığı",
    iconName: "Baby",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Körpələrin və uşaqların fiziki inkişafının izlənməsi, peyvənd təqvimi və uşaq xəstəliklərinin profilaktikası.",
    fullDesc: "Körpəlikdən yeniyetməlik dövrünədək uşaqların sağlam fiziki və psixomotor inkişafının təmin edilməsi. Uşaqlar üçün komfortlu, qorxusuz və mehriban mühitdə ixtisaslı pediatr konsultasiyası.",
    diagnosticEquip: "Uşaqlar üçün xüsusi kalibrlənmiş optik və rəqəmsal ölçmə sistemləri",
    duration: "40 dəqiqə",
    preparation: "Uşağın peyvənd kartını və əvvəlki tibbi sənədlərini gətirməyiniz tövsiyə edilir.",
    priceRange: "Standart uşaq müayinə protokolu üzrə",
    features: [
      "Yenidoğulmuşların skrininqi və pediatr nəzarəti",
      "Milli və beynəlxalq peyvənd proqramlarının icrası",
      "Uşaqlarda həzm və tənəffüs xəstəliklərinin müalicəsi",
      "İmmunitetin möhkəmləndirilməsi üzrə konsultasiya"
    ]
  },
  {
    id: "dermatologiya",
    departmentId: "dermatologiya",
    name: "Dermatologiya",
    category: "Dəri və Trixologiya",
    iconName: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Dəri xəstəliklərinin rəqəmsal dermatoskopik diaqnostikası, xalların xəritələnməsi və müasir dermatoloji terapiya.",
    fullDesc: "Dəri örtüyünün, dırnaq və saç problemlərinin dəqiq analizi. FotoFinder rəqəmsal dermatoskopiya texnologiyası vasitəsilə bədəndəki törəmələrin onkoloji risk dərəcəsi vaxtında təyin edilir.",
    diagnosticEquip: "FotoFinder Dermatoscope & Dəri Analizatoru",
    duration: "30 - 45 dəqiqə",
    preparation: "Müayinə olunacaq dəri nahiyəsinə kosmetik vasitə vurmayın.",
    priceRange: "Klinik kateqoriyaya əsasən",
    features: [
      "Rəqəmsal dermatoskopiya və xalların xəritələnməsi",
      "Akne, dermatit və psoriazın kompleks müalicəsi",
      "Saç tökülməsinin (alopesiya) trixoloji müayinəsi",
      "Dərinin zərərsiz törəmələrinin kriodestruksiyası"
    ]
  },
  {
    id: "laboratoriya",
    departmentId: "laboratoriya",
    name: "Laborator Müayinələr",
    category: "Klinik Diaqnostika",
    iconName: "FlaskConical",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Tam avtomatlaşdırılmış analizatorlarda 800-dən artıq klinik, biokimyəvi, hormonal və immunoferment analiz.",
    fullDesc: "Roche və Sysmex analizatorları ilə təchiz olunmuş laboratoriyamız daxili və beynəlxalq (RIQAS) keyfiyyət nəzarət sistemindən keçir. Analiz cavabları qısa müddətdə pasiyentin şəxsi nömrəsinə göndərilir.",
    diagnosticEquip: "Roche Cobas 6000 & Sysmex XN-1000 Avtomatlaşdırılmış Analizatorlar",
    duration: "Analiz növündən asılı olaraq 2 - 24 saat",
    preparation: "Qan analizləri səhər acqarına verilməlidir.",
    priceRange: "Laborator təyinat vərəqəsinə uyğun",
    features: [
      "Klinik qan və sidik ümumi analizləri",
      "Qaraciyər, böyrək və ürək biokimyəvi panelləri",
      "Qalxanabənzər vəzi və cinsiyyət hormonları",
      "İnfeksion və immunoseroloji skrininqlər"
    ]
  },
  {
    id: "usm",
    departmentId: "usm",
    name: "Ultrasəs Müayinəsi (USM)",
    category: "Radioloji Diaqnostika",
    iconName: "Radio",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Daxili orqanların, qalxanabənzər vəzinin, oynaqların və damarların rəngli Doppler ultrasəs skanı.",
    fullDesc: "Yüksək ayırdetmə dəqiqliyinə malik Canon Aplio i800 USM aparatı ilə toxuma elastikliyinin və orqan morfologiyasının dərindən dəyərləndirilməsi. Şüalanmasız və tam zərərsiz dəqiq vizualizasiya.",
    diagnosticEquip: "Canon Medical Systems Aplio i800 Matrix Transducers",
    duration: "25 - 40 dəqiqə",
    preparation: "Qarın boşluğu USM üçün 6-8 saatlıq acqarına rejim tələb olunur.",
    priceRange: "Müayinə olunan zonaya əsasən",
    features: [
      "Qarın boşluğu və retroperitoneal sahənin USM-i",
      "Qalxanabənzər və süd vəzilərinin elastometriyası",
      "Aşağı və yuxarı ətraf damarlarının dupleks doppleri",
      "Ginekoloji və uroloji 3D/4D ultrasəs diaqnostikası"
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "nigar-mammadova",
    name: "Dr. Nigar Məmmədova",
    title: "Baş Həkim, Ali Dərəcəli Həkim-Terapevt",
    specialty: "Terapiya və Daxili Xəstəliklər",
    departmentId: "terapiya",
    experienceYears: 18,
    education: "Azərbaycan Tibb Universiteti (Fərqlənmə), Ankara Hacettepe Universiteti Klinikasında rezidentura",
    bio: "18 illik klinik təcrübəyə malik olan Dr. Nigar Məmmədova daxili xəstəliklərin dəqiq differensial diaqnostikası və poliorqan patologiyalarının fərdi müalicəsi üzrə ixtisaslaşmışdır.",
    languages: ["Azərbaycan", "Rus", "İngilis", "Türk"],
    schedule: "Bazar ertəsi – Cümə: 09:00 – 16:00",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    credentials: [
      "Tibb üzrə Fəlsəfə Doktoru (PhD)",
      "Avropa Daxili Xəstəliklər Cəmiyyətinin (EFIM) həqiqi üzvü",
      "Klinik protokollar üzrə 20-dən artıq elmi məqalə müəllifi"
    ]
  },
  {
    id: "rashad-quliyev",
    name: "Dr. Rəşad Quliyev",
    title: "Ali Dərəcəli İnvaziv Olmayan Kardioloq",
    specialty: "Kardiologiya və Funksional Diaqnostika",
    departmentId: "kardiologiya",
    experienceYears: 14,
    education: "Azərbaycan Tibb Universiteti, İstanbul Universiteti Cərrahpaşa Tibb Fakültəsi Kardiologiya kafedrası",
    bio: "Ürək çatışmazlığı, hipertonik krizlər və ürək ritm pozuntularının monitorinqində geniş təcrübəyə malikdir. Müasir 4D Exokardioqrafiya üzrə beynəlxalq sertifikatlı mütəxəssisdir.",
    languages: ["Azərbaycan", "Türk", "İngilis"],
    schedule: "Bazar ertəsi – Şənbə: 10:00 – 17:00",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    credentials: [
      "Avropa Kardiologiya Cəmiyyətinin (ESC) fəal üzvü",
      "Exokardioqrafiya üzrə EACVI akkreditasiyası",
      "Hipertoniya idarəetməsində 14 illik staj"
    ]
  },
  {
    id: "leyla-hasanova",
    name: "Dr. Leyla Həsənova",
    title: "Aparıcı Həkim-Nevroloq",
    specialty: "Nevrologiya və Neyrofiziologiya",
    departmentId: "nevrologiya",
    experienceYears: 16,
    education: "Azərbaycan Tibb Universiteti, Vyana Tibb Universiteti Klinikasında ixtisasartırma kursu",
    bio: "Xroniki baş ağrıları, vegetativ damar sindromları, periferik neyropatiyalar və insult sonrası bərpa dövrünün idarə edilməsində Avropa klinik təlimatlarına uyğun fəaliyyət göstərir.",
    languages: ["Azərbaycan", "Rus", "Alman"],
    schedule: "Çərşənbə axşamı – Şənbə: 09:30 – 16:30",
    image: "https://images.unsplash.com/photo-1594824813689-53b92440b8a3?auto=format&fit=crop&w=800&q=80",
    credentials: [
      "Dünya Nevroloqlar Federasiyasının (WFN) üzvü",
      "Klinik EEQ və neyrofiziologiya üzrə ekspert",
      "16 illik nevroloji praktika"
    ]
  },
  {
    id: "fuad-aliyev",
    name: "Dr. Fuad Əliyev",
    title: "Cərrah-Stomatoloq, İmplantoloq",
    specialty: "Stomatologiya və Ağız Cərrahiyyəsi",
    departmentId: "stomatologiya",
    experienceYears: 12,
    education: "Azərbaycan Tibb Universiteti Stomatologiya fakültəsi, İsveçrə Straumann İmplantologiya İnstitutu",
    bio: "Ağrısız mikrocərrahi əməliyyatlar, sümük plastikası, dərhal yüklənən implantasiya və dişlərin estetik rekonstruksiyası üzrə zəngin təcrübəyə malik yüksək ixtisaslı cərrahdır.",
    languages: ["Azərbaycan", "İngilis", "Rus"],
    schedule: "Bazar ertəsi – Cümə: 11:00 – 19:00",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    credentials: [
      "Beynəlxalq İmplantoloqlar Qrupunun (ITI) üzvü",
      "Mikroskopik endodontiya üzrə sertifikatlı mütəxəssis",
      "3000-dən çox uğurlu implantasiya proseduru"
    ]
  },
  {
    id: "aysel-ibrahimova",
    name: "Dr. Aysel İbrahimova",
    title: "Uşaq Həkimi, Neonatoloq",
    specialty: "Pediatriya və Uşaq Sağlamlığı",
    departmentId: "pediatriya",
    experienceYears: 15,
    education: "Azərbaycan Tibb Universiteti Pediatriya fakültəsi, Ankara Qazi Universiteti Xəstəxanası",
    bio: "Yenidoğulmuşların ilkin adaptasiyası, uşaqlarda fiziki və zehni inkişaf dinamikası, rasional qidalanma və mövsümi infeksiyaların önlənməsi sahəsində ixtisaslaşmış diqqətli və təcrübəli pediatr.",
    languages: ["Azərbaycan", "Türk", "Rus"],
    schedule: "Bazar ertəsi – Cümə: 09:00 – 15:30",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80",
    credentials: [
      "Azərbaycan Pediatrlar Assosiasiyasının üzvü",
      "Erkən uşaqlıq dövrü qidalanması üzrə təlimçi",
      "15 illik pediatr təcrübəsi"
    ]
  },
  {
    id: "elvin-tagiyev",
    name: "Dr. Elvin Tağıyev",
    title: "Həkim-Dermatoveneroloq, Dermatoskopist",
    specialty: "Dermatologiya və Dəri Sağlamlığı",
    departmentId: "dermatologiya",
    experienceYears: 11,
    education: "Azərbaycan Tibb Universiteti, Münxen Lüdviq-Maksimilian Universiteti Klinikasında dermatologiya stajı",
    bio: "Dərinin onkoloji skrininqi, rəqəmsal optik dermatoskopiya, autoimmun və allergik dermatozların diferensial diaqnostikası və müalicəsi üzrə ixtisaslaşmışdır.",
    languages: ["Azərbaycan", "Alman", "İngilis", "Rus"],
    schedule: "Çərşənbə – Bazar ertəsi: 10:00 – 18:00",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    credentials: [
      "Beynəlxalq Dermatoskopiya Cəmiyyətinin (IDS) üzvü",
      "FotoFinder Dermatoskopiya üzrə sertifikat",
      "11 illik klinik dermatoloji praktika"
    ]
  },
  {
    id: "zarifa-kerimova",
    name: "Dr. Zərifə Kərimova",
    title: "Laboratoriya Müdiri, Həkim-Laborant",
    specialty: "Klinik Diaqnostik Laboratoriya",
    departmentId: "laboratoriya",
    experienceYears: 19,
    education: "Azərbaycan Tibb Universiteti Tibbi Biologiya, Türkiyə Sağlamlıq Elmləri Universiteti",
    bio: "Klinik biokimya, laboratoriyadaxili və beynəlxalq keyfiyyətə nəzarət standartlarının tətbiqi üzrə 19 illik rəhbər təcrübə. Analizlərin 100% analitik dəqiqliyinə cavabdehdir.",
    languages: ["Azərbaycan", "Rus", "İngilis"],
    schedule: "Bazar ertəsi – Şənbə: 08:30 – 16:00",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    credentials: [
      "RIQAS və EQAS beynəlxalq audit sertifikatları",
      "Klinik Biokimya Assosiasiyasının idarə heyəti üzvü",
      "Avtomatlaşdırılmış laboratoriya sistemləri üzrə baş ekspert"
    ]
  },
  {
    id: "kamran-ceferov",
    name: "Dr. Kamran Cəfərov",
    title: "Radioloq, Şüa və USM Diaqnostikası Həkimi",
    specialty: "Ultrasəs Müayinəsi (USM / Doppler)",
    departmentId: "usm",
    experienceYears: 13,
    education: "Azərbaycan Tibb Universiteti, İstanbul Başkənt Universiteti Radiologiya kafedrası",
    bio: "Daxili orqanların, damarların və yumşaq toxumaların yüksək dəqiqlikli elastometriyası və rəngli dupleks dopplerometriyası sahəsində ixtisaslaşmışdır.",
    languages: ["Azərbaycan", "Türk", "Rus"],
    schedule: "Bazar ertəsi – Cümə: 09:00 – 17:00",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    credentials: [
      "Avropa Radiologiya Cəmiyyətinin (ESR) üzvü",
      "Damar dopplerometriyası üzrə ixtisas sertifikatı",
      "13 illik fəal radioloji təcrübə"
    ]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "fac-1",
    title: "Mərkəzi Qəbul və Konsyerj Zalı",
    category: "qebul",
    description: "Pasiyentlərin rahat qeydiyyatı, növbəsiz koordinasiya və fərdi xidmət menecerləri ilə təmin olunmuş geniş klinika vestibülü.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Elektron növbə və qeydiyyat sistemi",
      "Rahat gözləmə zonaları və tibbi məlumat mərkəzi",
      "Pasiyentlər üçün təmiz, təbii işıqlandırılmış mühit"
    ]
  },
  {
    id: "fac-2",
    title: "Rəqəmsal Diaqnostika və USM Şöbəsi",
    category: "diaqnostika",
    description: "Ən son nəsil Canon Aplio və GE Vivid avadanlıqları ilə təchiz olunmuş, pasiyentin rahatlığı düşünülmüş müayinə otaqları.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Akustik izolyasiyalı müayinə kabinetləri",
      "Real vaxt rejimində yüksək keyfiyyətli vizualizasiya",
      "Erqonomik tənzimlənən xəstə çarpayıları"
    ]
  },
  {
    id: "fac-3",
    title: "Tam Avtomatlaşdırılmış Klinik Laboratoriya",
    category: "laboratoriya",
    description: "İnsan faktoru xətalarını minimuma endirən qapalı dövrəli Roche və Sysmex analizator sistemləri ilə təchiz edilmiş laborator mərkəz.",
    image: "https://images.unsplash.com/photo-1579165466791-78818925567b?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Beynəlxalq kalibrasiya və daxili keyfiyyət nəzarəti",
      "Ştrix-kodlaşdırma ilə pasiyent nümunələrinin qarışmaması təminatı",
      "Təcili (CITO) analizlərin 45 dəqiqədə icrası"
    ]
  },
  {
    id: "fac-4",
    title: "Gündüz Stasionarı və Fərdi Palatalar",
    category: "palata",
    description: "Müayinə və infuzion terapiya alan pasiyentlərin bərpası üçün tibbi nəzarət və otel standartlarında komfort təmin edən otaqlar.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Tibbi çağırış düyməsi və monitorinq sensorları",
      "Fərdi sanitar qovşaq və havalandırma",
      "Tam sterilləşdirilmiş mikroklimat sistemi"
    ]
  },
  {
    id: "fac-5",
    title: "Ağız Cərrahiyyəsi və Stomatoloji Blok",
    category: "cerrahiyye",
    description: "Mikrocərrahi əməliyyatlar və implantasiya üçün steril cərrahi protokollara cavab verən ixtisaslaşmış əməliyyatxana.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Carl Zeiss mikroskopik cərrahi böyütmə",
      "B dərəcəli avtoklav və 5 pilləli alət sterilizasiyası",
      "Laminar hava axını ilə mikrobsuz zonalar"
    ]
  },
  {
    id: "fac-6",
    title: "Uşaq Müayinə və Oyun Zonası",
    category: "qebul",
    description: "Kiçik pasiyentlərimizin tibbi qorxularını aradan qaldıran, təhlükəsiz və gigiyenik oyun guşəsi ilə təchiz olunmuş pediatr şöbəsi.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Hipoallergen və antibakterial səth örtükləri",
      "Uşaq psixologiyasına uyğun sakitləşdirici dizayn",
      "Gözləmə müddətini əyləncəli edən interaktiv guşələr"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    code: "01",
    title: "Sübutlu Təbabət və Beynəlxalq Protokollar",
    desc: "Müalicə və diaqnostika proseslərimiz Avropa və ABŞ-ın aparıcı səhiyyə assosiasiyalarının rəsmi klinik təlimatlarına əsaslanır."
  },
  {
    code: "02",
    title: "Yüksək Dəqiqlikli Alman və Yapon Avadanlıqları",
    desc: "Canon, GE Healthcare və Roche kimi qabaqcıl istehsalçıların texnologiyaları diaqnozlarda insan səhvini minimuma endirir."
  },
  {
    code: "03",
    title: "Mütləq Məxfilik və Elektron Tibbi Kart",
    desc: "Pasiyentin bütün analiz nəticələri və tibbi tarixçəsi şifrələnmiş daxili serverlərdə saxlanılır və üçüncü şəxslərə ötürülmür."
  },
  {
    code: "04",
    title: "Növbəsiz, Dəqiq Qəbul Cədvəli",
    desc: "Optimal qəbul planlaması sayəsində pasiyentlərimiz vaxt itirmədən, təyin olunmuş dəqiqədə həkim konsultasiyasına daxil olurlar."
  },
  {
    code: "05",
    title: "Kompleks Yanaşma və Konsilium Sistemi",
    desc: "Mürəkkəb xəstəlik hallarında terapevt, kardioloq və digər müvafiq sahə mütəxəssislərinin iştirakı ilə birgə klinik rəy verilir."
  },
  {
    code: "06",
    title: "Təcili və Fasiləsiz Dəstək",
    desc: "Klinikamızda təcili tibbi yardım və laborator analizlərin ekspress icrası fasiləsiz fəaliyyət göstərir."
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Qəbul və Qeydiyyat",
    question: "Klinikada həkim qəbuluna necə yazıla bilərəm?",
    answer: "Siz veb-saytımızdakı 'Onlayn Qəbul' forması vasitəsilə istədiyiniz şöbə, həkim və vaxtı seçərək müraciət edə bilərsiniz. Həmçinin +994 (12) 490 88 00 nömrəli zəng mərkəzimiz və ya rəsmi WhatsApp xəttimiz vasitəsilə 24 saat ərzində sürətli növbə götürə bilərsiniz."
  },
  {
    id: "faq-2",
    category: "Qəbul və Qeydiyyat",
    question: "Həkim qəbulu üçün əvvəlcədən qeydiyyat mütləqdirmi?",
    answer: "Təcili vəziyyətlər istisna olmaqla, pasiyentlərimizin rahatlığını təmin etmək və gözləmə vaxtını aradan qaldırmaq məqsədilə əvvəlcədən qeydiyyatdan keçmək tövsiyə olunur. Əvvəlcədən yazılmış pasiyentlər prioritet qaydada qəbul edilir."
  },
  {
    id: "faq-3",
    category: "İş Qrafiki",
    question: "Meridian Tibb Mərkəzinin iş saatları necədir?",
    answer: "Poliklinika və laboratoriya şöbələrimiz bazar ertəsi – cümə günləri 08:30 – 20:00, şənbə günləri 09:00 – 16:00 saatlarında xidmət göstərir. Təcili tibbi yardım və növbətçi həkim heyəti isə həftənin 7 günü 24 saat fasiləsiz işləyir."
  },
  {
    id: "faq-4",
    category: "Laboratoriya",
    question: "Analizlərin cavabı nə vaxt hazır olur və necə təqdim edilir?",
    answer: "Ümumi qan və sidik analizləri 1-2 saat ərzində, biokimyəvi və hormonal analizlərin əksəriyyəti eyni günün axşamınadək hazır olur. Nəticələr hazır olduqda pasiyentin nömrəsinə təhlükəsiz keçid linki olan SMS göndərilir, həmçinin arzu etdikdə çap olunmuş rəsmi möhürlü nüsxə qeydiyyat şöbəsindən təhvil verilir."
  },
  {
    id: "faq-5",
    category: "Sənədləşmə",
    question: "Müayinəyə gələrkən hansı sənədlər tələb olunur?",
    answer: "Şəxsiyyətinizi təsdiq edən sənəd (şəxsiyyət vəsiqəsi və ya pasport) gətirməyiniz kifayətdir. Əgər əvvəlki illərdə aparılmış müayinə nəticələriniz, rentgen/MRT diskləri və ya epikrizləriniz varsa, onları da təqdim etməyiniz diaqnozun dinamikasını qiymətləndirmək üçün çox faydalıdır."
  },
  {
    id: "faq-6",
    category: "Ödəniş və Sığorta",
    question: "Klinikada tibbi sığorta (icbari və könüllü) keçərlidirmi?",
    answer: "Klinikamız ölkənin aparıcı özəl tibbi sığorta şirkətləri ilə korporativ əməkdaşlıq edir. Könüllü tibbi sığortanızın təminat dərəcəsi haqqında ətraflı məlumatı qeydiyyat şöbəmizə zəng edərək öyrənə bilərsiniz."
  }
];
