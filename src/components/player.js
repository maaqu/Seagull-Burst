(function() {
  "use strict";

  Crafty.c('Player', {
    init: function() {
      this.requires('Actor, Twoway, Color, Gravity, Collision')
        .twoway(4.0, 2.0)
        .color('rgb(184, 143, 143)')
        .gravity('Obstacle')
        .gravityConst(0.1)
	.onHit("Solid", function() {
          this.stopMovement();
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

      // That we stay in level bounds
      this._enforceLevelBounds();
    },

    _enforceLevelBounds: function() {
      // If we've exited the level along either of the axes, reset our
      // position to the nearest bound.
      var level = Crafty("Level");

      var oldX = this.x;
      var oldY = this.y;

      var exceededX = false;
      var exceededY = false;

      if(oldX < 0) {
        this.x = 0;
        exceededX = true;
      }
      else if(oldX + this.w > level.width) {
        this.x = level.width - this.w;
        exceededX = true;
      }

      if(oldY < 0) {
        this.y = 0;
        exceededY = true;
      }
      else if(oldY + this.h > level.height) {
        this.y = level.height - this.h;
        exceededy = true;
        
        this.stopFalling(); // Also interrupt Gravity fall
      }

      // If the player tried to exceed the level bounds, broadcast an event
      // about it.
      this.trigger("PlayerOutOfBounds", {
        x: oldX, y: oldY,
        exceededX: exceededX, exceededY: exceededY});
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
