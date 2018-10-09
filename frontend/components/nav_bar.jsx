import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar ({ back }) {
  const backButton = back
    ? (<button onClick={() => back()}>
      &#12296; &nbsp; Back
      </button>)
    : (<Link to="/">&#12296; &nbsp; Back to Search</Link>);
  
  return (
    <div className="navbar">
      {backButton}
      <div>
        <Link to='/'>Home</Link>
        <Link to='/'>Sign Up</Link>
        <Link to='/'>Log In</Link>
      </div>
    </div>
  );
}