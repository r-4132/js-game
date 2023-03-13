const hitSound = () =>
{
    let hit = new Audio("assets/hit3.wav");
    hit.play();
    hit.playbackRate = 2.7;
    

}

const score = () =>
{
    let score = new Audio("assets/score.wav");
    score.play();
    
}

const winSound = () => 
{
    let win = new Audio('assets/win.wav');
    win.loop = false;
    win.play();

}

const lostSound = () => 
{
    let lost = new Audio('assets/lost.wav');
    lost.loop = false;
    lost.play();
}
