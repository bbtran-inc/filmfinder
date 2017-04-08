import React from 'react';
// import { connect } from 'react-redux';

export const TitleBar = (props) => {
  return (
    <div className="titleBar">
      <div className="title-wrapper">
        <h3 className="title-header">{props.title}</h3>
      </div>
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
    </div>
  );
};

TitleBar.propTypes = {
  rating: React.PropTypes.string,
  title: React.PropTypes.string,
  rated: React.PropTypes.string,
  runtime: React.PropTypes.string,
  genre: React.PropTypes.string,
  released: React.PropTypes.string,
};
