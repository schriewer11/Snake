class Scene1 extends Phaser.Scene {

    // this will boot up the game
    constructor() {
        super( 'bootGame' );
    }


    // load all of the images and animations for the game
    preload() {
        
    }

    create() {

        this.add.text( 325, 180, "Snake", {
            font: 'bold 40pt Arial',
        } );
        this.add.text( 280, 340, "Press Spacebar Key to Start" )
        this.spacebar = this.input.keyboard.addKey( Phaser.Input.Keyboard.KeyCodes.SPACE );

    }

    update() {

        if ( Phaser.Input.Keyboard.JustDown( this.spacebar ) ) {
            this.scene.start( "playSnake" );
        }
    
    }

    

}