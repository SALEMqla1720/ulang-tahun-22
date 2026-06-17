@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400&family=Poppins:wght@300;400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(135deg, #fbc5d8, #ffd6e0, #fbc5d8);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    transition: background 2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mode Gelap Ultra Mewah (Midnight Luxury) */
body.dark-mode {
    background: linear-gradient(135deg, #05050a, #0d0b21, #1a0b2e);
}

#confetti {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

/* --- DEKORASI BALON MEWAH --- */
.balloon-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 2;
}
.balloon {
    position: absolute;
    width: 50px;
    height: 65px;
    border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
    opacity: 0.6;
    animation: floatUp 8s infinite ease-in-out;
}
.b1 { background: #ff477e; left: 10%; animation-delay: 0s; }
.b2 { background: #ffbe0b; left: 25%; animation-delay: 2s; animation-duration: 10s; }
.b3 { background: #7209b7; left: 75%; animation-delay: 1s; }
.b4 { background: #4cc9f0; left: 85%; animation-delay: 3s; animation-duration: 9s; }

/* --- KARTU UTAMA --- */
.card {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    padding: 40px 30px;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.4);
    text-align: center;
    z-index: 10;
    max-width: 420px;
    width: 90%;
    transform: translateY(30px);
    opacity: 0;
    animation: slideUpFade 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
    transition: all 1.5s ease;
}

body.dark-mode .card {
    background: rgba(15, 15, 30, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 50px rgba(255, 183, 3, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.02);
    color: #f8fafc;
}

.title {
    font-family: 'Playfair Display', serif;
    color: #ff477e;
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: -0.5px;
    transition: color 1s;
}
body.dark-mode .title {
    color: #ffd6e0;
    text-shadow: 0 0 10px rgba(255, 214, 224, 0.3);
}

.badge {
    background: #ff477e;
    color: white;
    display: inline-block;
    padding: 2px 14px;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 20px;
    margin-top: -5px;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px rgba(255, 71, 126, 0.3);
}

/* --- KUE --- */
.cake-container {
    position: relative;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 25px;
}
.cake { position: relative; width: 170px; }
.layer { border-radius: 12px 12px 0 0; height: 32px; width: 100%; }
.layer-bottom { background-color: #4a3728; }
.layer-middle { background-color: #d4a373; margin-top: -5px; }
.layer-top { background-color: #fefae0; margin-top: -5px; position: relative; box-shadow: inset 0 -4px 5px rgba(0,0,0,0.05); }

/* --- LILIN & EFEK API PREMIUM --- */
.candle-group {
    position: absolute;
    top: -38px;
    width: 100%;
    height: 40px;
    pointer-events: none;
    transition: cursor 0.3s;
}
.candle-group.active { pointer-events: auto; cursor: pointer; }

.candle {
    background: linear-gradient(to right, #ff4d6d, #ffb3c1, #ff4d6d);
    width: 10px;
    height: 42px;
    position: absolute;
    border-radius: 4px 4px 1px 1px;
}
.c1 { left: 22%; }
.c2 { left: 50%; transform: translateX(-50%); }
.c3 { left: 78%; }

.wick {
    width: 2px;
    height: 7px;
    background: #111;
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
}

/* Api Mewah Multilayer */
.flame {
    position: absolute;
    width: 14px;
    height: 26px;
    top: -31px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(to bottom, #fff 10%, #ffea00 40%, #ff6a00 80%, #ff0055 100%);
    border-radius: 50% 50% 35% 35%;
    box-shadow: 0 0 15px #ff9f1c, 0 0 30px #ff4d6d;
    transform-origin: 50% 90%;
    animation: premiumFlicker 0.1s infinite alternate;
}
.c1 .flame { animation-delay: 0.03s; }
.c2 .flame { animation-duration: 0.13s; }
.c3 .flame { animation-delay: 0.07s; }

/* --- ANIMASI ASAP REALISTIS --- */
.smoke {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: rgba(200, 200, 200, 0.6);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
}

.candles-off .flame { display: none; }
.candles-off .smoke { animation: smokeRise 1.8s ease-out forwards; }

/* --- TOMBOL PREMIUM --- */
.btn-premium {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(45deg, #ff477e, #ff7096);
    color: white;
    border: none;
    padding: 12px 28px;
    font-size: 0.95rem;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.5px;
    box-shadow: 0 8px 20px rgba(255, 71, 126, 0.3);
    transition: all 0.4s ease;
}
.btn-premium:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(255, 71, 126, 0.4);
}
.btn-premium.hidden { display: none; }

.instruction {
    font-size: 0.85rem;
    color: #777;
    margin: 8px 0;
}
body.dark-mode .instruction { color: #94a3b8; }

/* --- KOTAK KADO --- */
.gift-container {
    position: relative;
    width: 75px;
    height: 75px;
    margin: 15px auto;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.gift-container.hidden { opacity: 0; transform: scale(0); height: 0; margin: 0; pointer-events: none; }

.gift-body {
    background: #ff477e;
    width: 100%;
    height: 55px;
    position: absolute;
    bottom: 0;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.gift-body::before {
    content: ''; position: absolute; background: #ffbe0b; width: 14px; height: 100%; left: 50%; transform: translateX(-50%);
}
.gift-cap {
    background: #ff5c8d; width: 83px; height: 20px; position: absolute; top: 0; left: -4px; border-radius: 4px; z-index: 2;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.3);
}
.gift-cap::before {
    content: ''; position: absolute; background: #ffbe0b; width: 14px; height: 100%; left: 50%; transform: translateX(-50%);
}
.gift-container.open .gift-cap { transform: translateY(-35px) rotate(-25px); }

/* --- BOX UCAPAN --- */
.wish-box {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 1s ease, opacity 0.6s ease;
    text-align: center;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 16px;
}
.wish-box h2 { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: #ffd6e0; margin-bottom: 8px;}
.divider { width: 50px; height: 2px; background: #ffbe0b; margin: 10px auto; }
.wish-box p { font-size: 0.95rem; line-height: 1.7; color: #cbd5e1; text-align: justify; }

.wish-box.show { max-height: 400px; opacity: 1; padding: 20px 10px; margin-top: 10px; }

/* --- KEYFRAMES ANIMASI --- */
@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
@keyframes slideUpFade {
    0% { transform: translateY(50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}
@keyframes premiumFlicker {
    0% { transform: translateX(-50%) scale(1) rotate(-1deg); }
    100% { transform: translateX(-50%) scale(1.05) rotate(1.5deg); }
}
@keyframes floatUp {
    0% { transform: translateY(105vh) scale(1); }
    50% { transform: translateY(50vh) scale(1.1) translateX(10px); }
    100% { transform: translateY(-10vh) scale(1); }
}
@keyframes smokeRise {
    0% { opacity: 0; transform: translateX(-50%) translateY(0) scale(1); }
    20% { opacity: 0.5; background: rgba(220, 220, 220, 0.5); }
    50% { width: 12px; height: 12px; transform: translateX(-30%) translateY(-20px) scale(1.5); filter: blur(1px); }
    100% { opacity: 0; transform: translateX(-60%) translateY(-50px) scale(2.5); filter: blur(3px); }
}
