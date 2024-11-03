class VictoryScene extends Phaser.Scene {
    constructor() {
      super({ key: 'VictoryScene' });
    }
  
    create() {
      this.message = this.add
        .text(
          window.innerWidth / 2,
          window.innerHeight / 2,
          'Vous avez fini le Jeux !',
          { fontSize: '48px', fill: '#ffffff' }
        )
        .setOrigin(0.5);
  
      this.instruction = this.add
        .text(
          window.innerWidth / 2,
          window.innerHeight / 2 + 100,
          'Appuyez sur Espace pour retourner au menu',
          { fontSize: '24px', fill: '#ffffff' }
        )
        .setOrigin(0.5);
  
      this.time.delayedCall(10000, () => {
        this.input.keyboard.once('keydown-SPACE', () => {
          this.scene.start('MainMenu'); 
        });
      });
    }
  
    resizeGame() {
      this.message.setPosition(window.innerWidth / 2, window.innerHeight / 2);
      this.instruction.setPosition(
        window.innerWidth / 2,
        window.innerHeight / 2 + 100
      );
    }
  }
  
  window.VictoryScene = VictoryScene;
  