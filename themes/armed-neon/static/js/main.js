// Enable animations after page load
window.addEventListener('load', function() {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Fade in background elements
    const neonGrid = document.querySelector('.neon-grid');
    const heroBugs = document.querySelector('.hero-bugs');
    
    if (neonGrid) {
        neonGrid.style.opacity = '1';
        neonGrid.style.transition = 'opacity 1s ease-in';
    }
    
    if (heroBugs) {
        heroBugs.style.opacity = '1';
        heroBugs.style.transition = 'opacity 1.5s ease-in';
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');
    const siteParams = document.querySelector('meta[name="site-params"]');
    
    // Create mobile menu container
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Create a proper UL element for the menu
    const mobileMenuList = document.createElement('ul');
    mobileMenuList.className = 'mobile-nav-menu';
    
    // Copy navigation items from desktop menu
    const desktopItems = navMenu.querySelectorAll('li');
    desktopItems.forEach(item => {
        const clonedItem = item.cloneNode(true);
        mobileMenuList.appendChild(clonedItem);
    });
    
    // Add phone number at the bottom
    const phoneNumber = '(626) 256-3200';
    const phoneItem = document.createElement('li');
    phoneItem.className = 'nav-item mobile-phone';
    phoneItem.innerHTML = `<a href="tel:${phoneNumber}" class="nav-link phone-link-mobile">
        <span>📞</span> ${phoneNumber}
    </a>`;
    mobileMenuList.appendChild(phoneItem);
    
    // Add the list to the mobile menu
    mobileMenu.appendChild(mobileMenuList);
    navContainer.appendChild(mobileMenu);
    
    // Toggle menu
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navContainer.contains(e.target) && mobileMenu.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});