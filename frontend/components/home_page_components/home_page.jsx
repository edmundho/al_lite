import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="home-page">
        <div className="home-page-links">
          <Link to='/'>Sign Up</Link>
          <Link to='/'>Log In</Link>
        </div>
        <div className="home-page-center">
          <div className="home-page-logo">
            <div className="blue">A</div>
            <div className="red">u</div>
            <div className="yellow">t</div>
            <div className="blue">o</div>
            <div className="green">l</div>
            <div className="yellow">i</div>
            <div className="red">s</div>
            <div className="blue">t</div>
          </div>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <div>
              <input 
                type="text" 
                placeholder="min price" 
                onChange={this.update('min')}/>
              <input 
                type="text" 
                placeholder="max price" 
                onChange={this.update('max')}/>
            </div>
            <input type="submit" value="Autolist Search!"/>
          </form>
        </div>
      </div>
    );
  }
}

export default HomePage;