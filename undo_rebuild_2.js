const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf-8');
const searchString = '.prop-card {\\n    background: #0d0f14;';
if(css.includes(searchString) || css.includes('.prop-card {\\r\\n    background: #0d0f14;')) {
    // We want to delete from that line to the end of the file
    const index = css.lastIndexOf('.prop-card {');
    if (index !== -1 && index > 1000) {
        css = css.substring(0, index);
        fs.writeFileSync('styles.css', css);
        console.log("CSS reverted!");
    }
} else {
    // Maybe try an exact match without newlines
    console.log("Could not find the prop-card override in css.");
}

// Just copy a clean html backup from before the cards were broken if possible
// Instead let's just restore the class names in html
let html = fs.readFileSync('index.html', 'utf-8');
const regex = /<div class="grid-4-cols">[\\s\\S]*?<\\/div>\\s*<\\/div>\\s*<\\/section>/;
const replacement = '<div class="grid-4-cols">\\n' +
'                <div class="prop-card">\\n' +
'                    <div class="prop-card-top">\\n' +
'                        <div class="prop-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21L12 8l4 13"/><path d="M5 21l7-17 7 17"/></svg></div>\\n' +
'                        <div class="prop-price">$149.00</div>\\n' +
'                    </div>\\n' +
'                    <div class="prop-card-middle">\\n' +
'                        <h3 class="prop-title">Unfair Advantage Pack</h3>\\n' +
'                        <p class="prop-desc">Advanced multi-timeframe trend confirmatio using dynamic volatility bands.</p>\\n' +
'                        <div class="prop-badges"><span class="prop-badge green">7 SCRIPT INCDUDED</span><span class="prop-badge cyan">TRADINGVIEW</span></div>\\n' +
'                    </div>\\n' +
'                    <div class="prop-card-bottom">\\n' +
'                        <button class="prop-heart-btn" aria-label="Add to wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>\\n' +
'                        <button class="prop-cart-btn" aria-label="Add to cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add to cart</button>\\n' +
'                    </div>\\n' +
'                </div>\\n' +
'                <div class="prop-card">\\n' +
'                    <div class="prop-card-top">\\n' +
'                        <div class="prop-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21L12 8l4 13"/><path d="M5 21l7-17 7 17"/></svg></div>\\n' +
'                        <div class="prop-price">$149.00</div>\\n' +
'                    </div>\\n' +
'                    <div class="prop-card-middle">\\n' +
'                        <h3 class="prop-title">Unfair Advantage Pack</h3>\\n' +
'                        <p class="prop-desc">Advanced multi-timeframe trend confirmatio using dynamic volatility bands.</p>\\n' +
'                        <div class="prop-badges"><span class="prop-badge green">7 SCRIPT INCDUDED</span><span class="prop-badge cyan">TRADINGVIEW</span></div>\\n' +
'                    </div>\\n' +
'                    <div class="prop-card-bottom">\\n' +
'                        <button class="prop-heart-btn" aria-label="Add to wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>\\n' +
'                        <button class="prop-cart-btn" aria-label="Add to cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add to cart</button>\\n' +
'                    </div>\\n' +
'                </div>\\n' +
'                <div class="prop-card">\\n' +
'                    <div class="prop-card-top">\\n' +
'                        <div class="prop-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21L12 8l4 13"/><path d="M5 21l7-17 7 17"/></svg></div>\\n' +
'                        <div class="prop-price">$149.00</div>\\n' +
'                    </div>\\n' +
'                    <div class="prop-card-middle">\\n' +
'                        <h3 class="prop-title">Unfair Advantage Pack</h3>\\n' +
'                        <p class="prop-desc">Advanced multi-timeframe trend confirmatio using dynamic volatility bands.</p>\\n' +
'                        <div class="prop-badges"><span class="prop-badge green">7 SCRIPT INCDUDED</span><span class="prop-badge cyan">TRADINGVIEW</span></div>\\n' +
'                    </div>\\n' +
'                    <div class="prop-card-bottom">\\n' +
'                        <button class="prop-heart-btn" aria-label="Add to wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>\\n' +
'                        <button class="prop-cart-btn" aria-label="Add to cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add to cart</button>\\n' +
'                    </div>\\n' +
'                </div>\\n' +
'                <div class="prop-card">\\n' +
'                    <div class="prop-card-top">\\n' +
'                        <div class="prop-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21L12 8l4 13"/><path d="M5 21l7-17 7 17"/></svg></div>\\n' +
'                        <div class="prop-price">$149.00</div>\\n' +
'                    </div>\\n' +
'                    <div class="prop-card-middle">\\n' +
'                        <h3 class="prop-title">Unfair Advantage Pack</h3>\\n' +
'                        <p class="prop-desc">Advanced multi-timeframe trend confirmatio using dynamic volatility bands.</p>\\n' +
'                        <div class="prop-badges"><span class="prop-badge green">7 SCRIPT INCDUDED</span><span class="prop-badge cyan">TRADINGVIEW</span></div>\\n' +
'                    </div>\\n' +
'                    <div class="prop-card-bottom">\\n' +
'                        <button class="prop-heart-btn" aria-label="Add to wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>\\n' +
'                        <button class="prop-cart-btn" aria-label="Add to cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add to cart</button>\\n' +
'                    </div>\\n' +
'                </div>\\n' +
'            </div>\\n' +
'        </div>\\n' +
'    </section>';

html = html.replace(regex, replacement);
fs.writeFileSync('index.html', html);
console.log("HTML reverted");
