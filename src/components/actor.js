(function() {
  "use strict";

  Crafty.c('Actor', {
    init: function() {
      this.requires('2D, Canvas');
    },
    at: function(x, y) {
      this.attr({ x: x, y: y });
      return this;
    }
  });
}());
