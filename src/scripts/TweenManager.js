class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    buttonAnimation(target) {
        target.disableInteractive();
        this.oScene.tweens.add({
            targets: target,
            scale: 0.92,
            ease: "power2",
            duration: 200,
            yoyo: true,
            onComplete: () => {
                switch (target.name) {
                    case "registration_button":
                        // this.oScene.scene.restart("Level");
                        let nResult = this.oScene.nCorrectSelection;
                        window.location.replace(`https://www.theofferclub.com/dewarslogo?score=0${nResult}`);
                        break;
                    case "play_button":
                        target.destroy();
                        this.oScene.how_to_play_txt.destroy();
                        this.oScene.rectangle_1.destroy();
                        this.oScene.container_timer.setVisible(true);
                        this.cardAnimation();
                        this.instructionAnimation();
                        break;
                    default:
                        break;
                }
            }
        });
    }
    swapAnimation(card, index) {
        this.oScene.tweens.add({
            targets: card,
            scaleX: 0,
            duration: 200,
            onComplete: () => {
                this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.flipSound, false);
                this.oScene.tweens.add({
                    targets: this.oScene.container_frontSideCards.list[index],
                    scaleX: 1,
                    duration: 200,
                    onComplete: () => {
                        this.oScene.container_backSideCards.list.forEach(card => {
                            card.setInteractive();
                        });
                        if (this.oScene.nCount >= 3) {
                            clearInterval(this.oScene.timerInterval);
                            if (this.oScene.nCorrectSelection < 2) {
                                this.oScene.result_image.setTexture("you_lose");
                            }
                            this.resultAnimation();
                        }
                        else {
                            this.oScene.setCorrectCard();
                        }
                    }
                });
            }
        });
    }
    instructionAnimation() {
        this.oScene.tweens.add({
            targets: this.oScene.instruction_txt,
            alpha: 1,
            duration: 5400,
            delay: 200,
            onComplete: () => {
                clearInterval(this.memorizeInterval);
                this.oScene.container_timer.setVisible(false);
                this.oScene.instruction_txt.setText("FIND THE IMAGE");
                this.oScene.setCorrectCard();
                this.oScene.setTimer();
                this.oScene.container_backSideCards.list.forEach(card => {
                    card.setInteractive();
                });
            }
        })
    }
    cardAnimation() {
        let time = 5;
        this.memorizeInterval = setInterval(() => {
            this.oScene.time_txt.setText(`0${time}`);
            if (time > 0) {
                time--;
            }
            if (time < 4) {
                this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.timerSound, false);
            }
        }, 900);
        this.oTweenConfig = {
            targets: [
                this.oScene.container_backSideCards.list,
                this.oScene.container_frontSideCards.list,
                this.oScene.container_frontSideCards.list,
                this.oScene.container_backSideCards.list,
            ],
            scaleX: [0, 1, 0, 1.2],
            scaleY: [1.2, 1, 1, 1.2],
            delay: [100, 0, 5000, 0]
        };
        const { oScene, oTweenConfig } = this;
        const playcardAnimation = (index) => {
            this.cardTween = oScene.tweens.add({
                targets: oTweenConfig.targets[index],
                scaleX: oTweenConfig.scaleX[index],
                scaleY: oTweenConfig.scaleY[index],
                duration: 200,
                delay: oTweenConfig.delay[index],
                onComplete: () => {
                    if (index <= 2) playcardAnimation(index + 1);
                }
            });
        };
        playcardAnimation(0);
    }
    resultAnimation() {
        this.oScene.instruction_txt.destroy();
        const resultImageAnimation = () => {
            this.oScene.result_image.texture.key == "you_lose" ?
                this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.loseSound, false) :
                this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.winSound, false);
            this.oScene.tweens.add({
                targets: this.oScene.result_image,
                x: 540,
                ease: 'power2',
                duration: 600,
                onComplete: () => {
                    this.oScene.tweens.add({
                        targets: this.oScene.result_image,
                        x: -1200,
                        ease: 'power2',
                        duration: 400,
                        delay: 2000,
                        onComplete: () => {
                            let nResult = this.oScene.nCorrectSelection;
                            window.location.replace(`https://www.theofferclub.com/dewarslogo?score=${nResult}`);
                            // this.oScene.tweens.add({
                            //     targets: [this.oScene.registration_button, this.oScene.registrationButton_base],
                            //     x: 540,
                            //     ease: 'power2',
                            //     duration: 600,
                            // });
                        }
                    });
                }
            });
        }
        let aTarget = [this.oScene.container_backSideCards, this.oScene.container_frontSideCards, [this.oScene.container_border, this.oScene.container_selectionCardTimer, this.oScene.container_correctCards]];
        for (let i = 0; i < aTarget.length; i++) {
            this.oScene.tweens.add({
                targets: aTarget[i],
                x: -1200,
                ease: 'power2',
                duration: 600,
                delay: 400 + i * 100,
                onComplete: () => {
                    if (i == aTarget.length - 1) {
                        this.oScene.bottom_logo.setVisible(true);
                        resultImageAnimation();
                    }
                }
            });
        }
    }
}