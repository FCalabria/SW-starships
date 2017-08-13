import React, { Component } from 'react';
import axios from 'axios';
import StarshipsList from './starships_list';
import LoadMore from '../components/load_more';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starships: [],
      next: ''
    };
  }
  fetchStarships(nextUrl) {
    const ROOT_URL = 'https://swapi.co/api/starships/';
    const url = nextUrl || ROOT_URL;
    return axios.get(url)
      .then(response => this.setState({
        starships: [...this.state.starships, ...response.data.results],
        next: response.data.next
      }));
  }
  componentWillMount() {
    if (this.state.starships.length === 0) {
      this.fetchStarships();
    }
  }

  render() {
    return (
      <div>
        <StarshipsList starships={this.state.starships} />
        <LoadMore next={this.state.next} fetchStarships={this.fetchStarships.bind(this)} />
      </div>
    );
  }
}