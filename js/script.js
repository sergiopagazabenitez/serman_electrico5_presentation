// Cuando el usuario se desplaza hacia abajo 20px desde la parte superior del documento, muestra el botón
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// Cuando el usuario hace clic en el botón, se desplaza hacia arriba de la página
function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

function toggleMenu() {
    var menu = document.querySelector('.navbar ul');
    menu.classList.toggle('show');
}