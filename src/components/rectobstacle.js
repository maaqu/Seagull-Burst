(function() {
  "use strict";

  // Rectangular polygonally collidable obstacle
  Crafty.c('RectObstacle', {
    init: function() {
      this.requires('Obstacle, Collision, Polygon');
    },
    rectobstacle : function() {
      this.collision(new Crafty.polygon([0, 0], [this._w, 0],
                                        [this._w, this._h], [0, this._h]));
      return this;
    }
  });
}());
