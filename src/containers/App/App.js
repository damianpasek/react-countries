import React, { Component } from 'react';
import Search from "../Search/Search";
import './App.css';
import AlbumsList from "../AlbumsList/AlbumsList";

class App extends Component {
  render() {
    return (
      <div className="container-app container">
        <Search/>
        <AlbumsList/>
      </div>
    );
  }
}

export default App;
