// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');
    const siteParams = document.querySelector('meta[name="site-params"]');
    
    // Create mobile menu container
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Add navigation items
    mobileMenu.innerHTML = navMenu.innerHTML;
    
    // Add phone number at the bottom
    const phoneNumber = '(626) 256-3200';
    const phoneItem = document.createElement('li');
    phoneItem.className = 'nav-item mobile-phone';
    phoneItem.innerHTML = `<a href="tel:${phoneNumber}" class="nav-link phone-link-mobile">
        <span>📞</span> ${phoneNumber}
    </a>`;
    
    // Append phone to the menu
    const menuList = mobileMenu.querySelector('ul') || mobileMenu;
    if (menuList.tagName === 'UL') {
        menuList.appendChild(phoneItem);
    }
    
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