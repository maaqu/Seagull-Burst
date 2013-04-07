(function() {
  "use strict";

  // Generic powerup
  Crafty.c('Powerup', {
    init: function() {
      this.requires("2D, Canvas, Actor, Collision")
      .attr({w: 40, h: 40, origY: 0, deltaY: 0, delta: 1})
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
  
  Crafty.c('Berry', {
	init: function() {
	  this.requires("Powerup, spr_berry")
	}
  });
  
  Crafty.c('Strawberry', {
	init: function() {
	  this.requires("Powerup, spr_strawberry")
	}
  });
  
  Crafty.c('Flour', {
	init: function() {
	  this.requires("Powerup, spr_flour")
	}
  });
  
  Crafty.c('Butter', {
	init: function() {
	  this.requires("Powerup, spr_butter")
	}
  });
  
  Crafty.c('Apple', {
	init: function() {
	  this.requires("Powerup, spr_apple")
	}
  });
  
}());
