ApiUtil = {

  filterBenches: function (filterParams) {
    $.ajax ({
      type: 'GET',
      url: 'api/bench',
      data: { bounds: filterParams.bounds, minSeats: filterParams.minSeats, maxSeats: filterParams.maxSeats},
      success: function (benches) {
        ApiActions.ReceiveFilteredBenches(benches);
      }
    });
  },

  fetchBenches: function (bounds) {
    $.ajax ({
      type: 'GET',
      url: 'api/bench',
      data: { bounds: bounds },
      success: function (benches) {
        ApiActions.ReceiveAllBenches(benches);
      }
    });
  },

  createBench: function (bench_params) {
    $.ajax ({
      type: 'POST',
      url: 'api/bench/',
      data: { bench: bench_params },
      success: function (bench) {
        ApiActions.NewBench(bench);
      }
    });
  },

};
