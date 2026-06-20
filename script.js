// ISI PESAN UCAPAN
const pesanRomantis = `Haii sayaangg 🌸

ciee udaa legal (percuma uda legal tapi belum bsa naik motorr whehwweh), sayaaang maafin aku yaa akuuu gaa pernahh ajak kamuuu jalan kemanaa manaaa akuu gabisaaa kayaaa orangg orangg di luaarr sanaaa maafiinn akuu 
maafin akuu yaaa kalau aku  selalu bikin kamu marahh, nangisss, keselll maafiin yaaa. akuu jugaa minta maaf kalau akuu seringg marahh marahh kee kamuu
aakuuu sayaanggggggg samaaa kamuuuuuu jadiiiiii diii hari sepesial pake telor ini aku mau ngucapin SELAMAT ULANG TAHUN SAYAANGGGGG semogaaa kaamuuu 
diberi kesehataannn selaluuu, panjaanggg umurnyaaa. ini kadoo dariiii akuuuu semogaaa kaamuuu suukaaa yaaaa sayaangg 
maaafff kalaauuu kadooonyaaa jeleeekkkkk next akuu buaattt yang lebihhh baguss dehh I LOVEEEE UUUUUUUUUUUUUUUUUUU MY LOVEEEEE ❤❤`;

let indexTeks = 0;

function bukaPesan() {
    // 1. Sembunyikan tombol buka
    document.getElementById('tombolBuka').style.display = 'none';
    
    // 2. Tampilkan konten utama ucapan
    document.getElementById('kontenUtama').style.display = 'block';
    
    // 3. Tampilkan tombol kontrol musik melayang
    document.getElementById('btnMusik').style.display = 'block';
    
    // 4. Putar Musik Backsound otomatis
    const musik = document.getElementById('backsound');
    musik.play().catch(error => {
        console.log("Autoplay musik terblokir sistem browser, namun tetap dicoba.");
    });

    // 5. Jalankan efek mengetik otomatis
    mulaiKetik();
    
    // 6. Mulai efek hujan hati/bunga sakura
    setInterval(createHeart, 300);
}

// Fungsi Efek Mengetik
function mulaiKetik() {
    if (indexTeks < pesanRomantis.length) {
        document.getElementById("teksKetik").innerHTML += pesanRomantis.charAt(indexTeks);
        indexTeks++;
        setTimeout(mulaiKetik, 40); // Kecepatan mengetik (40ms per karakter)
    }
}

// Fungsi Membuat Hati Berjatuhan
function createHeart() {
    const container = document.getElementById('heartContainer');
    if (!container) return;

    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    
    // Variasi karakter hiasan romantis
    const items = ['❤️', '💖', '🌸', '✨', '💕', '🌹'];
    heart.innerText = items[Math.floor(Math.random() * items.length)];
    
    // Posisi horizontal acak & ukuran acak
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px'; 
    
    // Durasi jatuh acak (antara 3 sampai 6 detik)
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + 's';
    
    container.appendChild(heart);
    
    // Hapus elemen setelah jatuh agar tidak membebani browser
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Fungsi Membuka Pop-up Gambar (Lightbox)
function perbesarFoto(element) {
    const src = element.getElementsByTagName('img')[0].src;
    document.getElementById("imgPopup").src = src;
    document.getElementById("popupFoto").style.display = "flex";
}

// Fungsi Menutup Pop-up Gambar
function tutupFoto() {
    document.getElementById("popupFoto").style.display = "none";
}

// Fungsi Toggle Mainkan/Hentikan Musik
function toggleMusik() {
    const musik = document.getElementById('backsound');
    const tombol = document.getElementById('btnMusik');
    
    if (musik.paused) {
        musik.play();
        tombol.innerHTML = "🎵 Pause";
        tombol.style.background = "rgba(255, 255, 255, 0.9)";
        tombol.style.color = "#d63384";
        tombol.style.borderColor = "#ff477e";
    } else {
        musik.pause();
        tombol.innerHTML = "🔇 Play";
        tombol.style.background = "#6c757d"; 
        tombol.style.color = "#fff";
        tombol.style.borderColor = "#6c757d";
    }
}
