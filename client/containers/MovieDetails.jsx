import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'; // import all methods from index directory
import TitleBar from './TitleBar';
import { Content } from '../components/Content';
class MovieDetails extends Component {
  componentWillMount() {
    if (this.props.movie.Response === 'True') {
      this.props.setRecentSearch(this.props.searchTerm);
    } else {
      console.log('INVALID SEARCH: Not Stored to Recent Searches');
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps:', nextProps);
    if (nextProps.movie.Response === 'True' && this.props.movie.imdbID !== nextProps.movie.imdbID) {
      this.props.setRecentSearch(this.props.searchTerm);
    } else {
      console.log('INVALID SEARCH: Not Stored to Recent Searches');
    }
  }
  render() {
    console.log('movie:', this.props);
    return (
      <div className="movieData-wrapper">
        <div className="movieInfo">
          <div className="titleBar-wrapper">
            <TitleBar
              rating={this.props.movie.imdbRating}
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

MovieDetails.propTypes = {
  movie: React.PropTypes.object,
  searchTerm: React.PropTypes.string,
  setRecentSearch: React.PropTypes.func,
};

export default connect(mapStateToProps, actions)(MovieDetails);
