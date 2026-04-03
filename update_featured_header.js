const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// 1. Remove Testimonial Section
html = html.replace(/<!-- Testimonial Section -->[\s\S]*?(?=<!-- FAQ Section -->)/, '');

// 2. Redesign Featured Script title section
const oldHeaderRegex = /<div class="section-header flex-between mb-4" style="align-items: flex-end;">[\s\S]*?<\/div>\s*<\/div>/;

const newHeader = `<div class="featured-header-wrapper" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px;">
                <div class="featured-header-left">
                    <div class="badge-pill" style="display:inline-flex; align-items:center; gap:8px; background:transparent; border: 1px solid #222; padding: 6px 16px; border-radius: 40px; font-size: 0.85rem; color: #888; font-weight: 500; margin-bottom: 25px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary-neon)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="fill: var(--primary-neon);"><rect x="9" y="9" width="6" height="6" transform="rotate(45 12 12)"/></svg> 
                        Featured Products
                    </div>
                    <h2 style="font-family: 'Space Mono', monospace; font-size: 3rem; color: #fff; line-height: 1.2; letter-spacing: -1px; margin: 0;">Popular tools<br>traders start with.</h2>
                </div>
                <!-- 3 Popular Categories Buttons -->
                <div class="featured-categories" style="display: flex; gap: 10px;">
                    <button class="btn-category active-category">TradingView</button>
                    <button class="btn-category">MetaTrader 4</button>
                    <button class="btn-category">Python Bots</button>
                </div>
            </div>`;

html = html.replace(oldHeaderRegex, newHeader);

fs.writeFileSync('index.html', html);
console.log("HTML successfully updated");

let css = fs.readFileSync('styles.css', 'utf-8');

// 3. Add Hover Effects & Category Button Styles to CSS
const newCss = `
/* Featured Category Title Section */
.btn-category {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #e0e0e0;
    padding: 10px 24px;
    border-radius: 40px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}
.btn-category:hover {
    border-color: rgba(255, 255, 255, 0.3);
}
.btn-category.active-category {
    background: var(--primary-neon);
    color: #000;
    border-color: var(--primary-neon);
}

/* Product Card Hover Effects */
.prop-card-bottom {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}
.prop-cart-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 12px;
    border-radius: 12px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}
/* Enhanced Add to Cart Hover */
.prop-cart-btn:hover {
    background: var(--primary-neon);
    color: #000;
    border-color: var(--primary-neon);
    box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
}
.prop-cart-btn:hover svg {
    stroke: #000;
}

.prop-heart-btn {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
}
/* Enhanced Wishlist Hover */
.prop-heart-btn:hover {
    background: rgba(255, 51, 102, 0.1);
    border-color: #ff3366;
    color: #ff3366;
}
.prop-heart-btn:hover svg {
    fill: #ff3366;
}

@media (max-width: 900px) {
    .featured-header-wrapper {
        flex-direction: column;
        align-items: flex-start !important;
        gap: 30px;
    }
}
`;

if (!css.includes('.active-category')) {
    fs.appendFileSync('styles.css', newCss);
    console.log("CSS successfully updated");
}

