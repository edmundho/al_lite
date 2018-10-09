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

  componentWillReceiveProps (newProps) {
    if (newProps !== this.props.car) {
      const newVin = newProps.car.vin;
      checkViews(newVin).then(response => this.setState({ views: response }));
    }
  }

  render () {
    const car = this.props.car;
    const viewed = this.state.views 
      ? (<p><i className="fas fa-eye"></i>&nbsp;{this.state.views}</p>) 
      : (<p>&nbsp;</p>);
    
    return (
      <div className="car-listing">
        <Link to={`/car/${car.vin}`}>
          <img src={car.primary_photo_url} alt={car.model} />
          <div className="listing-stats">
            <div>
              <div className="listing-title">
                {car.year} {car.make} {car.model}
              </div>
              <div className="listing-price">{car.price}</div>
            </div>
            <div>
              <p className="listing-miles">{car.mileage}</p>
            </div>
            <div>{viewed}</div>
            <div className="listing-loc">{car.city}, {car.state}</div>
          </div>
        </Link>
      </div>
    );
  }
}
  
export default ListingItem;