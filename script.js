
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

// document.addEventListener('DOMContentLoaded', () => {
//     // ... existing code ...

//     // Add categories toggle functionality
//     const categoriesToggle = document.querySelector('.categories-toggle');
//     const categoriesOverlay = document.querySelector('.categories-overlay');

//     if (categoriesToggle && categoriesDropdown) {
//         categoriesToggle.addEventListener('click', () => {
//             categoriesOverlay.classList.toggle('active');
//         });

//         // Close dropdown when clicking outside
//         document.addEventListener('click', (event) => {
//             if (!categoriesToggle.contains(event.target) && !categoriesOverlay.contains(event.target)) {
//                 categoriesOverlay.classList.remove('active');
//             }
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    // Get all the elements we need
    const categoriesToggle = document.querySelector('.categories-toggle');
    const categoriesOverlay = document.querySelector('.categories-overlay');
    const closeBtn = document.querySelector('.categories-modal .close-btn');
    const categoryLinks = document.querySelectorAll('.categories-modal a');

    if (categoriesToggle && categoriesOverlay) {
        // Show overlay when clicking the toggle button
        categoriesToggle.addEventListener('click', () => {
            categoriesOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent page scrolling
        });

        // Hide overlay when clicking the close button
        closeBtn.addEventListener('click', () => {
            categoriesOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Allow page scrolling again
        });

        // Hide overlay when clicking the overlay area itself
        categoriesOverlay.addEventListener('click', () => {
            categoriesOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Allow page scrolling again
        });

        // Handle clicking on category links
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent the link from navigating
                
                // Remove active class from all links
                categoryLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Update the toggle button text to show selected category
                categoriesToggle.querySelector('span').textContent = 
                    link.querySelector('span').textContent;
                
                // Hide the overlay
                categoriesOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Allow page scrolling again
            });
        });
    }
});