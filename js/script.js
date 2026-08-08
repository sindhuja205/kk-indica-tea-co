// ================= NAVBAR =================
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = "#0B3D1D";
            navbar.style.transition = "0.4s";
        } else {
            navbar.style.background = "rgba(0,0,0,0.35)";
        }
    }

});

// ================= BACK TO TOP =================
const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (document.documentElement.scrollTop > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

}

// ================= PRELOADER =================
window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.display = "none";
    }

});