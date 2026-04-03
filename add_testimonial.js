const fs = require('fs');

// UPDATE HTML
let html = fs.readFileSync('index.html', 'utf-8');

const testimonialHtml = `
    <!-- Testimonial Section -->
    <section class="section testimonial-section">
        <div class="container text-center section-header">
            <span class="badge feature-badge" style="border-color: rgba(0, 255, 136, 0.3); color: var(--primary-neon); background: rgba(0, 255, 136, 0.05); text-transform: none;">Testimonial</span>
            <h2 style="font-size: 2.8rem; margin-top: 15px;">Join Thousands Who Trust TradeLogic</h2>
        </div>
        
        <div class="testimonial-marquee-wrapper">
            <div class="testimonial-marquee row-1">
                <!-- Group 1 -->
                <div class="testimonial-card">
                    <p class="testimonial-text">"TradeLogic makes algorithmic trading simple! As a beginner, I was able to set up my MT4 account and start trading in no time. The pure automation makes learning about crypto stress-free and enjoyable."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar" style="background-image: url('https://i.pravatar.cc/100?img=47');"></div>
                        <div class="author-info">
                            <h4>Emily Richmond</h4>
                            <span>Retail Trader</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card active-card">
                    <p class="testimonial-text">"Security is my top priority, and TradeLogic delivers execution flawlessly. I trust them to manage my prop assets, and the 24/7 support is a bonus! Knowing there's dedicated help gives me peace of mind."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar" style="background-image: url('https://i.pravatar.cc/100?img=11');"></div>
                        <div class="author-info">
                            <h4>Mark Leeborn</h4>
                            <span>Prop Firm Specialist</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"The integrations with popular indicators make managing my assessments much easier. TradeLogic is my go-to platform because of the flexibility it offers with all my existing MT5 templates."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar" style="background-image: url('https://i.pravatar.cc/100?img=44');"></div>
                        <div class="author-info">
                            <h4>Olivia Mulligan</h4>
                            <span>Fund Manager</span>
                        </div>
                    </div>
                </div>
                <!-- Group 1 Clone for smooth infinite scroll -->
                <div class="testimonial-card">
                    <p class="testimonial-text">"TradeLogic makes algorithmic trading simple! As a beginner, I was able to set up my MT4 account and start trading in no time. The pure automation makes learning about crypto stress-free and enjoyable."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar" style="background-image: url('https://i.pravatar.cc/100?img=47');"></div>
                        <div class="author-info">
                            <h4>Emily Richmond</h4>
                            <span>Retail Trader</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card active-card">
                    <p class="testimonial-text">"Security is my top priority, and TradeLogic delivers execution flawlessly. I trust them to manage my prop assets, and the 24/7 support is a bonus! Knowing there's dedicated help gives me peace of mind."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar" style="background-image: url('https://i.pravatar.cc/100?img=11');"></div>
                        <div class="author-info">
                            <h4>Mark Leeborn</h4>
                            <span>Prop Firm Specialist</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"The integrations with popular indicators make managing my assessments much easier. TradeLogic is my go-to platform because of the flexibility it offers with all my existing MT5 templates."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar" style="background-image: url('https://i.pravatar.cc/100?img=44');"></div>
                        <div class="author-info">
                            <h4>Olivia Mulligan</h4>
                            <span>Fund Manager</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-marquee row-2">
                <!-- Group 2 -->
                <div class="testimonial-card">
                    <p class="testimonial-text">"I've trusted TradeLogic for months now, and it's changed the way I manage my crypto algorithms. The platform is reliable, and constantly improving. It's the only logic suite I trust for my prop investments."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar" style="background-image: url('https://i.pravatar.cc/100?img=33');"></div>
                        <div class="author-info">
                            <h4>Alex Adams</h4>
                            <span>Quantitative Analyst</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"TradeLogic's instant API webhooks are a game-changer. I can send alert logic to my private Discord in milliseconds! It's convenient, fast, and takes the hassle out of manual trading execution."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar" style="background-image: url('https://i.pravatar.cc/100?img=5');"></div>
                        <div class="author-info">
                            <h4>Sarah Thompson</h4>
                            <span>Signal Provider</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"The built-in analytics features have helped me make smarter trading decisions. I love having all the insights I need in one dashboard. TradeLogic truly feels like a tool designed for serious traders."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar" style="background-image: url('https://i.pravatar.cc/100?img=12');"></div>
                        <div class="author-info">
                            <h4>James Clark</h4>
                            <span>Experienced Trader</span>
                        </div>
                    </div>
                </div>
                <!-- Group 2 Clone -->
                <div class="testimonial-card">
                    <p class="testimonial-text">"I've trusted TradeLogic for months now, and it's changed the way I manage my crypto algorithms. The platform is reliable, and constantly improving. It's the only logic suite I trust for my prop investments."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar" style="background-image: url('https://i.pravatar.cc/100?img=33');"></div>
                        <div class="author-info">
                            <h4>Alex Adams</h4>
                            <span>Quantitative Analyst</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"TradeLogic's instant API webhooks are a game-changer. I can send alert logic to my private Discord in milliseconds! It's convenient, fast, and takes the hassle out of manual trading execution."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar" style="background-image: url('https://i.pravatar.cc/100?img=5');"></div>
                        <div class="author-info">
                            <h4>Sarah Thompson</h4>
                            <span>Signal Provider</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"The built-in analytics features have helped me make smarter trading decisions. I love having all the insights I need in one dashboard. TradeLogic truly feels like a tool designed for serious traders."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar" style="background-image: url('https://i.pravatar.cc/100?img=12');"></div>
                        <div class="author-info">
                            <h4>James Clark</h4>
                            <span>Experienced Trader</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

if (!html.includes('testimonial-section')) {
    html = html.replace('<!-- FAQ Section -->', testimonialHtml + '\n    <!-- FAQ Section -->');
    fs.writeFileSync('index.html', html);
    console.log("HTML appended!");
}

// UPDATE CSS
let css = fs.readFileSync('styles.css', 'utf-8');

const testimonialCss = `
/* Testimonial Section */
.testimonial-section {
    padding: 80px 0;
    overflow: hidden;
    position: relative;
    background: transparent;
}
.testimonial-section .section-header {
    margin-bottom: 60px;
}
.testimonial-marquee-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    position: relative;
}
/* Fading edges */
.testimonial-marquee-wrapper::before,
.testimonial-marquee-wrapper::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 250px;
    z-index: 2;
    pointer-events: none;
}
.testimonial-marquee-wrapper::before {
    left: 0;
    background: linear-gradient(to right, var(--bg-main) 0%, transparent 100%);
}
.testimonial-marquee-wrapper::after {
    right: 0;
    background: linear-gradient(to left, var(--bg-main) 0%, transparent 100%);
}
.testimonial-marquee {
    display: flex;
    gap: 30px;
    width: max-content;
    animation: scrollMarquee 40s linear infinite;
}
.testimonial-marquee.row-2 {
    animation-direction: reverse;
    transform: translateX(-10%); /* offset slightly */
}
.testimonial-marquee:hover {
    animation-play-state: paused;
}
@keyframes scrollMarquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-50% - 15px)); }
}

/* Card Styling exactly like screenshot */
.testimonial-card {
    width: 480px;
    background: #111116; /* matching dark */
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 30px; /* high pill radius from image */
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: var(--transition);
}
.testimonial-card.active-card, .testimonial-card:hover {
    border-color: var(--primary-neon);
    box-shadow: 0 0 40px rgba(0, 255, 136, 0.08); /* slight glow like the red in image, but neon */
}
.testimonial-text {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #dfdfdf;
    margin-bottom: 30px;
    font-family: var(--font-ui);
}
.testimonial-author {
    display: flex;
    align-items: center;
    gap: 15px;
}
.author-avatar {
    width: 55px; height: 55px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
}
.author-info h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    margin: 0 0 5px 0;
}
.author-info span {
    font-size: 0.9rem;
    color: #8b8b9b;
}

@media (max-width: 900px) {
    .testimonial-card { width: 360px; padding: 30px; border-radius: 20px;}
    .testimonial-marquee-wrapper::before,
    .testimonial-marquee-wrapper::after { width: 80px; }
}
`;

if (!css.includes('.testimonial-marquee-wrapper')) {
    css = css + '\n' + testimonialCss;
    fs.writeFileSync('styles.css', css);
    console.log("CSS appended!");
}
