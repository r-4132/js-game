
const sound = // I believe, I forgot to implement objects. Unfortunately, I don't have time to re-implement object method to every global variable I made for this game.
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