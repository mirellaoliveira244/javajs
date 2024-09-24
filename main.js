console.log('Olá mundo!');

// Criação do canvas e do contexto
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Função para gerar uma cor aleatória
function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função para gerar estrelas aleatórias
function generateStars(numStars) {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width; // Posição X aleatória
        const y = Math.random() * canvas.height; // Posição Y aleatória
        const radius = Math.random() * 2 + 1; // Raio entre 1 e 3
        const color = randomColor(); // Cor aleatória
        stars.push({ x, y, radius, color }); // Adiciona a estrela ao array
    }
    return stars;
}

// Função para desenhar uma estrela
function drawStar(star) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = star.color; // Cor da estrela
    ctx.fill();
    ctx.closePath();
}

// Função para desenhar todas as estrelas
function drawStars(stars) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    stars.forEach(drawStar); // Desenha cada estrela
}

// Função para animar as estrelas
function animateStars(stars) {
    drawStars(stars);
    requestAnimationFrame(() => animateStars(stars)); // Chama a função novamente para o próximo quadro
}

// Gera e anima as estrelas
const stars = generateStars(400); // Gera 400 estrelas
animateStars(stars); // Inicia a animação
