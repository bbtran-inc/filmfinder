import React from 'react';

export const RecentSearchItem = (props) => {
  return (
    <li><a href="/" onClick={() => console.log('hello')}><span>{props.searchPhrase}</span></a></li>
  );
};

RecentSearchItem.propTypes = {
  onSomeEvent: React.PropTypes.func,
  searchPhrase: React.PropTypes.string,
};

