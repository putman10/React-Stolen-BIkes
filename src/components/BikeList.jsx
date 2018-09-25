import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import placeholder from '../assets/placeholder.jpg';
import Loader from 'react-loader-spinner';

const BikeListDisplay = (props) => {
  console.log(props.bikes);
  console.log(props.bikes[1]);
  console.log(props.loader);

  return (
    <div>
      {props.loader}
      {props.bikes.map((bike, index) => (
        <div key={index}>
          <h1>{bike.title}</h1>
            <img src={bike.thumb != null ? bike.thumb : placeholder} alt={bike.title} />
          <p>Date Stolen: {bike.date_stolen}</p>
          <p>Serial #: {bike.serial}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

BikeListDisplay.propTypes = {
  bikes: PropTypes.array,
  loader: PropTypes.object
};

const mapStateToProps = state => {
  let bikes;
  let loader;

  if (!state.search[1].isFetching) {
    bikes = state.search[1].stolenBikes;
    loader;
  } else {
    bikes = [];
    loader = <Loader type="Ball-Triangle" color="#00BFFF" height="100" width="100" />;
  }
  return {
    bikes,
    loader
  };

};

export default connect(mapStateToProps)(BikeListDisplay);
