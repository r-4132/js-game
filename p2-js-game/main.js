let canvas;
        let canvasContext;

        let ballX = 50;
        let ballY = 50; //size of the ball

        let ballSpeedX = 15;
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

        window.onload = function()
        {
            canvas = document.getElementById('gameCanvas');
            canvasContext = canvas.getContext('2d');
            canvasContext.font = '18px Courier'

            // canvasContext.canvas.width = window.innerWidth;
            // canvasContext.canvas.height = window.innerHeight;

            let framePerSecond = 30;
            canvas.addEventListener('mousedown', mouseClick);
            setInterval(function() //for every second it will draw() the and move() it, but also make sure that it will bounce off the corners
            {
                move();
                draw();
            }, 1000/framePerSecond);

            canvas.addEventListener('pointerdown', startGame);
            window.addEventListener('keydown', e => // this will restart the game
            {


                if(e.key === 'Escape')
                {
                    resetGame();
                }
                else if(e.key === ' ')
                {
                    stopGame();
                }
            })

            canvas.addEventListener('mousemove', function(evt) // will make the paddle move 
            {
                let mousePos = calcMousePos(evt); // function evt will pass calcMousePos and will get the y value and contain it in paddleOneY
                paddleOneY = mousePos.y - (PADDLE_HEIGHT/2); 
            });

        }