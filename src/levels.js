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

    // Powerups
    level.addEntity(Crafty.e("Berry").attr({x: 100, origY: 300}));
    level.addEntity(Crafty.e("Strawberry").attr({x: 200, origY: 300}));
    level.addEntity(Crafty.e("Flour").attr({x: 300, origY: 300}));
    level.addEntity(Crafty.e("Butter").attr({x: 400, origY: 300}));
    level.addEntity(Crafty.e("Apple").attr({x: 500, origY: 300}));

    // Hills
    level.addEntity(Crafty.e("Obstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 300, y: 450, h: 50, w: 50}));
    level.addEntity(Crafty.e("Obstacle, Color")
                    .color("rgb(0, 200, 50)")
                    .attr({ x: 600, y: 350, h: 150, w: 50}));

    // Player
    level.addEntity(setupPlayer(5, 500));

    // Birds
    var spawner = Crafty.e("Spawner").attr({x: 1000, y: 400}).setTime(10000)
      .bind("Spawn", function(attr) {
        level.addEntity(Crafty.e("Pigeon").at(attr.x, attr.y));
    });

    var montySpawner = Crafty.e("Spawner").attr({x: 1000, y: 0}).setTime(40000)
      .bind("Spawn", function(attr) {
        console.log("spawning MONTY");

    
    Crafty.e("Foot").attr({h: 500, x: attr.x, origY: -200, deltaY: 100});
    Crafty.e("Foot").attr({h: 500, x: attr.x+300, origY: -200, deltaY: 0, delta: -1});
    Crafty.e("Monty").attr({x: attr.x});

    });

    level.addEntity(spawner);
  };

  function tutorialLevel() {
    var level = Crafty.e("Level")
      .bounds(700, 5000);
  
    // Ground
    level.addEntity(Crafty.e("Ground")
                    .attr({ x: 0, y: 500, h: 100, w: 3800}));

    level.addEntity(Crafty.e("Ground")
                    .attr({ x: 4000, y: 500, h: 100, w: 1000}));
    
    // Powerups
    level.addEntity(Crafty.e("Apple").attr({x: 700, origY: 415}));
    level.addEntity(Crafty.e("Flour").attr({x: 1450, origY: 300}));
    level.addEntity(Crafty.e("Butter").attr({x: 1655, origY: 345}));
    
    // Hills
    level.addEntity(Crafty.e("Obstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 300, y: 450, h: 50, w: 50}));

    level.addEntity(Crafty.e("Obstacle, Color")
                    .color("rgb(0, 200, 50)")
                    .attr({ x: 800, y: 350, h: 150, w: 50}));
  
    level.addEntity(Crafty.e("Obstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 980, y: 450, h: 50, w: 50}));
  
    level.addEntity(Crafty.e("Obstacle, Color")
                .color("rgb(0, 200, 0)")
                .attr({ x: 1100, y: 380, h: 20, w: 200}));
    
    level.addEntity(Crafty.e("Obstacle, Color")
            .color("rgb(0, 200, 0)")
            .attr({ x: 1400, y: 380, h: 20, w: 100}));

    level.addEntity(Crafty.e("Obstacle, Color")
            .color("rgb(0, 200, 0)")
            .attr({ x: 1600, y: 320, h: 180, w: 50}));
    
    level.addEntity(Crafty.e("Obstacle, Color")
            .color("rgb(0, 200, 0)")
            .attr({ x: 1650, y: 420, h: 80, w: 50}));
    
    // Player
    level.addEntity(setupPlayer(5, 500));
  
    // Birds
    var spawner = Crafty.e("Spawner").attr({x: 1000, y: 400}).setTime(10000)
      .bind("Spawn", function(attr) {
        level.addEntity(Crafty.e("Pigeon").at(attr.x, attr.y));
    });
  
    level.addEntity(spawner);
  };
  
  // Levels list
  var levels = {
    "test": testlevel,
    "tutorial": tutorialLevel,
  };


  // Exports
  window.loadLevel = function(name) {
    // TODO: Clear old level data?

    // TODO: General setup?

    // Load the given level
    levels[name]();
  };

  window.Levels = {
    "test": testlevel,
    "tutorial": tutorialLevel,
  };
}());
