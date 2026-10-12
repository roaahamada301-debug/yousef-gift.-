const pages = document.querySelectorAll(".page");
let currentPage = 0;

/* =========================
   NEXT PAGE (مع صوت التقليب)
========================= */
function nextPage() {
    if (currentPage >= pages.length - 1) {
        return;
    }

    // تشغيل صوت تقليب الورق
    let audio = new Audio('https://www.soundjay.com/misc/sounds/page-turn-1.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio play blocked by browser"));

    pages[currentPage].classList.add("flipped");
    currentPage++;
}

/* =========================
   ENTER ARCHIVE
========================= */
function enterArchive() {
    window.location.href = "archive.html";
}

/* =========================
   TOGGLE MUSIC (مشغل موسيقى يوتيوب BTS - SWIM)
========================= */
let isPlaying = false;
function toggleMusic() {
    const iframe = document.getElementById("bgMusic");
    const btn = document.getElementById("musicToggle");
    
    if (isPlaying) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        btn.innerHTML = "🎵 تشغيل أغنية SWIM";
    } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        btn.innerHTML = "⏸ إيقاف الموسيقى";
    }
    isPlaying = !isPlaying;
}
