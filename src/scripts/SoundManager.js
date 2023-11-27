class SoundManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.clickSound = this.oScene.sound.add("button-sound");
        this.flipSound = this.oScene.sound.add("flip-sound");
        this.correctSound = this.oScene.sound.add("correct-sound");
        this.incorrectSound = this.oScene.sound.add("incorrect-sound");
        this.winSound = this.oScene.sound.add("win-sound");
        this.loseSound = this.oScene.sound.add("lose-sound");
        this.timerSound = this.oScene.sound.add("timer-sound").setVolume(0.5);
    }
    playSound(key, loop) {
        key.play();
        key.loop = loop;
    }
    stopSound(key, loop) {
        key.loop = loop
        key.stop();
    }
}