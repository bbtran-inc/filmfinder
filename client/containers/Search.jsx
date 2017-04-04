import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchByTitle, updateSearchTerm } from '../actions/index';

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
      <div>
        <form onSubmit={this.handleSearchOnClick}>
          <input
            placeholder="Search By Movie Title"
            onChange={this.handleSearchTermOnChange}
            value={this.props.searchTerm}
            type="text"
          />
          <span className="input-group-btn">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSearchOnClick}
            >
            Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ searchTerm }) {
  return { searchTerm };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchByTitle, updateSearchTerm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
