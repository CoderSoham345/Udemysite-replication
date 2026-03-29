/**
 * Navigate between Home and Business pages
 * @param {string} page - 'home' or 'business'
 */
function navigateTo(page) {
    const homePage = document.getElementById('home-page');
    const businessPage = document.getElementById('business-page');
    
    // Scroll to top on navigation
    window.scrollTo(0, 0);

    if (page === 'home') {
        homePage.style.display = 'block';
        businessPage.style.display = 'none';
    } else if (page === 'business') {
        homePage.style.display = 'none';
        businessPage.style.display = 'block';
    }
}

/**
 * Toggle Mobile Menu
 */
function toggleMenu() {
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.classList.toggle('active');
    }
}

/**
 * Activate Tab Section
 * @param {string} targetId - ID of the category (unused currently but good for future)
 * @param {HTMLElement} clickedTab - The clicked tab element
 * @param {string} sectionId - The ID of the section to show
 */
function activateTab(targetId, clickedTab, sectionId) {
    // Remove 'active' class from all tabs
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Add 'active' class to clicked tab if provided
    if (clickedTab) {
        clickedTab.classList.add('active');
    }

    // Hide all premium sections
    const sections = document.querySelectorAll('.premium-section');
    sections.forEach(sec => sec.classList.remove('active-section'));

    // Show the target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
    }
}

/**
 * AI Career Slider Logic
 */
let currentSlide = 0;
const track = document.getElementById('reimagine-slider');
const slides = document.querySelectorAll('.testimonial-card');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn'); 

function updateSlider() {
    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        updateSlider();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        updateSlider();
    });
}

/**
 * Initialize: Ensure Home page is visible on load
 */
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});
