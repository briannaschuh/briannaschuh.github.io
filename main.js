// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.querySelector('body');
    const navbar = document.querySelector('.navbar');
    
    // Get the GitHub icons
    const sDs363GithubIcon = document.getElementById('s-ds363-github-icon');
    const cpsc474GithubIcon = document.getElementById('cpsc474-github-icon');
    const sDs492GithubIcon = document.getElementById('s-ds492-github-icon');
    const portfolioGithubIcon = document.getElementById('portfolio-github-icon');
    const mainGithubIcon = document.getElementById('main-github-icon');
    
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('navbar-dark');
    navbar.classList.toggle('bg-dark');

    // Toggle the GitHub icon sources based on the color mode
    if (body.classList.contains('dark-mode')) {
        sDs363GithubIcon.src = "icons/github-mark-white.png";
        cpsc474GithubIcon.src = "icons/github-mark-white.png";
        sDs492GithubIcon.src  = "icons/github-mark-white.png";
        portfolioGithubIcon.src  = "icons/github-mark-white.png";
        mainGithubIcon.src = "icons/github-mark-white.png";
    } else {
        sDs363GithubIcon.src = "icons/github-mark.png";
        cpsc474GithubIcon.src = "icons/github-mark.png";
        sDs492GithubIcon.src = "icons/github-mark.png";
        portfolioGithubIcon.src = "icons/github-mark.png";
        mainGithubIcon.src = "icons/github-mark.png";
    }
}

// Function to collapse the navbar
function collapseNavbar() {
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
        
    if (navbarToggle && navbarCollapse) {
        navbarCollapse.classList.remove('show');
        navbarToggle.setAttribute('aria-expanded', 'false');
    }
}

// Event listener for the color mode toggle button
const colorModeToggle = document.getElementById('color-mode-toggle');
colorModeToggle.addEventListener('click', toggleDarkMode);

document.getElementById('scroll-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show or hide the arrow based on the user's scroll position
window.addEventListener('scroll', function () {
    var scrollToTop = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});

// Function to toggle collaspe and expand
let isTransitioning = false;
const toggleButtons = document.querySelectorAll('.toggle-btn');
        
toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!isTransitioning) {
            isTransitioning = true;
            setTimeout(() => {
            button.classList.toggle('expanded');
            isTransitioning = false;
            }, 750); // Adjust this value to set the desired delay time (in milliseconds)
        }
    });
});
        
// Scroll to the top of the page when the user refreshes it
window.onload = function() {
    window.requestAnimationFrame(function() {
        window.scrollTo(0, 0);
    });
};
  
// Manage fade for content
document.addEventListener("DOMContentLoaded", function () {
    function applyFadeInEffect() {
        const sections = document.querySelectorAll(".subsection.fade-in");
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;

            if (sectionTop < viewportHeight && sectionBottom > 0) {
                section.classList.add("active");
            }
        });
    }
    applyFadeInEffect();
    window.addEventListener("scroll", applyFadeInEffect);
});

//  Manage fade for headers
document.addEventListener("DOMContentLoaded", function () {
    function applyFadeInEffect() {
        const sections = document.querySelectorAll(".section-font.fade-in");

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;

            if (sectionTop < viewportHeight && sectionBottom > 0) {
                section.classList.add("active");
            }
        });
    }
    applyFadeInEffect();
    window.addEventListener("scroll", applyFadeInEffect);
});