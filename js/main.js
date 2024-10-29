const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value){
  localStorage.setItem('darkmode', value);
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load(){
  const darkmode = localStorage.getItem('darkmode');

  //if the dark mode was never activated
  if(!darkmode){
    store(false);
    icon.classList.add('fa-sun');
  } else if( darkmode == 'true'){ //if the dark mode is activated
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else if(darkmode == 'false'){ //if the dark mode exists but is disabled
    icon.classList.add('fa-sun');
  }
}


load();

btn.addEventListener('click', () => {

  body.classList.toggle('darkmode');
  icon.classList.add('animated');

  //save true or false
  store(body.classList.contains('darkmode'));

  if(body.classList.contains('darkmode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})


    // Inisialisasi Typed.js untuk teks yang muncul
    var typed = new Typed(".text", {
        strings: ["UI/UX Designer", "IT Support", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Event listener untuk hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Menambahkan kelas aktif untuk menampilkan navbar

        // Mengubah ikon menjadi silang
        if (navbar.classList.contains('active')) {
            hamburger.innerHTML = "<i class='bx bx-x'></i>"; // Mengubah ikon menjadi silang
        } else {
            hamburger.innerHTML = "<i class='bx bx-menu-alt-right'></i>"; // Kembali ke ikon hamburger
        }
    });

    // Scroll ke atas
    window.onscroll = function() {
        const topButton = document.querySelector('.top');
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            topButton.classList.add('show');
        } else {
            topButton.classList.remove('show');
        }
    };

    document.querySelector('.top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll halus ke elemen yang dituju
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default dari tautan

            // Ambil target elemen yang sesuai dengan href
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Jika elemen target ada, lakukan scroll halus ke elemen tersebut
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Efek scroll halus
                    block: 'start' // Posisi scroll di bagian atas elemen
                });
            }
        });
    });

 // Fungsi untuk membuka modal
 function openModal(element) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("imgModal");

  // Ambil gambar yang diklik
  modalImg.src = element.querySelector("img").src; 
  modal.style.display = "flex"; // Pastikan display diatur ke flex saat modal dibuka

  setTimeout(function() {
      modal.classList.add("show"); // Tambahkan kelas "show" untuk membuka modal dengan animasi
  }, 10); // Berikan sedikit delay agar transisi bisa dipicu dengan benar
}

// Fungsi untuk menutup modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.classList.remove("show"); // Hapus kelas "show" untuk animasi keluar

  // Tunggu animasi selesai, lalu sembunyikan modal
  setTimeout(function() {
      modal.style.display = "none"; // Sembunyikan modal setelah animasi selesai
  }, 600); // Sesuaikan durasi dengan waktu animasi (0.6s)
}

// Membuat IntersectionObserver untuk setiap elemen
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('active'); // Tambah kelas jika elemen terlihat
      } else {
          entry.target.classList.remove('active'); // Hapus kelas jika elemen keluar dari viewport
      }
  });
}, {
  threshold: 0.5 // Elemen harus 50% terlihat sebelum animasi dipicu
});

// Menerapkan observer ke semua elemen dengan kelas .row
document.querySelectorAll('.project-image').forEach(row => {
  observer.observe(row);
});
  

  // Mendaftarkan elemen yang akan dipantau dari bagian "About"
  const aboutH2 = document.querySelector('.about-text h2');
  const aboutH4 = document.querySelector('.about-text h4');
  const aboutP = document.querySelector('.about-text p');

  observer.observe(aboutH2); // Observasi h2
  observer.observe(aboutH4); // Observasi h4
  observer.observe(aboutP);  // Observasi p

  // Mendaftarkan elemen yang akan dipantau dari bagian "Services"
  const servicesList = document.querySelectorAll('.services-list div'); // Ambil semua div di dalam services-list
  servicesList.forEach(service => {
      observer.observe(service); // Pantau setiap layanan
  });

  // Mendaftarkan elemen yang akan dipantau dari bagian "Skills"
  const skillBoxes = document.querySelectorAll('.skills-list .skill-box'); // Ambil semua skill-box
  skillBoxes.forEach(skill => {
      observer.observe(skill); // Pantau setiap skill
  });

  // Mendaftarkan elemen yang akan dipantau dari bagian "Portfolio"
  const portfolioRows = document.querySelectorAll('.portfolio-grid .project-image'); // Ambil semua row di dalam portfolio
  portfolioRows.forEach(row => {
      observer.observe(row); // Pantau setiap row
  });
  // JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Pilih elemen-elemen yang akan dianimasi
  const aboutImg = document.querySelector('.about-img img');
  const aboutTitle = document.querySelector('.about-text h2');
  const aboutName = document.querySelector('.about-text h4');
  const aboutDesc = document.querySelector('.about-text p');
  const serpis = document.querySelector('.container h1');
  const serpislist = document.querySelector('.services-list');
  const skillTitle = document.querySelector('.container1 h1');
  const skillBoxes = document.querySelectorAll('.skill-box');
  const projectTitle = document.querySelector('.project h1');
  const projectCards = document.querySelectorAll('.project-card');
  const contactH2 = document.querySelector('.contact-text h2');
  const contactH4 = document.querySelector('.contact-text h4');
  const contactP = document.querySelector('.contact-text p');
  const nameText = document.querySelector('.home-content h1');
  const welcomeText = document.querySelector('.home-content h3');
  const socialLinks = document.querySelectorAll('.home-sci a'); // Tambahkan ini
  const descriptionText = document.querySelector('.home-content p');
  const headreah = document.querySelector('.headera h1');
  const timelineContents = document.querySelectorAll('.timeline-content');
  
  

  // Buat Intersection Observer
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
          } else {
              entry.target.classList.remove('animate');
          }
      });
  }, {
      threshold: 0.2
  });

  // Observe elemen yang akan dianimasi
  observer.observe(aboutImg);
  observer.observe(aboutTitle);
  observer.observe(aboutName);
  observer.observe(aboutDesc);
  observer.observe(serpis);
  observer.observe(serpislist);
  observer.observe(skillTitle); // Observe h1 di .container1
  observer.observe(projectTitle);
  observer.observe(contactH2);
  observer.observe(contactH4);
  observer.observe(contactP);
  observer.observe(welcomeText);
  observer.observe(nameText);
  observer.observe(descriptionText);
  observer.observe(headreah);
  observer.observe(document.querySelector('.home-content h2')); // Observasi <h2>

  projectCards.forEach(card => observer.observe(card)); 
  socialLinks.forEach(link => observer.observe(link)); // Observe elemen sosial

  // Observe setiap skill-box
  skillBoxes.forEach(skillBox => observer.observe(skillBox));
  timelineContents.forEach(content => observer.observe(content));

});
