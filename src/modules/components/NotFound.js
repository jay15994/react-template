import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div
    style={{
      height: 'calc(100vh - 16px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    <h1>404</h1>
    <br />
    <p>This is not the page you are looking for.</p>
    <br />
    <Link to="/">Go To Home Page</Link>
  </div>
);

export default NotFound;
