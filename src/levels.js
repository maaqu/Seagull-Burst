(function() {
  "use strict";

  function setupPlayer(startX, startY) {
    var player = Crafty.e("Player").at(startX, startY);
    Crafty.e("Camera").cameraFocus(player);
    return player;
  }

  function testlevel() {
    var level = Crafty.e("Level")
      .bounds(700, 1000);

    // Ground
    level.addEntity(Crafty.e("Ground")
                    .attr({ x: 0, y: 500, h: 100, w: 1600}));
    // Hill
    level.addEntity(Crafty.e("Obstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 300, y: 450, h: 50, w: 50}));
    level.addEntity(setupPlayer(5, 500));

    var spawner = Crafty.e("Spawner").attr({x: 1000, y: 400}).setTime(10000)
      .bind("Spawn", function(attr) {
        console.log("spawning pigeon");
        level.addEntity(Crafty.e("Pigeon")
                        .at(attr.x, attr.y)
                        .color("black"));
    });
    
    level.addEntity(spawner);
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
