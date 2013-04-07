(function() {
  "use strict";

  //Splashscreen to show game and team names
  Crafty.scene('Splashscreen', function() {
    var seagull = Crafty.e("2D, DOM, Image, Tween")
      .image("assets/seagull.png")
      .attr({alpha: 1.0, x: 190, y: 50 });
    var logo = Crafty.e('2D, DOM, Image, Tween')
      .image("assets/logo.png")
      .attr({alpha: 1.0, x: 57, y: 250 });
    setTimeout(function(){ //fade out after 3000 ms
      seagull.tween({alpha: 0.0}, 50);
      logo.tween({alpha: 0.0}, 50);
      setTimeout(function(){
        Crafty.scene('Menu');
      },1500);
    }, 3000);
  });

  //Main game menu
  Crafty.scene('Menu', function() {
    Crafty.background('#BFF9FF');
    var bg = Crafty.e("2D, DOM, Image, Tween")
      .image("assets/menubg.jpg")
      .attr({alpha: 1.0, x: 0, y: 0 });

    var ycoordinates = [275, 334, 397, 457];
    var xcoordinates = [460, 268, 452, 285];
    var selectedindex = 0;
    var selector = Crafty.e("2D, DOM, Image, Tween")
      .image("assets/selector.png")
      .attr({alpha: 0.0, x: xcoordinates[selectedindex], y: ycoordinates[selectedindex] })
      .tween({alpha: 1.0}, 10)

    this._onKeyDown = function(e) {
      if(e.key == Crafty.keys['ENTER']) {
        if (selectedindex == 0){Crafty.scene('Level1');}
        else if (selectedindex == 1){Crafty.scene('Level2');}
        else if (selectedindex == 2){window.open('http://serveri.tulilaulu.net/hiscores.html','','width=200,height=600')}
        else if (selectedindex == 3){Crafty.scene('Credits');}
      }
      else if(e.key == Crafty.keys['UP_ARROW']) {
        if (selectedindex > 0){
          selectedindex = selectedindex - 1;
          selector.tween({x: xcoordinates[selectedindex], y: ycoordinates[selectedindex]}, 10);
        }
      }
      else if(e.key == Crafty.keys['DOWN_ARROW']) {
        if (selectedindex < 3){
          selectedindex = selectedindex + 1;
          selector.tween({x: xcoordinates[selectedindex], y: ycoordinates[selectedindex]}, 10);
        }
      }
    };

    this.bind('KeyDown', this._onKeyDown);
  },function() {
    this.unbind("KeyDown", this._onKeyDown);
  });

  //Loading scene (play if needs to get something)
  //the loading screen that will display while our assets load
  Crafty.scene("Loading", function () {
    //ESIMERKKEJA
    //load takes an array of assets and a callback when complete
    /*    Crafty.load(["sprite.png"], function () {
          Crafty.scene("main"); //when everything is loaded, run the main scene
          });

    //black background with some loading text
    Crafty.background("#000");
    Crafty.e("2D, DOM, Text").attr({ w: 100, h: 20, x: 150, y: 120 })
    .text("Loading")
    .css({ "text-align": "center" });*/
  });


  //First level
  Crafty.scene('Level1', function() {

    loadLevel("tutorial");

    this._onDeath = function() {
      Crafty.scene('Death');
    };
    this._onOOB = function(evt) {
      if(evt.exceededY)
        Crafty.scene("Death");
    }
    this._onVictory = function () {
      Crafty.scene('Victory');
    };

    Crafty("Player").bind("Death", this._onDeath);
    Crafty("Player").bind("WentOutOfBounds", this._onOOB);
    Crafty("Player").bind("Victory", this._onVictory);
  },

  function() {
    Crafty("Player").unbind("Death", this._onDeath);
    Crafty("Player").unbind("WentOutOfBounds", this._onOOB);
    Crafty("Player").unbind("Victory", this._onVictory);
    Crafty("Level, Camera").destroy();
  });

  //Second level
  Crafty.scene('Level2', function() {

    loadLevel("test"); //TODO: CHANGE

    //Make victory condition


    //Make death condition
    this._onDeath = function() {
      Crafty.scene('Death');
    };
    Crafty("Player").bind("Death", this._onDeath);
  },function() {
    Crafty("Player").unbind("Death", this._onDeath);
    Crafty("Level, Camera").destroy();
  });

  //Death scene
  Crafty.scene('Death', function() {
    Crafty.e('2D, Canvas, Image').image("assets/death.jpg");

    this._onKeyDown = function(e) {
      Crafty.scene('Menu');
    };

    this.bind('KeyDown', this._onKeyDown);
  },function() {
    this.unbind("KeyDown", this._onKeyDown);
  });

  //Victory scene
  Crafty.scene('Victory', function() {
    Crafty.e('2D, Canvas, Image').image("assets/victory.jpg");

    this._onKeyDown = function(e) {
      Crafty.scene('Menu');
    };
    this.bind('KeyDown', this._onKeyDown);
  }, function() {
    this.unbind('KeyDown', this._onKeyDown);
  });

  //Credits scene
  Crafty.scene('Credits', function() {
    Crafty.e('2D, Canvas, Image').image("assets/credits.jpg");

    this._onKeyDown = function(e) {
      Crafty.scene('Menu');
    };

    this.bind('KeyDown', this._onKeyDown);
  },function() {
    this.unbind("KeyDown", this._onKeyDown);
  });
}());
