(function() {
  "use strict";

  // 
  Crafty.c('LevelBounded', {
    init: function() {
      this.requires('Actor');
      this.bind("EnterFrame", this._enforceLevelBounds);
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
        exceededY = true;
      
        if(this["stopFalling"])
          this.stopFalling(); // Also interrupt Gravity fall
      }

      // If the player tried to exceed the level bounds, broadcast an event
      // about it.
      this.trigger("WentOutOfBounds", {
        x: oldX, y: oldY,
        exceededX: exceededX, exceededY: exceededY
      });
    }
  });
}());
