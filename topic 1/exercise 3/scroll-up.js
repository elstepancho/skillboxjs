document.addEventListener('DOMContentLoaded', function() {
    const scrollUpBtn = document.querySelector('.scroll-up-btn');

    function toggleScrollUpBtn() {
        if (window.pageYOffset > 100) {
            scrollUpBtn.style.display = 'block';
        } else {
            scrollUpBtn.style.display = 'none';
        }
    }

    window.addEventListener('scroll', function() {
        toggleScrollUpBtn();
    }, { passive: true });

    scrollUpBtn.addEventListener('click', function() {
        window.scrollTo({ 
            top: 0,
            left: 0,
            behavior: 'smooth' });
    });
});