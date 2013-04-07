(function() {
  "use strict";

  var FULL_HP = 8;

  Crafty.c('Player', {
    init: function() {
      this.requires('Actor, Collision, Delay, Gravity, LevelBounded, SpriteAnimation, Twoway, spr_player')
        .twoway(4.0, 4.0)
        .attr({_powerups: 0, _health: FULL_HP, _baking: false})
        .gravity('Obstacle')
        .gravityConst(0.1)
        .onHit("Shit", function() {
          this.trigger("LoseHealth", 1);
        })
        .onHit("Leg", function() {
          this.trigger("LoseHealth", 7);
        })
        .onHit("Powerup", function(powerups) {
          this._powerups += 1;
          var powerup = powerups[0].obj;
          powerup.trigger("Picked");
        })
        .animate('PlayerRollingRight', 0, 0, 7)
        .animate('PlayerRollingLeft', 0, 9, 7)
        .animate('PlayerWalkingRight', 0, 18, 1)
        .animate('PlayerWalkingLeft', 0, 19, 1);
        
      this.bind("Moved", function(old) {
        var hits = this.hit("Obstacle");

        this._baking = false;

        if(hits) {
          // Encountered a solid obstacle?
          // If we're being carried, transition on top of it
          if(this.carried)
            this.carriedOverObstacle(hits);
          // Undo movement
          else {
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
      this._health -= amount;

      this._refreshAnimation();

      if (this._health <= 0) {
        console.log("Died.");
        this.deathAnimation();
        this.trigger("Death");
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

    ants: function() {
      // Spend HP
      this.trigger("LoseHealth", 1);
      this.carried = true;
      this.delay(function() {
        this.carried = false;
        console.log("Carry-walk over");
      }, 5000);

      // TODO: Change sprite to ant-carried


      // TODO: Change collision box to flat
    },

    baking: function() {
      if (this._health < FULL_HP && this._powerups >= 2 && !this._baking) {
        console.log("BAKING");
        this._baking = true;
        this.delay(function() {
          if (this._baking) {
            console.log("Baking over");
            this._powerups -= 2;
            this.trigger("GainHealth");
            this._baking = false;
          }
        }, 2000);
      }
    }
  });
}());
