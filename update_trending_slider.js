const fs = require('fs');

// ==== 1. Update styles.css (Add the specific Card styles + Slider styles)
let css = fs.readFileSync('styles.css', 'utf8');

const sliderAndCardStyles = `
/* Enhanced Product Card Styles */
.prop-card {
    background: #0d0f14;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 24px;
    transition: transform 0.3s, border-color 0.3s;
    display: flex;
    flex-direction: column;
    height: 100%;
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
.prop-badge.green {
    color: #00ff88;
    background: rgba(0, 255, 136, 0.05);
    border: 1px solid rgba(0, 255, 136, 0.2);
    padding: 4px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;
}
.prop-badge.cyan {
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.05);
    border: 1px solid rgba(0, 212, 255, 0.2);
    padding: 4px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;
}
.prop-card-bottom {
    display: flex;
    gap: 12px;
    margin-top: auto;
}
.prop-heart-btn {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #111;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: #888;
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.3s ease;
}
.prop-heart-btn svg { stroke: #888; }
.prop-heart-btn:hover {
    background: rgba(255, 51, 102, 0.1);
    border-color: #ff3366;
}
.prop-heart-btn:hover svg { fill: #ff3366; stroke: #ff3366; }

.prop-cart-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #fff;
    border: none;
    height: 44px;
    border-radius: 40px;
    color: #000;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
}
.prop-cart-btn svg { stroke: #000; }
.prop-cart-btn:hover {
    background: var(--primary-neon);
    box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
}

/* Trending Slider Specific CSS */
.trending-slider-container {
    width: 100%;
    overflow: hidden;
    padding: 10px 0 30px; /* shadow clipping prevention */
}
.trending-slider-track {
    display: flex;
    gap: 24px;
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
.trending-slider-track .prop-card {
    min-width: calc(25% - 18px);
}
@media (max-width: 1100px) {
    .trending-slider-track .prop-card { min-width: calc(33.333% - 16px); }
}
@media (max-width: 800px) {
    .trending-slider-track .prop-card { min-width: calc(50% - 12px); }
}
@media (max-width: 500px) {
    .trending-slider-track .prop-card { min-width: 100%; }
}
`;

if (!css.includes('.trending-slider-container')) {
    fs.writeFileSync('styles.css', css + '\n\n' + sliderAndCardStyles);
}

// ==== 2. Update index.html
let html = fs.readFileSync('index.html', 'utf8');

// The iconic A SVG
const iconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M5 22V12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10"/><path d="M9 13v9"/></svg>`;

const products = [
    { title: "Unfair Advantage Pack", price: "$149.00", desc: "Advanced multi-timeframe trend confirmatio using dynamic volatility bands.", t1: "7 SCRIPT INCDUDED", t1c: "green", t2: "TRADINGVIEW", t2c: "cyan" },
    { title: "Momentum Reversal", price: "$129.00", desc: "Catch institutional reversals with a high win rate on lower timeframes.", t1: "WIN: 78%", t1c: "green", t2: "TRADINGVIEW", t2c: "cyan" },
    { title: "Grid Master EA", price: "$299.00", desc: "Fully automated grid and DCA algorithm optimized for ranging crypto markets.", t1: "ROI: +18%/mo", t1c: "green", t2: "PYTHON BOT", t2c: "cyan" },
    { title: "Gold Scalper Pro", price: "$199.00", desc: "Specifically tuned for XAUUSD with strict risk management parameters and trailing stops.", t1: "WIN: 88%", t1c: "green", t2: "METATRADER 4", t2c: "cyan" },
    { title: "OrderBlock Finder", price: "$89.00", desc: "Automatically plots unmitigated supply and demand zones for precision entries.", t1: "RR: 1:3 Min", t1c: "green", t2: "TRADINGVIEW", t2c: "cyan" },
    { title: "Volume Profile Delta", price: "$349.00", desc: "Advanced DOM and footprint charting add-on for serious futures day traders.", t1: "WIN: 65%", t1c: "green", t2: "NINJATRADER", t2c: "cyan" },
    { title: "Mempool Sniper", price: "$599.00", desc: "High-speed on-chain listener for front-running decentralized dex launches.", t1: "ROI: +42%/mo", t1c: "green", t2: "PYTHON BOT", t2c: "cyan" },
    { title: "Liquidity Hunter", price: "$159.00", desc: "Highlights hidden resting liquidity pools to catch smart money grabs.", t1: "WIN: 72%", t1c: "green", t2: "TRADINGVIEW", t2c: "cyan" }
];

