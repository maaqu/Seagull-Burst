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
    level.addEntity(Crafty.e("RectObstacle, Color, WiredHitBox")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 300, y: 450, h: 50, w: 50}));
    level.addEntity(Crafty.e("RectObstacle, Color")
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

    // Powerups
    level.addEntity(Crafty.e("Apple").attr({x: 170, origY: 400}));    
    level.addEntity(Crafty.e("Apple").attr({x: 700, origY: 230}));
    level.addEntity(Crafty.e("Flour").attr({x: 1450, origY: 300}));
    level.addEntity(Crafty.e("Butter").attr({x: 1655, origY: 345}));
    level.addEntity(Crafty.e("Apple").attr({x: 1850, origY: 250}));

    // Hills
    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 300, y: 450, h: 50, w: 50})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 50)")
                    .attr({ x: 800, y: 350, h: 150, w: 50})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 980, y: 450, h: 50, w: 50})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 1100, y: 380, h: 20, w: 200})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 1400, y: 380, h: 20, w: 100})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 1600, y: 320, h: 180, w: 50})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 1650, y: 420, h: 80, w: 50})
                    .rectobstacle());

    level.addEntity(Crafty.e("Obstacle, Color")
            .color("rgb(0, 200, 0)")
            .attr({ x: 1800, y: 330, h: 80, w: 100}));

    level.addEntity(Crafty.e("Obstacle, Color")
            .color("rgb(0, 200, 0)")
            .attr({ x: 2000, y: 270, h: 230, w: 50}));

    level.addEntity(Crafty.e("2D, Canvas, spr_cafe")
                    .attr({ x: 2500, y: 212}));

    // Player
    level.addEntity(setupPlayer(5, 500));

    // Birds
    var spawner = Crafty.e("Spawner").attr({x: 1000, y: 400}).setTime(10000)
      .bind("Spawn", function(attr) {
        level.addEntity(Crafty.e("Pigeon").at(attr.x, attr.y));
    });

    var montySpawner = Crafty.e("Spawner").attr({x: 1000, y: 0}).setTime(200000)
      .bind("Spawn", function(attr) {
        console.log("spawning MONTY");


    Crafty.e("Foot").attr({h: 500, x: attr.x, origY: -200, deltaY: 100});
    Crafty.e("Foot").attr({h: 500, x: attr.x+300, origY: -200, deltaY: 0, delta: -1});
    Crafty.e("Monty").attr({x: attr.x});
  
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
    });

    level.addEntity(spawner);
    level.addEntity(montySpawner);
  };

  function level2() {
    var level = Crafty.e("Level")
      .bounds(700, 2597);
      
      //korjaa epästaattisesti
    Crafty.background('url(assets/tausta2_2.jpg) repeat');

    // Ground
    level.addEntity(Crafty.e("Ground")
                    .attr({ x: 0, y: 500, h: 100, w: 1700}));
    level.addEntity(Crafty.e("Ground")
                    .attr({ x: 2400, y: 500, h: 100, w: 250}));
    level.addEntity(Crafty.e("Ground")
                    .attr({ x: 4500, y: 500, h: 100, w: 350}));
    // Powerups
    level.addEntity(Crafty.e("Apple").attr({x: 700, origY: 415}));
    level.addEntity(Crafty.e("Flour").attr({x: 1450, origY: 300}));
    level.addEntity(Crafty.e("Butter").attr({x: 1655, origY: 345}));
    level.addEntity(Crafty.e("Apple").attr({x: 1850, origY: 250}));

    // Hills
    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 300, y: 450, h: 50, w: 50})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 50)")
                    .attr({ x: 800, y: 350, h: 150, w: 50})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 980, y: 450, h: 50, w: 50})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 1100, y: 380, h: 20, w: 200})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 1400, y: 380, h: 20, w: 100})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 1600, y: 320, h: 180, w: 50})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
                    .color("rgb(0, 200, 0)")
                    .attr({ x: 1650, y: 420, h: 80, w: 50})
                    .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
            .color("rgb(0, 200, 0)")
            .attr({ x: 1800, y: 330, h: 80, w: 100})
            .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
            .color("rgb(0, 200, 0)")
            .attr({ x: 2000, y: 270, h: 230, w: 50})
            .rectobstacle());

    level.addEntity(Crafty.e("RectObstacle, Color")
        .color("rgb(0, 200, 0)")
        .attr({ x: 2800, y: 420, h: 100, w: 50})
        .rectobstacle());
    
    level.addEntity(Crafty.e("RectObstacle, Color")
        .color("rgb(0, 200, 0)")
        .attr({ x: 3100, y: 340, h: 100, w: 50})
        .rectobstacle());
        
    level.addEntity(Crafty.e("RectObstacle, Color")
            .color("rgb(0, 200, 0)")
            .attr({ x: 3600, y: 500, h: 100, w: 50})
            .rectobstacle());
    
    level.addEntity(Crafty.e("RectObstacle, Color")
            .color("rgb(0, 200, 0)")
            .attr({ x: 3900, y: 150, h: 500, w: 50})
            .rectobstacle());
    
    level.addEntity(Crafty.e("2D, Canvas, spr_cafe")
                    .attr({ x: 4752, y: 212}));

    // Player
    level.addEntity(setupPlayer(5, 500));

    // Birds
    var spawner = Crafty.e("Spawner").attr({x: 1000, y: 400}).setTime(10000)
      .bind("Spawn", function(attr) {
        level.addEntity(Crafty.e("Pigeon").at(attr.x, attr.y));
    });

    var montySpawner = Crafty.e("Spawner").attr({x: 1000, y: 0}).setTime(200000)
      .bind("Spawn", function(attr) {
        console.log("spawning MONTY");


    Crafty.e("Foot").attr({h: 500, x: attr.x, origY: -200, deltaY: 100});
    Crafty.e("Foot").attr({h: 500, x: attr.x+300, origY: -200, deltaY: 0, delta: -1});
    Crafty.e("Monty").attr({x: attr.x, y: -300});

    });

    level.addEntity(spawner);
    level.addEntity(montySpawner);
  };

  // Levels list
  var levels = {
    "test": testlevel,
    "tutorial": tutorialLevel,
    "level2": level2,
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
