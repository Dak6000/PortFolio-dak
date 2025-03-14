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
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Empêcher la soumission par défaut

            // Réinitialiser les messages d'erreur
            clearErrors();

            // Valider les champs
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();

            let isValid = true;

            // Validation du nom
            if (!name) {
                showError('name', 'Veuillez entrer votre nom.');
                isValid = false;
            }

            // Validation de l'email
            if (!email) {
                showError('email', 'Veuillez entrer votre adresse email.');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('email', 'Veuillez entrer une adresse email valide.');
                isValid = false;
            }

            // Validation du message
            if (!message) {
                showError('message', 'Veuillez entrer un message.');
                isValid = false;
            }

            // Si tout est valide, soumettre le formulaire
            if (isValid) {
                alert('Formulaire soumis avec succès !');
                form.submit(); // Soumettre le formulaire
            }
        });
    }

    /**
     * Affiche un message d'erreur sous le champ concerné.
     * @param {string} fieldId - L'ID du champ.
     * @param {string} message - Le message d'erreur.
     */
    function showError(fieldId, message) {
        const field = document.querySelector(`#${fieldId}`);
        const errorElement = document.createElement('div');
        errorElement.className = 'text-red-600 text-sm mt-1';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
    }

    /**
     * Supprime tous les messages d'erreur précédents.
     */
    function clearErrors() {
        const errors = form.querySelectorAll('.text-red-600');
        errors.forEach(error => error.remove());
    }

    /**
     * Valide le format de l'email.
     * @param {string} email - L'adresse email à valider.
     * @returns {boolean} - True si l'email est valide, sinon False.
     */
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

// Ajoutez ce script à la fin de votre fichier HTML ou dans un fichier JS séparé
function checkScreenSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 640) {
        console.log("Mode téléphone activé");
        // Vous pouvez ajouter des modifications dynamiques ici
        // Par exemple, ajouter une classe spécifique ou modifier le contenu
        document.querySelectorAll('.event').forEach(event => {
            event.classList.add('phone-mode');
        });
    } else {
        console.log("Mode ordinateur/tablette activé");
        // Retirer les modifications spécifiques au téléphone
        document.querySelectorAll('.event').forEach(event => {
            event.classList.remove('phone-mode');
        });
    }
}

// Vérifier la taille de l'écran au chargement de la page
window.addEventListener('load', checkScreenSize);

// Vérifier la taille de l'écran lors du redimensionnement de la fenêtre
window.addEventListener('resize', checkScreenSize);