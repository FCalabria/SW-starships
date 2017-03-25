import React from 'react';
import _ from 'lodash';

export default ({data}) => {

  function getCost(credits) {
    return credits === 'unknown' ? '---' : parseCurrency(credits);
  }

  function parseCurrency(credits) {
    var array = _.reverse(credits.split(''));
    for (var i = 3; i < array.length; i = i + 4) {
      array.splice(i, 0, ',');
    }
    return _.reverse(array).join('') + ' Cr';
  }
  return (
    <div className="starship-card">
      <div className="sc-name"><h3>{data.name}</h3></div>
      <div className="sc-model">{data.model}</div>
      <div className="sc-cost"><h4>Cost</h4> {getCost(data.cost_in_credits)}</div>
      <div className="sc-length"><h4>Length</h4> {data.length}m</div>
      <div className="sc-speed"><h4>Speed</h4> {data.max_atmosphering_speed} - {data.hyperdrive_rating} HR</div>
    </div>);
}