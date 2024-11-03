class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }
  init(data) {
    this.difficulty = data.difficulty || 'facile';
    this.controls = data.controls || {
      up: Phaser.Input.Keyboard.KeyCodes.Z,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.Q,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      fire: Phaser.Input.Keyboard.KeyCodes.SPACE
    };
  }
  preload() {
    this.setDifficultySettings();
    this.load.spritesheet('character', './assets/character.png', {
      frameWidth: 16,
      frameHeight: 24.5,
    });
    this.load.image('fireball', './assets/projectile/Fireball1.png');
    this.load.spritesheet('monster', './assets/monster/mob.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet('bossWalk', './assets/boss/boss.png', {
      frameWidth: 64, 
      frameHeight: 64, 
    });
    this.load.image('bossJump', './assets/boss/bossjump.png');
    this.load.audio('impact', './assets/sounds/impact.1.ogg');
    this.load.image('heart', './assets/character/heart.png');  
    this.load.audio('soundjump', './assets/sounds/soundjump.ogg');
    this.load.image('star', './assets/items/star.png');
    this.load.image('sword', './assets/items/sword.png');
    this.load.audio('bossMusic', './assets/sounds/boss.ogg');

    this.roomsData = {
      '1b': {
        imageKey: '1b',
        doors: [
          {
            direction: 'bottom',
            x: window.innerWidth / 2,
            y: window.innerHeight - 50,
            width: 150,
            height: 50,
            targetRooms: [
              '2b',
              '6b',
              '7b',
              '10b',
              '11b',
              '13b',
              '14b',
              '15b',
            ],
          },
        ],
      },
      '2b': {
        imageKey: '2b',
        doors: [
          {
            direction: 'top',
            x: window.innerWidth / 2,
            y: 50,
            width: 150,
            height: 50,
            targetRooms: [
              '1b',
              '6b',
              '8b',
              '9b',
              '11b',
              '12b',
              '14b',
              '15b',
            ],
          },
        ],
      },
      '3b': {
        imageKey: '3b',
        doors: [
          {
            direction: 'right',
            x: window.innerWidth - 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '5b',
              '7b',
              '8b',
              '11b',
              '12b',
              '13b',
              '15b',
            ],
          },
        ],
      },
      '4b': {
        imageKey: '4b',
        doors: [
          {
            direction: 'left',
            x: 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '5b',
              '9b',
              '10b',
              '11b',
              '12b',
              '13b',
              '14b',
            ],
          },
        ],
      },
      '5b': {
        imageKey: '5b',
        doors: [
          {
            direction: 'left',
            x: 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '4b',
              '9b',
              '10b',
              '11b',
              '12b',
              '13b',
              '14b',
            ],
          },
          {
            direction: 'right',
            x: window.innerWidth - 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '3b',
              '5b',
              '7b',
              '8b',
              '11b',
              '12b',
              '13b',
              '15b',
            ],
          },
        ],
      },
      '6b': {
        imageKey: '6b',
        doors: [
          {
            direction: 'top',
            x: window.innerWidth / 2,
            y: 50,
            width: 150,
            height: 50,
            targetRooms: [
              '1b',
              '7b',
              '10b',
              '11b',
              '13b',
              '14b',
              '15b',
            ],
          },
          {
            direction: 'bottom',
            x: window.innerWidth / 2,
            y: window.innerHeight - 50,
            width: 150,
            height: 50,
            targetRooms: [
              '2b',
              '7b',
              '10b',
              '11b',
              '13b',
              '14b',
              '15b',
            ],
          },
        ],
      },
      '7b': {
        imageKey: '7b',
        doors: [
          {
            direction: 'top',
            x: window.innerWidth / 2,
            y: 50,
            width: 150,
            height: 50,
            targetRooms: [
              '1b',
              '6b',
              '8b',
              '9b',
              '11b',
              '14b',
              '15b',
            ],
          },
          {
            direction: 'left',
            x: 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '4b',
              '5b',
              '9b',
              '10b',
              '11b',
              '12b',
              '13b',
              '14b',
            ],
          },
        ],
      },
      '8b': {
        imageKey: '8b',
        doors: [
          {
            direction: 'left',
            x: 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '4b',
              '5b',
              '9b',
              '10b',
              '11b',
              '12b',
              '13b',
            ],
          },
          {
            direction: 'bottom',
            x: window.innerWidth / 2,
            y: window.innerHeight - 50,
            width: 150,
            height: 50,
            targetRooms: [
              '2b',
              '7b',
              '10b',
              '11b',
              '13b',
              '14b',
              '15b',
            ],
          },
        ],
      },
      '9b': {
        imageKey: '9b',
        doors: [
          {
            direction: 'right',
            x: window.innerWidth - 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '3b',
              '5b',
              '7b',
              '8b',
              '11b',
              '12b',
              '13b',
              '15b',
            ],
          },
          {
            direction: 'bottom',
            x: window.innerWidth / 2,
            y: window.innerHeight - 50,
            width: 150,
            height: 50,
            targetRooms: ['2b', '6b', '8b', '11b', '14b', '15b'],
          },
        ],
      },
      '10b': {
        imageKey: '10b',
        doors: [
          {
            direction: 'top',
            x: window.innerWidth / 2,
            y: 50,
            width: 150,
            height: 50,
            targetRooms: [
              '1b',
              '6b',
              '8b',
              '9b',
              '11b',
              '14b',
              '15b',
            ],
          },
          {
            direction: 'right',
            x: window.innerWidth - 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '3b',
              '5b',
              '7b',
              '8b',
              '11b',
              '12b',
              '13b',
              '15b',
            ],
          },
        ],
      },
      '11b': {
        imageKey: '11b',
        doors: [
          {
            direction: 'top',
            x: window.innerWidth / 2,
            y: 50,
            width: 150,
            height: 50,
            targetRooms: [
              '1b',
              '6b',
              '8b',
              '9b',
              '12b',
              '14b',
              '15b',
            ],
          },
          {
            direction: 'right',
            x: window.innerWidth - 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '3b',
              '5b',
              '7b',
              '8b',
              '12b',
              '13b',
              '15b',
            ],
          },
          {
            direction: 'bottom',
            x: window.innerWidth / 2,
            y: window.innerHeight - 50,
            width: 150,
            height: 50,
            targetRooms: [
              '2b',
              '6b',
              '7b',
              '10b',
              '13b',
              '14b',
              '15b',
            ],
          },
          {
            direction: 'left',
            x: 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '4b',
              '5b',
              '9b',
              '10b',
              '12b',
              '13b',
              '14b',
            ],
          },
        ],
      },
      '12b': {
        imageKey: '12b',
        doors: [
          {
            direction: 'left',
            x: 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '4b',
              '5b',
              '9b',
              '10b',
              '11b',
              '13b',
              '14b',
            ],
          },
          {
            direction: 'bottom',
            x: window.innerWidth / 2,
            y: window.innerHeight - 50,
            width: 150,
            height: 50,
            targetRooms: [
              '2b',
              '6b',
              '7b',
              '10b',
              '13b',
              '14b',
              '15b',
            ],
          },
          {
            direction: 'right',
            x: window.innerWidth - 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '3b',
              '5b',
              '7b',
              '8b',
              '11b',
              '13b',
              '15b',
            ],
          },
        ],
      },
      '13b': {
        imageKey: '13b',
        doors: [
          {
            direction: 'top',
            x: window.innerWidth / 2,
            y: 50,
            width: 150,
            height: 50,
            targetRooms: [
              '1b',
              '6b',
              '8b',
              '9b',
              '11b',
              '12b',
              '14b',
              '15b',
            ],
          },
          {
            direction: 'right',
            x: window.innerWidth - 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '3b',
              '5b',
              '9b',
              '10b',
              '11b',
              '12b',
              '14b',
            ],
          },
          {
            direction: 'left',
            x: 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '4b',
              '5b',
              '9b',
              '10b',
              '11b',
              '12b',
              '14b',
            ],
          },
        ],
      },
      '14b': {
        imageKey: '14b',
        doors: [
          {
            direction: 'top',
            x: window.innerWidth / 2,
            y: 50,
            width: 150,
            height: 50,
            targetRooms: [
              '1b',
              '6b',
              '8b',
              '9b',
              '11b',
              '12b',
              '15b',
            ],
          },
          {
            direction: 'right',
            x: window.innerWidth - 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '3b',
              '5b',
              '7b',
              '8b',
              '11b',
              '12b',
              '13b',
              '15b',
            ],
          },
          {
            direction: 'bottom',
            x: window.innerWidth / 2,
            y: window.innerHeight - 50,
            width: 150,
            height: 50,
            targetRooms: [
              '2b',
              '6b',
              '7b',
              '10b',
              '11b',
              '13b',
              '15b',
            ],
          },
        ],
      },
      '15b': {
        imageKey: '15b',
        doors: [
          {
            direction: 'left',
            x: 50,
            y: window.innerHeight / 2,
            width: 100,
            height: 200,
            targetRooms: [
              '4b',
              '5b',
              '9b',
              '10b',
              '11b',
              '12b',
              '13b',
              '14b',
            ],
          },
          {
            direction: 'top',
            x: window.innerWidth / 2,
            y: 50,
            width: 150,
            height: 50,
            targetRooms: [
              '1b',
              '6b',
              '8b',
              '9b',
              '11b',
              '12b',
              '14b',
            ],
          },
          {
            direction: 'bottom',
            x: window.innerWidth / 2,
            y: window.innerHeight - 50,
            width: 150,
            height: 50,
            targetRooms: [
              '2b',
              '6b',
              '7b',
              '10b',
              '11b',
              '13b',
              '14b',
            ],
          },
        ],
      },
    };
    for (let roomKey in this.roomsData) {
      this.load.image(roomKey, `./assets/room/${roomKey}.png`);
    }
  }

  create() {
    this.timeElapsed = 0; 
  this.timerText = this.add.text(20, 20, 'Temps : 00:00', {
    fontSize: '32px',
    fill: '#ffffff',
    fontFamily: 'Arial',
    stroke: '#000000',
    strokeThickness: 4
  }).setDepth(1);  

  
  this.time.addEvent({
    delay: 1000, 
    callback: this.updateTimer,
    callbackScope: this,
    loop: true
  });

      this.playerLives = 3;
      this.maxPlayerLives = 3;
      this.isInvincible = false;
      this.normalSpeed = 160;
      this.projectileSpeed = 300; 
this.projectileDamage = 1;  
      this.invincibleSpeed = 220;
      this.doorsActive = false;
      this.canInteractWithDoor = true;
      this.monsters = [];
      this.visitedRooms = {};
      this.currentRoomKey = '1b';
      this.roomsCleared = 0; 
      this.bossDefeated = false; 
      this.bossDoorCreated = false; 
  
      this.background = this.add
        .image(0, 0, this.currentRoomKey)
        .setOrigin(0, 0)
        .setDisplaySize(window.innerWidth, window.innerHeight);
      this.setWorldBounds();
  
      this.impactSound = this.sound.add('impact');
  
      this.player = this.physics.add.sprite(
        window.innerWidth / 2,
        window.innerHeight / 2,
        'character'
      );
      this.player.setScale(5);
      this.player.setCollideWorldBounds(true);
  
      this.hearts = [];
      this.createPlayerLives();
  
      this.createAnimations();
  
      this.fireballs = this.physics.add.group({
        defaultKey: 'fireball',
        maxSize: 20,
      });
  
      this.spawnMonsters();
  
      this.createDoorZones();
  
      this.keys = this.input.keyboard.addKeys({
        up: this.controls.up,
        down: this.controls.down,
        left: this.controls.left,
        right: this.controls.right,
        fire: this.controls.fire,
      });
  
      this.cursors = this.input.keyboard.createCursorKeys();
      this.fireCooldown = 0;
    }
  
    update(time, delta) {
      this.player.setVelocity(0);
  
      let speed = this.isInvincible ? this.invincibleSpeed : this.normalSpeed;
  
      if (this.keys.left.isDown) {
        this.player.setVelocityX(-speed);
        this.player.anims.play('walk-left', true);
      } else if (this.keys.right.isDown) {
        this.player.setVelocityX(speed);
        this.player.anims.play('walk-right', true);
      } else if (this.keys.up.isDown) {
        this.player.setVelocityY(-speed);
        this.player.anims.play('walk-up', true);
      } else if (this.keys.down.isDown) {
        this.player.setVelocityY(speed);
        this.player.anims.play('walk-down', true);
      } else {
        this.player.anims.stop();
      }
  
      if (this.monsters && this.monsters.length > 0) {
        this.monsters.forEach((monster) => {
          if (monster === this.boss) {
            this.bossBehavior(monster);
          } else {
            this.physics.moveToObject(monster, this.player, 100);
          }
        });
      }
  
      if (this.monsters.length === 0 && !this.doorsActive && !this.bossDefeated) {
        this.activateDoors();
      }
  
      if (this.fireCooldown <= 0) {
        if (this.cursors.left.isDown) {
          this.fireProjectile('left');
          this.fireCooldown = 300;
        }
        if (this.cursors.right.isDown) {
          this.fireProjectile('right');
          this.fireCooldown = 300;
        }
        if (this.cursors.up.isDown) {
          this.fireProjectile('up');
          this.fireCooldown = 300;
        }
        if (this.cursors.down.isDown) {
          this.fireProjectile('down');
          this.fireCooldown = 300;
        }
      }
  
      this.fireCooldown -= delta;
    }
  
    createAnimations() {
      this.anims.create({
        key: 'walk-down',
        frames: this.anims.generateFrameNumbers('character', {
          start: 0,
          end: 3,
        }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: 'walk-right',
        frames: this.anims.generateFrameNumbers('character', {
          start: 4,
          end: 7,
        }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: 'walk-left',
        frames: this.anims.generateFrameNumbers('character', {
          start: 8,
          end: 11,
        }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: 'walk-up',
        frames: this.anims.generateFrameNumbers('character', {
          start: 0,
          end: 3,
        }),
        frameRate: 10,
        repeat: -1,
      });
  
     
      this.anims.create({
        key: 'boss-walk',
        frames: this.anims.generateFrameNumbers('bossWalk', {
          start: 0,
          end: 7,
        }),
        frameRate: 8,
        repeat: -1,
      });
  
      this.anims.create({
        key: 'boss-jump',
        frames: [{ key: 'bossJump' }],
        frameRate: 1,
        repeat: 0,
      });
    }
  
    fireProjectile(direction) {
      const fireball = this.fireballs.get(this.player.x, this.player.y);
      if (fireball) {
        fireball.setActive(true);
        fireball.setVisible(true);
        fireball.setScale(3);
        fireball.body.velocity.set(0);
    
        const speed = this.projectileSpeed;
    
        if (direction === 'left') {
          fireball.body.velocity.x = -speed;
        } else if (direction === 'right') {
          fireball.body.velocity.x = speed;
        } else if (direction === 'up') {
          fireball.body.velocity.y = -speed;
        } else if (direction === 'down') {
          fireball.body.velocity.y = speed;
        }
    
        fireball.body.enable = true;
        fireball.setCollideWorldBounds(true);
        fireball.body.onWorldBounds = true;
        fireball.body.world.on('worldbounds', (body) => {
          if (body.gameObject === fireball) {
            fireball.setActive(false);
            fireball.setVisible(false);
            fireball.body.enable = false;
          }
        });
      }
    }
    
    

    setDifficultySettings() {
      switch (this.difficulty) {
         case 'facile':
            this.monsterHp = 1;
            this.bossHp = 20;
            this.playerFullHeal = true;
            this.monsterSpeed = 100;
            this.bossSpeed = 100;
            break;
         case 'moyen':
            this.monsterHp = 5;
            this.bossHp = 30;
            this.playerFullHeal = false;
            this.monsterSpeed = 100;
            this.bossSpeed = 100;
            break;
         case 'difficile':
            this.monsterHp = 8;
            this.bossHp = 35;
            this.playerFullHeal = false;
            this.monsterSpeed = 150;
            this.bossSpeed = 150;
            break;
      }
   }
   
  
    createPlayerLives() {
      this.hearts.forEach((heart) => heart.destroy());
      this.hearts = [];
      for (let i = 0; i < this.playerLives; i++) {
        const heart = this.add.image(50 + i * 40, 50, 'heart');
        heart.setScale(0.5);
        this.hearts.push(heart);
      }
    }
  
    updatePlayerLives() {
      this.hearts.forEach((heart) => heart.destroy());
      this.hearts = [];
      for (let i = 0; i < this.playerLives; i++) {
        const heart = this.add.image(50 + i * 40, 50, 'heart');
        heart.setScale(0.5);
        this.hearts.push(heart);
      }
    }
  
    playerHit(player, monster) {
      if (this.isInvincible) {
        return;
      }
  
      this.takeDamage();
  
      this.isInvincible = true;
      this.player.setTint(0xff0000);
  
      this.time.delayedCall(3000, () => {
        this.isInvincible = false;
        this.player.clearTint();
      });
    }
  
    takeDamage() {
      if (this.playerLives > 0) {
        this.playerLives -= 1;
        this.updatePlayerLives();
      }
      if (this.playerLives <= 0) {
        console.log('Game Over');
        this.scene.start('GameOverScene');
      }
    }
  
    hitMonster(monster, fireball) {
      fireball.setActive(false);
      fireball.setVisible(false);
      fireball.body.enable = false;
      
      this.impactSound.play();
      
      monster.setTint(0xff0000);
      this.time.delayedCall(100, () => {
        monster.clearTint();
      });
      
      if (monster.hp > 0) {
        monster.hp -= 1;
      }
      
      if (monster.hp <= 0) {
        this.monsters = this.monsters.filter((m) => m !== monster);
        monster.setActive(false);
        monster.setVisible(false);
        monster.body.enable = false;
        
        if (monster === this.boss) {
          this.bossDefeated = true;
          console.log('Boss vaincu !');
          
          // Arrêter la musique du boss
          this.stopBossMusic();
          
          this.showItems();
        }
      }
    }
    

    stopBossMusic() {
      if (this.bossMusic && this.bossMusic.isPlaying) {
        this.bossMusic.stop();
      }
    }
    
    showItems() {
      this.star = this.physics.add.sprite(window.innerWidth / 2 - 150, window.innerHeight / 2, 'star');
      this.star.setScale(2); 
      this.sword = this.physics.add.sprite(window.innerWidth / 2 + 150, window.innerHeight / 2, 'sword');
      this.sword.setScale(0.1); 
      this.physics.add.overlap(this.player, this.star, () => {
        this.pickItem('star'); 
      }, null, this);
    
      this.physics.add.overlap(this.player, this.sword, () => {
        this.pickItem('sword'); 
      }, null, this);
    }
    
    pickItem(item) {
      let message = ''; 
    
      if (item === 'star') {
        if (this.difficulty === 'facile') {
          this.projectileSpeed += 2;
          message = 'Vitesse d\'attaque +2';
        } else if (this.difficulty === 'moyen') {
          this.projectileSpeed += 3;
          message = 'Vitesse d\'attaque +3';
        } else if (this.difficulty === 'difficile') {
          this.projectileSpeed += 3;
          this.projectileDamage += 3;
          message = 'Vitesse d\'attaque +3, Dégâts +3';
        }
        if (this.star) this.star.destroy();  
      } else if (item === 'sword') {
        if (this.difficulty === 'facile') {
          this.projectileDamage += 2;
          message = 'Dégâts +2';
        } else if (this.difficulty === 'moyen') {
          this.projectileDamage += 3;
          message = 'Dégâts +3';
        } else if (this.difficulty === 'difficile') {
          this.projectileDamage += 3;
          this.projectileSpeed += 3;
          message = 'Dégâts +3, Vitesse +3';
        }
        if (this.sword) this.sword.destroy();  
      }
    
      
      this.showMessage(message);
    
      this.time.delayedCall(1000, () => {
        this.scene.start('SecondLevelScene', { difficulty: this.difficulty });
      });
    }
    
    showMessage(message) {
      const messageText = this.add.text(window.innerWidth / 2, window.innerHeight / 2 - 200, message, {
        fontSize: '32px',
        fill: '#ffffff',
      }).setOrigin(0.5);
    
      this.time.delayedCall(2000, () => {
        messageText.destroy();
      });
    }
    
    
    spawnStar() {
      this.star = this.physics.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'star');
      this.star.setScale(0.2);
    
      this.physics.add.overlap(this.player, this.star, this.collectStar, null, this);
    }
    
    collectStar(player, star) {
      star.destroy(); 
    
      let bonusText = '';
      if (this.difficulty === 'facile') {
        this.projectileSpeed += 200;
        bonusText = '+2 de vitesse';
      } else if (this.difficulty === 'moyen') {
        this.projectileSpeed += 300; 
        bonusText = '+3 de vitesse';
      } else if (this.difficulty === 'difficile') {
        this.projectileSpeed += 300; 
        this.projectileDamage += 1; 
        bonusText = '+3 de vitesse et +1 de dégâts';
      }
    
      const bonusMessage = this.add.text(window.innerWidth / 2, window.innerHeight / 2, `Vitesse d'attaque ${bonusText}`, {
        fontSize: '32px',
        fill: '#ff0'
      }).setOrigin(0.5);
    
      this.time.delayedCall(2000, () => {
        bonusMessage.destroy(); 
    
        this.scene.start('SecondLevelScene', { difficulty: this.difficulty });
      });
    }
    
    
    
    createDoorZones() {
      if (this.doors) {
        this.doors.forEach((door) => {
          door.zone.destroy();
        });
      }
      this.doors = [];
    
      const roomData = this.roomsData[this.currentRoomKey];
    
      if (!roomData) {
        console.error(`Aucune donnée trouvée pour la salle : ${this.currentRoomKey}`);
        return;
      }
    
      roomData.doors.forEach((doorInfo) => {
        let doorZone = this.add.zone(doorInfo.x, doorInfo.y, doorInfo.width, doorInfo.height);
        this.physics.world.enable(doorZone);  
        doorZone.body.setAllowGravity(false); 
        doorZone.body.moves = false;          
    
        this.physics.add.overlap(
          this.player,
          doorZone,
          () => {
            this.enterDoor(doorInfo);
          },
          null,
          this
        );
    
        this.doors.push({ zone: doorZone, info: doorInfo });
      });
    }
    
    
  
    activateDoors() {
      this.doorsActive = true;
    }

    updateTimer() {
      this.timeElapsed += 1;  
    
      const minutes = Math.floor(this.timeElapsed / 60);
      const seconds = this.timeElapsed % 60;
    
      const formattedTime = `Temps : ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      this.timerText.setText(formattedTime);
    }

    resizeTimerText(gameSize) {
  const { width } = gameSize;
  this.timerText.setX(width - this.timerText.width - 20);
}

    
  
    enterDoor(doorInfo) {
      if (this.doorsActive && this.canInteractWithDoor) {
        this.canInteractWithDoor = false;
        this.doorsActive = false;
  
        const targetRooms = doorInfo.targetRooms;
        const randomIndex = Phaser.Math.Between(0, targetRooms.length - 1);
        const targetRoomKey = targetRooms[randomIndex];
  
        this.time.delayedCall(500, () => {
          this.changeRoom(targetRoomKey);
        });
      }
    }
  
    changeRoom(roomKey) {
      this.currentRoomKey = roomKey;
      this.background.setTexture(this.currentRoomKey);
    
      console.log('la salle :', this.currentRoomKey);
    
      this.player.setPosition(window.innerWidth / 2, window.innerHeight / 2);
    
      if (this.difficulty === 'facile') {
        this.playerLives = this.maxPlayerLives; 
      } else if (this.difficulty === 'moyen') {
        this.playerLives = Math.min(this.maxPlayerLives, this.playerLives + 1); 
      }
    
      
      this.updatePlayerLives();
    
      this.isInvincible = true;
      this.player.setTint(0x00ff00);
    
      this.time.delayedCall(1000, () => {
        this.isInvincible = false;
        this.player.clearTint();
      });
    
      this.createDoorZones();
      this.spawnMonsters();
    
      this.time.delayedCall(3000, () => {
        this.doorsActive = true;
        this.canInteractWithDoor = true;
      });
    }
    
    startSecondLevel() {
      if (this.difficulty === 'difficile') {
        this.playerLives = this.maxPlayerLives; 
        this.updatePlayerLives();
      }
      this.scene.start('SecondLevelScene');
    }
    
  
    spawnMonsters() {
      if (this.currentRoomKey === '1b' && !this.bossDefeated) {
        console.log('première salle = pas de monstre');
        return;
      }
    
      if (this.monsters) {
        this.monsters.forEach((monster) => {
          monster.destroy();
        });
      }
      this.monsters = [];
    
      if (this.visitedRooms[this.currentRoomKey]) {
        return;
      } else {
        this.visitedRooms[this.currentRoomKey] = true;
        this.roomsCleared += 1; 
      }
    
      if (this.roomsCleared >= 5 && !this.bossDefeated) {
        this.spawnBoss();
      } else {
        let monsterCount;
        let monsterSpeed;
    
        if (this.difficulty === 'facile') {
          monsterCount = 5;
          monsterSpeed = 100;
        } else if (this.difficulty === 'moyen') {
          monsterCount = 7;
          monsterSpeed = 100; 
        } else if (this.difficulty === 'difficile') {
          monsterCount = 7;
          monsterSpeed = 150; 
        }
    
        for (let i = 0; i < monsterCount; i++) {
          let randomX, randomY;
          let distance;
          do {
            randomX = Phaser.Math.Between(50, window.innerWidth - 50);
            randomY = Phaser.Math.Between(50, window.innerHeight - 50);
            distance = Phaser.Math.Distance.Between(
              randomX,
              randomY,
              this.player.x,
              this.player.y
            );
          } while (distance < 150);
    
          const randomFrame = this.getRandomFrame();
    
          let monster = this.physics.add.sprite(
            randomX,
            randomY,
            'monster',
            randomFrame
          );
          monster.setScale(5);
          monster.setCollideWorldBounds(true);
          monster.hp = this.monsterHp;
    
          this.physics.moveToObject(monster, this.player, monsterSpeed);
    
          this.monsters.push(monster);
    
          this.physics.add.collider(
            this.fireballs,
            monster,
            this.hitMonster,
            null,
            this
          );
          this.physics.add.overlap(
            this.player,
            monster,
            this.playerHit,
            null,
            this
          );
        }
      }
    }
    
    
  
    spawnBoss() {
      this.boss = this.physics.add.sprite(
        window.innerWidth / 2,
        window.innerHeight / 2 - 100,
        'bossWalk'
      );
      this.boss.setScale(2.5); 
      this.boss.setCollideWorldBounds(true);
      this.boss.hp = 20;
    
      this.boss.anims.play('boss-walk', true);
      this.monsters.push(this.boss);
    
      this.physics.add.collider(
        this.fireballs,
        this.boss,
        this.hitMonster,
        null,
        this
      );
      this.physics.add.overlap(
        this.player,
        this.boss,
        this.playerHit,
        null,
        this
      );
    
      // Démarrer la musique du boss
      if (!this.bossMusic || !this.bossMusic.isPlaying) {
        this.bossMusic = this.sound.add('bossMusic', { loop: true });
        this.bossMusic.play();
      }
    
      this.time.addEvent({
        delay: 3000, 
        callback: this.bossAttack,
        callbackScope: this,
        loop: true,
      });
    }
    
    
    
  
    bossBehavior(boss) {
      this.physics.moveToObject(boss, this.player, 100);
    }
  
    bossAttack() {
      if (this.boss && this.boss.active) {
        
        const startX = this.boss.x;
        const startY = this.boss.y;
  
        const playerX = this.player.x;
        const playerY = this.player.y;
  
        const midX = (startX + playerX) / 2;
        const midY = Math.min(startY, playerY) - 200; 
  
        const jumpPath = new Phaser.Curves.QuadraticBezier(
          new Phaser.Math.Vector2(startX, startY),
          new Phaser.Math.Vector2(midX, midY),
          new Phaser.Math.Vector2(playerX, playerY)
        );
  
        this.boss.body.setVelocity(0);
        this.boss.body.enable = false;
  
        this.boss.anims.play('boss-jump', true);
        
        this.boss.pathFollower = { t: 0, vec: new Phaser.Math.Vector2() };
  
        const boss = this.boss;
        const player = this.player;
        const pathFollower = this.boss.pathFollower;

        this.sound.play('soundjump');
  
        this.tweens.add({
          targets: pathFollower,
          t: 1,
          duration: 800, 
          onUpdate: function () {
            jumpPath.getPoint(pathFollower.t, pathFollower.vec);
            boss.setPosition(pathFollower.vec.x, pathFollower.vec.y);
          },
          onComplete: function () {
            if (boss && boss.active) {
              boss.body.enable = true;
        
              const distance = Phaser.Math.Distance.Between(
                boss.x,
                boss.y,
                player.x,
                player.y
              );
              if (distance < 50) {
                this.playerHit(player, boss);
              }
        
              boss.anims.play('boss-walk', true);
        
              this.physics.moveToObject(boss, player, 100);
            }
          },
          callbackScope: this, 
        });
      }
    }
  
    getRandomFrame() {
      const excludedFrames = [7, 14, 15, 22, 23, 27, 28, 29, 30, 31, 55];
      const maxMonsterFrame = 70;
      let frame;
      do {
        frame = Phaser.Math.Between(0, maxMonsterFrame);
      } while (excludedFrames.includes(frame));
      return frame;
    }
  
    setWorldBounds() {
      const worldWidth = window.innerWidth;
      const worldHeight = window.innerHeight;
      this.physics.world.setBounds(0, 0, worldWidth, worldHeight);
    }
  
    resizeGame() {
      const width = window.innerWidth;
      const height = window.innerHeight;
  
      if (this.background) {
        if (this.scale && this.scale.resize) {
          this.scale.resize(width, height);
        } else if (this.sys.game && this.sys.game.renderer) {
          this.sys.game.renderer.resize(width, height);
          this.cameras.resize(width, height);
        } else {
          console.warn(
            "Impossible de redimensionner le jeu : le Scale Manager ou le renderer n'est pas disponible."
          );
        }
        this.background.setDisplaySize(width, height);
        this.setWorldBounds();
      }
    }
  }
  window.GameScene = GameScene;