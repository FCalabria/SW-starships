import React, { Component } from 'react';
import axios from 'axios';
import ManufacturerLogo from '../containers/manufacturer_logo';
import DetailsTable from '../containers/details_table';
import Carousel from '../containers/carousel';
import Starship from '../classes/starship.js';

import '../styles/detail.less';

export default class StarshipDetail extends Component {
  constructor(props) {
    super(props);
    this.props;
    this.ID = props.match.params.id;
    this.state = {
      starship: {},
      photos: []
    };
  }

  fetchPhotos(searchTerm) {
    const GOOGLE_URL = 'https://www.googleapis.com/customsearch/v1'
    const KEY = 'AIzaSyD9k-K9U9RWMzbCv3gTy_SFXZAWy1GjIsQ';
    const CX = '010600706209839140863:tp5xiakrasi';
    return axios.get(`${GOOGLE_URL}?key=${KEY}&cx=${CX}&q=${searchTerm}&fileType=png+jpg`)
      .then(result => result.data.items
        .filter(photo => photo.pagemap && _.isArray(photo.pagemap.cse_thumbnail))
        .map(photo => photo.pagemap.cse_thumbnail[0])
      );
  }

  fetchStarshipDetail(id) {
    const ROOT_URL = 'http://swapi.co/api/starships/';
    return axios.get(`${ROOT_URL}${id}/`)
      .then(result => this.setState({
        photos: this.state.photos,
        starship: new Starship(result.data)
      }))
      .then(() => {
        if (this.state.starship.name) {
          return this.fetchPhotos(this.state.starship.name);
        }
      })
      .then((photos) => this.setState({
        starship: this.state.starship,
        photos: photos
      }));
  }

  componentWillMount() {
    this.fetchStarshipDetail(this.ID);
  }

  render() {
    return (
      <div className="starship-detail">
        <div className="detail-header">
          <div className="header-texts">
            <h1>{this.state.starship.name}</h1>
            <p>{this.state.starship.model}</p>
            <span className="logos-text">Manufacturer: {this.state.starship.manufacturer}</span>
          </div>
          <ManufacturerLogo data={this.state.starship.manufacturer} />
        </div>
        <Carousel data={this.state.photos} />
        <DetailsTable data={this.state.starship} />
      </div>
    );
  }
}