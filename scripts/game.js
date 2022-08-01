
let gameSettings = {
    playerSpeed: 150,
}

let config = {
    width: 800,
    height: 600,
    backgroundColor: 0x15A1EB,
    autoCenter: true,
    scene: [ Scene1, Scene2 ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    }
 }
let game = new Phaser.Game( config );

