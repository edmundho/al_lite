import React, { Component } from 'react';
import ListingItem from './listing_item';
import Pages from './pages';

class Listings extends Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.receiveCars(this.props.page, this.props.min, this.props.max);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.page !== this.props.page) {
      this.props.receiveCars(newProps.page, this.props.min, this.props.max);
    }
  }

  componentDidUpdate () {
    window.scrollTo(0, 0);
  }
  
  render () {
    let count = 0;
    let formattedCount = 0;
    let cars;
    let listings;

    if (Object.keys(this.props.cars).length > 0) {
      count = this.props.cars.total_count;
      formattedCount = this.props.cars.total_count_formatted;
      cars = this.props.cars.records;
      listings = cars.map((car, i) => {
        return (
          <ListingItem car={car} key={i}/>
        );
      });
    } else {
      listings = (
        <div>Loading search results...</div>
      );
    }
    
    return (
      <div>
        <h1>
          listings
        </h1>
        <h3>
          {formattedCount} results
        </h3>
        {listings}
        <Pages 
          count={count} 
          page={this.props.page}
          min={this.props.min}
          max={this.props.max} />
      </div>
    );
  }
}

export default Listings;