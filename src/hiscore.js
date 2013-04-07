(function() {
  "use strict";

  var Hiscore = {
    saveScore: function(level, name, score) {
      this.loadScores(level, function(data) {
        data.push({name: name, score: score});
        localStorage.setItem(level, JSON.stringify(data));
      });
    },
    loadScores: function(level, callback) {
      var items = localStorage.getItem(level);
      callback(!!items ? JSON.parse(items) : []);
    }
  };

  window.Hiscore = Hiscore;
}());
