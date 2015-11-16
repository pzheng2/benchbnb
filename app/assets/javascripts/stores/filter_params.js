(function (root) {
  var _filterParams = {
            bounds: null,
            minSeats: null,
            maxSeats: null
          };
  var CHANGE_EVENT = "change";

  var resetBoundsFilter = function (boundsParam) {
    _filterParams.bounds = boundsParam;
  };

  var resetSeatsFilter = function (seatParams) {
    _filterParams.minSeats = seatParams.minSeats;
    _filterParams.maxSeats = seatParams.maxSeats;
  };

  root.FilterParamsStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _filterParams;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case FilterConstants.FILTER_BOUNDS:
          resetBoundsFilter(payload.boundsParam);
          FilterParamsStore.emit(CHANGE_EVENT);
          break;
        case FilterConstants.FILTER_SEATS:
          resetSeatsFilter(payload.seatParams);
          FilterParamsStore.emit(CHANGE_EVENT);
          break;
      }

    }),

  });
})(this);
