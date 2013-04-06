(function() {
  "use strict";

  Crafty.c('Spawner', {
    init: function() {
      this.requires('Delay');
      this.time = 1;
      this._spawner();
    },
    setTime: function(time) {
      this.time = time;
      return this;
    },
    _spawner: function() {
      this.delay(function() {
        this.trigger("Spawn", {x: this.x, y: this.y});
        this._spawner();
      }, this.time);
    }
  });
}());
