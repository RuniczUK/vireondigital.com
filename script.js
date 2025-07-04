// This file contains JavaScript code for interactivity, such as form validation and handling the Calendly link.

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (validateForm(name, email)) {
            alert('Thank you for your submission, ' + name + '!');
            contactForm.reset();
        } else {
            alert('Please enter a valid name and email address.');
        }
    });

    function validateForm(name, email) {
        const nameValid = name.trim() !== '';
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        return nameValid && emailValid;
    }

    const calendlyButton = document.createElement('a');
    calendlyButton.href = 'https://calendly.com/your-calendly-link'; // Replace with your Calendly link
    calendlyButton.textContent = 'Schedule a Meeting';
    calendlyButton.className = 'calendly-button';
    document.body.appendChild(calendlyButton);
});