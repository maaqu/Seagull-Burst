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

      if(this.x < 0)
        this.x = 0;
      else if(this.x + this.w > level.width)
        this.x = level.width - this.w;

      if(this.y < 0)
        this.y = 0;
      else if(this.y + this.h > level.height) {
        this.y = level.height - this.h;
        this.stopFalling(); // Also interrupt Gravity fall
      }
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
