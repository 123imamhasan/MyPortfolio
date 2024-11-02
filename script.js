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