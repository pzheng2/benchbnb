var Map = window.Map = React.createClass ({
  getInitialState: function () {
    return { markers: [], previousBenches: BenchStore.all() };
  },

  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: { lat: 37.7758, lng: -122.435 },
        zoom: 13
      };
    this.map = new google.maps.Map(map, mapOptions);

    BenchStore.addChangeListener(this.manageMarkers);
    this.map.addListener('idle', function () {
      var latLngBounds = this.map.getBounds();
      var bounds =
          {
            "northEast": { "lat": latLngBounds.getNorthEast().lat(), "lng": latLngBounds.getNorthEast().lng() },
            "southWest": { "lat": latLngBounds.getSouthWest().lat(), "lng": latLngBounds.getSouthWest().lng() }
          };
      ApiUtil.fetchBenches(bounds);

    }.bind(this));

  },

  componentWillUnmount: function () {
    BenchStore.removeChangeListener(this.manageMarkers);
    this.map.removeListener('idle');
  },

  manageMarkers: function () {

    var markersArr = this.state.markers;

    this.prevBenchMarker = {};
    this.state.prevBenchMarker = {};

    BenchStore.all().forEach(function (bench, i) {
      if (this.state.previousBenches.indexOf(bench) === -1) {
        var latLng = { lat: bench.lat, lng: bench.lng };

        var marker = new google.maps.Marker({
          position: latLng,
          map: this.map,
          title: bench.description
        });

        this.prevBenchMarker[bench] = marker;
        marker.setMap(this.map);
      }
    }.bind(this));

    this.state.previousBenches.forEach(function (prevBench, i) {
      if (BenchStore.all().indexOf(prevBench) === -1) {
        this.prevBench[prevBench].setMap(null);
      }
    });

    this.setState({ previousBenches: BenchStore.all() });
  },

  render: function () {

    return (
      <div className="map" ref="map">
      </div>
    );
  }

});




//
// prevBench = ["San Francisco", "hello"]
// newBenches = ["San Francisco", "hello", "SF"]
// markers = ["San Francisco", "hello"]
//
// prevBench = ["San Francisco", "hello", "SF"]
// markers = ["San Francisco", "hello"]
// newBenches = ["hello", "SF"]
