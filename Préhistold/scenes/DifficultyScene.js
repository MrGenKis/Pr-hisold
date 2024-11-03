class DifficultyScene extends Phaser.Scene {
    constructor() {
      super({ key: 'DifficultyScene' });
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
        .text(window.innerWidth / 2, window.innerHeight / 2 - 150, 'Choisir une difficulté', {
          fontSize: '40px',
          fill: '#ffffff',
        })
        .setOrigin(0.5);
  
      const easyButton = this.add
        .text(window.innerWidth / 2, window.innerHeight / 2 - 50, 'Facile', {
          fontSize: '32px',
          fill: '#fff',
        })
        .setOrigin(0.5)
        .setInteractive();
  
      easyButton.on('pointerdown', () => {
        this.startGameWithDifficulty('facile');
      });
  
      const mediumButton = this.add
        .text(window.innerWidth / 2, window.innerHeight / 2 + 50, 'Moyen', {
          fontSize: '32px',
          fill: '#fff',
        })
        .setOrigin(0.5)
        .setInteractive();
  
      mediumButton.on('pointerdown', () => {
        this.startGameWithDifficulty('moyen');
      });
  
      const hardButton = this.add
        .text(window.innerWidth / 2, window.innerHeight / 2 + 150, 'Difficile', {
          fontSize: '32px',
          fill: '#fff',
        })
        .setOrigin(0.5)
        .setInteractive();
  
      hardButton.on('pointerdown', () => {
        this.startGameWithDifficulty('difficile');
      });
    }
  
    startGameWithDifficulty(difficulty) {
      console.log('Difficulté choisie :', difficulty);
      this.scene.start('GameScene', { difficulty: difficulty });
    }
  }
  
  console.log('DifficultyScene chargée');
  window.DifficultyScene = DifficultyScene;
  