function toggleLanguage() {
    let currentLang = document.getElementById("language-icon").alt;

    if (currentLang === "English") {
        document.getElementById("title").innerText = "Score Game";
        document.getElementById("subtitle").innerText = "Play the best games here!";
        document.getElementById("game-list-title").innerText = "Game List";
        document.getElementById("qr-title").innerText = "Open on Your Phone";
        document.getElementById("qr-text").innerText = "Scan the QR code for easy access on mobile!";
        document.getElementById("footer-text").innerText = "© 2025 Score Game. All rights reserved.";
        document.getElementById("language-icon").src = "assets/tr-flag.png";
        document.getElementById("language-icon").alt = "Türkçe";
    } else {
        document.getElementById("title").innerText = "Skor Oyun";
        document.getElementById("subtitle").innerText = "En iyi oyunları burada oyna!";
        document.getElementById("game-list-title").innerText = "Oyun Listesi";
        document.getElementById("qr-title").innerText = "Siteyi Telefonundan Aç";
        document.getElementById("qr-text").innerText = "Mobil cihazından kolayca erişmek için QR kodu tara!";
        document.getElementById("footer-text").innerText = "© 2025 Skor Oyun. Tüm hakları saklıdır.";
        document.getElementById("language-icon").src = "assets/usa-flag.png";
        document.getElementById("language-icon").alt = "English";
    }
}
