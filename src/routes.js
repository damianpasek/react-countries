import React from 'react'
import {IndexRoute, Route} from 'react-router'
import App from "./containers/App/App";

const routes = () => {
  return (
    <Route path={'/'}>
      <IndexRoute component={App}/>
    </Route>
  )
};

export default routes;
