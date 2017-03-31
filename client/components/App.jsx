import React, { Component } from 'react';
import MovieDetails from '../containers/MovieDetails';
import Search from '../containers/Search';

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="app-container-fluid">
          Hello World in App
          <Search />
          <MovieDetails />
        </div>
      </div>
    );
  }
}

