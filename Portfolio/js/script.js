let modal = document.querySelector(".modal");
const trigger = document.querySelectorAll(".gallery-item");
const closeButton = document.querySelector(".close-button");



function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {

        toggleModal();
    }
}

function projectContent() {
}

trigger.forEach(item => item.addEventListener("click", toggleModal));
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);