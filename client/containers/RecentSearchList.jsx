import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { RecentSearchItem } from '../components/RecentSearchItem';

class RecentSearchList extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent(item) {
    this.props.searchByTitle(item);
  }
  render() {
    const resultList = this.props.recentSearches.map((item) => {
      return <RecentSearchItem searchPhrase={item} onSomeEvent={this.handleEvent(item)} />;
    });
    return (
      <ul className="results">
        <li><a href="/"><span>YOUR RECENT SEARCHES</span></a></li>
        {resultList}
      </ul>
    );
  }
}

function mapStateToProps({ recentSearches }) {
  return { recentSearches };
}

RecentSearchList.propTypes = {
  recentSearches: React.PropTypes.array,
  searchByTitle: React.PropTypes.func,
};

export default connect(mapStateToProps, actions)(RecentSearchList);
