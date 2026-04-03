const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf-8');

// Undo the prop-card CSS additions at the end of the file
const cssToRemove = `
.prop-card {
    background: #0d0f14;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 24px;
    transition: transform 0.3s, border-color 0.3s;
    display: flex;
    flex-direction: column;
}
.prop-card:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.15);
}
.prop-card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}
/* Exact screenshot gradient icon */
.prop-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff3366, #ffcc00);
    display: flex;
    align-items: center;
    justify-content: center;
}
.prop-icon svg {
    width: 24px;
    height: 24px;
    stroke: white;
    stroke-width: 2.5;
}
.prop-price {
    font-family: 'Space Mono', monospace;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
}
.prop-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;
    line-height: 1.3;
}
.prop-desc {
    color: #888;
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 20px;
}
.prop-badges {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 25px;
}
/* Exact screenshot badge styles */
.prop-badge.green {
    color: #00ff88;
    background: rgba(0, 255, 136, 0.05);
    border: 1px solid rgba(0, 255, 136, 0.2);
}
.prop-badge.cyan {
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.05);
    border: 1px solid rgba(0, 212, 255, 0.2);
}
.prop-card-bottom {
    display: flex;
    gap: 12px;
    margin-top: auto;
}
/* Perfected Screenshot Default Buttons */
.prop-heart-btn {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%; /* Pure circle */
    color: #888;
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.3s ease;
}
.prop-heart-btn svg {
    stroke: #888;
}
.prop-cart-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #fff; /* Solid white like screenshot */
    border: none;
    height: 44px;
    border-radius: 40px; /* Pill shape */
    color: #000;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
}
.prop-cart-btn svg {
    stroke: #000;
}
/* User requested hover effects */
.prop-cart-btn:hover {
    background: var(--primary-neon);
    box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
}
.prop-heart-btn:hover {
    background: rgba(255, 51, 102, 0.1);
    border-color: #ff3366;
}
.prop-heart-btn:hover svg {
    fill: #ff3366;
    stroke: #ff3366;
}
`;
if(css.includes('.prop-card {\n    background: #0d0f14;')) {
    css = css.replace(cssToRemove, '');
    fs.writeFileSync('styles.css', css);
}

// Revert index.html back to the previous state
let html = fs.readFileSync('index.html', 'utf-8');

const originalGrid = \`            <div class="grid-4-cols">
                <!-- Product 1 -->
                <div class="prop-card">
                    <div class="prop-card-top">
                        <div class="prop-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21L12 8l4 13"/><path d="M5 21l7-17 7 17"/></svg>
                        </div>
                        <div class="prop-price">$149.00</div>
                    </div>
                    <div class="prop-card-middle">
                        <h3 class="prop-title">Unfair Advantage Pack</h3>
                        <p class="prop-desc">Advanced multi-timeframe trend confirmatio using dynamic volatility bands.</p>
                        <div class="prop-badges">
                            <span class="prop-badge green">7 SCRIPT INCDUDED</span>
                            <span class="prop-badge cyan">TRADINGVIEW</span>
                        </div>
                    </div>
                    <div class="prop-card-bottom">
                        <button class="prop-heart-btn" aria-label="Add to wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
                        <button class="prop-cart-btn" aria-label="Add to cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add to cart</button>
                    </div>
                </div>
                
                <!-- Product 2 -->
                <div class="prop-card">
                    <div class="prop-card-top">
                        <div class="prop-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21L12 8l4 13"/><path d="M5 21l7-17 7 17"/></svg>
                        </div>
                        <div class="prop-price">$149.00</div>
                    </div>
                    <div class="prop-card-middle">
                        <h3 class="prop-title">Unfair Advantage Pack</h3>
                        <p class="prop-desc">Advanced multi-timeframe trend confirmatio using dynamic volatility bands.</p>
                        <div class="prop-badges">
                            <span class="prop-badge green">7 SCRIPT INCDUDED</span>
                            <span class="prop-badge cyan">TRADINGVIEW</span>
                        </div>
                    </div>
                    <div class="prop-card-bottom">
                        <button class="prop-heart-btn" aria-label="Add to wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
                        <button class="prop-cart-btn" aria-label="Add to cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add to cart</button>
                    </div>
                </div>

                <!-- Product 3 -->
                <div class="prop-card">
                    <div class="prop-card-top">
                        <div class="prop-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21L12 8l4 13"/><path d="M5 21l7-17 7 17"/></svg>
                        </div>
                        <div class="prop-price">$149.00</div>
                    </div>
                    <div class="prop-card-middle">
                        <h3 class="prop-title">Unfair Advantage Pack</h3>
                        <p class="prop-desc">Advanced multi-timeframe trend confirmatio using dynamic volatility bands.</p>
                        <div class="prop-badges">
                            <span class="prop-badge green">7 SCRIPT INCDUDED</span>
                            <span class="prop-badge cyan">TRADINGVIEW</span>
                        </div>
                    </div>
                    <div class="prop-card-bottom">
                        <button class="prop-heart-btn" aria-label="Add to wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
                        <button class="prop-cart-btn" aria-label="Add to cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add to cart</button>
                    </div>
                </div>

                <!-- Product 4 -->
                <div class="prop-card">
                    <div class="prop-card-top">
                        <div class="prop-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21L12 8l4 13"/><path d="M5 21l7-17 7 17"/></svg>
                        </div>
                        <div class="prop-price">$149.00</div>
                    </div>
                    <div class="prop-card-middle">
                        <h3 class="prop-title">Unfair Advantage Pack</h3>
                        <p class="prop-desc">Advanced multi-timeframe trend confirmatio using dynamic volatility bands.</p>
                        <div class="prop-badges">
                            <span class="prop-badge green">7 SCRIPT INCDUDED</span>
                            <span class="prop-badge cyan">TRADINGVIEW</span>
                        </div>
                    </div>
                    <div class="prop-card-bottom">
                        <button class="prop-heart-btn" aria-label="Add to wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
                        <button class="prop-cart-btn" aria-label="Add to cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>\`;

html = html.replace(/<div class="grid-4-cols">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, originalGrid);
fs.writeFileSync('index.html', html);
console.log("Successfully reverted index.html and styles.css");
