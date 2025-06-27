// Optimized main.js with mobile performance focus
(function() {
    'use strict';
    
    // Detect mobile early
    const isMobile = window.innerWidth <= 768;
    
    // Add mobile class immediately for faster CSS application
    if (isMobile) {
        document.documentElement.classList.add('is-mobile');
    }
    
    // Utility: Debounce function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Optimize font loading for mobile
    if (isMobile && 'fonts' in document) {
        document.fonts.ready.then(function() {
            document.documentElement.classList.add('fonts-loaded');
        });
    }
    
    // Enable animations after page load (desktop only)
    if (!isMobile && 'requestIdleCallback' in window) {
        requestIdleCallback(function() {
            document.body.classList.add('loaded');
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
    } else if (!isMobile) {
        window.addEventListener('load', function() {
            document.body.classList.add('loaded');
        }, { passive: true });
    }
    
    // Sticky Call Button - Optimized with debouncing
    const stickyButton = document.getElementById('stickyCallButton');
    if (stickyButton) {
        const heroSection = document.querySelector('.hero-section');
        let heroBottom = 0;
        
        if (heroSection) {
            heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        }
        
        const handleScroll = debounce(function() {
            const scrollY = window.pageYOffset;
            
            if (heroSection) {
                stickyButton.classList.toggle('show', scrollY > heroBottom - 200);
            } else {
                stickyButton.classList.toggle('show', scrollY > 300);
            }
        }, 10);
        
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    // Footer Area Selector
    document.addEventListener('DOMContentLoaded', function() {
        const areaSelect = document.getElementById('footer-area-select');
        const areaTabs = document.querySelectorAll('.area-tab');
        const prompt = document.getElementById('footer-area-prompt');
        const successMsg = document.getElementById('footer-area-success');
        const allCityLists = document.querySelectorAll('.footer-cities');
        
        function showArea(areaName) {
            // Hide messages
            if (prompt) prompt.style.display = 'none';
            if (successMsg) successMsg.style.display = 'none';
            
            // Hide all city lists
            allCityLists.forEach(list => {
                list.style.display = 'none';
            });
            
            // Show selected area's cities
            if (areaName) {
                const selectedList = document.querySelector(`[data-area="${areaName}"]`);
                if (selectedList) {
                    selectedList.style.display = 'grid';
                    // Show success message
                    if (successMsg) {
                        successMsg.style.display = 'block';
                        successMsg.style.animation = 'fadeIn 0.3s ease';
                    }
                }
            } else {
                // Show prompt if no area selected
                if (prompt) {
                    prompt.style.display = 'flex';
                }
            }
        }
        
        // Desktop dropdown handler
        if (areaSelect) {
            areaSelect.addEventListener('change', function() {
                showArea(this.value);
            });
        }
        
        // Mobile tabs handler
        areaTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Update active state
                areaTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Show corresponding area
                const area = this.getAttribute('data-area');
                showArea(area);
                
                // Update dropdown to match (for consistency)
                if (areaSelect) {
                    areaSelect.value = area;
                }
            });
        });
        
        // Set default to San Gabriel Valley on page load
        showArea('san_gabriel_valley');
        if (areaSelect) {
            areaSelect.value = 'san_gabriel_valley';
        }
    });
    
    // Mobile Menu - Event delegation for better performance
    document.addEventListener('DOMContentLoaded', function() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (!mobileToggle) return;
        
        const navMenu = document.querySelector('.nav-menu');
        const navContainer = document.querySelector('.nav-container');
        
        // Create mobile menu only once
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        
        // Process menu items to handle dropdowns
        const menuItems = Array.from(navMenu.querySelectorAll('li')).map(item => {
            const dropdown = item.querySelector('.dropdown-menu');
            if (dropdown) {
                // For Service Areas, create a special mobile version
                const link = item.querySelector('.nav-link');
                return `
                    <li class="nav-item">
                        <a href="${link.href}" class="nav-link">${link.textContent}</a>
                        <ul class="mobile-submenu">
                            ${Array.from(dropdown.querySelectorAll('a')).map(subLink => 
                                `<li><a href="${subLink.href}" class="nav-link">${subLink.textContent}</a></li>`
                            ).join('')}
                        </ul>
                    </li>
                `;
            } else {
                return `<li class="nav-item">${item.innerHTML}</li>`;
            }
        }).join('');
        
        mobileMenu.innerHTML = `
            <ul class="mobile-nav-menu">
                ${menuItems}
                <li class="nav-item mobile-phone">
                    <a href="tel:6262563200" class="nav-link phone-link-mobile">
                        <span>📞</span> (626) 256-3200
                    </a>
                </li>
            </ul>
        `;
        
        navContainer.appendChild(mobileMenu);
        
        // Single event listener for all clicks
        document.addEventListener('click', function(e) {
            const target = e.target;
            
            // Toggle button click
            if (target.closest('.mobile-menu-toggle')) {
                mobileToggle.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                document.body.classList.toggle('menu-open');
                return;
            }
            
            // Mobile link click or outside click
            if (target.closest('.mobile-menu a') || 
                (!target.closest('.nav-container') && mobileMenu.classList.contains('active'))) {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });
})();