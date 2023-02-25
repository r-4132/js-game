function drawNet() 
{
    for (var i = 0; i < canvas.height; i += 40) 
    {
        colorRect(canvas.width / 2, i, 2, 20, 'white'); //the is divided by 2 to center the net. [i] +=40 is the space between the line. // 2 is the thickness. 20 is the height of each line

    }

}

function draw() 
{

    canvasContext.canvas.width = window.innerWidth;// it's returning the width of the window in pixel
    canvasContext.canvas.height = window.innerHeight;
    let scoreCpu = cpuScore.toString();
    let scorePlayer = playerScore.toString();

    colorRect(0, 0, canvas.width, canvas.height, 'black');

    if (startGameScreen) 
    {
        winScreen = true;

    }



    if (winScreen) 
    {
        canvasContext.fillStyle = 'white';

        if (cpuScore >= winScore) 
        {
            canvasContext.font = '18px Courier'
            canvasContext.fillText("You failed humanity", 450, 200);
            canvasContext.fillText('click to continue', 450, 500);
            


        }

        else if (playerScore >= winScore) 
        {
            canvasContext.font = '18px Courier'
            canvasContext.fillText("You saved humanity", 450, 200);
            canvasContext.fillText('click to continue', 450, 500);
            


        }

        else if (playerScore == 0 && cpuScore == 0) 
        {

            //I wanted to add line break but html canvas doesn't have that feature. 
            let txt = '           GAME OF PONG\n\n\n\n\n\n\n\n\n\nDrag the mouse to control the left paddle and \ntry to win against the AI before they take over the world!\n\nPress ESC to reset game\nPress Spacebar to stop the game';
            let array = txt.split('\n'); // convert string to array and separate by /n 


            let lineH = 15; // line height 
            canvasContext.font = '18px Courier'


            for (var i = 0; i < array.length; i++) // iterated each array in order to print on the screen
            {
                
                canvasContext.fillText(array[i], 450, 200 + (i * lineH)); //  i*lineH is the most important because it will seperate the arrays vertically
                
            }

        }


        return;
    }

    drawCircle(ballX, ballY, 10, 'grey');

    drawNet();


    colorRect(0, paddleOneY, PADDLE_WIDTH, PADDLE_HEIGHT, 'white'); // player 1(left)
    colorRect(canvas.width - PADDLE_WIDTH, paddleTwoY, PADDLE_WIDTH, PADDLE_HEIGHT, 'white'); // computer (right)

    canvasContext.font = '18px Courier'
    canvasContext.fillText(scorePlayer, 100, 100); //score 
    canvasContext.fillText(scoreCpu, canvas.width - 100, 100);//score


}



function drawCircle(x, y, radius, drawColor) 
{
    canvasContext.fillStyle = drawColor; //ball
    canvasContext.beginPath(); // define the shape
    canvasContext.arc(x, y, 10, 0, Math.PI * 2, true); // (posX. posY, radius, angles, circumference, clockewise or counter)
    canvasContext.fill();

}

function colorRect(leftX, topY, width, height, drawColor) 
{
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}