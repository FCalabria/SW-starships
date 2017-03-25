import React, { Component } from 'react';
import StarshipsList from '../containers/starships_list';
import LoadMore from '../components/load_more';
import {bindActionCreators} from 'redux';
import {fetchStarships} from '../actions/index';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchStarships();
  }
  render() {
    return (
      <div>
        <StarshipsList />
        <LoadMore/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchStarships}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);