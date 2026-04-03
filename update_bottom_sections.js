const fs = require('fs');

// ==== 1. REPLACE HTML ====
let html = fs.readFileSync('index.html', 'utf-8');

const replacementHtml = `
    <!-- Blog Section -->
    <section class="section blog-section text-center" style="padding-top: 80px; padding-bottom: 20px;">
        <div class="container relative z-10">
            <span class="badge feature-badge" style="border-color: rgba(0, 255, 136, 0.3); color: var(--primary-neon); background: rgba(0, 255, 136, 0.05); text-transform: none;">Blog</span>
            <h2 class="mb-5" style="font-size: 2.8rem; margin-top: 15px;">Algorithmic News, Trends, and Tips</h2>
            
            <div class="blog-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 50px; text-align: left;">
                <!-- Card 1 -->
                <div class="blog-card-new">
                    <div class="blog-img" style="background-image: url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80');"></div>
                    <div class="blog-content">
                        <div class="blog-meta-new">
                            <span class="blog-date">Mar 10, 2026</span>
                            <span class="blog-tag" style="background: rgba(0, 255, 136, 0.1); color: var(--primary-neon); padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; border: 1px solid rgba(0,255,136,0.3); text-transform: uppercase;">Security</span>
                        </div>
                        <h3>VPS Security: How to Keep Your Trading Funds Safe</h3>
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="blog-card-new">
                    <div class="blog-img" style="background-image: url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80');"></div>
                    <div class="blog-content">
                        <div class="blog-meta-new">
                            <span class="blog-date">Feb 20, 2026</span>
                            <span class="blog-tag" style="background: rgba(0, 255, 136, 0.1); color: var(--primary-neon); padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; border: 1px solid rgba(0,255,136,0.3); text-transform: uppercase;">Trends</span>
                        </div>
                        <h3>How to Quickly Understand Quantitative EA Basics</h3>
                    </div>
                </div>
                <!-- Card 3 -->
                <div class="blog-card-new highlight-card" style="border-color: var(--primary-neon); box-shadow: 0 0 20px rgba(0, 255, 136, 0.05);">
                    <div class="blog-img" style="background-image: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80');"></div>
                    <div class="blog-content">
                        <div class="blog-meta-new">
                            <span class="blog-date">Jan 01, 2026</span>
                            <span class="blog-tag" style="background: rgba(0, 255, 136, 0.1); color: var(--primary-neon); padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; border: 1px solid rgba(0,255,136,0.3); text-transform: uppercase;">Trends</span>
                        </div>
                        <h3>Exploring the Great Future of Automated Prop Trading</h3>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 60px;">
                <a href="#" class="btn btn-outline" style="border: 1px solid var(--primary-neon); color: var(--primary-neon); border-radius: 50px; padding: 12px 35px; background: transparent; font-weight: 600; text-decoration: none; transition: all 0.3s;">See More News</a>
            </div>
        </div>
    </section>

    <!-- Super CTA Section -->
    <section class="section super-cta-section text-center">
        <div class="cta-glow-mound"></div>
        <div class="container relative z-10" style="padding-top: 100px; padding-bottom: 150px;">
            <h2 style="font-size: 3.2rem; margin-bottom: 25px; font-weight: 600; line-height: 1.2;">Start Your Automation Journey<br>with Trade<span class="highlight">Logic</span> Today!</h2>
            <p style="color: #dfdfdf; font-size: 1.15rem; margin-bottom: 45px; max-width: 600px; margin-left: auto; margin-right: auto;">Join TradeLogic and simplify your algorithmic trading infrastructure automatically!</p>
            <a href="#" class="btn btn-cta-white" style="display: inline-flex; align-items: center; background: #fff; padding: 6px 6px 6px 28px; border-radius: 40px; text-decoration: none; box-shadow: 0 10px 30px rgba(0,255,136,0.2);">
                <span style="color: #000; font-weight: 700; margin-right: 15px; font-size: 1.05rem;">Browse Scripts</span>
                <div class="btn-cta-circle" style="width: 44px; height: 44px; background: var(--primary-neon); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="black" stroke-width="2.5" fill="none" class="feather"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
            </a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer-new">
        <div class="container">
            <div class="footer-new-grid">
                <!-- Branding & Newsletter -->
                <div class="footer-brand-col">
                    <div class="logo" style="margin-bottom: 25px; display: flex; align-items: center;">
                        <div class="logo-icon-solid" style="width: 44px; height: 44px; background: var(--primary-neon); color: #000; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.5rem; margin-right: 12px; font-family: var(--font-ui);">T</div>
                        <span class="logo-text" style="font-size: 1.8rem;">Trade<span style="color: var(--primary-neon);">Logic</span></span>
                    </div>
                    <h4 style="margin-bottom: 12px; font-size: 1.15rem; color: #fff; font-weight: 600;">Subscribe for Updates</h4>
                    <p style="color: #8b8b9b; font-size: 0.95rem; margin-bottom: 25px; line-height: 1.6;">Stay updated with the latest news in quantitative algorithms.</p>
                    <form class="footer-subscribe-form" onsubmit="event.preventDefault()">
                        <input type="email" placeholder="Enter your email" required>
                        <button type="submit" class="btn-send">Send</button>
                    </form>
                </div>
                
                <!-- Links -->
                <div class="footer-links-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">Company Details</a></li>
                        <li><a href="#">Mission</a></li>
                        <li><a href="#">Values</a></li>
                    </ul>
                </div>
                <div class="footer-links-col">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Support Center</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-links-col">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="footer-links-col">
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Twitter/X</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-copyright">
                <p>&copy; 2026 TradeLogic. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
`;

