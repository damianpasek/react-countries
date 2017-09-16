import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import countries from "./countries/countries";

export default combineReducers({
  routing: routerReducer,
  countries
});
