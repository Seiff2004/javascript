const Animations = {
    fadeIn: function(element, duration = 500) {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms ease`;
        
        setTimeout(() => {
            element.style.opacity = '1';
        }, 50);
    },
    
    fadeOut: function(element, duration = 500) {
        element.style.transition = `opacity ${duration}ms ease`;
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    },
    
    slideIn: function(element, direction = 'left', duration = 500) {
        const directions = {
            left: { transform: 'translateX(-100%)', final: 'translateX(0)' },
            right: { transform: 'translateX(100%)', final: 'translateX(0)' },
            up: { transform: 'translateY(-100%)', final: 'translateY(0)' },
            down: { transform: 'translateY(100%)', final: 'translateY(0)' }
        };
        
        const dir = directions[direction] || directions.left;
        element.style.transform = dir.transform;
        element.style.transition = `transform ${duration}ms ease`;
        
        setTimeout(() => {
            element.style.transform = dir.final;
        }, 50);
    },
    
    slideOut: function(element, direction = 'left', duration = 500) {
        const directions = {
            left: 'translateX(-100%)',
            right: 'translateX(100%)',
            up: 'translateY(-100%)',
            down: 'translateY(100%)'
        };
        
        element.style.transition = `transform ${duration}ms ease`;
        element.style.transform = directions[direction] || directions.left;
        
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    },
    
    scaleIn: function(element, duration = 500) {
        element.style.transform = 'scale(0)';
        element.style.transition = `transform ${duration}ms ease`;
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 50);
    },
    
    scaleOut: function(element, duration = 500) {
        element.style.transition = `transform ${duration}ms ease`;
        element.style.transform = 'scale(0)';
        
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    },
    
    rotateIn: function(element, duration = 500) {
        element.style.transform = 'rotate(-180deg) scale(0)';
        element.style.transition = `transform ${duration}ms ease`;
        
        setTimeout(() => {
            element.style.transform = 'rotate(0deg) scale(1)';
        }, 50);
    },
    
    bounceIn: function(element, duration = 1000) {
        element.style.transform = 'scale(0)';
        element.style.transition = `transform ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 50);
    },
    
    shake: function(element, duration = 500) {
        const originalTransform = element.style.transform;
        const keyframes = [
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ];
        
        element.animate(keyframes, {
            duration: duration,
            easing: 'ease-in-out'
        });
        
        setTimeout(() => {
            element.style.transform = originalTransform;
        }, duration);
    },
    
    pulse: function(element, duration = 1000) {
        const originalTransform = element.style.transform;
        const keyframes = [
            { transform: 'scale(1)' },
            { transform: 'scale(1.1)' },
            { transform: 'scale(1)' }
        ];
        
        element.animate(keyframes, {
            duration: duration,
            easing: 'ease-in-out'
        });
        
        setTimeout(() => {
            element.style.transform = originalTransform;
        }, duration);
    },
    
    typewriter: function(element, text, speed = 100) {
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    },
    
    parallax: function(element, speed = 0.5) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * speed;
            element.style.transform = `translateY(${rate}px)`;
        });
    },
    
    staggerAnimation: function(elements, animation, delay = 100) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                animation(element);
            }, index * delay);
        });
    },
    
    infiniteScroll: function(container, items, loadMoreCallback) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadMoreCallback();
                }
            });
        });
        
        const sentinel = document.createElement('div');
        sentinel.style.height = '1px';
        container.appendChild(sentinel);
        observer.observe(sentinel);
    },
    
    lazyLoad: function(images) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    },
    
    counterAnimation: function(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }
}; 