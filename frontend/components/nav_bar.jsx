import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <div className="navbar">
    <div>
      <button onClick={() => this.props.history.goBack()}>
        &#12296; &nbsp; Back
      </button>
    </div>
    <div>
      <Link to='/'>Sign Up</Link>
      <Link to='/'>Log In</Link>
    </div>
  </div>
);