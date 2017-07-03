import React from 'react';
import LevelBar from './level_bar';

export default ({data}) => {
  if (!data || !data.getCost) return (<div>Loading...</div>);
  return (
    <div className="details-content">
      <p className="name-label full-width">Cost: <span className="level-value">{data.getCost()}</span></p>
      <LevelBar name="MGLT" min="10" max="120" level={data.MGLT} />
      <LevelBar name="Hyperdrive rating" min="6" max="0.5" level={data.hyperdrive_rating} />
      <LevelBar name="Atmos speed" min="0" max="8000" level={data.max_atmosphering_speed} unit="km/h"/>
      <LevelBar name="Crew" min="1" max="342953" level={data.crew} />
      <LevelBar name="Passengers" min="0" max="843342" level={data.passengers} />
      <LevelBar name="Length" min="5.47" max="120000" level={data.length} unit="m"/>
      <LevelBar name="Cargo capacity" min="40" max="1000000000000" level={data.cargo_capacity} unit="kg"/>
      <LevelBar name="Consumables" min="0.62" max="2190" level={data.getConsumablesInDays()} unit=" days" />
    </div>);
}