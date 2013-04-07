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

  Crafty.c('Leg', {
    init: function() {
      this.requires('2D, Canvas, Enemy, Delay, Collision')
        .attr({w: 200, h: 400, origY: 0, deltaY: 0, delta: 1})
        .bind("EnterFrame", function() {
          if (this.deltaY > 170 && this.delta == 1){
            this.delta = -1;
            console.log("top");
          } else if (this.deltaY <= 1 && this.delta == -1) {
            this.delta = 1;
          }
          this.deltaY += this.delta;
          this.y = this.origY + this.deltaY;
        });
    }
  });

  Crafty.c("Foot", {
    init: function() {
      this.requires("Leg, spr_monty");
    }
  });

  Crafty.c("Monty", {
    init: function() {
      this.requires("Enemy, spr_pilvi")
    }
  });

  Crafty.c('Pigeon', {
    init: function() {
      this.requires('Enemy, Bird, Delay, SpriteAnimation, spr_pigeon')
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

  Crafty.c('Gull', {
    init: function() {
      this.requires('Enemy, Bird, Delay, SpriteAnimation, spr_seagull')
        .animate('SeagullMovingLeft', 0, 0, 3);

      this.attr({
        w: 88,
        h: 44
      });

      this.animate('SeagullMovingLeft', 4, -1);
    }
  });

  Crafty.c('Shit', {
    init: function() {
      this.requires('Actor, Color, Collision')
        .attr({w: 3, h: 10})
        .color("white")
        .onHit("Player", this.splats)
        .onHit("Obstacle", this.splats)
        .bind("EnterFrame", function() {
          this.y += 10;
        });
    },
    splats: function() {
      this.destroy();
    }
  });
}());
