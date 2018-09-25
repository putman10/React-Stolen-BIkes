import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export function fetchBikeId(zip) {
  return function(dispatch){
    const localSearchId = v4();
    dispatch(requestLatLong(zip, localSearchId));
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + zip + '&key=' + API_KEY).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      if (json.results.length > 0) {
        const lat = json.results[0].geometry.location.lat;
        const lng = json.results[0].geometry.location.lng;
        fetchStolenBikes(lat, lng, zip, localSearchId, dispatch);
      } else {
        console.log('Please enter a valid Zip Code');
      }
    });
  };
}

export function fetchStolenBikes(lat, lng, zip, localSearchId, dispatch) {
  return fetch('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity=' + lat + ',' + lng + '&proximity_square=10').then(
    response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(function(json) {
    const stolenBikes = json.bikes;
    dispatch(receiveStolenBikes(localSearchId, zip, lat, lng, stolenBikes));
  });
}

export const requestLatLong = (zip, localSearchId) => ({
  type: types.REQUEST_LATLONG,
  zip,
  searchId: localSearchId
});

export const receiveStolenBikes = (localSearchId, zip, lat, lng, stolenBikes) => ({
  type: types.RECEIVE_STOLENBIKES,
  searchId: localSearchId,
  zip,
  lat,
  lng,
  stolenBikes,
  receivedAt: Date.now()
});
