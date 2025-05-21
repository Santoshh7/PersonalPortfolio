// Add decorative elements to section headings
document.addEventListener('DOMContentLoaded', function() {
    // Add decorative elements to section headings
    document.querySelectorAll('.section-heading').forEach(function(heading) {
        // Create heading decoration
        const decoration = document.createElement('div');
        decoration.className = 'heading-decoration';
        heading.appendChild(decoration);
        
        // Create cosmic orbit
        const orbit = document.createElement('div');
        orbit.className = 'heading-orbit';
        heading.appendChild(orbit);
    });
    
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active-nav');
                    if(link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active-nav');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    highlightNavOnScroll(); // Initial call
    
    // Handle mobile nav menu closure on link click
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            if(window.innerWidth <= 768) {
                document.getElementById('sideMenu').style.right = '-200px';
            }
        });
    });
    
    // Custom cursor - only on desktop/laptop
    if(window.innerWidth > 768) {
        const cursor = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        if (cursor && cursorOutline) {
            document.addEventListener('mousemove', function(e) {
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                cursorOutline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
            
            document.addEventListener('mousedown', function() {
                cursor.classList.add('active');
                cursorOutline.classList.add('active');
            });
            
            document.addEventListener('mouseup', function() {
                cursor.classList.remove('active');
                cursorOutline.classList.remove('active');
            });
            
            document.querySelectorAll('a, button, .tab-links, .work, input, textarea').forEach(item => {
                item.addEventListener('mouseenter', function() {
                    cursor.classList.add('active');
                    cursorOutline.classList.add('active');
                });
                
                item.addEventListener('mouseleave', function() {
                    cursor.classList.remove('active');
                    cursorOutline.classList.remove('active');
                });
            });
        }
    }
    
    // Add dynamic stars to background
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'blinking-star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            starsContainer.appendChild(star);
        }
    }
    
    // Add resize event listener to handle custom cursor visibility
    window.addEventListener('resize', function() {
        const cursor = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        if (cursor && cursorOutline) {
            if (window.innerWidth <= 768) {
                cursor.style.display = 'none';
                cursorOutline.style.display = 'none';
            } else {
                cursor.style.display = 'block';
                cursorOutline.style.display = 'block';
            }
        }
    });
}); 