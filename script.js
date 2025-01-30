// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Navigation functionality
    const initNavigation = () => {
        const pageHeader = document.querySelector('.page-header');
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links-container');
        const filterWrapper = document.querySelector('.filter-wrapper');

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            pageHeader.classList.toggle('scrolled', window.scrollY > 0);
        });

        // Hamburger menu toggle
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
                pageHeader.classList.toggle('nav-active');
                filterWrapper?.classList.toggle('hidden');
            });
        }

        // Close hamburger menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger?.contains(e.target) && !navLinks?.contains(e.target)) {
                hamburger?.classList.remove('active');
                navLinks?.classList.remove('active');
                pageHeader.classList.remove('nav-active');
                filterWrapper?.classList.remove('hidden');
            }
        });
    };

    // Catalog functionality
    const initCatalog = () => {
        const categoriesFilter = document.querySelector('.categories-filter');
        const categoriesOverlay = document.querySelector('.categories-overlay');
        const closeBtn = document.querySelector('.categories-modal .close-btn');
        const categoryLinks = document.querySelectorAll('.categories-modal a');

        if (categoriesFilter && categoriesOverlay) {
            // Show overlay when clicking the filter button
            categoriesFilter.addEventListener('click', () => {
                categoriesOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            // Hide overlay when clicking the close button
            closeBtn?.addEventListener('click', () => {
                categoriesOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });

            // Hide overlay when clicking the overlay area
            categoriesOverlay.addEventListener('click', (e) => {
                if (e.target === categoriesOverlay) {
                    categoriesOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            // Handle category selection
            categoryLinks?.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    categoryLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');

                    const filterText = link.querySelector('span')?.textContent;
                    if (filterText && categoriesFilter.querySelector('span')) {
                        categoriesFilter.querySelector('span').textContent = filterText;
                    }

                    categoriesOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }
    };

    // Product details functionality
    const initProductDetails = () => {
        const navLinks = document.querySelector('.nav-links-container');

        // Desktop order form
        const buyNowBtnDesktop = document.querySelector('.buy-now-btn-desktop');
        const desktopOrderFormOverlay = document.querySelector('.desktop-order-form-overlay');
        const closeDesktopOrderFormBtn = document.querySelector('.close-desktop-order-form');
        const desktopOrderFormModal = document.querySelector('.desktop-order-form-modal');

        // Mobile variant selection
        const buyNowBtnMobile = document.querySelector('.buy-now-btn-mobile');
        const mobileVariantSelectionOverlay = document.querySelector('.mobile-variant-selection-overlay');
        const closeVariantModalBtn = document.querySelector('.close-variant-modal');
        const mobileVariantSelectionModal = document.querySelector('.mobile-variant-selection-modal');
        const proceedToOrderBtn = document.querySelector('.proceed-to-order-btn');

        // Mobile order form
        const mobileOrderFormOverlay = document.querySelector('.mobile-order-form-overlay');
        console.log('mobileOrderFormOverlay:', mobileOrderFormOverlay); // Add this line
        const closeMobileOrderFormBtn = document.querySelector('.close-mobile-order-form');
        const mobileOrderFormModal = document.querySelector('.mobile-order-form-modal');

        // Desktop order form handlers
        if (buyNowBtnDesktop && desktopOrderFormOverlay) {
            buyNowBtnDesktop.addEventListener('click', () => {
                desktopOrderFormOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            closeDesktopOrderFormBtn?.addEventListener('click', () => {
                desktopOrderFormOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Mobile variant selection handlers
        if (buyNowBtnMobile && mobileVariantSelectionOverlay) {
            buyNowBtnMobile.addEventListener('click', () => {
                mobileVariantSelectionOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            closeVariantModalBtn?.addEventListener('click', () => {
                mobileVariantSelectionOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
            // For Corry: Come back and understand this shity part of the code again
            proceedToOrderBtn?.addEventListener('click', (e) => {
                e.stopPropagation(); // Add this line to prevent event bubbling
                console.log('Proceed button clicked');
                mobileVariantSelectionOverlay.classList.remove('active');
                mobileOrderFormOverlay.classList.add('active');
                navLinks.classList.add('active');
            });
        }

        // Mobile order form handlers
        if (mobileOrderFormOverlay) {
            closeMobileOrderFormBtn?.addEventListener('click', () => {
                mobileOrderFormOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (desktopOrderFormOverlay &&
                !desktopOrderFormModal?.contains(e.target) &&
                !buyNowBtnDesktop?.contains(e.target)) {
                desktopOrderFormOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            if (mobileVariantSelectionOverlay &&
                !mobileVariantSelectionModal?.contains(e.target) &&
                !buyNowBtnMobile?.contains(e.target)) {
                mobileVariantSelectionOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            if (mobileOrderFormOverlay &&
                !mobileOrderFormModal?.contains(e.target)) {
                mobileOrderFormOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    };

    // Initialize all functionalities
    initNavigation();
    initCatalog();
    initProductDetails();
});