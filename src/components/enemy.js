(function() {
  "use strict";

  // Generic enemy
  Crafty.c('Enemy', {
    init: function() {
      this.requires('Actor, Color')
      .bind("EnterFrame",function(){
        this.x -= 1;
        if(this.x < -this.w) {
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
