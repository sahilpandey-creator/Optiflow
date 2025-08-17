// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
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
    
    // Animate graph bars
    animateGraphBars();
    
    // Initialize contact form
    initializeContactForm();
});

// Animate optimization graph bars
function animateGraphBars() {
    const bars = document.querySelectorAll('.graph-bar');
    bars.forEach((bar, index) => {
        const value = bar.getAttribute('data-value');
        bar.style.setProperty('--height', `${value}%`);
        bar.style.animationDelay = `${index * 0.2}s`;
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Performance Analyzer Tool
function analyzePerformance() {
    const urlInput = document.getElementById('url-input');
    const resultsDiv = document.getElementById('performance-results');
    
    if (!urlInput.value) {
        resultsDiv.innerHTML = '<p style="color: #ef4444;">Please enter a URL to analyze.</p>';
        return;
    }
    
    // Simulate performance analysis
    resultsDiv.innerHTML = '<p>Analyzing performance...</p>';
    
    setTimeout(() => {
        const mockResults = `
            <div style="color: #1e293b;">
                <h4 style="margin-bottom: 1rem;">Performance Analysis Results</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px;">
                        <strong>Page Speed:</strong> 2.3s
                    </div>
                    <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px;">
                        <strong>Performance Score:</strong> 85/100
                    </div>
                </div>
                <div style="background: #fef3c7; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                    <strong>Recommendations:</strong>
                    <ul style="margin-top: 0.5rem; margin-left: 1rem;">
                        <li>Optimize images (save 0.8s)</li>
                        <li>Minimize CSS/JS (save 0.5s)</li>
                        <li>Enable compression (save 0.3s)</li>
                    </ul>
                </div>
            </div>
        `;
        resultsDiv.innerHTML = mockResults;
    }, 2000);
}

// Code Optimizer Tool
function optimizeCode() {
    const codeInput = document.getElementById('code-input');
    const resultsDiv = document.getElementById('code-results');
    
    if (!codeInput.value.trim()) {
        resultsDiv.innerHTML = '<p style="color: #ef4444;">Please enter code to optimize.</p>';
        return;
    }
    
    // Simulate code optimization
    resultsDiv.innerHTML = '<p>Optimizing code...</p>';
    
    setTimeout(() => {
        const mockResults = `
            <div style="color: #1e293b;">
                <h4 style="margin-bottom: 1rem;">Code Optimization Results</h4>
                <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                    <strong>Original Size:</strong> ${codeInput.value.length} characters<br>
                    <strong>Optimized Size:</strong> ${Math.floor(codeInput.value.length * 0.85)} characters<br>
                    <strong>Reduction:</strong> 15%
                </div>
                <div style="background: #fef3c7; padding: 1rem; border-radius: 8px;">
                    <strong>Suggestions:</strong>
                    <ul style="margin-top: 0.5rem; margin-left: 1rem;">
                        <li>Remove unused variables</li>
                        <li>Combine similar functions</li>
                        <li>Use more efficient algorithms</li>
                    </ul>
                </div>
            </div>
        `;
        resultsDiv.innerHTML = mockResults;
    }, 1500);
}

// SEO Checker Tool
function checkSEO() {
    const seoInput = document.getElementById('seo-input');
    const resultsDiv = document.getElementById('seo-results');
    
    if (!seoInput.value.trim()) {
        resultsDiv.innerHTML = '<p style="color: #ef4444;">Please enter a keyword or phrase to check.</p>';
        return;
    }
    
    // Simulate SEO analysis
    resultsDiv.innerHTML = '<p>Analyzing SEO...</p>';
    
    setTimeout(() => {
        const mockResults = `
            <div style="color: #1e293b;">
                <h4 style="margin-bottom: 1rem;">SEO Analysis for "${seoInput.value}"</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px;">
                        <strong>Difficulty:</strong> Medium
                    </div>
                    <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px;">
                        <strong>Search Volume:</strong> 12K/month
                    </div>
                </div>
                <div style="background: #fef3c7; padding: 1rem; border-radius: 8px;">
                    <strong>Optimization Tips:</strong>
                    <ul style="margin-top: 0.5rem; margin-left: 1rem;">
                        <li>Include in title tags</li>
                        <li>Use in meta descriptions</li>
                        <li>Create relevant content</li>
                        <li>Build quality backlinks</li>
                    </ul>
                </div>
            </div>
        `;
        resultsDiv.innerHTML = mockResults;
    }, 1800);
}

// Contact Form Handler
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Show success message
            contactForm.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <i class="fas fa-check-circle" style="font-size: 3rem; color: #10b981; margin-bottom: 1rem;"></i>
                    <h3 style="color: #1e293b; margin-bottom: 1rem;">Message Sent Successfully!</h3>
                    <p style="color: #64748b;">Thank you for contacting us, ${name}. We'll get back to you soon!</p>
                </div>
            `;
        }, 2000);
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .tool-card, .process-step');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});