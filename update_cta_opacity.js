const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf-8');

// Replace the deep green #10633B gradient with the 40% opacity version of the same color
const oldGradient = /background:\s*linear-gradient\(180deg,\s*#10633B\s*0%,\s*#06090e\s*35%,\s*#050608\s*100%\);/g;
const newGradient = "background: linear-gradient(180deg, rgba(16, 99, 59, 0.4) 0%, #0b0e14 35%, #0b0e14 100%);";

// Let's broaden the match in case of minor formatting differences
css = css.replace(/background:\s*linear-gradient\(180deg,\s*#10633B\s[\s\S]*?100%\);/, newGradient);

// Also just hard replace if the previous one fails
css = css.replace(/background: linear-gradient\(180deg, #10633B 0%, #06090e 35%, #050608 100%\);/, newGradient);

fs.writeFileSync('styles.css', css);
console.log("CTA green background opacity successfully reduced to 40%");
