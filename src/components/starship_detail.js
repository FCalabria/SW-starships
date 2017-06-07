import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchStarshipDetail } from '../actions/index';
import { fetchPhotos } from '../actions/index';
import ManufacturerLogo from '../containers/manufacturer_logo';
import DetailsTable from '../containers/details_table';
import Starship from '../classes/starship.js';

import '../styles/detail.less';

class StarshipDetail extends Component {
  constructor(props) {
    super(props);
    this.props;
    this.ID = props.match.params.id;
    this.defineStarship();
  }

  componentWillMount() {
    this.props.fetchStarshipDetail(this.ID);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.starship.name) {
      this.defineStarship(nextProps.starships.detail);
    }
  }

  defineStarship(data) {
    this.starship = new Starship(data);
    if (this.starship.name) {
      this.props.fetchPhotos(this.starship.name);
    }
  }

  render() {
    return (
      <div className="starship-detail">
        <div className="detail-header">
          <h1>{this.starship.name}</h1>
          <p>{this.starship.model}</p>
        </div>
        <ManufacturerLogo data={this.starship.manufacturer}/>
        <DetailsTable data={this.starship}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStarshipDetail, fetchPhotos}, dispatch);
}

function mapStateToProps({ starships, googleData }) {
  return { starships, googleData };
}

export default connect(mapStateToProps, mapDispatchToProps)(StarshipDetail);