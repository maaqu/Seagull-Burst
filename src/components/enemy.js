(function() {
  "use strict";

  // Generic enemy
  Crafty.c('Enemy', {
    init: function() {
      this.requires('Actor, Color')
      .attr({ w: 30, h: 30 })
      .bind("EnterFrame", function() {
        this.x -= 1;
        if(this.x < -this.w) {
          this.destroy();
        }
      });
    }
  });

  Crafty.c('Pigeon', {
    init: function() {
      this.requires('Enemy, Delay');
      this.shitting();
    },
    shitting: function() {
      this.delay(function() {
        Crafty.e("Shit").attr({x: (this.x+this.w), y: (this.y+this.h)});
        this.shitting();
      }, 2000);
    }
  });

  Crafty.c('Shit', {
    init: function() {
      this.requires('Actor, Color, Collision').
        attr({w: 3, h: 10}).
        color("white").
        onHit("Actor", this.splats).
        onHit("Obstacle", this.splats).
        bind("EnterFrame", function() {
        this.y += 10;
      });
    },
    splats: function() {
      this.destroy();
    }
  });
}());
