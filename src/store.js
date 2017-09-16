import reducers from './reducers';
import {createStore, compose, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (history, initialState) => {
  return createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware
      ),
    )
  )
};
