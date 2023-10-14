let canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bits = '0000111000111011010010010010001001000100010000100100010010010000111000111011010010010010001001000100010000100100010010010';
bits = bits.split('');

let fontSize = 16,
    columns = canvas.width / fontSize;

let drops = [];
for(let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    let isLightMode = document.documentElement.classList.contains("light");

    ctx.fillStyle = isLightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for(let i =  0; i < drops.length; i++) {
        let text = bits[Math.floor(Math.random() * bits.length)];
        ctx.fillStyle = isLightMode ? '#000' : '#fff';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if(drops[i] * fontSize > canvas.height && Math.random() > .99) {
            drops[i] = 0;
        }

    }

}

setInterval(draw, 100);
