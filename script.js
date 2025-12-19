// Ripple Effect
document.querySelectorAll('.ripple-btn').forEach(button => {
    button.addEventListener('click', function (e) {

        const circle = document.createElement('span');
        const diameter = Math.max(this.clientWidth, this.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - this.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${e.clientY - this.getBoundingClientRect().top - radius}px`;

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600);

        // Redirect
        const link = this.getAttribute('data-link');
        if (link) {
            setTimeout(() => {
                window.open(link, '_blank');
            }, 300);
        }
    });
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});
