var FilterParams = window.FilterParams = React.createClass ({

  getInitialState: function () {
    return { minSeats: 0, maxSeats: 100 };
  },

  _updateMin: function (event) {
    this.setState({ minSeats: event.currentTarget.value });
    FilterActions.FilterSeating({
      minSeats: parseInt(event.currentTarget.value),
      maxSeats: parseInt(this.state.maxSeats)
    });
  },

  _updateMax: function (event) {
    this.setState({ maxSeats: event.currentTarget.value });
    FilterActions.FilterSeating({
      minSeats: parseInt(this.state.minSeats),
      maxSeats: parseInt(event.currentTarget.value)
    });
  },

  render: function () {
    return (
      <div>
        <label>
          Min Seats:
          <input type="text" onChange={this._updateMin} value={this.state.minSeats} />
        </label>

        <label>
          Max Seats:
          <input type="text" onChange={this._updateMax} value={this.state.maxSeats} />
        </label>
      </div>
    );
  }

});
