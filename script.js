document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".carousel-image");
    let index = 0;

    function showImage() {
        images.forEach(img => img.classList.remove("active")); // Rimuove la classe attiva da tutte le immagini
        images[index].classList.add("active"); // Aggiunge la classe attiva solo all'immagine corrente
        index = (index + 1) % images.length; // Passa all'immagine successiva ciclicamente
    }

    setInterval(showImage, 3000); // Cambia immagine ogni 3 secondi con effetto dissolvenza
});
