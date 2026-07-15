/*
═══════════════════════════════════════════════════════════════
  PASTANE GOLDEN MASTER v7.1 — CONFIG DOSYASI (config.js) — Yusuf Yozgatlı
  Bu demo: EZGİ PASTANESİ — repo: ezgi-pastanesi
  Yeni demo = SADECE BU DOSYA doldurulur. index.html'e dokunma.
  TEK İSTİSNA: index.html <head> içindeki OG etiketleri (elle).
  index.html + config.js AYNI klasörde durmak ZORUNDA.
═══════════════════════════════════════════════════════════════
*/

const CONFIG = {

/* ┌──────────────────────────────────────────────────────────┐
   │ BÖLÜM 1 — SIK GÜNCELLENEN                                 │
   └──────────────────────────────────────────────────────────┘ */

  priceUpdated: "",
  announcement: "",
  vacationNote: "",
  vacationLock: false,

  siteDiscount: 0,
  paymentMethods: [],

  products: [
    { name: "Öncesi & Sonrası Konsept Pasta", desc: "Siyah zemin, renkli çiçek dekorlu", img: "urun1.jpg" },
    { name: "Kırmızı Çiçekli Kutlama Pastası", desc: "Zarif çiçek işlemeli, özel günler için", img: "urun2.jpg" },
    { name: "Happy Birthday Çiçekli Pasta", desc: "Beyaz zemin, pastel çiçek süslemeli", img: "urun3.jpg" },
    { name: "Gül Dökümlü Beyaz Pasta", desc: "Kırmızı-pembe gül şelalesi dekorlu", img: "urun4.jpg" },
    { name: "Gül Buketli Krem Pasta", desc: "Taze gül buketiyle sunulan zarif pasta", img: "urun5.jpg" },
    { name: "Kalpli Sevgi Pastası", desc: "Kırmızı kalp figürlü, sevgi temalı", img: "urun6.jpg" }
  ],

  menuNote: "",
  menu: [],

  orderForm: {
    portions: ["4", "6", "8", "10", "12", "15", "20"],
    weddingPortions: ["50", "100", "150", "200"],
    portionPrices: {},
    flavorExtras: {},
    priceNote: "",
    photoNote: "Aklınızdaki pastanın fotoğrafını sipariş sonrası WhatsApp üzerinden göndermeyi unutmayın!",
    rules: [],
    minDaysAhead: 0,
    deliveryMethods: [],
    deliveryTimeRange: "",
    candles: [],
    flavors: [
      "Karışık Meyve", "Çilek", "Muz", "Frambuaz",
      "Orman Meyvesi", "Yaban Mersini", "Lotus", "Karamel",
      "Beyaz Çikolata", "Bitter Çikolata", "Antep Fıstığı"
    ],
    creams: ["Vanilya", "Çikolata", "Karamel", "Meyveli", "Peynirli (Cheesecake)"],
    notes: []
  },

/* ┌──────────────────────────────────────────────────────────┐
   │ BÖLÜM 2 — KURULUMDA BİR KEZ                               │
   └──────────────────────────────────────────────────────────┘ */

  name: "Ezgi Pastanesi",
  tagline: "25 Yıldır Değişmeyen Kalite",
  about: "Ezgi Pastanesi, 25 yıldır değişmeyen kalitesiyle özel gün pastaları hazırlıyor. Doğum günü, yıldönümü ve kutlamalarınız için el işçiliği çiçek ve figür dekorlu pastalar, WhatsApp hattından tek mesajla sipariş verilebiliyor.",

  logo: "logo.jpg",

  colors: {
    primary:  "#3E5266",
    secondary:"#1E2A35",
    accent:   "#7FA1BE",
    bg:       "#FFFFFF",
    text:     "#25303B"
  },

  decor: { img: "", opacity: 0.2, side: "both" },

  intro: true,
  particles: "auto",
  cartEnabled: true,
  formFirst: true,

  faq: [],

  branches: [
    {
      name: "Ezgi Pastanesi",
      address: "Pirimehmet Mahallesi, Cumhuriyet Caddesi (118. Cadde) No:26, 32100 Isparta Merkez/Isparta",
      mapsUrl: "https://share.google/F8qvrTPHGYrCXyOBr",
      phone: "+905426852772",
      hours: "Her gün 07:00 – 00:00"
    }
  ],

/* ┌──────────────────────────────────────────────────────────┐
   │ BÖLÜM 3 — SABİT                                            │
   └──────────────────────────────────────────────────────────┘ */

  phone: "+905426852772",
  whatsapp: "905426852772",
  instagram: "ezgipastanesi_",
  sheetsUrl: ""
};
/* ═══════════ CONFIG SONU ═══════════ */
