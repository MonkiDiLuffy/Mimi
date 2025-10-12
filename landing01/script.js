// Close support box
document.querySelector('.support-close').addEventListener('click', function() {
    document.querySelector('.support-box').style.display = 'none';
});

// Gender button click handlers - both link to quiz.html without parameters
document.querySelectorAll('.gender-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Navigate to quiz page without any gender parameter
        window.location.href = 'quiz.html';
    });
});

// Sidebar Menu Functionality
const menuBtn = document.querySelector('.menu-btn');
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');

// Open sidebar
menuBtn.addEventListener('click', function() {
    sidebarMenu.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close sidebar
function closeSidebar() {
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Dropdown functionality
document.querySelectorAll('.menu-item.dropdown').forEach(item => {
    const button = item.querySelector('.menu-link');
    
    button.addEventListener('click', function() {
        // Close other dropdowns
        document.querySelectorAll('.menu-item.dropdown').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('open');
            }
        });
        
        // Toggle current dropdown
        item.classList.toggle('open');
    });
});
