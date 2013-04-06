(function() {
  "use strict";

  // Generic powerup
  Crafty.c('Enemy', {
    init: function() {
      this.requires('Actor, Color');
      this.attr({
        w: 30,
        h: 30
      })
    }
  });
}());
