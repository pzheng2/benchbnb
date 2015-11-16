(function (root) {
  var _filterParams = {};
  var CHANGE_EVENT = "change";

  root.FilterParamsStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _filterParams;
    },

    changed: function () {

    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case FilterActions.FILTER:
        FilterParamsStore.emit(CHANGE_EVENT);
          break;
      }
    }),
  });
})(this);
