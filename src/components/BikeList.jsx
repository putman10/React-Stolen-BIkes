import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BikeListDisplay = ({ dispatch, bike }) => {
  const { title } = bike;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

BikeListDisplay.propTypes = {
  bike: PropTypes.object,
  title: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  let info;
  const bike = state.search[1];
  if (!state.search[1].isFetching) {
    info = {
      title: bike.stolenBikes[1].title
    };
  } else {
    info = {
      title: ''
    };
  }
  return {
    bike: info
  };
};

export default connect(mapStateToProps)(BikeListDisplay);
