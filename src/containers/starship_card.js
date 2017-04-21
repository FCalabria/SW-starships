import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

export default ({data}) => {

  function getCost(credits) {
    return credits === 'unknown' ? '---' : parseCurrency(credits);
  }

  function parseCurrency(credits) {
    let array = _.reverse(credits.split(''));
    for (let i = 3; i < array.length; i = i + 4) {
      array.splice(i, 0, ',');
    }
    return _.reverse(array).join('') + ' Cr';
  }

  function getStarshipLink(originalUrl) {
    let id = originalUrl.match(/[0-9]+/g)[0];
    return `/detail/${id}`;
  }

  return (
    <div className="starship-card">
      <div className="sc-name"><h3>{data.name}</h3></div>
      <div className="sc-model">{data.model}</div>
      <div className="sc-cost"><h4>Cost</h4> {getCost(data.cost_in_credits)}</div>
      <div className="sc-length"><h4>Length</h4> {data.length}m</div>
      <div className="sc-speed"><h4>Speed (atm/hyperdrive)</h4> {data.max_atmosphering_speed} - {data.hyperdrive_rating}</div>
      <Link to={getStarshipLink(data.url)} className="sc-link">+</Link>
    </div>);
}