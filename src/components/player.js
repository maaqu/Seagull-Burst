(function() {
  "use strict";

  Crafty.c('Player', {
    init: function() {
      this.requires('Actor, Collision, Delay, Gravity, LevelBounded, SpriteAnimation, Twoway, spr_player')
        .twoway(4.0, 4.0)
        .gravity('Obstacle')
        .gravityConst(0.1)
        .onHit("Shit", function() {
          this.trigger("LoseHealth", 1);
        })
	.onHit("Powerup", function(powerups) {
	  powerups[0].obj.trigger("Picked");
	})
        .animate('PlayerMovingRight', 0, 0, 7)
        .animate('PlayerMovingLeft', 0, 9, 7);

      this.health = 8;
      this.bind("Moved", function(old) {
        var hits = this.hit("Obstacle");

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
          this.animate('PlayerMovingRight', 4, -1);
        } else if (data.x < 0) {
          this.animate('PlayerMovingLeft', 4, -1);
        } else {
          this.stop();
        }
      });

      this.bind("KeyDown", function() {
        if(this.isDown("Z")) {
          this.ants();
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
    },

    _loseHealth: function(amount) {
      this.health -= amount;

      // Switch to lower HP form
      this.animate('PlayerMovingRight', 0, 8 - this.health, 7);
      this.animate('PlayerMovingLeft', 0, 17 - this.health, 7);

      // TODO: Get current frame position, move to it's lower HP form
      this.animate('PlayerMovingRight', 0, 0);
      this.animate('PlayerMovingLeft', 0, 0);

      if (this.health <= 0) {
        console.log("Died.");
        this.deathAnimation();
        this.trigger("Death");
      }
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
    }
  });
}());
