import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default About;
