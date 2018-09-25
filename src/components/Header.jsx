import React from 'react';
import BikeSearch from './BikeSearch';
import bikeGif from '../assets/bike.gif';

function Header(){
  let containerStyle1 = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center'
  }
  let containerStyle2 = {
    maxWidth: '1200px',
    margin: '2rem auto 3rem',
    textAlign: 'center',
    background: '#ffffffb0',
    padding: '10px',
    border: '6px solid black',
    fontSize: '25px'
  }
  let headerStyle = {
    backgroundColor: 'black',
    padding: '10px 0',
    color: 'white',
    fontSize: '35px',
    textTransform: 'capitalize'
  }
  let lowerFont = {
    fontSize: '20px'
  }
  let bikeStyle = {
    maxWidth: '100%'
  }
  let bikeDiv = {
    width: '300px',
    margin: '0 auto'
  }
  return (
    <div>
      <div style={headerStyle}>
        <div style={containerStyle1}>
          <h1>Where's My Bike?</h1>
        </div>
      </div>
      <div style={bikeDiv}>
        <img style={bikeStyle} src={bikeGif}/>
      </div>
      <div style={containerStyle2}>
      <p><b>This is a website that returns all reported stolen bikes in a 10 mile radius of inputed zipcode.</b></p>
        <p style={lowerFont}>Enter a valid zipcode:</p>
        <BikeSearch />
      </div>
    </div>
  );
}

export default Header;
