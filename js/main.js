document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Mobile Menu Drawer Navigation System ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // --- 2. High-Saturation Hyper-Amber Particle Starfield Loop ---
    const canvas = document.getElementById("canvas-particles");
    const ctx = canvas.getContext("2d");
    let particles = [];

    const initCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", initCanvasSize);
    initCanvasSize();

    for (let i = 0; i < 55; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5 + 0.5,
            speedY: Math.random() * -0.25 - 0.05,
            opacity: Math.random() * 0.6 + 0.2 // Higher base visibility for amber tracking particles
        });
    }

    const drawLoop = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.y += p.speedY;
            if (p.y < 0) p.y = canvas.height;
            // Updated directly to high-intensity bright neon amber color mapping strings
            ctx.fillStyle = `rgba(255, 170, 0, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(drawLoop);
    };
    drawLoop();
});
