import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import albums from "./countries";

export default combineReducers({
  routing: routerReducer,
  albums
});
