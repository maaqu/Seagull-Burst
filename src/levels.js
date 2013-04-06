(function() {
  "use strict";

  function setupPlayer(startX, startY) {
    var player = Crafty.e("Player").at(startX, startY);
    Crafty.e("Camera").camera(player);
  }

  function testlevel() {
    // Ground
    Crafty.e("Obstacle, Color")
      .color("rgb(0, 200, 0)")
      .attr({
        x: 0,
        y: 500,
        h: 100,
        w: 1600});

    setupPlayer(5, 500);

    Crafty.e("Enemy").at(300, 300).color("rgb(0,0,0)");
    var gull = Crafty.e("Enemy, Delay").at(300, 300).color("rgb(0,0,0)");
  };

  // Levels list
  var levels = {
    "test": testlevel
  };


  // Exports
  window.loadLevel = function(name) {
    // TODO: Clear old level data?

    // TODO: General setup?

    // Load the given level
    levels[name]();
  };

  window.Levels = {
    "test": testlevel
  };
}());
