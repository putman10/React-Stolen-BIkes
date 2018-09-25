import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BikeListDisplay = ({ dispatch, bikes }) => {
  const {title} = bikes;
console.log(bikes[0].title);
console.log(array);
  return (
    <div>
      <p>test</p>
    </div>
  );
};

BikeListDisplay.propTypes = {
  bikes: PropTypes.array,
  title: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  let info;
  const bike = state.search[1];
  if (!state.search[1].isFetching) {
    info = {
      bikes: bike.stolenBikes
    };
  } else {
    info = {
      bikes: ''
    };
  }
  return {
    bikes: info
  };
};

export default connect(mapStateToProps)(BikeListDisplay);
