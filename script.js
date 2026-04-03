document.addEventListener('DOMContentLoaded', () => {



    // Smooth Scrolling for anchored links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Ticker Tape Randomizer (simulate live price changes)
    const tickerItems = document.querySelectorAll('.ticker-item span');
    
    setInterval(() => {
        // Randomly pick a few elements to "update"
        const itemsToUpdate = Array.from(tickerItems).sort(() => 0.5 - Math.random()).slice(0, 3);
        
        itemsToUpdate.forEach(el => {
            // Flash white to indicate update
            const originalColor = window.getComputedStyle(el).color;
            el.originalColor = el.originalColor || originalColor;
            
            el.style.color = '#fff';
            el.style.textShadow = '0 0 10px rgba(255,255,255,0.8)';
            
            setTimeout(() => {
                el.style.color = el.originalColor;
                el.style.textShadow = 'none';
                
                // Randomize small price ticks (just for UI visual effect)
                // In a real app, this data would come via WebSocket.
                if(Math.random() > 0.8) {
                    const txt = el.innerText;
                    if(txt.includes('(')) {
                        const isUp = el.classList.contains('up');
                        if (isUp) {
                            el.classList.replace('up', 'down');
                            el.innerText = txt.replace('▲', '▼').replace('+', '-');
                        } else {
                            el.classList.replace('down', 'up');
                            el.innerText = txt.replace('▼', '▲').replace('-', '+');
                        }
                    }
                }

            }, 400);
        });
    }, 2000);

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Toggle current item
            if(!isActive) {
                item.classList.add('active');
            }
        });
    });
});
