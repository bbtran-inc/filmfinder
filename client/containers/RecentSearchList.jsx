import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecentSearchItem from '../components/RecentSearchItem';

class RecentSearchList extends Component {
  render() {
    const resultList = this.props.recentSearches.map((item) => {
      return <RecentSearchItem searchPhrase={item} />;
    }, this);
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
};

export default connect(mapStateToProps)(RecentSearchList);
