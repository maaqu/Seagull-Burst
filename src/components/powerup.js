(function() {
  "use strict";

  // Generic powerup
  Crafty.c('Powerup', {
    init: function() {
      this.requires("2D, Canvas, Color, Actor, Collision")
      .attr({w: 40, h: 40, origY: 0, deltaY: 0, delta: 1})
      .color("rgb(100, 100, 100)")
      .bind("EnterFrame", function() {
	  if (this.deltaY > 39 && this.delta == 1)
		this.delta = -1;
	  else if (this.deltaY <= 1 && this.delta == -1)
		this.delta = 1;
	  this.deltaY += this.delta;
	  this.y = this.origY + this.deltaY;
	})
     .bind("Picked", function() {
          this.destroy();
     });  
    }
  });
}());
