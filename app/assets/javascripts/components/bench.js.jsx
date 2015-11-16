var Bench = window.Bench = React.createClass ({

  findBench: function () {
    var benches = BenchStore.all();
    var bench = benches.find(function (bench) {
      return bench.id === parseInt(this.props.params.id);
    }.bind(this));
    return bench;
  },

  render: function () {
    var bench = this.findBench();

    return (
      <div>
        Description: {bench.description}
        <br/>
        Lat: {bench.lat}
        <br/>
        Lng: {bench.lng}
      </div>
    );
  }


});
