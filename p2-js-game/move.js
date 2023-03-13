

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
        ballColor = 0; // reset the ball to white 
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


    if (winScreen) 
    {
        return;
    }
    cpuMove();
    ballX += ballSpeedX; //making the ball move
    ballY += ballSpeedY;

    if (ballX < 0) // collision detection for the paddle 
    {
        
        if (ballY > paddleOneY && ballY < paddleOneY + PADDLE_HEIGHT) // if the ball hit the paddle for paddleOne(player/left paddle) 
        {
            ballSpeedX = -ballSpeedX // bounce off the paddle 
            let deltaY = ballY - (paddleOneY + PADDLE_HEIGHT / 2);// the speed of the ball will now depend on the angle and distance of the center of the paddle.
            ballSpeedY = deltaY * 0.35;
            sound.hit();
            
            
            
        }
        else  // else not, reset the ball in the middle and add score to cpu
        {
            cpuScore++; // must add score first befer reset ball
            ballReset();
            ballColor = 1;//this where the ball color change is initiated from draw.js
            sound.score();
        }

    }

    if (ballX > canvas.width) // collision detection for the paddleTwo(CPU/right paddle)
    {
        if (ballY > paddleTwoY && ballY < paddleTwoY + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;
            let deltaY = ballY - (paddleTwoY + PADDLE_HEIGHT / 2);
            ballSpeedY = deltaY * 0.35;
            sound.hit();
            

            
        }
        else {
            playerScore++;
            ballReset();
            ballColor = 2;//this where the ball color change is initiated from draw.js
            sound.score();
        }
    }


    if (ballY < 0) // prevent the ball from going beyond the top of the screen
    {
        ballSpeedY = -ballSpeedY;
    }

    if (ballY > canvas.height) //bounces off  y-axis prevent the ball from going beyond of the bottom part of the screen
    {
        ballSpeedY = -ballSpeedY;
    }
}