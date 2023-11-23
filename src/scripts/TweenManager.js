class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    buttonAnimation(target) {
        target.disableInteractive();
        this.oScene.tweens.add({
            targets: target,
            scale: "-=0.08",
            ease: "power2",
            duration: 200,
            yoyo: true,
            onComplete: () => {
                switch (target.name) {
                    case "registration_button":
                        // this.oScene.scene.restart("Level");
                        target.setInteractive();
                        break;
                    case "play_button":
                        target.destroy();
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
                this.oScene.tweens.add({
                    targets: this.oScene.container_frontSideCards.list[index],
                    scaleX: 1.2,
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
        this.oTweenConfig = {
            targets: [
                this.oScene.container_backSideCards.list,
                this.oScene.container_frontSideCards.list,
                this.oScene.container_frontSideCards.list,
                this.oScene.container_backSideCards.list,
            ],
            scaleX: [0, 1.2, 0, 1.2],
            scaleY: [1.2, 1.2, 1.2, 1.2],
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
        this.oScene.container_border.destroy();
        const resultImageAnimation = () => {
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
                        duration: 600,
                        delay: 5000,
                        onComplete: () => {
                            this.oScene.tweens.add({
                                targets: this.oScene.registration_button,
                                x: 540,
                                ease: 'power2',
                                duration: 600,
                            });
                        }
                    });
                }
            });
        }
        let aTarget = [this.oScene.container_backSideCards, this.oScene.container_frontSideCards, this.oScene.container_correctCards];
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