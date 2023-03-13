let canvas;
let canvasContext;


let ballX = 50;
let ballY = 50; //size of the ball

let ballSpeedX = 30; //x-axis
let ballSpeedY = 4;

let paddleOneY = 250;
let paddleTwoY = 250;
const PADDLE_HEIGHT = 100; //different style of naming to emphasize that it's constant
const PADDLE_WIDTH = 15; //paddle thickness

let playerScore = 0;
let cpuScore = 0;

let winScore = 3;
let winScreen = false;

let startGameScreen = true;

let resetScreen = false


window.onload = function () 
{
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    
    let framePerSecond = 30;
    
    canvas.addEventListener('mousedown', mouseClick);
    setInterval(function () //for every second it will draw() the ball and move() it, but also make sure that it will bounce off the corners
    {
        move();
        draw();
    }, 1000 / framePerSecond);
    

    canvas.addEventListener('mousedown', startGame);
    window.addEventListener('keydown', e => // this will restart the game
    {


        if (e.key === 'Escape') resetGame();
        
        else if (e.key === ' ') stopGame();
        
    })

    canvas.addEventListener('mousemove', function (evt) // will make the paddle move 
    {
        let mousePos = calculateMouseDirection(evt); // function evt will pass calculateMouseDirection and will get the y value and contain it in paddleOneY
        paddleOneY = mousePos.y - (PADDLE_HEIGHT / 2);
    });
    

}

function calculateMouseDirection(evt) // function that will execute everytime the mouse moves
{
    let rect = canvas.getBoundingClientRect(); // returns the size of the canvas 
    let root = document.documentElement;
    let mouseX = evt.clientX - rect.left - root.scrollLeft; // this will calculate where the playable area is in the web page.
    let mouseY = evt.clientY - rect.top - root.scrollTop;
    return { // return two variables, cannot add indentation. (this comment is for future me)
        x: mouseX,
        y: mouseY
    };
}