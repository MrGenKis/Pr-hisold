class ConfigScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ConfigScene' });
    }

    init(data) {
        this.savedControls = data.savedControls || {
            moveUp: Phaser.Input.Keyboard.KeyCodes.Z,
            moveDown: Phaser.Input.Keyboard.KeyCodes.S,
            moveLeft: Phaser.Input.Keyboard.KeyCodes.Q,
            moveRight: Phaser.Input.Keyboard.KeyCodes.D,
            shootUp: Phaser.Input.Keyboard.KeyCodes.UP,
            shootDown: Phaser.Input.Keyboard.KeyCodes.DOWN,
            shootLeft: Phaser.Input.Keyboard.KeyCodes.LEFT,
            shootRight: Phaser.Input.Keyboard.KeyCodes.RIGHT,
        };
    }

    preload() {}

    create() {
        this.add.text(window.innerWidth / 2, 50, 'Configuration des touches', {
            fontSize: '40px',
            fill: '#ffffff',
        }).setOrigin(0.5);

        this.createKeyConfigOption('Avancer (haut)', 'moveUp', 150);
        this.createKeyConfigOption('Reculer (bas)', 'moveDown', 200);
        this.createKeyConfigOption('Aller à gauche', 'moveLeft', 250);
        this.createKeyConfigOption('Aller à droite', 'moveRight', 300);
        this.createKeyConfigOption('Tirer en haut', 'shootUp', 350);
        this.createKeyConfigOption('Tirer en bas', 'shootDown', 400);
        this.createKeyConfigOption('Tirer à gauche', 'shootLeft', 450);
        this.createKeyConfigOption('Tirer à droite', 'shootRight', 500);

        const backButton = this.add.text(window.innerWidth / 2, 600, 'Retour', {
            fontSize: '32px',
            fill: '#fff',
        }).setOrigin(0.5).setInteractive();

        backButton.on('pointerdown', () => {
            this.registry.set('controls', this.savedControls);
            this.scene.start('MainMenu', { savedControls: this.savedControls });
        });
    }

    createKeyConfigOption(label, action, yPosition) {
        this.add.text(100, yPosition, label, {
            fontSize: '24px',
            fill: '#ffffff',
        });

        const keyTextValue = this.getReadableKeyName(this.savedControls[action]);
        const keyText = this.add.text(400, yPosition, keyTextValue, {
            fontSize: '24px',
            fill: '#ffff00',
        });

        keyText.setInteractive();
        keyText.on('pointerdown', () => {
            keyText.setText('Appuyez sur une touche...');
            this.input.keyboard.once('keydown', (event) => {
                this.savedControls[action] = event.keyCode; 
                const readableKey = this.getReadableKeyName(event.keyCode);
                keyText.setText(readableKey); 
            });
        });
    }

    getReadableKeyName(keyCode) {
        switch (keyCode) {
            case Phaser.Input.Keyboard.KeyCodes.UP:
                return 'Flèche du haut';
            case Phaser.Input.Keyboard.KeyCodes.DOWN:
                return 'Flèche du bas';
            case Phaser.Input.Keyboard.KeyCodes.LEFT:
                return 'Flèche de gauche';
            case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                return 'Flèche de droite';
            default:
                return String.fromCharCode(keyCode).toUpperCase();
        }
    }
}

window.ConfigScene = ConfigScene;
