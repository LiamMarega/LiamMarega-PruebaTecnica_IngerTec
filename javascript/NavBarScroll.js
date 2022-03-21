window.addEventListener("scroll", function() {
    var header = document.querySelector(".navbar");
    header.classList.toggle("abajo", window.scrollY > 0)
    header.classList.toggle("navbar-dark", window.scrollY > 0)
})