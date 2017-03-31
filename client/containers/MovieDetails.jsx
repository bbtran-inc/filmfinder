import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {
  render() {
    console.log('movie:', this.props.movie);
    return (
      <div>
        {this.props.movie.title}
      </div>
    );
  }
}

function mapStateToProps({ movie }) {
  return { movie };
}


export default connect(mapStateToProps)(MovieDetails);
