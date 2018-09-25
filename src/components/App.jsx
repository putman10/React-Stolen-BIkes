import React from 'react';
import Header from './Header';
import BikeList from './BikeList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function App({searchResults}){
  if(searchResults){
    return (
      <div>
        <Header />
          <BikeList />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
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
