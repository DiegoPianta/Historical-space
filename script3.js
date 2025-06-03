function openModal(imgElement) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = imgElement.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
