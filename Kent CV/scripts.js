document.addEventListener('DOMContentLoaded', function() {
    // Tab navigation
    const navIcons = document.querySelectorAll('.nav-icon');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target section ID
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active tab
            navIcons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Show target content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if(content.id === targetId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Update icon
        const icon = this.querySelector('i');
        if(newTheme === 'light') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message (in a real app, you'd want something more robust)
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Set default theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    
    // Update theme toggle icon based on initial theme
    const icon = themeToggle.querySelector('i');
    if(prefersDark) {
        icon.classList.add('fa-moon');
    } else {
        icon.classList.add('fa-sun');
    }
});