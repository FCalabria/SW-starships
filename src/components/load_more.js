import React, { Component } from 'react'

class LoadMore extends Component {

  loadMore() {
    this.props.fetchStarships(this.props.starships.next);
  }

  render() {
    if (this.props.starships.next) {
      return (
        <button className="load-more" onClick={this.loadMore.bind(this)}>
          Load more
        </button>
      );
    } else {
      return null;
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchStarships}, dispatch);
}

function mapStateToProps({starships}) {
  return {starships};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore);