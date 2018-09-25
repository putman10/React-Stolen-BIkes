import React from 'react';
import Header from './Header';
import BikeListDisplay from './BikeList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bImage from '../assets/hypnotize.png';

function App({searchResults}){
  if(searchResults){
    return (
      <div>
        <Header />
        <BikeListDisplay />
        <style jsx global>
        {`
          body {
            background-image: url(${bImage})
          }
        `}
      </style>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <style jsx global>
        {`
          body {
            background-image: url(${bImage})
          }
        `}
      </style>
      </div>
    );
  }
}

App.propTypes = {
  searchResults: PropTypes.object
};

const mapStateToProps = state => {
  return {
    searchResults: state.search[1]
  };
};

export default connect(mapStateToProps)(App);
