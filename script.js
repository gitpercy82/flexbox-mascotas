const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.carousel-buttons button:first-child');
const nextButton = document.querySelector('.carousel-buttons button:last-child');

let counter = 0;
const size = images[0].clientWidth;

carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    carousel.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    carousel.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carousel.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
        carousel.style.transition = "none";
        counter = images.length - 2;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (images[counter].id === 'firstClone') {
        carousel.style.transition = "none";
        counter = images.length - counter;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
