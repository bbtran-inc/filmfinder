import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoritesList extends Component {

  render() {
    return (
      <div className="favorites-container">
        <div className="favorites"></div>
      </div>
    );
  }
}

function mapStateToProps({ favoritesList }) {
  return { favoritesList };
}
export default connect(mapStateToProps)(FavoritesList);
