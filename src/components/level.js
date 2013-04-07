(function() {
  "use strict";

  // TODO: Background texture?
  Crafty.c("Level",{
    init: function() {
      this._entities = [];
      this.attr({
        height: null,
        width: null
      });

      this.bind("Remove", this._destroy);
      var _this = this;
      Crafty.bind("Baking", function(data) {
        var baking = Crafty.e("Baking").attr(data);
        Crafty.bind("BakingOff", function() {
          baking.destroy();
        });
        _this.addEntity(baking);
      });
    },
    bounds: function(h, w) {
      this.attr({
        height: h,
        width: w
      });

      return this;
    },
    addEntity: function(ent) {
      this._entities.push(ent);
      return this;
    },

    _destroy: function() {
      for(var i = 0; i < this._entities.length; i++) {
        this._entities[i].destroy();
      }
    }
  });
}());
