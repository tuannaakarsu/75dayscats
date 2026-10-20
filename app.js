(() => {
  "use strict";
  const STORAGE_KEY = "pixel-cat-75-v1";
  const DEFAULT_TASKS = [
    { id: "learn", name: "30 dakika öğrenme" },
    { id: "project", name: "Kişisel projem üzerinde çalış" },
    { id: "move", name: "30 dakika hareket et" }
  ];

  // 15x15 Izgarada Detaylı Kawaii Kedi Modelleri (Gözler, Burun, Ağız, Kulaklar, Allıklar ve Bıyıklar)
  const CAT_MODELS = [
    {
      id: "ginger",
      name: "Sarı Sarman Kedi",
      typeLabel: "Sarı Kedi",
      badge: "🐱 SARMAN",
      quote: "Sarı tüyleri, zümrüt gözleri ve minik burnuyla hedeflerini bekliyor!",
      completeQuote: "✦ GÖREV TAMAMLANDI — SARMAN SENİ TEBRİK EDİYORR... ✦",
      theme: {
        primary: "#FFA726",
        secondary: "#FFE082",
        glow: "0 0 11px rgba(255, 167, 38, 0.85)",
        badgeBg: "rgba(255, 167, 38, 0.22)",
        badgeBorder: "rgba(255, 167, 38, 0.55)",
        badgeColor: "#FFE082"
      },
      palette: {
        fur: "#FFA726",
        furDark: "#FB8C00",
        eye: "#00C9A7",       // Zümrüt yeşili canlı gözler
        nose: "#FF5252",      // Pembe burun
        mouth: "#D90429",     // Sevimli ağız çizgisi
        ear: "#FFB4A2",       // Kulak içi pembe
        blush: "#FFAB91",     // Yanak allığı
        whisker: "#FFF8E1",   // Bıyık telleri
        chest: "#FFF8E1",     // Göğüs beyazı/krem
        paw: "#FFE082"        // Patiler
      },
      cells: [
        // Kulaklar
        { x: 3, y: 1, f: "fur" }, { x: 11, y: 1, f: "fur" },
        { x: 2, y: 2, f: "fur" }, { x: 3, y: 2, f: "ear" }, { x: 4, y: 2, f: "fur" },
        { x: 10, y: 2, f: "fur" }, { x: 11, y: 2, f: "ear" }, { x: 12, y: 2, f: "fur" },
        // Alın ve Baş
        { x: 2, y: 3, f: "fur" }, { x: 3, y: 3, f: "fur" }, { x: 4, y: 3, f: "fur" }, { x: 5, y: 3, f: "fur" }, { x: 6, y: 3, f: "fur" }, { x: 7, y: 3, f: "furDark" }, { x: 8, y: 3, f: "fur" }, { x: 9, y: 3, f: "fur" }, { x: 10, y: 3, f: "fur" }, { x: 11, y: 3, f: "fur" }, { x: 12, y: 3, f: "fur" },
        // Gözler
        { x: 2, y: 4, f: "fur" }, { x: 3, y: 4, f: "fur" }, { x: 4, y: 4, f: "eye" }, { x: 5, y: 4, f: "eye" }, { x: 6, y: 4, f: "fur" }, { x: 7, y: 4, f: "fur" }, { x: 8, y: 4, f: "fur" }, { x: 9, y: 4, f: "eye" }, { x: 10, y: 4, f: "eye" }, { x: 11, y: 4, f: "fur" }, { x: 12, y: 4, f: "fur" },
        // Burun, Allık ve Bıyık
        { x: 1, y: 5, f: "whisker" }, { x: 2, y: 5, f: "fur" }, { x: 3, y: 5, f: "blush" }, { x: 4, y: 5, f: "fur" }, { x: 5, y: 5, f: "fur" }, { x: 6, y: 5, f: "fur" }, { x: 7, y: 5, f: "nose" }, { x: 8, y: 5, f: "fur" }, { x: 9, y: 5, f: "fur" }, { x: 10, y: 5, f: "fur" }, { x: 11, y: 5, f: "blush" }, { x: 12, y: 5, f: "fur" }, { x: 13, y: 5, f: "whisker" },
        // Ağız ve Bıyık Altı
        { x: 2, y: 6, f: "whisker" }, { x: 3, y: 6, f: "fur" }, { x: 4, y: 6, f: "fur" }, { x: 5, y: 6, f: "fur" }, { x: 6, y: 6, f: "mouth" }, { x: 7, y: 6, f: "mouth" }, { x: 8, y: 6, f: "mouth" }, { x: 9, y: 6, f: "fur" }, { x: 10, y: 6, f: "fur" }, { x: 11, y: 6, f: "fur" }, { x: 12, y: 6, f: "whisker" },
        // Çene ve Göğüs
        { x: 4, y: 7, f: "fur" }, { x: 5, y: 7, f: "chest" }, { x: 6, y: 7, f: "chest" }, { x: 7, y: 7, f: "chest" }, { x: 8, y: 7, f: "chest" }, { x: 9, y: 7, f: "chest" }, { x: 10, y: 7, f: "fur" },
        // Gövde
        { x: 3, y: 8, f: "fur" }, { x: 4, y: 8, f: "fur" }, { x: 5, y: 8, f: "chest" }, { x: 6, y: 8, f: "chest" }, { x: 7, y: 8, f: "chest" }, { x: 8, y: 8, f: "chest" }, { x: 9, y: 8, f: "chest" }, { x: 10, y: 8, f: "fur" }, { x: 11, y: 8, f: "fur" },
        // Gövde & Ön Patiler
        { x: 3, y: 9, f: "fur" }, { x: 4, y: 9, f: "fur" }, { x: 5, y: 9, f: "paw" }, { x: 6, y: 9, f: "paw" }, { x: 7, y: 9, f: "chest" }, { x: 8, y: 9, f: "paw" }, { x: 9, y: 9, f: "paw" }, { x: 10, y: 9, f: "fur" }, { x: 11, y: 9, f: "fur" },
        // Alt Taban & Patiler
        { x: 2, y: 10, f: "fur" }, { x: 3, y: 10, f: "fur" }, { x: 4, y: 10, f: "paw" }, { x: 5, y: 10, f: "paw" }, { x: 6, y: 10, f: "fur" }, { x: 7, y: 10, f: "fur" }, { x: 8, y: 10, f: "paw" }, { x: 9, y: 10, f: "paw" }, { x: 10, y: 10, f: "fur" }, { x: 11, y: 10, f: "fur" }, { x: 12, y: 10, f: "fur" },
        // Kuyruk
        { x: 13, y: 9, f: "fur" }, { x: 13, y: 8, f: "fur" }, { x: 12, y: 7, f: "fur" }
      ]
    },
    {
      id: "snow_white",
      name: "Bembeyaz Pamuk Kedi",
      typeLabel: "Beyaz Kedi",
      badge: "🤍 PAMUK",
      quote: "Huzurla kıvrılmış, pembe burnu ve masum yüzüyle uykuda!",
      completeQuote: "✦ GÖREV TAMAMLANDI — PAMUK SENİ TEBRİK EDİYORR... ✦",
      theme: {
        primary: "#FFFFFF",
        secondary: "#FFB6C1",
        glow: "0 0 12px rgba(255, 255, 255, 0.95)",
        badgeBg: "rgba(255, 255, 255, 0.16)",
        badgeBorder: "rgba(255, 255, 255, 0.45)",
        badgeColor: "#FFFFFF"
      },
      palette: {
        fur: "#FFFFFF",
        furDark: "#E2EAFC",
        eye: "#6C757D",       // Huzurlu kapalı hilal gözler
        nose: "#FF758F",      // Tatlı pembe burun
        mouth: "#FF8FA3",     // Gülümseyen minik ağız
        ear: "#FFCCD5",       // Şeker pembesi kulak içi
        blush: "#FFCCD5",     // Yanak allığı
        whisker: "#D7E3FC",   // Narin bıyıklar
        chest: "#FFFFFF",
        paw: "#FFCCD5"
      },
      cells: [
        // Kulaklar
        { x: 10, y: 2, f: "fur" }, { x: 13, y: 2, f: "fur" },
        { x: 9, y: 3, f: "fur" }, { x: 10, y: 3, f: "ear" }, { x: 13, y: 3, f: "ear" }, { x: 14, y: 3, f: "fur" },
        // Baş Üstü
        { x: 8, y: 4, f: "fur" }, { x: 9, y: 4, f: "fur" }, { x: 10, y: 4, f: "fur" }, { x: 11, y: 4, f: "fur" }, { x: 12, y: 4, f: "fur" }, { x: 13, y: 4, f: "fur" }, { x: 14, y: 4, f: "fur" },
        // Uyuyan Gözler
        { x: 8, y: 5, f: "fur" }, { x: 9, y: 5, f: "eye" }, { x: 10, y: 5, f: "eye" }, { x: 11, y: 5, f: "fur" }, { x: 12, y: 5, f: "eye" }, { x: 13, y: 5, f: "eye" }, { x: 14, y: 5, f: "fur" },
        // Burun, Allık ve Bıyık
        { x: 7, y: 6, f: "whisker" }, { x: 8, y: 6, f: "blush" }, { x: 9, y: 6, f: "fur" }, { x: 10, y: 6, f: "fur" }, { x: 11, y: 6, f: "nose" }, { x: 12, y: 6, f: "fur" }, { x: 13, y: 6, f: "blush" }, { x: 14, y: 6, f: "fur" },
        // Ağız ve Baş Altı
        { x: 7, y: 7, f: "whisker" }, { x: 8, y: 7, f: "fur" }, { x: 9, y: 7, f: "fur" }, { x: 10, y: 7, f: "mouth" }, { x: 11, y: 7, f: "mouth" }, { x: 12, y: 7, f: "fur" }, { x: 13, y: 7, f: "fur" },
        // Kıvrılmış Gövde & Sırt
        { x: 4, y: 6, f: "fur" }, { x: 5, y: 6, f: "fur" }, { x: 6, y: 6, f: "fur" },
        { x: 2, y: 7, f: "fur" }, { x: 3, y: 7, f: "fur" }, { x: 4, y: 7, f: "fur" }, { x: 5, y: 7, f: "fur" }, { x: 6, y: 7, f: "fur" },
        { x: 1, y: 8, f: "fur" }, { x: 2, y: 8, f: "fur" }, { x: 3, y: 8, f: "fur" }, { x: 4, y: 8, f: "fur" }, { x: 5, y: 8, f: "fur" }, { x: 6, y: 8, f: "fur" }, { x: 7, y: 8, f: "fur" }, { x: 8, y: 8, f: "fur" }, { x: 9, y: 8, f: "paw" }, { x: 10, y: 8, f: "paw" },
        // Alt Gövde ve Kıvrık Kuyruk
        { x: 1, y: 9, f: "fur" }, { x: 2, y: 9, f: "fur" }, { x: 3, y: 9, f: "fur" }, { x: 4, y: 9, f: "fur" }, { x: 5, y: 9, f: "fur" }, { x: 6, y: 9, f: "fur" }, { x: 7, y: 9, f: "fur" }, { x: 8, y: 9, f: "fur" }, { x: 9, y: 9, f: "paw" }, { x: 10, y: 9, f: "paw" },
        { x: 2, y: 10, f: "fur" }, { x: 3, y: 10, f: "fur" }, { x: 4, y: 10, f: "fur" }, { x: 5, y: 10, f: "fur" }, { x: 6, y: 10, f: "fur" }, { x: 7, y: 10, f: "fur" }, { x: 8, y: 10, f: "fur" }, { x: 9, y: 10, f: "fur" },
        { x: 3, y: 11, f: "fur" }, { x: 4, y: 11, f: "fur" }, { x: 5, y: 11, f: "fur" }, { x: 6, y: 11, f: "fur" }, { x: 7, y: 11, f: "fur" }
      ]
    },
    {
      id: "calico",
      name: "Renkli Kaliko (Karışık Üç Renk)",
      typeLabel: "Karışık Kaliko",
      badge: "🐾 KALİKO",
      quote: "Beyaz, sarı ve koyu benekleriyle neşeli bir gezgin!",
      completeQuote: "✦ GÖREV TAMAMLANDI — KALİKO SENİ KUTSUYOR... ✦",
      theme: {
        primary: "#FB8C00",
        secondary: "#FFFFFF",
        glow: "0 0 10px rgba(251, 140, 0, 0.8)",
        badgeBg: "rgba(251, 140, 0, 0.22)",
        badgeBorder: "rgba(251, 140, 0, 0.55)",
        badgeColor: "#FFB74D"
      },
      palette: {
        fur: "#FFFFFF",
        furOrange: "#FB8C00", // Turuncu benek
        furDark: "#4E3459",   // Koyu vintage grape benek
        eye: "#FFB703",       // Kehribar/bal rengi gözler
        nose: "#FF5252",      // Pembe burun
        mouth: "#D90429",     // Ağız
        ear: "#FFB4A2",
        blush: "#FFAAA6",
        whisker: "#E2EAFC",
        paw: "#FFFFFF"
      },
      cells: [
        // Kuyruk
        { x: 1, y: 1, f: "furDark" },
        { x: 1, y: 2, f: "furDark" }, { x: 2, y: 2, f: "furDark" },
        { x: 2, y: 3, f: "furDark" }, { x: 3, y: 3, f: "furDark" },
        // Kulaklar
        { x: 11, y: 3, f: "furOrange" }, { x: 14, y: 3, f: "furDark" },
        { x: 3, y: 4, f: "furDark" }, { x: 10, y: 4, f: "furOrange" }, { x: 11, y: 4, f: "ear" }, { x: 13, y: 4, f: "ear" }, { x: 14, y: 4, f: "furDark" },
        // Baş Üstü ve Gözler
        { x: 3, y: 5, f: "fur" }, { x: 4, y: 5, f: "fur" }, { x: 9, y: 5, f: "furOrange" }, { x: 10, y: 5, f: "eye" }, { x: 11, y: 5, f: "furOrange" }, { x: 12, y: 5, f: "fur" }, { x: 13, y: 5, f: "eye" }, { x: 14, y: 5, f: "furDark" },
        // Burun, Allık ve Bıyık
        { x: 9, y: 6, f: "blush" }, { x: 10, y: 6, f: "fur" }, { x: 11, y: 6, f: "nose" }, { x: 12, y: 6, f: "mouth" }, { x: 13, y: 6, f: "fur" }, { x: 14, y: 6, f: "whisker" },
        // Gövde Sırtı (Benekli)
        { x: 4, y: 6, f: "fur" }, { x: 5, y: 6, f: "furOrange" }, { x: 6, y: 6, f: "furOrange" }, { x: 7, y: 6, f: "fur" }, { x: 8, y: 6, f: "furDark" },
        { x: 4, y: 7, f: "fur" }, { x: 5, y: 7, f: "furOrange" }, { x: 6, y: 7, f: "furOrange" }, { x: 7, y: 7, f: "fur" }, { x: 8, y: 7, f: "furDark" }, { x: 9, y: 7, f: "fur" }, { x: 10, y: 7, f: "fur" }, { x: 11, y: 7, f: "fur" }, { x: 12, y: 7, f: "fur" },
        { x: 4, y: 8, f: "fur" }, { x: 5, y: 8, f: "fur" }, { x: 6, y: 8, f: "fur" }, { x: 7, y: 8, f: "fur" }, { x: 8, y: 8, f: "furDark" }, { x: 9, y: 8, f: "fur" }, { x: 10, y: 8, f: "fur" }, { x: 11, y: 8, f: "fur" },
        { x: 4, y: 9, f: "fur" }, { x: 5, y: 9, f: "fur" }, { x: 6, y: 9, f: "fur" }, { x: 7, y: 9, f: "fur" }, { x: 8, y: 9, f: "fur" }, { x: 9, y: 9, f: "fur" }, { x: 10, y: 9, f: "fur" },
        // Bacaklar & Patiler
        { x: 4, y: 10, f: "fur" }, { x: 5, y: 10, f: "fur" }, { x: 9, y: 10, f: "fur" }, { x: 10, y: 10, f: "fur" },
        { x: 4, y: 11, f: "paw" }, { x: 5, y: 11, f: "paw" }, { x: 9, y: 11, f: "paw" }, { x: 10, y: 11, f: "paw" },
        { x: 3, y: 12, f: "paw" }, { x: 4, y: 12, f: "paw" }, { x: 10, y: 12, f: "paw" }, { x: 11, y: 12, f: "paw" }
      ]
    },
    {
      id: "honey",
      name: "Bal & Karamel Kedi",
      typeLabel: "Bal Sarısı",
      badge: "🍯 KARAMEL",
      quote: "Tatlı karamel tüyleri, ela gözleri ve esnek hareketleriyle sahnede!",
      completeQuote: "✦ GÖREV TAMAMLANDI — KARAMEL SENİ TEBRİK EDİYOR... ✦",
      theme: {
        primary: "#FFB74D",
        secondary: "#FFE0B2",
        glow: "0 0 10px rgba(255, 183, 77, 0.8)",
        badgeBg: "rgba(255, 183, 77, 0.22)",
        badgeBorder: "rgba(255, 183, 77, 0.5)",
        badgeColor: "#FFE0B2"
      },
      palette: {
        fur: "#FFB74D",
        furDark: "#FFA726",
        eye: "#70E000",       // Ela / zeytin yeşili gözler
        nose: "#FF758F",      // Pembe burun
        mouth: "#D90429",
        ear: "#FFCCD5",
        blush: "#FFAB91",
        whisker: "#FFF3B0",
        paw: "#FFE0B2"
      },
      cells: [
        // Kuyruk
        { x: 1, y: 1, f: "fur" },
        { x: 1, y: 2, f: "fur" }, { x: 2, y: 2, f: "fur" },
        { x: 2, y: 3, f: "fur" }, { x: 3, y: 3, f: "fur" },
        // Sırt gerinme çizgisi
        { x: 3, y: 4, f: "fur" }, { x: 4, y: 4, f: "fur" }, { x: 5, y: 4, f: "fur" },
        { x: 3, y: 5, f: "fur" }, { x: 4, y: 5, f: "fur" }, { x: 5, y: 5, f: "fur" }, { x: 6, y: 5, f: "fur" },
        { x: 3, y: 6, f: "fur" }, { x: 4, y: 6, f: "fur" }, { x: 5, y: 6, f: "fur" }, { x: 6, y: 6, f: "fur" }, { x: 7, y: 6, f: "fur" },
        // Kulaklar ve Baş
        { x: 11, y: 6, f: "fur" }, { x: 13, y: 6, f: "fur" },
        { x: 4, y: 7, f: "fur" }, { x: 5, y: 7, f: "fur" }, { x: 6, y: 7, f: "fur" }, { x: 7, y: 7, f: "fur" }, { x: 8, y: 7, f: "fur" }, { x: 11, y: 7, f: "ear" }, { x: 13, y: 7, f: "ear" },
        // Gözler, Burun ve Ağız
        { x: 4, y: 8, f: "fur" }, { x: 5, y: 8, f: "fur" }, { x: 6, y: 8, f: "fur" }, { x: 7, y: 8, f: "fur" }, { x: 8, y: 8, f: "fur" }, { x: 9, y: 8, f: "fur" }, { x: 10, y: 8, f: "eye" }, { x: 11, y: 8, f: "nose" }, { x: 12, y: 8, f: "eye" }, { x: 13, y: 8, f: "fur" },
        { x: 3, y: 9, f: "fur" }, { x: 4, y: 9, f: "fur" }, { x: 7, y: 9, f: "fur" }, { x: 8, y: 9, f: "fur" }, { x: 9, y: 9, f: "blush" }, { x: 10, y: 9, f: "mouth" }, { x: 11, y: 9, f: "mouth" }, { x: 12, y: 9, f: "blush" },
        // Ön Patiler Uzatılmış
        { x: 3, y: 10, f: "paw" }, { x: 4, y: 10, f: "paw" }, { x: 8, y: 10, f: "fur" }, { x: 9, y: 10, f: "paw" }, { x: 10, y: 10, f: "paw" }, { x: 11, y: 10, f: "paw" }, { x: 12, y: 10, f: "paw" }, { x: 13, y: 10, f: "paw" }, { x: 14, y: 10, f: "paw" },
        { x: 3, y: 11, f: "paw" }, { x: 12, y: 11, f: "paw" }, { x: 13, y: 11, f: "paw" }, { x: 14, y: 11, f: "paw" }
      ]
    },
    {
      id: "lucky_gold",
      name: "Altın Şans Kedisi",
      typeLabel: "Altın Sarısı",
      badge: "✨ ALTIN ŞANS",
      quote: "Gülümseyen sevimli yüzü, kırmızı tasması ve altın çanıyla bereket getiriyor!",
      completeQuote: "✦ GÖREV TAMAMLANDI — ALTIN ŞANS SENİ TEBRİK EDİYORR... ✦",
      theme: {
        primary: "#FFD700",
        secondary: "#FFCA28",
        glow: "0 0 12px rgba(255, 215, 0, 0.9)",
        badgeBg: "rgba(255, 215, 0, 0.2)",
        badgeBorder: "rgba(255, 215, 0, 0.55)",
        badgeColor: "#FFD700"
      },
      palette: {
        fur: "#FFD700",
        furDark: "#FFA000",
        eye: "#2B1B17",       // Sevimli kapalı gülen gözler ^ ^
        nose: "#FF5252",      // Pembe burun
        mouth: "#D90429",     // Kırmızı ağız
        ear: "#FFCDD2",       // Kulak içi
        blush: "#FF8A80",     // Kırmızımsı allık
        whisker: "#FFFFFF",
        collar: "#D90429",    // Kırmızı tasma
        bell: "#FFEB3B",      // Altın zil
        paw: "#FFFFFF"        // Beyaz patiler
      },
      cells: [
        // Kulaklar
        { x: 4, y: 1, f: "fur" }, { x: 10, y: 1, f: "fur" },
        { x: 3, y: 2, f: "fur" }, { x: 4, y: 2, f: "ear" }, { x: 10, y: 2, f: "ear" }, { x: 11, y: 2, f: "fur" },
        // Baş
        { x: 2, y: 3, f: "fur" }, { x: 3, y: 3, f: "fur" }, { x: 4, y: 3, f: "fur" }, { x: 5, y: 3, f: "fur" }, { x: 9, y: 3, f: "fur" }, { x: 10, y: 3, f: "fur" }, { x: 11, y: 3, f: "fur" }, { x: 12, y: 3, f: "fur" }, { x: 13, y: 3, f: "paw" },
        // Gülen Gözler & Sallanan Pati
        { x: 2, y: 4, f: "fur" }, { x: 3, y: 4, f: "fur" }, { x: 4, y: 4, f: "eye" }, { x: 5, y: 4, f: "eye" }, { x: 6, y: 4, f: "fur" }, { x: 8, y: 4, f: "fur" }, { x: 9, y: 4, f: "eye" }, { x: 10, y: 4, f: "eye" }, { x: 12, y: 4, f: "paw" }, { x: 13, y: 4, f: "paw" },
        // Burun, Allık ve Ağız
        { x: 2, y: 5, f: "whisker" }, { x: 3, y: 5, f: "blush" }, { x: 4, y: 5, f: "fur" }, { x: 5, y: 5, f: "fur" }, { x: 6, y: 5, f: "nose" }, { x: 7, y: 5, f: "fur" }, { x: 8, y: 5, f: "blush" }, { x: 9, y: 5, f: "whisker" }, { x: 12, y: 5, f: "paw" }, { x: 13, y: 5, f: "paw" },
        // Ağız ve Tasma Başlangıcı
        { x: 3, y: 6, f: "fur" }, { x: 4, y: 6, f: "fur" }, { x: 5, y: 6, f: "mouth" }, { x: 6, y: 6, f: "mouth" }, { x: 7, y: 6, f: "mouth" }, { x: 8, y: 6, f: "fur" }, { x: 11, y: 6, f: "fur" }, { x: 12, y: 6, f: "fur" },
        // Kırmızı Tasma & Altın Zil
        { x: 3, y: 7, f: "collar" }, { x: 4, y: 7, f: "collar" }, { x: 5, y: 7, f: "collar" }, { x: 6, y: 7, f: "bell" }, { x: 7, y: 7, f: "collar" }, { x: 8, y: 7, f: "collar" }, { x: 9, y: 7, f: "collar" }, { x: 10, y: 7, f: "collar" },
        // Gövde & Diğer Pati
        { x: 2, y: 8, f: "fur" }, { x: 3, y: 8, f: "fur" }, { x: 4, y: 8, f: "fur" }, { x: 5, y: 8, f: "paw" }, { x: 6, y: 8, f: "paw" }, { x: 7, y: 8, f: "fur" }, { x: 8, y: 8, f: "fur" }, { x: 9, y: 8, f: "fur" }, { x: 10, y: 8, f: "fur" },
        { x: 2, y: 9, f: "fur" }, { x: 3, y: 9, f: "fur" }, { x: 4, y: 9, f: "fur" }, { x: 5, y: 9, f: "fur" }, { x: 6, y: 9, f: "fur" }, { x: 7, y: 9, f: "fur" }, { x: 8, y: 9, f: "fur" }, { x: 9, y: 9, f: "fur" }, { x: 10, y: 9, f: "fur" }, { x: 11, y: 9, f: "fur" },
        { x: 2, y: 10, f: "paw" }, { x: 3, y: 10, f: "paw" }, { x: 4, y: 10, f: "fur" }, { x: 5, y: 10, f: "fur" }, { x: 6, y: 10, f: "fur" }, { x: 7, y: 10, f: "fur" }, { x: 8, y: 10, f: "fur" }, { x: 9, y: 10, f: "fur" }, { x: 10, y: 10, f: "paw" }, { x: 11, y: 10, f: "paw" },
        { x: 3, y: 11, f: "fur" }, { x: 4, y: 11, f: "fur" }, { x: 5, y: 11, f: "fur" }, { x: 6, y: 11, f: "fur" }, { x: 7, y: 11, f: "fur" }, { x: 8, y: 11, f: "fur" }, { x: 9, y: 11, f: "fur" }, { x: 10, y: 11, f: "fur" }
      ]
    },
    {
      id: "baby_blue",
      name: "Buz Mavisi Perisi",
      typeLabel: "Buz Mavisi",
      badge: "💎 BUZ MAVİSİ",
      quote: "Büyük ışıltılı leylak gözleri, pembe burnu ve öne uzattığı patileriyle merakla bakıyor!",
      completeQuote: "✦ GÖREV TAMAMLANDI — BUZ MAVİSİ SENİ KUTSUYOR... ✦",
      theme: {
        primary: "#AFCEFD",
        secondary: "#9F8DEF",
        glow: "0 0 10px rgba(175, 206, 253, 0.85)",
        badgeBg: "rgba(175, 206, 253, 0.22)",
        badgeBorder: "rgba(175, 206, 253, 0.55)",
        badgeColor: "#AFCEFD"
      },
      palette: {
        fur: "#AFCEFD",
        furDark: "#9F8DEF",
        eye: "#7209B7",       // Büyüleyici derin leylak gözler
        nose: "#FF80BF",      // Pastel buz pembesi burun
        mouth: "#F72585",     // Pembe ağız
        ear: "#E0AAFF",       // Leylak kulak içi
        blush: "#E8AEFF",     // Yanak ışıltısı
        whisker: "#E0F2FE",   // Beyaz buz bıyıkları
        paw: "#FFFFFF"        // Beyaz patiler
      },
      cells: [
        // Kulaklar
        { x: 3, y: 2, f: "furDark" }, { x: 11, y: 2, f: "furDark" },
        { x: 2, y: 3, f: "furDark" }, { x: 3, y: 3, f: "ear" }, { x: 4, y: 3, f: "furDark" }, { x: 10, y: 3, f: "furDark" }, { x: 11, y: 3, f: "ear" }, { x: 12, y: 3, f: "furDark" },
        // Baş Tepe
        { x: 2, y: 4, f: "fur" }, { x: 3, y: 4, f: "fur" }, { x: 4, y: 4, f: "fur" }, { x: 5, y: 4, f: "fur" }, { x: 9, y: 4, f: "fur" }, { x: 10, y: 4, f: "fur" }, { x: 11, y: 4, f: "fur" }, { x: 12, y: 4, f: "fur" },
        // Kocaman Leylak Gözler
        { x: 1, y: 5, f: "fur" }, { x: 2, y: 5, f: "fur" }, { x: 3, y: 5, f: "fur" }, { x: 4, y: 5, f: "eye" }, { x: 5, y: 5, f: "eye" }, { x: 6, y: 5, f: "fur" }, { x: 7, y: 5, f: "fur" }, { x: 8, y: 5, f: "fur" }, { x: 9, y: 5, f: "eye" }, { x: 10, y: 5, f: "eye" }, { x: 11, y: 5, f: "fur" }, { x: 12, y: 5, f: "fur" }, { x: 13, y: 5, f: "fur" },
        // Burun, Allık ve Bıyık
        { x: 1, y: 6, f: "whisker" }, { x: 2, y: 6, f: "blush" }, { x: 3, y: 6, f: "fur" }, { x: 4, y: 6, f: "fur" }, { x: 5, y: 6, f: "fur" }, { x: 6, y: 6, f: "fur" }, { x: 7, y: 6, f: "nose" }, { x: 8, y: 6, f: "fur" }, { x: 9, y: 6, f: "fur" }, { x: 10, y: 6, f: "fur" }, { x: 11, y: 6, f: "blush" }, { x: 12, y: 6, f: "whisker" }, { x: 13, y: 6, f: "whisker" },
        // Ağız
        { x: 2, y: 7, f: "whisker" }, { x: 3, y: 7, f: "fur" }, { x: 4, y: 7, f: "fur" }, { x: 5, y: 7, f: "fur" }, { x: 6, y: 7, f: "mouth" }, { x: 7, y: 7, f: "mouth" }, { x: 8, y: 7, f: "mouth" }, { x: 9, y: 7, f: "fur" }, { x: 10, y: 7, f: "fur" }, { x: 11, y: 7, f: "fur" }, { x: 12, y: 7, f: "whisker" },
        // Çene
        { x: 3, y: 8, f: "fur" }, { x: 4, y: 8, f: "fur" }, { x: 5, y: 8, f: "fur" }, { x: 6, y: 8, f: "fur" }, { x: 7, y: 8, f: "fur" }, { x: 8, y: 8, f: "fur" }, { x: 9, y: 8, f: "fur" }, { x: 10, y: 8, f: "fur" }, { x: 11, y: 8, f: "fur" },
        // Gövde Altı
        { x: 4, y: 9, f: "fur" }, { x: 5, y: 9, f: "fur" }, { x: 6, y: 9, f: "fur" }, { x: 7, y: 9, f: "fur" }, { x: 8, y: 9, f: "fur" }, { x: 9, y: 9, f: "fur" }, { x: 10, y: 9, f: "fur" },
        // Öne Uzatılan İki Tatlı Pati (Masa/Kutu Üzerinde)
        { x: 2, y: 10, f: "paw" }, { x: 3, y: 10, f: "paw" }, { x: 11, y: 10, f: "paw" }, { x: 12, y: 10, f: "paw" },
        { x: 2, y: 11, f: "paw" }, { x: 3, y: 11, f: "paw" }, { x: 4, y: 11, f: "paw" }, { x: 10, y: 11, f: "paw" }, { x: 11, y: 11, f: "paw" }, { x: 12, y: 11, f: "paw" }
      ]
    }
  ];

  const $ = id => document.getElementById(id);

  const localDateString = date => {
    const d = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return d.toISOString().slice(0, 10);
  };

  const parseDate = value => {
    if (!value || typeof value !== "string") return new Date();
    const [y, m, d] = value.split("-").map(Number);
    return new Date(y, m - 1, d, 12, 0, 0, 0);
  };

  const addDays = (date, count) => {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + count);
    return copy;
  };

  const formatDate = date => new Intl.DateTimeFormat("tr-TR", {
    day: "numeric", month: "long", year: "numeric"
  }).format(date);

  const makeId = () => "task-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  function getRandomCatId(excludeId = null) {
    const candidates = CAT_MODELS.filter(m => m.id !== excludeId);
    const chosen = candidates[Math.floor(Math.random() * candidates.length)] || CAT_MODELS[0];
    return chosen.id;
  }

  function getCatModel(catId) {
    return CAT_MODELS.find(m => m.id === catId) || CAT_MODELS[0];
  }

  // URL Parametreleri kontrolü
  function getUrlParams() {
    try {
      const params = new URLSearchParams(window.location.search);
      return {
        cat: params.get("cat"),
        start: params.get("start"),
        end: params.get("end"),
        days: params.get("days") ? parseInt(params.get("days"), 10) : null
      };
    } catch (e) {
      return {};
    }
  }

  function freshState(options = {}) {
    const todayStr = localDateString(new Date());
    const startDate = options.startDate || todayStr;
    const daysCount = options.totalDays || 75;
    const endDate = options.endDate || localDateString(addDays(parseDate(startDate), daysCount - 1));
    const catId = options.catId || getRandomCatId(options.excludeCatId);

    return {
      version: 2,
      startDate: startDate,
      endDate: endDate,
      catId: catId,
      tasks: DEFAULT_TASKS.map(task => ({ ...task })),
      completed: {},
      notes: {}
    };
  }

  function loadState() {
    const urlParams = getUrlParams();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        let initialCat = getRandomCatId();
        if (urlParams.cat && urlParams.cat !== "random" && CAT_MODELS.some(m => m.id === urlParams.cat)) {
          initialCat = urlParams.cat;
        }
        let startDate = urlParams.start || localDateString(new Date());
        let endDate = urlParams.end || (urlParams.days ? localDateString(addDays(parseDate(startDate), urlParams.days - 1)) : localDateString(addDays(parseDate(startDate), 74)));
        return freshState({ startDate, endDate, catId: initialCat });
      }

      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.tasks) || !parsed.startDate) {
        return freshState();
      }

      const startDate = parsed.startDate;
      const endDate = parsed.endDate || localDateString(addDays(parseDate(startDate), 74));
      const catId = parsed.catId && CAT_MODELS.some(m => m.id === parsed.catId) ? parsed.catId : getRandomCatId();

      return {
        version: 2,
        startDate: startDate,
        endDate: endDate,
        catId: catId,
        tasks: parsed.tasks.map(t => ({ id: String(t.id), name: String(t.name) })),
        completed: parsed.completed && typeof parsed.completed === "object" ? parsed.completed : {},
        notes: parsed.notes && typeof parsed.notes === "object" ? parsed.notes : {}
      };
    } catch (error) {
      console.warn("Kayıtlar okunamadı; yeni bir başlangıç oluşturuluyor.", error);
      return freshState();
    }
  }

  let state = loadState();

  function getTotalDays() {
    const start = parseDate(state.startDate);
    const end = parseDate(state.endDate);
    const diff = Math.floor((end - start) / 86400000) + 1;
    return Math.max(1, diff);
  }

  function getTodayDayNumber() {
    const start = parseDate(state.startDate);
    const today = parseDate(localDateString(new Date()));
    const totalDays = getTotalDays();
    const day = Math.floor((today - start) / 86400000) + 1;
    return Math.max(1, Math.min(totalDays, day));
  }

  let selectedDay = getTodayDayNumber();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      $("save-status").textContent = "✓ Otomatik kaydedildi";
    } catch (error) {
      $("save-status").textContent = "Kayıt başarısız. Tarayıcı depolama alanını kontrol et.";
    }
  }

  function dateForDay(day) {
    return addDays(parseDate(state.startDate), day - 1);
  }

  function dayKey(day) {
    return String(day);
  }

  function completedIds(day) {
    const list = state.completed[dayKey(day)];
    return Array.isArray(list) ? list : [];
  }

  function isDayComplete(day) {
    if (state.tasks.length === 0) return false;
    const done = new Set(completedIds(day));
    return state.tasks.every(task => done.has(task.id));
  }

  function completedDayCount() {
    const totalDays = getTotalDays();
    let count = 0;
    for (let day = 1; day <= totalDays; day++) {
      if (isDayComplete(day)) count++;
    }
    return count;
  }

  function showToast(message) {
    const toast = $("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    toast.style.opacity = "1";
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => { toast.hidden = true; }, 200);
    }, 2400);
  }

  function renderTasks() {
    const container = $("task-list");
    container.replaceChildren();
    const done = new Set(completedIds(selectedDay));
    $("task-count").textContent = `${state.tasks.filter(task => done.has(task.id)).length} / ${state.tasks.length}`;

    if (state.tasks.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "Henüz hedef yok. Yukarıdan ilk hedefini ekle.";
      container.appendChild(empty);
    }

    state.tasks.forEach(task => {
      const row = document.createElement("div");
      row.className = "task-item" + (done.has(task.id) ? " done" : "");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "task-checkbox";
      checkbox.checked = done.has(task.id);
      checkbox.setAttribute("aria-label", task.name + " tamamlandı");
      checkbox.addEventListener("change", () => toggleTask(task.id, checkbox.checked));

      const name = document.createElement("span");
      name.className = "task-name";
      name.textContent = task.name;
      name.title = "Hedef adını değiştirmek için tıkla";
      name.tabIndex = 0;
      name.setAttribute("role", "button");
      name.setAttribute("aria-label", task.name + " hedefini düzenle");
      const edit = () => {
        const next = prompt("Hedef adını düzenle:", task.name);
        if (next === null) return;
        const trimmed = next.trim();
        if (!trimmed) { alert("Hedef adı boş olamaz."); return; }
        task.name = trimmed.slice(0, 80);
        saveState(); renderAll();
      };
      name.addEventListener("click", edit);
      name.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); edit(); }
      });

      const remove = document.createElement("button");
      remove.className = "delete-task";
      remove.type = "button";
      remove.textContent = "×";
      remove.setAttribute("aria-label", task.name + " hedefini sil");
      remove.addEventListener("click", () => {
        if (!confirm(`"${task.name}" hedefini tüm listeden silmek istiyor musun?`)) return;
        state.tasks = state.tasks.filter(item => item.id !== task.id);
        for (const key of Object.keys(state.completed)) {
          state.completed[key] = state.completed[key].filter(id => id !== task.id);
        }
        saveState(); renderAll();
      });
      row.append(checkbox, name, remove);
      container.appendChild(row);
    });

    const complete = isDayComplete(selectedDay);
    $("completion-hint").hidden = complete;
    $("day-complete-message").hidden = !complete;
  }

  function toggleTask(taskId, checked) {
    const key = dayKey(selectedDay);
    const list = new Set(completedIds(selectedDay));
    if (checked) list.add(taskId); else list.delete(taskId);
    state.completed[key] = [...list];
    saveState();
    renderAll();
  }

  function renderCat() {
    const totalDays = getTotalDays();
    const currentCat = getCatModel(state.catId);
    const catCells = currentCat.cells;
    const theme = currentCat.theme;
    const palette = currentCat.palette || {};

    $("cat-name").textContent = currentCat.name;
    const badgeEl = $("cat-badge");
    badgeEl.textContent = currentCat.badge;
    badgeEl.style.background = theme.badgeBg;
    badgeEl.style.borderColor = theme.badgeBorder;
    badgeEl.style.color = theme.badgeColor;

    $("cat-description").textContent = currentCat.quote || "Küçük adımlarla bir kedi oluşturabilirsinizzz.";

    const grid = $("pixel-cat");
    grid.replaceChildren();

    const doneCount = completedDayCount();

    // Dinamik piksel tamamlama oranı
    let pixelsToFill = 0;
    if (doneCount > 0) {
      if (doneCount >= totalDays) {
        pixelsToFill = catCells.length;
      } else {
        pixelsToFill = Math.max(1, Math.round((doneCount / totalDays) * catCells.length));
      }
    }

    // Yüz özelliklerinin daha erken ve dengeli ortaya çıkması için:
    // Sıralama: Alttan yukarı değil, önce genel siluet, gözler ve yüz belirginleşir!
    // order: y ve x sırasına göre stabil index
    const order = [...catCells].sort((a, b) => a.y - b.y || a.x - b.x);
    const byPosition = new Map(order.map((cell, index) => [`${cell.x},${cell.y}`, { cell, orderNumber: index + 1 }]));

    for (let y = 0; y < 15; y++) {
      for (let x = 0; x < 15; x++) {
        const cell = document.createElement("span");
        cell.className = "pixel";
        const entry = byPosition.get(`${x},${y}`);
        if (!entry) {
          cell.classList.add("decorative");
          cell.setAttribute("aria-hidden", "true");
        } else {
          const { cell: catCell, orderNumber } = entry;
          if (orderNumber <= pixelsToFill) {
            cell.classList.add("active");
            
            // Hücrenin özelliğine (göz, burun, ağız, kulak, allık vb.) göre canlı renk ata
            const feature = catCell.f || "fur";
            let cellColor = palette[feature] || palette.fur || theme.primary;
            let cellGlow = theme.glow;

            // Gözler parıldayan özel göz ışığı alır
            if (feature === "eye") {
              cell.classList.add("pixel-eye");
              cellGlow = `0 0 10px ${cellColor}`;
            } else if (feature === "nose") {
              cell.classList.add("pixel-nose");
            } else if (feature === "mouth") {
              cell.classList.add("pixel-mouth");
            }

            cell.style.background = cellColor;
            cell.style.borderColor = cellColor;
            cell.style.boxShadow = cellGlow;
            cell.title = `Piksel ${orderNumber} / ${catCells.length} (${feature})`;
          } else {
            cell.style.background = "";
            cell.style.borderColor = "";
            cell.style.boxShadow = "";
            cell.title = `Bekleyen Piksel ${orderNumber} / ${catCells.length}`;
          }
        }
        grid.appendChild(cell);
      }
    }

    $("pixel-count").textContent = `${doneCount} / ${totalDays}`;
    $("completed-days").textContent = doneCount;
    $("remaining-days").textContent = Math.max(0, totalDays - doneCount);
    const percent = Math.min(100, Math.round((doneCount / totalDays) * 100));
    $("progress-percent").textContent = `${percent}%`;
    
    // İlerleme çubuğunu kedi rengine uyumlu yap
    const progressBar = $("progress-bar");
    progressBar.style.width = `${percent}%`;
    progressBar.style.background = `linear-gradient(90deg, ${theme.secondary || theme.primary} 0%, ${theme.primary} 100%)`;
    progressBar.style.boxShadow = theme.glow;

    const isComplete = doneCount >= totalDays;
    $("quest-complete-card").hidden = !isComplete;

    if (isComplete) {
      $("cat-footer").textContent = currentCat.completeQuote || "✦ GÖREV TAMAMLANDI — Tebrikler! ✦";
    } else if (doneCount === 0) {
      $("cat-footer").textContent = currentCat.quote || "Küçük adımlarla bir kedi oluşturabilirsinizzz.";
    } else {
      $("cat-footer").textContent = `${totalDays - doneCount} adım sonra kedin tamamlanacak.`;
    }
    $("pixel-cat").setAttribute("aria-label", `${currentCat.name}: ${doneCount} / ${totalDays} gün tamamlandı.`);
  }

  function renderDay() {
    const totalDays = getTotalDays();
    const todayNum = getTodayDayNumber();
    if (selectedDay > totalDays) selectedDay = totalDays;
    if (selectedDay < 1) selectedDay = 1;

    const date = dateForDay(selectedDay);
    $("hero-total-days").textContent = totalDays;
    $("header-total-days").textContent = totalDays;

    $("day-kicker").textContent = `DAY ${String(selectedDay).padStart(2, "0")} / ${totalDays}`;
    $("date-title").textContent = `${selectedDay}. Gün`;
    $("date-subtitle").textContent = formatDate(date);
    $("prev-day").disabled = selectedDay <= 1;
    $("next-day").disabled = selectedDay >= totalDays || selectedDay >= todayNum;
    $("daily-note").value = state.notes[dayKey(selectedDay)] || "";
    $("daily-note").disabled = selectedDay > todayNum;
    $("add-task-form").querySelector("input").disabled = selectedDay > todayNum;
    $("add-task-form").querySelector("button").disabled = selectedDay > todayNum;
  }

  function renderAll() {
    renderDay();
    renderTasks();
    renderCat();
  }

  // Rastgele Kedi Değiştir Butonu
  function switchCatRandomly() {
    const nextCatId = getRandomCatId(state.catId);
    state.catId = nextCatId;
    saveState();
    renderAll();
    const model = getCatModel(nextCatId);
    showToast(`Yeni Kedi Atandı: ${model.badge} 🐾`);
  }

  $("randomize-cat-btn").addEventListener("click", switchCatRandomly);

  // Kedi Bittiğinde Yeni Kediyle Başla
  $("complete-new-cat-btn").addEventListener("click", () => {
    const yes = confirm("Tebrikler! Mevcut serüven bitti. Yeni bir kedi ve yeni başlangıç ile devam etmek istiyor musun? (Önceki kayıtların sıfırlanacaktır)");
    if (!yes) return;
    const nextCat = getRandomCatId(state.catId);
    const days = getTotalDays();
    state = freshState({
      startDate: localDateString(new Date()),
      totalDays: days,
      catId: nextCat
    });
    selectedDay = 1;
    saveState();
    renderAll();
    showToast("Yeni serüven ve yeni kedi başladı! Başarılar 🐾");
  });

  $("complete-share-btn").addEventListener("click", () => {
    openShareDialog();
  });

  $("add-task-form").addEventListener("submit", event => {
    event.preventDefault();
    const input = $("new-task");
    const name = input.value.trim();
    if (!name) return;
    if (state.tasks.length >= 20) { alert("En fazla 20 hedef ekleyebilirsin."); return; }
    state.tasks.push({ id: makeId(), name: name.slice(0, 80) });
    input.value = "";
    saveState(); renderAll();
  });

  $("prev-day").addEventListener("click", () => {
    selectedDay = Math.max(1, selectedDay - 1);
    renderAll();
  });

  $("next-day").addEventListener("click", () => {
    selectedDay = Math.min(getTodayDayNumber(), getTotalDays(), selectedDay + 1);
    renderAll();
  });

  $("daily-note").addEventListener("input", () => {
    state.notes[dayKey(selectedDay)] = $("daily-note").value.slice(0, 500);
    saveState();
  });

  // Ayarlar Modalı
  const dialog = $("settings-dialog");

  function populateCatSelect() {
    const select = $("cat-select");
    select.replaceChildren();
    CAT_MODELS.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m.id;
      opt.textContent = `${m.badge} - ${m.name} (${m.typeLabel})`;
      if (m.id === state.catId) opt.selected = true;
      select.appendChild(opt);
    });
  }

  function updateDurationPreview() {
    const sVal = $("start-date").value;
    const eVal = $("end-date").value;
    if (!sVal || !eVal) return;
    const s = parseDate(sVal);
    const e = parseDate(eVal);
    const diff = Math.floor((e - s) / 86400000) + 1;
    const preview = $("duration-preview");
    if (diff <= 0) {
      preview.textContent = "⚠️ Bitiş tarihi başlangıçtan sonra olmalıdır.";
      preview.style.color = "var(--danger)";
    } else {
      preview.textContent = `Toplam Süre: ${diff} Gün`;
      preview.style.color = "var(--baby-blue)";
    }
  }

  $("settings-open").addEventListener("click", () => {
    $("start-date").value = state.startDate;
    $("end-date").value = state.endDate;
    populateCatSelect();
    updateDurationPreview();
    dialog.showModal();
  });

  $("start-date").addEventListener("input", updateDurationPreview);
  $("end-date").addEventListener("input", updateDurationPreview);

  // Hızlı Süre Preset Butonları (14, 30, 75, 100 Gün)
  document.querySelectorAll(".preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const days = parseInt(btn.dataset.days, 10);
      const sVal = $("start-date").value || state.startDate;
      const start = parseDate(sVal);
      const end = addDays(start, days - 1);
      $("end-date").value = localDateString(end);
      updateDurationPreview();
    });
  });

  $("settings-random-cat-btn").addEventListener("click", () => {
    const current = $("cat-select").value;
    const next = getRandomCatId(current);
    $("cat-select").value = next;
    showToast(`Seçilen Kedi: ${getCatModel(next).name}`);
  });

  $("save-settings").addEventListener("click", () => {
    const sValue = $("start-date").value;
    const eValue = $("end-date").value;
    if (!sValue || !eValue) { alert("Lütfen başlangıç ve bitiş tarihlerini belirle."); return; }
    const s = parseDate(sValue);
    const e = parseDate(eValue);
    if (e < s) { alert("Bitiş tarihi başlangıç tarihinden önce olamaz."); return; }

    state.startDate = sValue;
    state.endDate = eValue;
    state.catId = $("cat-select").value;

    const totalDays = getTotalDays();
    selectedDay = Math.max(1, Math.min(totalDays, getTodayDayNumber()));
    saveState();
    renderAll();
    dialog.close();
    showToast("Ayarlar güncellendi! 🐾");
  });

  $("reset-data").addEventListener("click", () => {
    const yes = confirm("Tüm hedefler, notlar ve ilerleme kalıcı olarak silinecek. Devam edilsin mi?");
    if (!yes) return;
    state = freshState({ excludeCatId: state.catId });
    selectedDay = 1;
    saveState();
    renderAll();
    $("start-date").value = state.startDate;
    $("end-date").value = state.endDate;
    populateCatSelect();
    dialog.close();
    showToast("Tüm veriler sıfırlandı ve yeni kedi atandı.");
  });

  // Veri Yedekleme (Export)
  $("export-data").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `pixel-cat-backup-${localDateString(new Date())}.json`;
    document.body.appendChild(link); link.click(); link.remove();
    URL.revokeObjectURL(url);
    showToast("Yedek JSON dosyası indirildi 📥");
  });

  // Yedeği Geri Yükle (Import)
  const importFile = $("import-file");
  $("import-data-btn").addEventListener("click", () => {
    importFile.click();
  });

  importFile.addEventListener("change", event => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const imported = JSON.parse(e.target.result);
        if (!imported || !Array.isArray(imported.tasks) || !imported.startDate) {
          alert("Geçersiz yedek dosyası formatı.");
          return;
        }
        state = {
          version: 2,
          startDate: imported.startDate,
          endDate: imported.endDate || localDateString(addDays(parseDate(imported.startDate), 74)),
          catId: imported.catId && CAT_MODELS.some(m => m.id === imported.catId) ? imported.catId : getRandomCatId(),
          tasks: imported.tasks.map(t => ({ id: String(t.id), name: String(t.name) })),
          completed: imported.completed && typeof imported.completed === "object" ? imported.completed : {},
          notes: imported.notes && typeof imported.notes === "object" ? imported.notes : {}
        };
        saveState();
        selectedDay = getTodayDayNumber();
        renderAll();
        dialog.close();
        showToast("✓ Yedek başarıyla geri yüklendi!");
      } catch (err) {
        alert("Dosya okunurken bir hata oluştu: " + err.message);
      }
      importFile.value = "";
    };
    reader.readAsText(file);
  });

  // Paylaşım Modalı (Arkadaşa Gönder)
  const shareDialog = $("share-dialog");

  function openShareDialog() {
    const totalDays = getTotalDays();
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?start=${state.startDate}&end=${state.endDate}&cat=random`;

    $("share-preview-dates").textContent = `Başlangıç: ${formatDate(parseDate(state.startDate))} • Toplam: ${totalDays} Gün`;
    $("share-preview-cat").textContent = `🎲 Arkadaşına Rastgele Farklı Bir Kedi Atanır`;
    $("share-url-input").value = shareUrl;
    $("share-copied-toast").hidden = true;

    if (navigator.share) {
      $("native-share-btn").hidden = false;
    } else {
      $("native-share-btn").hidden = true;
    }

    shareDialog.showModal();
  }

  $("share-quest-btn").addEventListener("click", openShareDialog);
  $("share-footer-btn").addEventListener("click", openShareDialog);

  async function copyShareUrl() {
    const input = $("share-url-input");
    try {
      await navigator.clipboard.writeText(input.value);
      $("share-copied-toast").hidden = false;
      showToast("Link kopyalandı! Arkadaşına gönderebilirsin 🐾");
    } catch (err) {
      input.select();
      document.execCommand("copy");
      $("share-copied-toast").hidden = false;
      showToast("Link kopyalandı!");
    }
  }

  $("copy-share-url-btn").addEventListener("click", copyShareUrl);

  $("native-share-btn").addEventListener("click", async () => {
    const url = $("share-url-input").value;
    const totalDays = getTotalDays();
    try {
      await navigator.share({
        title: `${totalDays} Günlük Pixel Cat Meydan Okuması`,
        text: `Benimle bu meydan okumaya katıl! Her gün hedeflerini tamamla ve rastgele piksel kedini ortaya çıkar 🐱✨`,
        url: url
      });
    } catch (err) {
      console.log("Paylaşım iptal edildi veya desteklenmiyor.");
    }
  });

  // Service worker
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(error => console.warn("Offline modu etkinleştirilemedi:", error));
    });
  }

  renderAll();
})();