(function() {
  "use strict";

  function testlevel() {
    // Ground
    Crafty.e("Obstacle")
      .attr({
        x: 0,
        y: 500,
        h: 100,
        w: 800});
    Crafty.e("Player").at(5, 500);
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
