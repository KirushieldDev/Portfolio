// Fonction pour le défilement fluide
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
        });
    }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        smoothScroll(this.getAttribute("href"));
    });
});

// Fonction pour afficher et fermer les popups
function setupPopup(openButtonId, popupClass) {
    document
        .getElementById(openButtonId)
        .addEventListener("click", function () {
            document.querySelector(popupClass).style.display = "flex";
        });

    document.querySelectorAll(popupClass + " .close").forEach((closeBtn) => {
        closeBtn.addEventListener("click", function () {
            document.querySelector(popupClass).style.display = "none";
        });
    });
}

// Initialisation des popups
setupPopup("pierre-feuille-ciseau", ".popup-pierre-feuille-ciseau");
setupPopup("juste-prix", ".popup-juste-prix");
setupPopup("bac", ".popup-bac");
setupPopup("calculatrice", ".popup-calculatrice");
setupPopup("unesco", ".popup-unesco");
setupPopup("polynome", ".popup-polynome");
setupPopup("qix", ".popup-qix");
setupPopup("silverlove", ".popup-silverlove");
