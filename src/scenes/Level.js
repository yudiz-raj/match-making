
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// body
		const body = this.add.container(0, 0);

		// background
		const background = this.add.image(540, 960, "background");
		body.add(background);

		// container_backSideCards
		const container_backSideCards = this.add.container(0, 0);
		body.add(container_backSideCards);

		// backSide
		const backSide = this.add.image(210, 630, "backSide");
		backSide.scaleX = 1.2;
		backSide.scaleY = 1.2;
		container_backSideCards.add(backSide);

		// backSide_1
		const backSide_1 = this.add.image(540, 630, "backSide");
		backSide_1.scaleX = 1.2;
		backSide_1.scaleY = 1.2;
		container_backSideCards.add(backSide_1);

		// backSide_2
		const backSide_2 = this.add.image(870, 630, "backSide");
		backSide_2.scaleX = 1.2;
		backSide_2.scaleY = 1.2;
		container_backSideCards.add(backSide_2);

		// backSide_3
		const backSide_3 = this.add.image(210, 960, "backSide");
		backSide_3.scaleX = 1.2;
		backSide_3.scaleY = 1.2;
		container_backSideCards.add(backSide_3);

		// backSide_4
		const backSide_4 = this.add.image(540, 960, "backSide");
		backSide_4.scaleX = 1.2;
		backSide_4.scaleY = 1.2;
		container_backSideCards.add(backSide_4);

		// backSide_5
		const backSide_5 = this.add.image(870, 960, "backSide");
		backSide_5.scaleX = 1.2;
		backSide_5.scaleY = 1.2;
		container_backSideCards.add(backSide_5);

		// backSide_6
		const backSide_6 = this.add.image(210, 1290, "backSide");
		backSide_6.scaleX = 1.2;
		backSide_6.scaleY = 1.2;
		container_backSideCards.add(backSide_6);

		// backSide_7
		const backSide_7 = this.add.image(540, 1290, "backSide");
		backSide_7.scaleX = 1.2;
		backSide_7.scaleY = 1.2;
		container_backSideCards.add(backSide_7);

		// backSide_8
		const backSide_8 = this.add.image(870, 1290, "backSide");
		backSide_8.scaleX = 1.2;
		backSide_8.scaleY = 1.2;
		container_backSideCards.add(backSide_8);

		// container_frontSideCards
		const container_frontSideCards = this.add.container(0, 0);
		body.add(container_frontSideCards);

		// container_correctCards
		const container_correctCards = this.add.container(0, 0);
		body.add(container_correctCards);

		// container_border
		const container_border = this.add.container(0, 0);
		body.add(container_border);

		// container_selectedCards
		const container_selectedCards = this.add.container(0, 0);
		body.add(container_selectedCards);

		// card_2
		const card_2 = this.add.image(210, 1759, "card-2");
		card_2.scaleX = 1.2;
		card_2.scaleY = 1.2;
		card_2.visible = false;
		container_selectedCards.add(card_2);

		// card_1
		const card_1 = this.add.image(870, 1759, "card-2");
		card_1.scaleX = 1.2;
		card_1.scaleY = 1.2;
		card_1.visible = false;
		container_selectedCards.add(card_1);

		// card
		const card = this.add.image(540, 1759, "card-2");
		card.scaleX = 1.2;
		card.scaleY = 1.2;
		card.visible = false;
		container_selectedCards.add(card);

		// result_image
		const result_image = this.add.image(1668, 960, "you_win");
		body.add(result_image);

		// registration_button
		const registration_button = this.add.image(1667, 960, "registration-button");
		registration_button.name = "registration_button";
		body.add(registration_button);

		// play_button
		const play_button = this.add.image(540, 1632, "play-button");
		play_button.name = "play_button";
		body.add(play_button);

		// instruction_txt
		const instruction_txt = this.add.text(540, 1520, "", {});
		instruction_txt.setOrigin(0.5, 0.5);
		instruction_txt.alpha = 0;
		instruction_txt.alphaTopLeft = 0;
		instruction_txt.alphaTopRight = 0;
		instruction_txt.alphaBottomLeft = 0;
		instruction_txt.alphaBottomRight = 0;
		instruction_txt.text = "MEMORIZE THE SPOTS ";
		instruction_txt.setStyle({ "fontFamily": "GainsboroughSans", "fontSize": "94px", "shadow.offsetX": 6, "shadow.offsetY": 5, "shadow.blur": 10, "shadow.fill": true });
		body.add(instruction_txt);

		// top_logo
		const top_logo = this.add.image(540, 208, "logo");
		top_logo.scaleX = 1.2;
		top_logo.scaleY = 1.2;
		body.add(top_logo);

		// bottom_logo
		const bottom_logo = this.add.image(540, 1712, "logo");
		bottom_logo.scaleX = 1.2;
		bottom_logo.scaleY = 1.2;
		bottom_logo.visible = false;
		body.add(bottom_logo);

		this.container_backSideCards = container_backSideCards;
		this.container_frontSideCards = container_frontSideCards;
		this.container_correctCards = container_correctCards;
		this.container_border = container_border;
		this.container_selectedCards = container_selectedCards;
		this.result_image = result_image;
		this.registration_button = registration_button;
		this.play_button = play_button;
		this.instruction_txt = instruction_txt;
		this.bottom_logo = bottom_logo;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_backSideCards;
	/** @type {Phaser.GameObjects.Container} */
	container_frontSideCards;
	/** @type {Phaser.GameObjects.Container} */
	container_correctCards;
	/** @type {Phaser.GameObjects.Container} */
	container_border;
	/** @type {Phaser.GameObjects.Container} */
	container_selectedCards;
	/** @type {Phaser.GameObjects.Image} */
	result_image;
	/** @type {Phaser.GameObjects.Image} */
	registration_button;
	/** @type {Phaser.GameObjects.Image} */
	play_button;
	/** @type {Phaser.GameObjects.Text} */
	instruction_txt;
	/** @type {Phaser.GameObjects.Image} */
	bottom_logo;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.oTweenManager = new TweenManager(this);
		this.oInputManager = new InputManager(this);
		this.nCount = 0;
		this.nCorrectSelection = 0;
		this.nSelectedCount = 0;
		this.aCorrectCard = ['card-2', 'card-5', 'card-6'];
		this.container_backSideCards.list.forEach((card, index) => {
			card.setScale(1.2, 1.2);
			card.on("pointerdown", () => {
				if (this.nCount < 3) {
					clearInterval(this.timerInterval);
					this.setTimer();
					card.disableInteractive();
					this.nCount++;
					if (this.container_frontSideCards.list[index].texture.key == this.aSelectedCard[0]) {
						this.nCorrectSelection++;
						this.oTweenManager.newCardAnimation(this.nSelectedCount, 'green-border');
					}
					else {
						this.oTweenManager.newCardAnimation(this.nSelectedCount, 'red-border');
					}
					this.nSelectedCount++;
					this.container_backSideCards.list.forEach(card => {
						card.disableInteractive();
					});
					this.oTweenManager.swapAnimation(card, index);
				}

			});
		});
		this.setCardImage();
		this.oInputManager.buttonClick(this.play_button);
		this.oInputManager.buttonClick(this.registration_button);
	}
	setCardImage() {
		let aFrontSideCards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7', 'card-8', 'card-9'];
		for (let i = 0; i < this.container_backSideCards.length; i++) {
			const nRandomNumber = Phaser.Math.Between(0, aFrontSideCards.length - 1);
			const card = this.add.image(this.container_backSideCards.list[i].x, this.container_backSideCards.list[i].y, aFrontSideCards[nRandomNumber]).setScale(0, 1);
			this.container_frontSideCards.add(card);
			aFrontSideCards.splice(nRandomNumber, 1);
		}
	}
	setCorrectCard() {
		const nRandomNumber = Phaser.Math.Between(0, this.aCorrectCard.length - 1);
		const card = this.add.image(this.container_backSideCards.list[7].x, this.container_backSideCards.list[7].y + 462, this.aCorrectCard[nRandomNumber]).setScale(1.2);
		this.container_correctCards.add(card);
		this.aSelectedCard = [this.aCorrectCard[nRandomNumber]];
		this.aCorrectCard.splice(nRandomNumber, 1);
	}
	setTimer() {
		let time = 3;
		const updateTimer = () => {
			time--;
			if (time < 0) {
				this.nCount++;
				this.oTweenManager.newCardAnimation(this.nSelectedCount, 'red-border');
				this.nSelectedCount++;
				clearInterval(this.timerInterval);
				if (this.nCount === 3) {
					if (this.nCorrectSelection < 2) {
						this.result_image.setTexture("you_lose");
					}
					this.oTweenManager.resultAnimation();
				}
				if (this.nCount < 3) {
					this.setTimer();
				}
			}
		};
		this.timerInterval = setInterval(updateTimer, 1000);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
