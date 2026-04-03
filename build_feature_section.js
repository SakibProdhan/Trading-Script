const fs = require('fs');

const iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M5 22V12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10"/><path d="M9 13v9"/></svg>`;

const productsTradingView = [
    { title: "Smart Money Concepts", price: "$149.00", desc: "Automated SMC indicator defining supply, demand, and fair value gaps.", priceNum: 149, t1: "WIN: 75%", t1c: "green", t2: "TRADINGVIEW", t2c: "cyan" },
    { title: "Trend Confirmation Pro", price: "$99.00", desc: "Filter out market noise with dynamic volatility bands.", priceNum: 99, t1: "TREND FILTER", t1c: "green", t2: "TRADINGVIEW", t2c: "cyan" },
    { title: "OrderBlock Matrix", price: "$129.00", desc: "Maps hidden institutional order blocks across multiple timeframes.", priceNum: 129, t1: "RR: 1:4", t1c: "green", t2: "TRADINGVIEW", t2c: "cyan" },
    { title: "Liquidity Sweep Toolkit", price: "$199.00", desc: "Alerts you perfectly when retail liquidity is taken efficiently.", priceNum: 199, t1: "SNIPER ENTRIES", t1c: "green", t2: "TRADINGVIEW", t2c: "cyan" },
    { title: "Fibonacci Auto-Trader", price: "$89.00", desc: "Automatically plots the optimal fib retracement levels live.", priceNum: 89, t1: "WIN: 68%", t1c: "green", t2: "TRADINGVIEW", t2c: "cyan" },
    { title: "Volume Delta Profiler", price: "$249.00", desc: "Uncover hidden buying and selling pressure with deep volume analytics.", priceNum: 249, t1: "ADVANCED", t1c: "green", t2: "TRADINGVIEW", t2c: "cyan" },
    { title: "Reversal Divergence", price: "$159.00", desc: "Spot hidden RSI and MACD divergences automatically.", priceNum: 159, t1: "WIN: 82%", t1c: "green", t2: "TRADINGVIEW", t2c: "cyan" },
    { title: "Breakout Mastery EA", price: "$179.00", desc: "Capture explosive moves out of tight consolidation zones seamlessly.", priceNum: 179, t1: "HIGH RR", t1c: "green", t2: "TRADINGVIEW", t2c: "cyan" }
];

const productsMetaTrader = [
    { title: "Gold Scalper EA", price: "$299.00", desc: "Optimized for XAUUSD on the M5 timeframe with trailing stops.", priceNum: 299, t1: "WIN: 88%", t1c: "green", t2: "METATRADER 4", t2c: "cyan" },
    { title: "Grid Recovery Bot", price: "$349.00", desc: "Safe grid strategy designed to recover drawdown efficiently.", priceNum: 349, t1: "DRAWDOWN < 5%", t1c: "green", t2: "METATRADER 4", t2c: "cyan" },
    { title: "News Hedging EA", price: "$199.00", desc: "Automatically places straddle orders 10 seconds before high impact news.", priceNum: 199, t1: "NEWS TRADER", t1c: "green", t2: "METATRADER 4", t2c: "cyan" },
    { title: "London Breakout Pro", price: "$149.00", desc: "Traded specifically during the London open session for maximum volatility.", priceNum: 149, t1: "SESSION BOT", t1c: "green", t2: "METATRADER 4", t2c: "cyan" },
    { title: "Prop Firm Passer", price: "$499.00", desc: "Low risk MT4 expert advisor designed to pass challenge phases.", priceNum: 499, t1: "PROP FIRM", t1c: "green", t2: "METATRADER 4", t2c: "cyan" },
    { title: "Night Scalper EA", price: "$249.00", desc: "Exploits low volatility Asian session ranges with precise boundaries.", priceNum: 249, t1: "ASIAN SESSION", t1c: "green", t2: "METATRADER 4", t2c: "cyan" },
    { title: "EURUSD Pips Hunter", price: "$129.00", desc: "Strictly confined to EURUSD trends using moving average crossovers.", priceNum: 129, t1: "WIN: 71%", t1c: "green", t2: "METATRADER 4", t2c: "cyan" },
    { title: "Trailing Stop Manager", price: "$69.00", desc: "Utility EA that trails your manual positions automatically.", priceNum: 69, t1: "UTILITY", t1c: "green", t2: "METATRADER 4", t2c: "cyan" }
];

