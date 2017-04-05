import React from 'react';

export const RecentSearchItem = (props) => {
  return (
    <li onClick={props.onSomeEvent}><a href="/"><span>{props.searchPhrase}</span></a></li>
  );
};

RecentSearchItem.propTypes = {
  onSomeEvent: React.PropTypes.func,
  searchPhrase: React.PropTypes.string,
};

