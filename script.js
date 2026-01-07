// Ambil elemen tombol
const backToTopBtn = document.getElementById('backToTop');

// Fungsi untuk menampilkan/menyembunyikan tombol saat scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        backToTopBtn.classList.add('opacity-0', 'invisible');
        backToTopBtn.classList.remove('opacity-100', 'visible');
    }
});

// Fungsi saat tombol diklik
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
