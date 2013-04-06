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
      })
    },
stopMovement: function() {
this._speed = 0;
if (this._movement) {
this.x -= this._movement.x;
this.y -= this._movement.y;
}
},
stopFalling: function(e) { }


  });
}());
