import React from 'react';
import BikeSearch from './BikeSearch';

function Header(){
  return (
    <div>
      <h1>Stolen Bikes</h1>
      <em>Search by zipcode:</em>
      <BikeSearch />
    </div>
  );
}

export default Header;
