import React from 'react';
import { fetchBikeId } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function BikeSearch({ dispatch }){
  let input;
  console.log(input);
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value) {
          return;
        }
        dispatch(fetchBikeId(input.value));
        input.value = '';
      }}>
        <input placeholder="Search Zipcode..." ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>
    </div>
  );
}

BikeSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(BikeSearch);
