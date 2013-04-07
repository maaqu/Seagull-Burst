(function() {
  "use strict";

  var Hiscore = {
    saveScore: function(name, score) {
      this.loadScores(function(data) {
        data.push({name: name, score: score});
        localStorage.setItem("hiscore", JSON.stringify(data));
      });
    },
    loadScores: function(callback) {
      var items = localStorage.getItem("hiscore");
      callback(!!items ? JSON.parse(items) : []);
    }
  };

  window.Hiscore = Hiscore;
}());
