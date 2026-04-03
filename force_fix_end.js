const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf-8');

const marker = '/* Toolkit Grid Section */';
const idx = css.indexOf(marker);

if (idx !== -1) {
    css = css.substring(0, idx);
}
css = css.trim() + '\n\n';

css += `
/* Toolkit Grid Section */
.toolkit-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 40px;
}
@media (max-width: 900px) {
    .toolkit-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 600px) {
    .toolkit-grid {
        grid-template-columns: 1fr;
    }
}
.toolkit-card {
    background: #111116;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 40px 30px;
    text-align: center;
    transition: var(--transition);
}
.toolkit-card:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 136, 0.2);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.toolkit-icon {
    width: 70px; height: 70px;
    border-radius: 50%;
    margin: 0 auto 25px auto;
    background: rgba(0, 255, 136, 0.05);
    border: 1px solid rgba(0, 255, 136, 0.2);
    display: flex; align-items: center; justify-content: center;
    color: var(--primary-neon);
    position: relative;
}
/* Concentric effect */
.toolkit-icon::before {
    content: '';
    position: absolute;
    width: 50px; height: 50px;
    border-radius: 50%;
    background: rgba(0, 255, 136, 0.1);
}
.toolkit-icon svg {
    width: 32px; height: 32px;
    z-index: 1;
}
.toolkit-card h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
}
.toolkit-card p {
    font-size: 0.95rem;
    color: #8b8b9b;
    line-height: 1.6;
}
`;

fs.writeFileSync('styles.css', css, {encoding: 'utf8', flag: 'w'});
console.log("End of CSS fixed forcefully");
