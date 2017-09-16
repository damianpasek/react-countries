import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Card, CardText, TextField} from "material-ui";
import {fetch} from "../../actions/countries/countries";
import {debounce} from 'lodash';
import './Search.css';

class Search extends React.Component {
  static PropTypes = {
    fetch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.fetch = debounce(this.props.fetch, 300);
  }

  handleChange = event => {
    const text = event.target.value;
    this.setState({text}, () => {this.fetch(text)});
  };

  render() {
    return (
      <div className="container-search">
        <Card>
          <CardText>
            <TextField
              floatingLabelText="Search..."
              hintText="Enter some country name"
              onChange={this.handleChange}
              fullWidth={true} />
          </CardText>
        </Card>
      </div>
    )
  }
}

export default connect(null, {fetch})(Search);
