(function() {
  "use strict";

  function setupPlayer(type, startX, startY) {
    var player = Crafty.e(type).at(startX, startY);
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
    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 300, y: 450, h: 50, w: 50}));
    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 50)")
                    .attr({ x: 600, y: 350, h: 150, w: 50}));

    // Player
    level.addEntity(setupPlayer("ApplePie", 5, 500));

    // Birds
    var spawner = Crafty.e("Spawner").attr({x: 1000, y: 400}).setTime(10000)
      .bind("Spawn", function(attr) {
        level.addEntity(Crafty.e("Pigeon").at(attr.x, attr.y));
    });
    level.addEntity(spawner);

    var montySpawner = Crafty.e("Spawner").attr({x: 1000, y: 0}).setTime(40000)
      .bind("Spawn", function(attr) {
        level.addEntity(Crafty.e("Foot").attr({h: 500, x: attr.x, origY: -200, deltaY: 100}));
        level.addEntity(Crafty.e("Foot").attr({h: 500, x: attr.x+300, origY: -200, deltaY: 0, delta: -1}));
        level.addEntity(Crafty.e("Monty").attr({x: attr.x}));
    });
    level.addEntity(montySpawner);
  };

  function tutorialLevel() {
    var level = Crafty.e("Level")
      .bounds(700, 4850);

//    Crafty.e('2D, Canvas, Image').image("assets/tausta1.jpg", "repeat")
//      .attr({x:0, y:0, w: 2597});
//    this.image("assets/tausta1.jpg", "repeat");
    Crafty.background('url(assets/tausta1_2.jpg) repeat');

    // Ground
    level.addEntity(Crafty.e("Ground")
                    .attr({ x: 0, y: 500, h: 100, w: 1700}));
    level.addEntity(Crafty.e("Ground")
                    .attr({ x: 2400, y: 500, h: 100, w: 250}));
    level.addEntity(Crafty.e("Ground")
                    .attr({ x: 4500, y: 500, h: 100, w: 350}));

    // Powerups
    level.addEntity(Crafty.e("Apple").attr({x: 170, origY: 400}));
    level.addEntity(Crafty.e("Apple").attr({x: 700, origY: 230}));
    level.addEntity(Crafty.e("Flour").attr({x: 1450, origY: 300}));
    level.addEntity(Crafty.e("Butter").attr({x: 1655, origY: 345}));
    level.addEntity(Crafty.e("Apple").attr({x: 1850, origY: 250}));

    function mkHill(x, y, h, w) {
      level.addEntity(Crafty.e("RectObstacle, Image")
                      .image("assets/hills-texture.jpg", "repeat")
                      .attr({ x: x, y: y, h: h, w: w })
                      .rectobstacle());
    }

    // Hills
    mkHill(300, 450, 50, 50);
    mkHill(800, 350, 150, 50);
    mkHill(980, 450, 50, 50);
    mkHill(1100, 380, 20, 200);
    mkHill(1400, 380, 20, 100);
    mkHill(1600, 320, 180, 50);
    mkHill(1650, 420, 80, 50);
    mkHill(1800, 330, 80, 100);
    mkHill(2000, 270, 230, 50);
    mkHill(2800, 420, 100, 50);
    mkHill(3100, 340, 100, 50);
    mkHill(3600, 500, 100, 50);
    mkHill(3900, 150, 500, 50);

    level.addEntity(Crafty.e("2D, Canvas, spr_cafe")
                    .attr({ x: 4752, y: 212}));

    // Player
    level.addEntity(setupPlayer("ApplePie", 5, 500));

    // Birds
    var spawner = Crafty.e("Spawner").attr({x: 1000, y: 400}).setTime(10000)
      .bind("Spawn", function(attr) {
        level.addEntity(Crafty.e("Pigeon").at(attr.x, attr.y));
    });
    level.addEntity(spawner);

    var montySpawner = Crafty.e("Spawner").attr({x: 1000, y: 0}).setTime(200000)
      .bind("Spawn", function(attr) {
        level.addEntity(Crafty.e("Foot").attr({h: 500, x: attr.x, origY: -200, deltaY: 100}));
        level.addEntity(Crafty.e("Foot").attr({h: 500, x: attr.x+300, origY: -200, deltaY: 0, delta: -1}));
        level.addEntity(Crafty.e("Monty").attr({x: attr.x, y: -300}));
    });
    level.addEntity(montySpawner);
    //Tutorial texts
    Crafty.e("2D, DOM, Text").attr({ x: 50, y: 150 }).text("Gather&nbsp;ingredients. They&nbsp;will&nbsp;help&nbsp;along&nbsp;the&nbsp;way.")
    .textColor('#020A75');

    Crafty.e("2D, DOM, Text").attr({ x: 370, y: 420 }).text("Watch&nbsp;out&nbsp;for&nbsp;birds and&nbsp;other&nbsp;things&nbsp;that&nbsp;might eat&nbsp;or&nbsp;soil&nbsp;you!")
    .textColor('#020A75');

    Crafty.e("2D, DOM, Text").attr({ x: 630, y: 170 }).text("Ants&nbsp;will&nbsp;help&nbsp;by&nbsp;carrying&nbsp;you if&nbsp;you&nbsp;press&nbsp;z,&nbsp;but&nbsp;they&nbsp;will take&nbsp;some&nbsp;pie&nbsp;as&nbsp;their&nbsp;pay...")
    .textColor('#020A75');

    Crafty.e("2D, DOM, Text").attr({ x: 920, y: 100, w:400 }).text("If&nbsp;you&nbsp;find&nbsp;time&nbsp;for&nbsp;a&nbsp;break, you&nbsp;can&nbsp;bake&nbsp;by&nbsp;pressing&nbsp;x if&nbsp;you&nbsp;have&nbsp;the&nbsp;ingredients, but&nbsp;it&nbsp;will&nbsp;take&nbsp;some&nbsp;time...")
    .textColor('#020A75');

    Crafty.e("2D, DOM, Text").attr({ x: 1400, y: 160 }).text("Good&nbsp;luck!")
    .textColor('#DD0000');

  };

  function level2() {
    var level = Crafty.e("Level")
      .bounds(700, 4500);

      //korjaa epästaattisesti
    Crafty.background('url(assets/tausta2_2.jpg) repeat');

    // Ground
    level.addEntity(Crafty.e("Ground")
                    .attr({ x: 0, y: 500, h: 100, w: 1700}));
    level.addEntity(Crafty.e("Ground")
                    .attr({ x: 2400, y: 500, h: 100, w: 250}));
    level.addEntity(Crafty.e("Ground")
                    .attr({ x: 3500, y: 500, h: 100, w: 1000}));
    // Powerups
    level.addEntity(Crafty.e("Berry").attr({x: 700, origY: 415}));
    level.addEntity(Crafty.e("Flour").attr({x: 1450, origY: 300}));
    level.addEntity(Crafty.e("Butter").attr({x: 1655, origY: 345}));
    level.addEntity(Crafty.e("Strawberry").attr({x: 1850, origY: 250}));

    // Hills
    function mkHill(x, y, h, w) {
      var hill = Crafty.e("RectObstacle, Image")
        .image("assets/pavement-texture.jpg", "repeat")
        .attr({ x: x, y: y, h: h, w: w })
        .rectobstacle()
      level.addEntity(hill);
      return hill;
    }

    mkHill(300, 450, 50, 50);
    mkHill(800, 350, 150, 50);
    mkHill(980, 450, 40, 40);
    mkHill(1100, 380, 20, 200);
    mkHill(1400, 380, 20, 100);
    mkHill(1600, 320, 180, 50);
    mkHill(1650, 420, 80, 50);
    mkHill(1800, 330, 80, 100);
    mkHill(2000, 270, 230, 50);
    mkHill(2800, 420, 100, 50);
    mkHill(3100, 340, 100, 50);
    
    mkHill(3550, 400, 100, 50);
    mkHill(3700, 300, 500, 50);
    mkHill(3850, 360, 400, 50);
    mkHill(4050, 150, 500, 50);

    level.addEntity(Crafty.e("2D, Canvas, spr_cafe")
                    .attr({ x: 4752, y: 212}));

    // Player
    level.addEntity(setupPlayer("BerryPie", 5, 500));

    // Birds
    var spawner = Crafty.e("Spawner").attr({x: 1000, y: 400}).setTime(10000)
      .bind("Spawn", function(attr) {
        level.addEntity(Crafty.e("Pigeon").at(attr.x, attr.y));
    });
    level.addEntity(spawner);

    var gullSpawner = Crafty.e("Spawner").attr({x: 2000, y: 400}).setTime(10000)
      .bind("Spawn", function(attr) {
        level.addEntity(Crafty.e("Gull").at(attr.x, attr.y));
    });
    level.addEntity(gullSpawner);

    var montySpawner = Crafty.e("Spawner").attr({x: 1000, y: 0}).setTime(200000)
      .bind("Spawn", function(attr) {
        level.addEntity(Crafty.e("Foot").attr({h: 500, x: attr.x, origY: -200, deltaY: 100}));
        level.addEntity(Crafty.e("Foot").attr({h: 500, x: attr.x+300, origY: -200, deltaY: 0, delta: -1}));
        level.addEntity(Crafty.e("Monty").attr({x: attr.x, y: -300}));
    });
    level.addEntity(montySpawner);
  };

  // Levels list
  var levels = {
    "test": testlevel,
    "tutorial": tutorialLevel,
    "berrypie": level2
  };


  // Exports
  window.loadLevel = function(name) {
    // TODO: Clear old level data?

    // TODO: General setup?

    // Load the given level
    levels[name]();
  };

  window.Levels = levels;
}());
