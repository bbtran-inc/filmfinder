import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { TitleBarItems } from '../components/TitleBarItems';

class TitleBar extends Component {
  constructor(props) {
    super(props);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }
  componentDidMount() {
    this.checkFavoritesState();
  }
  componentDidUpdate() {
    this.checkFavoritesState();
  }
  checkFavoritesState() {
    const { favoritesList } = this.props;
    if (favoritesList.hasOwnProperty(this.props.title)) {
      document.getElementById('favorite-checkbox').checked = true;
    } else {
      document.getElementById('favorite-checkbox').checked = false;
    }
  }
  handleCheckBox() {
    const { Title, imdbID, Poster, Rated } = this.props.movie;
    const checked = document.getElementById('favorite-checkbox').checked;
    if (checked) {
      this.props.setFavorite(Title, imdbID, Poster, Rated);
    } else {
      this.props.removeFavorite(Title);
    }
  }
  render() {
    return (
      <div className="titleBar">
        <div className="title-wrapper">
          <div className="favorite">
            <input type="checkbox" id="favorite-checkbox" value="favorite" className="glyphicon glyphicon-star-empty" onChange={this.handleCheckBox} />
          </div>
          <h3 className="title-header">{this.props.title}</h3>
        </div>
        <TitleBarItems
          rated={this.props.rated}
          rating={this.props.rating}
          runtime={this.props.runtime}
          genre={this.props.genre}
          released={this.props.released}
        />
      </div>
    );
  }
}

function mapStateToProps({ movie, favoritesList }) {
  return { movie, favoritesList };
}

TitleBar.propTypes = {
  favoritesList: React.PropTypes.object,
  setFavorite: React.PropTypes.func,
  removeFavorite: React.PropTypes.func,
  movie: React.PropTypes.object,
  rating: React.PropTypes.string,
  title: React.PropTypes.string,
  rated: React.PropTypes.string,
  runtime: React.PropTypes.string,
  genre: React.PropTypes.string,
  released: React.PropTypes.string,
};

export default connect(mapStateToProps, actions)(TitleBar);
