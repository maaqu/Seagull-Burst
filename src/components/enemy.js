(function() {
  "use strict";

  // Generic enemy
  Crafty.c('Enemy', {
    init: function() {
      this.requires('Actor')
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
      this.requires('Enemy, Delay, SpriteAnimation, spr_pigeon')
      .animate('PigeonMovingLeft', 0, 2, 3);

      this.attr({
        w: 88,
        h: 44
      });

      this.animate('PigeonMovingLeft', 4, -1);
      this.shitting();
    },
    shitting: function() {
      this.delay(function() {
        Crafty.e("Shit").attr({x: (this.x+this.w), y: (this.y+this.h)});
        this.shitting();
      }, Crafty.math.randomInt(100, 2000));
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
