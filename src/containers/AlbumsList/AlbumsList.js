import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import AlbumDetails from "../../components/AlbumDetails/AlbumDetails";

class AlbumsList extends React.Component {
  static PropTypes = {
    albums: PropTypes.array
  };

  render() {
    const {albums} = this.props;
    return (
      <div className="container-albums-list">
        {albums.map((album, index) => <AlbumDetails key={index} album={album}/>)}
      </div>
    )
  }
}

export default connect(
  (state, props) => (
    {
      albums: [
        {title: "The miracle"},
        {title: "Jazz"}
      ]
    }
  )
)(AlbumsList);
