class MainMenu extends Phaser.Scene {
    constructor(){
        super('mainMenu');
    }
    create(){
        this.add.text(300, 300, "Roly Poly: To the End\nPress A to jump\n click to Start");

        this.input.on('pointerdown', () => {
            this.scene.start('oneStart');
        })
    }
}

class OneStart extends Phaser.Scene {
    constructor(){
        super('oneStart');
    }
    create(){
        this.add.text(300,200, "Watch out for slugs!");

        this.input.on('pointerdown', () => {
            this.scene.start('One');
        })
    }
}

class One extends Phaser.Scene {
    constructor() {
        super('One');
    }

    create() {
        this.add.text(300,200,"Gameplay: Two slugs");
        
        this.input.keyboard.on('keydown-A', () => {
            // Fade out the scene and then start the next scene
            this.cameras.main.fadeOut(1000, 0, 0, 0, (camera, progress) => {
                if (progress === 1) {
                    this.scene.start('oneEnd');
                }
            });
    });
        
    }
}

class OneEnd extends Phaser.Scene {
    constructor(){
        super('oneEnd');
    }
    create(){
        this.add.text(300,200,"That was a good job!");

        this.input.on('pointerdown', () =>{
            this.input.on('pointerdown', () =>{
                this.scene.start('twoStart');
            })
        })
    }
}

class TwoStart extends Phaser.Scene {
    constructor() {
        super('twoStart');
    }
    create(){
        this.add.text(300,200,"Watch out for snails!");
        this.input.on('pointerdown', () => {
            this.scene.start('Two');
        })
    }
}

class Two extends Phaser.Scene {
    constructor() {
        super('Two');
    }

    create() {
        this.add.text(300,200,"Gameplay: Two snails");
        
        this.input.keyboard.on('keydown-A', () => {
            // Fade out the scene and then start the next scene
            this.cameras.main.fadeOut(1000, 0, 0, 0, (camera, progress) => {
                if (progress === 1) {
                    this.scene.start('winscene');
                }
            });
    });
        
    }
}

class Three extends Phaser.Scene {
    constructor() {
        super('Three');
    }

    create() {
        this.add.text(300,200,"Gameplay: Two snails");
        
        this.input.keyboard.on('keydown-A', () => {
            // Fade out the scene and then start the next scene
            this.cameras.main.fadeOut(1000, 0, 0, 0, (camera, progress) => {
                if (progress === 1) {
                    this.scene.start('winscene');
                }
            });
    });
        
    }
}

class WinScene extends Phaser.Scene {
    constructor() {
        super('winscene');
    }

    create() {
        this.add.text(300, 300, "You win!");
        this.add.text(300, 250, "Tap to restart");
        this.input.on('pointerdown', () => {
            this.scene.start('mainMenu');
        })
    }
}

let game = new Phaser.Game({
    width: 600,
    height: 600,
    scene: [ MainMenu, OneStart, One, OneEnd, Two, TwoStart, Three, WinScene]
});