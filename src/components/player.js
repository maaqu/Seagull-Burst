(function() {
  "use strict";

  Crafty.c('Player', {
    init: function() {
      this.requires('Actor, Twoway, Color, Gravity')
      .twoway(4.0, 2.0)
      .color('rgb(184, 143, 143)')
      .gravity('Obstacle')
      .gravityConst(0.1);

      this.attr({
          w: 30,
          h: 30
      })
    }
  });
}());
