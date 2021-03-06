// encapsulates our entire /details page

import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiY3NoNTgyNiIsImEiOiJja2Y4ODRnbm0wNmRmMnlvMzJsZHllYWNmIn0.ahh2fZ9MyzBjG2ZAmfRzoQ';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lng: -78.9032316,
      lat: 35.9962091,
      zoom: 14,
    };

    this.renderDestinations = this.renderDestinations.bind(this);
    this.manageDestinations = this.manageDestinations.bind(this);
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
    const marker = new mapboxgl.Marker()
    .setLngLat([  -78.901318, 35.995930 ])
    .addTo(map);
  }

  renderDestinations(destinationData) {
    // console.log('destination data', destinationData);
    const name = destinationData.name;
    let distance = destinationData.dist;
    const id = destinationData.xid;    
    distance = Math.round(distance * 0.0006 * 100) / 100;
    return (
      <li key={id}>
        {name} distance: {distance} miles from you
      </li>
    );
  }


  // console.log('this works perfectly', this.props.selectedRadius);
  manageDestinations() {
    const uniqueDestinations = _.uniqBy(this.props.destinations, 'name');
    uniqueDestinations.reverse();
    const uniqFilteredDestinations = uniqueDestinations.filter((element) => {
      return element.rate !== 0;
    })
    if (uniqFilteredDestinations.length < 10) {
      return uniqFilteredDestinations;
    } else {
      console.log(uniqFilteredDestinations.length)
      return uniqFilteredDestinations.slice(0, 10);
    };
  }

  render() {
    const inputDestinations = this.manageDestinations();
    
    return (
      <div>
        <div className='row bg-light'>
          <div className='col'>
            <h1>Durham - get out there and walk!</h1>
          </div>
        </div>
        <div className='row'>
          <div className='pscard col-4 border rounded-sm shadow-lg mt-5 p-2'>
            <h3>your destinations!</h3>
            <ul>{inputDestinations.map(this.renderDestinations)}</ul>
            <h3>
              <Link to='/' className='float-right badge badge-light'>
                Back
              </Link>
            </h3>
          </div>
          <div className='col'>
            <div className='pscard border rounded-sm shadow-lg mt-5 p-2'>
              <div className='sidebarStyle'>
                <div>
                  Longitude: {this.state.lng} | Latitude: {this.state.lat} |
                  Zoom: {this.state.zoom}
                </div>
              </div>
              <div
                ref={(el) => (this.mapContainer = el)}
                className='mapContainer'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { destinations: state.destinations, selectedRadius: state.distance };
}

export default connect(mapStateToProps)(Details);
