import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecentSearchList from './RecentSearchList';
import * as actions from '../actions/index';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTermOnChange = this.handleSearchTermOnChange.bind(this);
    this.handleSearchOnClick = this.handleSearchOnClick.bind(this);
  }

  handleSearchTermOnChange(event) {
    event.preventDefault();
    this.props.updateSearchTerm(event.target.value);
  }

  handleSearchOnClick(event) {
    event.preventDefault();
    this.props.searchByTitle(this.props.searchTerm);
  }

  render() {
    return (
      <div className="search-container">
        <form className="search" onSubmit={this.handleSearchOnClick}>
          <input
            placeholder="Search By Movie Title"
            onChange={this.handleSearchTermOnChange}
            value={this.props.searchTerm}
            type="text"
            className="search-input"
          />
          <button
            type="submit"
            className="search-button"
            onClick={this.handleSearchOnClick}
          >
          GO!
          </button>
          <RecentSearchList />
        </form>
      </div>
    );
  }
}

function mapStateToProps({ searchTerm, recentSearches }) {
  return { searchTerm, recentSearches };
}

Search.propTypes = {
  searchTerm: React.PropTypes.string,
  searchByTitle: React.PropTypes.func,
  updateSearchTerm: React.PropTypes.func,
};

export default connect(mapStateToProps, actions)(Search);
