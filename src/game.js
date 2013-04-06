(function() {
  "use strict";
  var Game = {
    // Initialize and start our game
    start: function() {
      Crafty.load([
        "assets/pie_sprite.png", "assets/bird_sprite.png"
      ],
      function() {

        Crafty.sprite(66, "assets/pie_sprite.png", {
          spr_player: [0,0],
        });

        Crafty.sprite(88, 44, "assets/bird_sprite.png", {
          spr_seagull: [0,0],
          spr_pigeon: [0,2]
        });
        
        // Start crafty and set a background color so that we can see it's working
        Crafty.init(800, 600);
        Crafty.background('#FFFFFF');
        
        //play and repeat forever
        //adding a single sound
        Crafty.audio.add("backgroundMusic", [
        "assets/stellarartwars.mp3",
        "assets/stellarartwars.ogg",
        "assets/stellarartwars.wav"
        ]);
        Crafty.audio.play("backgroundMusic", -1);

        // Simply start splashscreen
        Crafty.scene('Splashscreen');
      });
    }
  }

  window.Game = Game;
}());

