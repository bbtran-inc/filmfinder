import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchByTitle, updateSearchTerm } from '../actions/index';
class RecentSearchItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    this.props.searchByTitle(this.props.searchPhrase);
    this.props.updateSearchTerm(this.props.searchPhrase);
  }

  render() {
    return (
      <li><a href="/" onClick={this.handleClick}><span>{this.props.searchPhrase}</span></a></li>);
  }
}

RecentSearchItem.propTypes = {
  updateSearchTerm: React.PropTypes.func,
  searchByTitle: React.PropTypes.func,
  searchPhrase: React.PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchByTitle, updateSearchTerm }, dispatch);
}

export default connect(null, mapDispatchToProps)(RecentSearchItem);
