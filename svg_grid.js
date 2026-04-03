const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf-8');

const premiumCss = `/* 3D Perspective Grid Background */
.perspective-grid-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    overflow: hidden;
    z-index: 0;
    perspective: 1200px;
    background-color: var(--bg-main);
}
/* Glowing Aurora */
.perspective-grid-bg::before {
    content: '';
    position: absolute;
    top: 5%;
    left: -20%;
    width: 60%;
    height: 90%;
    background: radial-gradient(ellipse at center, rgba(0, 255, 136, 0.08) 0%, transparent 60%);
    pointer-events: none;
    z-index: 1;
}
/* Ultra-Smooth Vector Grid */
.perspective-grid-inner {
    position: absolute;
    top: 30%; left: -50%;
    width: 200%; height: 200%;
    /* Usage of SVG Background entirely eliminates the line aliasing issues found with linear-gradients under heavy 3D transforms */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(0, 255, 136, 0.35)' stroke-width='1.5'/%3E%3C/svg%3E");
    background-size: 100px 100px;
    transform: rotateZ(-8deg) rotateX(78deg);
    transform-origin: center top;
    
    /* Heavy masking to beautifully melt the grid into the void */
    mask-image: radial-gradient(ellipse 100% 50% at 50% 50%, black 0%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 100% 50% at 50% 50%, black 0%, transparent 80%);
}
/* Structural Blending Overlays */
.perspective-grid-bg::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to bottom, var(--bg-main) 0%, transparent 20%, transparent 70%, var(--bg-main) 100%);
    pointer-events: none;
    z-index: 2;
}`;

css = css.replace(/\/\* Provided Background Image \*\/[\s\S]*?\/\* Timeline Section \*\//, premiumCss + '\n\n/* Timeline Section */');

fs.writeFileSync('styles.css', css);
console.log("Ultra-premium, anti-aliased SVG grid rendering activated!");
