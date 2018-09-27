import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function SavedSearches(props){
    console.log(Object.keys(props.savedSearches).length)

  if (Object.keys(props.savedSearches).length > 0) {
    return (
      <div>
        <h1>Saved Searches:</h1>
        <p>TEst 1</p>
      </div>
    );
  } else{
    return (
      <div>
        <p>test</p>
      </div>
    );
  }
}

SavedSearches.propTypes = {
  savedSearches: PropTypes.object
};

const mapStateToProps = state => {
  let savedSearches = state.savedSearch;
  return {
    savedSearches
  };
};

export default connect(mapStateToProps)(SavedSearches);
