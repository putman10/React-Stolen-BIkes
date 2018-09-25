import React from 'react';
import BikeSearch from './BikeSearch';

function Header(){
  let containerStyle1 = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center'
  }
  let containerStyle2 = {
    maxWidth: '1200px',
    margin: '3rem auto',
    textAlign: 'center',
    background: 'white',
    padding: '10px',
    border: '6px solid black',
    fontSize: '25px'
  }
  let headerStyle = {
    backgroundColor: 'black',
    padding: '10px 0',
    color: 'white',
    fontSize: '35px'
  }
  let lowerFont = {
    fontSize: '20px'
  }
  return (
    <div>
      <div style={headerStyle}>
        <div style={containerStyle1}>
          <h1>Where's My Bike?</h1>
        </div>
      </div>
      <div style={containerStyle2}>
      <p><b>This is a website to check for all reported stolen bikes based on a zipcode.</b></p>
        <p style={lowerFont}>Search by zipcode:</p>
        <BikeSearch />
      </div>
    </div>
  );
}

export default Header;
