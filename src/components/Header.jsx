import React from 'react';
import BikeSearch from './BikeSearch';

function Header(){
  let containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center'
  }
  let headerStyle = {
    backgroundColor: 'red',
    padding: '10px 0',
    color: 'white',
    marginBottom: '2rem'
  }
  return (
    <div>
      <div style={headerStyle}>
        <div style={containerStyle}>
          <h1>Stolen Bikes</h1>
        </div>
      </div>
      <div style={containerStyle}>
      <p>This is a website to check for all reported stolen bikes based on a zipcode.</p>
        <em>Search by zipcode:</em>
        <BikeSearch />
      </div>
    </div>
  );
}

export default Header;