html = html.replace(/<!-- Blog Section -->[\s\S]*?(?=<script src="script\.js">)/, replacementHtml + '\n    ');
fs.writeFileSync('index.html', html);
console.log("HTML successfully updated.");

// ==== 2. UPDATE CSS ====
let css = fs.readFileSync('styles.css', 'utf-8');
const appendingCss = `

/* SUPER CTA SECTION */
.super-cta-section {
    position: relative;
    padding: 0;
    margin-top: 100px;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    overflow: hidden;
}
.cta-glow-mound {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 250vw;
    height: 800px;
    border-radius: 50% 50% 0 0;
    /* Soft glowing green cap mimicking the design screenshot! */
    background: linear-gradient(180deg, rgba(0, 255, 136, 0.4) 0%, #0b0e14 35%, #0b0e14 100%);
    box-shadow: inset 0 2px 20px rgba(0, 255, 136, 0.2), 0 -20px 80px rgba(0, 255, 136, 0.1);
    z-index: 0;
}
.btn-cta-white:hover .btn-cta-circle {
    transform: scale(1.1);
    transition: transform 0.3s;
}

/* NEW BLOG SECTION CARDS */
.blog-card-new {
    background: #111116;
    border-radius: 20px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease;
}
.blog-card-new:hover {
    transform: translateY(-5px);
    border-color: rgba(255,255,255,0.1);
}
.blog-img {
    width: 100%;
    height: 250px;
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    margin-bottom: 25px;
}
.blog-content {
    padding: 0 5px 15px;
}
.blog-meta-new {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 12px;
    font-size: 0.85rem;
    color: #8b8b9b;
}
.blog-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;
    line-height: 1.5;
    margin: 0;
}

/* NEW FOOTER */
.footer-new {
    background: #0b0e14;
    padding: 80px 0 30px;
    /* Clean separator line */
    border-top: 1px solid rgba(255, 255, 255, 0.03); 
}
.footer-new-grid {
    display: grid;
    grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin-bottom: 80px;
}
.footer-subscribe-form {
    display: flex;
    background: #15151a;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 30px;
    padding: 6px;
    width: 100%;
    max-width: 380px;
}
.footer-subscribe-form input {
    flex: 1;
    background: transparent;
    border: none;
    padding: 10px 15px 10px 20px;
    color: #fff;
    outline: none;
    font-size: 0.95rem;
}
.footer-subscribe-form .btn-send {
    background: var(--primary-neon);
    color: #000;
    border: none;
    padding: 10px 24px;
    border-radius: 24px;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    transition: opacity 0.3s;
}
.footer-subscribe-form .btn-send:hover { opacity: 0.8; }

.footer-links-col h4 {
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 25px;
    font-weight: 600;
}
.footer-links-col ul {
    list-style: none;
    padding: 0; margin: 0;
}
.footer-links-col ul li {
    margin-bottom: 15px;
}
.footer-links-col ul li a {
    color: #8b8b9b;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s;
}
.footer-links-col ul li a:hover {
    color: var(--primary-neon);
}
.footer-copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    color: #666;
    font-size: 0.9rem;
}

@media (max-width: 1000px) {
    .blog-grid { grid-template-columns: 1fr 1fr !important; }
    .footer-new-grid { grid-template-columns: 1.5fr 1fr 1fr; row-gap: 50px;}
    .footer-brand-col { grid-column: 1 / -1; max-width: 500px;}
}
@media (max-width: 768px) {
    .blog-grid { grid-template-columns: 1fr !important; }
    .footer-new-grid { grid-template-columns: 1fr 1fr; }
    .cta-glow-mound { width: 400vw; height: 500px; }
}
`;

if (!css.includes('.super-cta-section')) {
    fs.appendFileSync('styles.css', appendingCss);
    console.log("CSS successfully updated.");
}

