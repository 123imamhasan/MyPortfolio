/* Smooth Scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function resetAnimation() {
    const element = document.getElementById('typing-text');
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.animation = null;
}

setInterval(resetAnimation, 10000); // 10000 milliseconds = 10 seconds 
let activeDot = null;  
let fadeTimeout;

function createOrMoveDot(event) {
    const x = event.clientX;
    const y = event.clientY;

    if (!activeDot) {
        activeDot = document.createElement("div");
        activeDot.classList.add("dot");

        activeDot.style.left = `${x}px`;
        activeDot.style.top = `${y}px`;
        activeDot.style.position = "fixed";

        document.body.appendChild(activeDot);

    } else {
        activeDot.style.left = `${x}px`;
        activeDot.style.top = `${y}px`;
    }

    clearTimeout(fadeTimeout);

    fadeTimeout = setTimeout(() => {
        activeDot.classList.add("fade-out");
        setTimeout(() => {
            activeDot.remove();
            activeDot = null;
        }, 800);
    }, 1500);
}

document.addEventListener("click", createOrMoveDot);