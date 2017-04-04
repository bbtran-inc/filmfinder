import React, { Component } from 'react';

export default class FavoritedMovie extends Component {
  render() {
    const { title, poster } = this.props;
    return (
    <div className="movieCard-wrapper">
      <h3 className="">{title}</h3>
      <div><img src={poster} alt={title} /></div>
    </div>
    );
  }
}

FavoritedMovie.propTypes = {
  title: React.PropTypes.string,
  poster: React.PropTypes.string,
};
