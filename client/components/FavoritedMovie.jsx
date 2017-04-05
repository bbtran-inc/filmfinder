import React, { Component } from 'react';

export default class FavoritedMovie extends Component {
  render() {
    const { title, poster } = this.props;
    return (
    <div className="favorites-card">
      <h3 className="favorites-card-header">{title}</h3>
      <div className="favorites-card-img"><img src={poster} alt={title} /></div>
    </div>
    );
  }
}

FavoritedMovie.propTypes = {
  title: React.PropTypes.string,
  poster: React.PropTypes.string,
};
