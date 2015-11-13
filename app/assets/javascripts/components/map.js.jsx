var Map = window.Map = React.createClass ({
  getInitialState: function () {
    return { markers: [], previousBenches: BenchStore.all(), prevBenchMarker: {} };
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


    var marker;
    BenchStore.all().forEach(function (bench, i) {
      if (!this.includesBench(this.state.previousBenches, bench)) {
        var latLng = { lat: bench.lat, lng: bench.lng };

        marker = new google.maps.Marker({
          position: latLng,
          map: this.map,
          title: bench.description
        });

        this.state.prevBenchMarker[bench.description] = marker;
        marker.setMap(this.map);
      }
    }.bind(this));

    this.state.previousBenches.forEach(function (prevBench) {
      if (!this.includesBench(BenchStore.all(), prevBench)) {
        this.state.prevBenchMarker[prevBench.description].setMap(null);
      }
    }.bind(this));


    this.setState({ previousBenches: BenchStore.all() });
  },

  includesBench: function (arr, bench) {
    for (var i = 0; i < arr.length; i++) {
      if (bench.description === arr[i].description) {
        return true;
      }
    }

    return false;
  },

  render: function () {

    return (
      <div className="map" ref="map">
      </div>
    );
  }

});
