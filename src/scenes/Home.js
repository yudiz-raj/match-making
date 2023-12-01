
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(540, 960, "background");

		// play_button
		const play_button = this.add.image(540, 1530, "play-button");
		play_button.name = "play_button";

		this.play_button = play_button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	play_button;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.oInputManager = new InputManager(this);
		this.oTweenManager = new TweenManager(this);
		this.oInputManager.buttonClick(this.play_button);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
