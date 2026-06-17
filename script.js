const modeBtn = document.getElementById('mode-btn');
const candleTrigger = document.getElementById('candle-trigger');
const giftBox = document.getElementById('gift-box');
const wishText = document.getElementById('wish-text');
const instructionText = document.getElementById('instruction-text');
const bgMusic = document.getElementById('bg-music');
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

let confettiArray = [];
let animationActive = false;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Confetti {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 7 + 4;
        this.color = `hsl(${Math.random() * 360}, 85%, 65%)`;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 3 + 2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

function initConfetti() {
    confettiArray = [];
    for (let i = 0; i < 120; i++) {
        confettiArray.push(new Confetti());
    }
}

function animate() {
    if (!animationActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiArray.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}

// 1. KLIK MULAI PESTA (MASUK MODE GELAP & MUSIK BERPUTAR)
modeBtn.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    modeBtn.classList.add('hidden');
    
    // Putar Musik secara interaktif (Lolos dari blokir browser)
    bgMusic.volume = 0.6; 
    bgMusic.play().catch(error => {
        console.log("Autoplay musik tertahan browser, akan dicoba kembali saat tiup lilin.", error);
    });
    
    // Aktifkan Lilin
    candleTrigger.classList.add('active');
    instructionText.innerHTML = "Sekarang, silakan <strong>klik lilinnya</strong> untuk ditiup! 🕯️✨";
});

// 2. KLIK TIUP LILIN (MATI + EFEK ASAP + KADO MUNCUL)
candleTrigger.addEventListener('click', () => {
    if (candleTrigger.classList.contains('active') && !candleTrigger.classList.contains('candles-off')) {
        candleTrigger.classList.add('candles-off'); // Ini memicu asap di CSS
        
        // Cadangan paksa putar musik jika langkah pertama tadi diblokir sistem browser HP
        bgMusic.play().catch(() => {});

        instructionText.innerText = "Lilin ditiup! Sesuatu muncul di bawah... 🎁";
        
        // Berikan jeda estetika agar animasi asap selesai dulu baru kado muncul
        setTimeout(() => {
            giftBox.classList.remove('hidden');
            instructionText.innerText = "Yaaay! Buka kotak kadomu sekarang 🎁✨";
            
            // Nyalakan hujan confetti
            animationActive = true;
            initConfetti();
            animate();
        }, 1200); 
    }
});

// 3. KLIK KADO (TOGGLE BUKA/TUTUP TEKS UCAPAN)
giftBox.addEventListener('click', () => {
    giftBox.classList.toggle('open');
    if (giftBox.classList.contains('open')) {
        wishText.classList.add('show');
    } else {
        wishText.classList.remove('show');
    }
});
