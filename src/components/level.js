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
