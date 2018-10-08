import React, { Component } from 'react';

class HomePage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      min: 0,
      max: 100000000
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.history.push(`/listings/${this.state.min}/${this.state.max}/1`);
  }

  update (property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render () {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="min price" 
            onChange={this.update('min')}/>
          <input 
            type="text" 
            placeholder="max price" 
            onChange={this.update('max')}/>
          <input type="submit" value="Search!"/>
        </form>
      </div>
    );
  }
}

export default HomePage;