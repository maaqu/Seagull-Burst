(function() {
  "use strict";

  // Generic powerup
  Crafty.c('Enemy', {
    init: function() {
      this.requires('Actor, Color')
      .bind("EnterFrame",function(){
        this.x -= 1;
        if(this.x > Crafty.viewport.width + this.w ||
          this.x < -this.w ||
          this.y < -this.h ||
          this.y > Crafty.viewport.height +this.h){
            this.destroy();
          }
      })
      this.attr({
        w: 30,
        h: 30
      })
    }
  });
}());
