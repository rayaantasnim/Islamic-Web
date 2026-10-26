        document.addEventListener('DOMContentLoaded', () => {
            // Register GSAP ScrollTrigger
            gsap.registerPlugin(ScrollTrigger);

            // Hamburger & Fullscreen Overlay Controls
            const hamburgerBtn = document.getElementById('hamburger-btn');
            const navOverlay = document.getElementById('nav-overlay');
            const overlayLinks = document.querySelectorAll('.overlay-link');
            const line1 = document.getElementById('line1');
            const line2 = document.getElementById('line2');
            const line3 = document.getElementById('line3');
            let isMenuOpen = false;

            function toggleMenu() {
                isMenuOpen = !isMenuOpen;

                if (isMenuOpen) {
                    // Open Overlay
                    navOverlay.classList.remove('opacity-0', 'pointer-events-none');
                    navOverlay.classList.add('opacity-100', 'pointer-events-auto');

                    // Morph Lines into X
                    line1.style.transform = 'translateY(11px) rotate(45deg)';
                    line2.style.opacity = '0';
                    line3.style.transform = 'translateY(-11px) rotate(-45deg)';

                    // Animate Links In
                    gsap.fromTo(overlayLinks, 
                        { y: 30, opacity: 0 }, 
                        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
                    );
                } else {
                    // Close Overlay
                    navOverlay.classList.remove('opacity-100', 'pointer-events-auto');
                    navOverlay.classList.add('opacity-0', 'pointer-events-none');

                    // Reset Hamburger Lines
                    line1.style.transform = 'none';
                    line2.style.opacity = '1';
                    line3.style.transform = 'none';
                }
            }

            hamburgerBtn.addEventListener('click', toggleMenu);

            overlayLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (isMenuOpen) toggleMenu();
                });
            });

            // GSAP ScrollTrigger Animations
            // Hero Content Fade In
            gsap.from('.hero-content > *', {
                duration: 1.2,
                y: 50,
                opacity: 0,
                stagger: 0.2,
                ease: 'power3.out'
            });

            // Reveal Left Elements
            gsap.utils.toArray('.gsap-reveal-left').forEach(elem => {
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    x: -60,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out'
                });
            });

            // Reveal Right Elements
            gsap.utils.toArray('.gsap-reveal-right').forEach(elem => {
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    x: 60,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out'
                });
            });

            // Reveal Up Elements
            gsap.utils.toArray('.gsap-reveal-up').forEach(elem => {
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out'
                });
            });
        });
