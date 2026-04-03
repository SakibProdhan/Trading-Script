const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf-8');

const newBg = `/* Provided Background Image */
.perspective-grid-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    overflow: hidden;
    z-index: 0;
    background-image: url('how-it-works-bg.png');
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-color: var(--bg-main);
}
.perspective-grid-bg::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to bottom, var(--bg-main) 0%, transparent 20%, transparent 80%, var(--bg-main) 100%);
    pointer-events: none;
    z-index: 2;
}`;

css = css.replace(/\/\* 3D Perspective Grid Background \*\/[\s\S]*?\/\* Timeline Section \*\//, newBg + '\n\n/* Timeline Section */');

fs.writeFileSync('styles.css', css, 'utf-8');
console.log("Background image applied!");
