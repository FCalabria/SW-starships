import React, { Component } from 'react';
import StarshipsList from './starships_list';
import LoadMore from '../components/load_more';

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