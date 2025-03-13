// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Réinitialise l'animation si l'élément sort de la vue
            }
        });
    }, {
        threshold: 0.5 // Déclenche l'animation lorsque 10% de l'élément est visible
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoute une classe spécifique en fonction du type d'animation
                if (entry.target.classList.contains('fade-in')) {
                    entry.target.classList.add('fade-in-visible');
                } else if (entry.target.classList.contains('slide-left')) {
                    entry.target.classList.add('slide-left-visible');
                } else if (entry.target.classList.contains('slide-right')) {
                    entry.target.classList.add('slide-right-visible');
                } else if (entry.target.classList.contains('scale-up')) {
                    entry.target.classList.add('scale-up-visible');
                }
            } else {
                // Réinitialise les animations si l'élément sort de la vue
                entry.target.classList.remove('fade-in-visible', 'slide-left-visible', 'slide-right-visible', 'scale-up-visible');
            }
        });
    }, {
        threshold: 0.5 // Déclenche l'animation lorsque 50% de l'élément est visible
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

// Form validation for the contact form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const emailInput = form.querySelector('input[type="email"]');
            if (!emailInput.value) {
                event.preventDefault(); // Prevent form submission
                alert('Veuillez entrer une adresse email valide.');
            }
        });
    }
});