(function() {
  "use strict";
  
  // TODO: Background texture?
  Crafty.c("Level",{
    init: function() {
      this.attr({
        height: null,
        width: null
      });
    },
    bounds: function(h, w) {
      this.attr({
        height: h,
        width: w
      });
    }
  });
}());
