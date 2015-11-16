FilterActions = {
  Filter: function (filter) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTER,
      filter: filter
    });
  }

};
