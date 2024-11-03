class SecondLevelScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SecondLevelScene' });
  }

  preload() {
    this.roomsData = {
     'room0000': {
    imageKey: 'room0000',
    doors: [
      {
        direction: 'top',
        x: window.innerWidth / 2,
        y: 50,
        width: 150,
        height: 50,
        targetRooms: ['room0004', 'room0006', 'room0008', 'room0009', 'room0010', 'room0012', 'room0015'],
      },
      {
        direction: 'bottom',
        x: window.innerWidth / 2,
        y: window.innerHeight - 50,
        width: 150,
        height: 50,
        targetRooms: ['room0003', 'room0006', 'room0007', 'room0008', 'room0009', 'room0011', 'room0013'],
      },
      {
        direction: 'right',
        x: window.innerWidth - 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0002', 'room0005', 'room0007', 'room0008', 'room0010', 'room0013', 'room0015'],
      },
      {
        direction: 'left',
        x: 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0001', 'room0005', 'room0007', 'room0009', 'room0011', 'room0012', 'room0015'],
      },
    ],
  },
  'room0001': {
    imageKey: 'room0001',
    doors: [
      {
        direction: 'right',
        x: window.innerWidth - 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0000', 'room0002', 'room0005', 'room0007', 'room0008', 'room0010', 'room0013', 'room0015'],
      },
    ],
  },
  'room0002': {
    imageKey: 'room0002',
    doors: [
      {
        direction: 'left',
        x: 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0000', 'room0001', 'room0005', 'room0007', 'room0009', 'room0011', 'room0012', 'room0015'],
      },
    ],
  },
  'room0003': {
    imageKey: 'room0003',
    doors: [
      {
        direction: 'top',
        x: window.innerWidth / 2,
        y: 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0004', 'room0006', 'room0008', 'room0009', 'room0010', 'room0012', 'room0015'],
      },
    ],
  },
  'room0004': {
    imageKey: 'room0004',
    doors: [
      {
        direction: 'bottom',
        x: window.innerWidth / 2,
        y: window.innerHeight - 50,
        width: 150,
        height: 50,
        targetRooms: ['room0003', 'room0006', 'room0007', 'room0008', 'room0009', 'room0011', 'room0013'],
      },
    ],
  },
  'room0005': {
    imageKey: 'room0005',
    doors: [
      {
        direction: 'right',
        x: window.innerWidth - 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0000', 'room0002', 'room0007', 'room0008', 'room0010', 'room0013', 'room0015'],
      },
      {
        direction: 'left',
        x: 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0000', 'room0001', 'room0007', 'room0009', 'room0011', 'room0012', 'room0015'],
      },
    ],
  },
  'room0006': {
    imageKey: 'room0006',
    doors: [
      {
        direction: 'top',
        x: window.innerWidth / 2,
        y: 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0004', 'room0008', 'room0009', 'room0010', 'room0012', 'room0015'],
      },
      {
        direction: 'bottom',
        x: window.innerWidth / 2,
        y: window.innerHeight - 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0003', 'room0007', 'room0008', 'room0009', 'room0011', 'room0013'],
      },
    ],
  },
  'room0007': {
    imageKey: 'room0007',
    doors: [
      {
        direction: 'top',
        x: window.innerWidth / 2,
        y: 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0004', 'room0006', 'room0008', 'room0009', 'room0010', 'room0012', 'room0015'],
      },
      {
        direction: 'left',
        x: 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0000', 'room0001', 'room0005', 'room0009', 'room0011', 'room0012', 'room0015'],
      },
      {
        direction: 'right',
        x: window.innerWidth - 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0000', 'room0002', 'room0005', 'room0008', 'room0010', 'room0013', 'room0015'],
      },
    ],
  },
  'room0008': {
    imageKey: 'room0008',
    doors: [
      {
        direction: 'top',
        x: window.innerWidth / 2,
        y: 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0004', 'room0006', 'room0009', 'room0010', 'room0012', 'room0015'],
      },
      {
        direction: 'bottom',
        x: window.innerWidth / 2,
        y: window.innerHeight - 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0003', 'room0006', 'room0007', 'room0009', 'room0011', 'room0013'],
      },
      {
        direction: 'left',
        x: 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0000', 'room0001', 'room0005', 'room0007', 'room0009', 'room0011', 'room0012', 'room0015'],
      },
    ],
  },
  'room0009': {
    imageKey: 'room0009',
    doors: [
      {
        direction: 'top',
        x: window.innerWidth / 2,
        y: 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0004', 'room0006', 'room0008', 'room0010', 'room0012', 'room0015'],
      },
      {
        direction: 'bottom',
        x: window.innerWidth / 2,
        y: window.innerHeight - 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0003', 'room0006', 'room0007', 'room0008', 'room0011', 'room0013'],
      },
    ],
  },
  'room0010': {
    imageKey: 'room0010',
    doors: [
      {
        direction: 'left',
        x: 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0000', 'room0001', 'room0005', 'room0007', 'room0009', 'room0011', 'room0012', 'room0015'],
      },
      {
        direction: 'bottom',
        x: window.innerWidth / 2,
        y: window.innerHeight - 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0003', 'room0006', 'room0007', 'room0008', 'room0009', 'room0011', 'room0013'],
      },
    ],
  },
  'room0011': {
    imageKey: 'room0011',
    doors: [
      {
        direction: 'top',
        x: window.innerWidth / 2,
        y: 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0004', 'room0006', 'room0008', 'room0009', 'room0010', 'room0012', 'room0015'],
      },
      {
        direction: 'right',
        x: window.innerWidth - 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0002', 'room0005', 'room0007', 'room0008', 'room0010', 'room0013', 'room0015'],
      },
    ],
  },
  'room0012': {
    imageKey: 'room0012',
    doors: [
      {
        direction: 'right',
        x: window.innerWidth - 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0000', 'room0002', 'room0005', 'room0007', 'room0008', 'room0010', 'room0013', 'room0015'],
      },
      {
        direction: 'bottom',
        x: window.innerWidth / 2,
        y: window.innerHeight - 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0003', 'room0006', 'room0007', 'room0008', 'room0009', 'room0011', 'room0013'],
      },
    ],
  },
  'room0013': {
    imageKey: 'room0013',
    doors: [
      {
        direction: 'top',
        x: window.innerWidth / 2,
        y: 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0004', 'room0006', 'room0008', 'room0009', 'room0010', 'room0012', 'room0015'],
      },
      {
        direction: 'left',
        x: 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0000', 'room0001', 'room0005', 'room0007', 'room0009', 'room0011', 'room0012', 'room0015'],
      },
    ],
  },
  'room0015': {
    imageKey: 'room0015',
    doors: [
      {
        direction: 'bottom',
        x: window.innerWidth / 2,
        y: window.innerHeight - 50,
        width: 150,
        height: 50,
        targetRooms: ['room0000', 'room0003', 'room0006', 'room0007', 'room0008', 'room0009', 'room0011', 'room0013'],
      },
      {
        direction: 'right',
        x: window.innerWidth - 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0000', 'room0002', 'room0005', 'room0007', 'room0008', 'room0010', 'room0013'],
      },
      {
        direction: 'left',
        x: 50,
        y: window.innerHeight / 2,
        width: 100,
        height: 200,
        targetRooms: ['room0000', 'room0001', 'room0005', 'room0007', 'room0009', 'room0011', 'room0012'],
      },
    ],
  },
};

    for (let roomKey in this.roomsData) {
      this.load.image(this.roomsData[roomKey].imageKey, `./assets/room2/${this.roomsData[roomKey].imageKey}.png`);
    }

    this.load.spritesheet('character', './assets/character.png', {
      frameWidth: 16,
      frameHeight: 24.5,
    });
    this.load.spritesheet('bossWalk', './assets/boss/boss.png', {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.image('bossJump', './assets/boss/bossjump.png');
    

     this.createAnimations();
    
    
   

    this.load.image('fireball', './assets/projectile/Fireball1.png');
    this.load.spritesheet('monster', './assets/monster/mob.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.audio('impact', './assets/sounds/impact.1.ogg');
  }

  create() {
    const testSprite = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'priseBoss');
  testSprite.setScale(2);
  console.log('Test sprite boss ');


    this.playerLives = 3;
    this.maxPlayerLives = 3;
    this.isInvincible = false;
    this.normalSpeed = 160;
    this.invincibleSpeed = 220;
    this.doorsActive = false;
    this.canInteractWithDoor = true;
    this.monsters = [];
    this.visitedRooms = {};
    this.currentRoomKey = 'room0000'; 
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
;

    this.fireballs = this.physics.add.group({
      defaultKey: 'fireball',
      maxSize: 20,
    });

    const levelText = this.add.text(
      window.innerWidth / 2,
      window.innerHeight / 2,
      'Niveau 2',
      { fontSize: '48px', fill: '#ffffff' }
    ).setOrigin(0.5);

    this.time.delayedCall(4000, () => {
      levelText.destroy();

      this.createDoorZones();
    });

    this.keys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.Z,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.Q,
      right: Phaser.Input.Keyboard.KeyCodes.D,
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

      if (direction === 'left') {
        fireball.body.velocity.x = -300;
      } else if (direction === 'right') {
        fireball.body.velocity.x = 300;
      } else if (direction === 'up') {
        fireball.body.velocity.y = -300;
      } else if (direction === 'down') {
        fireball.body.velocity.y = 300;
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
  
        this.boss.anims.play('prise-idle', true);
        this.time.delayedCall(1000, () => {
          this.scene.start('VictoryScene');  
        });
      }
    }
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
    this.background.setTexture(this.roomsData[roomKey].imageKey);

    console.log(' la salle :', this.currentRoomKey);

    this.player.setPosition(window.innerWidth / 2, window.innerHeight / 2);

    this.playerLives = this.maxPlayerLives;
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

  spawnMonsters() {
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
      for (let i = 0; i < 5; i++) {
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
        monster.hp = 1;

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
  
    this.time.addEvent({
      delay: 3000, 
      callback: this.bossAttack,
      callbackScope: this,
      loop: true,
    });
  }
  
  

accelerateBoss() {
  if (this.boss && this.boss.active) {
      this.physics.moveToObject(this.boss, this.player, 150 + (20 * (20 - this.boss.hp)));  
  }
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

window.SecondLevelScene = SecondLevelScene;