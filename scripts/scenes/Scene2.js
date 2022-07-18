class Scene2 extends Phaser.Scene {
    constructor() {
        super( "playSnake" );
    }

    create() {
        this.add.text( 10, 10, "Playing Snake" );
    }

}