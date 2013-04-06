(function() {
  "use strict";

  Crafty.c('Player', {
    init: function() {
      this.requires('Actor, Twoway, Gravity, Collision, SpriteAnimation, spr_player, LevelBounded')

        .twoway(4.0, 4.0)
        .gravity('Obstacle')
        .gravityConst(0.1)
        .onHit("Solid", function(hitdata) {
          this.hitSolid(hitdata);
        })
        .onHit("Shit", function() {
	  this.trigger("LoseHealth", 1);
        })
        .animate('PlayerMovingRight', 0, 0, 7)
        .animate('PlayerMovingLeft', 0, 9, 7);
        
      this.health = 8;
      this.bind("Moved", function(old) {
        if (this.hit("Obstacle")) {
          this.x = old.x;
          this.y = old.y;
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
      console.log("Lost Health, Current amount: " + this.health);
      this.health -= amount;
      this.animate('PlayerMovingRight', 0, 8-this.health, 7)
      this.animate('PlayerMovingLeft', 0, 17-this.health, 7);
      
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

    hitSolid: function(hitdata) {
      // Encountered a solid obstacle?
      // If we're being carried, transition on top of it
      if(this.carried)
        this.carriedOverObstacle(hitdata);
      else
        this.stopMovement();
    },

    stopMovement: function() {
      this._speed = 0;
      if (this._movement) {
        this.x -= this._movement.x;
        this.y -= this._movement.y;
      }
    },

    carriedOverObstacle: function() {
      // TODO
    },

    ants: function() {
      // Spend HP
      this.trigger("LoseHealth", 1);
      this.carried = true;

      // TODO: Change sprite to ant-carried

      
      // TODO: Change collision box to flat
    }
  });
}());
