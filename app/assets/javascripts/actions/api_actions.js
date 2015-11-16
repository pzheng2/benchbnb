ApiActions = {
  ReceiveAllBenches: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  NewBench: function (bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.NEW_BENCH,
      bench: bench
    });
  }

};
