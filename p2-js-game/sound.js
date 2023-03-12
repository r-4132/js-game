function startScreenSound (audioName)
{
    let audio = Audio(audioName);
    audio.loop = true;
    audio.play();
}