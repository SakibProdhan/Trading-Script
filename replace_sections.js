const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf-8');

const startMarker = '    <!-- Why Choose Us -->';
const endMarker = '    <!-- Featured Scripts Store -->';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.log("Could not find markers!");
    process.exit(1);
}

const replacementHTML = `
    <!-- Combined Redesigned Sections Wrap -->
    <div class="crypto-toolkit-wrap section" style="position: relative; padding: 100px 0;">
        <div class="perspective-grid-bg">
            <div class="perspective-grid-inner"></div>
        </div>

        <!-- How It Works Section -->
        <section id="how-it-works" class="timeline-section" style="position: relative; z-index: 2; margin-bottom: 120px;">
            <div class="container timeline-container">
                <div class="timeline-left">
                    <div class="badge-pill" style="display:inline-flex; align-items:center; gap:8px; background:transparent; border: 1px solid rgba(255,255,255,0.1); padding: 4px 12px; font-size: 0.8rem; margin-bottom: 20px;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--primary-neon)"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"></polygon></svg> How it Works
                    </div>
                    <h2 class="section-title">How TradeLogic Works<br>to Get You Started</h2>
                </div>
                
                <div class="timeline-right">
                    <div class="timeline-line"></div>
                    
                    <div class="timeline-item">
                        <div class="timeline-marker">01</div>
                        <div class="timeline-content">
                            <div class="timeline-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
                            <h3>Purchase Your License</h3>
                            <p>Secure your script access through our encrypted dashboard. Enjoy a smooth onboarding process.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-marker dimmed">02</div>
                        <div class="timeline-content">
                            <div class="timeline-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path></svg></div>
                            <h3>Download or Connect</h3>
                            <p>Easily download indicator files or connect your MT4/MT5 API directly. Multi-platform supported.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-marker dimmed">03</div>
                        <div class="timeline-content">
                            <div class="timeline-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></div>
                            <h3>Set Your Parameters</h3>
                            <p>Tweak risk configurations or use our pre-optimized institutional presets. So you can trade your way.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-marker dimmed">04</div>
                        <div class="timeline-content">
                            <div class="timeline-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
                            <h3>Automate & Monitor</h3>
                            <p>Let the code execute precisely. Monitor performance in real-time with full control at your fingertips.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us Section -->
        <section id="why-choose-us" class="toolkit-section" style="position: relative; z-index: 2;">
            <div class="container">
                <div class="text-center mb-5">
                    <div class="badge-pill mx-auto" style="display:inline-flex; align-items:center; gap:8px; background:transparent; border: 1px solid rgba(255,255,255,0.1); padding: 4px 12px; font-size: 0.8rem; margin-bottom: 20px;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--primary-neon)"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"></polygon></svg> Why Choose Us
                    </div>
                    <h2 class="section-title">Your Complete Trading Toolkit</h2>
                    <p class="section-subtitle" style="max-width: 600px; margin: 0 auto;">TradeLogic offers powerful features to help you test, execute, and manage your algorithmic portfolio confidently.</p>
                </div>
                
                <div class="toolkit-grid">
                    <div class="toolkit-card">
                        <div class="toolkit-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" stroke-width="2"/></svg></div>
                        <h3>Backtested Reliability</h3>
                        <p>Ensure robustness with included max drawdown & sharpe ratio reports.</p>
                    </div>
                    <div class="toolkit-card">
                        <div class="toolkit-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="20" x2="12" y2="10" stroke="currentColor" stroke-width="2"/><line x1="18" y1="20" x2="18" y2="4" stroke="currentColor" stroke-width="2"/><line x1="6" y1="20" x2="6" y2="16" stroke="currentColor" stroke-width="2"/></svg></div>
                        <h3>Zero-Lag Execution</h3>
                        <p>Strictly no-repainting algorithms for precision live execution.</p>
                    </div>
                    <div class="toolkit-card">
                        <div class="toolkit-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="currentColor" stroke-width="2"/></svg></div>
                        <h3>Dynamic Risk</h3>
                        <p>Automated position sizing and trailing stops built directly in.</p>
                    </div>
                    <div class="toolkit-card">
                        <div class="toolkit-icon"><svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 18h.01" stroke="currentColor" stroke-width="2"/></svg></div>
                        <h3>Cross-Platform</h3>
                        <p>Deploy seamlessly across TradingView, MetaTrader, and Python.</p>
                    </div>
                    <div class="toolkit-card">
                        <div class="toolkit-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="12 6 12 12 16 14" fill="none" stroke="currentColor" stroke-width="2"/></svg></div>
                        <h3>24/7 Automation</h3>
                        <p>Access reliable, around-the-clock market monitoring while you sleep.</p>
                    </div>
                    <div class="toolkit-card">
                        <div class="toolkit-icon"><svg viewBox="0 0 24 24"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" fill="none" stroke="currentColor" stroke-width="2"/><path d="M22 12A10 10 0 0 0 12 2v10z" fill="none" stroke="currentColor" stroke-width="2"/></svg></div>
                        <h3>Lifetime Updates</h3>
                        <p>Get free ongoing strategy adjustments whenever the market shifts.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

`;

const newContent = content.substring(0, startIndex) + replacementHTML + content.substring(endIndex);
fs.writeFileSync('index.html', newContent);
console.log("Replaced successfully!");
