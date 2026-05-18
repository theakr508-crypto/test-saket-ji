w// Jab poori website load ho jaye, tab preloader hatana hai
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // 1500 milliseconds (1.5 seconds) ka delay diya hai taaki loader ache se dikhe
    setTimeout(function() {
        preloader.classList.add('hide-loader');
    }, 1500); 
});