document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    form.addEventListener('submit', function(e) {
        if (!document.getElementById('acceptTerms').checked) {
            e.preventDefault();
            alert('Please accept the Privacy Policy and Terms of Service to continue.');
        }
    });
});