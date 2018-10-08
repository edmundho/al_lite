import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { checkViews } from '../../util/vehicle_api_util';

class ListingItem extends Component {
  constructor (props) {
    super(props);

    this.state = {
      views: null
    };
  }

  componentWillMount () {
    const vin = this.props.car.vin;
    checkViews(vin).then(response => this.setState({ views: response }));
  }

  render () {
    const car = this.props.car;
    const viewed = this.state.views ? `This listing was viewed ${this.state.views} times.` : ' ';
    
    return (
      <div className="car-listing">
        <Link to={`/car/${car.vin}`}>
          <img src={car.primary_photo_url} alt={car.model} />
          <div className="listing-stats">
            <span className="listing-title">
              {car.year} {car.make} {car.model}
            </span>
            <span className="listing-price">{car.price}</span>
            <p className="listing-miles">{car.mileage}</p>
            <p className="listing-loc">{car.city}, {car.state}</p>
            <p>{viewed}</p>
            {/* <p>viewed {this.state.views} times</p> */}
          </div>
        </Link>
      </div>
    );
  }
}
  
export default ListingItem;