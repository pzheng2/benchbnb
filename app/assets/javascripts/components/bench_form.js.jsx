var BenchForm = window.BenchForm = React.createClass ({
  getInitialState: function () {
    return {
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng,
      description: ""
      };
  },

  _onSubmit: function (event) {
    event.preventDefault();
    ApiUtil.createBench({ lat: this.state.lat, lng: this.state.lng, description: this.state.description });
    this.setState({ lat: "", lng: "", description: "" });
  },

  updateLat: function (event) {
    this.setState({ lat: event.currentTarget.value });
  },

  updateLng: function (event) {
    this.setState({ lng: event.currentTarget.value });
  },

  updateDescription: function (event) {
    this.setState({ description: event.currentTarget.value });
  },

  render: function () {
    return (
      <form onSubmit={this._onSubmit}>
        <label>
          Lat:
          <input type="text" onChange={this.updateLat} value={this.state.lat}/>
        </label>

        <label>
          Lng:
          <input type="text" onChange={this.updateLng} value={this.state.lng}/>
        </label>
        
        <label>
          Description:
          <input type="text" onChange={this.updateDescription} value={this.state.description}/>
        </label>

        <button>submit</button>
      </form>
    );

  }

});
