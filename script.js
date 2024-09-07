
const Button = document.querySelector('.toggle-button');
const nav = document.querySelector('.nav');

Button.addEventListener('click', function () {
    nav.classList.toggle('show-nav');
});


let currentSlideIndex = {};

function initializeSliders() {

    currentSlideIndex['feature-slider'] = 0;
    currentSlideIndex['article-slider'] = 0;
}

function showSlide(sliderClass, index) {
    const slides = document.querySelector(`.${sliderClass} .slides`);
    const totalSlides = document.querySelectorAll(`.${sliderClass} .slide`).length;

    if (index >= totalSlides) {
        currentSlideIndex[sliderClass] = 0;
    } else if (index < 0) {
        currentSlideIndex[sliderClass] = totalSlides - 1;
    } else {
        currentSlideIndex[sliderClass] = index;
    }

    const offset = -currentSlideIndex[sliderClass] * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function prevSlide(sliderClass) {
    showSlide(sliderClass, currentSlideIndex[sliderClass] - 1);
}

function nextSlide(sliderClass) {
    showSlide(sliderClass, currentSlideIndex[sliderClass] + 1);
}


window.onload = initializeSliders;


const sentences = [
    "Welcome to ToolAlchemy!",
    "Explore a world of tools and resources.",
    "We hope you find something useful.",
    "Did you enjoy using our platform?",
    "Feel free to reach out if you need help.",
    "Your feedback helps us improve.",
    "Discover new possibilities with ToolAlchemy.",
    "Thank you for visiting!",
    "Share ToolAlchemy with your friends!",
    "We're here to support your journey."
];

let currentIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const pauseDuration = 3000;
const changingTextElement = document.getElementById("changingText");


function typeCharacter() {
    const sentence = sentences[currentIndex];


    if (charIndex < sentence.length) {
        changingTextElement.textContent += sentence.charAt(charIndex);
        charIndex++;
    } else {

        clearInterval(typingInterval);


        setTimeout(() => {
            changingTextElement.textContent = '';
            charIndex = 0;
            currentIndex = (currentIndex + 1) % sentences.length;
            typingInterval = setInterval(typeCharacter, typingSpeed);
        }, pauseDuration);
    }
}


let typingInterval = setInterval(typeCharacter, typingSpeed);

document.addEventListener('DOMContentLoaded', function () {


    const toggleButton = document.getElementById("night-mode-toggle");
    const body = document.body;


    toggleButton.addEventListener('click', () => {

        body.classList.toggle('night-mode');


        if (body.classList.contains('night-mode')) {
            toggleButton.textContent = '☀️';
        } else {
            toggleButton.textContent = '🌙';
        }
    });

    document.querySelectorAll('.toggle-button1').forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const resourceItems = document.getElementById(targetId);


            if (resourceItems.style.display === 'none' || resourceItems.style.display === '') {
                resourceItems.style.display = 'flex';
                arrow.textContent = '▲';
            } else {
                resourceItems.style.display = 'none';
                arrow.textContent = '▼';
            }
        });
    });

    document.querySelectorAll('.qbbutton').forEach(button => {
        button.addEventListener('click', function () {

            const qbitem = this.closest('h2, h3,h4').nextElementSibling;


            if (qbitem.style.display === 'none' || qbitem.style.display === '') {
                qbitem.style.display = 'block';
            } else {
                qbitem.style.display = 'none';
            }
        });
    });

    function updateClock() {
        const clockElement = document.getElementById('clock');
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        let amPm = 'AM';


        if (hours >= 12) {
            amPm = 'PM';
            if (hours > 12) {
                hours -= 12;
            }
        }

        const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
        clockElement.textContent = timeString;
    }

    setInterval(updateClock, 1000);
    updateClock();


    const slide = document.querySelector('.testimonial-slide');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function showTestimonial(index) {
        const slideWidth = testimonials[0].clientWidth;
        slide.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
        showTestimonial(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
        showTestimonial(currentIndex);
    });


    setInterval(() => {
        nextBtn.click();
    }, 9000);


});
