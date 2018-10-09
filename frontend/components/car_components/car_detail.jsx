import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      zoom: 13,
      streetViewControl: false,
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

    return (
      <div>
        <div className="navbar">
          <button onClick={() => this.props.history.goBack()}>
            &#12296; &nbsp; Back
          </button>
          <div>
            <Link to="/">Home</Link>
            <Link to="/">Sign Up</Link>
            <Link to="/">Log In</Link>
          </div>
        </div>
        <div className="vehicle-page">
          <div className="vehicle-overview">
            <img src={car.primary_photo_url} alt={car.model} />
            <div>
              <div>
                <h1>
                  {car.year} {car.make} {car.model}
                </h1>
                <h2>{car.mileage}</h2>
              </div>
              <div>
                <h1>{car.price}</h1>
                <h2>
                  <i className="fas fa-eye" />
                  &nbsp;
                  {views}
                </h2>
              </div>
            </div>
          </div>
          <div className="seller-info">
            <div>
              <h2>Seller Info</h2>
              <h3>{car.dealer_name}</h3>
            </div>
            <div id="map-container" ref="map" />
          </div>
        </div>
      </div>
    );
  }
}

export default CarDetail;

