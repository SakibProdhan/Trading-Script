const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf-8');

const new_bg = `/* 3D Perspective Grid Background */
.perspective-grid-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    overflow: hidden;
    z-index: 0;
    perspective: 1000px;
    background-color: #0b0e14; /* very dark base */
}
.perspective-grid-bg::before {
    content: '';
    position: absolute;
    top: 10%;
    left: -10%;
    width: 70%;
    height: 80%;
    background: radial-gradient(circle, rgba(0, 255, 136, 0.12) 0%, transparent 70%);
    pointer-events: none;
    z-index: 1;
}
.perspective-grid-bg::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to bottom, #0b0e14 0%, transparent 40%, #0b0e14 100%);
    pointer-events: none;
    z-index: 2;
}
.perspective-grid-inner {
    position: absolute;
    top: 45%; left: -50%;
    width: 200%; height: 200%;
    background-image: 
        linear-gradient(rgba(0, 255, 136, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 136, 0.2) 1px, transparent 1px);
    background-size: 80px 80px;
    transform: rotateZ(-8deg) rotateX(78deg);
    transform-origin: center top;
}`;

css = css.replace(/\/\* 3D Perspective Grid Background \*\/[\s\S]*?\/\* Timeline Section \*\//, new_bg + '\n\n/* Timeline Section */');

fs.writeFileSync('styles.css', css);
console.log("Updated grid CSS via JS");
