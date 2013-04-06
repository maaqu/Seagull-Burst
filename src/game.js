(function() {
  "use strict";
  var Game = {
    // Initialize and start our game
    start: function() {
      Crafty.load([
        "assets/pie_sprite.png"
      ],
      function() {

        Crafty.sprite(66, "assets/pie_sprite.png", {
           spr_player: [0,0]
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

