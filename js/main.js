document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Mobile Menu Drawer Navigation System ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
            
            // Toggle hamburger icon rotation animations
            const bars = menuToggle.querySelectorAll('.bar');
            if(menuToggle.classList.contains('open')) {
                bars[0].style.transform = "rotate(45deg) translate(5px, 5px)";
                bars[1].style.opacity = "0";
                bars[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
            } else {
                bars[0].style.transform = "none";
                bars[1].style.opacity = "1";
                bars[2].style.transform = "none";
            }
        });
    }

    // --- 2. Lightweight Particle Starfield Background Animation Loop ---
    const canvas = document.getElementById("canvas-particles");
    const ctx = canvas.getContext("2d");
    let particles = [];

    const initCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", initCanvasSize);
    initCanvasSize();

    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.2 + 0.4,
            speedY: Math.random() * -0.2 - 0.05,
            opacity: Math.random() * 0.4 + 0.1
        });
    }

    const drawLoop = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.y += p.speedY;
            if (p.y < 0) p.y = canvas.height;
            ctx.fillStyle = `rgba(255, 153, 0, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(drawLoop);
    };
    drawLoop();
});
