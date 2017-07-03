import React, {Component} from 'react';
import StarshipCard from '../containers/starship_card';

export default class StarshipsList extends Component {

  renderStarship(starship) {
    return (<StarshipCard key={starship.url} data={starship}/>);
  }

  render() {
    return(
      <div className="starships-list">
          {this.props.starships.map(this.renderStarship)}
      </div>
    );
  }
}