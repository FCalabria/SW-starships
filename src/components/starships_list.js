import React, {Component} from 'react';
import {connect} from 'react-redux';
import StarshipCard from '../containers/starship_card';

class StarshipsList extends Component {

  renderStarship(starship) {
    return (<StarshipCard key={starship.url} data={starship}/>);
  }

  render() {
    return(
      <div className="starships-list">
          {this.props.starships.results.map(this.renderStarship)}
      </div>
    );
  }
}

function mapStateToProps({starships}) {
  return {starships};
}

export default connect(mapStateToProps)(StarshipsList);