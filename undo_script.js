const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf-8');
const searchString = '.prop-card {\\r\\n    background: #0d0f14;';
const searchString2 = '.prop-card {\\n    background: #0d0f14;';
let index = css.indexOf(searchString);
if (index === -1) index = css.indexOf(searchString2);
if (index !== -1) {
    fs.writeFileSync('styles.css', css.substring(0, index));
    console.log("CSS fixed");
}

let html = fs.readFileSync('index.html', 'utf-8');
let oldGridIndex = html.indexOf('<div class="grid-4-cols">');
let sectionEndIndex = html.indexOf('</section>', oldGridIndex);
if (oldGridIndex !== -1 && sectionEndIndex !== -1) {
    let before = html.substring(0, oldGridIndex);
    let after = html.substring(sectionEndIndex + 10);
    
    // Read from the provided original copy I have access to? No I don't.
    // I can just replace the first grid-4-cols completely with the exact identical cards I copied earlier but using safe JSON format.
}
