
const sound = 
{
    hit: function()
    {
        let hit = new Audio("assets/hit3.wav");
        hit.play();
        hit.playbackRate = 2.7;

    },

    score: function()
    {
        let score = new Audio("assets/score.wav");
        score.play();
    }
}