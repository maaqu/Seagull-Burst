(function() {
  "use strict";

  // Generic obstacle
  // TODO: Collision, texture (sprite?)
  // TODO: This is necessarily rectangular, generalise then polygon and circlular obstacles


Crafty.c('Obstacle', {
    init: function() {
      this.requires('2D, Canvas, Color, Collision');
      
    }
  });
}());
