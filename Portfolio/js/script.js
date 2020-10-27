const modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal-content");
const trigger = document.querySelectorAll(".gallery-item");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function removeContent() {
    document.querySelector("[data-projectContent]").remove();
}

function windowOnClick(event) {
    if (event.target === modal) {
        removeContent();
        toggleModal();
    }
}


trigger.forEach(item => item.addEventListener("click", () => {
    if (item.dataset.project === 'photobomb') {
        modalContent.insertAdjacentHTML("beforeend",
            '<div class="modal-content__container" data-projectContent = "delete"><div class="modal-img-container"><img class="modal-img" src="img/Photobomb.PNG"></div><div class="modal-text">This project was made on courses from KT.team, which canceled courses due to quarantine : ( Worked on a project using Vue.js, npm, Webpack and others.</div> </div>');
    } else if (item.dataset.project === 'tsekh') {
        modalContent.insertAdjacentHTML("beforeend", '<p data-projectContent = "delete">Привет</p>');
    }
    toggleModal();
}));

closeButton.addEventListener("click", () => {
    toggleModal();
    removeContent();
});

window.addEventListener("click", windowOnClick);