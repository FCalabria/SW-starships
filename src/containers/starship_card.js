import React from 'react';
import {Link} from 'react-router-dom';
import Starship from '../classes/starship.js';

export default ({data}) => {
  data = new Starship(data);

  return (
    <div className="starship-card">
      <div className="sc-name"><h3>{data.name}</h3></div>
      <div className="sc-model">{data.model}</div>
      <div className="sc-cost"><h4>Cost</h4> {data.getCost()}</div>
      <div className="sc-length"><h4>Length</h4> {data.length}m</div>
      <div className="sc-speed"><h4>Speed (atm/hyperdrive)</h4> {data.max_atmosphering_speed} - {data.hyperdrive_rating}</div>
      <Link to={`/detail/${data.ID}`} className="sc-link">+</Link>
    </div>);
}