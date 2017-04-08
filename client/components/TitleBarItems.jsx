import React from 'react';

export const TitleBarItems = (props) => {
  return (
    <div className="subtext-wrapper">
      <ul className="subtext-list">
        <li className="subtext-list-item">
          <div className="subtext-list-item-header">
            <strong>IMDB Rating</strong>
          </div>
          <span>{props.rating}</span>
        </li>
        <li className="subtext-list-item">
          <div className="subtext-list-item-header">
            <strong>Rated</strong>
          </div>
          <span>{props.rated}</span>
        </li>
        <li className="subtext-list-item">
          <div className="subtext-list-item-header">
            <strong>Runtime</strong>
          </div>
          <span>{props.runtime}</span>
        </li>
        <li className="subtext-list-item">
          <div className="subtext-list-item-header">
            <strong>Genre</strong>
          </div>
          <span>{props.genre}</span>
        </li>
        <li className="subtext-list-item">
          <div className="subtext-list-item-header">
            <strong>Release Date</strong>
          </div>
            <span>{props.released}</span>
        </li>
      </ul>
    </div>
  );
};

TitleBarItems.propTypes = {
  rating: React.PropTypes.string,
  rated: React.PropTypes.string,
  runtime: React.PropTypes.string,
  genre: React.PropTypes.string,
  released: React.PropTypes.string,
};
