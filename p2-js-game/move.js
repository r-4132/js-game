function calcMousePos(evt) // function that will execute everytime the mouse moves
{
    let rect = canvas.getBoundingClientRect(); // returns the size of the canvas 
    let root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft; // this will calculate where the playable area is in the web page.
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

function mouseClick(evt) 
{
    if (winScreen) {
        playerScore = 0;
        cpuScore = 0;
        winScreen = false;
    }

}

function startGame(evt) // start
{
    if (startGameScreen) 
    {
        startGameScreen = false;
    }

}

function resetGame(evt) 
{
    
    ballReset();
    playerScore = 0;
    cpuScore = 0;
}

function stopGame() 
{
    startGameScreen = true;
    resetGame();


}




function ballReset() // this will make the ball reset in the middle whenever a player scores
{

    if (cpuScore >= winScore || playerScore >= winScore) {
        winScreen = true;
    }
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width / 2
    ballY = canvas.height / 2

}

function cpuMove() //movement for cpu player
{
    let paddleTwoYMid = paddleTwoY + (PADDLE_HEIGHT / 2) // make the center part of the paddle the start point
    if (paddleTwoYMid < ballY - 30) // the paddles stops moving if the direction of the ball is 30 pixels above the center
    {
        paddleTwoY += 6;
    }

    else if (paddleTwoYMid > ballY + 30) {
        paddleTwoY -= 6;
    }


}

function move() 
{


    if (winScreen) {
        return;
    }
    cpuMove();
    ballX += ballSpeedX; //makign the ball move
    ballY += ballSpeedY;

    if (ballX < 0) // collision detection for the paddle 
    {
        if (ballY > paddleOneY && ballY < paddleOneY + PADDLE_HEIGHT) // if the ball hit the paddle for paddleOne(player/left paddle) 
        {
            ballSpeedX = -ballSpeedX // bounce off the paddle 
            let deltaY = ballY - (paddleOneY + PADDLE_HEIGHT / 2);// the speed of the ball will now depend on the angle and distance of the center of the paddle.
            ballSpeedY = deltaY * 0.35;
        }
        else  // else not, reset the ball in the middle and add score to cpu
        {
            cpuScore++;
            ballReset();
        }

    }

    if (ballX > canvas.width) // collision detection for the paddleTwo(CPU/right paddle)
    {
        if (ballY > paddleTwoY && ballY < paddleTwoY + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;
            let deltaY = ballY - (paddleTwoY + PADDLE_HEIGHT / 2);
            ballSpeedY = deltaY * 0.35;
        }
        else {
            playerScore++;
            ballReset();
        }
    }


    if (ballY < 0) // maintain speed after bouncing off vertically
    {
        ballSpeedY = -ballSpeedY;
    }

    if (ballY > canvas.height) //bounces off  y-axis
    {
        ballSpeedY = -ballSpeedY;
    }
}