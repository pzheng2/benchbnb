var Search = window.Search = React.createClass ({
  getInitialState: function () {
    return {
      benches: BenchStore.all(),
      bounds: FilterParamsStore.all().bounds,
      minSeating: FilterParamsStore.all().min,
      maxSeating: FilterParamsStore.all().max
    };
  },

  componentDidMount: function () {
    FilterParamsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    FilterParamsStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    ApiUtil.filterBenches(FilterParamsStore.all());
    this.setState({
      benches: BenchStore.all(),
      bounds: FilterParamsStore.all().bounds,
      minSeating: FilterParamsStore.all().min,
      maxSeating: FilterParamsStore.all().max
    });
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
        <FilterParams />
      </div>

    );
  }

});
