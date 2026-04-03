const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

const scrollScript = `
    <!-- Scroll Fade Transitions -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            document.querySelectorAll('.timeline-item, .toolkit-card').forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                // Stagger transition
                el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ' + (i * 0.1) + 's';
                observer.observe(el);
            });
        });
    </script>
</body>`;

html = html.replace(/<\/body>/, scrollScript);
fs.writeFileSync('index.html', html);
console.log("Animation script inserted");
