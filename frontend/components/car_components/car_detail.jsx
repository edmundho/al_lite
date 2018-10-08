import React, { Component } from 'react';
import { 
  checkViews, 
  incrementViews, 
  postVehicle } from '../../util/vehicle_api_util';

class CarDetail extends Component {
  constructor (props) {
    super(props);

    this.state = {
      views: null,
    };
  }

  componentWillMount () {
    const vin = this.props.car.vin;
    checkViews(vin).then(response => {
      if (response === 0) {
        postVehicle(vin).then(postRes => {
          this.setState({ views: postRes });
        });
      } else {
        incrementViews(vin).then(updateResponse => {
          this.setState({ views: updateResponse });
        });
      }
    });
  }

  componentDidMount () {
    window.scrollTo(0, 0);

    const latitude = this.props.car.lat;
    const longitude = this.props.car.lon;
    const latLng = { lat: latitude, lng: longitude };
    
    const mapOptions = {
      center: latLng,
      zoom: 13
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.DROP
    });

    marker.setMap(this.map);
  }

  render () {
    const car = this.props.car;
    const views = this.state.views;

    const contents = Object.keys(car).map((key, i) => {
      return (
        <li key={i}>{key}</li>
      );
    });
    
    return (
      <div>
        <button onClick={() => this.props.history.goBack()}>Back</button>
        <h1>
          VIEWED: {views} times
        </h1>
        <div id="map-container" ref="map" />
        <ul>
          {contents}
        </ul>
      </div>
    );
  }
}

export default CarDetail;

