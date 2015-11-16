var Index = window.Index = React.createClass ({

  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  mixins: [ReactRouter.History],

  componentDidMount: function () {
    BenchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    BenchStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  _onClick: function (event) {
    this.history.pushState(null, "/bench/" + event.currentTarget.id + "/show", null);
    this.history.go(1);
  },

  render: function () {
    return (
      <div>
        <ol>
          {this.state.benches.map(function (bench) {
            return (
              <li onClick={this._onClick} id={bench.id} key={bench.id}>
                {bench.description}
              </li>
            );
          }.bind(this))}
        </ol>
      </div>
    );
  }

});
