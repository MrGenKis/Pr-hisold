class GameOverScene extends Phaser.Scene {
    constructor() {
      super({ key: 'GameOverScene' });
    }
  
    preload() {
      console.log('GameOverScene preload');
      this.load.image('gameOverBackground', './assets/room/13b.png');
    }
  
    create() {
      console.log('GameOverScene create');
  
      this.add
        .image(0, 0, 'gameOverBackground')
        .setOrigin(0, 0)
        .setDisplaySize(window.innerWidth, window.innerHeight);
  
      this.add
        .text(
          window.innerWidth / 2,
          window.innerHeight / 2 - 100,
          'Game Over',
          {
            fontSize: '64px',
            fill: '#ff0000',
          }
        )
        .setOrigin(0.5);
  
      const restartButton = this.add
        .text(
          window.innerWidth / 2,
          window.innerHeight / 2 + 50,
          'Retour au Menu Principal',
          {
            fontSize: '32px',
            fill: '#fff',
          }
        )
        .setOrigin(0.5)
        .setInteractive();
  
      restartButton.on('pointerdown', () => {
        this.scene.start('MainMenu');
      });
  
      restartButton.on('pointerover', () =>
        restartButton.setStyle({ fill: '#ff0' })
      );
      restartButton.on('pointerout', () =>
        restartButton.setStyle({ fill: '#fff' })
      );
    }
  
    resizeGame() {
    }
  }
  
  window.GameOverScene = GameOverScene;
  