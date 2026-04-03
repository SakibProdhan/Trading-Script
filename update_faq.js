const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

const newFaqHTML = `
    <!-- FAQ Section -->
    <section id="faq" class="faq section">
        <div class="container">
            <div class="section-header text-center mb-5">
                <span class="badge feature-badge" style="border-color: rgba(0, 255, 136, 0.3); color: var(--primary-neon); background: rgba(0, 255, 136, 0.05); text-transform: none; display: inline-flex; justify-content: center; align-items: center; gap: 8px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary-neon)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    FAQ
                </span>
                <h2 class="section-title" style="font-size: 2.8rem; margin-top: 15px;">Common questions before you buy.</h2>
                <p class="section-subtitle">The essentials buyers usually want answered first.</p>
            </div>
            
            <div class="faq-accordion" style="max-width: 800px; margin: 0 auto;">
                <div class="faq-item">
                    <button class="faq-question">
                        <span>Does this work with TradingView?</span>
                        <div class="faq-icon">+</div>
                    </button>
                    <div class="faq-answer">
                        <p>Yes, all indicator variants are perfectly native to Pine Script! After checkout, just enter your TradingView username and invite-only access will be instantly granted strictly to your account.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">
                        <span>What do I receive after purchase?</span>
                        <div class="faq-icon">+</div>
                    </button>
                    <div class="faq-answer">
                        <p>You'll receive instant lifetime access to the invite-only indicators (or EA files), comprehensive PDF & Video installation guides, pre-optimized settings templates, and an exclusive invite to our private algorithmic Discord community.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">
                        <span>How do invite-only tools work?</span>
                        <div class="faq-icon">+</div>
                    </button>
                    <div class="faq-answer">
                        <p>Once you purchase and provide your handle, the locked script will permanently appear under the 'Invite-only scripts' tab directly inside your TradingView indicator menu. No messy downloading or coding required!</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">
                        <span>Is setup difficult?</span>
                        <div class="faq-icon">+</div>
                    </button>
                    <div class="faq-answer">
                        <p>Not at all. Absolute beginners are live in under 5 minutes. You simply click to add the indicator to your chart, and our pre-configured institutional parameters immediately take over.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">
                        <span>Where do I get help if I need it?</span>
                        <div class="faq-icon">+</div>
                    </button>
                    <div class="faq-answer">
                        <p>Support is available 24/7! You can open a ticket seamlessly in our private Discord server, or email our support staff directly from your dashboard. We usually guarantee resolution within hours.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

html = html.replace(/<!-- FAQ Section -->[\s\S]*?(?=<!-- Blog Section -->)/, newFaqHTML + '\n\n    ');

fs.writeFileSync('index.html', html);
console.log("FAQ section updated successfully!");
