(function() {
  "use strict";

  var FULL_HP = 8;
  var INVULNERABLE = 1000;

  Crafty.c('Player', {
    init: function() {
      this.requires('Actor, Delay, Gravity, LevelBounded, SpriteAnimation, Twoway, spr_player, Collision')
        .twoway(4.0, 4.0)
        .attr({_powerups: 0, _points: 0, _health: FULL_HP, _baking: false, _canTakeDamage: true})
        .pieShape()
        .gravity('Obstacle')
        .gravityConst(0.1)
        .onHit("Shit", function() {
          this.trigger("LoseHealth", 1);
        })
        .onHit("Bird", function() {
          this.trigger("LoseHealth", 1);
        })
        .onHit("Leg", function() {
          this.trigger("LoseHealth", 7);
        })
        .onHit("Powerup", function(powerups) {
          this._powerups += 1;
          this._points += 500;
	  console.log(this._points);
          var powerup = powerups[0].obj;
          powerup.trigger("Picked");
        })
        .onHit("spr_cafe", function() {
          // Final points, lose number of frames
          this.trigger("Victory", this._points);
        })
        .animate('PlayerRollingRight', 0, 0, 7)
        .animate('PlayerRollingLeft', 0, 9, 7)
        .animate('PlayerWalkingRight', 0, 18, 1)
        .animate('PlayerWalkingLeft', 0, 19, 1);

      this.bind("Moved", function(old) {
        // Suppress spurious movement events
        if(old.x == this.x && old.y == this.y)
          return;

        console.log("Player moved: (" + old.x + "," + old.y + ") => (" + this._x + "," + this._y + ")");

        var hits = this.hit("Obstacle");

        if(this._baking) {
          console.log("Baking interrupted by movement");
          this._bakingOff();
        }

        if(hits) {
          // Encountered a solid obstacle?
          // If we're being carried, transition on top of it
          if(this.carried)
            this.carriedOverObstacle(hits);
          // Undo movement
          else {
            console.log("Undid movement");
            this.x = old.x;
            this.y = old.y;
          }
        }
      });

      this.bind("NewDirection", function(data) {
        if (data.x > 0) {
          if (this.carried)
            this.animate('PlayerWalkingRight', 6, -1);
          else
            this.animate('PlayerRollingRight', 4, -1);
        } else if (data.x < 0) {
          if (this.carried)
            this.animate('PlayerWalkingLeft', 6, -1);
          else
            this.animate('PlayerRollingLeft', 4, -1);
        } else {
          this.stop();
        }
      });

      this.bind("KeyDown", function() {
        if(this.isDown("Z")) {
          this.ants();
        }
        if(this.isDown("X")) {
          this.baking();
        }
      });
      this.attr({
        carried: false
      });

      this.attr({
        w: 66,
        h: 66
      });

      this.bind("EnterFrame", this._playerFrame);

      this.bind("LoseHealth", this._loseHealth);
      this.bind("GainHealth", this._gainHealth);
    },

    _loseHealth: function(amount) {
      if (!this._canTakeDamage) {
        return;
      }
      this._canTakeDamage = false;

      this._health -= amount;

      this._refreshAnimation();

      this._score -= 50;
      
      if (this._health <= 0) {
        console.log("Died.");
        this.deathAnimation();
        this.trigger("Death");
      } else {
        this.delay(function() {
          this._canTakeDamage = true;
        }, INVULNERABLE);
      }
    },
    _gainHealth: function() {
      this._health += 1;
      this._refreshAnimation();
    },

    _refreshAnimation: function() {
      // Switch to lower HP form
      this.animate('PlayerRollingRight', 0, 8 - this._health, 7);
      this.animate('PlayerRollingLeft', 0, 17 - this._health, 7);

      // TODO: Get current frame position, move to it's lower HP form
      this.animate('PlayerRollingRight', 0, 0);
      this.animate('PlayerRollingLeft', 0, 0);
    },

    deathAnimation: function() {
    // TODO: kuolema-animaatio
    },
    _playerFrame: function() {
      // On frame, check:

    },

    stopMovement: function() {
      this._speed = 0;
      if (this._movement) {
        this.x -= this._movement.x;
        this.y -= this._movement.y;
      }
    },

    carriedOverObstacle: function(entity) {
        var newY = entity[0].obj._y - this._h;

        console.log("Carry: " + this.y + " => " + newY);

        this.y = newY;

    },

    pieShape: function () {
      this.collision(new Crafty.polygon([0,18], [18,0], [47,0], [65,18], [65,47], [47, 65], [18,65], [0,47]));
      return this;
    },

    flatShape: function() {
      this.collision(new Crafty.polygon([0,44], [65,44], [65,65], [0,65]));
      return this;
    },

    ants: function() {
      // Spend HP
      if (this.carried) {
        return;
      }
      this.trigger("LoseHealth", 1);
      this.carried = true;

      this.flatShape();

      this.delay(function() {
        this.carried = false;
        console.log("Carry-walk over");
        this.animate('PlayerRollingRight', 0, 0);
        this.animate('PlayerRollingLeft', 0, 0);
        this.pieShape();

      }, 5000);

      // TODO: Change sprite to ant-carried
      this.animate('PlayerWalkingRight', 0, 0);
      this.animate('PlayerWalkingLeft', 0, 0);


      // TODO: Change collision box to flat
    },

    baking: function() {
      if (this._health < FULL_HP && this._powerups >= 2 && !this._baking) {
        this._baking = true;
        Crafty.trigger("Baking", {x: this.x, y: this.y});
        this.delay(function() {
          if (this._baking) {
            this._powerups -= 2;
            this.trigger("GainHealth");
            this._bakingOff();
          }
        }, 2000);
      }
    },

    _bakingOff: function() {
      Crafty.trigger("BakingOff");
      this._baking = false;
    }
  });

  Crafty.c("ApplePie", {
    init: function() {
      this.requires("Player, spr_player");
    }
  });

  Crafty.c("BerryPie", {
    init: function() {
      this.requires("Player, spr_playerBerry");
    }
  });
}());
