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
        const buyNowBtnDesktop = document.querySelector('#buy-now-btn-desktop');
        const desktopOrderFormOverlay = document.querySelector('.desktop-order-form-overlay');
        const closeDesktopOrderFormBtn = document.querySelector('#close-desktop-order-form');
        const desktopOrderFormModal = document.querySelector('.desktop-order-form-modal');

        // Mobile variant selection
        const buyNowBtnMobile = document.querySelector('#buy-now-btn-mobile');
        const mobileVariantSelectionOverlay = document.querySelector('.mobile-variant-selection-overlay');
        const closeVariantModalBtn = document.querySelector('#close-variant-modal');
        const mobileVariantSelectionModal = document.querySelector('.mobile-variant-selection-modal');
        const proceedToOrderBtn = document.querySelector('.proceed-to-order-btn');

        // Mobile order form
        const mobileOrderFormOverlay = document.querySelector('.mobile-order-form-overlay');
        console.log('mobileOrderFormOverlay:', mobileOrderFormOverlay); // Add this line
        const closeMobileOrderFormBtn = document.querySelector('#close-mobile-order-form');
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
                // navLinks.classList.add('active');
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

// Product Images Thumbnail Functionality
const mainImage = document.querySelector('.main-image img');
const thumbnailGrid = document.querySelector('.thumbnail-grid');
const imageCounter = document.querySelector('.image-counter');

if (thumbnailGrid) {
    thumbnailGrid.addEventListener('click', (e) => {
        const clickedThumbnail = e.target.closest('img');
        if (!clickedThumbnail) return;

        // Update main image
        mainImage.src = clickedThumbnail.src;
        mainImage.alt = clickedThumbnail.alt;

        // Update active state
        document.querySelectorAll('.thumbnail-grid img').forEach(thumb => {
            thumb.classList.remove('active');
        });
        clickedThumbnail.classList.add('active');

        // Update image counter
        const thumbnails = document.querySelectorAll('.thumbnail-grid img');
        const currentIndex = Array.from(thumbnails).indexOf(clickedThumbnail) + 1;
        imageCounter.textContent = `${currentIndex}/${thumbnails.length}`;
    });

    // Set initial counter
    const thumbnails = document.querySelectorAll('.thumbnail-grid img');
    imageCounter.textContent = `1/${thumbnails.length}`;
}
// Product Images Slider Functionality
const initImageSlider = () => {
    const slider = document.querySelector('.image-slider');
    const thumbnails = document.querySelectorAll('.thumbnail-grid img');
    const counter = document.querySelector('.image-counter');
    let currentIndex = 0;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let isDragging = false;
    let animationID = 0;

    const setSliderPosition = () => {
        slider.style.transform = `translate3d(${currentTranslate}%, 0px, 0px)`;
    };

    const animation = () => {
        if (isDragging) {
            setSliderPosition();
            requestAnimationFrame(animation);
        }
    };

    const updateCounter = () => {
        counter.textContent = `${currentIndex + 1}/${thumbnails.length}`;
    };

    const updateThumbnails = () => {
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === currentIndex);
        });
    };

    const setPositionByIndex = () => {
        currentTranslate = currentIndex * -100;
        prevTranslate = currentTranslate;
        setSliderPosition();
    };

    const touchStart = (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        animationID = requestAnimationFrame(animation);
        slider.style.cursor = 'grabbing';
    };

    const touchMove = (e) => {
        if (isDragging) {
            const currentX = e.touches[0].clientX;
            const diff = currentX - startX;
            currentTranslate = prevTranslate + (diff / slider.offsetWidth) * 100;
        }
    };

    const touchEnd = () => {
        isDragging = false;
        cancelAnimationFrame(animationID);
        slider.style.cursor = 'grab';

        const movedBy = currentTranslate - prevTranslate;

        // Determine direction and threshold for slide change
        if (Math.abs(movedBy) > 20) {
            if (movedBy < 0 && currentIndex < thumbnails.length - 1) {
                currentIndex += 1;
            } else if (movedBy > 0 && currentIndex > 0) {
                currentIndex -= 1;
            }
        }

        slider.style.transition = 'transform 0.3s ease-out';
        setPositionByIndex();
        updateCounter();
        updateThumbnails();

        setTimeout(() => {
            slider.style.transition = 'none';
        }, 300);
    };

    // Touch events
    slider.addEventListener('touchstart', touchStart);
    slider.addEventListener('touchmove', touchMove);
    slider.addEventListener('touchend', touchEnd);

    // Thumbnail clicks
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentIndex = index;
            slider.style.transition = 'transform 0.3s ease-out';
            setPositionByIndex();
            updateCounter();
            updateThumbnails();
        });
    });

    // Initialize
    updateCounter();
    setPositionByIndex();
};

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initImageSlider();
});
