import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchByTitle } from '../actions/index';
import { TitleBar } from '../components/TitleBar';
import { Content } from '../components/Content';
class MovieDetails extends Component {
  render() {
    console.log('movie:', this.props.movie);
    return (
      <div className="movieData-wrapper">
        <div className="movieInfo">
          <div className="titleBar-wrapper">
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
function mapStateToProps({ movie }) {
  return { movie };
}
export default connect(mapStateToProps, { searchByTitle })(MovieDetails);
