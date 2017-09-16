import React from 'react';
import {Card, CardText, CardTitle, Chip, Dialog} from "material-ui";

class CountryDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  renderModal() {
    const {name, capital, region, currencies} = this.props.country;

    return (
      <div>
        <Dialog
          title={name}
          modal={false}
          open={this.state.isModalOpen}
          onRequestClose={() => this.setState({isModalOpen: false})}>

          <Chip>Capital: {capital}</Chip>


        </Dialog>
      </div>
    )
  }

  render() {
    const {country} = this.props;

    return (
      <div className="component-country-details">
        <Card onClick={() => this.setState({isModalOpen: true})}>
          <CardTitle title={country.name} />
          <CardText>
            <pre>
              {JSON.stringify(country, null, 2)}
            </pre>
          </CardText>
        </Card>
        {this.renderModal()}
      </div>
    )
  }
}

export default CountryDetails;
