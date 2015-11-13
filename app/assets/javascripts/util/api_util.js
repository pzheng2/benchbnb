ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
      type: 'GET',
      url: 'api/bench',
      data: { bounds: bounds },
      success: function (benches) {
        ApiActions.ReceiveAllBenches(benches);
      }
    });
  }
};
