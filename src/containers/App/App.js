import React, { Component } from 'react';
import Search from "../Search/Search";
import './App.css';
import CountriesList from "../CountriesList/CountriesList";

class App extends Component {
  render() {
    return (
      <div className="container-app container">
        <Search/>
        <CountriesList/>
      </div>
    );
  }
}

export default App;
