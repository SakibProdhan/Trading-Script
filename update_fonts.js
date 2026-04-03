const fs = require('fs');

// ==== 1. Update index.html ====
let html = fs.readFileSync('index.html', 'utf8');

// Replace Google Fonts Link
const oldFontLinkRegex = /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=[^>]+>/;
const newFontLink = '<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">';
html = html.replace(oldFontLinkRegex, newFontLink);

// Replace inline declarations
html = html.replace(/'Space Mono'/g, "'JetBrains Mono'");
html = html.replace(/Inter/g, "Manrope");

fs.writeFileSync('index.html', html);


// ==== 2. Update styles.css ====
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace(/'Space Mono'/g, "'JetBrains Mono'");
css = css.replace(/'Inter'/g, "'Manrope'");

const newTitleRule = `\n
/* Unified Fonts Enforcement */
h1, h2, .section-title, .hero-title, .hero-metric h3, .stat-number {
    font-family: 'JetBrains Mono', monospace !important;
}
body {
    font-family: 'Manrope', sans-serif;
}
`;

if (!css.includes('/* Unified Fonts Enforcement */')) {
    css += newTitleRule;
}

fs.writeFileSync('styles.css', css);

console.log("Fonts globally migrated to JetBrains Mono and Manrope!");
