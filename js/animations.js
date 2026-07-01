// ============================== 
// ANIMATIONS AND EFFECTS
// ============================== 

// Typing Animation for Hero Title
function typeWriter(element, texts, speed = 100) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingTimeout = setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingTimeout = setTimeout(type, 500);
        } else {
            typingTimeout = setTimeout(type, isDeleting ? speed / 2 : speed);
        }
    }
    
    type();
}

// Initialize typing animation
const typingElement = document.querySelector('.typing-animation');
if (typingElement) {
    const texts = [
        'Digital Excellence',
        'Creative Solutions',
        'Growth Strategy'
    ];
    typeWriter(typingElement, texts, 80);
}

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        heroSection.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// Number Counter Animation
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Intersection Observer for counter animation
const statsElements = document.querySelectorAll('.stat h3');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const text = entry.target.textContent;
            const number = parseInt(text);
            animateCounter(entry.target, number);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

statsElements.forEach(el => statsObserver.observe(el));

// Staggered Animation for Service Cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.8s ease ${index * 0.1}s both`;
});

// Hover effect for portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Glow effect for interactive elements
document.querySelectorAll('.btn, .service-card, .testimonial-card').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const span = document.createElement('span');
        span.style.position = 'absolute';
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        span.style.width = '100px';
        span.style.height = '100px';
        span.style.background = 'radial-gradient(circle, rgba(15, 157, 88, 0.5), transparent)';
        span.style.pointerEvents = 'none';
        span.style.animation = 'glow 0.6s ease-out';
        
        el.style.position = 'relative';
        el.style.overflow = 'hidden';
        el.appendChild(span);
        
        setTimeout(() => span.remove(), 600);
    });
});

// Add glow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes glow {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`;
document.head.appendChild(style);

// Scroll reveal animation
const revealElements = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.6s ease';
    revealObserver.observe(el);
});

// Smooth fade in for images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.style.opacity = '0';
    img.addEventListener('load', () => {
        img.style.transition = 'opacity 0.5s ease';
        img.style.opacity = '1';
    });
});

// Floating elements animation
const floatingElements = document.querySelectorAll('.floating-card');
floatingElements.forEach(el => {
    el.style.animation = 'float 3s ease-in-out infinite';
});

// Pulse animation for CTA buttons
const ctaButtons = document.querySelectorAll('.btn-primary');
ctaButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.animation = 'pulse 0.6s ease-out';
    });
});

const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(15, 157, 88, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(15, 157, 88, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(15, 157, 88, 0);
        }
    }
`;
document.head.appendChild(pulseStyle);

console.log('Animations initialized successfully!');