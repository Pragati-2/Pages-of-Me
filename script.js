document.addEventListener('DOMContentLoaded', () => {
    const bullets = document.querySelectorAll('.bullet-point');
    const bullets1 = document.querySelectorAll('.bullet-point1');

    const slideInOnScroll = () => {
        [...bullets, ...bullets1].forEach(bullet => {
            const rect = bullet.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                bullet.classList.add('slide-in');
            }
        });
    };

    window.addEventListener('scroll', slideInOnScroll);
    slideInOnScroll(); // Trigger once on load
});
