FilterActions = {

  FilterBounds: function (boundsParam) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTER_BOUNDS,
      boundsParam: boundsParam
    });
  },

  FilterSeating: function (seatParams) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTER_SEATS,
      seatParams: seatParams
    });
  }

};
