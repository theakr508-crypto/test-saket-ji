// Jab poori website load ho jaye, tab preloader hatana hai
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // 1500 milliseconds (1.5 seconds) ka delay diya hai taaki loader ache se dikhe
    setTimeout(function() {
        preloader.classList.add('hide-loader');
    }, 1500); 
});
// ==========================================
// 🚀 ALL BUTTONS JAVASCRIPT LOGIC 🚀
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. RIPPLE EFFECT FOR ALL BUTTONS
    const allButtons = document.querySelectorAll('.btn-red, .btn-dark, .btn-outline-white, .map-btn');

    allButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Button ki position nikalna
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;

            // Wave (Ripple) banana
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.classList.add('ripple');
            this.appendChild(ripples);

            // 0.6 second baad wave ko delete karna taaki code bhari na ho
            setTimeout(() => {
                ripples.remove();
            }, 600);
        });
    });

    // 2. PREVENT EMPTY LINKS & ADD SMOOTH SCROLL
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Agar link khali '#' hai, toh page ko upar jump karne se rokna
            if (href === '#') {
                e.preventDefault();
            } 
            // Agar link kisi dusre section ka hai (jaise #services), toh smooth scroll karna
            else if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});