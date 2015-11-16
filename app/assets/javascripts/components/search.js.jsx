var Search = window.Search = React.createClass ({
  getInitialState: function () {
    return { benches: BenchStore.all(), bounds: "", minSeating: "", maxSeating: "" };
  },

  componentDidMount: function () {
    FilterParamsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    FilterParamsStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState( { benches: BenchStore.all() });
  },

  clickMapHandler: function (coords) {
    var url = "/bench/new";
    this.props.history.pushState(null, url, coords);
    this.props.history.go(1);
  },

  render: function () {
    return (
      <div>
        <Map clickMapHandler={this.clickMapHandler} />
        <Index />
      </div>

    );
  }

});
