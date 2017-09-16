import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Card, CardHeader, Dialog} from "material-ui";
import './CountryDetails.css';

export class CountryDetails extends React.Component {
  static PropTypes = {
    country: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  renderRow(label, item) {
    const text = Array.isArray(item) ? item.join(', ') : item;
    return <div>{`${label}: ${text}`}</div>
  }

  renderModal() {
    const {name, capital, region, currencies, languages, timezones, flag} = this.props.country;

    return (
      <div>
        <Dialog
          title={name}
          modal={false}
          open={this.state.isModalOpen}
          onRequestClose={() => this.setState({isModalOpen: false})}>

          <div className="row">
            <div className="col-md-4">
              <img style={{width: '200px'}} src={flag} alt=""/>
            </div>
            <div className="col-md-8">
              {this.renderRow('Capital', capital)}
              {this.renderRow('Region', region)}
              {this.renderRow('Currencies', currencies.map(currency => `${currency.name} (${currency.symbol})`))}
              {this.renderRow('Languages', languages.map(lang => lang.name))}
              {this.renderRow('Timezones', timezones)}
            </div>

          </div>
        </Dialog>
      </div>
    )
  }

  render() {
    const {country} = this.props;

    return (
      <div className="component-country-details" onClick={() => this.setState({isModalOpen: true})}>
        <Card>
          <CardHeader
            title={country.name}
            subtitle={country.region}
            avatar={<Avatar src={country.flag} backgroundColor="#fff" />} />
        </Card>
        {this.renderModal()}
      </div>
    )
  }
}
