
// Add overlay to navbar when start Y scrolling
// Wait for the DOM to be fully loaded before running any code
document.addEventListener('DOMContentLoaded', () => {
    // Find the nav element in the document
    const pageheader = document.querySelector('.page-header');

    // Listen for scroll events on the window
    window.addEventListener('scroll', () => {
        // window.scrollY tells us how many pixels we've scrolled from the top
        if (window.scrollY > 0) {  // If we've scrolled at all (more than 0 pixels)
            pageheader.classList.add('scrolled');  // Add the 'scrolled' class to nav
        } else {  // If we're at the top (0 pixels scrolled)
            pageheader.classList.remove('scrolled');  // Remove the 'scrolled' class
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links-container');
    const nav = document.querySelector('nav');


    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        nav.classList.toggle('active');
    });
    // Add event handler for categories-toggle button
    document.addEventListener('DOMContentLoaded', () => {
        const categoriesToggle = document.querySelector('.categories-toggle');
        const categoriesDropdown = document.querySelector('.categories-dropdown');

        if (categoriesToggle && categoriesDropdown) {
            categoriesToggle.addEventListener('click', () => {
                categoriesDropdown.classList.toggle('active');
            });
        }
    });
});