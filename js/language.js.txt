// Türkçe ve İngilizce metinleri tanımlıyoruz
const translations = {
    tr: {
        title: "Skor Oyun",
        subtitle: "En iyi oyunları burada oyna!",
        "game-list-title": "Oyun Listesi",
        "qr-title": "Siteyi Telefonundan Aç",
        "qr-text": "Mobil cihazından kolayca erişmek için QR kodu tara!",
        "footer-text": "&copy; 2025 Skor Oyun. Tüm hakları saklıdır."
    },
    en: {
        title: "Score Game",
        subtitle: "Play the best games here!",
        "game-list-title": "Game List",
        "qr-title": "Open the Site on Your Phone",
        "qr-text": "Scan the QR code to access easily from your mobile device!",
        "footer-text": "&copy; 2025 Score Game. All rights reserved."
    }
};

// Varsayılan dil Türkçe
let currentLanguage = "tr";

// Dil değiştirme fonksiyonu
function toggleLanguage() {
    currentLanguage = currentLanguage === "tr" ? "en" : "tr";

    // Sayfadaki metinleri değiştir
    document.getElementById("title").innerText = translations[currentLanguage].title;
    document.getElementById("subtitle").innerText = translations[currentLanguage].subtitle;
    document.getElementById("game-list-title").innerText = translations[currentLanguage]["game-list-title"];
    document.getElementById("qr-title").innerText = translations[currentLanguage]["qr-title"];
    document.getElementById("qr-text").innerText = translations[currentLanguage]["qr-text"];
    document.getElementById("footer-text").innerHTML = translations[currentLanguage]["footer-text"];
}
