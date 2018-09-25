import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BikeListDisplay = (props) => {
  console.log(props.bikes);
  console.log(props.bikes[1]);
  return (
    <div>
      {props.bikes.map((bike, index) => (
        <div key={index}>
          <h1>{bike.title}</h1>
          <img src={bike.thumb} alt={bike.title} />
          <p>Date Stolen: {bike.date_stolen}</p>
          <p>Serial #: {bike.serial}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

BikeListDisplay.propTypes = {
  bikes: PropTypes.array
};

const mapStateToProps = state => {
  let bikes;

  if (!state.search[1].isFetching) {
    bikes = state.search[1].stolenBikes;
  } else {
    bikes = [];
  }
  return {
    bikes
  };

};

export default connect(mapStateToProps)(BikeListDisplay);
