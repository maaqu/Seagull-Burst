(function() {
  "use strict";
  
  Crafty.c("Camera",{
    init: function() {  },
    cameraFocus: function(ent) {
      this.set(ent);
      var that = this;
      ent.bind("Moved",function(location) { that.set(location); });
    },
    set: function(ent) {
      // Focus on the given 2D entity
      var vpW = Crafty.viewport.width;
      var vpH = Crafty.viewport.height;
      var toX = vpW / 2 - ent.x;
      var toY = vpH / 2 - ent.y;

      // Except when the focus is near level bounds, limit the camera position
      // so that it does not show area outside the level.
      // In case the level is smaller than the viewport, focus on origin.
      var level = Crafty("Level");
      
      toX = Math.min(0, Math.max(-(level.width - vpW), toX)); // Note: viewport's interesting X coordinates
      toY = Math.max(0, Math.min(level.height - vpH, toY));

      console.log("Camera focus at (" + ent.x + ", " + ent.y + "), placed camera origin at (" + toX + ", " + toY + ")");

      Crafty.viewport.x = toX;
      Crafty.viewport.y = toY;
    }
  });
}());
