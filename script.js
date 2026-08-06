/* =======================================================
   ASCEND CHAMPIONSHIP
   script.js
   ======================================================= */


/* =======================================================
   🟢 EDIT DI SINI - TANGGAL EVENT
   Format:
   Tahun, Bulan-1, Tanggal, Jam, Menit, Detik
   Contoh:
   2026,10,15 = 15 November 2026
   hapus // untuk aktifkan
   ======================================================= */

const eventDate = new Date(0000,0,0,0,0,0).getTime();


/* =======================================================
   🔴 COUNTDOWN
   ======================================================= */

const countdown = setInterval(()=>{

const now = new Date().getTime();

const distance = eventDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;

if(distance<0){

clearInterval(countdown);

document.getElementById("countdown").innerHTML="<h2>COOMING SOON</h2>";

}

},1000);
 


/* =======================================================
   🔴 LOADING SCREEN
   ======================================================= */

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.style.display="none";

},600);

},3000);

});



/* =======================================================
   🔴 NAVBAR SCROLL EFFECT
   ======================================================= */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.75)";

header.style.backdropFilter="blur(18px)";

}else{

header.style.background="rgba(0,0,0,.35)";

}

});



/* =======================================================
   🔴 HERO PARALLAX
   ======================================================= */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero-content");

if(hero){

hero.style.transform=`translateY(${window.scrollY*-0.18}px)`;

}

});



/* =======================================================
   🔴 SCROLL ANIMATION
   ======================================================= */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.register-box,.match,.faq-item,.hero-content").forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});

// Fungsi untuk membuka modal
function openModal(imageSrc) {
    const modal = document.getElementById('lineupModal');
    const modalImg = document.getElementById('lineupImg');

    modalImg.src = imageSrc; // Memasukkan link gambar ke dalam img tag
    modal.style.display = 'flex'; // Menampilkan modal
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('lineupModal');
    modal.style.display = 'none'; // Menyembunyikan modal
}

// Opsional: Menutup modal jika user mengklik area gelap di luar gambar
window.onclick = function(event) {
    const modal = document.getElementById('lineupModal');
    if (event.target === modal) {
        closeModal();
    }
}

 // ==========================================
    // DATA STAFF (GAMPANG DITAMBAH / DIEDIT)
    // ==========================================
    const staffList = [
      {
        name: "NAIN VANCE",
        role: "Owner / Head Admin",
        avatar: "nainn.jpg", // Gantilah sesuai lokasi & nama foto staff
        roblox: "@9ineverse",
        joined: "AGUSTUS 2026",
        events: "5+ Event",
        status: "Active",
        discord: "@jvstnine",
        instagram: "SECRET",
        tiktok: "https://tiktok.com/@nainsan_"
      },
      {
        name: "CESHI",
        role: "WAKIL OWNER",
        avatar: "cess.jpg",
        roblox: "@alexiciusbro",
        joined: "AGUSTUS 2023",
        events: "3 Event",
        status: "Active",
        discord: "",
        instagram: "",
        tiktok: ""
      }
    ];

    // Fungsi Render Kartu Staff
    function renderStaffSlider() {
      const wrapper = document.getElementById('staffWrapper');
      if (!wrapper) return;
      wrapper.innerHTML = '';

      staffList.forEach((staff, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
          <div class="staff-card" onclick="openStaffModal(${index})">
            <div class="avatar-frame">
              <img src="${staff.avatar}" class="avatar-img" alt="${staff.name}">
            </div>
            <div class="staff-name">${staff.name}</div>
            <div class="staff-role">${staff.role}</div>
            <div class="tap-hint">📊 Tap Stats & Sosmed</div>
          </div>
        `;
        wrapper.appendChild(slide);
      });
    }

    // Jalankan Render
    renderStaffSlider();

    // Inisialisasi Slider Slide Kanan / Kiri
    var staffSwiper = new Swiper(".myStaffSwiper", {
      slidesPerView: 1,
      spaceBetween: 15,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 25 }
      }
    });

    // Fungsi Buka Pop-up Modal Stats & Sosmed
    function openStaffModal(index) {
      const data = staffList[index];
      document.getElementById('mAvatar').src = data.avatar;
      document.getElementById('mName').innerText = data.name;
      document.getElementById('mRole').innerText = data.role;
      document.getElementById('mRoblox').innerText = data.roblox;
      document.getElementById('mJoined').innerText = data.joined;
      document.getElementById('mEvents').innerText = data.events;
      document.getElementById('mStatus').innerText = data.status;

      const sosmedBox = document.getElementById('mSosmed');
      sosmedBox.innerHTML = '';

      if (data.discord) sosmedBox.innerHTML += `<a href="${data.discord}" target="_blank" class="sosmed-btn">💬 Discord</a>`;
      if (data.instagram) sosmedBox.innerHTML += `<a href="${data.instagram}" target="_blank" class="sosmed-btn">📸 Instagram</a>`;
      if (data.tiktok) sosmedBox.innerHTML += `<a href="${data.tiktok}" target="_blank" class="sosmed-btn">🎵 TikTok</a>`;

      document.getElementById('staffModal').style.display = 'flex';
    }

    // Fungsi Tutup Pop-up
    function closeStaffModal() {
      document.getElementById('staffModal').style.display = 'none';
    }

    // Tutup Pop-up jika klik di luar kotak
    window.onclick = function(e) {
      const modal = document.getElementById('staffModal');
      if (e.target === modal) closeStaffModal();
    }

