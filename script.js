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

//udhuddudjdfdufjfuf
function createDot(event) {
    // ক্লিকের পজিশন ডিটেক্ট করা
const x = event.clientX;
const y = event.clientY;

// একটি নতুন ডট তৈরি করা
const dot = document.createElement("div");
dot.classList.add("dot");
dot.style.left = `${x}px`;
dot.style.top = `${y}px`;

// ডটের পজিশন ফিক্সড করা
dot.style.position = "fixed";

document.body.appendChild(dot);

    // বডিতে ডটটি যোগ করা
    document.body.appendChild(dot);

    // কিছুক্ষণ পর মিলিয়ে যাওয়ার ক্লাস যোগ করা
    setTimeout(() => {
        dot.classList.add("fade-out");
    }, 100);

    // ৮০০ms পর ডটটি মুছে ফেলা হবে, তবে এ বার DOM ক্লিন করার জন্য রিমুভ করা হবে
    setTimeout(() => {
        dot.remove();
    }, 900);
}