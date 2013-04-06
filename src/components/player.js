(function() {
  "use strict";

  Crafty.c('Player', {
    init: function() {
      this.requires('Actor, Twoway, Color, Gravity, Collision, LevelBounded')
        .twoway(4.0, 2.0)
        .color('rgb(184, 143, 143)')
        .gravity('Obstacle')
        .gravityConst(0.1)
	.onHit("Solid", function() {
          this.stopMovement();
        });
        .onHit("Shit", function() {
	this.trigger("LoseHealth", 1);
	
        });
      this.health = 8;
      this.bind("Moved", function(old) {
        if (this.hit("Obstacle")) {
          this.x = old.x;
          this.y = old.y;
        }
      });
      this.attr({
        w: 30,
        h: 30
      });
      
      this.bind("EnterFrame", this._playerFrame);

      this.bind("LoseHealth", this._loseHealth);
    },

    _loseHealth: function(amount) {
      this.health -= amount;
      if (this.health <= 0) {
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
    }
  });
}());
