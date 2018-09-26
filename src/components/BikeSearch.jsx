import React from 'react';
import { fetchBikeId } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function BikeSearch(props){
  let searchStyle = {
    marginBottom: '1rem'
  };
  let inputStyle = {
    width: '98%',
    padding: '10px 7px',
    fontSize: '15px',
    borderRadius: '5px',
    border: '1px solid black',
    marginLeft: '-5px'
  };
  let input;

  return (
    <div style={searchStyle}>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value) {
          return;
        }
        props.dispatch(fetchBikeId(input.value));
        input.value = '';
      }}>
        <input style={inputStyle} placeholder="97138..." ref={node => {
          input = node;
        }}></input>
        <button className="buttonStyle">Search</button>
        <style jsx>
          {`
          .buttonStyle {
            background-color: #00b0ff;
            color: white;
            width: 200px;
            padding: 10px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #0091ea;
            margin-top: 12px;
            font-weight: 700;
            text-transform: uppercase;
          }
          .buttonStyle:hover {
            background-color: #0091ea;
          }
        `}
        </style>
      </form>
    </div>
  );
}

BikeSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(BikeSearch);
