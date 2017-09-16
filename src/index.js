import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store'
import {Router, browserHistory} from "react-router";
import {syncHistoryWithStore} from 'react-router-redux'
import routes from "./routes";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from './theme';


const state = window.__initialState__ || undefined;
const store = configureStore(browserHistory, state);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        {routes(store)}
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
