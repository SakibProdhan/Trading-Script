const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf-8');

// remove opacity transition
css = css.replace(/opacity: 0;\s*\/\* Fade in animation \*\//g, '');
css = css.replace(/\.timeline-line\.drawn\s*\{\s*opacity: 1;\s*transition: opacity 1\.5s ease-out;\s*\}/g, '');

fs.writeFileSync('styles.css', css);
console.log("Line animation completely removed, line is 100% static and visible.");
