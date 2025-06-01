
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

openModalBtn.onclick = function() {
    modal.style.display = "block";
    color.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
    color.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        color.style.display = "none";
    }}
