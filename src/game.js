(function() {
  "use strict";
  var Game = {
    // Initialize and start our game
    start: function() {
      Crafty.load([
        "assets/Monty_foot_sprite.png",
        "assets/bird_sprite.png",
        "assets/powerup_sprite.png",
        "assets/credits.jpg",
        "assets/death.jpg",
        "assets/ground-texture.jpg",
        "assets/logo.png",
        "assets/menubg.jpg",
        "assets/pie_sprite.png",
        "assets/powerup_sprite.png",
        "assets/seagull.png",
        "assets/selector.png",
        "assets/stellarartwars.mp3",
        "assets/stellarartwars.ogg",
        "assets/stellarartwars.wav",
        "assets/tausta1.jpg",
        "assets/tausta2.jpg",
        "assets/victory.jpg"
      ],
      function() {

        Crafty.sprite(66, "assets/pie_sprite.png", {
          spr_player: [0,0],
        });

        Crafty.sprite(88, 44, "assets/bird_sprite.png", {
          spr_seagull: [0,0],
          spr_pigeon: [0,2]
        });

        Crafty.sprite(442, 397, "assets/Monty_foot_sprite.png", {
          spr_monty: [0,0],
        });

        Crafty.sprite(30, 34, "assets/powerup_sprite.png", {
            spr_berry: [2,0],
            spr_strawberry: [3,0],
            spr_flour: [0,0],
            spr_butter: [1,0],
            spr_apple: [4,0],
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

