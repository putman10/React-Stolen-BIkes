import constants from './../constants';
const { initialState, types } = constants;

const latLongReducer = (state = initialState.latLong, action) => {
  let newSearchResultByZip;
  let newSearchResultByZipStateSlice;

  switch (action.type) {
    case types.REQUEST_LATLONG:
            newSearchResultByZip = {
              isFetching: true,
              zip: action.zip,
              searchId: action.searchId
            };
            newSearchResultByZipStateSlice = Object.assign({}, state, {
              [action.searchId]: newSearchResultByZip
            });
            return newSearchResultByZipStateSlice;

          default:
            return state;

      case types.RECEIVE_STOLENBIKES:
              newSearchResultByZip = {
                isFetching: false,
                zip: action.zip,
                searchId: action.searchId,
                lat: action.lat,
                lng: action.lng,
                stolenBikes: action.stolenBikes,
                receivedAt: action.receivedAt
              };
              newSearchResultByZipStateSlice = Object.assign({}, state, {
                [action.searchId]: newSearchResultByZip
              });
              return newSearchResultByZipStateSlice;

        }
};

export default latLongReducer;
