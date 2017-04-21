import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class StarshipDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.id);
  }

  render() {
    return (
      <div>
        Hello you
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(null, dispatch);
}

export default connect(null)(StarshipDetail);