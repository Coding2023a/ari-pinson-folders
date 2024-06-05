const board = document.getElementById('game-board');
const boardWidth = 20;
const boardHeight = 20;
const cellSize = 20;
let speed = 150;

let snake = [{ x: 10, y: 10 }];
let direction = 'right';
let food = generateFood();
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;

function restartGame() {
    snake = [{ x: 10, y: 10 }];
    direction = 'right';
    score = 0;
    food = generateFood();

    updateScore();

    clearSnake();
    drawFood();

    clearInterval(gameLoop);
    gameLoop = setInterval(moveSnake, speed);
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('high-score').innerText = `High Score: ${highScore}`;
}

function updateHighScore() {
    if (score > highScore) {
        highScore =  score;
        localStorage.setItem('snakeHighScore', highScore);
    }
}

function generateFood() {
    return {
        x: Math.floor(Math.random() * boardWidth),
        y: Math.floor(Math.random() * boardHeight), 
    };
}

function clearSnake() {
    const snakeElements = document.querySelectorAll('.snake');
    snakeElements.forEach(element => element.classList.remove('snake'));
    }

    function drawSnake() {
        const snakeElements = document.querySelectorAll('.snake');
        snakeElements.forEach(element => element.classList.remove('snake'));
    

    snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridColumn = segment.x + 1;
        snakeElement.style.gridRow = segment.y + 1;
        snakeElement.classList.add('snake');
        board.appendChild(snakeElement);
    });
}

function drawFood() {
    const existingFood = document.querySelectorAll('.food');
    existingFood.forEach(element => element.remove());

    const foodElement = document.createElement('div');
    foodElement.style.gridColumn = food.x + 1;
    foodElement.style.gridRow = food.y + 1;
    foodElement.classList.add('food');
    board.appendChild(foodElement)
}

function moveSnake() {
    const head = { ...snake[0] };
    switch (direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }

    if (head.x < 0 || head.x >= boardWidth || head.y < 0 || head.y >= boardHeight || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        clearInterval(gameLoop);
        alert('Game Over!');
        updateHighScore();
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        updateHighScore();
        food = generateFood();
        drawFood();
    } else {
        snake.pop();
    }

    updateScore();
    drawSnake();
}

function changeDirection(event) {
    if (event.key === 'r' || event.key === 'R') {
        restartGame();
        return;
    }

    if  (['ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
    }

    switch (event.key) {
        case 'ArrowUp':
            if (direction !== 'down') direction = 'up';
            break;
        case 'ArrowDown':
            if (direction !== 'up') direction = 'down';
            break;
        case 'ArrowLeft':
            if (direction !== 'right') direction = 'left';
            break;
        case 'ArrowRight':
            if (direction !== 'left') direction = 'right';
            break;
    }
}

drawFood();
drawSnake();
let gameLoop = setInterval(moveSnake, speed);

document.addEventListener('keydown', changeDirection);