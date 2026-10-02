document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Dynamic Particle Starfield Simulation Background ---
    const canvas = document.getElementById("canvas-particles");
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particleCount = 65;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = Math.random() * 0.2 - 0.1;
            this.speedY = Math.random() * -0.3 - 0.1; // Slowly floats upward
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.y < 0 || this.x < 0 || this.x > canvas.width) {
                this.reset();
                this.y = canvas.height;
            }
        }
        draw() {
            ctx.fillStyle = `rgba(255, 153, 0, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    };
    animateParticles();

    // --- 2. Advanced Scroll-Driven Component Intros ---
    const animatedBlocks = document.querySelectorAll('.matrix-card, .timeline-block, .terminal-box');
    
    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.12 });

    animatedBlocks.forEach(block => {
        block.style.opacity = "0";
        block.style.transform = "translateY(40px)";
        block.style.transition = "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
        intersectionObserver.observe(block);
    });

    // --- 3. Mock Console Kernel Interactive Typing Simulation ---
    const targetSpan = document.querySelector(".typed-text");
    const terminalCommandStr = "xextool -c u -e u -o default.xex build/project_amber.elf";
    let charIndex = 0;

    const typeTerminalCharacter = () => {
        if (charIndex < terminalCommandStr.length) {
            targetSpan.textContent += terminalCommandStr.charAt(charIndex);
            charIndex++;
            setTimeout(typeTerminalCharacter, 60);
        } else {
            setTimeout(() => {
                const parent = document.querySelector(".terminal-body");
                const executionSuccessLine = document.createElement("p");
                executionSuccessLine.className = "log-line text-green";
                executionSuccessLine.textContent = "[SUCCESS] Out -> default.xex compiled perfectly. Package ready for deployment.";
                parent.appendChild(executionSuccessLine);
            }, 500);
        }
    };

    // Trigger console typing animation when terminal scrolls into view
    const terminalBoxElement = document.querySelector(".terminal-box");
    const terminalObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setTimeout(typeTerminalCharacter, 800);
            terminalObserver.disconnect();
        }
    }, { threshold: 0.5 });
    terminalObserver.observe(terminalBoxElement);
});

