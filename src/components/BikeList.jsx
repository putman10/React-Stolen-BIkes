import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BikeList = () => {

  return (
    <div>

    </div>
  );
};

BikeList.propTypes = {
  bikes: PropTypes.object,
  title: PropTypes.string
};

const mapStateToProps = state => {
  let info;
  console.log(state);
  const bikes = state.search[1];
  if (!state.search[1]) {
    info = {
      title: ''
    };
  } else {
    info = {
      title: ''
    };
  }
  return {
    bikes: info
  };

};

export default connect(mapStateToProps)(BikeList);
