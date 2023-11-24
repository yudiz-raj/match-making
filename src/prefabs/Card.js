
// You can write more code here

/* START OF COMPILED CODE */

class Card extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -6, y ?? 0);

		// card_base
		const card_base = scene.add.image(6, 0, "card-base");
		this.add(card_base);

		// card
		const card = scene.add.image(0, 0, "card-5");
		this.add(card);

		this.card = card;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	card;

	/* START-USER-CODE */

	// Write your code here.
	setCard = (texture) => {
		this.card.setTexture(texture);
		this.card.setName(texture);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