let generatedCardsHTML = '';
products.forEach(p => {
    generatedCardsHTML += `
                <div class="prop-card">
                    <div class="prop-card-top">
                        <div class="prop-icon">${iconSvg}</div>
                        <div class="prop-price">${p.price}</div>
                    </div>
                    <div class="prop-card-middle">
                        <h3 class="prop-title">${p.title}</h3>
                        <p class="prop-desc">${p.desc}</p>
                        <div class="prop-badges">
                            <span class="prop-badge ${p.t1c}">${p.t1}</span>
                            <span class="prop-badge ${p.t2c}">${p.t2}</span>
                        </div>
                    </div>
                    <div class="prop-card-bottom">
                        <button class="prop-heart-btn" aria-label="Add to wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
                        <button class="prop-cart-btn" aria-label="Add to cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add to cart</button>
                    </div>
                </div>`;
});

const newTrendingHTML = `<!-- Featured Scripts Store -->
    <section id="featured" class="store section">
        <div class="container">
            <!-- Exact Original Header with Arrows -->
            <div class="section-header flex-between mb-4" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px;">
                <div>
                    <div class="badge-pill" style="display:inline-flex; align-items:center; gap:8px; background:transparent; border: 1px solid rgba(255,255,255,0.1); padding: 4px 12px; border-radius: 40px; font-size: 0.8rem; margin-bottom: 20px; color: #888;">
                        <span style="color: var(--primary-neon);">★</span> Elite Algorithmic Edge
                    </div>
                    <h2 class="section-title" style="font-family: 'Space Mono', monospace; font-size: 2.8rem; color: #fff; letter-spacing: -1px; margin-bottom: 5px;">Trending Scripts</h2>
                    <p class="section-subtitle" style="margin-bottom: 0; color: #888;">Our most profitable algorithms this month.</p>
                </div>
                <div class="nav-arrows" style="display:flex; gap:10px;">
                    <button id="trendPrevBtn" style="width:40px; height:40px; border-radius:50%; background:#111; border:1px solid rgba(255,255,255,0.1); color:white; display:flex; align-items:center; justify-content:center; cursor:pointer; transition: all 0.3s;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                    <button id="trendNextBtn" style="width:40px; height:40px; border-radius:50%; background:#111; border:1px solid rgba(255,255,255,0.1); color:white; display:flex; align-items:center; justify-content:center; cursor:pointer; transition: all 0.3s;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                </div>
            </div>
            
            <div class="trending-slider-container">
                <div class="trending-slider-track" id="trendingSlider">
${generatedCardsHTML}
                </div>
            </div>
        </div>
    </section>`;

html = html.replace(/<!-- Featured Scripts Store -->[\s\S]*?(?=<!-- Feature Scripts Section -->)/, newTrendingHTML + '\n\n    ');

// Add inline slider logic to bottom before </body> if not already there
if (!html.includes('id="trendNextBtn"')) {
    // handled by replace
}
const scriptLogic = `
    <!-- Trending Slider Logic -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('trendingSlider');
            const btnPrev = document.getElementById('trendPrevBtn');
            const btnNext = document.getElementById('trendNextBtn');
            
            if(!track || !btnPrev || !btnNext) return;

            let currentIndex = 0;
            const updateSlider = () => {
                const cardWidth = track.children[0].offsetWidth;
                const gap = 24; // from gap: 24px in css
                const moveAmount = cardWidth + gap;
                track.style.transform = \`translateX(-\${currentIndex * moveAmount}px)\`;
            };

            const maxVisible = window.innerWidth > 1100 ? 4 : (window.innerWidth > 800 ? 3 : (window.innerWidth > 500 ? 2 : 1));
            const totalCards = track.children.length;

            btnNext.addEventListener('click', () => {
                if (currentIndex < totalCards - maxVisible) {
                    currentIndex++;
                    updateSlider();
                }
            });

            btnPrev.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                }
            });

            window.addEventListener('resize', updateSlider);
        });
    </script>
`;
if (!html.includes('<!-- Trending Slider Logic -->')) {
    html = html.replace('</body>', scriptLogic + '</body>');
}

fs.writeFileSync('index.html', html);
console.log("Trending section fully overhauled with sliders and custom cards.");
