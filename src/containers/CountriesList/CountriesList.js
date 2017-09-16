import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetch} from "../../actions/countries/countries";
import {countriesSelectors} from "../../selectors";
import {CountryDetails} from "../../components/CountryDetails/CountryDetails";
import {Card, CardTitle, CircularProgress} from "material-ui";
import './CountriesList.css';

class CountriesList extends React.Component {
  static PropTypes = {
    countries: PropTypes.array,
    fetch: PropTypes.func
  };

  componentWillMount() {
    this.props.fetch();
  }

  render() {
    const {countries} = this.props;
    const className = 'container-countries-list';

    if (countries && countries.loading) {
      return (
        <div className={`${className} loading`}>
          <CircularProgress size={60} thickness={7} />
        </div>
      )
    }

    if (countries && countries.error) {
      return (
        <div className={`${className} error`}>
          <Card>
            <CardTitle title="Error" subtitle={JSON.stringify(countries.error)} />
          </Card>
        </div>
      )
    }

    if (countries && countries.notFound) {
      return (
        <div className={`${className} not-found`}>
          <Card>
            <CardTitle title="Not found" />
          </Card>
        </div>
      )
    }

    if (countries) {
      return (
        <div className={className}>
          {countries.data.map((country, index) => <CountryDetails key={index} country={country}/>)}
        </div>
      )
    }

    return <div/>;
  }
}

export default connect(
  (state, props) => (
    {
      countries: countriesSelectors.getCountries(state)
    }
  ),
  {fetch}
)(CountriesList);
