const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf-8');
css = css.replace('transform-origin: top;\n    transform: scaleY(0); /* Hide by default */', 'clip-path: inset(0 0 100% 0); /* Hide bottom 100% */');
css = css.replace('transform: scaleY(1);\n    transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1);', 'clip-path: inset(0 0 0% 0);\n    transition: clip-path 1.5s cubic-bezier(0.25, 1, 0.5, 1);');
fs.writeFileSync('styles.css', css);

let html = fs.readFileSync('index.html', 'utf-8');
const replacementScript = `
    <!-- Scroll Fade Transitions -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('timeline-line')) {
                            entry.target.classList.add('drawn');
                        } else {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            document.querySelectorAll('.timeline-item, .toolkit-card, .timeline-line').forEach((el, i) => {
                if (el.classList.contains('timeline-line')) {
                    observer.observe(el);
                } else {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(20px)';
                    el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ' + (i * 0.1) + 's';
                    observer.observe(el);
                }
            });
        });
    </script>
</body>`;

// replace whatever old script there was
html = html.replace(/<!-- Scroll Fade Transitions -->[\s\S]*?<\/body>/, replacementScript);
fs.writeFileSync('index.html', html);
console.log("Animation completely fixed!");
