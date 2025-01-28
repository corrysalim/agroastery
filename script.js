// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const pageHeader = document.querySelector('.page-header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links-container');
    const categoriesFilter = document.querySelector('.categories-filter'); // Updated selector
    const categoriesOverlay = document.querySelector('.categories-overlay');
    const closeBtn = document.querySelector('.categories-modal .close-btn');
    const categoryLinks = document.querySelectorAll('.categories-modal a');
    const filterWrapper = document.querySelector('.filter-wrapper');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            pageHeader.classList.add('scrolled');
        } else {
            pageHeader.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            pageHeader.classList.toggle('nav-active'); // Add this line

            // Hide/show filter wrapper when hamburger menu is active
            if (filterWrapper) {
                filterWrapper.classList.toggle('hidden');
            }
        });
    }

    // Categories functionality
    if (categoriesFilter && categoriesOverlay) {  // Updated condition
        // Show overlay when clicking the filter button
        categoriesFilter.addEventListener('click', () => {  // Updated listener
            categoriesOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Hide overlay when clicking the close button
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                categoriesOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Allow page scrolling again
            });
        }

        // Hide overlay when clicking the overlay area
        categoriesOverlay.addEventListener('click', (e) => {
            if (e.target === categoriesOverlay) {
                categoriesOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Handle category selection
        if (categoryLinks) {
            categoryLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();

                    // Remove active class from all links
                    categoryLinks.forEach(l => l.classList.remove('active'));

                    // Add active class to clicked link
                    link.classList.add('active');

                    // Update filter button text
                    if (categoriesFilter.querySelector('span')) {
                        categoriesFilter.querySelector('span').textContent =
                            link.querySelector('span').textContent;
                    }

                    // Hide overlay
                    categoriesOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }
    }

    // Close menus when clicking outside
    document.addEventListener('click', (e) => {
        // Close hamburger menu when clicking outside
        if (!hamburger?.contains(e.target) && !navLinks?.contains(e.target)) {
            hamburger?.classList.remove('active');
            navLinks?.classList.remove('active');
            pageHeader.classList.remove('nav-active'); // Add this line
            if (filterWrapper) {
                filterWrapper.classList.remove('hidden');
            }
        }

        // Close categories overlay when clicking outside
        if (categoriesOverlay &&
            !categoriesFilter?.contains(e.target) &&  // Updated condition
            !categoriesOverlay?.contains(e.target)) {
            categoriesOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});