class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenu' });
  }

  preload() {
    this.load.image('menuBackground', './assets/room/1b.png');
  }

  create() {
    this.add
      .image(0, 0, 'menuBackground')
      .setOrigin(0, 0)
      .setDisplaySize(window.innerWidth, window.innerHeight);

    this.add
      .text(window.innerWidth / 2, window.innerHeight / 2 - 100, 'Préhishold !', {
        fontSize: '50px',
        fill: '#ffffff',
      })
      .setOrigin(0.5);

    const startButton = this.add
      .text(window.innerWidth / 2, window.innerHeight / 2 + 50, 'Commencer le jeu', {
        fontSize: '32px',
        fill: '#fff',
      })
      .setOrigin(0.5)
      .setInteractive();

    startButton.on('pointerdown', () => {
      this.scene.start('DifficultyScene');
    });

    startButton.on('pointerover', () => startButton.setStyle({ fill: '#ff0' }));
    startButton.on('pointerout', () => startButton.setStyle({ fill: '#fff' }));

    const configButton = this.add
      .text(window.innerWidth / 2, window.innerHeight / 2 + 150, 'Configuration des touches', {
        fontSize: '32px',
        fill: '#fff',
      })
      .setOrigin(0.5)
      .setInteractive();

    configButton.on('pointerdown', () => {
      this.scene.start('ConfigScene'); 
    });

    configButton.on('pointerover', () => configButton.setStyle({ fill: '#ff0' }));
    configButton.on('pointerout', () => configButton.setStyle({ fill: '#fff' }));
  }
}

window.MainMenu = MainMenu;
