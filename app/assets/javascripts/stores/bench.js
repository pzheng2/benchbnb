(function (root) {
  var _benches = [];
  var CHANGE_EVENT = "change";

  var resetBenches = function (benches) {
    _benches = benches;
  };

  var addNewBench = function (bench) {
    _benches.push(bench);
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _benches.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case BenchConstants.BENCHES_RECEIVED:
          resetBenches(payload.benches);
          BenchStore.emit(CHANGE_EVENT);
          break;
        case BenchConstants.NEW_BENCH:
          addNewBench(payload.bench);
          BenchStore.emit(CHANGE_EVENT);
          break;
      }

    }),


  });

})(this);
