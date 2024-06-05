document.addEventListener('DOMContentLoaded', () => {
    const mainElements = document.querySelectorAll('main');
    mainElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transition = 'opacity 1s';
        setTimeout(() => {
            el.style.opacity = 1;
        }, 500);
    });
});
