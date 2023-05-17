
const splash = document.querySelector(".splash");
const navLink = document.getElementById("nav-link");


//removing the splash screen after 2 seconds
document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 2000);
});

//showing menu on menu button click
function showMenu() {
    navLink.style.right = "0";
}

//hiding menu on close button click
function hideMenu() {
    navLink.style.right = "-200px";
}

function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("We have received your message and will get back to you as soon as possible.");
    return true;
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function revealLeft() {
    var reveals = document.querySelectorAll(".reveal-left");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function revealRight() {
    var reveals = document.querySelectorAll(".reveal-right");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function animateValue(element, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
        current += increment;
        element.innerText = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.onload = function () {
    var clients = 200;
    var projects = 150;
    var experts = 50;
    var years = 10;

    animateValue(document.getElementById('clientsCount'), 0, clients, 3000);
    animateValue(document.getElementById('projectsCount'), 0, projects, 3000);
    animateValue(document.getElementById('expertsCount'), 0, experts, 3000);
    animateValue(document.getElementById('yearsCount'), 0, years, 3000);
};

window.addEventListener("scroll", revealLeft);
window.addEventListener("scroll", revealRight);
window.addEventListener("scroll", reveal);

