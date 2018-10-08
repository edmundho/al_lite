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

  render () {
    const car = this.props.car;
    const views = this.state.views;
    // console.log(views);

    const contents = Object.keys(car).map((key, i) => {
      return (
        <li key={i}>{key}</li>
      );
    });
    
    return (
      <div>
        <h1>
          VIEWED: {views} times
        </h1>
        <ul>
          {contents}
        </ul>
      </div>
    );
  }
}

export default CarDetail;