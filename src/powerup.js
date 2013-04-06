var PowerUp = function(effect, gfx) {
  var _effect = effect;
  var _gfx = gfx;
  return {
    getGraphics: function() {
      return _gfx;
    },
    getEffect: function() {
      return _effect;
    }
  }
}
