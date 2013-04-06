//Splashscreen to show game and team names
Crafty.scene('Splashscreen', function() {
  text2 = Crafty.e('2D, DOM, Text, Tween')
    .attr({alpha: 1.0, w: 800, h: 20, y:200 })
    .text('Seagull&nbsp;Burst&nbsp;presents')
    .css({ "text-align": "center" })
  text1 = Crafty.e('2D, DOM, Text, Tween')
    .attr({alpha: 1.0, w: 800, h: 20, y:300 })
    .text('Pelin&nbsp;nimi!!!!')
    .css({ "text-align": "center" })
  setTimeout(function(){ //fade out after 3000 ms
    text1.tween({alpha: 0.0}, 50);
    text2.tween({alpha: 0.0}, 50);
    setTimeout(function(){
      Crafty.scene('Menu');      
    },1500);
  }, 3000);
});

//Main game menu
Crafty.scene('Menu', function() {
  Crafty.e('2D, DOM, Text, Tween')
    .attr({alpha: 0.0, y: 200, w: 800 })
    .tween({alpha: 1.0}, 30)
    .text('Menu!')
    .css({ "text-align": "center" })

  this.restart_game = this.bind('KeyDown', function(e) {
    if(e.key == Crafty.keys['ENTER']) {
      Crafty.scene('Level1');
    }
  });
}, function() { //ONKO TARPEELLINEN?
  this.unbind('ENTER', this.restart_game);
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

  // Make player here
/*  this.player = Crafty.e('PlayerCharacter').at(5, 5);
  this.occupied[this.player.at().x][this.player.at().y] = true;*/

//Make victory condition
  /*  this.show_victory = this.bind('VillageVisited', function() {
    if (!Crafty('Village').length) {
      Crafty.scene('Victory');
    }
  });*/
  
  //Make death condition
  
  
});

//Other levels


//Death scene
Crafty.scene('Death', function() {});

//Victory scene
Crafty.scene('Victory', function() {});

//Credits scene
Crafty.scene('Credits', function() {});

//Hiscore scene
Crafty.scene('Hiscore', function() {})
