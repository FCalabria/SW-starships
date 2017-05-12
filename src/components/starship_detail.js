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
    this.ID = props.match.params.id
    this.photos = [];
    this.defineStarship();
    this.catchPhotos = this.catchPhotos.bind(this);
    this.handlePhotos = this.handlePhotos.bind(this);
  }

  componentWillMount() {
    this.props.fetchStarshipDetail(this.ID);
  }

  componentWillReceiveProps(nextProps) {
    this.defineStarship(nextProps.starships.detail);
  }

  defineStarship(data) {
    this.starship = new Starship(data);
    if (this.starship.name) {
      this.props.fetchPhotos(this.starship.name)
      .then(this.handlePhotos)
      .catch(this.catchPhotos);
    }
  }

  handlePhotos(data) {
    this.photos = data.items.map(item => item.pagemap.cse_thumbnail[0]);
  }

  catchPhotos(error) {
    this.photos = [{
      src: 'http://only-paper.ru/_nw/94/90619030.jpg',
      width: 520,
      height: 358
    }, {
      src: 'http://i.imgur.com/gzu2WyQ.jpg',
      width: 1400,
      height: 577
    }, {
      src: 'https://s-media-cache-ak0.pinimg.com/originals/1b/5f/b3/1b5fb3faeb3b13d7b8d6c3d7221e8328.jpg',
      width: 1280,
      height: 720
    }];
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

function mapStateToProps({ starships }) {
  return { starships };
}

export default connect(mapStateToProps, mapDispatchToProps)(StarshipDetail);