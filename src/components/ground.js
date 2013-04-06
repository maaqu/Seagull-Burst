(function() {
  "use strict";

  Crafty.c('Ground', {
    init: function() {
      this.requires('Obstacle, Image');
      this.image("assets/ground-texture.jpg", "repeat");
    }
  });
}());
