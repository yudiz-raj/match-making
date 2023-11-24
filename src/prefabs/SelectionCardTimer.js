
// You can write more code here

/* START OF COMPILED CODE */

class SelectionCardTimer extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// card_timer_base
		const card_timer_base = scene.add.image(0, 0, "card-timer-base");
		this.add(card_timer_base);

		// cardTimer_txt
		const cardTimer_txt = scene.add.text(0, 0, "", {});
		cardTimer_txt.setOrigin(0.5, 0.5);
		cardTimer_txt.text = "03";
		cardTimer_txt.setStyle({ "color": "#612300", "fontFamily": "GainsboroughSans", "fontSize": "40px" });
		this.add(cardTimer_txt);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
