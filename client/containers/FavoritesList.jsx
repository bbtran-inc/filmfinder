import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoritedMovie from '../components/FavoritedMovie';

class FavoritesList extends Component {
  render() {
    const { favoritesList } = this.props;
    const movieList = Object.keys(favoritesList).map((favItem) => (
      <FavoritedMovie title={favItem} poster={favoritesList[favItem].poster} />
    ));
  return (
      <div className="favorites-container">
        <header className="favorites-header">
          <h2>Your Saved Favorites</h2>
        </header>
        <div className="favorites">
          {movieList}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ favoritesList }) {
  return { favoritesList };
}

FavoritesList.propTypes = {
  favoritesList: React.PropTypes.object,
};

export default connect(mapStateToProps)(FavoritesList);
