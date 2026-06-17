const modeBtn = document.getElementById('mode-btn');
const candleTrigger = document.getElementById('candle-trigger');
const giftBox = document.getElementById('gift-box');
const wishText = document.getElementById('wish-text');
const instructionText = document.getElementById('instruction-text');
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
        this.size = Math.random() * 8 + 5;
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        this.speedX = Math.random() * 3 - 1.5;
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
    for (let i = 0; i < 150; i++) {
        confettiArray.push(new Confetti());
    }
}

function animate() {
    if (!animationActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

// 1. LANGKAH PERTAMA: KLIK MODE GELAP
modeBtn.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    modeBtn.classList.add('hidden'); // Sembunyikan tombol setelah diklik
    
    // Aktifkan interaksi lilin
    candleTrigger.classList.add('active');
    instructionText.innerHTML = "Suasana sudah siap! Sekarang, silakan <strong>klik lilinnya</strong> untuk meniup! 🕯️✨";
});

// 2. LANGKAH KEDUA: KLIK TIUP LILIN MATI
candleTrigger.addEventListener('click', () => {
    // Hanya bisa ditiup jika sudah dalam mode gelap (active) dan belum mati
    if (candleTrigger.classList.contains('active') && !candleTrigger.classList.contains('candles-off')) {
        candleTrigger.classList.add('candles-off');
        
        // Ubah instruksi & Munculkan Kotak Kado
        instructionText.innerText = "Yaaay! Lilin berhasil ditiup! Coba klik kadonya 🎁";
        giftBox.classList.remove('hidden');
        
        // Efek Meriah Confetti Berjatuhan
        animationActive = true;
        initConfetti();
        animate();
    }
});

// 3. LANGKAH KETIGA: KLIK KADO UNTUK BUKA/TUTUP TEKS
giftBox.addEventListener('click', () => {
    giftBox.classList.toggle('open');
    
    if (giftBox.classList.contains('open')) {
        wishText.classList.add('show');
    } else {
        wishText.classList.remove('show');
    }
});