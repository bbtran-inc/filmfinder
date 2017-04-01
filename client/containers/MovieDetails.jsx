import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchByTitle } from '../actions/index';
class MovieDetails extends Component {
  componentWillMount() {
    this.props.searchByTitle('logan');
  }

  render() {
    console.log('movie:', this.props.movie);
    return (
      <div>
        {this.props.movie.Title}
      </div>
    );
  }
}
function mapStateToProps({ movie }) {
  return { movie };
}
export default connect(mapStateToProps, { searchByTitle })(MovieDetails);
