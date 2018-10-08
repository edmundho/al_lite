import React from 'react';
import { Link } from 'react-router-dom';

const ListingItem = ({ car }) => (
    <div className="car-listing">
      <Link to={`/car/${car.vin}`}>
        <img src={car.primary_photo_url} alt={car.model}/>
        <div className="listing-stats">
          <span className="listing-title">
            {car.year} {car.make} {car.model}
          </span>
          <span className="listing-price">{car.price}</span>
          <p className="listing-miles">{car.mileage}</p>
          <p className="listing-loc">{car.city}, {car.state}</p>
        </div>
      </Link>
    </div>
  );

export default ListingItem;