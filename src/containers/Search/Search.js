import React from 'react';
import {connect} from "react-redux";
import {Card, CardText, TextField} from "material-ui";
import './Search.css';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  }

  render() {
    return (
      <div className="container-search">
        <Card>
          <CardText>
            <TextField
              floatingLabelText="Search..."
              hintText="Enter some artist name"
              onChange={this.handleChange}
              fullWidth={true} />
          </CardText>
        </Card>
      </div>
    )
  }
}

export default connect(
  (state, props) => ({
  }),
  {}
)(Search);