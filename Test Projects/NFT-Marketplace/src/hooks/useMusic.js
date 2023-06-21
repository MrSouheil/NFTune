const UseMusic = (audioPlayer, audio) => {
    if (!audioPlayer.paused) {
        audioPlayer.pause();
    }
    audioPlayer.src = audio;
}
export default UseMusic;
