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
          <li className="subtext-list-item"><strong>IMDB Rating:</strong> &nbsp; {props.rating} | &nbsp;</li>
          <li className="subtext-list-item"><strong>Rated:</strong> &nbsp; {props.rated} | &nbsp;</li>
          <li className="subtext-list-item"><strong>Runtime:</strong> &nbsp; {props.runtime} | &nbsp;</li>
          <li className="subtext-list-item"><strong>Genre:</strong> &nbsp; {props.genre} | &nbsp;</li>
          <li className="subtext-list-item"><strong>Release Date:</strong> &nbsp; {props.released}</li>
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
