const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf-8');

const replacementCss = `/* SUPER CTA SECTION */
.super-cta-section {
    position: relative;
    padding: 0;
    margin-top: 150px;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    overflow: hidden;
    background: transparent;
}
/* Exact curved background matching the CTA screenshot */
.cta-glow-mound {
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 1000px; /* extends well past the content */
    border-radius: 50% 50% 0 0;
    /* Deep emerald green perfectly matching the image */
    background: linear-gradient(180deg, #10633B 0%, #06090e 35%, #050608 100%);
    z-index: -1;
}
.btn-cta-white:hover .btn-cta-circle {
    transform: scale(1.1);
    transition: transform 0.3s;
}`;

// Replaces the old super cta section
css = css.replace(/\/\* SUPER CTA SECTION \*\/[\s\S]*?(?=\/\* NEW BLOG SECTION CARDS \*\/)/, replacementCss + '\n\n');

fs.writeFileSync('styles.css', css);

let html = fs.readFileSync('index.html', 'utf-8');

const htmlReplacement = `
    <!-- Super CTA Section -->
    <section class="section super-cta-section text-center">
        <div class="cta-glow-mound"></div>
        <div class="container relative z-10" style="padding-top: 160px; padding-bottom: 160px;">
            <h2 style="font-size: 3.5rem; margin-bottom: 25px; font-weight: 600; line-height: 1.25; letter-spacing: -0.02em;">Start Your Crypto Journey<br>with TradeLogic Today!</h2>
            <p style="color: #b0b0b0; font-size: 1.15rem; margin-bottom: 45px; max-width: 600px; margin-left: auto; margin-right: auto; font-weight: 400;">Join TradeLogic and simplify your cryptocurrency journey!</p>
            <a href="#" class="btn btn-cta-white" style="display: inline-flex; align-items: center; background: #fff; padding: 6px 6px 6px 28px; border-radius: 40px; text-decoration: none;">
                <span style="color: #111; font-weight: 600; margin-right: 15px; font-size: 1.05rem;">Browse Scripts</span>
                <div class="btn-cta-circle" style="width: 44px; height: 44px; background: #00ea76; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="black" stroke-width="2.5" fill="none" class="feather"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
            </a>
        </div>
    </section>
`;

html = html.replace(/<!-- Super CTA Section -->[\s\S]*?(?=\s*<!-- Footer -->)/, htmlReplacement);

fs.writeFileSync('index.html', html);
console.log("CTA background strictly updated to match the image.");
