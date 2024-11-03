const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: [
    window.MainMenu,
    window.DifficultyScene,
    window.ConfigScene,
    window.GameScene, 
    window.SecondLevelScene,
    window.GameOverScene,
    window.VictoryScene,
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

window.game = new Phaser.Game(config);

window.addEventListener('resize', () => {
  if (window.game.isBooted) {
    if (window.game.scale) {
      window.game.scale.resize(window.innerWidth, window.innerHeight);
    }
    const activeScene = window.game.scene.getScenes(true)[0];
    if (activeScene && activeScene.resizeGame) {
      activeScene.resizeGame();
    }
  }
});
