import React, { Component } from 'react'

export default class LoadMore extends Component {

  loadMore() {
    this.props.fetchStarships(this.props.next);
  }

  render() {
    if (this.props.next) {
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
