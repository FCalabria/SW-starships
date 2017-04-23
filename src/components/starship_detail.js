import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchStarshipDetail } from '../actions/index';
import ManufacturerLogo from '../containers/manufacturer_logo';
import DetailsTable from '../containers/details_table';
import '../styles/detail.less';

class StarshipDetail extends Component {
  constructor(props) {
    super(props);
    this.ID = props.match.params.id
    this.starship = {};
  }

  componentWillMount() {
    this.props.fetchStarshipDetail(this.ID);
  }

  componentWillReceiveProps(nextProps) {
    this.starship = nextProps.starships.detail;
  }

  render() {
    return (
      <div className="starship-detail">
        <div>
          <h1>{this.starship.name}</h1>
          <p>{this.starship.model}</p>
          <ManufacturerLogo data={this.starship.manufacturer}/>
        </div>
        <DetailsTable data={this.starship}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStarshipDetail }, dispatch);
}

function mapStateToProps({ starships }) {
  return { starships };
}

export default connect(mapStateToProps, mapDispatchToProps)(StarshipDetail);