import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'; // import all methods from index directory
import { TitleBar } from '../components/TitleBar';
import { Content } from '../components/Content';
class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  componentWillMount() {
    if (this.props.movie.Response === 'True') {
      this.props.setRecentSearch(this.props.searchTerm);
    } else {
      console.log('INVALID SEARCH: Not Stored to Recent Searches');
    }
  }

  componentDidMount() {
    this.checkFavoritesState();
  }

  componentDidUpdate() {
    this.checkFavoritesState();
  }
  componentWillReceiveProps (nextProps) {
    console.log('nextProps:', nextProps);
    if (nextProps.movie.Response === 'True' && this.props.movie.imdbID !== nextProps.movie.imdbID) {
      this.props.setRecentSearch(this.props.searchTerm);
    } else {
      console.log('INVALID SEARCH: Not Stored to Recent Searches');
    }
  }

  checkFavoritesState() {
    const { Title, imdbID, Poster, Rated } = this.props.movie;
    const { favoritesList } = this.props;
    if (favoritesList.hasOwnProperty(Title)) {
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
    console.log('movie:', this.props);
    return (
      <div className="movieData-wrapper">
        <div className="movieInfo">
          <div className="titleBar-wrapper">
            <input type="checkbox" id="favorite-checkbox" value="favorite" onChange={this.handleCheckBox} />
            <div className="ratings-wrapper">
              <div>
                Rating: {this.props.movie.imdbRating}
              </div>
            </div>
            <TitleBar
              title={this.props.movie.Title}
              rated={this.props.movie.Rated}
              runtime={this.props.movie.Runtime}
              genre={this.props.movie.Genre}
              released={this.props.movie.Released}
            />
          </div>
          <Content
            plot={this.props.movie.Plot}
            director={this.props.movie.Director}
            poster={this.props.movie.Poster}
            writer={this.props.movie.Writer}
            actors={this.props.movie.Actors}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ movie, favoritesList, searchTerm }) {
  return { movie, favoritesList, searchTerm };
}

export default connect(mapStateToProps, actions)(MovieDetails);
