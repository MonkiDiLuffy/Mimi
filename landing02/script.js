// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');
const floatingCTAs = document.querySelector('.floating-ctas');

function handleScroll() {
    const scrollPosition = window.pageYOffset;
    
    // Show/hide scroll to top button
    if (scrollPosition > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
    
    // Show/hide floating CTAs
    if (scrollPosition > 800) {
        floatingCTAs.classList.add('visible');
    } else {
        floatingCTAs.classList.remove('visible');
    }
}

// Throttle scroll event for better performance
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            handleScroll();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Language menu toggle (optional)
const langBtn = document.querySelector('.lang-btn');
if (langBtn) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        // Add language dropdown functionality here if needed
        console.log('Language menu clicked');
    });
}

// Mobile menu toggle (optional)
const navMenuBtn = document.querySelector('.nav-menu-btn');
if (navMenuBtn) {
    navMenuBtn.addEventListener('click', () => {
        // Add mobile menu functionality here if needed
        console.log('Navigation menu clicked');
    });
}

// Add click tracking for CTA buttons
document.querySelectorAll('.btn, .floating-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const gender = button.classList.contains('btn-male') || button.classList.contains('floating-btn') && button.textContent === 'Male' ? 'male' : 'female';
        console.log(`CTA clicked: ${gender}`);
        // Add analytics tracking here
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe article sections for animations
document.querySelectorAll('.article-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Phone button click handler
const phoneBtn = document.querySelector('.phone-btn');
if (phoneBtn) {
    phoneBtn.addEventListener('click', () => {
        // Can add phone call or modal functionality
        console.log('Phone button clicked');
    });
}

// Help link click handler
const helpLink = document.querySelector('.help-link');
if (helpLink) {
    helpLink.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Help link clicked');
        // Add help modal or redirect functionality
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully');
    handleScroll(); // Check initial scroll position
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Window resized');
        // Add any resize-specific logic here
    }, 250);
});

// Prevent body scroll when modals are open (if needed)
function toggleBodyScroll(disable) {
    if (disable) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Add hover effects for images
document.querySelectorAll('.section-image, .cta-image').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Table of contents highlight on scroll
const sections = document.querySelectorAll('.article-section');
const tocLinks = document.querySelectorAll('.toc a');

function highlightTOC() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    tocLinks.forEach(link => {
        link.style.fontWeight = '400';
        link.style.textDecoration = 'none';
        
        if (link.getAttribute('href') === `#${current}`) {
            link.style.fontWeight = '600';
            link.style.textDecoration = 'underline';
        }
    });
}

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            highlightTOC();
        });
    }
});

// Log page analytics
const pageData = {
    url: window.location.href,
    title: document.title,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    screenSize: `${window.innerWidth}x${window.innerHeight}`
};

console.log('Page Analytics:', pageData);

// Export functions for testing (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        handleScroll,
        toggleBodyScroll,
        highlightTOC
    };
}
