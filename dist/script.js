//
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
}
);

// running text MASIH EROR
// Fungsi untuk menyalin dan menambahkan elemen
// var waitForDOMContentLoaded = function (callback) {
//   var interval = setInterval(function () {
//     if (document.readyState === "complete") {
//       clearInterval(interval);
//       callback();
//     }
//   }, 10);
// };

// waitForDOMContentLoaded(function () {
//   // Fungsi untuk menyalin dan menambahkan elemen
//   function copyAndAppend() {
//     var logosSlide = document.querySelector(".logos-slide");
//     var copy = logosSlide.cloneNode(true);

//     // Menambahkan elemen baru ke dalam kontainer tanpa menghapus elemen lama
//     document.querySelector(".logos").appendChild(copy);
//   }

//   // Menjalankan fungsi secara berkala dengan setInterval
//   setInterval(copyAndAppend, 1000); // Ganti 1000 dengan interval waktu dalam milidetik yang diinginkan
// });
