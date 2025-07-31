document.addEventListener('DOMContentLoaded', function() {
    // Remove the not-loaded class to start animations
    setTimeout(function() {
        document.body.classList.remove('not-loaded');
    }, 500);
    
    // Optional: Add some sparkle effects around the message
    createSparkles();
});

function createSparkles() {
    const messageContainer = document.querySelector('.girlfriend-day-message');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.opacity = '0';
            sparkle.style.animation = 'sparkle-float 3s ease-out forwards';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '999';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 3000);
        }, i * 200);
    }
}

// Add sparkle animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle-float {
        0% {
            opacity: 0;
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
