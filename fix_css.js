const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf-8');

// I will append the lost FAQ stylings and the new redesign styles.

const restoreFAQCss = `
.faq-item {
    background: linear-gradient(145deg, rgba(20, 20, 25, 0.6) 0%, rgba(10, 10, 15, 0.8) 100%);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    overflow: hidden;
    transition: var(--transition);
}
.faq-item:hover {
    border-color: rgba(255, 255, 255, 0.15);
}
.faq-question {
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    padding: 24px;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-ui);
    transition: var(--transition);
}
.faq-icon {
    font-size: 1.5rem;
    color: var(--primary-neon);
    transition: transform 0.3s ease;
    font-family: var(--font-code);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

const replaceRegexFAQ = /\.faq-item\s*\{[\s\S]*?\.faq-answer\s*\{/m;
css = css.replace(replaceRegexFAQ, restoreFAQCss + '\n.faq-answer {\n');


css += `
/* Updated Smooth Scroll Behavior */
html {
    scroll-behavior: smooth;
}

/* 3D Perspective Grid Background */
.perspective-grid-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    overflow: hidden;
    z-index: 0;
    perspective: 1000px;
    background-color: var(--bg-main);
}
.perspective-grid-inner {
    position: absolute;
    top: 30%; left: -50%;
    width: 200%; height: 200%;
    background-image: 
        linear-gradient(rgba(0, 255, 136, 0.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 136, 0.15) 1px, transparent 1px);
    background-size: 60px 60px;
    transform: rotateX(75deg);
    transform-origin: center top;
}
.perspective-grid-bg::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to bottom, var(--bg-main) 0%, transparent 40%, var(--bg-main) 100%);
    pointer-events: none;
}

/* Timeline Section */
.timeline-container {
    display: flex;
    gap: 100px;
}
@media (max-width: 900px) {
    .timeline-container {
        flex-direction: column;
        gap: 40px;
    }
}
.timeline-left {
    flex: 1;
    position: sticky;
    top: 100px;
    align-self: flex-start;
}
.timeline-right {
    flex: 1.5;
    position: relative;
    padding-left: 50px;
}
.timeline-line {
    position: absolute;
    left: 21px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--primary-neon) 0%, rgba(255,255,255,0.05) 100%);
}
.timeline-item {
    position: relative;
    margin-bottom: 60px;
}
.timeline-marker {
    position: absolute;
    left: -50px; /* -padding left */
    top: 0;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--primary-neon);
    color: #000;
    display: flex;
    align-items: center; justify-content: center;
    font-weight: bold;
    font-size: 1rem;
    font-family: var(--font-code);
    transform: translateX(-50%);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
    z-index: 2;
}
.timeline-marker.dimmed {
    background: #111;
    color: var(--primary-neon);
    border: 2px solid rgba(0,255,136,0.3);
    box-shadow: none;
}
.timeline-content {
    background: transparent;
}
.timeline-icon {
    width: 38px; height: 38px;
    margin-bottom: 14px;
    color: var(--primary-neon);
}
.timeline-content h3 {
    margin-bottom: 12px;
    font-size: 1.3rem;
}
.timeline-content p {
    color: #8b8b9b;
    font-size: 0.95rem;
    line-height: 1.6;
}

/* Toolkit Grid Section */
.toolkit-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 40px;
}
@media (max-width: 900px) {
    .toolkit-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 600px) {
    .toolkit-grid {
        grid-template-columns: 1fr;
    }
}
.toolkit-card {
    background: #111116;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 40px 30px;
    text-align: center;
    transition: var(--transition);
}
.toolkit-card:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 136, 0.2);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.toolkit-icon {
    width: 70px; height: 70px;
    border-radius: 50%;
    margin: 0 auto 25px auto;
    background: rgba(0, 255, 136, 0.05);
    border: 1px solid rgba(0, 255, 136, 0.2);
    display: flex; align-items: center; justify-content: center;
    color: var(--primary-neon);
    position: relative;
}
/* Concentric effect */
.toolkit-icon::before {
    content: '';
    position: absolute;
    width: 50px; height: 50px;
    border-radius: 50%;
    background: rgba(0, 255, 136, 0.1);
}
.toolkit-icon svg {
    width: 32px; height: 32px;
    z-index: 1;
}
.toolkit-card h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
}
.toolkit-card p {
    font-size: 0.95rem;
    color: #8b8b9b;
    line-height: 1.6;
}
`;

fs.writeFileSync('styles.css', css);
console.log("CSS fixed and appended!");
