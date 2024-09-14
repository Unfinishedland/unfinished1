document.addEventListener('DOMContentLoaded', () => {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateRandomDiv() {
        const container = document.getElementById('container');
        const div = document.createElement('div');
        div.className = 'random-div';

        // Random color
        const color = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
        div.style.backgroundColor = color;

        // Random position
        const maxX = container.clientWidth - 50;
        const maxY = container.clientHeight - 50;
        const posX = getRandomInt(0, maxX);
        const posY = getRandomInt(0, maxY);
        div.style.left = `${posX}px`;
        div.style.top = `${posY}px`;

        container.appendChild(div);
    }

    // Generar un número definido de divs aleatorios
    for (let i = 0; i < 10; i++) {
        generateRandomDiv();
    }
});