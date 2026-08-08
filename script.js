// ==========================================
// BAGIAN: INISIALISASI ELEMEN DOM
// ==========================================
const textElement = document.getElementById('loading-text');
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');

// Array teks yang akan bergantian sesuai permintaan Anda
const stages = ["ASCEND", "X", "AVENOX"];
let i = 0;

// ==========================================
// BAGIAN: FUNGSI UTAMA LOADING SCREEN
// ==========================================
function runLoading() {
    // Menyalakan efek animasi glitch pada teks
    textElement.classList.add('glitch-anim');
    
    // Interval untuk mengganti teks setiap 1 detik (1000 ms)
    let interval = setInterval(() => {
        textElement.innerText = stages[i];
        i++;
        
        // Jika teks sudah mencapai akhir array (setelah AVENOX)
        if (i >= stages.length) {
            clearInterval(interval); // Hentikan perulangan teks
            
            // Jeda 1 detik sebelum loading screen mulai memudar
            setTimeout(() => {
                loadingScreen.style.opacity = '0'; // Efek fade out
                
                // Setelah animasi fade out selesai (0.5 detik), hilangkan elemen loading dan tampilkan konten utama
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    mainContent.style.display = 'block';
                }, 500);
            }, 1000);
        }
    }, 1000);
}

// Menjalankan fungsi otomatis saat halaman selesai dimuat
window.onload = runLoading;

