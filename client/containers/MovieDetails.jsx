import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchByTitle } from '../actions/index';
import { TitleBar } from '../components/TitleBar';
class MovieDetails extends Component {
  render() {
    console.log('movie:', this.props.movie);
    return (
      <div className="movieData-wrapper">
        <div className="movieInfo">
          <img className="movieImg" alt="" src={this.props.movie.Poster} />
          <div className="titleBar-wrapper">
            <div className="ratings-wrapper"></div>
            <TitleBar
              title={this.props.movie.Title}
              rated={this.props.movie.Rated}
              runtime={this.props.movie.Runtime}
              genre={this.props.movie.Genre}
              released={this.props.movie.Released}
            />
          </div>
          <div className="mainContent"> Plot: {this.props.movie.Plot} </div>
          <div> Rating: {this.props.movie.imdbRating} </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ movie }) {
  return { movie };
}
export default connect(mapStateToProps, { searchByTitle })(MovieDetails);
