
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
		const backSide = this.add.image(210, 607, "backSide");
		backSide.scaleX = 1.2;
		backSide.scaleY = 1.2;
		container_backSideCards.add(backSide);

		// backSide_1
		const backSide_1 = this.add.image(540, 607, "backSide");
		backSide_1.scaleX = 1.2;
		backSide_1.scaleY = 1.2;
		container_backSideCards.add(backSide_1);

		// backSide_2
		const backSide_2 = this.add.image(870, 607, "backSide");
		backSide_2.scaleX = 1.2;
		backSide_2.scaleY = 1.2;
		container_backSideCards.add(backSide_2);

		// backSide_3
		const backSide_3 = this.add.image(210, 937, "backSide");
		backSide_3.scaleX = 1.2;
		backSide_3.scaleY = 1.2;
		container_backSideCards.add(backSide_3);

		// backSide_4
		const backSide_4 = this.add.image(540, 937, "backSide");
		backSide_4.scaleX = 1.2;
		backSide_4.scaleY = 1.2;
		container_backSideCards.add(backSide_4);

		// backSide_5
		const backSide_5 = this.add.image(870, 937, "backSide");
		backSide_5.scaleX = 1.2;
		backSide_5.scaleY = 1.2;
		container_backSideCards.add(backSide_5);

		// backSide_6
		const backSide_6 = this.add.image(210, 1267, "backSide");
		backSide_6.scaleX = 1.2;
		backSide_6.scaleY = 1.2;
		container_backSideCards.add(backSide_6);

		// backSide_7
		const backSide_7 = this.add.image(540, 1267, "backSide");
		backSide_7.scaleX = 1.2;
		backSide_7.scaleY = 1.2;
		container_backSideCards.add(backSide_7);

		// backSide_8
		const backSide_8 = this.add.image(870, 1267, "backSide");
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
		card_2.scaleX = 0.9;
		card_2.scaleY = 0.9;
		card_2.visible = false;
		container_selectedCards.add(card_2);

		// card
		const card = this.add.image(540, 1759, "card-2");
		card.scaleX = 0.9;
		card.scaleY = 0.9;
		card.visible = false;
		container_selectedCards.add(card);

		// card_1
		const card_1 = this.add.image(870, 1759, "card-2");
		card_1.scaleX = 0.9;
		card_1.scaleY = 0.9;
		card_1.visible = false;
		container_selectedCards.add(card_1);

		// result_image
		const result_image = this.add.image(1668, 960, "you_win");
		body.add(result_image);

		// registrationButton_base
		const registrationButton_base = this.add.image(1667, 960, "registrationButton-base");
		body.add(registrationButton_base);

		// registration_button
		const registration_button = this.add.image(1667, 960, "registration-button");
		registration_button.name = "registration_button";
		registration_button.setInteractive(this.input.makePixelPerfect());
		body.add(registration_button);

		// play_button
		const play_button = this.add.image(540, 1600, "play-button");
		play_button.name = "play_button";
		play_button.setInteractive(this.input.makePixelPerfect());
		body.add(play_button);

		// container_selectionCardTimer
		const container_selectionCardTimer = this.add.container(0, 0);
		body.add(container_selectionCardTimer);

		// time_1
		const time_1 = this.add.text(114, 1596, "", {});
		time_1.setOrigin(0, 0.5);
		time_1.visible = false;
		time_1.text = "Time Left : 05 ";
		time_1.setStyle({ "align": "center", "fontFamily": "Dewars", "fontSize": "32px" });
		container_selectionCardTimer.add(time_1);

		// time
		const time = this.add.text(444, 1596, "", {});
		time.setOrigin(0, 0.5);
		time.visible = false;
		time.text = "Time Left : 05 ";
		time.setStyle({ "align": "center", "fontFamily": "Dewars", "fontSize": "32px" });
		container_selectionCardTimer.add(time);

		// time_2
		const time_2 = this.add.text(774, 1596, "", {});
		time_2.setOrigin(0, 0.5);
		time_2.visible = false;
		time_2.text = "Time Left : 05 ";
		time_2.setStyle({ "align": "center", "fontFamily": "Dewars", "fontSize": "32px" });
		container_selectionCardTimer.add(time_2);

		// instruction_txt
		const instruction_txt = this.add.text(540, 1520, "", {});
		instruction_txt.setOrigin(0.5, 0.5);
		instruction_txt.alpha = 0;
		instruction_txt.alphaTopLeft = 0;
		instruction_txt.alphaTopRight = 0;
		instruction_txt.alphaBottomLeft = 0;
		instruction_txt.alphaBottomRight = 0;
		instruction_txt.text = "MEMORIZE THE SPOTS ";
		instruction_txt.setStyle({ "fontFamily": "GainsboroughSans", "fontSize": "76px", "shadow.offsetX": 6, "shadow.offsetY": 5, "shadow.blur": 10, "shadow.fill": true });
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

		// container_timer
		const container_timer = this.add.container(0, 0);
		container_timer.visible = false;
		body.add(container_timer);

		// timer_base
		const timer_base = this.add.image(540, 394, "timer-base");
		container_timer.add(timer_base);

		// time_icon
		const time_icon = this.add.image(496, 394, "time-icon");
		container_timer.add(time_icon);

		// time_txt
		const time_txt = this.add.text(552, 394, "", {});
		time_txt.setOrigin(0, 0.5);
		time_txt.text = "05";
		time_txt.setStyle({ "color": "#ffc6b3", "fontFamily": "GainsboroughSans", "fontSize": "60px" });
		container_timer.add(time_txt);

		this.container_backSideCards = container_backSideCards;
		this.container_frontSideCards = container_frontSideCards;
		this.container_correctCards = container_correctCards;
		this.container_border = container_border;
		this.container_selectedCards = container_selectedCards;
		this.result_image = result_image;
		this.registrationButton_base = registrationButton_base;
		this.registration_button = registration_button;
		this.play_button = play_button;
		this.container_selectionCardTimer = container_selectionCardTimer;
		this.instruction_txt = instruction_txt;
		this.bottom_logo = bottom_logo;
		this.time_txt = time_txt;
		this.container_timer = container_timer;

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
	registrationButton_base;
	/** @type {Phaser.GameObjects.Image} */
	registration_button;
	/** @type {Phaser.GameObjects.Image} */
	play_button;
	/** @type {Phaser.GameObjects.Container} */
	container_selectionCardTimer;
	/** @type {Phaser.GameObjects.Text} */
	instruction_txt;
	/** @type {Phaser.GameObjects.Image} */
	bottom_logo;
	/** @type {Phaser.GameObjects.Text} */
	time_txt;
	/** @type {Phaser.GameObjects.Container} */
	container_timer;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.oTweenManager = new TweenManager(this);
		this.oInputManager = new InputManager(this);
		this.oSoundManager = new SoundManager(this);
		this.nCount = 0;
		this.nCorrectSelection = 0;
		this.nSelectedCount = 0;
		this.aFrontSideCards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7', 'card-8', 'card-9', 'card-10',
			'card-11', 'card-12', 'card-13', 'card-14', 'card-15', 'card-16', 'card-17', 'card-18', 'card-19', 'card-20',
			'card-21', 'card-22', 'card-23', 'card-24', 'card-25', 'card-26', 'card-27', 'card-28', 'card-29', 'card-30',
			'card-31', 'card-32', 'card-33', 'card-34', 'card-35', 'card-36', 'card-37'
		];
		this.aRequiredCards = ["card-35", "card-36", "card-37"];
		this.container_backSideCards.list.forEach((card, index) => {
			card.setScale(1.2, 1.2);
			card.on("pointerdown", () => {
				if (this.nCount < 3) {
					clearInterval(this.timerInterval);
					this.setTimer();
					card.disableInteractive();
					this.nCount++;
					if (this.container_frontSideCards.list[index].name == this.container_correctCards.list[this.nSelectedCount].name) {
						this.nCorrectSelection++;
						let border = this.add.image(this.container_selectedCards.list[this.nSelectedCount].x + 1, this.container_selectedCards.list[this.nSelectedCount].y, "green-border").setScale(1.05);
						this.container_border.add(border);
						this.oSoundManager.playSound(this.oSoundManager.correctSound, false);
					}
					else {
						let border = this.add.image(this.container_selectedCards.list[this.nSelectedCount].x + 1, this.container_selectedCards.list[this.nSelectedCount].y, "red-border").setScale(1.05);
						this.container_border.add(border);
						this.oSoundManager.playSound(this.oSoundManager.incorrectSound, false);
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
	getRandomCard = (array) => {
		const index = Math.round(Math.random() * array.length - 1);
		const arr = array.splice(index, 1)
		return arr[0];
	}
	setCardImage() {
		const remainingCards = this.aFrontSideCards.filter(card => !this.aRequiredCards.includes(card));
		const shuffleArray = (array) => {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}
		const shuffledRemainingCards = shuffleArray(remainingCards);
		const randomCards = shuffledRemainingCards.slice(0, 6);
		const finalCards = this.aRequiredCards.concat(randomCards);
		for (let i = 0; i < this.container_backSideCards.length; i++) {
			const cardName = this.getRandomCard(finalCards);
			const card = new Card(this, this.container_backSideCards.list[i].x, this.container_backSideCards.list[i].y);
			card.setCard(cardName);
			card.setName(cardName);
			card.setScale(0, 1);
			this.container_frontSideCards.add(card);
		}
	}
	setCorrectCard() {
		const cardName = this.getRandomCard(this.aRequiredCards);
		const card = new Card(this, this.container_selectedCards.list[this.nSelectedCount].x, this.container_selectedCards.list[this.nSelectedCount].y);
		card.setCard(cardName);
		card.setName(cardName);
		card.setScale(0.9, 0.9);
		this.container_correctCards.add(card);
		this.container_selectionCardTimer.list[this.nSelectedCount].setVisible(true);
	}
	setTimer() {
		let time = 5;
		const updateTimer = () => {
			time--;
			if (time >= 0) {
				// this.container_selectionCardTimer.list[this.nSelectedCount].list[1].setText(`0${time}`)
				this.oSoundManager.playSound(this.oSoundManager.timerSound, false);
				this.container_selectionCardTimer.list[this.nSelectedCount].setText(`Time Left : 0${time}`);
			}
			if (time < 0) {
				this.nCount++;
				let border = this.add.image(this.container_selectedCards.list[this.nSelectedCount].x, this.container_selectedCards.list[this.nSelectedCount].y, "red-border").setScale(1.05);
				this.container_border.add(border);
				this.oSoundManager.playSound(this.oSoundManager.incorrectSound, false);
				this.nSelectedCount++;
				clearInterval(this.timerInterval);
				if (this.nCount === 3) {
					if (this.nCorrectSelection < 2) {
						this.result_image.setTexture("you_lose");
					}
					this.oTweenManager.resultAnimation();
				}
				if (this.nCount < 3) {
					this.setCorrectCard();
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
