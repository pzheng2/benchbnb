var Index = window.Index = React.createClass ({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  render: function () {
    return (
      <div>
        <ol>
          {this.state.benches.map(function (bench) {
            return (
              <li key={bench.id}>
                {bench.description}
              </li>);
          })}
        </ol>
      </div>
    );
  }

});
