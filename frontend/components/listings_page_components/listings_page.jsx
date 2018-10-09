import React, { Component } from 'react';
import ListingItem from './listing_item';
import Pages from './pages';
import Placeholder from './loading_placeholder';
import Navbar from '../nav_bar';
class Listings extends Component {
  constructor (props) {
    super(props);

    this.goBack = this.goBack.bind(this);
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

  goBack () {
    this.props.history.goBack();
  }
  
  render () {
    let count = 0;
    let formattedCount = 0;
    let cars;
    let listings;
    let numResults = (
      <h3>&nbsp;</h3>
    );

    if (Object.keys(this.props.cars).length > 0) {
      count = this.props.cars.total_count;
      formattedCount = this.props.cars.total_count_formatted;
      numResults = (
        <h3>{formattedCount} results</h3>
      );
      cars = this.props.cars.records;
      listings = cars.map((car, i) => {
        return (
          <ListingItem car={car} key={i}/>
        );
      });
    } else {
      listings = (
        <Placeholder />
      );
    }
    
    return (
      <div>
        <Navbar />
        <div className="listings-page">
          {numResults}
          <div>
            {listings}
          </div>
          <Pages 
            count={count} 
            page={this.props.page}
            min={this.props.min}
            max={this.props.max} />
        </div>
      </div>
    );
  }
}

export default Listings;