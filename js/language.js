function toggleLanguage() {
    localStorage.setItem("language", "en");
    updateLanguage();
}

function toggleLanguageTR() {
    localStorage.setItem("language", "tr");
    updateLanguage();
}

function updateLanguage() {
    const language = localStorage.getItem("language") || "tr"; // Varsayılan olarak Türkçe
    if (language === "en") {
        document.getElementById("title").innerText = "Score Game";
        document.getElementById("subtitle").innerText = "Play the best games here!";
        document.getElementById("game-list-title").innerText = "Game List";
        document.getElementById("qr-title").innerText = "Open the Site on Your Phone";
        document.getElementById("qr-text").innerText = "Scan the QR code for quick access!";
        document.getElementById("footer-text").innerText = "© 2025 Score Game. All rights reserved.";

        // Bayrak değiştir
        document.getElementById("language-icon").style.display = "none";
        document.getElementById("language-icon-tr").style.display = "inline-block";

    } else {
        document.getElementById("title").innerText = "Skor Oyun";
        document.getElementById("subtitle").innerText = "En iyi oyunları burada oyna!";
        document.getElementById("game-list-title").innerText = "Oyun Listesi";
        document.getElementById("qr-title").innerText = "Siteyi Telefonundan Aç";
        document.getElementById("qr-text").innerText = "Mobil cihazından kolayca erişmek için QR kodu tara!";
        document.getElementById("footer-text").innerText = "© 2025 Skor Oyun. Tüm hakları saklıdır.";

        // Bayrak değiştir
        document.getElementById("language-icon").style.display = "inline-block";
        document.getElementById("language-icon-tr").style.display = "none";
    }
}

// Sayfa yüklendiğinde dili kontrol et
document.addEventListener("DOMContentLoaded", updateLanguage);
