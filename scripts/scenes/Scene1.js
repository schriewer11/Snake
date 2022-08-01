class Scene1 extends Phaser.Scene {

    // this will boot up the game
    constructor() {
        super( 'bootGame' );
    }


    // load all of the images and animations for the game
    preload() {
        this.load.spritesheet( 'snake', 'images/snake_body_half.png',  {
            frameWidth: 32,
            frameHeight: 32
        } );
        this.load.spritesheet( 'apple', 'images/apple.png',  {
            frameWidth: 40,
            frameHeight: 40
        } );
    }

    create() {

        this.add.text( 325, 180, "Snake", {
            font: 'bold 40pt Arial',
        } );
        this.add.text( 275, 340, "Press Spacebar Key to Start", {
            font: 'bold 15pt Arial',
        } );
        this.spacebar = this.input.keyboard.addKey( Phaser.Input.Keyboard.KeyCodes.SPACE );

    }

    update() {

        if ( Phaser.Input.Keyboard.JustDown( this.spacebar ) ) {
            this.scene.start( "playSnake" );
        }
    
    }

    

}