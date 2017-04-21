import React, { Component } from 'react';
import StarshipsList from '../containers/starships_list';
import LoadMore from '../components/load_more';
import {bindActionCreators} from 'redux';
import {fetchStarships} from '../actions/index';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.starships.results.length === 0) {
      this.props.fetchStarships();
    }
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

function mapStateToProps({starships}) {
  return {starships};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);