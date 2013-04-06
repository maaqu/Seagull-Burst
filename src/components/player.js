(function() {
  "use strict";

  Crafty.c('Player', {
    init: function() {
      this.requires('Actor, Twoway, Gravity, Collision, SpriteAnimation, spr_player, LevelBounded')

        .twoway(4.0, 4.0)
        .gravity('Obstacle')
        .gravityConst(0.1)
        .onHit("Solid", function() {
          this.stopMovement();
        })
        .onHit("Shit", function() {
	this.trigger("LoseHealth", 1);
	
        });
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

      this.attr({
        w: 66,
        h: 66
      });

      this.bind("EnterFrame", this._playerFrame);

      this.bind("LoseHealth", this._loseHealth);
    },

    _loseHealth: function(amount) {
      this.health -= amount
      console.log("Lost Health, Current amount: " + this.health);
      if (this.health <= 0) {
<<<<<<< HEAD
	console.log("Died.");
	this.deathAnimation();
	this.trigger("Death");
=======
        this.deathAnimation();
        this.trigger("Death");
>>>>>>> 792092b567b84acf455cdfb59c7a47f51119e8c8
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
    }
  });
}());