const productsPythonBots = [
    { title: "Mempool Sniper", price: "$599.00", desc: "High-speed token sniper for ETH and BSC networks.", priceNum: 599, t1: "ON-CHAIN", t1c: "green", t2: "PYTHON BOT", t2c: "cyan" },
    { title: "Arbitrage Triangle", price: "$799.00", desc: "Finds micro discrepancies between 3 trading pairs on centralized exchanges.", priceNum: 799, t1: "ARBITRAGE", t1c: "green", t2: "PYTHON BOT", t2c: "cyan" },
    { title: "DCA Grid Node", price: "$299.00", desc: "Fully detached Python server for scaling in and out of crypto spot positions.", priceNum: 299, t1: "SPOT TRADING", t1c: "green", t2: "PYTHON BOT", t2c: "cyan" },
    { title: "Funding Rate Harvester", price: "$399.00", desc: "Automatically long/short perpetuals to harvest delta-neutral yields.", priceNum: 399, t1: "DELTA NEUTRAL", t1c: "green", t2: "PYTHON BOT", t2c: "cyan" },
    { title: "Sentiment Analysis Bot", price: "$449.00", desc: "Scrapes Twitter and Reddit to front-run hype driven coin pumps.", priceNum: 449, t1: "AI DRIVEN", t1c: "green", t2: "PYTHON BOT", t2c: "cyan" },
    { title: "Stat-Arb Co-integration", price: "$899.00", desc: "Trades the spread between two highly correlated crypto assets crossing.", priceNum: 899, t1: "QUANTITATIVE", t1c: "green", t2: "PYTHON BOT", t2c: "cyan" },
    { title: "Market Maker Liquidity", price: "$1000.00+", desc: "Provide continuous liquidity around the spread to capture fees.", priceNum: 1000, t1: "INSTITUTIONAL", t1c: "green", t2: "PYTHON BOT", t2c: "cyan" },
    { title: "Flash Loan Executor", price: "$649.00", desc: "Identify and execute uncollateralized arbitrage in a single block.", priceNum: 649, t1: "DEFI", t1c: "green", t2: "PYTHON BOT", t2c: "cyan" }
];

