(function() {
  "use strict";
  var Game = {
    // Initialize and start our game
    start: function() {
      // Start crafty and set a background color so that we can see it's working
      Crafty.init(800, 600);
      Crafty.background('#BFF9FF');
      Crafty.e('Player').at(50, 500);
      Crafty.e('Block').at(50, 550);

      loadLevel("test");
    }
  }

  window.Game = Game;
}());
