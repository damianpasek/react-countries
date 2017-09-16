import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import CountryDetails from "../../components/CountryDetails/CountryDetails";

class CountriesList extends React.Component {
  static PropTypes = {
    countries: PropTypes.array
  };

  render() {
    const {countries} = this.props;
    return (
      <div className="container-albums-list">
        {countries.map((country, index) => <CountryDetails key={index} country={country}/>)}
      </div>
    )
  }
}

export default connect(
  (state, props) => (
    {
      countries: [
        {title: "The miracle"},
        {title: "Jazz"}
      ]
    }
  )
)(CountriesList);
