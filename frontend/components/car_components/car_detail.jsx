import React, { Component } from 'react';

class CarDetail extends Component {
  componentDidMount () {
    console.log('did mount');
  }

  render () {
    const car = this.props.car;
    console.log(car);
    const contents = Object.keys(car).map((key, i) => {
      return (
        <li key={i}>{key}</li>
      );
    });
    
    return (
      <div>
        <ul>
          {contents}
        </ul>
      </div>
    );
  }
}

export default CarDetail;