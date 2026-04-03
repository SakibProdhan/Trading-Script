const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf-8');

// remove clip path styling
css = css.replace(/clip-path:\s*inset\(0 0 100% 0\);\s*\/\* Hide bottom 100% \*\//, 'opacity: 0; /* Fade in animation */');

css = css.replace(/\.timeline-line\.drawn\s*\{\s*clip-path:\s*inset\(0 0 0% 0\);\s*transition:\s*clip-path\s*1\.5s\s*cubic-bezier\(0\.25, 1, 0\.5, 1\);\s*\}/s, '.timeline-line.drawn {\n    opacity: 1;\n    transition: opacity 1.5s ease-out;\n}');

// Also remove transform scaleY if that was the one present (if I didn't successfully replace it last time)
css = css.replace(/transform-origin:\s*top;\s*transform:\s*scaleY\(0\);\s*\/\* Hide by default \*\//, 'opacity: 0;');
css = css.replace(/\.timeline-line\.drawn\s*\{\s*transform:\s*scaleY\(1\);\s*transition:\s*transform\s*1\.5s\s*cubic-bezier\(0\.25, 1, 0\.5, 1\);\s*\}/s, '.timeline-line.drawn {\n    opacity: 1;\n    transition: opacity 1.5s ease-out;\n}');


fs.writeFileSync('styles.css', css);

let html = fs.readFileSync('index.html', 'utf-8');
// Keep JS observer but it will now just trigger the .drawn class which fades opacity
fs.writeFileSync('index.html', html);
console.log("Animation safely reverted to previous visible state with a simple fade-in.");
