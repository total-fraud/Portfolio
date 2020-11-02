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
            '<div class="modal-content__container" data-projectContent = "delete"><div class="modal-text"><a href="https://total-fraud.github.io/" class="project-link" target="_blank">Photobomb</a><br>This project was made on courses from KT.team, which canceled courses due to quarantine : ( Worked on a project using Vue.js, npm, Webpack and others. Main page and profile page were made</div><div class="modal-img-container"><img class="modal-img" src="img/Photobomb.PNG"></div> </div>');
    } else if (item.dataset.project === 'tsekh') {
        modalContent.insertAdjacentHTML("beforeend",
            '<div class="modal-content__container" data-projectContent = "delete"><div class="modal-text"><a href="./projects/tsekh-design/index.html" class="project-link" target="_blank">Tsekh</a><br>Home page of design studio Tsekh. Made according to a template from Figma.</div><div class="modal-img-container"><img class="modal-img" src="img/tsekh.PNG"></div></div>');
    } else if (item.dataset.project === 'drum') {
        modalContent.insertAdjacentHTML("beforeend",
            '<div class="modal-content__container" data-projectContent = "delete"><div class="modal-text"><a href="./projects/01drum/index.html" class="project-link" target="_blank">Drum machine</a><br>Wow! It&#39;s a drum machine. Worked with audio in JS for the first time.</div><div class="modal-img-container"><img class="modal-img" src="img/1drum-machine.PNG"></div></div> ');
    } else if (item.dataset.project === 'clock') {
        modalContent.insertAdjacentHTML("beforeend",
            '<div class="modal-content__container" data-projectContent = "delete"><div class="modal-text"><a href="./projects/02clock/index.html" class="project-link" target="_blank">Clock</a><br>Wow! It&#39;s a ticking clock. </div><div class="modal-img-container"><img class="modal-img" src="img/2clock.png"></div></div> ');
    } else if (item.dataset.project === 'var') {
        modalContent.insertAdjacentHTML("beforeend",
            '<div class="modal-content__container" data-projectContent = "delete"><div class="modal-text"><a href="./projects/03variables/index.html" class="project-link" target="_blank">CSS variables</a><br>Wow! It&#39;s a CSS variables without a SASS, and JS can change it. SASS? Who need&#39;s it?</div><div class="modal-img-container"><img class="modal-img" src="img/3css-variables-inter.png"></div></div> ');
    } else if (item.dataset.project === 'array') {
        modalContent.insertAdjacentHTML("beforeend",
            '<div class="modal-content__container" data-projectContent = "delete"><div class="modal-text"><a href="./projects/04array/index.html" class="project-link" target="_blank">Array methods </a><br>Wow! It&#39;s a bunch of array methods and tasks with them, such as sorting data.</div><div class="modal-img-container"><img class="modal-img" src="img/4array-methods.png"></div></div>');
    } else if (item.dataset.project === 'flex-gallery') {
        modalContent.insertAdjacentHTML("beforeend",
            '<div class="modal-content__container" data-projectContent = "delete"><div class="modal-text"><a href="./projects/05flex/index.html" class="project-link" target="_blank">Flex gallery</a><br>Wow! It&#39;s a gallery or should I say art? So smooth, so beautiful.</div><div class="modal-img-container"><img class="modal-img" src="img/5flex-gallery.png"></div></div>');
    } else if (item.dataset.project === 'ajax') {
        modalContent.insertAdjacentHTML("beforeend",
            '<div class="modal-content__container" data-projectContent = "delete"><div class="modal-text"><a href="./projects/06ajax/index.html" class="project-link" target="_blank">USA city list</a><br>Wow! It&#39;s a list of good amount of american city&#39;s and state&#39;s, with amount of living, look&#39;s neat. Used AJAX and JSON with fetch().</div><div class="modal-img-container"><img class="modal-img" src="img/6ajax.png"></div></div>');
    }
    toggleModal();
}));

closeButton.addEventListener("click", () => {
    toggleModal();
    removeContent();
});

window.addEventListener("click", windowOnClick);