function generateGridHTML(productsArray, id, isVisible) {
    let html = \`<div class="grid-4-cols category-grid" id="\${id}" style="display: \${isVisible ? 'grid' : 'none'}; gap: 24px;">\`;
    productsArray.forEach(p => {
        html += \`
                <div class="prop-card">
                    <div class="prop-card-top">
                        <div class="prop-icon">\${iconSvg}</div>
                        <div class="prop-price">\${p.price}</div>
                    </div>
                    <div class="prop-card-middle">
                        <h3 class="prop-title">\${p.title}</h3>
                        <p class="prop-desc">\${p.desc}</p>
                        <div class="prop-badges">
                            <span class="prop-badge \${p.t1c}">\${p.t1}</span>
                            <span class="prop-badge \${p.t2c}">\${p.t2}</span>
                        </div>
                    </div>
                    <div class="prop-card-bottom">
                        <button class="prop-heart-btn" aria-label="Add to wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
                        <button class="prop-cart-btn" aria-label="Add to cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add to cart</button>
                    </div>
                </div>\`;
    });
    html += \`</div>\`;
    return html;
}

const gridsHTML = 
    generateGridHTML(productsTradingView, 'grid-tradingview', true) + '\\n' +
    generateGridHTML(productsMetaTrader, 'grid-metatrader', false) + '\\n' +
    generateGridHTML(productsPythonBots, 'grid-pythonbots', false);


const brandNewSectionHTML = \`<section id="feature-scripts" class="store section bg-darker">
        <div class="container">
            <div class="featured-header-wrapper" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 50px;">
                <div class="featured-header-left">
                    <div class="badge-pill" style="display:inline-flex; align-items:center; gap:8px; background:transparent; border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 16px; border-radius: 40px; font-size: 0.85rem; color: #888; font-weight: 500; margin-bottom: 25px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary-neon)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="fill: var(--primary-neon);"><rect x="9" y="9" width="6" height="6" transform="rotate(45 12 12)"/></svg> 
                        Featured Products
                    </div>
                    <h2 style="font-family: 'Space Mono', monospace; font-size: 3.2rem; color: #fff; line-height: 1.1; letter-spacing: -1px; margin: 0;">Popular tools<br>traders start with.</h2>
                </div>
                <!-- 3 Popular Categories Buttons -->
                <div class="featured-categories" style="display: flex; gap: 15px;">
                    <button class="btn-category active-category" onclick="switchCategory('tradingview', this)" style="background: var(--primary-neon); color: #000; border-color: var(--primary-neon); border-radius: 40px; padding: 10px 24px; font-weight: 600; cursor: pointer; border: 1px solid transparent; font-size: 0.95rem;">TradingView</button>
                    <button class="btn-category" onclick="switchCategory('metatrader', this)" style="background: transparent; color: #e0e0e0; border-color: rgba(255,255,255,0.1); border-radius: 40px; padding: 10px 24px; font-weight: 600; cursor: pointer; border: 1px solid rgba(255,255,255,0.2); font-size: 0.95rem;">MetaTrader 4</button>
                    <button class="btn-category" onclick="switchCategory('pythonbots', this)" style="background: transparent; color: #e0e0e0; border-color: rgba(255,255,255,0.1); border-radius: 40px; padding: 10px 24px; font-weight: 600; cursor: pointer; border: 1px solid rgba(255,255,255,0.2); font-size: 0.95rem;">Python Bots</button>
                </div>
            </div>
            
            \${gridsHTML}

            <div class="text-center" style="margin-top: 60px;">
                <a href="#featured" class="btn btn-outline-pill btn-large outline-dark" style="border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 15px 30px; border-radius: 40px; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; font-weight: 600; background: rgba(255,255,255,0.02); transition: all 0.3s; cursor: pointer;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">Browse All Feature Scripts <span class="btn-icon">&rarr;</span></a>
            </div>
        </div>
        
        <script>
            function switchCategory(cat, btn) {
                // Update buttons
                const buttons = btn.parentElement.querySelectorAll('.btn-category');
                buttons.forEach(b => {
                    b.style.background = 'transparent';
                    b.style.color = '#e0e0e0';
                    b.style.borderColor = 'rgba(255,255,255,0.2)';
                });
                btn.style.background = 'var(--primary-neon)';
                btn.style.color = '#000';
                btn.style.borderColor = 'var(--primary-neon)';
                
                // Hide all grids
                document.getElementById('grid-tradingview').style.display = 'none';
                document.getElementById('grid-metatrader').style.display = 'none';
                document.getElementById('grid-pythonbots').style.display = 'none';
                
                // Show active grid
                document.getElementById('grid-' + cat).style.display = 'grid';
            }
        </script>
    </section>\`;

let html = fs.readFileSync('index.html', 'utf8');

// Replace the Feature Scripts Section
html = html.replace(/<!-- Feature Scripts Section -->[\\s\\S]*?(?=<!-- FAQ Section -->)/, brandNewSectionHTML + '\\n\\n    ');

fs.writeFileSync('index.html', html);
console.log("Updated feature-scripts section with perfectly styled Title/Categories and 24 uniquely generated products!");
