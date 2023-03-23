// Récupération des éléments HTML
const nav = document.getElementById('sidebar');
const burgerMenu = document.getElementById('burger-menu');

// Ajout d'un événement au clic sur le burger menu
burgerMenu.addEventListener('click', function () {
    // Affichage de la nav
    nav.style.display = 'block';
});

// Ajout d'un événement au clic sur un lien de la nav
nav.addEventListener('click', function (event) {
    // Vérification que le clic a eu lieu sur un lien de la nav
   
    if (event.target.tagName === 'BUTTON') {
        // Vérification de la largeur de l'écran
        if (window.innerWidth <= 800) {
            // Disparition de la nav
            nav.style.display = 'none';
        }
    }
});