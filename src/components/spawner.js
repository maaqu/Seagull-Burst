(function() {
  "use strict";

  Crafty.c('Spawner', {
    init: function() {
      this.requires('2D, Delay');
      this.time = 1;
      this._spawner();
    },
    setTime: function(time) {
      this.time = time;
      return this;
    },
    _spawner: function() {
      this.delay(function() {
        var y = this.y - Crafty.math.randomInt(50, 450);
        this.trigger("Spawn", {x: this.x, y: y});
        this._spawner();
      }, this.time);
    }
  });
}());
