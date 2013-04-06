Crafty.c('Player', {
  init: function() {
    this.requires('Actor, Twoway, Color, Gravity')
	.twoway(4)
	.color('rgb(184, 143, 143)')
	.gravity('Obstacle')
	.gravityConst(0.1);
	
    this.attr({
        w: 30,
        h: 30
    })	
},
   at: function(x, y) {
      this.attr({ x: x, y: y });
      return this;
}
});

Crafty.c('Block', {
  init: function() {
    this.requires('Actor, Color, Obstacle')
	.color('rgb(200, 0, 0)');

    this.attr({
        w: 30,
        h: 30
    })	
},
   at: function(x, y) {
      this.attr({ x: x, y: y });
      return this;
}
});

Crafty.c('Actor', {
  init: function() {
    this.requires('2D, Canvas');
  },
});
