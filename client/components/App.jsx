import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieDetails from '../containers/MovieDetails';
import Search from '../containers/Search';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-fluid">
          <h1>FilmFinder</h1>
          <Search />
          {/* if no movie is present in store then render empty div*/}
          { this.props.movie.Title === undefined ? <div></div> : <MovieDetails />  }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ movie }) {
  return { movie };
}

export default connect(mapStateToProps)(App);
